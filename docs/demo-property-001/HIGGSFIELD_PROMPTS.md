# DP001 Higgsfield Prompt Architecture

This document defines the prompt architecture and production protocol. It does not contain the 34 final generation prompts and does not authorise generation to begin.

Every property generation prompt must contain five layers.

## 1. Identity layer

- Exact same approved DP001 residence.
- Northern Beaches, NSW.
- Preserve canonical architecture/materials/site.

## 2. Shot layer

- Precise Pxx/Dxx shot requirement.
- Camera position.
- Direction.
- Composition.

## 3. Photography layer

- Professional Australian real-estate photography.
- Realistic architectural lens behaviour.
- Level verticals.
- Premium but believable composition.

## 4. Light/grade layer

- Late-afternoon golden-hour directional light.
- Neutral real-estate colour grade.
- Neutral whites.
- Realistic green foliage.
- No heavy yellow/orange cast.

## 5. Continuity constraints

Preserve:

- Roof.
- Pool.
- Windows.
- Materials.
- Landscape.
- Building footprint.
- Site orientation.

## Generation protocol

1. Estimate cost before every new generation configuration.
2. Generate only five canonical anchors first.
3. Do not generate the remaining set until anchors are explicitly approved.
4. Generate remaining media in small reviewable batches.
5. Use approved anchors as references wherever supported.
6. Do not automatically regenerate failures without confirming billing state.
7. **Hard DP001 Higgsfield ceiling: 350 credits.**

## Canonical anchor order

1. P01 — Front exterior hero
2. P04 — Main living hero toward pool
3. P07 — Kitchen hero
4. P23 — Rear exterior hero
5. D01 — Low oblique canonical aerial

## Reference hierarchy

1. Canonical anchors are the highest-priority visual references.
2. Once approved, later images should use the most relevant approved anchor/room image as a reference where the selected Higgsfield model supports it.
3. Drone generations should use the canonical aerial plus exterior anchors to preserve roof, pool, site and hillside geometry. For the first D01 generation, use the approved exterior anchors; once D01 is approved, use it alongside those anchors for D02–D07 wherever supported.
4. Do not use rejected generations as references.
5. Do not let a later generation override locked property characteristics.

The locked [Property Bible](PROPERTY_BIBLE.md) governs all visual references. An anchor that contradicts it must not be approved. The [Shot List](SHOT_LIST.md) defines coverage and IDs; the [QA Checklist](QA_CHECKLIST.md) defines asset review; the [Walkthrough Storyboard](WALKTHROUGH_STORYBOARD.md) defines presentation and output boundaries.

## Prompt consistency rules

Every generation prompt must preserve:

- Exact same DP001 residence.
- Suburban coastal hillside setting.
- Partial/distant water context only.
- Late-afternoon / early golden-hour timing.
- Neutral professional real-estate grade.
- Canonical architecture.
- Canonical materials.
- Canonical pool position.
- Canonical site orientation.
- Consistent landscaping.

Apply the locked house logic: street/front is uphill/arrival; rear/pool is downhill/outlook. Living, dining and kitchen form one connected rear-facing area, with the covered entertaining area immediately outside and the pool behind the house. Water remains beyond the broader suburban hillside, with one consistent direction and plausible distance. Preserve the same sunlight direction across stills and motion.

**Golden-hour light, neutral professional real-estate grade.**

## Negative constraints

Avoid:

- Direct waterfront.
- Beach immediately beyond property.
- American suburban cues.
- Tropical resort aesthetic.
- Excessive luxury/resort exaggeration.
- Orange/yellow cinematic grade.
- Overprocessed HDR.
- Warped architecture.
- Changing roof forms.
- Changing pool geometry.
- Changing window positions.
- Invented wings/floors.
- People.
- Obvious AI artefacts.

## Generation sequence

### Stage 1 — Canonical anchors

Generate only, in the existing canonical anchor order:

1. P01 — Front exterior hero
2. P04 — Main living hero toward pool
3. P07 — Kitchen hero
4. P23 — Rear exterior hero
5. D01 — Low oblique canonical aerial

Review each anchor before using it as a reference for the next required asset. Stop for review. All five anchors must be explicitly APPROVED before Stage 2 begins.

### Stage 2 — Interior photography

Generate P05–P19 as appropriate in small reviewable batches. P07 is already an approved anchor and must not be regenerated merely to complete this range.

Remaining IDs: P05, P06, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19.

Stop between batches for continuity review. The prior required batch must be APPROVED before the next batch begins.

### Stage 3 — Exterior photography

Generate the remaining exterior/pool/garden photography in small reviewable batches.

Remaining IDs: P02, P03, P20, P21, P22, P24, P25, P26, P27. P01 and P23 are already approved anchors.

Stop for continuity review, including uphill arrival, downhill rear/pool, and distant/partial water relationships.

### Stage 4 — Drone media

Generate D02–D07 only after D01 is approved, following approval of the prior required stage/batch. Use small reviewable batches and preserve the approved aerial and exterior geometry.

### Stage 5 — Final continuity QA

Review the entire set together against the Property Bible, Shot List and QA Checklist, including geometry, room relationships, hillside orientation, water direction/distance, lighting and grade.

Confirm exactly 27 professional photos (P01–P27) and seven Drone media images (D01–D07): **34 approved source images**, with one selected approved image per ID. Alternatives do not increase the required delivery count.

No motion generation begins until all 34 source images are approved. Passing this gate does not itself authorise motion generation or website integration.

## Cost-control protocol

- Estimate cost before every new generation configuration.
- Record the estimate before generation.
- Maintain cumulative credit usage across the entire DP001 Higgsfield project, including billed failures, alternatives and subsequent motion work.
- Do not automatically retry failed/timed-out jobs until billing status is confirmed.
- Do not exceed 350 credits without explicit user approval.
- Prioritise consistency over generating many alternatives.
- Generate one or a small number of candidates when possible, review, then continue.

