"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Check, Play, Sparkles } from "lucide-react";
import { PropertyScene } from "@/components/media/PropertyScene";
import { MagneticLink } from "@/components/motion/Magnetic";
import { usePointerField } from "@/lib/usePointerField";

const inputs = [
  ["Photography", "27 files"],
  ["Property video", "4K · 3 clips"],
  ["Drone", "4 clips"],
  ["Vertical", "2 clips"],
] as const;

const outputs = ["Vertical Video Reel", "Property Teaser", "Feature Reel", "Photo Reel", "Mixed Media Reel"] as const;

function ConnectionMesh() {
  const paths = [
    "M88 74 C 238 74, 330 140, 500 140",
    "M88 132 C 250 132, 342 196, 500 196",
    "M88 190 C 252 190, 344 252, 500 252",
    "M88 248 C 235 248, 340 308, 500 308",
  ];

  return (
    <svg viewBox="0 0 588 380" preserveAspectRatio="none" className="pointer-events-none absolute inset-[90px_190px_120px_170px] hidden h-auto w-auto opacity-70 2xl:block" aria-hidden="true">
      {paths.map((d, i) => (
        <motion.path
          key={d}
          d={d}
          fill="none"
          stroke="#5794FF"
          strokeWidth="1"
          strokeOpacity=".25"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.95 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
        />
      ))}
    </svg>
  );
}

