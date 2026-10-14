# Website Design System v2 refinement

Review branch: `design/website-v2-polish`. No production release authorised.

## Baseline and authority

The brief's approved circular login, Try CAPLIST entry and final CTA composition are on `feature/public-studio-entry` at `55ff7dd`, not current `main` (`8152029`). This review starts from that approved treatment; compare changes against `55ff7dd`. Existing main-only client-login styling is not reintroduced.

Read-only design authority: `mrtristantodd/caplist-studio`, `feature/p1-r3-saas-hierarchy-polish`, `docs/CAPLIST_PRODUCT_DESIGN_CONSTITUTION_V2.md` and `docs/DESIGN_SYSTEM.md`. The documents match the local design-authority checkout. No Studio files changed.

## Audit and change plan

1. Geometry: inconsistent 3/4/5/6px website geometry despite existing 8/12/16px tokens. Converge controls to 8px, media to 12px and the large demo surface to 16px. Retain circular login and semantic metadata geometry.
2. Colour/iconography: static source-type icons use blue alongside genuine selection/creation states. Make those neutral; remove unnecessary icon tile backgrounds. Retain the existing Lucide family at a consistent 1.7 stroke. Preserve blue for interactions and production states.
3. Buttons/CTAs: unify primary action shade and control geometry, preserve subordinate header acquisition control and tertiary demo link. Retain the contrast-adjusted brand-blue action token prescribed by the shared design system.
4. Borders/shadows: replace tinted media shadows with a diffuse neutral shadow. Remove redundant containment around explanatory demo panels, form outer border and static recommended-plan blue border. Preserve media objects, selected-state borders and readable form controls.
5. Typography: retain local Inter and editorial headline sizes/character; normalise control and demo weights. Align closing eyebrow and motion-label size, tracking and line-height.
6. Spacing: replace recurring off-rhythm gaps/paddings with shared 8px rhythm tokens. Keep optical offsets for the official SVG's internal whitespace.
7. Motion: use shared 180/280/520ms tokens and `.22,1,.36,1` easing for existing interactions. Preserve multi-second narrative sequencing and official motion artwork; add no new animation.
8. Responsive: maintain editorial columns through tablet; fix inherited named-grid rows that defeated the closing section's two-column rule. Keep the dense hero demo stacked where its minimum content widths require it. Ensure 44px header/menu targets and deliberate mobile spacing.

## Preserved

Homepage architecture, section order, dark hero/light editorial balance, copy, logos, favicons, property imagery and crops, official motion mark, product positioning, Studio /login and /signup destinations, pricing data and all application/auth/backend behaviour.

## Validation

- `npm run lint`: pass (the repository defines lint as `tsc --noEmit`; no separate ESLint configuration).
- `npm run typecheck`: pass.
- `npm run build`: pass; 23 static routes/assets generated.
- `python3 scripts/check-marketing-copy.py`: pass across 20 HTML pages, eight product definitions, approved copy and internal links/anchors.
- Browser layout checks: homepage at 320/390/768/1024/1280/1440px; Products, Pricing, Demo, Resources, About and Contact at 390/768/1440px. No document overflow or clipped visible controls. Confirmed Inter computed font on every checked page.
- Browser visual inspections: desktop homepage/product catalogue; tablet homepage/pricing; mobile hero, closing CTA/motion identity, enquiry form and expanded menu. Verified paired closing labels share the same Y coordinate at tablet width, 44px header targets, 8px form field radius and visible keyboard focus.
- Fixed a pre-existing font-variable scope defect: the root font alias referenced a variable previously declared only on body. Declaring the local-font class on html makes Inter resolve for the shared tokens.
- Existing reduced-motion guards for the workflow and official mark are preserved; refined CSS transitions disable under reduced motion. OS preference emulation was not available in the connected browser API.
- No copy, pricing values, product data, auth URLs, favicon, official brand/motion assets or application/backend files changed.
- Hosted preview verification follows publication of this review branch. Human design approval remains pending.
