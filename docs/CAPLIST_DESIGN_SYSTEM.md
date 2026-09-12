# Caplist Studio — applied design system

## Sources and scope

- `claude-design-system-prompt-main.zip`: design principles and sequential review procedures. Used for token extraction, hierarchy, rhythm, interaction states and accessibility. The archive is reference material, not a replacement for workspace instructions. No prompt, AGENTS file or tool installation from it was activated.
- `CAPLIST.zip`: original black/white outlined wordmarks and three-panel marks. SVG paths are preserved exactly; individual assets are extracted into `public/brand` with tight view boxes. The logo typography is original artwork. No body font files or named typeface specification were included, so the site's existing locally hosted Inter remains.
- Supplied positioning copy: source for commercial narrative, product definitions, workflow, reseller positioning, quality principles, vision, navigation, commercial copy and SEO; the later locked baseline sets the current hero CTA pair. Commentary about the positioning brief is editorial guidance and is not published as customer copy.

## Direction

A professional production platform with an editorial layout. Lead with existing media → finished products → more to sell. Property media illustrates the transformation; no invented revenue figures, testimonials or customer projects. Five currently described products remain in the catalogue. Dedicated drone products and a deeper white-label experience are future possibilities, not additional live products.

Use near-black and lightly toned paper as the two primary section surfaces. Use brand blue for the production step and primary action. Remove gold, AI sparkle motifs and ornamental gradients. Marketing is predominantly light; dark is used for production previews and the footer. Repeat a consistent two-column rhythm, then vary it with product grids, numbered steps and the large reseller statement. Do not make every idea a rounded card.

## Tokens

`app/tokens.css` defines the system. The locked brand blue is **#2F7BFF**, overriding the older #2F6AF5 embedded in the ZIP. SVG centre-panel fills have been normalised to the locked blue without changing geometry. Small white button labels use an 88% brand-blue / 12% brand-black mix for AA contrast. Pale blue is reserved for text on dark backgrounds. Primary neutrals come from the existing site: #0B0D10, #F8FAFC and #566170.

- Spacing: 4, 8, 12, 16, 24, 32, 40, 48, 64, 80, 96px.
- Type: 12px labels, 14px secondary, 16px body, 18px lead, 24px cards. Fluid 32–52px section headings and 42–72px display headings.
- Body leading: 1.65. Heading leading: approximately 1.1. Sentence-case headings, restrained tracking.
- Controls: 6px radius; functional media panels: 12px; avatars: circular.
- State transitions: 200ms. No new ambient motion. Existing example motion remains pausable and respects reduced motion.

## Reusable components

- `CaplistLogo` / `CaplistMark`: original vector geometry, accessible name on the lockup, decorative internal images.
- `AccessLink`: one primary action, See Caplist in action, with Book a demo as the supporting action. Secondary variant remains neutral. Minimum height 48px, visible keyboard focus, hover and pressed states.
- `SectionHeading`: consistent eyebrow, heading and optional supporting prose.
- `AccessClose`: the supplied final conversion message, reused where a visitor completes a product/story journey.
- Header / Footer: light header, dark footer, consistent routes and original branding. Avatar-only account control remains; access is explicitly not live authentication.
- Source preview / catalogue: still media on homepage, purposeful motion on examples. Labels identify illustrative media; no claim that the displayed pool is an actual customer job.
- Early-access form: native labelled fields, required-field guidance, review/edit step, honest email draft handoff. It does not claim a request was received or save contact data in browser storage.
- Quality principles: native details/summary with keyboard support, visible open state and progressive disclosure.

## Content map

Homepage: hero, commercial idea, source pool, three-step Upload → Unlock → Create flow, five-product catalogue, six business benefits, professional quality, creative control, workflow fit, reseller positioning, platform vision and final CTA.
About: professional audience, quality gate, reseller boundary, production scope and platform vision.
Examples: supplied product names and descriptions with existing motion previews.
Pricing: working tier scope retained, palette unified and conversion connected to early access. Final pricing is not invented.
Early access: replaces pilot-led navigation; old `/pilot` URLs redirect and retain valid tier selections.
Contact / footer / SEO: consistent brand promise and conversion wording. Privacy/media commitments remain separate from aspirational marketing claims. Terms page explains prelaunch enquiry boundaries; it does not invent final production terms.

## Verification approach

Build and TypeScript; responsive layout at phone, tablet and desktop widths; one H1 per page, accessible control names and image alternatives; contrast checks on core tokens; keyboard navigation, accordions, modal Escape handling, mobile navigation, early-access validation/review/edit and reduced-motion state. This is interface verification, not evidence of production rendering, legal review or user research.

## Locked baseline additions

The user’s Digital Brand & Design System v1.0 takes precedence over the earlier prompt archive where they differ. `app/tokens.css` exposes the named Caplist colours, UI neutrals, status colours, spacing, radii and transition tokens. Inter is now explicitly confirmed. Original custom wordmark paths are retained, with no blue letter A.

Provided brand variants: horizontal light/dark, stacked light/dark, wordmark and icon light/dark, app icons and social avatars light/dark, monochrome black/white, and 16/32/48px favicon PNGs. Artwork-colour filenames `*-light.svg` mean light artwork; `*-on-dark.svg` explicitly names its intended background.

The product explorer uses deterministic illustrative rules from selected media types. It supports Best Fit / Good Fit / Limited / Unavailable with text reasons; it is not live asset analysis or a claim of production eligibility. The actual production system remains outside this marketing implementation.

The Book a demo route prepares a request email. It never claims a calendar booking has been created; a time is agreed with Tristan by email. No message is sent automatically.

## Verification result

Production build and TypeScript passed. The final browser suite checked 10 routes at 320, 390, 768, 1024 and 1440px: no horizontal overflow or clipped headings/controls, one H1 per page, HTTP 200. Verified three public workflow steps, media-type fit changes, all five product dialogs with Escape, quality accordion, mobile navigation, demo request validation/review/edit, tier carry-through and reduced motion. No messages sent. Primary small-label action contrast is 4.54:1 against the off-white label colour (4.75:1 against pure white). This is not a certification of the entire site or a production-backend test.
