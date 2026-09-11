"use client";

import { ArrowUpRight } from "lucide-react";
import { CaplistLogo } from "@/components/brand/CaplistLogo";
import { MagneticLink } from "@/components/motion/Magnetic";

const links = [
  ["Products", "#product"],
  ["How it works", "#workflow"],
  ["Quality", "#quality"],
  ["Studio", "#studio"],
] as const;

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] py-10 sm:py-12">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#2f7bff]/20 to-transparent" />
      <div className="container-shell grid gap-10 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-6">
          <MagneticLink href="#top" strength={0.07} className="inline-flex rounded-md"><CaplistLogo /></MagneticLink>
          <p className="mt-4 max-w-md text-sm leading-6 text-white/43">
            Turn existing property media into additional professional visual products — without another property visit.
          </p>
        </div>
        <div className="lg:col-span-6">
          <nav className="flex flex-wrap gap-x-6 gap-y-3 lg:justify-end" aria-label="Footer navigation">
            {links.map(([label, href]) => (
              <MagneticLink key={label} href={href} strength={0.1} className="group inline-flex items-center gap-1.5 rounded-md py-1 text-xs text-white/42 transition-colors duration-300 hover:text-white">
                {label}<ArrowUpRight size={11} className="opacity-0 transition-[opacity,transform] duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
              </MagneticLink>
            ))}
          </nav>
          <p className="mt-6 text-xs text-white/30 lg:text-right">© 2026 Caplist Studio. Professional media in. Professional media out.</p>
        </div>
      </div>
    </footer>
  );
}
