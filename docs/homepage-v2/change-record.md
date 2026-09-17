# Homepage v2 — change and verification record

Date: 17 September 2026. Approved starting commit: `6748abf`.
Branch: `feature/homepage-v2`.

## Material changes

1. Replaced the public homepage composition with an isolated white editorial design. Retained the approved commercial headline, Inter typeface, original logo assets and electric-blue action colour.
2. Replaced the hero board/mini-animation with one static Chapel Street photograph. Shortened supporting copy and gave the walkthrough a direct hero and header anchor.
3. Built one 30-second product demonstration around persistent project chrome and source media. Product selection shares layout identity with the expanded vertical player; no whole-screen crossfades. Added manual stage navigation, pause/resume, replay, viewport/visibility pausing and reduced-motion handling.
4. Added bounded Style, Length and Music choices. This is a marketing interaction: it makes no backend calls or production requests. Choices persist into the result summary; replay resets them.
5. Rebuilt the homepage product showroom with native 9:16 and 16:9 proportions. Preserved the existing examples page and global product definitions.
6. Reduced the commercial, outcome, quality and workflow sections. Removed homepage philosophy/roadmap explanations and defensive editor/quality copy. The complete deletion/rewrite audit is in `design-spec.md`.
7. Gave the closing demo invitation its own section and substantial spacing.
8. Added visible Explore and Get in touch footer headings, preserved existing routes, and allowed the contact row to wrap at tablet sizes.
9. Created 20 local WebP derivatives from five user-approved Chapel Street originals (480/960/1600/2400px). Original files were not altered. Web metadata was stripped. Total derivative directory is approximately 3.4MB; responsive selection avoids loading every size.
10. Homepage-only light header and viewport configuration preserve secondary-page appearance. Existing concept routes remain noindex and unchanged apart from shared footer headings. No application/R&D code, pricing, policies, forms or product eligibility logic changed.

## Subsequent user direction

The user explicitly approved Chapel Street photos for the demo, then directed that the UI should **not** label the intended product experience “illustrative”. No such label is shown. This supersedes the initial labelling proposal in the specification.

## Asset and product-proof limits

The supplied source is five real photographs, with no video or drone footage. The 27-photo/video/drone project and five available products depict the intended application scenario, not the result of running these five photos through a live eligibility engine. The vertical preview sequences the supplied real photographs; it is not an actual generated Vertical Video Reel or evidence of landscape-video reframing. No property features were generated or altered. The five-photo sequence is a seven-second visual preview within the 30-second demonstration; it does not purport to contain a complete 25-second export. Music choices communicate intent; this silent website preview includes no music.

A verified product-video example still requires approved source footage and the actual production pipeline. No claim of successful pipeline validation is made by this change record.

## Checks completed

- `npm ci`: success; no dependency changes; audit reported zero vulnerabilities.
- `npm run typecheck`: pass.
- `npm run build`: pass; all 21 static routes generated.
- `git diff --check`: pass.
- Static HTML: one h1, one walkthrough, 43 links and 27 image elements checked, no missing local route/image/anchor targets, no Interactive Floorplan text.
- All 20 image derivatives checked for expected width and absence of EXIF/ICC/XMP metadata.
- All five extracted original photographs compared byte-for-byte to the supplied zip: unchanged.
- Source-level responsive review: 320/390/768/1024/1440 layout rules; compact mobile workspace, horizontally scrollable options, stacked selected state, native media ratios and scoped light colours.
- React/Next.js source review: server-rendered homepage, isolated interactive client boundary, effect cleanup, no network waterfall or new runtime dependencies, explicit image sizes/preloading, labelled controls, focus styles, reduced motion and visibility pausing.

## Blocked checks — not passed

Browser automation rejected both production-site and localhost navigation because the admin-enforced browser policy could not be verified. No alternate browser-control mechanism was used to bypass it.

Consequently **desktop/tablet/mobile visual QA, live animation choreography, keyboard interactions, reduced-motion emulation and browser console checks remain unverified**. The code review and successful static build do not substitute for these checks. Rendy's text/content was reviewed, but its live motion choreography could not be observed.

## Review procedure when browser access is restored

1. Open the static preview at http://127.0.0.1:4319/ (while its local server is running).
2. Review 1440, 1024, 768, 390 and 320px widths. Check header/menu, hero line breaks, all six stages, true media proportions, footer and no horizontal page overflow.
3. Scroll the walkthrough into view; watch through Ready. Confirm the selected card expands in the same workspace and the property-photo sequence remains sharp.
4. Pause/resume during assessment and output playback. Replay. Navigate every stage with keyboard. Change all three choices; press Create Reel. Confirm no backend request occurs.
5. Enable reduced motion and reload. Confirm static Ready state without autoplay, functional manual controls and no transforms.
6. Verify header/hero anchors, final demo action, examples, menu dismissal, login and footer links. Check `/examples`, `/pricing`, `/resources` and both concept routes for regressions.
7. Inspect console and loading behaviour. Capture screenshots and record any fixes before marking the PR ready.

## Release status

Implementation candidate on a dedicated branch. Do not mark production-ready until browser QA is complete. No merge or production deployment performed.
