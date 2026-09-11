"use client";

import { ProductCard, type Product } from "@/components/products/ProductCard";
import { Parallax } from "@/components/motion/Parallax";
import { Reveal } from "@/components/motion/Reveal";

const products: Product[] = [
  { name: "Vertical Video Reel", format: "9:16", duration: "20–30 sec", note: "Premium vertical edit built from existing landscape video, vertical footage and supporting property media.", accent: true },
  { name: "Property Teaser", format: "9:16 / 16:9", duration: "10–15 sec", note: "A short, cinematic hook designed from the strongest usable moments in the capture." },
  { name: "Alternative / Feature Reel", format: "9:16", duration: "20–45 sec", note: "A second editorial treatment focused on a property feature, sequence or different creative intent." },
  { name: "Photo Reel", format: "9:16", duration: "15–30 sec", note: "A motion-led reel manufactured from professionally edited still photography." },
  { name: "Mixed Media Reel", format: "9:16", duration: "30–60 sec", note: "Photography, property video and drone combined into a single coherent social-first edit." },
];

export function ProductShowcase() {
  return (
    <section id="product" className="relative py-24 sm:py-32 xl:py-40">
      <div className="pointer-events-none absolute inset-x-0 top-[20%] h-[720px] bg-[radial-gradient(circle_at_52%_45%,rgba(47,123,255,.055),transparent_48%)]" />
      <div className="container-shell relative">
        <div className="mb-12 grid gap-6 lg:grid-cols-12 lg:items-end sm:mb-16">
          <Reveal className="lg:col-span-7" amount={0.2}>
            <p className="eyebrow">Product catalogue</p>
            <h2 className="display mt-5 text-[clamp(42px,5.6vw,82px)]">Additional products. No additional property visit.</h2>
          </Reveal>
          <Reveal delay={0.08} className="max-w-xl lg:col-span-4 lg:col-start-9" amount={0.2}>
            <p className="text-[15px] leading-7 text-white/48">
              The catalogue changes with the media supplied. Caplist only unlocks outputs the source material can support to a professional standard.
            </p>
          </Reveal>
        </div>

        <div className="grid auto-rows-auto gap-4 md:grid-cols-2 xl:grid-cols-12 xl:gap-x-5 xl:gap-y-12">
          <Parallax distance={24} className="md:col-span-1 xl:col-span-5">
            <ProductCard product={products[0]} index={0} />
          </Parallax>
          <Parallax distance={-16} className="md:col-span-1 xl:col-span-7">
            <ProductCard product={products[1]} index={1} />
          </Parallax>
          <Parallax distance={18} className="md:col-span-1 xl:col-span-4">
            <ProductCard product={products[2]} index={2} />
          </Parallax>
          <Parallax distance={-20} className="md:col-span-1 xl:col-span-4">
            <ProductCard product={products[3]} index={3} />
          </Parallax>
          <Parallax distance={14} className="md:col-span-2 xl:col-span-4">
            <ProductCard product={products[4]} index={4} />
          </Parallax>
        </div>
      </div>
    </section>
  );
}
