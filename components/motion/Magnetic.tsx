"use client";

import type { PointerEvent } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring, type HTMLMotionProps } from "framer-motion";

const spring = { stiffness: 310, damping: 24, mass: 0.42 } as const;

function useMagneticMotion(strength: number) {
  const reduceMotion = useReducedMotion();
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, spring);
  const y = useSpring(rawY, spring);

  const onPointerMove = <T extends HTMLElement>(event: PointerEvent<T>) => {
    if (reduceMotion || event.pointerType === "touch") return;
    const rect = event.currentTarget.getBoundingClientRect();
    const dx = event.clientX - (rect.left + rect.width / 2);
    const dy = event.clientY - (rect.top + rect.height / 2);
    rawX.set(dx * strength);
    rawY.set(dy * strength);
  };

  const reset = () => {
    rawX.set(0);
    rawY.set(0);
  };

  return { x, y, onPointerMove, reset };
}

type MagneticLinkProps = HTMLMotionProps<"a"> & {
  strength?: number;
};

export function MagneticLink({ strength = 0.16, className = "", style, onPointerMove, onPointerLeave, onBlur, ...props }: MagneticLinkProps) {
  const magnetic = useMagneticMotion(strength);

  return (
    <motion.a
      {...props}
      className={className}
      style={{ ...style, x: magnetic.x, y: magnetic.y }}
      onPointerMove={(event) => {
        magnetic.onPointerMove(event);
        onPointerMove?.(event);
      }}
      onPointerLeave={(event) => {
        magnetic.reset();
        onPointerLeave?.(event);
      }}
      onBlur={(event) => {
        magnetic.reset();
        onBlur?.(event);
      }}
    />
  );
}

type MagneticButtonProps = HTMLMotionProps<"button"> & {
  strength?: number;
};

export function MagneticButton({ strength = 0.16, className = "", style, onPointerMove, onPointerLeave, onBlur, ...props }: MagneticButtonProps) {
  const magnetic = useMagneticMotion(strength);

  return (
    <motion.button
      {...props}
      className={className}
      style={{ ...style, x: magnetic.x, y: magnetic.y }}
      onPointerMove={(event) => {
        magnetic.onPointerMove(event);
        onPointerMove?.(event);
      }}
      onPointerLeave={(event) => {
        magnetic.reset();
        onPointerLeave?.(event);
      }}
      onBlur={(event) => {
        magnetic.reset();
        onBlur?.(event);
      }}
    />
  );
}
