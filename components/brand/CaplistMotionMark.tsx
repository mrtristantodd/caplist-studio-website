"use client";

import { useEffect, useState } from "react";

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
}: {
  width?: number;
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
    ? `/brand/caplist-horizontal-on-${onDark ? "dark" : "light"}.svg`
    : `/brand/motion/caplist-logo-motion-${onDark ? "dark" : "light"}-transparent-short-2s-web.svg`;

  return (
    <img
      src={src}
      width={width}
      height={width}
      alt=""
      aria-hidden="true"
      className={className}
    />
  );
}
