# Homepage workflow hero: Pass 2

Starting visual baseline: `79382af703a9f66f77b63fdcecd2f7dc933bb974`.

## Review

- [1440px desktop recording](workflow-motion-desktop-1440.webm)
- [390px mobile recording](workflow-motion-mobile-390.webm)
- [Desktop Ready still](workflow-motion-desktop-1440-hero.png)
- [Mobile Ready still](workflow-motion-mobile-390-hero.png)
- Representative scenes: [Upload](workflow-motion-upload.png), [Understand](workflow-motion-understand.png), [Unlock](workflow-motion-unlock.png), [Create](workflow-motion-create.png), [Ready](workflow-motion-ready.png), [Outcome](workflow-motion-outcome.png).
- `/review/workflow/` retains all eight static cards. `/?workflowState=upload` (or any of the other seven state IDs) pins a static state without cycling.

Recordings show the production export in Chromium at the indicated viewport widths. Mobile scrolls from the homepage copy to the demonstration so its complete motion surface can be inspected. No generated property media was added.

## Timing

| Internal state | Public phase | Seconds |
| --- | --- | ---: |
| Upload | Upload | 1.4 |
| Uploading | Upload | 2.2 |
| Understand | Understand | 3.0 |
| Unlock | Understand | 2.3 |
| Choose product | Create | 1.6 |
| Create | Create | 4.0 |
| Ready | Ready | 6.5 |
| Outcome | Ready | 3.0 |

Total: 24.0 seconds. Entry and exit transitions retain their approved crisp timing; the additional duration is readable hold time within each scene. The shell remains mounted; only the scene changes. Media counts describe a condensed demonstration rather than measured upload or render speed.

## Motion and lifecycle

One timeout advances the sequence; it preserves remaining time when paused. Framer Motion controls the dissolves. Local transforms, opacity and the output reveal use cancellable native Web Animations. React does not render on animation frames. The upload count updates at 10 Hz only during an active upload scene.

Source stacks remain fixed during Create and Outcome. Moving thumbnail copies explain the new output without relocating the source images. Mobile uses two travelling copies, shorter paths, and successive actions. The same photography, video and drone groups remain visible.

IntersectionObserver uses separate 30% start and 8% stop thresholds. Offscreen or hidden-page state pauses timers, animation playback and video. A small Pause/Resume control is available; focus on interactive demo controls holds the current scene. Reduced motion shows static Unlock with no automatic reel playback.

The motion canvas reserves the maximum required scene space on mobile, keeping the page stable as Ready replaces the shorter scenes. The desktop canvas retains the approved 390px scene-body height. Typography, hero split, cards and surrounding sections are preserved.

## Reel

The selected product is now the approved **Premium Mixed Media Reel**. Ready plays the final 23.4-second, 16:9 V03 edit from a browser-safe 1280×720 H.264 MP4 derivative. The production source remains untouched at 1920×1080. The animated state plays a muted inline excerpt starting at 3 seconds without native controls; static review retains controls and an explicit Preview action.

`workflowReel` in `components/home/workflow/workflow-data.ts` contains the final source, poster, format, duration and media metadata. The Create treatment now describes selection, sequencing, motion treatment, rendering and quality control, while the source stack remains anchored.

### Replacing the reel after launch

The website uses the stable asset path `public/media/dp001/reel-premium-mixed.mp4`. Production exports may keep their revisioned filenames; the workflow component does not depend on those names.

1. Place the newly approved production reel in the DP001 production folder.
2. Generate a browser-safe web derivative that preserves the approved aspect ratio and edit.
3. Replace `public/media/dp001/reel-premium-mixed.mp4` with that derivative.
4. Update the poster, duration, format or media metadata in the central `workflowReel` record only when those values change.
5. Run video playback QA, responsive lifecycle QA and the production build.
6. Commit the replacement and any required metadata update.
7. Deploy through the normal release process.

No workflow component, motion timing or layout change is required. A future object-storage or CDN migration only requires changing `workflowReel.src` to the new public URL.

## Evidence and limits

- [Lifecycle and responsive results](workflow-motion-qa.json): all eight states, complete loop, viewport pause/resume, manual pause, reduced motion, pinned-state routes, tablet and mobile bounds.
- [Production browser measurements](workflow-motion-performance.json): layout shifts, long tasks, initial video requests and resource transfers.
- [Control checks](workflow-motion-controls.json): manually started preview obeys Pause/Resume; hidden-page events suspend video and sequence.
- [Payload comparison](workflow-motion-payload.json): approximately 24 KB additional gzip JavaScript, no new dependencies, unchanged image/video assets.
- Typecheck, repository lint (TypeScript), production export and whitespace checks pass.
- Final desktop/mobile recordings measured zero layout shift, zero initial video requests, no horizontal overflow and no console errors. The final reel request begins only after Ready activates, and playback advances normally.
- No Website V1 recovery references were changed. Existing DP001 documentation edits were excluded.

Browser tests use Chromium viewport emulation rather than physical iOS/Android devices. The 5,233,879-byte derivative remains deferred until Ready. The 5.5-second Ready hold intentionally shows an excerpt from the longer approved reel while preserving the approved 18.6-second workflow loop.
