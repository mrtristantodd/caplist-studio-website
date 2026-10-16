"use client";

import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import { Pause, Play } from "lucide-react";
import styles from "@/app/founding-beta/founding-beta.module.css";

const MotionContext = createContext({ running: false });
export function useBetaMotion() { return useContext(MotionContext); }

/** Route-local visibility and playback lifecycle. */
export function BetaMotion({ children, className = "", loop = false, autoPlayVideo = false }: { children: ReactNode; className?: string; loop?: boolean; autoPlayVideo?: boolean }) {
  const root = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const [running, setRunning] = useState(false);
  useEffect(() => {
    const element = root.current;
    if (!element) return;
    const preference = matchMedia("(prefers-reduced-motion: reduce)");
    let visible = false;
    let userPaused = false;
    const preview = autoPlayVideo ? element.querySelector("video") : null;
    const onPause = () => { if (visible && !document.hidden && !preference.matches) userPaused = true; };
    const onPlay = () => { userPaused = false; };
    preview?.addEventListener("pause", onPause);
    preview?.addEventListener("play", onPlay);
    const sync = () => {
      element.dataset.motion = preference.matches ? "static" : "animate";
      element.dataset.running = String(visible && !document.hidden && !paused);
      setRunning(visible && !document.hidden && !paused && !preference.matches);
      if (visible) element.dataset.entered = "true";
      if (!visible || document.hidden || (autoPlayVideo && preference.matches)) element.querySelectorAll("video").forEach(video => { if (!video.paused) video.pause(); });
      else if (preview && !userPaused && preview.paused) { preview.muted = true; void preview.play().catch(() => { /* Native controls remain available if autoplay is blocked. */ }); }
    };
    const observer = new IntersectionObserver(entries => { visible = entries[0].isIntersecting; sync(); }, { threshold: 0.15 });
    observer.observe(element);
    sync();
    preference.addEventListener("change", sync);
    document.addEventListener("visibilitychange", sync);
    return () => {
      observer.disconnect();
      preview?.removeEventListener("pause", onPause);
      preview?.removeEventListener("play", onPlay);
      preference.removeEventListener("change", sync);
      document.removeEventListener("visibilitychange", sync);
    };
  }, [paused, autoPlayVideo]);

  return <div ref={root} className={`${styles.motion} ${className}`} data-paused={paused}>
    <MotionContext.Provider value={{ running }}>{children}</MotionContext.Provider>
    {loop && <button type="button" className={styles.motionToggle} onClick={() => setPaused(value => !value)} aria-label={paused ? "Play transformation" : "Pause transformation"} aria-pressed={paused}>
      {paused ? <Play size={14} aria-hidden="true" /> : <Pause size={14} aria-hidden="true" />}<span>{paused ? "Play" : "Pause"}</span>
    </button>}
  </div>;
}
