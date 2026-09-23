import { CaplistLogo } from "@/components/brand/CaplistLogo";
import { Pause, Play } from "lucide-react";
import { useWorkflowMotion } from "./useWorkflowMotion";
import { WorkflowScene } from "./WorkflowScenes";
import {
  workflowPhaseByState,
  workflowPhases,
  workflowStateDetails,
  type WorkflowState,
} from "./workflow-data";
import styles from "./workflow.module.css";

export function WorkflowShell({ state, review = false, animated = false, running = false, paused = false, onTogglePause }: {
  state: WorkflowState; review?: boolean; animated?: boolean; running?: boolean;
  paused?: boolean; onTogglePause?: () => void;
}) {
  const scope = useWorkflowMotion(state, animated, running);
  const details = workflowStateDetails[state];
  const activePhase = workflowPhaseByState[state];
  return (
    <section ref={scope} className={`${styles.shell} ${review ? styles.reviewShell : styles.motionShell}`} data-workflow-state={state} data-animated={animated}>
      <header className={styles.shellHeader}>
        <CaplistLogo light />
        <div className={styles.projectIdentity}>
          <span>Project</span>
          <strong>9 Coastview Drive</strong>
        </div>
      </header>
      <div key={`${state}-header`} className={styles.sceneHeader}>
        <div><span>{details.step}</span><strong>{details.label}</strong></div>
        <h2>{details.headline}</h2>
      </div>
      <div key={state} className={styles.sceneBody}>
        <WorkflowScene state={state} animated={animated} running={running} paused={paused} />
      </div>
      <footer className={styles.shellFooter}>
        {animated ? <button type="button" data-workflow-toggle className={styles.playbackControl} onClick={onTogglePause}
          aria-label={paused ? "Resume workflow demonstration" : "Pause workflow demonstration"} aria-pressed={paused}>
          {paused ? <Play size={11} /> : <Pause size={11} />}<span>{paused ? "Resume" : "Pause"}</span>
        </button> : <span>Professional input</span>}
        <div className={styles.phaseProgress} aria-label={`Workflow phase: ${activePhase}`}>
          <small key={activePhase}>{activePhase}</small>
          <span aria-hidden="true">
            {workflowPhases.map((phase) => (
              <i key={phase} className={phase === activePhase ? styles.activeStep : ""} />
            ))}
          </span>
        </div>
        <strong>Professional output</strong>
      </footer>
    </section>
  );
}
