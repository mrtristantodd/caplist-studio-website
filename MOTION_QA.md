# Caplist Studio Motion + Responsive QA Notes

## Layout collision controls

The motion system is intentionally constrained so transforms cannot collapse responsive layouts:

- **320–639 px:** short header CTA label; hero uses a fully stacked transformation view; product cards are one column; eligibility graph uses a compact source-to-output matrix.
- **640–767 px:** full header CTA label becomes available; compact hero still remains stacked; product catalogue remains one column until the medium breakpoint.
- **768–1023 px:** product catalogue becomes two columns; project eligibility switches to the visual graph but the wider three-column Studio workspace remains disabled.
- **1024–1279 px:** spatial hero canvas and spring parallax activate; project workspace remains vertically stacked to protect the centre graph from fixed-column compression.
- **1280+ px:** full asymmetric product grid and three-column Studio workspace activate.
- **1536+ px:** Studio source/output rails expand while the centre eligibility graph receives the remaining flexible width.

Desktop-only parallax is disabled below 1024 px. The product grid uses a larger 48 px row gap at XL so opposite parallax offsets cannot visually collide adjacent grid rows.

## Motion timing system

- magnetic response: spring, stiffness 310 / damping 24 / mass .42
- pointer-tilt settle: 650–780 ms using `cubic-bezier(.22,1,.36,1)`
- micro colour/border transitions: 300–500 ms
- component reveals: 540–860 ms
- hero reveal: 600–1000 ms
- shader drift: continuous, deliberately low-frequency

## Performance protections

- WebGL2 fragment shader runs visual math on the GPU.
- Shader DPR is capped to 1.5 desktop and 1.15 coarse-pointer devices.
- Coarse-pointer devices cap shader animation to 30 fps.
- Shader rendering pauses while the document is hidden.
- Pointer transforms are RAF-throttled and write CSS custom properties instead of React state.
- Magnetic effects do not run for touch pointers.
- Scroll parallax is disabled below 1024 px.
- `MotionConfig reducedMotion="user"` and CSS reduced-motion rules respect OS accessibility preferences.

## Build verification status

Verified locally on 11 September 2026 with installed dependencies:

- `npm run typecheck` passes against real React, Next.js and Framer Motion types.
- `npm run build` passes with Webpack and prerenders the home page as static content.
- `npm start` serves the production preview at http://127.0.0.1:3000.
- Browser verification at 1280 px desktop and 390 px mobile: meaningful content, no framework error overlay, no JavaScript errors, and no horizontal page overflow.
- Every in-page anchor resolves. Clicking Studio updates the hash and positions the section below the fixed navigation.
- Browser resource inspection shows no external resource requests. All scenes and example project states are local illustrations/mock data.
- Mobile hero and Studio layouts were visually inspected, including the Studio view with reduced motion enabled.

Integration fixes: magnetic controls now use Framer Motion's `HTMLMotionProps` to avoid conflicting native drag-event types. Webpack avoids the local Turbopack CSS-worker port restriction. The original design and mock interactions remain in place; no backend functionality has been added.
