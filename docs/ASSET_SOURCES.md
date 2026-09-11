# Demo photography and brand assets

All website media is served from `public/media`. `lib/demo-media.ts` contains the replaceable asset map, descriptions and product concepts. Images are real photographs used as isolated demo assets; this is not a documented single-property shoot. Photography and video labels illustrate possible supplied media, not actual uploaded files. Product previews are still compositions, not generated video.

| Local asset | Source | Credit / status |
| --- | --- | --- |
| `exterior-*.webp` | https://unsplash.com/photos/modern-house-with-large-windows-at-dusk-cUoXTLVFQ9M | Michael Brown / Unsplash. Source page marks the photograph free under the Unsplash License. |
| `kitchen-*.webp` | https://unsplash.com/photos/a-kitchen-with-a-wooden-table-and-white-cabinets-RpEK31-DgVI | Alex Tyson / Unsplash. Source page marks the photograph free under the Unsplash License. |
| `living-*.webp` | https://images.unsplash.com/photo-1600210492486-724fe5c67fb0 | Temporary Unsplash interior reference. Photographer attribution not resolved; replace with approved production imagery before publication. |
| `aerial-*.webp` | https://commons.wikimedia.org/wiki/File:Drone_view_of_houses_(Unsplash).jpg | Richard Horne. Wikimedia Commons identifies this 2017 Unsplash photograph as CC0. |

Four prebuilt WebP variants per photograph are addressed by a custom Next Image loader. No image optimisation endpoint or external request is needed at runtime. The aerial source has a smaller original resolution than the other demo files.

The rising-bar logo and geometric wordmark are scalable vector interpretations of the user-supplied brand board, approved for this direction in the task. Replace with master vector brand artwork when available. The four corners are retained solely as photographic framing details.

Inter is hosted locally. Source: https://github.com/rsms/inter . The SIL Open Font License is included at `public/fonts/OFL.txt`. Next local-font loading preloads the font and supplies an adjusted fallback to prevent layout shift.

The supplied visual references are preserved in `docs/review/design-reference.png` and `docs/review/brand-reference.png`.
