const { chromium } = require(process.env.PLAYWRIGHT_MODULE || "playwright");
const fs = require("node:fs");
(async () => {
  const browser = await chromium.connectOverCDP(process.argv[2]);
  const page = await browser.contexts()[0].newPage();
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));
  const results = [];
  for (const route of ["/", "/pricing", "/resources", "/examples"])
    for (const width of [320, 390, 768, 1024, 1440]) {
      await page.setViewportSize({ width, height: 900 });
      await page.goto("http://127.0.0.1:3000" + route, {
        waitUntil: "networkidle",
      });
      await page.evaluate(() => document.fonts.ready);
      await page.evaluate(async () => {
        for (let y = 0; y < document.body.scrollHeight; y += 800) {
          scrollTo(0, y);
          await new Promise((r) => setTimeout(r, 35));
        }
        scrollTo(0, 0);
      });
      await page.waitForLoadState("networkidle");
      const r = await page.evaluate(() => ({
        overflow: document.documentElement.scrollWidth > innerWidth,
        broken: [...document.images]
          .filter((x) => x.getBoundingClientRect().width && !x.naturalWidth)
          .map((x) => x.src),
        clipped: [...document.querySelectorAll("a,button,summary,h1,h2,h3")]
          .filter(
            (x) => x.checkVisibility() && !x.classList.contains("skip-link"),
          )
          .filter((x) => {
            const r = x.getBoundingClientRect();
            return r.left < -1 || r.right > innerWidth + 1;
          })
          .map((x) => x.textContent),
        h1: document.querySelector("h1")?.textContent,
      }));
      results.push({ route, width, ...r });
      if (width === 390 || width === 1440)
        await page.screenshot({
          path: `docs/review/static-v3-${route.slice(1) || "home"}-${width}.png`,
          fullPage: true,
        });
      if (route === "/" && width === 1440)
        for (const id of ["for-media-businesses", "standards", "products"])
          await page
            .locator("#" + id)
            .screenshot({ path: `docs/review/static-v3-${id}.png` });
      console.log(JSON.stringify(results.at(-1)));
    }
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto("http://127.0.0.1:3000");
  await page
    .getByRole("navigation", { name: "Main navigation", exact: true })
    .getByRole("link", { name: "Pricing", exact: true })
    .click();
  if (!page.url().endsWith("/pricing")) throw Error("Pricing nav");
  await page
    .getByRole("navigation", { name: "Main navigation", exact: true })
    .getByRole("link", { name: "Resources", exact: true })
    .click();
  if (await page.locator("article").count())
    throw Error("Resources should be empty");
  await page
    .getByRole("link", { name: "Explore example products", exact: true })
    .click();
  for (const b of await page.locator(".example-open").all()) {
    await b.click();
    await page.locator("dialog[open]").waitFor();
    await page.keyboard.press("Escape");
  }
  await page.goto("http://127.0.0.1:3000/pricing");
  await page.getByText("Can I purchase a plan now?", { exact: true }).click();
  if (
    !(await page
      .getByText(
        "Not yet. This is a visual pricing proposal for review. Purchasing and account access are not available.",
        { exact: true },
      )
      .isVisible())
  )
    throw Error("FAQ");
  fs.writeFileSync(
    "docs/review/pages-report.json",
    JSON.stringify(
      {
        results,
        errors,
        interactions:
          "Pricing and resources navigation, empty journal, five example dialogs and pricing FAQ passed",
      },
      null,
      2,
    ),
  );
  await page.close();
  await browser.close();
  if (
    errors.length ||
    results.some((r) => r.overflow || r.broken.length || r.clipped.length)
  )
    process.exitCode = 1;
})();
