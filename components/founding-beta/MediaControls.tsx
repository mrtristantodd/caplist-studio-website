"use client";

import type { CSSProperties } from "react";
import styles from "./MediaControls.module.css";

export function mediaTime(seconds: number) {
  return `${Math.floor(seconds / 60)}:${String(Math.floor(seconds % 60)).padStart(2, "0")}`;
}

export function MediaControls({ label, playing, time, duration, disabled = false, onToggle, onSeek }: {
  label: string; playing: boolean; time: number; duration: number; disabled?: boolean;
  onToggle: () => void; onSeek: (time: number) => void;
}) {
  return <div className={styles.controls}>
    <div className={styles.rail}>
      <button type="button" disabled={disabled} onClick={onToggle} aria-label={`${playing ? "Pause" : "Play"} ${label}`}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d={playing ? "M5 3V13M11 3V13" : "M5 3L12 8L5 13Z"} stroke="currentColor" strokeWidth="1.5" strokeLinejoin="miter" />
        </svg>
      </button>
      <input type="range" aria-label={`${label} position`} min={0} max={duration || 1} step={0.01} value={time} disabled={disabled || !duration}
        aria-valuetext={`${mediaTime(time)} of ${mediaTime(duration)}`} onChange={event => onSeek(Number(event.currentTarget.value))}
        style={{ "--progress": `${duration ? Math.min(100, time / duration * 100) : 0}%` } as CSSProperties} />
      <span className={styles.time} aria-hidden="true">{mediaTime(time)}<span className={styles.total}> / {mediaTime(duration)}</span></span>
    </div>
  </div>;
}