Before each submission, check confirmed cumulative usage plus reserved costs for unresolved jobs plus the proposed generation estimate against the 350-credit ceiling. Reconcile estimates with actual billing when known. An unknown charge is not zero; keep it reserved and resolve the billing state before retrying or assuming those credits are available. The ceiling is a maximum, not a target or permission to spend without the required approval gates.

## Model-selection principle

- Use the lowest-cost Higgsfield model that can meet the quality/consistency requirement for that specific task.
- Use a higher-quality model for canonical anchors if it materially improves architectural consistency.
- Reuse approved references aggressively to reduce drift.
- Do not use different models merely for variety.
- Model choice will be specified before each generation step.

Check the selected model's reference support and estimate the actual proposed configuration before submission; this document does not assume current model availability or prices.

## Approval gate

Generation may proceed only when the prior required asset/batch is marked **APPROVED**.

Status flow:

**GENERATED → REVIEW → APPROVED → MASTER → WEB → LIVE**

The first anchor requires explicit authorisation to begin production; it has no prior generated asset. Subsequent work follows the dependencies and review stops above. Approval must be explicitly recorded, not inferred from a successful generation or elapsed time.

Apply the QA Checklist to every image/clip. An asset rejected during review remains in REVIEW with its rejection reason recorded; it must not be used as a reference or advance downstream. Only APPROVED assets may enter the master reel or website. MASTER, WEB and LIVE retain the approval requirement.

## Logging

Every generation must record:

- Asset ID.
- Model.
- Resolution.
- Prompt version.
- Reference assets.
- Estimated credits.
- Actual credits if known.
- Status.
- Rejection reason where relevant.

Record the proposed model, resolution, prompt version, references and estimate before submission. Retain the exact prompt text, candidate/version identifier and provider job ID when available so results and billing can be reconciled. Record unknown actual credits as unknown and update them when confirmed; retain failed/timed-out attempt records and their billing state separately from the asset approval status. Update cumulative confirmed usage and unresolved reservations after each attempt. Record explicit approval against the selected candidate.

## Walkthrough and motion boundary

The source job is **27 professional photos · Drone media**. Do not introduce professional property video as an input for this walkthrough.

After all 34 source images are approved and motion work is authorised, curate from the complete job for A1, the 16:9 Mixed Media Reel, and A2, a 9:16 derivative from the same DP001 source media. Not every source image needs to appear. A2 does not validate landscape-video-to-vertical-video reframing.

Higgsfield supplies property media and selected motion only. Caplist logo, UI text, buttons, product cards, progress bars and the software interface remain React/CSS work under the approved storyboard. The current homepage placeholder remains unchanged until separately authorised integration.

## DP001 credit budget and stop rules

### Project budget

- Planned Higgsfield allocation: one Pro month with approximately 600 credits available.
- DP001 hard ceiling: **350 credits**.
- Target operating range: **200–270 credits**.
- Desired reserve after DP001: **250+ credits**.

### Budget allocation

Use these planning bands:

| Phase | Target credits | Hard ceiling credits |
| --- | --- | --- |
| Canonical anchors | 25–40 | 50 |
| Remaining professional photography | 35–50 | 65 |
| Remaining Drone media | 15–30 | 35 |
| Motion generation | 100–150 | 180 |

Regeneration/fix reserve: **up to 70 credits**.

These are planning limits, not entitlements to spend. All allocations and the regeneration/fix reserve sit inside the overall 350-credit ceiling; they are not additive permission to exceed it. Fixes count toward their relevant phase and the overall total, with reserve usage tracked without double-counting the charge. Using the reserve does not bypass a phase ceiling or approval gate.

### Mandatory cost preflight

Before every new Higgsfield generation configuration:

1. Estimate credit cost.
2. Record the estimate.
3. Calculate cumulative confirmed spend plus unresolved/pending charges.
4. Confirm the generation, including its proposed cost, will remain within the relevant phase ceiling and overall 350-credit ceiling.
5. Only then submit the generation, subject to the approval gates and stop rules below.

### Stop conditions

Stop generation immediately and request user review if:

- Cumulative confirmed + unresolved usage, including the proposed generation, would exceed 350 credits.
- A phase reaches its hard ceiling.
- Two consecutive generations show the same structural/property continuity defect.
- The selected model is not preserving the canonical house well enough.
- A generation job times out and its billing status is unresolved.
- Additional candidates are being generated only for variety rather than to solve a defined problem.
- A lower-cost deterministic method can achieve the required result without generative AI.

### Retry rule

- Do not automatically retry failed, timed-out or ambiguous jobs.
- First establish whether the original job consumed credits.
- If the job failed because of prompt/model incompatibility, correct the configuration before retrying.
- If a candidate is merely aesthetically different but technically acceptable, review it before generating another.

### Model escalation rule

- Start with the lowest-cost model likely to meet the quality requirement.
- Escalate only when a specific quality or consistency failure justifies it.
- Canonical anchor quality takes priority over saving a small number of credits.
- Once a model/reference combination proves reliable for a batch, keep it consistent rather than changing models.

### Human approval gates

Require explicit user approval before:

- Generating beyond the five canonical anchors.
- Generating Drone media beyond D01.
- Beginning motion generation.
- Exceeding any phase hard ceiling.
- Exceeding the overall 350-credit ceiling.

### Credit ledger

The local file:

`/Users/tristantodd/Movies/Caplist-Studio-Production/DP001/00_ADMIN/GENERATION_LOG.csv`

is the operational credit ledger. Every paid generation must be logged there using the fields and billing reconciliation requirements in the Logging section.
