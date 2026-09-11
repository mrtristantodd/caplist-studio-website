"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Check, Image as ImageIcon, Plane, Smartphone, Video } from "lucide-react";
import { MagneticLink } from "@/components/motion/Magnetic";
import { Reveal } from "@/components/motion/Reveal";
import { usePointerField } from "@/lib/usePointerField";

const source = [
  { icon: ImageIcon, name: "Photography", detail: "27 usable" },
  { icon: Video, name: "Property video", detail: "3 usable" },
  { icon: Plane, name: "Drone", detail: "4 usable" },
  { icon: Smartphone, name: "Vertical", detail: "2 usable" },
] as const;

const outputs = ["Vertical Video Reel", "Property Teaser", "Feature Reel", "Photo Reel", "Mixed Media Reel"] as const;

const graphPaths = [
  ["M90 54 C 245 54, 445 62, 708 62", 0],
  ["M90 54 C 260 54, 466 126, 708 126", 0],
  ["M90 54 C 260 54, 466 190, 708 190", 0],
  ["M90 54 C 245 54, 445 254, 708 254", 0],
  ["M90 54 C 245 54, 445 318, 708 318", 0],
  ["M90 134 C 254 134, 454 62, 708 62", 1],
  ["M90 134 C 260 134, 460 126, 708 126", 1],
  ["M90 134 C 260 134, 460 190, 708 190", 1],
  ["M90 134 C 260 134, 460 318, 708 318", 1],
  ["M90 214 C 260 214, 465 190, 708 190", 2],
  ["M90 214 C 260 214, 465 318, 708 318", 2],
  ["M90 294 C 260 294, 465 62, 708 62", 3],
  ["M90 294 C 260 294, 465 318, 708 318", 3],
] as const;

