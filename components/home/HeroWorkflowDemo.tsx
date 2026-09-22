"use client";

import { useEffect, useRef, useState } from "react";
import { WorkflowShell } from "./workflow/WorkflowShell";
import {
  isWorkflowState, workflowDurations, workflowStateDetails, workflowStates,
  type WorkflowState,
} from "./workflow/workflow-data";
import styles from "./workflow/workflow.module.css";

export function HeroWorkflowDemo({ reviewAll = false }: { reviewAll?: boolean }) {
  const root = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<WorkflowState>("upload");
  const [configured, setConfigured] = useState(false);
  const [pinned, setPinned] = useState(false);
  const [reduced, setReduced] = useState(true);
  const [visible, setVisible] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);
  const [paused, setPaused] = useState(false);
  const [focused, setFocused] = useState(false);
  const clock = useRef({ state, remaining: workflowDurations[state] });
  const animated = configured && !reviewAll && !pinned && !reduced;
  const running = animated && visible && pageVisible && !paused && !focused;

  useEffect(() => {
    const query = new URLSearchParams(window.location.search).get("workflowState");
    if (isWorkflowState(query) && !reviewAll) { setState(query); setPinned(true); }
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReduced(preference.matches);
    const updateVisibility = () => setPageVisible(!document.hidden);
    updatePreference(); updateVisibility(); setConfigured(true);
    preference.addEventListener("change", updatePreference);
    document.addEventListener("visibilitychange", updateVisibility);
    return () => {
      preference.removeEventListener("change", updatePreference);
      document.removeEventListener("visibilitychange", updateVisibility);
    };
  }, [reviewAll]);

  useEffect(() => {
    if (reviewAll || !root.current) return;
    const observer = new IntersectionObserver(([entry]) => {
      // Separate start/stop thresholds avoid flicker around the viewport edge.
      if (entry.intersectionRatio >= 0.3) setVisible(true);
      else if (entry.intersectionRatio <= 0.08) setVisible(false);
    }, { threshold: [0, 0.08, 0.3] });
    observer.observe(root.current);
    return () => observer.disconnect();
  }, [reviewAll]);

  useEffect(() => {
    if (clock.current.state !== state) clock.current = { state, remaining: workflowDurations[state] };
    if (!running) return;
    const started = performance.now();
    const timer = window.setTimeout(() => {
      setState(workflowStates[(workflowStates.indexOf(state) + 1) % workflowStates.length]);
    }, clock.current.remaining);
    return () => {
      window.clearTimeout(timer);
      clock.current.remaining = Math.max(0, clock.current.remaining - (performance.now() - started));
    };
  }, [running, state]);

  if (reviewAll) return (
    <div className={styles.reviewGrid}>
      {workflowStates.map((item) => (
        <div key={item} className={styles.reviewItem}>
          <div className={styles.reviewLabel}>
            <span>{workflowStateDetails[item].step}</span><strong>{workflowStateDetails[item].label}</strong>
          </div>
          <WorkflowShell state={item} review />
        </div>
      ))}
    </div>
  );

  const displayedState = pinned ? state : reduced ? "unlock" : state;
  return (
    <div ref={root} data-workflow-running={running} data-workflow-mode={animated ? "motion" : "static"}
      onFocusCapture={(event) => setFocused(!(event.target as HTMLElement).closest("[data-workflow-toggle]"))}
      onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false); }}>
      <WorkflowShell state={displayedState} animated={animated} running={running}
        paused={paused} onTogglePause={() => setPaused(value => !value)} />
    </div>
  );
}
