> Historical reference. Superseded where conflicting by `docs/marketing/approved-messaging-v3.md` and the v3 implementation review.

# Homepage v2 — production candidate

Prepared before implementation, 17 September 2026. Base: `6748abf`, approved buyer-first marketing rewrite. Branch: `feature/homepage-v2`.

## Context and decision precedence

Reviewed Caplist Deploy Watch (latest review and preceding approvals), Website copy prompt generation, SaaS Design System, Australian Real Estate SaaS Opportunity, Competitor Research Strategy, Build Spec Breakdown, current repository, messaging audit and both concept implementations. The latest white-interface homepage direction supersedes older dark-first design proposals. Broader future product strategy does not expand this homepage's five-product scope. Interactive Floorplan stays absent.

The production browser inspection was blocked by an unavailable admin-policy check. Supplied screenshots and source were inspected instead; live visual comparison remains unverified. Rendy's public page was readable, but its animation choreography has not been observed in a working browser. We adopt its short action-to-result story as a reference, not its effects, claims or design.

## Section specification

| Section     | Content and composition                                                                                                                                                                                                                           | Purpose                                                             |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| Hero        | White; original logo and Inter typography; approved headline unchanged. Short lead. One large static Chapel Street image, discreet property caption; no media dashboard or animation. Primary CTA scrolls to walkthrough; secondary goes to demo. | Explain who it is for and what the business receives.               |
| Walkthrough | Immediately after hero. Wide light application shell; persistent property header and media tray. One selected 9:16 card becomes the output player. Visible pause, replay and stage navigation.                                                    | Demonstrate the product without a supporting essay.                 |
| Opportunity | Two-column editorial statement: “The shoot is finished. There’s more to sell.” One short paragraph.                                                                                                                                               | Tie existing capture investment to another sale.                    |
| Products    | Asymmetric showroom: large 9:16 Vertical Video Reel beside landscape Teaser and Feature Reel; second row Photo Reel 9:16 and Mixed Media 16:9. One-line purpose, duration and ratio. Links to existing examples.                                  | Make actual deliverables tangible.                                  |
| Outcomes    | Three short statements separated by rules: More per job. No return visit. Less production work.                                                                                                                                                   | Reinforce value without repeating the mechanism.                    |
| Quality     | Real photograph beside a faithful crop from the same file; “Your work. Beautifully carried through.” Link to examples.                                                                                                                            | Show source continuity rather than reciting internal quality gates. |
| Workflow    | Capture → Edit → Caplist → Review & deliver. Caplist is the blue step.                                                                                                                                                                            | Show where it fits without claiming new integrations.               |
| Final CTA   | Own section, top rule and 112px desktop breathing room; “What else could your last shoot sell?” One demo link.                                                                                                                                    | Give the visitor a clear next action.                               |
| Footer      | Visible Explore and Get in touch headings, legal links retained.                                                                                                                                                                                  | Make links unmistakably navigational.                               |

## Copy deletion / rewrite audit

| Existing copy or block                                                                         | Decision              | v2                                                                                                                                             |
| ---------------------------------------------------------------------------------------------- | --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| Capture once. Sell more.                                                                       | Keep                  | Unchanged.                                                                                                                                     |
| Turn every property shoot into more products your clients can buy.                             | Keep                  | Unchanged.                                                                                                                                     |
| Long hero lead with production queue explanation                                               | Shorten               | “Turn the professional photos and footage you already capture into finished reels, teasers and feature edits. More to offer from every shoot.” |
| Built for professional real-estate photographers, videographers and property-media businesses. | Keep meaning, shorten | “For professional real-estate photographers, videographers and media businesses.”                                                              |
| Hero mini-animation, product tags, media counts and diagram                                    | Remove                | Static real property image.                                                                                                                    |
| Upload the media. See the opportunities. Choose what to create.                                | Shorten               | “One shoot. See what comes next.”                                                                                                              |
| The point is not to give you another editor to learn…                                          | Delete                | Demonstrated by three controls.                                                                                                                |
| Uses media already captured / Shows products… / Keeps control… / Produces finished output…     | Delete                | Demonstrated by the walkthrough.                                                                                                               |
| The shoot is finished. The earning opportunity doesn’t have to be.                             | Shorten               | “The shoot is finished. There’s more to sell.”                                                                                                 |
| Booking/travel/equipment/capture/primary editing explanation                                   | Shorten               | “You’ve already done the capture and the edit. Give the same client more to choose from, using the media you already have.”                    |
| Source-media explanatory section; second how-it-works section                                  | Consolidate           | Persistent source tray and short workflow strip.                                                                                               |
| Product catalogue future technology paragraph                                                  | Delete                | No future capability promise.                                                                                                                  |
| Six business benefit cards                                                                     | Consolidate           | Three outcomes plus client/pricing control in workflow.                                                                                        |
| Automation only helps if the finished product is good enough to carry your name.               | Replace               | “Your work. Beautifully carried through.”                                                                                                      |
| Source suitability / Property fidelity / Professional finish; Quality is a gate…               | Delete from homepage  | Source/crop comparison visibly preserves the image.                                                                                            |
| No timeline. No keyframes. No complicated editing software.                                    | Delete                | Three visible creative choices.                                                                                                                |
| Goal is not to make your business operate like Caplist…                                        | Delete                | Four-step workflow.                                                                                                                            |
| White-label roadmap and AI technology vision                                                   | Remove from homepage  | Retain existing secondary-page content.                                                                                                        |
| Final CTA attached to workflow                                                                 | Replace               | Own section with demo action.                                                                                                                  |

