# Caplist Studio — Pass One visual review

**Status: static redesign complete; awaiting explicit visual approval.**

Live local prototype: http://127.0.0.1:3000/?review=static-v4

## Luxury imagery and annotation revision

All eight browser annotations addressed: larger menu text; prominent “Same Workflow, More Media” USP; calendar Book tile; Caplist icon as the intermediate step between Deliver and additional outputs; luxury home, kitchen and harbour estate images; and a larger aligned professional-media badge. Removed incidental image captions and duplicate small labels.

The examples now share equal-height display frames and aligned captions while preserving portrait and landscape formats. Pricing adds a photographic hero, value summary, photographic plan covers, shadow depth and a dark highlighted collection card. All current property imagery is AI-generated luxury architectural concept imagery, disclosed in the footer, example introduction and alt text. See ASSET_SOURCES.md.

Validation: static production build passes. Four pages checked at 320, 390, 768, 1024, 1280, 1440 and 1932px; no horizontal overflow, broken images or clipped controls. Page navigation, five preview dialogs and pricing FAQ pass. No backend or motion implementation added.

## Reference-led revision and new pages

Homepage sections now follow the supplied reference more closely: a photographic hero with five outputs, compact opportunity layout, layered How It Works illustration, five-column product catalogue, professional-media dashboard and photographic close. The standard workflow ends at Deliver. Only Deliver connects to Caplist’s five additional outputs. Mobile uses a readable vertical workflow.

The standards message now leads with “Your craft. In every product.” and explains professional source media positively. The visual dashboard remains illustrative, with no fake numerical quality score or live assessment.

New pages: `/examples` contains five still product mock-ups; `/pricing` contains clearly labelled illustrative AUD pricing, plans and FAQs; `/resources` is an empty journal with a coming-soon message and no invented articles. Navigation reaches the actual pages. No billing, accounts, uploads or backend services were added.

Copywriting reference: https://outlist.io/ — reviewed for its direct source → output → benefit structure. Caplist copy is original and retains its professional property-media audience. No testimonials, performance claims or customer numbers were borrowed.

Validation: production static build and TypeScript pass; all four routes checked at 320, 390, 768, 1024 and 1440px. Navigation, empty resources state, five example dialogs and pricing FAQ checks pass. See `docs/review/pages-report.json` and the `static-v3-*` screenshots.

## September 11 revision

Rebalanced the entire reading scale: 12px eyebrows, 14–15px metadata, 16–18px body text, and reduced section and hero headings. Rebuilt the commercial opportunity with a photographic five-step process, a large one-visit → existing-capture → five-products statement, and five linked output previews. Rebuilt How Caplist Works with layered media planes, assessment checks and readable source-to-product relationships. Active photography now depicts Australian properties; sources are in ASSET_SOURCES.md.

The production build, nine responsive widths, local media checks, navigation, five product dialogs, keyboard focus, and reduced-motion checks pass. No backend or motion pass was added.

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
- 768 px: stacked hero and larger media canvas, with the layered media composition and source-to-product outcomes below.
- 320–430 px: genuinely stacked composition, compact header CTA, accessible menu, vertically arranged process and product relationships and varied single-column catalogue widths. No desktop pointer effects are present.
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

## Brand and static refinement — 11 September 2026
- Applied the supplied three-panel icon, blue-A wordmark and favicon throughout the shared navigation and workflow graphics.
- Added six new property/interior concepts, including two more modest architectural suburban houses.
- Corrected catalogue frame proportions to 9:16 / 16:9, adjusted hero product thumbnails and expanded source capture to six images.
- Replaced quality metrics with photographer-focused value messaging, elevated feature icons and separated layered images with borders.
- Balanced the closing section into two columns and removed the requested examples introduction disclosure.
- Retained five products per clarification. This revision remains static, following the main request to refine before motion.
- Production build passed. All four pages passed browser checks at seven viewport widths, with no broken images, horizontal overflow or clipped headings/controls; preview dialogs and navigation passed.

## Motion, pricing and contact update — 11 September 2026
- User explicitly approved motion. Five animated photo sequences now appear in the catalogue, examples page and preview dialogs, with camera-style pan/zoom, crossfades, progress and play/pause controls. These are browser animations, not rendered video files or final production outputs.
- Animations pause offscreen and honour reduced-motion preferences. Browser checks verified movement, pause and reduced-motion behaviour.
- Elevated examples hero, rebuilt footer, added contact page and mailto links for tristan@tristantodd.me. Removed visible imagery disclosure as requested.
- Replaced header CTA/login text with a profile-style sign-in control. Account access remains a frontend preview.
- Pricing now uses Essential / Pro / Studio selected per property, with Pro recommended and larger; seven inclusions per tier and a five-product comparison.
- Pricing source: latest relevant discussion in “Australian Real Estate SaaS Opportunity”, including the September 4 per-project clarification and September 9 confirmation of working tiers. These discussions explicitly leave pricing unvalidated; retail examples are not Caplist wholesale prices. Removed invented A$29/A$99 amounts and displayed pricing pending.
- Added four FAQs about archived media, resale, ownership/privacy and requests. The privacy copy expresses the user's requested product policy; no backend or media-processing services were implemented.
