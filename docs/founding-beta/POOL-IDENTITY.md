# Vertical Video Reel pool identity

The Founding Beta hero video, live crop demo, and workflow output share `vertical-video-media.ts`. The Photo Reel opening and workflow thumbnail remain `front.webp`; its existing photo sequence is unchanged. Default/non-beta WorkflowStory output is unchanged.

`public/media/founding-beta/vertical-video-pool.mp4` is a five-second excerpt (16–21 seconds) of the existing `public/media/dp001/reel-premium-mixed.mp4`, exported as 1280×720 MP4 with AVFoundation. The matching JPEG is the exact first frame of the exported clip. Sampled frames at 0, 2 and 4 seconds show the pool/outdoor setting. No original assets were replaced.

Validation: lint, typecheck, production build (25 static pages), exact crop geometry check, and git diff whitespace check passed. Desktop 1440 and mobile 390 reviewed: hero, product/crop demo, and workflow output use the pool identity consistently; no horizontal overflow. Both video players play the five-second clip; live crop seeking back to zero restores the shared pool poster. Layout CSS, spacing, pricing, names and application transport were not changed.

Screenshots: `pool-identity/hero-1440.jpg`, `pool-identity/product-390.jpg`, `pool-identity/workflow-390.jpg`.
