# Caplist Studio — approved website V1 baseline

Inspected and locked: 12 September 2026. This document describes the actual repository at `website-v1-approved`, not a proposed redesign. It supersedes older architectural descriptions in README.md and historical review documents where they differ.

## VISUAL BASELINE — DO NOT CHANGE WITHOUT APPROVAL

The current visual design is approved and locked during backend and deployment work. Preserve the predominantly light marketing canvas, dark production-preview sections, approved outlined logo artwork, local Inter, Caplist Blue **#2F7BFF**, current copy, hero and section hierarchy, Upload → Unlock → Create workflow, source-media/product explorer, See Caplist in action and Book a demo journeys, responsive behaviour, motion, favicons and brand assets.

Do not redesign, restyle, rewrite, reorder or refactor presentation as part of infrastructure work. Changes to layout, spacing, typography, colours, imagery treatment, navigation, component styling or interaction require separate approval. This snapshot task intentionally changes no application or public asset files.

## 1. Framework, runtime and repository structure

- Next.js App Router, TypeScript strict mode, React and React DOM. Installed versions at validation: Next **16.3.4**, React/React DOM **19.3.0**, TypeScript **5.9.3**.
- Local runtime: Node **20.13.1**, npm **10.5.2**. Next requires Node 20.9 or newer. npm is the package manager; `package-lock.json` records dependencies. Use `npm ci` to reproduce the dependency tree.
- `app/`: filesystem routes, root layout, global styles and icon route.
- `components/editorial/`: shared marketing composition and client interactions.
- `components/brand/`: logo components referencing SVG artwork.
- `lib/`: local media/product catalogue and proposed tier data.
- `public/`: local fonts, SVG/PNG brand assets and responsive WebP media.
- `scripts/`: browser QA and review-image packaging; `docs/`: design guidance and review evidence.
- `tsconfig.json`: strict, no-emit TypeScript; ES2022 target, bundler resolution, `@/*` root alias; includes Next-generated types.

## 2. Pages and routing

| URL | File | Purpose / rendering |
| --- | --- | --- |
| `/` | `app/page.tsx` | Renders `MarketingPage`; statically prerendered |
| `/examples` | `app/examples/page.tsx` | Five animated product concepts; static |
| `/pricing` | `app/pricing/page.tsx` | Essential / Pro / Studio scope, imagery, FAQ and demo CTAs; static |
| `/about` | `app/about/page.tsx` | Positioning and business purpose; static |
| `/contact` | `app/contact/page.tsx` | Early-access link and direct email; static |
| `/resources` | `app/resources/page.tsx` | Journal coming-soon state; static |
| `/media-policy` | `app/media-policy/page.tsx` | Enquiry and proposed media-handling commitments; static |
| `/terms` | `app/terms/page.tsx` | Early-access and pre-production terms; static |
| `/demo` | `app/demo/page.tsx` | Demo enquiry; server-rendered query handling |
| `/early-access` | `app/early-access/page.tsx` | Early-access enquiry; server-rendered query handling |
| `/pilot` | `app/pilot/page.tsx` | Server redirect to `/early-access`; preserves allowlisted tier |
| `/icon.svg` | `app/icon.svg` | Next file-based icon |

Next supplies the not-found route. `tier` accepts Essential, Pro or Studio on enquiry routes; other values fall back to “Not sure yet”. There are no application API route handlers, server actions, middleware, database calls, authentication, upload processing, video rendering or payment integrations in the inspected source. Dynamic rendering here is query handling and redirect logic, not a production backend.

## 3. Homepage architecture and major components

`app/page.tsx` → `components/editorial/MarketingPage.tsx`, in this exact order:

1. `Hero`: commercial explanation and source/output production board (`#top`).
2. `CommercialIdea`: value of additional deliverables from existing media.
3. `SourceMedia`: professional source-media story, dark production section.
4. `HowItWorks`: Upload → Unlock → Create (`#how-it-works`).
5. `Catalogue`: source-media `ProductExplorer` (`#products`).
6. `BusinessBenefits`: media-business value (`#for-media-businesses`).
7. `QualityAndControl`: standards, fidelity and creative intent (`#standards`).
8. `WorkflowAndReseller`: workflow and downstream-client relationship.
9. Platform vision section: expanding production capability.
10. Shared `AccessClose`: commercial closing CTA.

Shared components:

