"use client";

import { useEffect, useId, useRef, useState } from "react";
import {
  LayoutGroup,
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Pause,
  Play,
  RotateCcw,
} from "lucide-react";
import { CaplistLogo } from "@/components/brand/CaplistLogo";
import { PropertyPhoto, type PropertyPhotoKey } from "./PropertyPhoto";
import styles from "./walkthrough.module.css";

const stages = [
  { name: "Media", start: 0, title: "One completed property project" },
  { name: "Discover", start: 4000, title: "Finding more to create" },
  { name: "Choose", start: 7000, title: "5 more products you could create" },
  { name: "Style", start: 11000, title: "Make it your own" },
  { name: "Create", start: 20000, title: "Creating your reel" },
  {
    name: "Ready",
    start: 23000,
    title: "Another finished product from the same shoot.",
  },
];
const duration = 30000;
const photos: PropertyPhotoKey[] = [
  "living",
  "kitchen",
  "bedroom",
  "balcony",
  "bathroom",
];
const options = [
  { name: "Photo Reel", photo: "bedroom", portrait: true },
  { name: "Vertical Video Reel", photo: "kitchen", portrait: true },
  { name: "Property Teaser", photo: "living", portrait: false },
  { name: "Feature Reel", photo: "balcony", portrait: false },
  { name: "Mixed Media Reel", photo: "living", portrait: false },
] as const;

