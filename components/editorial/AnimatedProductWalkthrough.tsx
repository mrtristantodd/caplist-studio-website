"use client";

import { useEffect, useState } from "react";
import { Check, Image as ImageIcon, Film, Plane, Smartphone, Sparkles } from "lucide-react";
import { CaplistMark } from "@/components/brand/CaplistLogo";
import styles from "./AnimatedProductWalkthrough.module.css";

const stages = [
  {
    id: "upload",
    label: "Completed shoot uploaded",
    headline: "The media you already captured arrives in one place.",
    detail: "27 photos · property video · drone · vertical footage",
  },
  {
    id: "analyse",
    label: "Caplist checks the media",
    headline: "Caplist works out what the property can support.",
    detail: "Media recognised · quality checked · product opportunities identified",
  },
  {
    id: "unlock",
    label: "More products available",
    headline: "Five additional products are ready to explore.",
    detail: "Photo Reel · Vertical Reel · Teaser · Feature Reel · Mixed Media",
  },
  {
    id: "choose",
    label: "You choose what to create",
    headline: "Pick the product and make a few focused creative choices.",
    detail: "Vertical Video Reel · 25 sec · modern · social-ready",
  },
  {
    id: "create",
    label: "Caplist handles production",
    headline: "The edit happens without another manual editing queue.",
    detail: "Selection · reframing · sequencing · pacing · music timing · rendering",
  },
  {
    id: "ready",
    label: "Ready to sell",
    headline: "Same shoot. Another finished product for the same client.",
    detail: "Review · deliver · package and price it your way",
  },
] as const;

const products = ["Photo Reel", "Vertical Reel", "Property Teaser", "Feature Reel", "Mixed Media"];

export function AnimatedProductWalkthrough() {
  const [stage, setStage] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || paused) return;
    const timer = window.setInterval(() => {
      setStage((current) => (current + 1) % stages.length);
    }, 2400);
    return () => window.clearInterval(timer);
  }, [paused]);

  const current = stages[stage];

  return (
    <section className={styles.section} aria-labelledby="walkthrough-title">
      <div className={`shell ${styles.intro}`}>
        <div>
          <p className="studio-kicker">See how simple it is</p>
          <h2 id="walkthrough-title">One completed shoot. More products to sell.</h2>
        </div>
        <p>
          Upload the property media you already have. Caplist identifies what else is worth creating,
          you choose the product, and Caplist handles the production.
        </p>
      </div>

      <div className={`shell ${styles.stageWrap}`}>
        <div className={styles.browser}>
          <div className={styles.browserTop}>
            <div className={styles.browserDots}><span /><span /><span /></div>
            <span className={styles.browserLabel}>Caplist Studio · 14 River Street</span>
            <button type="button" onClick={() => setPaused((value) => !value)} className={styles.pauseButton}>
              {paused ? "Play walkthrough" : "Pause walkthrough"}
            </button>
          </div>

          <div className={styles.workspace}>
            <aside className={styles.projectRail}>
              <span className={styles.railTitle}>Property media</span>
              {[
                [ImageIcon, "Photography", "27 photos"],
                [Film, "Property video", "1 video"],
                [Plane, "Drone", "Available"],
                [Smartphone, "Vertical", "Available"],
              ].map(([Icon, label, value]) => (
                <div className={styles.mediaRow} key={String(label)}>
                  <Icon size={17} />
                  <div><strong>{String(label)}</strong><span>{String(value)}</span></div>
                  <Check size={15} />
                </div>
              ))}
            </aside>

            <div className={styles.mainPanel}>
              <div className={styles.statusHeader}>
                <div>
                  <span className={styles.stepLabel}>0{stage + 1} / 06</span>
                  <h3>{current.label}</h3>
                </div>
                <CaplistMark size={34} onDark />
              </div>

              <div className={styles.messageCard} data-stage={current.id}>
                {current.id === "analyse" || current.id === "create" ? <Sparkles size={24} /> : <Check size={24} />}
                <div>
                  <strong>{current.headline}</strong>
                  <span>{current.detail}</span>
                </div>
              </div>

              <div className={styles.productGrid}>
                {products.map((product, index) => {
                  const visible = stage >= 2;
                  const selected = stage >= 3 && index === 1;
                  return (
                    <div
                      className={styles.productCard}
                      data-visible={visible}
                      data-selected={selected}
                      key={product}
                    >
                      <span>0{index + 1}</span>
                      <strong>{product}</strong>
                      <small>{visible ? (selected ? "Selected" : "Available") : "Checking media"}</small>
                    </div>
                  );
                })}
              </div>

              <div className={styles.outputBar} data-ready={stage === 5}>
                <div>
                  <span>{stage === 5 ? "Finished output" : "What happens next"}</span>
                  <strong>{stage === 5 ? "Vertical Video Reel · ready to deliver" : "Caplist moves the job forward for you"}</strong>
                </div>
                <span className={styles.outputBadge}>{stage === 5 ? "READY" : "AUTO"}</span>
              </div>
            </div>
          </div>
        </div>

        <ol className={styles.progress} aria-label="Walkthrough stages">
          {stages.map((item, index) => (
            <li key={item.id} data-active={index === stage}>
              <button type="button" onClick={() => { setStage(index); setPaused(true); }}>
                <span>0{index + 1}</span>
                {item.label}
              </button>
            </li>
          ))}
        </ol>
      </div>

      <div className={`shell ${styles.conclusion}`}>
        <strong>Same shoot. Another finished product to sell.</strong>
        <span>No second property visit. No full edit from scratch.</span>
      </div>
    </section>
  );
}
