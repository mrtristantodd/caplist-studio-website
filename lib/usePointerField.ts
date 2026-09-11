"use client";

import { useCallback, useRef } from "react";

export function usePointerField<T extends HTMLElement>() {
  const raf = useRef<number | null>(null);

  const onPointerMove = useCallback((event: React.PointerEvent<T>) => {
    if (event.pointerType === "touch") return;
    const el = event.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = Math.min(1, Math.max(0, (event.clientX - rect.left) / rect.width));
    const y = Math.min(1, Math.max(0, (event.clientY - rect.top) / rect.height));

    if (raf.current) cancelAnimationFrame(raf.current);
    raf.current = requestAnimationFrame(() => {
      el.style.setProperty("--px", String(x));
      el.style.setProperty("--py", String(y));
      el.style.setProperty("--mx", `${(x - 0.5) * 16}px`);
      el.style.setProperty("--my", `${(y - 0.5) * 16}px`);
      el.style.setProperty("--rx", `${(0.5 - y) * 2.2}deg`);
      el.style.setProperty("--ry", `${(x - 0.5) * 3.4}deg`);
    });
  }, []);

  const onPointerLeave = useCallback((event: React.PointerEvent<T>) => {
    const el = event.currentTarget;
    el.style.setProperty("--px", ".5");
    el.style.setProperty("--py", ".5");
    el.style.setProperty("--mx", "0px");
    el.style.setProperty("--my", "0px");
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  }, []);

  return { onPointerMove, onPointerLeave };
}
