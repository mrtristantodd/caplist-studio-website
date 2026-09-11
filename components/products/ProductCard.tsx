"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PropertyScene } from "@/components/media/PropertyScene";
import { MagneticLink } from "@/components/motion/Magnetic";
import { usePointerField } from "@/lib/usePointerField";

export type Product = {
  name: string;
  format: string;
  duration: string;
  note: string;
  accent?: boolean;
};

export function ProductCard({ product, index }: { product: Product; index: number }) {
  const pointer = usePointerField<HTMLElement>();
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: 34, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.76, delay: index * 0.045, ease: [0.22, 1, 0.36, 1] }}
      className="h-full"
    >
      <article
        {...pointer}
        className={`interactive-glass group relative h-full overflow-hidden rounded-[17px] border ${product.accent ? "border-[#2f7bff]/38 bg-[#2f7bff]/[0.045] shadow-[0_28px_90px_rgba(47,123,255,.08)]" : "border-white/[0.08] bg-[#0c1217]/60"}`}
        style={{
          transform: reduce ? undefined : "perspective(1200px) rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg)) translate3d(0,0,0)",
          transition: "transform 650ms cubic-bezier(.22,1,.36,1), border-color 450ms cubic-bezier(.22,1,.36,1)",
        }}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(460px_circle_at_calc(var(--px,.5)*100%)_calc(var(--py,.5)*100%),rgba(47,123,255,.12),transparent_52%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <div className="relative p-3">
          <div className="overflow-hidden rounded-[14px]">
            <PropertyScene className="aspect-[4/3] transition-transform duration-[900ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.025]" label={product.name} />
          </div>
          <div className="pointer-events-none absolute inset-3 rounded-[14px] bg-gradient-to-tr from-transparent via-transparent to-white/[0.035] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </div>

        <div className="relative z-10 p-5 pt-3 sm:p-6 sm:pt-3">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <h3 className="text-[17px] font-medium tracking-[-.02em] sm:text-[18px]">{product.name}</h3>
              <p className="mt-2 max-w-xl text-[13px] leading-6 text-white/45 sm:text-sm">{product.note}</p>
            </div>
            {product.accent && (
              <span className="shrink-0 rounded-full border border-[#5794ff]/20 bg-[#2f7bff] px-2.5 py-1 text-[8px] font-semibold uppercase tracking-[.12em] shadow-[0_8px_24px_rgba(47,123,255,.20)] sm:text-[9px]">
                Recommended
              </span>
            )}
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2 text-[10px] uppercase tracking-[.12em] text-white/38">
              <span className="rounded-md border border-white/[0.07] bg-white/[0.015] px-2 py-1">{product.format}</span>
              <span className="rounded-md border border-white/[0.07] bg-white/[0.015] px-2 py-1">{product.duration}</span>
            </div>
            <MagneticLink
              href="#studio"
              strength={0.13}
              className="group/link inline-flex items-center gap-1.5 rounded-md py-1 text-[11px] font-medium text-white/45 transition-colors duration-300 hover:text-white"
              aria-label={`See how ${product.name} is unlocked inside Caplist Studio`}
            >
              Production logic <ArrowUpRight size={12} className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
            </MagneticLink>
          </div>
        </div>
      </article>
    </motion.div>
  );
}
