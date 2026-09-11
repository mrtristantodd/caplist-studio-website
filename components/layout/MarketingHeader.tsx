"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { CaplistLogo } from "@/components/brand/CaplistLogo";
import { MagneticLink } from "@/components/motion/Magnetic";

const navItems = [
  ["Product", "#product"],
  ["How it works", "#workflow"],
  ["Quality", "#quality"],
  ["Studio", "#studio"],
] as const;

export function MarketingHeader() {
  const { scrollY } = useScroll();
  const rawY = useTransform(scrollY, [0, 180], [0, -3]);
  const rawScale = useTransform(scrollY, [0, 180], [1, 0.985]);
  const y = useSpring(rawY, { stiffness: 180, damping: 30, mass: 0.45 });
  const scale = useSpring(rawScale, { stiffness: 180, damping: 30, mass: 0.45 });

  return (
    <motion.header
      initial={{ opacity: 0, y: -14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <motion.div
        style={{ y, scale }}
        className="container-shell mt-3 flex h-16 items-center justify-between rounded-[14px] border border-white/[0.085] bg-[#080d10]/72 px-4 shadow-[0_18px_60px_rgba(0,0,0,.22)] backdrop-blur-2xl sm:mt-4 sm:px-5"
      >
        <MagneticLink href="#top" strength={0.07} className="shrink-0 rounded-md">
          <CaplistLogo />
        </MagneticLink>

        <nav className="hidden items-center gap-1 rounded-[11px] border border-white/[0.055] bg-white/[0.018] p-1 lg:flex" aria-label="Primary navigation">
          {navItems.map(([label, href]) => (
            <MagneticLink
              key={label}
              href={href}
              strength={0.12}
              className="hairline-glow rounded-[8px] px-4 py-2 text-[12px] font-medium text-white/58 transition-colors duration-300 hover:text-white focus-visible:text-white"
            >
              {label}
            </MagneticLink>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <MagneticLink
            strength={0.12}
            className="hidden rounded-md px-2 py-2 text-[12px] font-medium text-white/58 transition-colors duration-300 hover:text-white sm:inline-flex"
            href="#studio"
          >
            Log in
          </MagneticLink>
          <MagneticLink
            strength={0.18}
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-[9px] border border-[#5794ff]/35 bg-[#2f7bff] px-3.5 py-2.5 text-[12px] font-semibold shadow-[0_12px_34px_rgba(47,123,255,.24)] transition-[background-color,box-shadow,border-color] duration-500 ease-[cubic-bezier(.22,1,.36,1)] hover:border-[#86b4ff]/60 hover:bg-[#4288ff] hover:shadow-[0_16px_46px_rgba(47,123,255,.34)] sm:px-4"
            href="#product"
          >
            <span className="absolute inset-0 -translate-x-[130%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:translate-x-[130%]" />
            <span className="relative hidden sm:inline">See what you can create</span>
            <span className="relative sm:hidden">Create more</span>
            <ArrowUpRight className="relative transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" size={14} />
          </MagneticLink>
        </div>
      </motion.div>
    </motion.header>
  );
}
