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
    : `/brand/caplist-motion-mark-on-${onDark ? "dark" : "light"}.svg`;

  return (
    <img
      src={src}
      width={size}
      height={Math.round(size * 0.65)}
      alt=""
      aria-hidden="true"
      className={className}
    />
  );
}
