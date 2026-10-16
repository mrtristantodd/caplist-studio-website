"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { verticalVideoMedia } from "./vertical-video-media";
import { MediaControls } from "./MediaControls";
import styles from "./ReelPreview.module.css";

const scenes = ["front", "living", "kitchen", "bedroom", "pool", "drone"];

/** User-controlled samples: stable photo dissolves or the existing vertical crop. */
export function ReelPreview({ kind }: { kind: "photo" | "video" }) {
  const root = useRef<HTMLDivElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [time, setTime] = useState(0);
  const [videoDuration, setVideoDuration] = useState(0);
  const duration = kind === "photo" ? scenes.length * 3 : videoDuration;
  const frame = Math.min(scenes.length - 1, Math.floor(time / 3));
  const [error, setError] = useState("");
  const label = kind === "photo" ? "Photo Reel" : "Vertical Video Reel";

  useEffect(() => {
    if (kind !== "photo" || !playing) return;
    let previous = performance.now();
    const timer = window.setInterval(() => {
      const now = performance.now();
      const elapsed = (now - previous) / 1000;
      previous = now;
      setTime(value => (value + elapsed) % (scenes.length * 3));
    }, 250);
    return () => window.clearInterval(timer);
  }, [kind, playing]);

  useEffect(() => {
    const element = root.current;
    if (!element) return;
    const pause = () => { video.current?.pause(); setPlaying(false); };
    const onVisibility = () => { if (document.hidden) pause(); };
    const preference = matchMedia("(prefers-reduced-motion: reduce)");
    const onPreference = () => { if (preference.matches) pause(); };
    const observer = new IntersectionObserver(entries => { if (!entries[0].isIntersecting) pause(); }, { threshold: 0.15 });
    observer.observe(element);
    document.addEventListener("visibilitychange", onVisibility);
    preference.addEventListener("change", onPreference);
    return () => { observer.disconnect(); document.removeEventListener("visibilitychange", onVisibility); preference.removeEventListener("change", onPreference); };
  }, []);

  async function toggle() {
    if (kind === "photo") { setPlaying(value => !value); return; }
    const media = video.current;
    if (!media) return;
    if (!media.paused) media.pause();
    else {
      setError("");
      try { await media.play(); } catch { setError("Preview unavailable. Please try again."); }
    }
  }

  return <div ref={root} className={styles.reel}>
    <div className={styles.media}>
    {kind === "photo" ? scenes.map((scene, index) => <div key={scene} className={styles.frame} data-active={frame === index} aria-hidden="true">
      <Image src={`/media/dp001/${scene}.webp`} alt="" fill unoptimized sizes="(max-width: 640px) 45vw, 240px" />
    </div>) : <video ref={video} muted playsInline loop preload="metadata" poster={verticalVideoMedia.poster} aria-label="Vertical pool courtyard sample using existing property footage" onLoadedMetadata={event => setVideoDuration(Number.isFinite(event.currentTarget.duration) ? event.currentTarget.duration : 0)} onTimeUpdate={event => setTime(event.currentTarget.currentTime)} onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} onError={() => { setPlaying(false); setError("Preview unavailable. Please try again."); }}>
      <source src={verticalVideoMedia.src} type="video/mp4" />
    </video>}
    </div>
    <MediaControls label={`${label} preview`} playing={playing} time={time} duration={duration} onToggle={toggle} onSeek={value => {
      if (kind === "video" && video.current) video.current.currentTime = value;
      setTime(value);
    }} />
    {error ? <p className={styles.error} role="status">{error}</p> : null}
  </div>;
}
