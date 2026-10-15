# Founding Beta landing page — stacked review

Branch: `feature/mvp-founding-beta-landing`.
Base: `feature/how-it-works-v2` at `ef0883f0f05010e10630a308dc2fb56349284386` (PR #19).
Review only. No parent-branch change, merge or production deployment.

## Design and scope

Read the app's design constitution and design system at `feature/p5-output-qc-reference` as read-only authorities, and inspected the reviewed website homepage, How It Works, Examples, Pricing, tokens, header/footer, CTA, workflow and media primitives.

Dedicated `/founding-beta/` route; reduced logo/login header and minimal footer. Source-to-output hero, open commercial relationship, graphite product previews, four-stage workflow, quiet quality comparison, tonal beta qualification, minimal AUD pricing and high-contrast application section. Inter, shared tokens, approved logo artwork, CTA styling and login utility are reused. Two-column tablet compositions remain until mobile recomposition.

Only Photo Reel and Vertical Video Reel — Beta are offered. Prices are A$19 / A$89 / A$99 bundle; first complete property free for accepted beta partners. No subscription tiers, future catalogue, competing acquisition action, internal production details or invented social proof. Main marketing pages and global CSS are untouched.

## Shared component change

WorkflowStory accepts an optional `variant="founding-beta"`. This reuses its existing viewport/visibility lifecycle, capture → expansion → selection → finished-output animation and reduced-motion fallback. The variant supplies the brief's short copy and only two MVP outputs with scoped two-portrait layout rules. The default copy, four-output composition, timing and behavior remain unchanged for How It Works. No duplicate workflow implementation or new runtime dependency.

## Media provenance

Two local, silent 540×960 H.264 illustrative previews are derived from the existing DP001 demonstration assets. Photo Reel uses the existing edited exterior/living/kitchen images. Vertical Video Reel uses a short portrait excerpt of the existing landscape demonstration reel. Both are labelled illustrative on the page; they are not claimed as customer work or validated CAPLIST production results. Native controls, no autoplay/loop, preload none, local WebP posters. Total additional video: 801,180 bytes.

## Validation

- `npm run lint`: pass (repository's TypeScript-based lint command).
- `npm run typecheck`: pass.
- `npm run build`: pass; static export includes standalone route.
- `python3 scripts/check-marketing-copy.py`: pass; 22 HTML pages, eight existing catalogue definitions, internal links/anchors and approved existing-page copy.
- Chromium production-export checks at 1440, 1024, 768 and 390px: Founding Beta, homepage and How It Works all have no horizontal overflow or broken images; no browser page errors.
- Desktop/tablet/mobile visual review, both vertical videos play at 540×960, existing landscape source plays at 1280×720.
- Workflow: paused before viewport entry; progresses on meaningful entry; freezes offscreen; resumes and holds final state; one iteration; hidden-document pause; individually activated mobile stages; actual reduced-motion emulation yields static compositions.
- Form: required fields/native validation, multiple capture selections, unavailable response with zero submission requests, no URL leakage, disabled controls without JavaScript, visible keyboard focus and skip-to-main.
- Studio login destination retained from AppLoginLink; browser GET returned HTTP 200 and Caplist Studio title. No authenticated app operation or account creation performed.
- Content review confirms two MVP products only and no internal/IP details.

The cloud workspace proxy could not clone or install dependencies. Implementation/build/browser validation ran in an isolated Vercel sandbox using the exact website branch; GitHub APIs supply the commit. Temporary Playwright/FFmpeg tooling is not added to package.json or the lockfile.

## Pending application integration

The website uses static export. No email provider, submission backend or CAPLIST-domain recipient is configured for this page. The form clearly states that applications are not sent or saved; submitting valid fields displays an unavailable message rather than a false receipt. The adapter in `components/founding-beta/application-transport.ts` makes no external request and stores/logs no data. Inputs are disabled before hydration to prevent a native GET fallback.

Before accepting applications, replace that adapter with a durable submission endpoint and a CAPLIST-domain delivery destination; implement server validation, abuse protection and accessible success/failure receipt after the endpoint accepts the application. Configure credentials outside Git. No personal email, secret, paid dependency or fabricated transport is included.