- `SiteHeader.tsx`: sticky navigation, avatar-only sign-in notice and native `<details>` mobile menu.
- `InnerPage.tsx`: skip link, header, `main#main-content` and shared footer for inner pages.
- `MarketingPage.tsx` exports `Footer`: dark footer with navigation, contact, privacy/media, terms and back-to-top links.
- `StudioUI.tsx`: `AccessLink`, `SectionHeading`, `AccessClose`; controls repeated CTA wording and styles.
- `ProductExplorer.tsx`: local React checkbox state for Photography, Video, Drone and Vertical. Deterministic suitability rules update Best Fit / Good Fit / Limited / Unavailable and a live result count. Five cards remain visible. This is an illustrative selector, not uploaded-media analysis.
- `PreviewButton.tsx`: native dialog, close button, backdrop and Escape handling; product animation or informational notice.
- `MotionPreview.tsx`: animated still-image sequences, pause control and visibility/reduced-motion state.
- `Photo.tsx`: Next Image with local responsive loader; `FrameCorners` framing decoration.
- `PilotRequest.tsx`: enquiry form and email-draft review experience.
- `PropertyDemo.tsx`: retained earlier crop-demonstration component; no current importer found. Preserved rather than removed.

## 4. Styling and visual dependencies

`app/layout.tsx` imports styles in this exact order:

1. `app/globals.css`: foundational and historical layouts, preview framing, keyframes and responsive rules; imports Tailwind CSS.
2. `app/buyer-experience.css`: buyer/pricing/form styling and overrides.
3. `app/tokens.css`: approved colour, typography, spacing, radius and transition custom properties.
4. `app/studio-system.css`: current marketing system and final V1 overrides.

This is a CSS-cascade-based implementation with custom semantic classes, not an isolated component theme. Later rules override earlier rules, including rules within the same file. Removing “legacy” CSS, changing import order or consolidating selectors can change approved presentation. Tailwind 4 is processed through `@tailwindcss/postcss` in `postcss.config.mjs`.

Key tokens: black `#0B0D10`, blue `#2F7BFF`, off-white `#F8FAFC`; graphite surfaces, functional status colours and light/dark text/border neutrals. Spacing uses 4/8/12/16/24/32/40/48/64/80/96/128px tokens. Control/card radii, 180/280/520ms transition tokens and 1440px content width are centralized. The CTA action shade is an existing `color-mix` derivative of blue and black for small-label contrast; preserve it along with the master blue.

Typography: `next/font/local` in `app/layout.tsx` loads `public/fonts/inter-variable.woff2`, weights 100–900, swap display, preload and adjusted Arial fallback into `--font-inter`. Tokens set `--font-body`; responsive display sizes use `clamp`. `public/fonts/OFL.txt` is the font licence. The CAPLIST wordmark is outlined SVG, never substituted live text.

## 5. Brand and media assets

`components/brand/CaplistLogo.tsx` uses `public/brand/caplist-mark-{dark,light}.svg` and `caplist-wordmark-{dark,light}.svg`. Here dark/light names describe artwork; `CaplistLogo light` selects dark artwork for a light background. `CaplistMark` selects light artwork.

`public/brand/` also contains horizontal, stacked, monochrome, app-icon and social-avatar variants, explicit `on-dark` / `on-light` versions, favicon PNGs at 16/32/48px and the intended downloadable `caplist-brand-assets.zip`. Older variants remain in the repository; preserve the files actually referenced by the components. `app/icon.svg` is the active file-based Next icon; the public favicon PNGs are available assets, not explicitly registered in layout metadata.

`lib/demo-media.ts` controls asset mappings, alt text, object position, product names, formats, durations and descriptions. `public/media/` contains 76 WebP assets (19 families × 480/960/1600/2200 widths), including archived families. `Photo.tsx` chooses these files directly; no remote image service is required. Current imagery is illustrative, including generated property concepts. Motion previews transform still images; they are not rendered client video deliverables. Asset history in `docs/ASSET_SOURCES.md` contains superseded descriptions; current component references and the media map determine what is displayed.

## 6. Motion, interaction and responsive behaviour

