# CAPLIST Studio — Public Website

**Capture once. Create more. Sell more.**

The public marketing website for [CAPLIST Studio](https://capliststudio.com/), a B2B platform helping professional property photographers, videographers and property-media businesses manufacture additional sellable visual/motion products from media already captured at a property.

This repository contains the **marketing website**, not the authenticated customer Studio or internal R&D Lab. The separate app repository is [mrtristantodd/caplist-studio](https://github.com/mrtristantodd/caplist-studio).

## Current product boundaries

- Professional inputs: edited property photography, professional landscape video, drone photography/video and native vertical footage.
- Output catalogue is conditional on real source assets and technical/professional eligibility. The early scope centres on Photo Reels, vertical repurposing, teasers and alternative/feature edits; mixed media enters when proven reliable.
- CAPLIST is a visual-media creation/repurposing system, **not** a CRM, booking, advertising, listing, brochure, description/caption-writing or campaign distribution product.
- Brand language: **Capture once. Create more. Sell more.** The user-facing workflow is **Ingest → Understand → Unlock → Select → Create → QC → Deliver**.
- Professional fidelity, input quality, reliable rendering and unit economics govern product availability.

## Website and Studio links

| Surface | Link | Purpose / status |
| --- | --- | --- |
| Website | [capliststudio.com](https://capliststudio.com/) | Public marketing, product presentation, partner information and resources |
| Customer Studio | [caplist-studio.vercel.app](https://caplist-studio.vercel.app/) | Current Vercel project host; **customer sign-in and readiness must be verified before public activation** |
| Planned dedicated app domain | `https://app.capliststudio.com` | Intended customer URL only after DNS, TLS, deployment and access checks pass |
| Internal R&D Lab | Protected `/tests` routes of the app | Internal testing; never point public website users to an R&D preview |

The header's `AppLoginLink` already supports real navigation when both `NEXT_PUBLIC_CAPLIST_APP_URL` and `NEXT_PUBLIC_CAPLIST_APP_LIVE=true` are set. With the live flag disabled it deliberately presents a preview notice. **Do not enable the public login link until a stable customer host and sign-in are verified.** Keep a reciprocal "Back to website" link in the customer Studio, to the canonical public domain; that change belongs in the app repo and must not disturb internal R&D routes.

## Current implementation status (October 2026)

The marketing site has evolved beyond its earlier static Pass One prototype: pages include product examples, pricing, resources and partner-oriented content. The logged-in application has an established Next.js/Supabase foundation, but media rendering, customer access, delivery workflows and operational readiness must be verified by implemented and tested milestones, not inferred from marketing content or previews.

This README replaces the older static redesign note, which incorrectly said the site had only six static acts, that Log in was always a preview notice, and that Resources was only a basic checklist. Refer to current source and deployment evidence for exact behaviour.

## Development

- Next.js, React and TypeScript; locally hosted Inter and approved three-layer CAPLIST mark.
- Use approved brand references and shared design authority from the application repository, while preserving the website's lighter editorial composition.
- Build with `npm install`, `npm run typecheck` and `npm run build`; consult `package.json` for current scripts and Node requirements.
- Develop on feature branches, verify responsive browser behaviour and protected link destinations, then open a draft PR before merge.
- Do not commit secrets, enable unverified login, or mistake an internal preview for a public app.

Current relevant code: `components/editorial/SiteHeader.tsx`, `components/editorial/AppLoginLink.tsx`, `lib/site.ts`, `app/page.tsx`.
