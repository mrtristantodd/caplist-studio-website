# Approved marketing v3 — implementation review

Source of truth: [approved-messaging-v3.md](approved-messaging-v3.md). This replaces the earlier homepage concept and messaging directions. PR #10 stays draft; no merge or deployment is authorised by this review.

## Pass 1 — reviewed

Implemented the approved full-site copy and information architecture. The homepage includes all approved sections; Products at `/examples/` defines all eight products with client benefit, business benefit, source media and formats. Mixed Media accepts photography plus drone. Pricing uses Launch/Growth/Scale at the approved preliminary AUD prices without unapproved plan inclusions or white-label promises. About preserves the locked “product offering” line. Demo, Partners, Resources, Contact, 404, metadata and shared navigation/footer are updated.

“See Caplist in action” opens the homepage showcase. “Book a demo” opens `/demo/`; pricing links retain the selected plan. “Discuss a partnership” opens the distinct partner enquiry. The static `/early-access/` route uses the brief’s approved temporary copy and leads to Demo. Superseded concept URLs render the current homepage, remain noindex and canonicalise to `/`. Legal body text is unchanged.

The canonical brief is reproduced verbatim. Homepage, About, Demo and product copy are checked against it, as well as against the static export. All exported internal links and anchors resolve. The copy/link check also runs in GitHub CI.

## Pass 2 — design implemented; final film pending

White is the dominant surface, with graphite for the showcase, category section, Growth plan, workflow highlight and footer. Electric blue is confined to actions and details. The final CTA is smaller and separated from the workflow. Secondary pages use the same header, type scale, forms, footer and image treatment.

Property imagery now spans mainstream Australian brick and weatherboard homes, architectural/luxury properties and interiors. Product presentations retain their stated ratio. Two coherent generated Northern Beaches property references supply the showcase; provenance and prompts are in [assets/provenance.md](assets/provenance.md).

The showcase is directed: 27 professional photos + drone footage → “Finding more to offer” → five approved products → Mixed Media Reel. Fake configuration and sound controls are removed. Pause and replay control the actual choreography; video playback is integrated for the final asset. Autoplay pauses outside the viewport and when the browser tab is hidden. Reduced-motion handling skips to the final presentation and disables automatic playback.

**The final property film is not complete.** Higgsfield rejected Seedance 2.5 and Kling 3.0 with “Requires plus plan or higher”, and Grok with “Requires basic plan or higher”. No generation job was created. `lib/showcase-media.ts` remains null and the preview states that motion is being prepared. No still-image slideshow is presented as the completed motion product. To complete the brief, enable suitable video generation or supply matching footage, then add and visually assess the film and repeat playback/reduced-motion QA.

## Validation

- Production build and TypeScript: pass.
- Exact approved copy and eight product definitions: pass.
- Internal routes and anchors across 19 exported HTML pages: pass.
- Browser widths 390px and 768px: no horizontal overflow across homepage, Products, Pricing, About, Partners, Demo, Resources, Contact, Early Access and the three policy routes.
- Desktop 1440px: no horizontal overflow across all seven secondary commercial pages; homepage checked separately.
- Browser console: no warnings or errors during the page sweep.
- Visual checks: desktop homepage, showcase result, Pricing; mobile homepage and Products; tablet enquiry form.
- Mobile navigation opens, follows Products and closes: pass.
- Product ratios measured in-browser: Photo Reel and Vertical Video Reel 9:16, six landscape examples 16:9.
- Demo and Partner forms reach review with the correct email draft; Contact privacy enquiry routes to privacy@capliststudio.com. No email was sent.
- Contact and Partner edit forms now preserve entered values and focus the review heading. Contact restoration visually verified, including the email field. Partner restoration verified by reopening review and confirming all values, including the email address and selected services.
- Responsive derivatives: existing 480/960/1600/2200px system preserved; new 1672px originals have 480/960/1600px WebP derivatives without enlargement.
- Reduced-motion branch and CSS reviewed. Live reduced-motion emulation is unavailable in the connected browser API; final motion/accessibility review remains open.
- Final full motion, frame-to-frame fidelity and film sharpness: blocked on the film asset.

Do not mark the PR ready, merge or deploy until the remaining motion checks pass and the user explicitly approves release.
