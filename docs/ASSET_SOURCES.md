# Active luxury concept assets

The September 11 luxury revision replaces every active property image with five AI-generated concepts. These are fictional Australian/Sydney Harbour-inspired architectural visualisations, not photographs of actual listings, actual supplied media, or completed client outputs. The website footer, example-page introduction and image alt text identify the concept imagery.

| Asset family | Art direction | Original generated file |
| --- | --- | --- |
| luxury-exterior | Contemporary twilight waterfront mansion and infinity pool | exec-02a68491-caab-4962-8d97-841ca779a4d9.png |
| luxury-living | Grand Mediterranean-style harbour interior | exec-b8db813c-da09-4a42-a3c8-8de3d8d2c115.png |
| luxury-kitchen | Quartzite, walnut and bronze kitchen with harbour outlook | exec-36dbb029-6247-4ea0-9065-7ff4dbdfa475.png |
| luxury-aerial | Large harbourfront estate, tennis court, pool and private jetty | exec-e5c8835c-d063-4c11-b276-72725bb78da5.png |
| luxury-coastal | Classical white coastal mansion and landscaped pool | exec-b61dc22a-2d58-4f0e-8a6d-90bb3a85d47b.png |

Generated with the built-in image generation tool. Originals remain in `/Users/nattee/.codex/generated_images/01a08d32-2417-7cc0-b28e-a54dee787391/`. Responsive WebP copies are in `public/media`, referenced only through `lib/demo-media.ts`. All website image requests remain local.

## Archived previous image sources

The following describes superseded demo imagery, not the current active site.

# Demo photography and brand assets

All website media is served from `public/media`. `lib/demo-media.ts` contains the replaceable asset map, descriptions and product concepts. Images are real photographs used as isolated demo assets; this is not a documented single-property shoot. Photography and video labels illustrate possible supplied media, not actual uploaded files. Product previews are still compositions, not generated video.

| Local asset | Source / location | Credit |
| --- | --- | --- |
| `au-exterior-*.webp` | R Architecture / Unsplash photo `2gDwlIim3Uw`, mirrored at https://ceqld.com.au/wp-content/uploads/2021/12/r-architecture-2gDwlIim3Uw-unsplash-2.jpg . Project visually matched against https://innowood.com/project-parkdale-house/ | Parkdale House, Victoria. R Architecture; project photography credited to Dylan James by Innowood. Unsplash source attribution retained; original page currently unavailable. |
| `au-living-*.webp` | https://www.pexels.com/photo/the-living-room-of-a-house-12913258/ | Windows Doors / Pexels. Sydney, NSW, as located on source page. |
| `au-kitchen-*.webp` | https://www.pexels.com/photo/white-over-ordered-kitchen-15229628/ | Pexels. Crows Nest, NSW, as located on source page. |
| `au-aerial-*.webp` | https://www.pexels.com/photo/aerial-photography-of-houses-near-body-of-water-1556883/ | Pexels. Sylvania Waters, NSW, as located on source page. |

Four prebuilt WebP variants per photograph use the existing local image loader. All active media now depicts Australian properties. Previous demo images remain archived in the repository but are not referenced by the website. These examples are from different shoots; they illustrate the product concept.

Current live logos use the approved artwork supplied in `CAPLIST STUDIO LOGOS - SVG.zip` and `CAPLIST STUDIO LOGOS - PNG.zip`. The SVG paths and fills are preserved in `public/brand/`; only export view boxes and required file formats were adapted. Standalone app, social and favicon tiles use the approved reversed mark on `#0B0D10`, with the original blue centre accent. The four corners are retained solely as photographic framing details.

Inter is hosted locally. Source: https://github.com/rsms/inter . The SIL Open Font License is included at `public/fonts/OFL.txt`. Next local-font loading preloads the font and supplies an adjusted fallback to prevent layout shift.

The supplied visual references are preserved in `docs/review/design-reference.png` and `docs/review/brand-reference.png`.

## Brand kit and September 11 refinements
- Historical brand source for the September 11 iteration: user-supplied `Screenshot 2026-09-11 at 2.20.06 PM.png`. Its reconstructed vector interpretations have since been superseded by the approved supplied logo archives above.
- Reusable light/dark icon, horizontal, stacked and wordmark SVGs: `public/brand/`.
- Six additional fictional property concepts generated with OpenAI image generation: suburban, weatherboard, familyKitchen, familyLiving, bathroom, bedroom. Responsive WebP variants are locally hosted in `public/media/`.
- Two catalogue properties now show architectural suburban homes. Harbour imagery remains for drone examples. Five-product range retained at the user's request.
