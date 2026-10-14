# How it works v2 — review

Branch: `feature/how-it-works-v2`, based on `design/website-v2-polish` at `a6ec178`. The stacked PR preserves the current reviewed header, circular account utility and preceding visual refinements. No merge or production release is included.

The supplied concept is composition/art direction. Existing website primitives, Inter, tokens, approved logos and shared app design authority govern implementation. App authority was read only. No app, authentication or database code changed.

## Implementation

- New eight-section `/how-it-works` page: explanatory hero, four-stage sequence, source-to-products composition, progressive catalogue, quality comparison, creative intent, real-media review and final acquisition CTA.
- Reuses `InnerPage`, header/footer, `AccessLink`, exact `HeroWorkflowDemo`, DP001 media and its existing reel. No logo animation replaces the product demonstration. Static logo artwork identifies the transformation, not a new animated asset.
- Workflow breakpoints now respond to the component container rather than the viewport. This prevents tablet column content overlapping the footer. Existing responsive rules and animation logic are reused.
- The six-output opportunity is labelled “Example property”: the source materials do not establish six actual unlocked outputs. Existing workflow demonstration retains its own five-product example. The quality comparison explicitly labels simulated blur; no fabricated assessment scores or customer results. Creative controls are an explanatory composition, not a pretend working editor. QC has actual native video controls; the review checklist is informational.

## Acquisition architecture

- Get started → configured Studio `/signup`, including pricing plans. Pricing amounts unchanged; no unsupported plan-selection parameter invented.
- Studio login → configured Studio `/login`, accessible via unchanged circular header utility and footer.
- See CAPLIST in action → `/how-it-works`; homepage hero contains only the primary Get started action.
- Book a demo exists as one deliberate sales entry on Pricing, under “Running a larger property-media business?”. Contact points there. No repeated footer/header/hero sales CTA. The existing demo form and legacy `/pilot` redirect remain functional.
- Homepage closing copy now supports account entry. The approved messaging record and its checker were updated for this explicitly approved copy revision.

## Verification

- `npm run lint`: pass (repository alias for TypeScript checking).
- `npm run typecheck`: pass.
- `npm run build`: pass, static export includes new route.
- `python3 scripts/check-marketing-copy.py`: pass, 21 HTML pages, eight catalogue definitions, internal links/anchors, approved copy and new CTA architecture.
- Local production-export browser: 320/390/768/1024/1440px new-page widths, no document overflow; Inter and 11px eyebrow confirmed; no broken source previews. Actual desktop, tablet and mobile views reviewed.
- All eight workflow states checked at 390/768px with no scene overflow; animation pause toggles state correctly. QC reel plays with no media error.
- Homepage, Pricing, Products, Contact and About checked at 390/768/1440px; no horizontal overflow, no Try CAPLIST, one demo link only on Pricing. Mobile navigation preserves one header acquisition control and closes on navigation.
- Signup/login destinations verified against existing configuration; account creation and authenticated app behaviour are outside this website task. No form submissions performed. Existing reduced-motion handling remains in the reused animation; OS preference emulation was not available.

Hosted preview and CI results are recorded on the PR. Approval is required before merge or production deployment.

## Copy refinement

- Public sequence: Upload → Unlock → Choose → Create, with concise customer benefits and geometric icons.
- Removed internal assessment criteria, catalogue caveats, transformation explanation, detailed creative-control wording and redundant review caption/body.
- Opportunity uses “Example property”; quality uses “Example only — blur simulated.”
- Early access now describes account creation rather than a sales conversation.
- Layout, responsive breakpoints, media, animation, pricing and CTA destinations remain unchanged.

Refinement validation: lint, typecheck, production build and marketing checker pass (21 pages, eight product definitions). How it works, homepage, Pricing and early access checked at 390/768/1440px: no horizontal overflow, no sparkle icons on the revised page, no secondary homepage hero link, Studio login retained, and one Book a demo entry on Pricing. Mobile/tablet/desktop compositions visually inspected.

## Animated four-step media story

Added isolated WorkflowStory component and scoped styles. Existing DP001 media settles into a capture frame, expands into six cards, narrows to two blue selections, then recomposes into four representative outputs. Desktop timing is 3.3 seconds with one iteration and a held final state; mobile stages activate independently as they enter view. Intersection and document visibility pause animation without resetting it. Reduced motion and no-JavaScript rendering show complete static compositions. No new dependency or approved copy change.

Validation: lint/typecheck/build and marketing checks pass. Visual checks at 1440, 1024, 768 and 390px show four columns through tablet and vertical mobile stages, with no horizontal overflow. Focused lifecycle checks cover viewport pause/resume, hidden-tab pause/resume, reduced-motion state and cleanup. Reduced-motion CSS disables all story animation; OS preference emulation is unavailable in the browser tooling. Existing hero animation is unchanged.
