import { useEffect, useLayoutEffect, useRef } from "react";
import { animate } from "framer-motion";
import { workflowDurations, type WorkflowState } from "./workflow-data";
import styles from "./workflow.module.css";

// React renders at scene boundaries, never on animation frames. Native animations
// handle the local transforms; Framer Motion controls the scene dissolves.
export function useWorkflowMotion(state: WorkflowState, enabled: boolean, running: boolean) {
  const scope = useRef<HTMLElement>(null);
  const animations = useRef<Animation[]>([]);
  const fades = useRef<ReturnType<typeof animate>[]>([]);
  const active = useRef(running);
  active.current = running;

  useLayoutEffect(() => {
    const root = scope.current;
    if (!enabled || !root) return;
    const mobile = window.matchMedia("(max-width: 640px)").matches;
    const duration = workflowDurations[state];
    const query = (name: string) => `.${styles[name]}`;
    const run = (selector: string, frames: Keyframe[], delay = 0, time = 400, stagger = 0) => {
      root.querySelectorAll<HTMLElement>(selector).forEach((element, index) => {
        const animation = element.animate(frames, {
          duration: time, delay: delay + index * stagger, fill: "both",
          easing: "cubic-bezier(.22,.68,.2,1)",
        });
        if (!active.current) animation.pause();
        animations.current.push(animation);
      });
    };
    const reveal = (selector: string, delay = 0, stagger = 0, x = 0) => run(selector,
      [{ opacity: 0, transform: `translate(${x}px, ${mobile ? 5 : 9}px)` },
        { opacity: 1, transform: "translate(0, 0)" }], delay, 360, stagger);

    for (const name of ["sceneHeader", "sceneBody"]) {
      const element = root.querySelector<HTMLElement>(query(name));
      if (!element) continue;
      const fade = animate(element, { opacity: [0, 1, 1, 0] }, {
        duration: duration / 1000, times: [0, 0.12 * 1000 / duration, 1 - 160 / duration, 1], ease: "linear",
      });
      if (!active.current) fade.pause();
      fades.current.push(fade);
    }
    run(`${query("phaseProgress")} .${styles.activeStep}`, [
      { transform: "scaleX(.35)" }, { transform: "scaleX(1)" },
    ], 0, 260);

    switch (state) {
      case "upload":
        reveal(query("incomingMedia") + " img", 160, mobile ? 190 : 120, mobile ? 12 : 38);
        break;
      case "uploading":
        reveal(query("thumbnailGrid") + " figure", 80, mobile ? 190 : 150);
        run(query("progressTrack") + " span", [{ transform: "scaleX(.08)" }, { transform: "scaleX(1)" }], 60, 1500);
        reveal(query("mediaCounts") + " span", 650, 190);
        break;
      case "understand":
        // Thumbnails begin as an unordered cluster and resolve into their groups.
        root.querySelectorAll<HTMLElement>(query("mediaGroups") + " article").forEach((group, index) => {
          const photo = group.querySelector("img");
          if (!photo) return;
          const animation = photo.animate([
            { transform: `translate(${mobile ? 10 : 25}px, ${(1 - index) * (mobile ? 25 : 58)}px) rotate(${index % 2 ? 5 : -4}deg)`, opacity: 0.55 },
            { transform: "translate(0,0) rotate(0deg)", opacity: 1 },
          ], { duration: 600, delay: 100 + index * 160, fill: "both", easing: "ease-out" });
          if (!active.current) animation.pause();
          animations.current.push(animation);
        });
        reveal(query("mediaGroups") + " article > div", 380, 180);
        reveal(query("analysisPanel") + " p", 850, 270);
        reveal(query("analysisTags") + " span", 1200, 110);
        break;
      case "unlock":
        run(query("productList") + " article", [
          { opacity: 0.3, transform: "translateX(-6px)" },
          { opacity: 1, transform: "translateX(0)" },
        ], 200, 340, 230);
        reveal(query("productIcon"), 250, 230);
        break;
      case "choose":
        run(query("selectedProduct"), [
          { boxShadow: "inset 0px 0 0 #2f7bff", backgroundColor: "#ffffff", borderColor: "#dce2e9" },
          { boxShadow: "inset 3px 0 0 #2f7bff", backgroundColor: "#eaf2ff", borderColor: "#83adff" },
        ], 180, 300);
        run(query("productList") + ` article:not(.${styles.selectedProduct})`, [{ opacity: 1 }, { opacity: 0.65 }], 250, 280);
        reveal(query("choiceSummary") + " > :not(span)", 380, 30);
        break;
      case "create": {
        const target = root.querySelector(query("verticalOutput"))?.getBoundingClientRect();
        const sources = root.querySelectorAll<HTMLElement>(query("sourceRail") + " img");
        root.querySelectorAll<HTMLElement>(query("flyingMedia") + " img").forEach((copy, index) => {
          const from = sources[index]?.getBoundingClientRect();
          if (!from || !target) return;
          const dx = target.x + target.width / 2 - from.x - from.width / 2;
          const dy = target.y + target.height / 2 - from.y - from.height / 2;
          const animation = copy.animate([
            { transform: "translate(0,0) scale(1)", opacity: 0 },
            { transform: "translate(0,0) scale(1)", opacity: 0.9, offset: 0.15 },
            { transform: `translate(${dx}px,${dy}px) scale(.8)`, opacity: 0 },
          ], { duration: mobile ? 550 : 680, delay: 300 + index * (mobile ? 700 : 520), fill: "both", easing: "ease-in-out" });
          if (!active.current) animation.pause();
          animations.current.push(animation);
        });
        run(query("verticalOutput") + " img", [
          { opacity: 0.18, transform: "scale(1.12)", clipPath: "inset(18% 0 18% 0)" },
          { opacity: 1, transform: "scale(1)", clipPath: "inset(0% 0 0% 0)" },
        ], 600, 1600);
        reveal(query("processingList") + " p", 180, 430);
        reveal(query("processingList") + " p svg", 470, 430);
        run(query("processingList") + " p", [{ color: "#788492" }, { color: "#25303b" }], 470, 200, 430);
        break;
      }
      case "ready":
        reveal(query("outputDetails"), 140);
        break;
      case "outcome": {
        run(query("outcomeBridge") + " i", [{ opacity: 0 }, { opacity: 1 }], 160, 360, 100);
        root.querySelectorAll<HTMLElement>(query("outcomeFragments") + " img").forEach((fragment, index) => {
          const distance = mobile ? 62 : 150;
          const angle = [-3, 2, 4][index];
          const animation = fragment.animate([
            { transform: `translateX(0px) rotate(${angle}deg) scale(1)`, opacity: 0, filter: "blur(0px)" },
            { offset: .16, transform: `translateX(${distance * .12}px) rotate(${angle}deg) scale(1)`, opacity: .82, filter: "blur(0px)" },
            { offset: .54, transform: `translateX(${distance * .55}px) rotate(${angle}deg) scale(.87)`, opacity: .48, filter: "blur(.35px)" },
            { transform: `translateX(${distance}px) rotate(${angle}deg) scale(.7)`, opacity: 0, filter: "blur(1.2px)" },
          ], { duration: 1950, delay: 160 + index * 160, fill: "both", easing: "ease-in-out" });
          if (!active.current) animation.pause();
          animations.current.push(animation);
        });
        reveal(query("outcomeProducts") + " > p", 1250);
        break;
      }
    }
    return () => {
      animations.current.forEach(animation => animation.cancel()); animations.current = [];
      fades.current.forEach(fade => fade.stop()); fades.current = [];
    };
  }, [state, enabled]);

  useEffect(() => {
    animations.current.forEach(animation => {
      const end = Number(animation.effect?.getComputedTiming().endTime || 0);
      if (!running) animation.pause();
      else if (Number(animation.currentTime || 0) < end) animation.play();
    });
    fades.current.forEach(fade => running ? fade.play() : fade.pause());
    if (!enabled || !running || state !== "uploading") return;
    const update = () => {
      const bar = scope.current?.querySelector(`.${styles.progressTrack} span`);
      const time = Number(bar?.getAnimations()[0]?.currentTime || 0);
      const percent = Math.min(100, Math.round(8 + Math.max(0, time - 60) / 1500 * 92));
      const percentage = scope.current?.querySelector("[data-upload-percent]");
      const files = scope.current?.querySelector("[data-upload-files]");
      if (percentage) percentage.textContent = `${percent}%`;
      if (files) files.textContent = `${Math.round(percent * 39 / 100)} of 39 files`;
    };
    update();
    const timer = window.setInterval(update, 100);
    return () => window.clearInterval(timer);
  }, [enabled, running, state]);
  return scope;
}
