# Founding Beta refinement — media and verification

PR #20 remains stacked on PR #19. Refinement starts at `ae956fdc632433b4a275e073041419f933098a9e`; only the Founding Beta route, review records and its obsolete illustrative assets change. No shared component, token, global CSS, app repository or unrelated route changes.

## Visual refinement

- Photo Reel: a labelled three-photo contact sheet leads to the existing illustrative vertical photo-motion sample.
- Vertical Video Reel — Beta: a labelled landscape source player opens on the aerial/drone passage, with a clean aerial still as its poster. Equal-size product stages and equal price/title treatment are retained.
- The old cropped mixed-reel excerpt and its transition-frame poster are removed. A restrained pending-example object states that a finished vertical edit is not shown.
- The opportunity section now depicts Capture once → Create more → Sell more with existing photography, CAPLIST's mark, compact format representations and a restrained product-offer icon. No profitability claim.
- The application form becomes a light-first Studio workspace on the existing graphite closing section: off-white panel, white fields, near-black labels, shared spacing/radius tokens, blue focus and existing CTA treatment. Fields, native validation, capture multiselect and transport behavior are unchanged.

## Exact media and provenance

All retained media below already exists at the refinement base commit. No new customer footage, finished pipeline result or generative media is invented.

| Asset | Role and provenance |
| --- | --- |
| `public/media/dp001/front.webp` | Existing approved DP001 exterior photograph; contact sheets, hero, commercial diagram and quality comparison. |
| `public/media/dp001/living.webp` | Existing approved DP001 living-room photograph; contact sheets and illustrative product-format compositions. |
| `public/media/dp001/kitchen.webp` | Existing approved DP001 kitchen photograph; source contact sheets and commercial diagram. |
| `public/media/founding-beta/photo-reel.mp4` | Existing 9-second silent 540×960 illustrative motion sample from the three DP001 photographs above. Retained unchanged and explicitly not claimed as a confirmed CAPLIST production output. |
| `public/media/founding-beta/photo-reel-poster.webp` | Existing clean exterior poster extracted from that illustrative photo-motion sample; retained unchanged. |
| `public/media/dp001/reel-premium-mixed.mp4` | Existing 23.4-second 1280×720 landscape DP001 marketing demonstration. Both landscape source players start at its original aerial opening, then show the existing property sequence. Labelled illustrative source footage, not a finished Vertical Video Reel. |
| `public/media/dp001/drone.webp` | Existing clean DP001 aerial still. Replaces the source-player poster and visually distinguishes the video-led product from the photo-led exterior. No intermediate transition frame is used. |

DP001 provenance: `docs/demo-property-001/README.md` identifies it as canonical marketing demonstration media, not technical validation of the production pipeline. Those existing provenance documents remain unchanged. The form and page make no claim of live generation or confirmed customer work.

Removed: `public/media/founding-beta/vertical-video-reel.mp4` and `vertical-video-reel-poster.webp`. The former was a simple portrait excerpt of the mixed-media reel; the latter showed an intermediate transition. Neither is suitable evidence of intelligent selection and reframing.

## Outstanding example-media requirement

Provide a rights-cleared, representative finished Vertical Video Reel and its actual professionally captured landscape source, showing selected moments and considered vertical reframing. An aerial/drone opening is preferred to distinguish it from Photo Reel. Include a clean, stable poster from a finished shot and approval to describe the result as a working CAPLIST output. Until supplied, the page shows the landscape source honestly and marks the finished example unavailable; it does not fabricate a second output demonstration.

The retained Photo Reel is an illustrative manual motion sample. A pipeline-confirmed Photo Reel should replace it before making any working-pipeline claim.

## Verification

- Locked install via `npm ci`; lint, typecheck, production build and existing marketing/link checker pass. Next.js 16.3.4 matches the lockfile. Temporary QA tools live outside the site package; package.json/lockfile remain unchanged.
- 1440, 1024, 768 and 390px: no overflow, no broken images, equal product-stage widths; both playable product/source examples work.
- Workflow: viewport pause, one play, final-state hold and reduced-motion fallback pass.
- Form: unchanged required/native validation and multiselect, white field/near-black text styling, 2px focus outline, honest unavailable receipt, zero submission requests.
- Home, How It Works, Examples and Pricing: 16 baseline-versus-refinement comparisons at all four widths match visible content, heading scale, page geometry and login links.
- Desktop and mobile screenshots accompany this note. No merge or production deployment.

Screenshots: [Desktop](./refinement-desktop.webp) · [Mobile](./refinement-mobile.webp).
