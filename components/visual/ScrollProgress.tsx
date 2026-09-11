"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 130, damping: 32, mass: 0.3 });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[70] h-px origin-left bg-gradient-to-r from-[#2f7bff] via-[#86b4ff] to-[#2f7bff] shadow-[0_0_18px_rgba(47,123,255,.55)]"
      style={{ scaleX }}
    />
  );
}