function DesktopTransformation({ reduce }: { reduce: boolean | null }) {
  const pointer = usePointerField<HTMLDivElement>();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.975, y: 26 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="relative hidden lg:block"
      style={{ perspective: 1450 }}
    >
      <div
        {...pointer}
        className="interactive-glass gpu-layer relative min-h-[650px] overflow-hidden rounded-[24px] border border-white/[0.09] bg-[#0a1015]/82 shadow-[0_45px_150px_rgba(0,0,0,.52)] backdrop-blur-2xl"
        style={{
          transform: reduce
            ? undefined
            : "rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg)) translate3d(var(--mx,0px),var(--my,0px),0)",
          transition: "transform 780ms cubic-bezier(.22,1,.36,1)",
          transformStyle: "preserve-3d",
        }}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_calc(var(--px,.6)*100%)_calc(var(--py,.35)*100%),rgba(47,123,255,.14),transparent_36%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,.025)_40%,transparent_68%)]" />
        <div className="absolute left-7 right-7 top-6 z-20 flex items-center justify-between gap-4 text-[10px] uppercase tracking-[.16em] text-white/38">
          <span>Caplist media intelligence</span>
          <span className="inline-flex items-center gap-1.5 text-[#6bd7a2]"><span className="h-1.5 w-1.5 rounded-full bg-current shadow-[0_0_12px_currentColor]" /> Analysis ready</span>
        </div>

        <ConnectionMesh />

        <motion.div
          initial={{ opacity: 0, x: -22 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-7 top-24 z-20 w-[178px] space-y-2"
          style={{ transform: "translateZ(44px)" }}
        >
          <div className="mb-3 text-[10px] font-medium uppercase tracking-[.16em] text-white/42">Source media</div>
          {inputs.map(([name, value], i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, x: -14 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + i * 0.08, duration: 0.5 }}
              whileHover={{ x: 4, borderColor: "rgba(87,148,255,.28)" }}
              className="surface rounded-[10px] p-3.5"
            >
              <div className="text-xs font-medium text-white/84">{name}</div>
              <div className="mt-1 text-[10px] text-white/38">{value}</div>
            </motion.div>
          ))}
        </motion.div>

        <div className="absolute left-[22%] right-[25%] top-[122px] z-10 h-[388px]" style={{ transform: "translateZ(22px)" }}>
          <PropertyScene className="h-full" />
          <motion.div
            aria-hidden="true"
            initial={{ x: "-135%" }}
            animate={{ x: "135%" }}
            transition={{ duration: 2.9, delay: 1.2, repeat: Infinity, repeatDelay: 3.1, ease: "easeInOut" }}
            className="pointer-events-none absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-[#5794ff]/14 to-transparent blur-xl"
          />
          <motion.div
            aria-hidden="true"
            animate={reduce ? undefined : { opacity: [0.25, 0.7, 0.25], scale: [0.98, 1.03, 0.98] }}
            transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute -inset-7 -z-10 rounded-[28px] border border-[#2f7bff]/10 shadow-[0_0_100px_rgba(47,123,255,.10)]"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, x: 22 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, delay: 0.58, ease: [0.22, 1, 0.36, 1] }}
          className="absolute right-7 top-24 z-20 w-[210px] space-y-2"
          style={{ transform: "translateZ(56px)" }}
        >
          <div className="mb-3 flex items-center justify-between text-[10px] uppercase tracking-[.16em] text-white/42">
            <span>Unlocked</span><span className="text-[#5794ff]">5 products</span>
          </div>
          {outputs.map((name, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.72 + i * 0.085, duration: 0.5 }}
              whileHover={{ x: -4, borderColor: "rgba(87,148,255,.38)", backgroundColor: "rgba(47,123,255,.07)" }}
              className="surface group rounded-[10px] p-3.5"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs font-medium text-white/76 transition-colors duration-300 group-hover:text-white">{name}</span>
                <span className="grid h-4 w-4 shrink-0 place-items-center rounded-full bg-[#6bd7a2]/10 text-[#6bd7a2]"><Check size={10} /></span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="absolute bottom-6 left-7 right-7 z-20 grid grid-cols-3 gap-2" style={{ transform: "translateZ(34px)" }}>
          {["1  INGEST", "2  UNLOCK", "3  CREATE"].map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.12 + i * 0.09 }}
              className={`rounded-[9px] border px-3 py-3 text-[10px] tracking-[.14em] ${i === 1 ? "border-[#2f7bff]/35 bg-[#2f7bff]/[0.08] text-white/82 shadow-[0_0_28px_rgba(47,123,255,.08)]" : "border-white/[0.07] bg-white/[0.02] text-white/35"}`}
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function MobileTransformation() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.85, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
      className="surface relative overflow-hidden rounded-[18px] p-3 lg:hidden sm:p-4"
    >
      <div className="mb-3 flex items-center justify-between gap-3 px-1 text-[9px] uppercase tracking-[.14em] text-white/38">
        <span>Media intelligence</span>
        <span className="text-[#6bd7a2]">Analysis ready</span>
      </div>
      <PropertyScene className="aspect-[4/3] sm:aspect-[16/9]" />
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        <div className="rounded-[12px] border border-white/[0.07] bg-black/20 p-3.5">
          <p className="eyebrow">Source media</p>
          <div className="mt-3 grid grid-cols-2 gap-2">
            {inputs.map(([name, value]) => (
              <div key={name} className="rounded-[8px] border border-white/[0.06] bg-white/[0.018] p-2.5">
                <div className="text-[11px] font-medium text-white/76">{name}</div>
                <div className="mt-1 text-[9px] text-white/34">{value}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-[12px] border border-[#2f7bff]/15 bg-[#2f7bff]/[0.035] p-3.5">
          <div className="flex items-center justify-between gap-3">
            <p className="eyebrow">Unlocked</p>
            <span className="text-[10px] text-[#5794ff]">5 products</span>
          </div>
          <div className="mt-3 space-y-2">
            {outputs.map((name) => (
              <div key={name} className="flex items-center justify-between gap-3 rounded-[8px] border border-white/[0.06] bg-black/10 px-3 py-2.5">
                <span className="text-[11px] font-medium text-white/72">{name}</span>
                <Check size={12} className="shrink-0 text-[#6bd7a2]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function HeroTransformation() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const rawCopyY = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const rawVisualY = useTransform(scrollYProgress, [0, 1], [0, 42]);
  const copyY = useSpring(rawCopyY, { stiffness: 105, damping: 30, mass: 0.7 });
  const visualY = useSpring(rawVisualY, { stiffness: 105, damping: 30, mass: 0.7 });

  return (
    <section ref={sectionRef} id="top" className="relative min-h-[100svh] overflow-hidden pb-24 pt-32 sm:pb-28 sm:pt-40 xl:flex xl:items-center xl:pt-32">
      <div className="pointer-events-none absolute inset-0 grid-noise opacity-45" />
      <div className="pointer-events-none absolute left-[4%] top-[18%] h-[420px] w-[420px] rounded-full bg-[#2f7bff]/[0.055] blur-[120px]" />
      <div className="container-shell relative z-10 grid w-full gap-12 xl:grid-cols-12 xl:items-center xl:gap-8">
        <motion.div style={{ y: reduce ? 0 : copyY }} className="relative xl:col-span-5 xl:pb-10">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="eyebrow mb-6 max-w-[620px]"
          >
            Visual production intelligence for property-media businesses
          </motion.p>
          <h1 className="display max-w-[800px] text-[clamp(54px,7vw,108px)]">
            {["Create more", "from every"].map((line, i) => (
              <span key={line} className="block overflow-hidden pb-[.08em]">
                <motion.span
                  className="block"
                  initial={{ y: "112%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.82, delay: 0.12 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
            <span className="block overflow-hidden pb-[.08em]">
              <motion.span
                className="block bg-gradient-to-r from-[#5794ff] via-[#86b4ff] to-[#2f7bff] bg-clip-text text-transparent"
                initial={{ y: "112%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.82, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
              >
                capture.
              </motion.span>
            </span>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 max-w-[610px] text-[16px] leading-7 text-white/56 sm:text-[19px] sm:leading-8"
          >
            Turn the property photography, video and drone media you already captured into additional professional visual products your business can sell.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.52, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <MagneticLink
              href="#product"
              strength={0.18}
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-[9px] border border-[#5794ff]/35 bg-[#2f7bff] px-5 py-3 text-sm font-semibold shadow-[0_16px_44px_rgba(47,123,255,.22)] transition-[background-color,box-shadow,border-color] duration-500 hover:bg-[#4288ff] hover:shadow-[0_20px_58px_rgba(47,123,255,.30)]"
            >
              <span className="absolute inset-0 -translate-x-[130%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:translate-x-[130%]" />
              <span className="relative">See what your media can create</span>
              <ArrowRight className="relative transition-transform duration-300 group-hover:translate-x-1" size={16} />
            </MagneticLink>
            <MagneticLink
              href="#workflow"
              strength={0.14}
              className="group inline-flex items-center gap-2 rounded-[9px] border border-white/[0.12] bg-white/[0.028] px-5 py-3 text-sm font-medium text-white/72 backdrop-blur-xl transition-[background-color,border-color,color,box-shadow] duration-500 hover:border-white/[0.18] hover:bg-white/[0.06] hover:text-white hover:shadow-[0_15px_45px_rgba(0,0,0,.18)]"
            >
              <Play size={14} fill="currentColor" className="transition-transform duration-300 group-hover:scale-110" /> How it works
            </MagneticLink>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.72 }}
            className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-xs text-white/38"
          >
            <span className="inline-flex items-center gap-2"><Sparkles size={12} className="text-[#5794ff]" /> Professional input → professional output</span>
            <span>No second property visit</span>
          </motion.div>
        </motion.div>

        <motion.div style={{ y: reduce ? 0 : visualY }} className="relative xl:col-span-7 xl:-mr-[4vw]">
          <DesktopTransformation reduce={reduce} />
          <MobileTransformation />
        </motion.div>
      </div>
    </section>
  );
}
