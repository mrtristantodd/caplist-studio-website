"use client";

import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";

type ParallaxProps = {
  children: ReactNode;
  distance?: number;
  className?: string;
  minWidth?: number;
};

export function Parallax({ children, distance = 24, className = "", minWidth = 1024 }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const rawY = useTransform(scrollYProgress, [0, 1], [distance, -distance]);
  const y = useSpring(rawY, { stiffness: 110, damping: 28, mass: 0.8 });

  useEffect(() => {
    const query = window.matchMedia(`(min-width: ${minWidth}px)`);
    const sync = () => setEnabled(query.matches);
    sync();
    query.addEventListener?.("change", sync);
    return () => query.removeEventListener?.("change", sync);
  }, [minWidth]);

  return (
    <motion.div ref={ref} className={className} style={{ y: reduceMotion || !enabled ? 0 : y }}>
      {children}
    </motion.div>
  );
}
