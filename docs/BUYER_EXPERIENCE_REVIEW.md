# Caplist buyer experience — design and launch review

## The Good

- The dark editorial palette, property photography and blue accents give Caplist a coherent identity. Preserve them.
- The proposition is commercially relevant to property media businesses: extend an existing capture into products an agent or agency can use. The revised hero explicitly connects both businesses.
- Five named deliverables with durations and formats help a buyer understand the catalogue. Static homepage thumbnails preserve scanning; motion belongs in examples and intentional previews.
- Pricing now has a deliberate progression: Essential in slate, Pro in blue and Studio in warm charcoal/gold. Standard home → architectural home → luxury home illustrates varied briefs without restricting a tier to a property class.

## The Critical

1. **Commercial certainty is still missing.** A premium pricing page cannot replace agreed wholesale prices, exact output counts, duration choices, format eligibility and revision allowances. Working scope is labelled; do not present it as a live purchase offer. Earlier planning’s example client resale prices are not Caplist prices.
2. **The product proof is not customer proof.** Existing pictures are generated concepts and previews animate stills. The new single-image framing study is accurate about what it demonstrates. It cannot substantiate turnaround time, rendering quality, commercial outcomes or customer satisfaction. Replace it with an approved real-property before/after once available.
3. **Conversion is an email enquiry, not account creation.** A buyer can select a tier, prepare a brief, review it and open an addressed email draft. Only their email client sends it. The website cannot confirm receipt, send automated follow-ups or measure successful delivery. A production submission endpoint with a durable receipt is the next functional upgrade.
4. **Trust needs operational evidence.** No customer quotes, quantified case studies, security certifications, vendor processing list, retention schedule or final music licensing terms were supplied. Publish none as facts. The media page states the owner's no-reuse commitment and separates it from operational terms that must be agreed before transferring files.
5. **The target audience must remain specific.** This interface communicates property media production, not an enterprise syndication or ad-tech network. Broad “media executive” positioning would weaken it. Lead with the media business buyer, then the downstream property agent/agency; add enterprise stakeholder journeys only when the service actually supports them.

## The Polish

- Keep one headline hierarchy, readable 14–16px feature copy, consistent 24–32px card padding and a restrained radius system. New buyer surfaces share tokens in app/buyer-experience.css.
- Tier emphasis should come from scope, inheritance and visual weight. “Recommended” is a design recommendation; “best seller” needs sales evidence.
- The avatar-only header control has a 44px target and an accessible Sign in name. Account access remains explicitly unavailable in its dialog.
- Avoid putting key decisions behind animation. Keep motion pausable and respect reduced motion; do not add more ambient effects to pricing or the enquiry form.
- No dashboard exists here. The “1 / 5 / More” equation is a marketing illustration, not operational analytics. A future dashboard should expose property status, required action, output formats, revisions and delivery dates before decorative charts.

## Next Steps

- Finalise the tier schedule: Caplist price, billing unit, product count, supported lengths, formats, variants, revisions, exclusions and turnaround commitment. Validate each promise against the delivery process.
- Complete one consented property pilot. Record source files, generated outputs, intervention required, delivery time and buyer feedback. Obtain written permission for every asset and quote used publicly.
- Agree file transfer, processors, access, retention/deletion and commercial music rights before accepting media. The current page is a transparent commitment, not a claim of implemented enterprise controls.
- Connect the pilot flow to a receiving service when provided. Send success only after persistence; provide a reference, response expectation and a recoverable failure state. Keep the current email path as fallback.
- Run the representative-buyer study below. These sessions have not been conducted.

## Representative-buyer test protocol

Recruit five participants: two independent property photographers, two owners/operators of small media teams, and one agent/agency buyer. Use people who have not seen the pitch. Obtain recording consent; do not lead with an explanation of Caplist.

1. Show the homepage for 20 seconds, then hide it. Ask: “What does this business do, who buys it, and who uses the result?”
2. Ask them to find a suitable output for a stills-only listing. Record whether they confuse a format preview with a delivered video.
3. Give a client brief with one social placement, then one with multiple placements. Ask which tier they would enquire about and why. Record unanswered price/allowance questions.
4. Ask what they would receive, how they could resell it and what obligations they believe they are accepting.
5. Ask them to start a pilot with fictional contact information and stop at review. Ask whether anything has been sent, what happens next and whether they would share media yet.
6. Ask where they would check reuse rights and file handling.

Capture exact answers, first-click path, hesitation, completion, errors and confidence (1–5). Target at least 4/5 participants correctly explaining the buyer/client relationship and next action without prompting; all participants must recognise that the request has not been sent at the review step. These are proposed acceptance criteria, not measured results.

## Pilot follow-up operating draft

Not automated. Not sent. Tristan reviews each received email.

- Acknowledge the actual request and repeat the client's intended placement and available source media.
- Ask only for missing scope details; do not request files before media-handling arrangements are agreed.
- Reply with an explicit proposed delivery: products, duration, aspect ratios, variations, music usage, revision count, price/tax treatment, timing and exclusions.
- Confirm how the buyer approves the scope and how their files will be transferred, processed and deleted.
- After delivery, request feedback. Ask separately for permission to publish a case study or testimonial; participation does not imply consent.

## Source and verification limits

CAPLIST.zip contains two SVG graphics, not pricing or product specifications. No archive code was executed. The supplied three pricing screenshots informed layout and hierarchy, not copied prices or capabilities. Tier features use the existing Caplist planning scope; additional statements remain provisional where exact allowances are unconfirmed.

Automated checks cover layout and functionality, not buyer comprehension or production security. No real customer outreach or email submission was performed.

## Implemented verification

- Production build and TypeScript checks passed.
- Existing page suite: homepage, pricing, examples and resources across seven widths (320–1932px); no horizontal overflow, broken visible images or clipped primary controls.
- Buyer-flow suite: pilot, media policy and contact across four widths; tier handoff, required-field validation, review state, intercepted email handoff, edit persistence and accessible sign-in dialog passed.
- All three output aspect ratios checked at 320, 390, 768 and 1440px. The final source photograph retains its original 3:2 ratio; the output crop includes the same safe inset shown in the source frame.
- No browser runtime errors. One screenshot wait for network idle timed out; checking the loaded page and decoded image directly succeeded with HTTP 200.
- No email was sent, and no actual buyer interviews were conducted.