## Storyboard — one continuous 30-second sequence

| Time   | UI state and motion                                                                                                                                                                          |
| ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0–4s   | Persistent project chrome appears. Real thumbnails settle into the source tray with 100ms staggering and 12px translation. Scenario metadata: 27 photos · Property video · Drone.            |
| 4–7s   | A slim blue scan travels across the existing thumbnails; status changes to “Finding more to create”. No full-screen loading scene.                                                           |
| 7–11s  | “5 more products you could create”. Five ratio-accurate cards enter within the same workspace, staggered by 100ms.                                                                           |
| 11–14s | Vertical Video Reel gains blue selection outline; the same card expands using shared layout identity. Other products recede.                                                                 |
| 14–20s | Style, Length, Music appear next to that card. Values resolve in sequence to Cinematic / 25 sec / Modern. Create Reel activates.                                                             |
| 20–23s | Choice panel becomes a compact production status; progress fills. Property header, source tray and selected card persist.                                                                    |
| 23–30s | Selected card grows into a 9:16 player. Real property-photo sequence plays. Ready. “Another finished product from the same shoot.” End holds; explicit replay, no endless automatic restart. |

Use existing Framer Motion, transform/opacity and shared-layout transitions. Never fade entire application screens over each other. Pause outside the viewport and in hidden tabs. Pause freezes UI and playback. Reduced motion starts on an informative finished state with no autoplay; user may navigate stages. No backend requests, charges or actual generation from the marketing demo.

## Asset truth

User explicitly approved Chapel Street photographs for the homepage demo. Derive optimised assets without changing source files or inventing architecture. Remove metadata from web derivatives. The supplied set has photos only: the video/drone counts and selection flow are an illustrative scenario, not a real analysis result. The user subsequently directed that no illustrative label appear in the UI: it represents the intended application experience. Keep this provenance limitation in build notes. A true property-video reframing demonstration still requires approved footage. Do not portray the rendered preview as proof of that capability.

## Responsive behaviour

- Desktop 1200–1600px: 1280px content measure; split hero; full-width demo with media tray, product canvas and adjacent choices; asymmetric product showroom.
- Tablet 768–1199px: hero stacks below 960px; demo choices remain beside vertical media when space permits; gallery becomes two columns; all text stays readable.
- Mobile 320–767px: single-column hero; fixed reserved demo stage prevents layout jump; source tray becomes compact thumbnails; product options become a horizontally scrollable ratio-accurate row; selected player and controls stack; no shrunken desktop screenshot. Products use their native aspect ratios. Navigation and playback controls have 44px targets.
- Reduced motion: stable finished state, explicit play/navigation, no animated transforms; semantic summary available to assistive technology. Controls retain visible focus.

## Technical and GitHub plan

1. Preserve approved main and concept routes; implement v2 homepage through isolated components and CSS module. Preserve secondary-page bodies and data.
2. Add separate real-property asset manifest and scoped image component. Do not silently replace global concept imagery on secondary pages.
3. Reuse established header/logo with an opt-in light header variant. Add footer navigation headings without removing existing links.
4. Keep homepage server rendered; only demonstration and playback state use a client boundary. Use existing motion dependency; add no runtime dependencies.
5. Run typecheck and static production build. Check desktop/tablet/mobile, source image dimensions, actual preview ratios, all stage controls, pause/replay, reduced motion, console errors, anchor links and secondary-route regressions.
6. Record material changes and evidence. Commit dedicated branch; provide reviewable PR if push is available. Do not merge or deploy as part of this candidate pass.

## Acceptance criteria

- White dominates; no off-white homepage background, duplicate animation, floorplan offer, unsupported metrics or testimonials.
- Approved hero commercial proposition and original logo/type/blue retained.
- One persistent light workspace demonstrates ingest → assess → unlock → select → choices → create → ready.
- Vertical visuals are 9:16; landscape visuals 16:9; sharp at rendered sizes; same property retained.
- Per subsequent user direction, no illustrative label is shown. Internal build notes distinguish this intended workflow from a verified video pipeline result.
- CTA has its own boundary and spacing; footer groups have visible headings.
- All controls work with keyboard; pause/replay and reduced motion supported; content available without motion.
- Typecheck/build pass; visual QA status recorded honestly, including any environment blocker.

## Pre-implementation review

This plan satisfies the locked design direction and limits changes to the homepage plus narrowly scoped navigation improvements. Two acceptance limits are known before coding: live browser access is blocked, and no actual video/drone source was supplied. Neither should be hidden by claiming full visual QA or production video proof.