export function ProductWalkthrough() {
  const root = useRef<HTMLDivElement>(null);
  const inView = useInView(root, { amount: 0.25 });
  const reduced = useReducedMotion();
  const id = useId();
  const [elapsed, setElapsed] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [visible, setVisible] = useState(true);
  const [ready, setReady] = useState(false);
  const ended = elapsed >= duration;
  const [style, setStyle] = useState("Cinematic");
  const [length, setLength] = useState("25 sec");
  const [music, setMusic] = useState("Modern");
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => {
      if (preference.matches) {
        setElapsed(23000);
        setPlaying(false);
      }
      setReady(true);
    };
    sync();
    preference.addEventListener("change", sync);
    const visibility = () => setVisible(document.visibilityState === "visible");
    visibility();
    document.addEventListener("visibilitychange", visibility);
    return () => {
      preference.removeEventListener("change", sync);
      document.removeEventListener("visibilitychange", visibility);
    };
  }, []);
  useEffect(() => {
    if (!ready || !playing || !inView || !visible || ended) return;
    let last = performance.now();
    const timer = window.setInterval(() => {
      const now = performance.now();
      const delta = now - last;
      last = now;
      setElapsed((time) => Math.min(duration, time + delta));
    }, 80);
    return () => window.clearInterval(timer);
  }, [ready, playing, inView, visible, ended]);
  const stage = stages.reduce(
    (current, item, index) => (elapsed >= item.start ? index : current),
    0,
  );
  const selected = stage >= 3;
  const finished = stage === 5;
  const active = ready && playing && inView && visible && elapsed < duration;
  const transition = {
    duration: reduced ? 0 : 0.65,
    ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
  };
  const jump = (index: number) => {
    setElapsed(stages[index].start);
    setPlaying(false);
  };
  const replay = () => {
    setElapsed(0);
    setStyle("Cinematic");
    setLength("25 sec");
    setMusic("Modern");
    setPlaying(true);
  };
  const toggle = () => {
    if (elapsed >= duration) replay();
    else setPlaying((value) => !value);
  };
  const frame = finished
    ? Math.min(4, Math.floor((elapsed - 23000) / 1400))
    : 1;
  return (
    <div ref={root} className={styles.demo} data-stage={stages[stage].name}>
      <div className={styles.chrome}>
        <CaplistLogo light />
        <span className={styles.workspaceLabel}>Your workspace</span>
        <span className={styles.avatar}>CS</span>
      </div>
      <div className={styles.projectBar}>
        <div>
          <span className={styles.breadcrumb}>PROJECT / CHAPEL STREET</span>
          <h3>Chapel Street, Rockdale</h3>
        </div>
        <span className={styles.projectStatus}>
          <Check size={14} /> Media uploaded
        </span>
      </div>
      <LayoutGroup id={id}>
        <div className={styles.workspace}>
          <aside className={styles.mediaTray} aria-label="Source media">
            <div className={styles.trayHeading}>
              <strong>Your media</strong>
              <span>27 photos · Video · Drone</span>
            </div>
            <div className={styles.thumbnails}>
              {photos.map((photo, index) => (
                <motion.div
                  key={photo}
                  initial={false}
                  animate={{
                    opacity: elapsed > index * 350 ? 1 : 0.2,
                    y: elapsed > index * 350 || reduced ? 0 : 12,
                  }}
                  transition={transition}
                  className={styles.thumbnail}
                >
                  <PropertyPhoto
                    photo={photo}
                    sizes="(max-width:700px) 100px, 200px"
                  />
                  {stage >= 2 && (
                    <span>
                      <Check size={12} />
                    </span>
                  )}
                </motion.div>
              ))}
            </div>
            <div className={styles.trayFooter}>
              <span className={styles.blueDot} />
              {stage === 1
                ? "Checking media…"
                : stage >= 2
                  ? "Ready to create"
                  : "Upload complete"}
            </div>
            {stage === 1 && (
              <div
                className={styles.scan}
                style={{
                  transform: `translateY(${((elapsed - 4000) / 3000) * 340}px)`,
                }}
              />
            )}
          </aside>
          <div className={styles.canvas}>
            <div className={styles.canvasHeading}>
              <span className={styles.stepLabel}>
                {String(stage + 1).padStart(2, "0")} / {stages[stage].name}
              </span>
              <h4>{stages[stage].title}</h4>
            </div>
            <div className={styles.stage}>
              {!selected && (
                <div
                  className={styles.productOptions}
                  aria-label="Additional products"
                >
                  {options.map((option, index) => (
                    <motion.div
                      layout
                      key={option.name}
                      className={styles.option}
                      initial={false}
                      animate={{
                        opacity: stage >= 2 ? 1 : 0,
                        y: stage >= 2 || reduced ? 0 : 24,
                      }}
                      transition={{
                        ...transition,
                        delay: stage === 2 ? index * 0.1 : 0,
                      }}
                      style={{ visibility: stage >= 2 ? "visible" : "hidden" }}
                    >
                      <motion.div
                        layoutId={index === 1 ? "selected-product" : undefined}
                        className={`${styles.optionMedia} ${option.portrait ? styles.portrait : styles.landscape}`}
                      >
                        <PropertyPhoto
                          photo={option.photo}
                          sizes={option.portrait ? "400px" : "240px"}
                        />
                        <span>{option.portrait ? "9:16" : "16:9"}</span>
                      </motion.div>
                      {index === 1 ? (
                        <button
                          className={styles.selectProduct}
                          onClick={() => jump(3)}
                        >
                          {option.name}
                          <ArrowRight size={14} />
                        </button>
                      ) : (
                        <span className={styles.optionName}>{option.name}</span>
                      )}
                    </motion.div>
                  ))}
                </div>
              )}
              {stage < 2 && (
                <div className={styles.ingestMessage}>
                  <div className={styles.mediaStack}>
                    {photos.slice(0, 3).map((photo, i) => (
                      <motion.div
                        key={photo}
                        initial={false}
                        animate={{
                          rotate: reduced ? 0 : (i - 1) * 8,
                          x: reduced ? (i - 1) * 65 : (i - 1) * 80,
                          y: i === 1 ? -10 : 5,
                        }}
                        transition={transition}
                      >
                        <PropertyPhoto photo={photo} sizes="400px" />
                      </motion.div>
                    ))}
                  </div>
                  <p>
                    {stage === 0
                      ? "The shoot is in. Let’s see what’s possible."
                      : "Your next products are taking shape."}
                  </p>
                  <div className={styles.analysisProgress}>
                    <span
                      style={{
                        transform: `scaleX(${stage === 0 ? 0.15 : 0.15 + 0.85 * ((elapsed - 4000) / 3000)})`,
                      }}
                    />
                  </div>
                </div>
              )}
              {selected && (
                <div
                  className={`${styles.selected} ${finished ? styles.finished : ""}`}
                >
                  <motion.div
                    layoutId="selected-product"
                    transition={transition}
                    className={styles.player}
                  >
                    {photos.map((photo, index) => (
                      <div
                        key={photo}
                        className={styles.playerFrame}
                        style={{
                          opacity: frame === index ? 1 : 0,
                          transform: `scale(${finished && frame === index && !reduced ? 1 + (((elapsed - 23000) % 1400) / 1400) * 0.025 : 1})`,
                        }}
                      >
                        <PropertyPhoto
                          photo={photo}
                          sizes="(max-width:480px) 470px, 640px"
                        />
                      </div>
                    ))}
                    <div className={styles.playerTop}>
                      <span>{finished ? "Ready" : "Vertical Video Reel"}</span>
                      {finished && <Check size={14} />}
                    </div>
                    <div className={styles.playerBottom}>
                      <span>CHAPEL STREET</span>
                      <strong>A fresh perspective.</strong>
                      {finished && (
                        <div className={styles.playerProgress}>
                          <span
                            style={{
                              transform: `scaleX(${(elapsed - 23000) / 7000})`,
                            }}
                          />
                        </div>
                      )}
                    </div>
                  </motion.div>
                  <div className={styles.selectionDetail}>
                    {stage === 3 && (
                      <>
                        <p className={styles.detailKicker}>
                          Vertical Video Reel
                        </p>
                        <h5>
                          Three choices.
                          <br />
                          Your direction.
                        </h5>
                        <div className={styles.choices}>
                          <label
                            className={
                              elapsed >= 14000 ? styles.choiceActive : ""
                            }
                          >
                            Style
                            <select
                              value={style}
                              onChange={(event) => {
                                setStyle(event.target.value);
                                setPlaying(false);
                              }}
                            >
                              <option>Cinematic</option>
                              <option>Architectural</option>
                              <option>Lifestyle</option>
                            </select>
                            <ChevronDown size={14} />
                          </label>
                          <label
                            className={
                              elapsed >= 16000 ? styles.choiceActive : ""
                            }
                          >
                            Length
                            <select
                              value={length}
                              onChange={(event) => {
                                setLength(event.target.value);
                                setPlaying(false);
                              }}
                            >
                              <option>25 sec</option>
                              <option>20 sec</option>
                              <option>30 sec</option>
                            </select>
                            <ChevronDown size={14} />
                          </label>
                          <label
                            className={
                              elapsed >= 18000 ? styles.choiceActive : ""
                            }
                          >
                            Music
                            <select
                              value={music}
                              onChange={(event) => {
                                setMusic(event.target.value);
                                setPlaying(false);
                              }}
                            >
                              <option>Modern</option>
                              <option>Ambient</option>
                              <option>Acoustic</option>
                            </select>
                            <ChevronDown size={14} />
                          </label>
                        </div>
                        <button
                          className={styles.createButton}
                          onClick={() => {
                            setElapsed(20000);
                            setPlaying(true);
                          }}
                        >
                          Create Reel <ArrowRight size={16} />
                        </button>
                      </>
                    )}
                    {stage === 4 && (
                      <>
                        <p className={styles.detailKicker}>
                          Vertical Video Reel
                        </p>
                        <h5>
                          We’ll take it
                          <br />
                          from here.
                        </h5>
                        <p className={styles.productionCopy}>
                          {elapsed < 21500
                            ? "Bringing your scenes together"
                            : "Finishing your reel"}
                        </p>
                        <div className={styles.productionProgress}>
                          <span
                            style={{
                              transform: `scaleX(${(elapsed - 20000) / 3000})`,
                            }}
                          />
                        </div>
                      </>
                    )}
                    {finished && (
                      <>
                        <span className={styles.readyBadge}>
                          <Check size={15} /> Ready
                        </span>
                        <h5>
                          More to offer.
                          <br />
                          Already yours.
                        </h5>
                        <p className={styles.productionCopy}>
                          Vertical Video Reel
                          <br />
                          {length} · 9:16
                          <br />
                          {style} · {music}
                        </p>
                        <a className={styles.resultLink} href="/demo">
                          Try it with your media <ArrowRight size={16} />
                        </a>
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </LayoutGroup>
      <div className={styles.controls}>
        <div className={styles.playback}>
          <button
            onClick={toggle}
            aria-label={
              playing && elapsed < duration
                ? "Pause walkthrough"
                : "Play walkthrough"
            }
          >
            {playing && elapsed < duration ? (
              <Pause size={16} />
            ) : (
              <Play size={16} />
            )}
          </button>
          <button onClick={replay} aria-label="Replay walkthrough">
            <RotateCcw size={16} />
          </button>
          <span>
            {String(Math.floor(elapsed / 1000)).padStart(2, "0")} / 30s
          </span>
        </div>
        <nav aria-label="Walkthrough stages">
          {stages.map((item, index) => (
            <button
              key={item.name}
              onClick={() => jump(index)}
              aria-current={stage === index ? "step" : undefined}
            >
              {item.name}
            </button>
          ))}
        </nav>
        <span className={styles.soundLabel}>Sound off</span>
      </div>
      <p className="sr-only">
        This demonstration shows uploaded property media, five additional
        product opportunities, selection of a Vertical Video Reel, style, length
        and music choices, creation, and a finished vertical output. Use the
        stage controls to explore at your own pace.
      </p>
      <span
        className="sr-only"
        role="status"
        aria-live={active ? "off" : "polite"}
      >
        {stages[stage].title}
      </span>
    </div>
  );
}
