const { chromium } = require(process.env.PLAYWRIGHT_MODULE || "playwright");
const assert = require("node:assert/strict");
const fs = require("node:fs");
(async () => {
  const b = await chromium.connectOverCDP(process.argv[2]);
  const p = await b.contexts()[0].newPage();
  const errors = [];
  p.on("pageerror", (e) => errors.push(e.message));
  await p.emulateMedia({ reducedMotion: "reduce" });
  const results = [];
  for (const route of [
    "/",
    "/pricing",
    "/examples",
    "/about",
    "/demo",
    "/early-access",
    "/contact",
    "/media-policy",
    "/terms",
    "/resources",
  ]) {
    for (const width of [320, 390, 768, 1024, 1440]) {
      await p.setViewportSize({ width, height: 1000 });
      const r = await p.goto("http://127.0.0.1:3000" + route, {
        waitUntil: "domcontentloaded",
      });
      await p.evaluate(() => document.fonts.ready);
      const state = await p.evaluate(() => ({
        overflow: document.documentElement.scrollWidth > innerWidth,
        h1: document.querySelectorAll("h1").length,
        clipped: [...document.querySelectorAll("a,button,summary,h1,h2,h3")]
          .filter(
            (e) => e.checkVisibility() && !e.classList.contains("skip-link"),
          )
          .filter((e) => {
            const r = e.getBoundingClientRect();
            return r.left < -1 || r.right > innerWidth + 1;
          })
          .map((e) => e.textContent.trim().slice(0, 80)),
      }));
      results.push({ route, width, status: r.status(), ...state });
      if (
        (route === "/" || route === "/pricing") &&
        (width === 390 || width === 1440)
      ) {
        await p.evaluate(async () => {
          for (let y = 0; y < document.body.scrollHeight; y += 800) {
            scrollTo(0, y);
            await new Promise((r) => setTimeout(r, 25));
          }
          scrollTo(0, 0);
        });
        await p.screenshot({
          path: `docs/review/brand-v1-${route === "/" ? "home" : "pricing"}-${width}.png`,
          fullPage: true,
        });
        if (route === "/" && width === 1440)
          await p
            .locator(".studio-hero")
            .screenshot({ path: "docs/review/brand-v1-hero-1440.png" });
      }
    }
  }
  console.log(
    `Checked ${results.length} responsive layouts; failures: ${results.filter((x) => x.overflow || x.h1 !== 1 || x.clipped.length).length}`,
  );
  fs.writeFileSync(
    "docs/review/brand-system-report.json",
    JSON.stringify({ results, errors }, null, 2),
  );
  assert.ok(
    results.every(
      (x) => x.status === 200 && !x.overflow && x.h1 === 1 && !x.clipped.length,
    ),
    "Responsive layout failure",
  );
  await p.setViewportSize({ width: 1440, height: 1000 });
  await p.goto("http://127.0.0.1:3000/");
  assert.equal(await p.locator(".studio-steps > li").count(), 3);
  assert.equal(await p.locator(".explorer-card").count(), 5);
  await p.getByRole("checkbox", { name: "Video", exact: true }).uncheck();
  await p.getByRole("checkbox", { name: "Drone", exact: true }).uncheck();
  assert.equal(
    await p.locator(".explorer-result").textContent(),
    "1 of 5 products could suit this media combination.",
  );
  await p.getByRole("checkbox", { name: "Photography", exact: true }).uncheck();
  assert.equal(
    await p.locator(".explorer-result").textContent(),
    "0 of 5 products could suit this media combination.",
  );
  await p.getByRole("checkbox", { name: "Vertical", exact: true }).check();
  assert.equal(
    await p.locator("#vertical-reel .fit-state").innerText(),
    "Best Fit",
  );
  for (const button of await p.locator(".explorer-preview").all()) {
    await button.click();
    await p.locator("dialog[open]").waitFor();
    await p.keyboard.press("Escape");
  }
  await p.getByText("Property fidelity", { exact: true }).click();
  assert.ok(
    await p
      .getByText("The property should remain the property.", { exact: true })
      .isVisible(),
  );
  await p.setViewportSize({ width: 390, height: 1000 });
  await p.goto("http://127.0.0.1:3000/");
  await p.locator(".mobile-menu > summary").click();
  await p
    .getByRole("navigation", { name: "Mobile navigation", exact: true })
    .getByRole("link", { name: "About", exact: true })
    .click();
  await p.waitForURL("**/about");
  await p.goto("http://127.0.0.1:3000/demo?tier=Pro");
  assert.equal(await p.getByLabel("Interested tier").inputValue(), "Pro");
  await p.getByRole("button", { name: "Review my request" }).click();
  assert.equal(await p.locator("form").count(), 1);
  await p.getByLabel("Your name", { exact: true }).fill("Sample Buyer");
  await p.getByLabel("Work email").fill("buyer@example.com");
  await p.getByLabel("Media business", { exact: true }).fill("Example Media");
  await p.getByRole("button", { name: "Review my request" }).click();
  await p
    .getByRole("heading", { name: "Your request is ready to send." })
    .waitFor();
  const href = await p
    .getByRole("link", { name: "Open email draft" })
    .getAttribute("href");
  assert.ok(decodeURIComponent(href).includes("demo request"));
  assert.ok(decodeURIComponent(href).includes("Interested tier: Pro"));
  await p.getByRole("button", { name: "Edit your details" }).click();
  assert.equal(
    await p.getByLabel("Your name", { exact: true }).inputValue(),
    "Sample Buyer",
  );
  await p.goto("http://127.0.0.1:3000/examples");
  await p.waitForFunction(() =>
    [...document.querySelectorAll(".motion-preview")].every(
      (e) => e.dataset.paused === "true",
    ),
  );
  assert.deepEqual(errors, []);
  console.log(
    "PASS: 50 responsive layouts, three-step workflow, media eligibility states, 5 preview dialogs, accordion, mobile navigation, demo draft and reduced-motion checks. No messages sent.",
  );
  await p.close();
  await b.close();
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
