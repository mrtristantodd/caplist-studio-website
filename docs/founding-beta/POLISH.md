# Founding Beta — product-owner polish

Local-only refinement of `/founding-beta` on `feature/mvp-founding-beta-landing`.

## Canonical identity reuse

Reused `CaplistMotionLogo` from `components/brand/CaplistMotionMark.tsx`, also used by `components/homepage/HomepageV2.tsx`. The exact approved asset is `/brand/motion/caplist-logo-motion-dark-transparent-short-2s-web.svg`. No artwork, frame geometry, wordmark paths, motion values or asset files were changed.

The shared component now supports an opt-in controlled mode: its existing SVG SMIL timeline runs for two seconds, freezes at its resolved frame for six seconds, then gently fades across the replay boundary. The homepage does not opt in and retains its previous playback. The Beta stage supplies visibility and pause state through `BetaMotionLogo`; the animation stops offscreen, when the document is hidden, or when paused. Reduced motion uses the existing `/brand/caplist-horizontal-on-dark.svg` lockup with no animated object.

The graphite panel is stable and matches the source catalogue's width. The six source thumbnails retain 16:9 framing. Selected images receive a restrained blue edge; other images dim slightly without translating, scaling or reshuffling. The motion identity is optically centered in a fixed-height area, with the supporting line below it. Finished-product previews remain in a dedicated aligned row. Detached explanatory/footer text was removed; the compact pause control is inside the stage.

## Page cohesion

- Commercial relationship is a deliberate horizontal source / transform / output flow, with concise stage labels, blue connectors and no redundant descriptions.
- Photo Reel uses stable photographs and a single opacity crossfade into the portrait format preview. Automatic video playback and spatial motion were removed from this showcase. The separate professional-standard sample retains its manual video controls.
- Standard section padding reduced by approximately 20% (10vw to 8vw; mobile 88px to 70px). Workflow-to-quality spacing is deliberately tighter at 64px per side on desktop and 48px on mobile.
- Product showcases remain unified on the off-white surface, followed by “Both from one property — A$99” and a prominent “Your first property is free.”
- Workflow visuals retained, stage typography enlarged, decorative stage icons hidden in this route, and the illustrative workflow caption removed.
- Professional comparison explicitly labels PROFESSIONAL SOURCE and FINISHED PRODUCT, with a larger blue arrow. Supporting copy remains top-aligned.
- Graphite Beta section now uses WHY JOIN THE BETA NOW and the three requested benefit statements, without detached introductory text blocks.
- Pricing uses “Beta pricing” with the free first-property benefit prominent. Final CTA, signup heading and submit button use “Join the Beta”.

## Qualification form

Five required identity/contact fields: name, business, work email, mobile and website/Instagram. Added the requested shoot-volume select, capture checkboxes, product-interest radio group, recent-media radio group, optional workflow textarea and required contact consent. Native labels, fieldsets/legends, autocomplete hints, visible focus styles and keyboard-operable controls are retained.

Transport and backend were not changed in this pass. The added qualification fields are present in the preview UI but are not persisted or delivered; the existing adapter still accepts its previous payload and returns an honest unavailable receipt. Its existing pre-pass change in Git status is untouched.

## Validation

- `npm run lint` — pass.
- `npm run typecheck` — pass.
- `npm run build` — pass, 25 static pages.
- `python3 scripts/check-marketing-copy.py` — pass, including existing-site copy and links.
- `node scripts/check-beta-crop.mjs` — pass. The live crop implementation was not modified.
- `git diff --check` — pass.
- Desktop 1440px, tablet 768px and mobile 390px reviewed; no horizontal overflow. Catalogue and panel share the same horizontal bounds; source thumbnails retain 16:9 ratios.
- Live crop playback and seeking checked: 1280×720 source, matching 9:16 outline/output and equal rendered heights. Source outline width 296.109px versus output 296.117px at 1440px, the expected browser subpixel rounding difference.
- Pause/resume and stable panel layout checked. The canonical asset's initial frame, duplicated frames and resolved identity were visually observed. Reduced-motion fallback verified with the existing test-only localhost `matchMedia` shim; all motion containers static, pause hidden, and the canonical static lockup shown. This is a preference-branch simulation, not a physical OS-setting test.
- Form required-field validation focuses the first missing field; after filling the five required fields, missing consent prevents submission and receives focus. Keyboard Space checks consent, Tab reaches the visible-focus submit button, and submission retains the existing unavailable receipt. Only fictional local QA details were used.
- React review: no new dependency; canonical SVG is reused instead of copied; animation state stays in refs; frame callbacks and preference/visibility listeners clean up on unmount.

Evidence is in `polish/`. The pre-existing development-path contents of `next-env.d.ts` were restored after build regeneration. No commit, push, merge or deployment was performed for this pass. The earlier Vercel preview does not include these local changes.