function SourceList() {
  return (
    <div className="rounded-[14px] border border-white/[0.07] bg-black/20 p-4">
      <p className="eyebrow">Source media</p>
      <div className="mt-4 space-y-2">
        {source.map(({ icon: Icon, name, detail }, i) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 + i * 0.04 }}
            whileHover={{ x: 3, borderColor: "rgba(87,148,255,.18)" }}
            className="flex items-center gap-3 rounded-[9px] border border-white/[0.06] bg-white/[0.016] p-3"
          >
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-[7px] bg-white/[0.04] text-white/55"><Icon size={15} /></span>
            <div className="min-w-0"><div className="truncate text-xs font-medium text-white/78">{name}</div><div className="mt-1 text-[10px] text-white/34">{detail}</div></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function OutputList() {
  return (
    <div className="rounded-[14px] border border-white/[0.07] bg-black/20 p-4">
      <p className="eyebrow">Unlocked products</p>
      <div className="mt-4 space-y-2">
        {outputs.map((name, i) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 + i * 0.04 }}
            whileHover={{ x: -3, borderColor: "rgba(87,148,255,.22)" }}
            className={`rounded-[9px] border p-3 ${i === 0 ? "border-[#2f7bff]/35 bg-[#2f7bff]/[0.055]" : "border-white/[0.06] bg-white/[0.016]"}`}
          >
            <div className="flex items-center justify-between gap-3"><span className="text-xs font-medium text-white/75">{name}</span><Check size={13} className="shrink-0 text-[#6bd7a2]" /></div>
            <div className="mt-1 text-[10px] text-white/32">Eligible from current source media</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function DesktopEligibilityGraph() {
  return (
    <div className="relative hidden min-h-[410px] overflow-hidden rounded-[14px] border border-white/[0.07] bg-[#090f13]/90 p-5 md:block">
      <div className="absolute inset-0 grid-noise opacity-30" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_54%_48%,rgba(47,123,255,.07),transparent_46%)]" />
      <p className="eyebrow relative z-10">Eligibility graph</p>
      <svg className="absolute inset-x-5 bottom-5 top-12 h-[350px] w-[calc(100%_-_2.5rem)]" viewBox="0 0 800 350" preserveAspectRatio="none" aria-hidden="true">
        {graphPaths.map(([d, group], i) => (
          <motion.path
            key={`${group}-${i}`}
            d={d}
            stroke="#5794FF"
            strokeOpacity={group === 0 ? ".25" : ".16"}
            fill="none"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.55 }}
            transition={{ duration: 1.2, delay: 0.12 + i * 0.025, ease: [0.22, 1, 0.36, 1] }}
          />
        ))}
      </svg>
      <div className="relative z-10 grid min-h-[342px] grid-cols-[minmax(110px,1fr)_minmax(170px,1.15fr)] items-center gap-10 pt-8">
        <div className="space-y-[38px]">
          {source.map(({ icon: Icon, name }) => (
            <div key={name} className="flex w-fit max-w-full items-center gap-2 rounded-[8px] border border-white/[0.08] bg-[#0d1419]/95 px-3 py-2 text-[10px] text-white/62 lg:text-[11px]"><Icon size={13} className="shrink-0" /><span className="truncate">{name}</span></div>
          ))}
        </div>
        <div className="ml-auto space-y-[18px]">
          {outputs.map((name) => (
            <div key={name} className="flex w-full min-w-[165px] max-w-[205px] items-center justify-between gap-3 rounded-[8px] border border-[#2f7bff]/20 bg-[#2f7bff]/[0.055] px-3 py-2.5 text-[10px] text-white/75 lg:text-[11px]"><span>{name}</span><Check size={13} className="shrink-0 text-[#6bd7a2]" /></div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MobileEligibilityGraph() {
  return (
    <div className="relative overflow-hidden rounded-[14px] border border-white/[0.07] bg-[#090f13]/90 p-4 md:hidden">
      <div className="absolute inset-0 grid-noise opacity-25" />
      <p className="eyebrow relative">Eligibility graph</p>
      <div className="relative mt-4 space-y-3">
        <div className="flex flex-wrap gap-2">
          {source.map(({ icon: Icon, name }) => (
            <span key={name} className="inline-flex items-center gap-1.5 rounded-[7px] border border-white/[0.07] bg-black/20 px-2.5 py-2 text-[10px] text-white/58"><Icon size={12} />{name}</span>
          ))}
        </div>
        <div className="flex items-center gap-3 py-1 text-[9px] uppercase tracking-[.14em] text-[#5794ff]"><span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#2f7bff]/35" /> unlocks <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#2f7bff]/35" /></div>
        <div className="grid gap-2 sm:grid-cols-2">
          {outputs.map((name) => (
            <div key={name} className="flex items-center justify-between gap-2 rounded-[8px] border border-[#2f7bff]/18 bg-[#2f7bff]/[0.045] px-3 py-2.5 text-[10px] text-white/72"><span>{name}</span><Check size={12} className="shrink-0 text-[#6bd7a2]" /></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ProjectIntelligence() {
  const pointer = usePointerField<HTMLDivElement>();

  return (
    <section id="studio" className="relative py-24 sm:py-32 xl:py-40">
      <div className="container-shell">
        <div className="mb-12 grid gap-6 lg:grid-cols-12 lg:items-end sm:mb-16">
          <Reveal className="max-w-4xl lg:col-span-8" amount={0.2}>
            <p className="eyebrow">Inside Caplist Studio</p>
            <h2 className="display mt-5 text-[clamp(42px,5.6vw,82px)]">The project workspace makes the intelligence visible.</h2>
          </Reveal>
          <Reveal delay={0.08} className="lg:col-span-3 lg:col-start-10" amount={0.2}>
            <MagneticLink href="#product" strength={0.12} className="group inline-flex items-center gap-2 rounded-md py-2 text-sm font-medium text-white/50 transition-colors duration-300 hover:text-white">
              Explore the product catalogue <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </MagneticLink>
          </Reveal>
        </div>

        <motion.div
          {...pointer}
          initial={{ opacity: 0, y: 38, filter: "blur(9px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.16 }}
          transition={{ duration: 0.86, ease: [0.22, 1, 0.36, 1] }}
          className="surface interactive-glass relative overflow-hidden rounded-[20px] p-3 sm:p-5 lg:p-7"
        >
          <div className="pointer-events-none absolute -right-20 -top-28 h-80 w-80 rounded-full bg-[#2f7bff]/[0.055] blur-[90px]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(620px_circle_at_calc(var(--px,.62)*100%)_calc(var(--py,.38)*100%),rgba(47,123,255,.075),transparent_55%)]" />
          <div className="relative mb-5 flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.07] pb-5">
            <div className="min-w-0">
              <p className="truncate text-sm font-medium">24 Parkview Road</p>
              <p className="mt-1 text-[11px] text-white/36 sm:text-xs">36 source assets · Analysis complete</p>
            </div>
            <span className="shrink-0 rounded-full border border-[#6bd7a2]/20 bg-[#6bd7a2]/[0.07] px-3 py-1.5 text-[9px] uppercase tracking-[.13em] text-[#6bd7a2] sm:text-[10px]">Ready</span>
          </div>

          <div className="relative grid gap-4 xl:grid-cols-[240px_minmax(420px,1fr)_270px] 2xl:grid-cols-[260px_minmax(500px,1fr)_300px]">
            <SourceList />
            <div className="min-w-0">
              <DesktopEligibilityGraph />
              <MobileEligibilityGraph />
            </div>
            <OutputList />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
