# Motion gate

Pass One is a static visual redesign. There are no Framer Motion imports, pointer tracking, parallax, reframe animation, WebGL canvases, timers, or continuous rendering in the active page.

Only basic hover/press colour feedback is enabled. All information is visible immediately, and reduced-motion preferences remove the short CSS colour transitions.

**Pass Two is blocked on explicit user approval of the static direction.** The user's execution addendum establishes this gate. Do not begin the motion layer automatically.

See `docs/PASS_ONE_REVIEW.md` and `docs/review/responsive-report.json` for static review evidence. Later motion work must preserve the approved layout and be committed independently as `feat(marketing): add Caplist motion system`.
