"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Aperture, BrainCircuit, Boxes, WandSparkles, BadgeCheck } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";

const stages = [
  { num: "01", title: "Ingest", copy: "Professional photos, landscape video, drone and vertical footage enter one property workspace.", icon: Aperture },
  { num: "02", title: "Understand", copy: "Caplist assesses quality, content, orientation and production suitability before anything is offered.", icon: BrainCircuit },
  { num: "03", title: "Unlock", copy: "Only products the supplied media can legitimately support become available for production.", icon: Boxes },
  { num: "04", title: "Create", copy: "Select creative intent. Caplist handles the edit, render and packaging without exposing a timeline editor.", icon: WandSparkles },
  { num: "05", title: "QC + Deliver", copy: "Outputs are checked against technical and visual rules before they are released for delivery.", icon: BadgeCheck },
] as const;

export function WorkflowRail() {
  const railRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: railRef, offset: ["start 78%", "end 48%"] });
  const rawScale = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const scaleY = useSpring(rawScale, { stiffness: 95, damping: 28, mass: 0.7 });

  return (
    <section id="workflow" className="relative py-24 sm:py-32 xl:py-40">
      <div className="pointer-events-none absolute left-0 top-[12%] h-[520px] w-[35vw] bg-[radial-gradient(circle_at_left,rgba(47,123,255,.07),transparent_70%)]" />
      <div className="container-shell">
        <div className="grid gap-12 xl:grid-cols-12 xl:gap-8">
          <Reveal className="xl:col-span-4 xl:sticky xl:top-28 xl:self-start" amount={0.15}>
            <p className="eyebrow">One production system</p>
            <h2 className="display mt-5 max-w-[590px] text-[clamp(42px,5vw,76px)]">From captured media to sellable output.</h2>
            <p className="mt-6 max-w-md text-[15px] leading-7 text-white/48 sm:text-base">
              The interface reflects the actual production logic. Caplist does not expose products the source media cannot support.
            </p>
            <div className="mt-9 hidden max-w-sm overflow-hidden rounded-[14px] border border-white/[0.07] bg-black/20 p-4 xl:block">
              <div className="mb-3 flex items-center justify-between text-[10px] uppercase tracking-[.14em] text-white/34">
                <span>Production state</span><span className="text-[#6bd7a2]">Live</span>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-white/[0.05]">
                <motion.div className="h-full origin-left rounded-full bg-gradient-to-r from-[#2f7bff] to-[#86b4ff]" style={{ scaleX: scaleY }} />
              </div>
            </div>
          </Reveal>

          <div ref={railRef} className="relative xl:col-span-8 xl:pl-16">
            <div className="absolute bottom-0 left-[25px] top-0 hidden w-px bg-white/[0.07] sm:block" />
            <motion.div
              aria-hidden="true"
              className="absolute bottom-0 left-[25px] top-0 hidden w-px origin-top bg-gradient-to-b from-[#86b4ff] via-[#2f7bff] to-transparent shadow-[0_0_18px_rgba(47,123,255,.28)] sm:block"
              style={{ scaleY }}
            />

            {stages.map(({ num, title, copy, icon: Icon }, index) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 42, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.34 }}
                transition={{ duration: 0.78, delay: index * 0.035, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4 }}
                className={`interactive-glass group relative mb-4 min-h-[220px] overflow-hidden rounded-[16px] border border-white/[0.08] bg-[#0c1217]/62 p-6 backdrop-blur-xl sm:ml-16 sm:p-9`}
              >
                <motion.div
                  className="absolute -left-[81px] top-8 hidden h-12 w-12 place-items-center rounded-full border border-[#2f7bff]/30 bg-[#0b1015] text-[11px] font-semibold text-[#5794ff] shadow-[0_0_24px_rgba(47,123,255,.12)] sm:grid"
                  whileInView={{ borderColor: ["rgba(47,123,255,.18)", "rgba(87,148,255,.62)", "rgba(47,123,255,.30)"] }}
                  viewport={{ once: true, amount: 0.8 }}
                  transition={{ duration: 1.1, delay: 0.1 }}
                >
                  {num}
                </motion.div>

                <div className="pointer-events-none absolute -right-2 -top-8 text-[clamp(84px,10vw,156px)] font-semibold leading-none tracking-[-.08em] text-white/[0.022] transition-colors duration-700 group-hover:text-[#2f7bff]/[0.035]">
                  {num}
                </div>
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(380px_circle_at_88%_15%,rgba(47,123,255,.07),transparent_65%)] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

                <div className="relative z-10 grid gap-7 md:grid-cols-[minmax(0,.9fr)_minmax(0,1.2fr)] md:items-end">
                  <div>
                    <span className="grid h-10 w-10 place-items-center rounded-[10px] border border-white/[0.07] bg-white/[0.025] text-[#5794ff] transition-[transform,border-color,background-color] duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover:-translate-y-1 group-hover:rotate-[-3deg] group-hover:border-[#5794ff]/25 group-hover:bg-[#2f7bff]/[0.06]">
                      <Icon size={17} strokeWidth={1.7} />
                    </span>
                    <p className="eyebrow mt-7">{num}</p>
                    <h3 className="mt-3 text-3xl font-medium tracking-[-.035em] sm:text-4xl">{title}</h3>
                  </div>
                  <p className="max-w-xl text-[14px] leading-7 text-white/50 sm:text-[15px]">{copy}</p>
                </div>
                <div className="absolute inset-x-0 bottom-0 h-px origin-center scale-x-0 bg-gradient-to-r from-transparent via-[#5794ff]/55 to-transparent transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-x-100" />
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
