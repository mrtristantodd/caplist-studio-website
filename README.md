# Caplist Studio — static visual redesign

**MORE FROM EVERY CAPTURE.**

Pass One of the approved two-pass redesign. A frontend-only visual prototype for professional property-media businesses, built from the existing `caplist-premium-interface-motion` codebase. Pass Two motion requires explicit visual approval.

## Run locally

```sh
npm install
npm run typecheck
npm run build
npm start
```

Open http://127.0.0.1:3000. For development, run `npm run dev`. Node 20.9+ is required. Webpack is used because Turbopack's CSS worker could not bind its internal port in this desktop environment. The homepage is prerendered as static content.

## Review

See [Pass One review](docs/PASS_ONE_REVIEW.md), [browser evidence](docs/review/responsive-report.json), and [asset sources](docs/ASSET_SOURCES.md).

The homepage has six acts: hero, commercial opportunity, media-to-product relationships, editorial product catalogue, professional standards, and a photographic commercial close. The rising-bar identity follows the supplied brand board. Image corner markers are static framing details.

Product buttons open local still-preview dialogs. Pricing and Log in open explanatory preview notices. Resources opens a capture checklist. No credentials, environment variables, database, authentication, upload processing, AI analysis, video rendering, billing, email or backend integration are used.

## Source structure

- `components/editorial/MarketingPage.tsx`: six-act page architecture.
- `components/editorial/SiteHeader.tsx`: public navigation and mobile menu.
- `components/editorial/PreviewButton.tsx`: native, keyboard-accessible preview dialogs.
- `components/editorial/Photo.tsx`: local responsive image loader and frame details.
- `lib/demo-media.ts`: replaceable photography and product metadata.
- `app/globals.css`: static layout, typography, tonal chapters and responsive rules.
- `scripts/review-responsive.cjs`: nine-width Chromium review and interaction checks; requires Playwright and a local CDP browser URL.
- `scripts/package-review.cjs`: creates compressed review copies of captured PNG screenshots.

The original motion prototype is preserved in baseline commit `447463f`. It is not mounted in the static redesign. No advanced motion is present.
