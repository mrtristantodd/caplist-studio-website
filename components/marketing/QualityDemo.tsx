"use client";

import { motion } from "framer-motion";
import { AlertTriangle, ArrowUpRight, Check, ShieldCheck } from "lucide-react";
import { MagneticLink } from "@/components/motion/Magnetic";
import { Parallax } from "@/components/motion/Parallax";
import { Reveal } from "@/components/motion/Reveal";
import { usePointerField } from "@/lib/usePointerField";

const metrics = [
  { name: "Resolution", state: "Excellent", kind: "ok", score: 100 },
  { name: "Sharpness", state: "Excellent", kind: "ok", score: 96 },
  { name: "Exposure", state: "Good", kind: "ok", score: 88 },
  { name: "Motion stability", state: "Excellent", kind: "ok", score: 98 },
  { name: "Composition", state: "Excellent", kind: "ok", score: 95 },
  { name: "Vertical reframe", state: "Review 1 clip", kind: "warn", score: 72 },
] as const;

export function QualityDemo() {
  const pointer = usePointerField<HTMLDivElement>();

  return (
    <section id="quality" className="relative overflow-hidden py-24 sm:py-32 xl:py-40">
      <div className="absolute inset-x-0 top-1/2 h-[620px] -translate-y-1/2 bg-[radial-gradient(circle_at_72%_50%,rgba(47,123,255,.075),transparent_38%)]" />
      <div className="container-shell relative grid gap-12 xl:grid-cols-12 xl:items-center xl:gap-8">
        <Reveal className="xl:col-span-5" amount={0.2}>
          <p className="eyebrow">Professional input → professional output</p>
          <h2 className="display mt-5 text-[clamp(42px,5.2vw,76px)]">Quality is enforced before production.</h2>
          <p className="mt-6 max-w-lg text-[15px] leading-7 text-white/50 sm:text-[16px]">
            Caplist does not disguise weak capture. The system assesses whether uploaded media is suitable for each output and disables products that cannot meet the required standard.
          </p>
          <MagneticLink href="#studio" strength={0.12} className="group mt-8 inline-flex items-center gap-2 rounded-md py-2 text-sm font-medium text-white/58 transition-colors duration-300 hover:text-white">
            See quality logic inside Studio <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </MagneticLink>
        </Reveal>

        <Parallax distance={28} className="xl:col-span-7">
          <motion.div
            {...pointer}
            initial={{ opacity: 0, y: 34, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.82, ease: [0.22, 1, 0.36, 1] }}
            className="surface interactive-glass overflow-hidden rounded-[19px] p-4 sm:p-6 lg:p-7"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(520px_circle_at_calc(var(--px,.5)*100%)_calc(var(--py,.5)*100%),rgba(47,123,255,.085),transparent_58%)] opacity-60" />
            <div className="relative mb-5 flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.065] pb-5">
              <div>
                <p className="text-sm font-medium text-white/82">Source quality assessment</p>
                <p className="mt-1 text-[11px] text-white/34">36 assets · checks completed in 2:14</p>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#6bd7a2]/20 bg-[#6bd7a2]/[0.06] px-3 py-1.5 text-[9px] uppercase tracking-[.13em] text-[#6bd7a2]">
                <ShieldCheck size={12} /> Production eligible
              </span>
            </div>

            <div className="relative grid gap-4 md:grid-cols-[230px_minmax(0,1fr)] lg:grid-cols-[250px_minmax(0,1fr)]">
              <div className="relative overflow-hidden rounded-[14px] border border-white/[0.07] bg-black/[0.22] p-5">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_48%_40%,rgba(47,123,255,.09),transparent_45%)]" />
                <p className="eyebrow relative">Overall quality</p>
                <div className="relative mt-7 grid place-items-center">
                  <motion.div
                    initial={{ rotate: -80, opacity: 0, scale: 0.88 }}
                    whileInView={{ rotate: 0, opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
                    className="grid h-40 w-40 place-items-center rounded-full p-[7px] shadow-[0_0_70px_rgba(47,123,255,.10)]"
                    style={{ background: "conic-gradient(#5794ff 0deg 331deg, rgba(255,255,255,.055) 331deg 360deg)" }}
                  >
                    <div className="grid h-full w-full place-items-center rounded-full border border-white/[0.05] bg-[#0a1015]">
                      <div className="text-center">
                        <div className="text-5xl font-medium tracking-[-.06em]">92</div>
                        <div className="mt-2 text-[9px] uppercase tracking-[.15em] text-[#6bd7a2]">Excellent</div>
                      </div>
                    </div>
                  </motion.div>
                </div>
                <p className="relative mt-7 text-[12px] leading-6 text-white/40">138 of 142 photos usable.<br />12 of 12 video clips usable.</p>
              </div>

              <div className="space-y-2">
                {metrics.map(({ name, state, kind, score }, i) => (
                  <motion.div
                    key={name}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.65 }}
                    transition={{ delay: 0.06 + i * 0.045, duration: 0.54, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ x: 3, borderColor: kind === "warn" ? "rgba(227,183,105,.25)" : "rgba(87,148,255,.22)" }}
                    className="group rounded-[10px] border border-white/[0.07] bg-white/[0.016] px-4 py-3"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-[12px] text-white/68 sm:text-sm">{name}</span>
                      <span className={`flex shrink-0 items-center gap-2 text-[10px] sm:text-xs ${kind === "warn" ? "text-[#e3b769]" : "text-[#6bd7a2]"}`}>
                        {kind === "warn" ? <AlertTriangle size={13} /> : <Check size={13} />} {state}
                      </span>
                    </div>
                    <div className="mt-2.5 h-px overflow-hidden bg-white/[0.05]">
                      <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: score / 100 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.85, delay: 0.12 + i * 0.04, ease: [0.22, 1, 0.36, 1] }}
                        className={`h-full origin-left ${kind === "warn" ? "bg-[#e3b769]/70" : "bg-gradient-to-r from-[#2f7bff]/45 to-[#86b4ff]/80"}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </Parallax>
      </div>
    </section>
  );
}
