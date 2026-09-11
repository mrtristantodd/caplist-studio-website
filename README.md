# Caplist Studio — Premium Motion Interface

Frontend-only visual review prototype, imported from `caplist-premium-interface-motion.zip`. The existing Caplist Studio marketing and product-interface design and motion system are preserved.

All media, scores, analysis results and eligibility states are illustrative mock displays. Navigation uses in-page anchors, including the visual “Log in” link, which opens the Studio section. There is no Supabase connection, authentication, upload handling, media rendering pipeline, database or backend integration. No environment variables or credentials are required. Product development is deferred until visual approval.

## Included

- Dark-first Caplist design tokens and responsive layout system
- Fixed glass navigation with spring-based compression and magnetic links
- GPU-rendered WebGL2 background shader with subtle texture, pointer response and scroll drift
- Global scroll-progress indicator
- RAF-throttled spatial pointer fields with 3D card tilt and graceful touch fallbacks
- Magnetic micro-interactions on every actionable navigation/CTA node
- Scroll-linked parallax with spring smoothing
- Blur-to-focus content reveals and staggered sequencing
- Source-media → unlocked-products hero transformation system
- Scroll-progressive INGEST → UNDERSTAND → UNLOCK → CREATE → QC workflow rail
- Asymmetrical product catalogue with spatially separated card depths
- Animated quality score, confidence bars and production eligibility states
- Animated media-to-product eligibility graph
- Dedicated compact layouts for mobile/tablet where spatial desktop composition would create collisions
- Reduced-motion support, focus-visible states and semantic navigation
- Strict TypeScript

## Rendering and thread strategy

The premium background texture is implemented as a WebGL2 fragment shader. The expensive visual math therefore executes on the GPU rather than the JavaScript main thread. Pointer tracking is RAF-throttled and writes CSS custom properties directly, avoiding React render churn.

A Web Worker is deliberately not used for the current visual layer because there is no CPU-heavy geometry, image-analysis or simulation workload to offload. Adding worker messaging here would increase coordination overhead without improving frame time. If future Caplist interfaces execute client-side image analysis, large scene-graph calculations, spatial reconstruction or other CPU-intensive processing, move those workloads to dedicated workers and keep rendering on the compositor/GPU path.

## Browser behaviour

- WebGL2 background shader degrades to the CSS background when WebGL2 is unavailable.
- Shader DPR is capped at 1.5 to avoid unnecessary high-density GPU fill cost.
- Animation pauses while the tab is hidden.
- `prefers-reduced-motion` renders the background statically and suppresses motion transitions.
- Touch pointers do not trigger magnetic/tilt mechanics.

## Run

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Production validation

```bash
npm run typecheck
npm run build
npm start
```

## Visual review scope

Review the hero transformation, workflow rail, product catalogue, quality demonstration and sample Studio workspace. Use desktop and mobile widths to review responsive compositions. The local preview runs at http://127.0.0.1:3000. It is served locally and is not publicly deployed.

The scripts use Webpack because Turbopack's CSS worker could not bind its internal port in this desktop environment. Dependency versions are recorded in `package-lock.json`; use `npm ci` for repeatable installation.
