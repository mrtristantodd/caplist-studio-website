"use client";

import { useEffect, useRef, useState } from "react";

/** Controls the canonical SVG's own SMIL timeline; artwork and motion stay unchanged. */
function HeldMotionLogo({ src, width, className, paused, holdSeconds }: {
  src: string; width: number; className: string; paused: boolean; holdSeconds: number;
}) {
  const object = useRef<HTMLObjectElement>(null);
  const elapsed = useRef(0);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const svg = object.current?.contentDocument?.documentElement as unknown as SVGSVGElement | undefined;
    if (!ready || !svg?.setCurrentTime) return;
    svg.pauseAnimations();
    if (paused) return;
    let frame = 0;
    let previous: number | undefined;
    const duration = 2 + Math.max(0, holdSeconds);
    const tick = (now: number) => {
      if (previous !== undefined) elapsed.current += (now - previous) / 1000;
      previous = now;
      const phase = elapsed.current % duration;
      // Stop immediately before the asset's native 2s repeat, preserving its resolved frame.
      svg.setCurrentTime(Math.min(phase, 1.999));
      if (object.current) object.current.style.opacity = String(Math.min(1, phase / .18, (duration - phase) / .18));
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [ready, paused, holdSeconds]);
  return <object ref={object} className={className} data-motion-logo="timed" data={src} type="image/svg+xml"
    width={width} height={width} tabIndex={-1} aria-hidden="true"
    style={{ pointerEvents: "none", opacity: ready ? undefined : 0 }}
    onLoad={() => {
      const svg = object.current?.contentDocument?.documentElement as unknown as SVGSVGElement | undefined;
      if (!svg?.pauseAnimations) return;
      svg.pauseAnimations();
      svg.setCurrentTime(0);
      setReady(true);
    }} />;
}

export function CaplistMotionMark({
  size = 132,
  onDark = false,
  className = "",
}: {
  size?: number;
  onDark?: boolean;
  className?: string;
}) {
  const [reducedMotion, setReducedMotion] = useState(true);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(preference.matches);
    update();
    preference.addEventListener("change", update);
    return () => preference.removeEventListener("change", update);
  }, []);

  const src = reducedMotion
    ? `/brand/caplist-mark-${onDark ? "dark" : "light"}.svg`
    : `/brand/motion/caplist-logo-motion-${onDark ? "dark" : "light"}-transparent-short-2s-web.svg`;

  return (
    <img
      src={src}
      width={size}
      height={size}
      alt=""
      aria-hidden="true"
      className={className}
    />
  );
}

export function CaplistMotionLogo({
  width = 250,
  onDark = false,
  className = "",
  paused = false,
  holdSeconds,
}: {
  width?: number;
  onDark?: boolean;
  className?: string;
  paused?: boolean;
  /** Opt-in playback control; the marketing homepage retains its original asset behaviour. */
  holdSeconds?: number;
}) {
  const [reducedMotion, setReducedMotion] = useState(true);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(preference.matches);
    update();
    preference.addEventListener("change", update);
    return () => preference.removeEventListener("change", update);
  }, []);

  const src = reducedMotion
    ? `/brand/caplist-horizontal-on-${onDark ? "dark" : "light"}.svg`
    : `/brand/motion/caplist-logo-motion-${onDark ? "dark" : "light"}-transparent-short-2s-web.svg`;

  if (!reducedMotion && holdSeconds !== undefined) {
    return <HeldMotionLogo src={src} width={width} className={className} paused={paused} holdSeconds={holdSeconds} />;
  }

  return (
    <img
      src={src}
      width={width}
      height={width}
      alt=""
      aria-hidden="true"
      className={className}
      data-motion-logo="resolved"
      style={holdSeconds !== undefined ? { objectFit: "contain" } : undefined}
    />
  );
}
