"use client";

import Image from "next/image";
import { useEffect, useRef, type CSSProperties } from "react";
import { ArrowRight, Upload, Layers, Check, Clapperboard, Play } from "lucide-react";
import { verticalVideoMedia } from "@/components/founding-beta/vertical-video-media";
import { FlowArrow } from "@/components/founding-beta/FlowArrow";
import styles from "./WorkflowStory.module.css";

const stages = [
  { label: "Upload", icon: Upload, title: "Use the media you already captured.", body: "Photos, video, drone and vertical footage from the property." },
  { label: "Unlock", icon: Layers, title: "See what more you can create.", body: "CAPLIST shows the additional products available from that property." },
  { label: "Choose", icon: Check, title: "Select what you want to sell.", body: "Choose the product and guide the creative intent." },
  { label: "Create", icon: Clapperboard, title: "CAPLIST does the production work.", body: "Review the finished output and deliver it through your business." },
];
const scenes = ["drone", "kitchen", "bedroom", "pool", "living", "front"];
const products = [
  { scene: "front", label: "Vertical Reel" },
  { scene: "living", label: "Photo Reel" },
  { scene: "pool", label: "Property Teaser" },
  { scene: "drone", label: "Mixed Media Reel" },
];
function Photo({ scene, src }: { scene: string; src?: string }) {
  return <Image src={src ?? `/media/dp001/${scene}.webp`} alt="" fill unoptimized sizes="(max-width: 640px) 240px, 180px" />;
}

const betaStages = [
  { label: "Upload", icon: Upload, title: "Use the media you already captured.", body: "" },
  { label: "Unlock", icon: Layers, title: "See what more you can create.", body: "" },
  { label: "Choose", icon: Check, title: "Select what you want to sell.", body: "" },
  { label: "Create", icon: Clapperboard, title: "Review the finished output.", body: "" },
];
const betaProducts = [
  { scene: "front", label: "Photo Reel" },
  { scene: "pool", label: "Vertical Video Reel — Beta" },
];

export function WorkflowStory({ variant = "default" }: { variant?: "default" | "founding-beta" }) {
  const isBeta = variant === "founding-beta";
  const activeStages = isBeta ? betaStages : stages;
  const activeProducts = isBeta ? betaProducts : products;
  const root = useRef<HTMLOListElement>(null);
  useEffect(() => {
    const list = root.current;
    if (!list) return;
    const items = Array.from(list.children) as HTMLElement[];
    const visible = new Set<Element>();
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => {
      for (const item of items) {
        item.dataset.motion = motion.matches ? "static" : "animate";
        item.dataset.running = String(visible.has(item) && !document.hidden);
      }
    };
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) visible.add(entry.target);
        else visible.delete(entry.target);
      }
      sync();
    }, { threshold: 0.25 });
    items.forEach(item => observer.observe(item));
    sync();
    document.addEventListener("visibilitychange", sync);
    motion.addEventListener("change", sync);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", sync);
      motion.removeEventListener("change", sync);
    };
  }, []);

  return <ol ref={root} className={`${styles.steps} ${isBeta ? styles.beta : ""}`} aria-label="Upload, unlock, choose and create">
    {activeStages.map(({ label, icon: Icon, title, body }, index) => <li key={label} className={styles.step} style={{ "--delay": `${index * 0.8}s` } as CSSProperties}>
      <div className={`${styles.visual} ${styles[label.toLowerCase()]}`} aria-hidden="true">
        {index === 0 ? (isBeta ? <div className={styles.catalogue}><span>PROPERTY MEDIA</span><div>{["front", "living", "kitchen", "bedroom", "pool", "drone"].map(scene => <div key={scene}><Photo scene={scene} /></div>)}</div></div> : <div className={styles.capture}><Photo scene="front" /><span className={styles.corners} /><span className={styles.shutter} /></div>) : null}
        {index === 1 || index === 2 ? scenes.map((scene, i) => <div key={scene} className={`${styles.card} ${styles[`card${i}`]} ${index === 2 && i >= 4 ? styles.selected : ""}`}>
          <Photo scene={scene} />{index === 2 && i >= 4 ? <span className={styles.check}><Check size={13} /></span> : null}
        </div>) : null}
        {index === 3 ? activeProducts.map((product, i) => <div key={product.label} className={`${styles.output} ${styles[`output${i}`]}`}>
          <div className={styles.outputImage}><Photo scene={product.scene} src={isBeta && i === 1 ? verticalVideoMedia.poster : undefined} />{!isBeta ? <span className={styles.play}><Play size={13} fill="currentColor" /></span> : null}</div><span className={styles.productLabel}>{product.label}</span>
        </div>) : null}
      </div>
      <div className={styles.label}><Icon size={23} strokeWidth={1.7} /><span>0{index + 1}</span><strong>{label}</strong></div>
      <h3>{title}</h3>{body ? <p>{body}</p> : null}
      {index < 3 ? (isBeta ? <FlowArrow className={styles.connector} /> : <ArrowRight className={styles.connector} size={18} aria-hidden="true" />) : null}
    </li>)}
  </ol>;
}
