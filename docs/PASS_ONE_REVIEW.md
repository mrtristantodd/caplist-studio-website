# Caplist Studio — Pass One visual review

**Status: static redesign complete; awaiting explicit visual approval.**

Live local prototype: http://127.0.0.1:3000/?review=static

## What changed

The homepage now follows the six-act commercial story: the locked “MORE FROM EVERY CAPTURE.” hero; an off-white commercial opportunity chapter; source-media/product relationships; an asymmetric editorial product catalogue; professional standards; and a full-bleed photographic close.

Large Inter typography, an expansive desktop hero, photographic contact sheets, tonal chapter changes and varied product aspect ratios replace the continuous dashboard treatment. All five products show duration, format, purpose and source requirements. Local still-preview dialogs make the catalogue reviewable. Public navigation now uses Products, How Caplist Works, For Media Businesses, Pricing and Resources.

Following the user's logo clarification, the rising-bar identity replaces the four-corner logo. Four corners remain as image-framing details. The new mark and wordmark are vector interpretations of the supplied brand board.

## What was removed and retained

Removed: illustrated houses, the public Studio dashboard section, top-level Quality/Studio navigation, WebGL shader, scroll-progress indicator, magnetic controls, pointer tracking, parallax, blur reveals and looping/sequenced motion. The original implementation is preserved in baseline commit `447463f`.

Retained: the existing Next.js/React/TypeScript foundation; Caplist's near-black, graphite, off-white, cool-grey and electric-blue palette; the professional property-media positioning; the five product concepts; and a frontend-only implementation.

## Responsive decisions

- 1280 px and above: full public navigation, large side-by-side hero, asymmetric catalogue and wide media relationships.
- 1024 px: side-by-side hero with a compact navigation menu and adjusted image geometry.
- 768 px: stacked hero and larger media canvas, with three readable source-to-output stages below.
- 320–430 px: genuinely stacked composition, compact header CTA, accessible menu, vertically arranged transformation stages and varied single-column catalogue widths. No desktop pointer effects are present.
- Fixed media aspect ratios reserve space. Local preloaded Inter uses an adjusted fallback. The page does not depend on animation to reveal content.

## Screenshots

Each link opens the full page at the stated width. Original PNG captures are retained locally; the WebP copies below are committed for compact review.

| Desktop | Tablet | Mobile |
| --- | --- | --- |
| [1440 px](review/static-1440-full.webp) | [768 px](review/static-768-full.webp) | [390 px](review/static-390-full.webp) |
| [1728 px](review/static-1728-full.webp) | | [430 px](review/static-430-full.webp) |

Additional validated widths: [320](review/static-320-full.webp), [375](review/static-375-full.webp), [1024](review/static-1024-full.webp), [1280](review/static-1280-full.webp).

Desktop section detail: [hero](review/static-1440-hero.webp), [commercial opportunity](review/static-1440-for-media-businesses.webp), [media relationships](review/static-1440-how-it-works.webp), [catalogue](review/static-1440-products.webp), [standards](review/static-1440-standards.webp).

## Verification

- `npm install`: completed, no reported dependency vulnerabilities at installation.
- `npm run typecheck`: passed.
- `npm run build`: passed; homepage and icon prerendered as static content.
- Browser audit at 320, 375, 390, 430, 768, 1024, 1280, 1440 and 1728 px: no horizontal page scrolling, clipped controls, headline overflow, missing images, invalid anchors or browser errors.
- All five product dialogs, Pricing, Log in, Resources, mobile menu and in-page navigation checked. Native dialogs support Escape, focus trapping and returning focus to their trigger.
- Reduced motion: zero active animations, no WebGL canvases, all content visible immediately.
- Cold-load local Chromium measurements: observed CLS 0 at all nine widths after the font-loading fix. No external asset requests. These are local checks, not deployed-device performance guarantees; field INP and cross-browser Safari validation remain future checks.

Raw evidence: [responsive-report.json](review/responsive-report.json).

## Temporary assets and limitations

Photography is an isolated demo set rather than a single commissioned property shoot. It includes twilight exterior, daylight interiors and aerial context. Replace with approved production photography/video and master vector logo artwork before publication; see [asset sources](ASSET_SOURCES.md). The living-room image's photographer attribution is unresolved and it is specifically marked for replacement. Product previews are static compositions. Duration, eligibility and assessment values are illustrative.

Pricing and Log in provide explanatory local notices. No prices, accounts or transactions exist. There are no uploads, AI analysis, Supabase connections, rendering pipelines, database writes, billing or email functionality.

## Approval gate

The user's execution addendum says: “After completing Pass One: STOP. Do not begin Pass Two automatically.”

Review layout, type, imagery, copy hierarchy, composition and colour balance now. Resolve requested changes first. Only explicit approval starts the separate motion pass. That later pass must preserve the approved layout and receive its own commit: `feat(marketing): add Caplist motion system`.