- CSS keyframes and React state implement motion. Framer Motion is installed but no import/use was found in application source. Lucide supplies line icons.
- `MotionPreview`: three scenes per product, 8-second stagger, 24-second CSS loop; movement rotates through pan, push, crane, pull and flyover by product/scene index. Used on `/examples` and in product dialogs. The homepage catalogue itself uses still previews.
- IntersectionObserver pauses offscreen previews. `matchMedia` and CSS respect `prefers-reduced-motion`; users can also pause/play.
- `SiteEffects.tsx`, mounted in root layout, handles selected one-time reveals and scroll state. Its selector list includes older classes. The reading-progress element remains in code but current CSS hides it.
- Current CSS controls hover/focus states, native accordion/menu/dialog behaviour, aspect-ratio framing and overlays. Preserve this complete interaction system.
- Responsive CSS uses grid, flex, `clamp` and breakpoints across the four stylesheets. Final V1 overrides include 1100px and 767px breakpoints; earlier active rules also cover 1200/1023/380px. The hero and major storytelling sections use a 12-column desktop grid, then stack on mobile. Explorer cards change from three to two to one column. Header navigation switches to a mobile disclosure; forms and footer reflow; local image sizes change with viewport.
- Retain skip links, semantic headings, labelled fields, keyboard focus, dialog semantics and reduced-motion rules. Root viewport metadata still declares dark colour-scheme and `#080d10` theme colour; recorded as-is, not changed in this lock task.

## 7. Navigation, conversion and form behaviour

Primary navigation: Products → `/#products`; How It Works → `/#how-it-works`; For Media Businesses → `/#for-media-businesses`; About → `/about`. Pricing and other informational destinations are accessible through footer/page links.

“See Caplist in action” (`AccessLink`) leads to the homepage explorer. “Book a demo” leads to `/demo`; pricing carries a tier query into that route. The avatar opens a prelaunch sign-in notice, not an authentication screen.

`PilotRequest` is shared by demo and early access. Required name, work email and business use native browser validation. Tier/media selectors and an optional brief feed local React state. Submit opens a review step; it does not send a network request. The reviewed request can be copied using the Clipboard API or opened as an encoded `mailto:` draft to `tristan@tristantodd.me`. Editing preserves entered values. The page explicitly cannot confirm sending; a demo is booked only after agreeing a time by email. No details are stored in a Caplist database; no file upload is offered. Clipboard failure leaves the manual text-selection fallback available.

## 8. Dependencies, environment and build/deployment

Direct runtime dependencies: Next, React, React DOM, Lucide React and Framer Motion (currently unused). Development dependencies: TypeScript, React/Node type packages, Tailwind CSS, PostCSS and its Tailwind plugin. Installed local tree also reports two extraneous optional packages (`@emnapi/runtime`, `@img/sharp-wasm32`); they are not newly added dependencies.

No environment-variable reference was found in app/components/lib. QA scripts optionally reference **PLAYWRIGHT_MODULE** to locate an external Playwright installation and take a CDP websocket as an argument. No secret values are needed for the website. `.env` and local env variants are ignored.

- `npm run dev`: Next development server, Webpack, bound to 127.0.0.1.
- `npm run build`: production Next build with Webpack.
- `npm start`: production Next server bound to 127.0.0.1 (default port 3000).
- `npm run typecheck`: `tsc --noEmit`.
- `npm run lint`: also `tsc --noEmit`; no separate ESLint setup or npm test script.

No custom Next config, tracked CI workflow, Dockerfile or deployment-provider config was found. No Git remote is configured. `.next`, `node_modules`, `out`, `.vercel`, logs and TypeScript build info are ignored. Local `.codex/environments/environment.toml` is generated workstation setup and excluded from the snapshot. No deployment was performed.

## 9. Validation and known limitations

Validation for this lock:

- Typecheck: passed.
- Lint script (TypeScript check): passed.
- Production build: passed; static pages plus dynamic `/demo`, `/early-access`, `/pilot`.
- `scripts/review-brand-system.cjs`: passed 50 route/viewport combinations (10 routes × 320/390/768/1024/1440px), no page errors, one H1, no horizontal overflow/clipped controls. Also passed workflow count, media-suitability states, five preview dialogs, accordion, mobile navigation, demo validation/draft/edit and reduced-motion checks. No messages sent.
- `review-pages.cjs` and `review-buyer-flow.cjs` forward to this same suite; duplicate executions are unnecessary.
- `review-responsive.cjs` is a retained historical suite with obsolete Pricing-button/dialog and menu-label assumptions. It is not the current acceptance suite and was not run as V1 acceptance. No independent unit-test suite exists.

Known non-production items: illustrative media and eligibility, animated still concepts, tentative tier allowances/pricing, journal coming soon, login notice, manual email enquiries, operational media arrangements/final production terms not finalized. There is no implemented security/authentication/upload/storage/rendering/billing backend. These are documented limitations, not changes requested by this task. Older README and reviews describe previous versions and should not be used to reconstruct V1.

Validation is not a full accessibility audit or representative-buyer research. Build/dependency/runtime versions, image selection, CSS cascade, server/client boundaries, hydration, viewport metadata, fonts and query handling can all affect future presentation; protect them when implementing infrastructure.

