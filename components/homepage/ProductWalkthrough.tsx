"use client";
import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";
import { ArrowRight, Check, Pause, Play, RotateCcw } from "lucide-react";
import { CaplistLogo } from "@/components/brand/CaplistLogo";
import { Photo } from "@/components/editorial/Photo";
import { showcaseFilm } from "@/lib/showcase-media";
import styles from "./walkthrough.module.css";
const discoveryEnd = 9500;
const products = [
  "Photo Reel",
  "Property Teaser",
  "Feature Reel",
  "Mixed Media Reel",
  "Drone & Location Reel",
];
export function ProductWalkthrough() {
  const root = useRef<HTMLDivElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const inView = useInView(root, { amount: 0.55 });
  const reduced = useReducedMotion();
  const [elapsed, setElapsed] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [visible, setVisible] = useState(true);
  const [ended, setEnded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const phase =
    elapsed < 3000 ? 0 : elapsed < 5800 ? 1 : elapsed < discoveryEnd ? 2 : 3;
  const active = playing && visible && inView && !ended;
  const [initialised, setInitialised] = useState(false);
  useEffect(() => {
    const pref = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => {
      setElapsed(pref.matches ? discoveryEnd : 0);
      setPlaying(!pref.matches);
      setEnded(false);
    };
    sync();
    setInitialised(true);
    pref.addEventListener("change", sync);
    const onVisibility = () =>
      setVisible(document.visibilityState === "visible");
    onVisibility();
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      pref.removeEventListener("change", sync);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);
  useEffect(() => {
    if (!active || !initialised || phase === 3) return;
    let last = performance.now();
    const timer = window.setInterval(() => {
      const now = performance.now();
      setElapsed((t) => Math.min(discoveryEnd, t + now - last));
      last = now;
    }, 60);
    return () => clearInterval(timer);
  }, [active, initialised, phase]);
  useEffect(() => {
    const element = video.current;
    if (!element) return;
    if (active && phase === 3) element.play().catch(() => setPlaying(false));
    else element.pause();
  }, [active, phase]);
  const replay = () => {
    if (video.current) video.current.currentTime = 0;
    setElapsed(0);
    setEnded(false);
    setPlaying(true);
  };
  const toggle = () => {
    if (ended) replay();
    else setPlaying((p) => !p);
  };
  const transition = { duration: reduced ? 0 : 0.5, ease: "easeOut" as const };
  const title = [
    "One completed shoot.",
    "Finding more to offer",
    "5 premium products found and ready to create",
    "More premium products, ready to sell to the same client.",
  ][phase];
  return (
    <div ref={root} className={styles.showcase} data-stage={phase}>
      <div className={styles.topline}>
        <CaplistLogo />
        <span>ONE COMPLETED SHOOT</span>
        <span className={styles.location}>Northern Beaches, NSW</span>
      </div>
      <div className={styles.story}>
        <div className={styles.storyHeading}>
          <span className={styles.index}>0{phase + 1}</span>
          <h3>{title}</h3>
        </div>
        <AnimatePresence mode="wait" initial={false}>
          {phase < 2 ? (
            <motion.div
              key="capture"
              className={styles.capture}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={transition}
            >
              <div className={styles.captureMain}>
                <Photo
                  media="showcaseAerial"
                  sizes="(max-width:700px) 90vw, 65vw"
                />
                {phase === 1 && (
                  <div
                    className={styles.scan}
                    style={{
                      transform: `translateX(${((elapsed - 3000) / 2800) * 100}%)`,
                    }}
                  />
                )}
              </div>
              <div className={styles.sourceColumn}>
                <div className={styles.sourcePhoto}>
                  <Photo
                    media="showcaseLiving"
                    sizes="(max-width:700px) 44vw, 30vw"
                  />
                </div>
                <div className={styles.sourceLabels}>
                  <p>
                    <Check size={15} />
                    27 professional photos
                  </p>
                  <p>
                    <Check size={15} />
                    Drone footage
                  </p>
                </div>
              </div>
            </motion.div>
          ) : phase === 2 ? (
            <motion.div
              key="products"
              className={styles.found}
              initial={{ opacity: 0, y: reduced ? 0 : 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={transition}
            >
              <div className={styles.foundImage}>
                <Photo
                  media="showcaseLiving"
                  sizes="(max-width:700px) 90vw, 50vw"
                />
              </div>
              <ol className={styles.productList}>
                {products.map((name, i) => (
                  <motion.li
                    key={name}
                    className={name === "Mixed Media Reel" ? styles.chosen : ""}
                    initial={{ opacity: 0, x: reduced ? 0 : 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ ...transition, delay: reduced ? 0 : i * 0.1 }}
                  >
                    <span>{name}</span>
                    {name === "Mixed Media Reel" ? (
                      <ArrowRight size={17} />
                    ) : (
                      <Check size={15} />
                    )}
                  </motion.li>
                ))}
              </ol>
            </motion.div>
          ) : (
            <motion.div
              key="finished"
              className={styles.result}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={transition}
            >
              <div className={styles.film}>
                {showcaseFilm && !videoError ? (
                  <video
                    ref={video}
                    src={showcaseFilm}
                    poster="/media/showcase/aerial-1600.webp"
                    muted
                    playsInline
                    preload="metadata"
                    onEnded={() => {
                      setEnded(true);
                      setPlaying(false);
                    }}
                    onError={() => {
                      setVideoError(true);
                      setPlaying(false);
                    }}
                    aria-label="Mixed Media Reel of the Northern Beaches property"
                  />
                ) : (
                  <Photo
                    media="showcaseAerial"
                    sizes="(max-width:700px) 90vw, 65vw"
                  />
                )}
                <span className={styles.filmFormat}>16:9</span>
              </div>
              <div className={styles.resultCaption}>
                <div>
                  <span className={styles.kicker}>Mixed Media Reel</span>
                  <p>Bring the best of the property capture together.</p>
                  {(!showcaseFilm || videoError) && (
                    <p className={styles.pending}>
                      Motion preview is being prepared.
                    </p>
                  )}
                </div>
                <a href="/demo">
                  Book a demo <ArrowRight size={17} />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className={styles.controls}>
        <div className={styles.progress} aria-hidden="true">
          <span
            style={{
              transform: `scaleX(${phase === 3 ? 1 : elapsed / discoveryEnd})`,
            }}
          />
        </div>
        <div className={styles.controlRow}>
          <span>Photography + drone footage</span>
          <div>
            {(phase < 3 || !!showcaseFilm) && (
              <button
                type="button"
                onClick={toggle}
                aria-label={
                  playing && !ended ? "Pause showcase" : "Play showcase"
                }
              >
                {playing && !ended ? <Pause size={15} /> : <Play size={15} />}
                <span>{playing && !ended ? "Pause" : "Play"}</span>
              </button>
            )}
            <button type="button" onClick={replay} aria-label="Replay showcase">
              <RotateCcw size={15} />
              <span>Replay</span>
            </button>
          </div>
        </div>
      </div>
      <p className="sr-only">
        One property with 27 professional photos and drone footage reveals Photo
        Reel, Property Teaser, Feature Reel, Mixed Media Reel and Drone &amp;
        Location Reel. The showcase then focuses on Mixed Media Reel.
      </p>
      <span
        className="sr-only"
        role="status"
        aria-live={active ? "off" : "polite"}
      >
        {title}
      </span>
    </div>
  );
}
