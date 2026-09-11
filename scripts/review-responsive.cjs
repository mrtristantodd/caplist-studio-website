/* Read-only browser QA. Usage: PLAYWRIGHT_MODULE=/path/to/playwright node scripts/review-responsive.cjs <CDP websocket> */
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || "playwright");
const fs = require("node:fs");
const path = require("node:path");
(async () => {
  const browser = await chromium.connectOverCDP(process.argv[2]);
  const page = await browser.contexts()[0].newPage();
  const cdp = await page.context().newCDPSession(page);
  await cdp.send("Network.enable");
  await cdp.send("Network.setCacheDisabled", { cacheDisabled: true });
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));
  page.on("console", (m) => {
    if (m.type() === "error") errors.push(m.text());
  });
  await page.addInitScript(() => {
    window.__reviewMetrics = { lcp: 0, cls: 0 };
    new PerformanceObserver((l) => {
      for (const e of l.getEntries()) window.__reviewMetrics.lcp = e.startTime;
    }).observe({ type: "largest-contentful-paint", buffered: true });
    new PerformanceObserver((l) => {
      for (const e of l.getEntries())
        if (!e.hadRecentInput) window.__reviewMetrics.cls += e.value;
    }).observe({ type: "layout-shift", buffered: true });
  });
  const dir = path.resolve("docs/review");
  fs.mkdirSync(dir, { recursive: true });
  const report = {
    date: new Date().toISOString(),
    viewportResults: [],
    errors,
    interactions: {},
  };
  for (const width of [320, 375, 390, 430, 768, 1024, 1280, 1440, 1728]) {
    await page.setViewportSize({ width, height: width < 768 ? 844 : 1000 });
    await page.goto("http://127.0.0.1:3000/", { waitUntil: "networkidle" });
    await page.evaluate(() => document.fonts.ready);
    for (
      let y = 0;
      y < (await page.evaluate(() => document.body.scrollHeight));
      y += 900
    ) {
      await page.evaluate((y) => window.scrollTo(0, y), y);
      await page.waitForTimeout(55);
    }
    await page.waitForLoadState("networkidle");
    await page.evaluate(() => window.scrollTo(0, 0));
    const result = await page.evaluate(() => {
      const shown = (e) => {
        const r = e.getBoundingClientRect(),
          s = getComputedStyle(e);
        return (
          e.checkVisibility({ checkVisibilityCSS: true, checkOpacity: true }) &&
          r.width > 0 &&
          r.height > 0 &&
          s.visibility !== "hidden" &&
          s.display !== "none"
        );
      };
      const actionable = [...document.querySelectorAll("a,button,summary")]
        .filter(shown)
        .filter((e) => !e.classList.contains("skip-link"));
      const clippedControls = actionable
        .filter((e) => {
          const r = e.getBoundingClientRect();
          return r.left < -1 || r.right > innerWidth + 1;
        })
        .map((e) => e.textContent.trim());
      const brokenImages = [...document.images]
        .filter(shown)
        .filter((i) => !i.complete || i.naturalWidth === 0)
        .map((i) => i.currentSrc);
      const invalidAnchors = [...document.querySelectorAll('a[href^="#"]')]
        .filter((a) => !document.getElementById(a.hash.slice(1)))
        .map((a) => a.hash);
      const headlineOverflow = [...document.querySelectorAll("h1>span,h2")]
        .filter(shown)
        .filter((e) => e.scrollWidth > e.clientWidth + 1)
        .map((e) => e.textContent);
      const viewportTextOverflow = [...document.querySelectorAll("h1,h2,h3,p")]
        .filter(shown)
        .filter((e) => {
          const r = e.getBoundingClientRect();
          return r.left < -1 || r.right > innerWidth + 1;
        })
        .map((e) => e.textContent);
      return {
        width: innerWidth,
        documentWidth: document.documentElement.scrollWidth,
        horizontalOverflow: document.documentElement.scrollWidth > innerWidth,
        clippedControls,
        brokenImages,
        invalidAnchors,
        headlineOverflow,
        viewportTextOverflow,
        headings: document.querySelectorAll("main>section").length,
        animationCount: document.getAnimations().length,
        canvasCount: document.querySelectorAll("canvas").length,
        externalResources: performance
          .getEntriesByType("resource")
          .filter((e) => !e.name.startsWith(location.origin))
          .map((e) => e.name),
        metrics: window.__reviewMetrics,
      };
    });
    await page.screenshot({ path: path.join(dir, `static-${width}-hero.png`) });
    await page.screenshot({
      path: path.join(dir, `static-${width}-full.png`),
      fullPage: true,
    });
    if (width === 1440)
      for (const id of [
        "for-media-businesses",
        "how-it-works",
        "products",
        "standards",
      ])
        await page
          .locator("#" + id)
          .screenshot({ path: path.join(dir, `static-1440-${id}.png`) });
    report.viewportResults.push(result);
    console.log(JSON.stringify(result));
  }
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto("http://127.0.0.1:3000/", { waitUntil: "networkidle" });
  await page
    .getByRole("navigation", { name: "Main navigation", exact: true })
    .getByRole("button", { name: "Pricing", exact: true })
    .click();
  report.interactions.pricing = await page
    .locator("dialog[open]")
    .getByRole("heading")
    .textContent();
  await page.keyboard.press("Escape");
  report.interactions.escapeCloses =
    (await page.locator("dialog[open]").count()) === 0;
  await page
    .getByRole("button", { name: "Log in", exact: true })
    .filter({ visible: true })
    .click();
  report.interactions.login = await page
    .locator("dialog[open]")
    .getByRole("heading")
    .textContent();
  await page.locator("dialog[open] .dialog-close").click();
  for (const name of [
    "Vertical Video Reel",
    "Property Teaser",
    "Alternative / Feature Reel",
    "Photo Reel",
    "Mixed Media Reel",
  ]) {
    await page
      .getByRole("button", { name: "Preview " + name, exact: true })
      .click();
    report.interactions[name] =
      (await page
        .locator("dialog[open]")
        .getByRole("heading")
        .textContent()) === name;
    await page.keyboard.press("Escape");
  }
  await page.getByRole("button", { name: "The capture checklist" }).click();
  report.interactions.resources = await page.locator("dialog[open] li").count();
  await page.keyboard.press("Escape");
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("http://127.0.0.1:3000/");
  await page.getByLabel("Toggle navigation").click();
  report.interactions.mobileMenu = await page
    .getByRole("navigation", { name: "Mobile navigation" })
    .isVisible();
  await page
    .getByRole("navigation", { name: "Mobile navigation" })
    .getByRole("link", { name: "How Caplist Works" })
    .click();
  report.interactions.mobileAnchor = await page.evaluate(() => ({
    hash: location.hash,
    menuOpen: document.querySelector(".mobile-menu").open,
  }));
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.reload({ waitUntil: "networkidle" });
  report.interactions.reducedMotion = await page.evaluate(() => ({
    animations: document.getAnimations().length,
    h1: document.querySelector("h1").innerText,
    bodyVisible: getComputedStyle(document.body).opacity,
  }));
  await page.screenshot({
    path: path.join(dir, "static-390-reduced-motion.png"),
  });
  fs.writeFileSync(
    path.join(dir, "responsive-report.json"),
    JSON.stringify(report, null, 2),
  );
  console.log(
    "FINAL",
    JSON.stringify({ errors, interactions: report.interactions }),
  );
  await page.goto("http://127.0.0.1:3000/", { waitUntil: "networkidle" });
  await page.keyboard.press("Tab");
  report.interactions.keyboardSkipLink = await page
    .locator(".skip-link")
    .evaluate(
      (e) => document.activeElement === e && e.getBoundingClientRect().top >= 0,
    );
  await page.keyboard.press("Enter");
  report.interactions.skipTarget = await page.evaluate(() => location.hash);
  await page
    .getByRole("button", { name: "Preview Photo Reel", exact: true })
    .click();
  await page.keyboard.press("Tab");
  // Native dialogs may allow browser-chrome focus; background page controls must stay inert.
  report.interactions.dialogBackgroundInert = await page.evaluate(
    () => !document.hasFocus() || !!document.activeElement.closest("dialog[open]"),
  );
  await page.keyboard.press("Tab");
  report.interactions.dialogFocusReturns = await page.evaluate(
    () => !!document.activeElement.closest("dialog[open]"),
  );
  await page.keyboard.press("Escape");
  report.interactions.dialogFocusRestored = await page
    .getByRole("button", { name: "Preview Photo Reel", exact: true })
    .evaluate((e) => document.activeElement === e);
  fs.writeFileSync(
    path.join(dir, "responsive-report.json"),
    JSON.stringify(report, null, 2),
  );
  console.log("KEYBOARD", JSON.stringify(report.interactions));
  await page.close();
  await browser.close();
})().catch((e) => {
  console.error(e);
  process.exitCode = 1;
});
