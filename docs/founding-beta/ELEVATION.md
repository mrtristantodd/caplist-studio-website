# Beta landing page — elevation review

Historical pass. See [WIREFRAME-REFINEMENT.md](WIREFRAME-REFINEMENT.md) for the current approved-wireframe implementation and validation.

Local review, 15 October 2026. Branch: `feature/mvp-founding-beta-landing`. Route remains `/founding-beta/`. No commit, push, merge or deployment.

## Design and messaging

- Public positioning is now **Beta**, with **Join the Beta** as the sole conversion action. Studio login retains its original destination.
- Hero uses the supplied headline, supporting line, body, audience and starting-property message. Capacity, cohort, screening and founding language have been removed from the route and metadata.
- Eight tonal chapters: near-black hero, white opportunity, off-white products, white workflow, graphite industry story, white professional standard, off-white pricing, near-black signup.
- Equal product cards become two asymmetric media presentations: large portrait Photo Reel with receding source photography, followed by landscape video and a separate portrait framing study.
- Commercial copy is reduced to the Captured → CAPLIST → More products to sell relationship. Removed source/output definition lists, qualification checklist, repeated pricing microcopy and redundant explanatory paragraphs.
- Workflow reuses `WorkflowStory`, enlarged into two columns on desktop and a single sequence on mobile. Only its Beta-specific Choose sentence changes in the shared component.
- Industry section uses the supplied statement and exactly three benefits. Pricing remains A$19 / A$89 / A$99, with the requested first-property-free line.
- Signup requires name, business, work email and website/Instagram; capture choices are optional. Removed jobs per week from both UI and transport value type.
- Inter, CAPLIST assets, shared palette, CTA styling and login destination are preserved.

## Motion

A route-local `BetaMotion` component manages viewport visibility, document visibility, reduced-motion preference and the hero's accessible pause/play control. There is no new animation dependency, polling timer or scroll listener.

The 12-second hero cycle gathers existing source imagery, separates selected assets into two portrait formats, holds, and returns to the opening image. Transform, opacity and clip-path carry the sequence. Product entry motion runs once and holds: Photo Reel advances while source images recede; a framing guide resolves before the portrait study separates. Existing workflow entry/hold behaviour is retained. Motion pauses offscreen; playing media pauses when hidden. Already-paused videos are left untouched so the observer does not initiate media loading.

Reduced motion and no-JavaScript rendering show a legible static hero composition. Videos remain user-initiated with native controls, muted initial playback, and `preload="none"`.

## Validation

Final source passes:

- `npm run lint`
- `npm run typecheck`
- `npm run build` — 25 static pages generated
- `python3 scripts/check-marketing-copy.py` — 22 HTML pages, internal links/anchors and approved existing-site copy pass
- `git diff --check`

Browser review used the local production export and development page in the Codex Chromium browser:

- 1440, 1024, 768 and 390px: no horizontal overflow, broken loaded images or missing local anchors. Responsive measurements are in `elevation/responsive.json`; screenshots accompany them.
- Distinct section colours, oversized media, mobile recomposition and four-field signup visually checked. The portrait study was moved clear of native landscape-player controls; the mobile quality comparison now stacks large media.
- Photo Reel playback advances; landscape source playback works. Offscreen playback and hero animation pause. Hero pause button freezes all five animated layers.
- Required-field validation selects the first missing field. Instagram handle accepted. Multiple capture selections retained. Valid submission shows the existing honest unavailable receipt, without navigating or leaking form data into the URL.
- Reduced-motion JavaScript branch was exercised through a **test-only matchMedia preference shim** served outside the repository source. All eight motion containers became static; hero animation names were `none` and the pause control was hidden. This tests the preference branch, not physical-device OS settings. The CSS reduced-motion guard was also inspected.
- No console errors or warnings in the production review tab. No public Founding/Open Beta, capacity, quota or jobs-per-week wording in the exported page.

The build prints an existing non-blocking warning about a parent-directory `yarn.lock`; no dependency or configuration change was needed. The pre-existing `next-env.d.ts` development-path modification was restored after builds regenerated it.

## Media and performance limits

All photography, posters and video assets are reused unchanged. Hero and reframing compositions are labelled illustrative. The Photo Reel remains an illustrative manual sample. The Vertical Video Reel is a **format study**, not a fabricated finished edit; its caption explicitly says the finished example is pending.

The landscape demo is approximately 5 MB, deferred until playback. The photo sample is approximately 248 KB. Initial production HTML references approximately 217 KB gzip of JavaScript including the shared Next.js runtime. No new runtime dependency, image generation, video encode or eagerly playing video was added. Large animated image masks may still cost paint work on older devices; no physical-device frame-rate or throttled-network benchmark was performed.

Application delivery remains unconfigured, as in the starting implementation. The form does not send or store details and does not issue a false success receipt. A delivery endpoint and representative finished Vertical Video Reel are still needed before accepting live signups or claiming confirmed pipeline output.

## Implementation files

- `app/founding-beta/page.tsx`
- `app/founding-beta/founding-beta.module.css`
- `components/founding-beta/BetaMotion.tsx` (new)
- `components/founding-beta/BetaApplication.tsx`
- `components/founding-beta/application-transport.ts`
- `components/how-it-works/WorkflowStory.tsx` (Beta-only copy)

Review evidence: this note and `docs/founding-beta/elevation/`. Shared tokens, global CSS, other route implementations, dependencies and source media are unchanged.
