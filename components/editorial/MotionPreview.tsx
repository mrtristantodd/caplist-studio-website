"use client";
import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import { Photo } from "./Photo";
import type { MediaKey, Product } from "@/lib/demo-media";
const scenes: Record<string, MediaKey[]> = {
  "vertical-reel": ["living", "kitchen", "exterior"],
  "property-teaser": ["suburban", "familyLiving", "familyKitchen"],
  "feature-reel": ["kitchen", "bathroom", "bedroom"],
  "photo-reel": ["weatherboard", "familyLiving", "bedroom"],
  "mixed-media": ["aerial", "exterior", "living"],
};
export function MotionPreview({ product }: { product: Product }) {
  const ref = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const preference = matchMedia("(prefers-reduced-motion: reduce)");
    setPaused(preference.matches);
    const change = () => setPaused(preference.matches);
    preference.addEventListener("change", change);
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.05 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      observer.disconnect();
      preference.removeEventListener("change", change);
    };
  }, []);
  return (
    <div
      ref={ref}
      className={`motion-preview ${product.id === "mixed-media" ? "drone-preview" : ""}`}
      data-paused={paused || !visible}
      aria-label={`${product.name} animated example`}
    >
      {(scenes[product.id] ?? [product.media]).map((media, i) => (
        <div
          className="motion-scene"
          key={media}
          data-movement={
            ["pan", "push", "crane", "pull", "flyover"][
              (Number(product.number) - 1 + i) % 5
            ]
          }
          style={{ animationDelay: `${i * 8}s` }}
        >
          <Photo media={media} sizes="(max-width:767px) 90vw, 48vw" />
        </div>
      ))}
      <div className="motion-progress" aria-hidden="true">
        <i />
      </div>
      <button
        type="button"
        className="motion-toggle"
        onClick={() => setPaused(!paused)}
        aria-label={`${paused ? "Play" : "Pause"} ${product.name} animation`}
      >
        {paused ? <Play size={16} /> : <Pause size={16} />}
      </button>
    </div>
  );
}