## 10. Git snapshot and recovery

Before snapshot: branch `codex/static-visual-redesign`, HEAD `8a59431` (`refine: simplify header sign-in control`). There were 14 modified tracked files and additional untracked website pages, components, tokens/styles, tier data, brand assets, documentation and QA files. No requested recovery refs existed.

All intended website changes are included: modified contact/examples/pricing/layout/icon, brand/header/marketing/preview components, media map and SVG wordmarks; new about/demo/early-access/media-policy/pilot/terms pages, styles/tokens, explorer/form/shared UI/retained crop demo, tier data, brand variants/archive/favicons, docs and current QA scripts/evidence. Existing user work was not discarded.

Full-resolution `brand-v1-*.png`, `buyer-*.png`, `all-crop-overlays.png`, `standards-ratio-fix.png` and generated Codex environment settings stay local and are ignored. Compact WebP review evidence is retained. Other already tracked historical evidence remains untouched. Dependencies and generated build output can be reproduced and are not versioned.

Recovery refs (all point at the same baseline commit):

- Annotated tag: `website-v1-approved`.
- Backup branch: `backup/website-v1-approved`.
- Next working branch initially created at baseline: `build/production-foundation`.
- Commit message: `chore: lock approved Caplist Studio website v1 baseline`.

Before switching or restoring, inspect `git status` and commit or stash any work you need to preserve. These commands are alternatives, not one sequence:

```sh
# View the snapshot without changing your working tree
git show --stat website-v1-approved
git rev-parse 'website-v1-approved^{commit}'

# Temporarily inspect/run the historical version (detached HEAD)
git switch --detach website-v1-approved
# Return to ongoing development
git switch build/production-foundation

# Restore one file into your current working tree; review and commit separately
git restore --source=website-v1-approved -- app/studio-system.css
git diff -- app/studio-system.css

# Start a separate recovery branch from the approved snapshot
git switch -c recovery/website-v1 website-v1-approved

# Inspect later commits, then undo an identified change with a NEW commit
git log --oneline website-v1-approved..HEAD
git revert <later-commit-sha>

# Compare committed and uncommitted current tracked content to baseline
git diff --stat website-v1-approved
git diff website-v1-approved -- app components lib public
git status --short
```

Use a new unused name for recovery branches. Revert later commits newest-first when several depend on each other; merge commits need a deliberate mainline decision and conflicts need review. Switching changes the checked-out version; restoring replaces selected files; reverting adds inverse commits and preserves history. Reset moves a branch pointer and can discard work/rewrite history, so it is not the default recovery method. Git diffs do not include untracked files; inspect status too.

These refs are a local recovery point, not an off-device backup. No remote push or deployment is part of this task.

## 11. GitHub remote recovery protection

The approved website is now preserved separately from the existing Caplist capability repository.

- Private GitHub repository: https://github.com/mrtristantodd/caplist-studio-website
- Origin (fetch and push): `https://github.com/mrtristantodd/caplist-studio-website.git`
- Exact approved baseline commit: `3fc70e429bb8a3ae197ee0575ad6ccadceab29b6`
- Fixed annotated tag: `website-v1-approved`
- Fixed recovery branch: `backup/website-v1-approved`
- Stable/default branch: `main`, fast-forwarded to the approved baseline.
- Active development branch: `build/production-foundation`; this remote-recovery documentation is a separate commit on that branch only.

The approved tag and backup branch must remain at the exact baseline commit. Future redesign or capability work must not move these recovery references. All current application, stylesheet, copy, font, logo and media files match the approved baseline. The existing `mrtristantodd/caplist-studio` repository was not modified.

GitHub rejected private-repository branch protection because the account plan requires GitHub Pro for this feature. No visibility change, PR review requirement or status-check requirement was introduced. The tag and backup branch are recovery references, not server-enforced immutable references. Optional: after enabling a suitable GitHub plan, open repository Settings → Branches → Add branch protection rule, match `main`, leave force pushes and deletions disallowed, enable “Do not allow bypassing the above settings”, and leave mandatory reviews/status checks off.

Recover on another computer, without relying on this Mac:

```sh
git clone https://github.com/mrtristantodd/caplist-studio-website.git
cd caplist-studio-website
git switch -c recovery/approved-v1 website-v1-approved
git rev-parse HEAD
npm ci
npm run build
npm start
```

Authenticate to GitHub with an account that has access to this private repository. The hash above must match the exact approved baseline. Earlier “no remote” statements describe the initial local snapshot, before this separate remote-recovery step.
