# Founding Beta — approved wireframe refinement

Local review: 15 October 2026. Branch: `feature/mvp-founding-beta-landing`.
This supersedes the design-state description in `ELEVATION.md`, which records the earlier pass.

## Structure and presentation

The approved order is preserved: reduced header → hero → opportunity → products → workflow → professional quality → industry/Beta value → pricing → final CTA → separate signup → footer. Responsive layouts retain this order.

- Circular Studio login, existing destination, CAPLIST logo and minimal footer.
- One primary action, **Get started**, links to the dedicated signup section. Four required fields; capture choices optional.
- Dark hero uses the approved headline and supporting copy. Its visual occupies just over half the desktop composition.
- Opportunity is a white editorial section with the exact two-paragraph argument and a plain Captured → CAPLIST → More to sell relationship.
- Off-white products present six landscape source photographs around a large playing Photo Reel, followed by a full-width landscape-to-portrait demonstration. Prices remain A$19 / A$89 / A$99.
- Workflow is four columns at desktop widths, two at tablet widths, and one at mobile widths. Upload now shows an organised six-image 16:9 catalogue. Unlock expands, Choose selects and recedes unused media, Create resolves to two portrait products.
- Professional-quality section precedes the industry section. The large left headline and right supporting copy align at the top; a large source/output comparison follows.
- Graphite industry section, off-white pricing, centered dark closing CTA, and separate white signup create the approved tonal rhythm.
- Inter, CAPLIST tokens, photography, video assets, shared button treatment and overall brand conventions are retained. No dependency or global style changes.

## Motion and interactions

The hero has a 12-second source → catalogue → substantial CAPLIST transformation panel → two outputs → hold → return cycle. An accessible pause/play control freezes all animated layers. Motion pauses offscreen and when the document is hidden.

Photo Reel automatically plays muted when visible, retains native controls, respects a manual pause, and pauses offscreen. Reduced motion prevents automatic playback. Workflow entry animations hold after resolving. Reduced motion and pre-hydration rendering retain readable static compositions.

The landscape demonstration uses explicit play/pause and keyboard-operable seeking. One decoded video frame is painted to the landscape canvas; its exact blue-framed region is copied into the portrait canvas in the same frame callback. Both remain synchronized during playback, pause and seeking. No second video or unrelated portrait asset is used.

## Exact crop verification

A shared geometry function drives the blue outline and output extraction. A 1280×720 source uses the rectangle **x=437.5, y=0, width=405, height=720**, a centered 9:16 crop. Poster cover-fit geometry is handled consistently. Source and output have equal displayed height.

`node scripts/check-beta-crop.mjs` passes for native footage, wider/taller source and poster dimensions, and invalid inputs. Screenshot comparisons of the corresponding source/output interior regions pass on an aerial frame at 0 seconds and a bedroom frame at 13.779802 seconds. Mean absolute RGB differences are 2.57 and 1.81 on a 0–255 scale, below the preselected threshold of 5. Small differences reflect screenshot JPEG compression and subpixel resampling; this is exact framing, not a claim of byte-identical screenshot encoding.

An initial check exposed a difference between native video rendering and canvas rendering. Both views now share one canvas colour/rendering path, and the original comparison threshold was retained.

Evidence: `wireframe/crop-pixel-check.json`, matching screenshot files and DOM bounds. Geometry checks are reproducible through the script above.

## Validation

- `npm run build` passes: 25 static pages generated.
- `npm run typecheck` and `npm run lint` pass (both invoke TypeScript checking in this repository).
- `python3 scripts/check-marketing-copy.py` passes: 22 pages, approved existing-site copy, internal links and anchors.
- `node scripts/check-beta-crop.mjs` passes.
- `git diff --check` passes.
- Browser review at 1440, 1024, 768 and 390px: no horizontal overflow; desktop four-column workflow, tablet two-column workflow and mobile stacking checked.
- Hero pause control reports pressed state and pauses each animated layer. Playback, pause and seeking verified on the crop demo. Photo Reel visible autoplay and offscreen pause reviewed.
- Both Get started links target `#signup`; form has exactly four required fields and four optional capture choices.
- Reduced-motion preference branch tested through a test-only `matchMedia` shim on a localhost production-export server, outside application source. All seven motion containers become static, the hero pause button hides, and Photo Reel stays paused/unloaded. This is a preference-branch simulation, not a physical-device OS setting test.
- No production console errors observed. A development-only Next image LCP advisory was present in accumulated browser logs. The build retains the existing parent-directory `yarn.lock` warning.

## Files

- `app/founding-beta/page.tsx` — approved structure, copy hierarchy, product presentations and CTA path.
- `app/founding-beta/founding-beta.module.css` — route-only visual system, responsive composition and choreography.
- `components/founding-beta/BetaMotion.tsx` — visibility, reduced motion, pause control and Photo Reel autoplay lifecycle.
- `components/founding-beta/LiveCropPreview.tsx` — synchronized source/output canvas preview and accessible controls.
- `components/founding-beta/LiveCropPreview.module.css` — exact outline geometry and responsive preview layout.
- `components/founding-beta/crop-geometry.ts` — shared framing calculation.
- `components/founding-beta/BetaApplication.tsx` — Get started wording and optional capture question.
- `components/how-it-works/WorkflowStory.tsx` and `.module.css` — opt-in Beta catalogue and product composition; default variant unchanged.
- `scripts/check-beta-crop.mjs` — meaningful crop geometry checks.
- This note and `wireframe/` — screenshots and verification evidence.

The prior pass also removed jobs-per-week from `components/founding-beta/application-transport.ts`. The pre-existing development paths in `next-env.d.ts` are preserved after build regeneration.

## Limits and handoff

The video demonstrates live framing of existing sample footage; it does not claim to be a confirmed pipeline-generated final edit. The sample Photo Reel remains labelled illustrative. Application delivery is still unconfigured: the form clearly states that it does not send or save details and does not produce a false success receipt. These are existing launch prerequisites, not newly implemented backend features.

Local preview: http://127.0.0.1:3000/founding-beta/
Existing PR: https://github.com/mrtristantodd/caplist-studio-website/pull/20
All refinements remain local and uncommitted. No branch switch, push, merge or deployment.
