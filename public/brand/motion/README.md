# CAPLIST motion identity assets

## Canonical website assets

These are the user-supplied short 2-second SVG motion assets used by the marketing site:

- `caplist-logo-motion-light-transparent-short-2s.svg` — use on light website surfaces
- `caplist-logo-motion-dark-transparent-short-2s.svg` — use on dark website surfaces
- `caplist-logo-motion-light-exact-wordmark-short-2s.svg` — light-scheme lockup with supplied wordmark
- `caplist-logo-motion-dark-exact-wordmark-short-2s.svg` — dark-scheme lockup with supplied wordmark

The transparent SVG variants are preferred for the site because the surrounding component owns the background colour and SVG keeps the mark crisp at any size.

## Supplied distribution exports

The source package also includes matching:
- MP4 1080 exports
- WebM 1080 exports
- transparent WebM exports
- ProRes 4444 MOV transparent masters

These are distribution / editing masters rather than runtime website dependencies. Keep them in the CAPLIST brand documents / logo source folder. Do not load the MOV masters on the marketing site.

## Usage rule

The original solid CAPLIST Studio mark remains the primary static identity for persistent navigation, favicon, social avatar and product chrome.

The rotated-frame motion identity is a secondary narrative device representing:

**one capture → duplicate → reframe → multiple professional outputs**

Use it only at selected storytelling moments. Respect `prefers-reduced-motion` by falling back to the static logo.
