"use client";

import { CaplistMotionLogo } from "@/components/brand/CaplistMotionMark";
import { useBetaMotion } from "./BetaMotion";

export function BetaMotionLogo() {
  const { running } = useBetaMotion();
  return <CaplistMotionLogo onDark width={260} holdSeconds={6} paused={!running} />;
}
