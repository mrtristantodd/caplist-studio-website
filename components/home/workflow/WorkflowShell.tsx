import { CaplistLogo } from "@/components/brand/CaplistLogo";
import { WorkflowScene } from "./WorkflowScenes";
import { workflowStateDetails, type WorkflowState } from "./workflow-data";
import styles from "./workflow.module.css";

export function WorkflowShell({ state, review = false }: { state: WorkflowState; review?: boolean }) {
  const details = workflowStateDetails[state];
  return (
    <section className={`${styles.shell} ${review ? styles.reviewShell : ""}`} data-workflow-state={state}>
      <header className={styles.shellHeader}>
        <CaplistLogo light />
        <div className={styles.projectIdentity}>
          <span>Project</span>
          <strong>9 Coastview Drive</strong>
        </div>
      </header>
      <div className={styles.sceneHeader}>
        <div><span>{details.step}</span><strong>{details.label}</strong></div>
        <h2>{details.headline}</h2>
      </div>
      <div className={styles.sceneBody}>
        <WorkflowScene state={state} />
      </div>
      <footer className={styles.shellFooter}>
        <span>Professional input</span>
        <div><i className={styles.activeStep} /><i /><i /><i /></div>
        <strong>Professional output</strong>
      </footer>
    </section>
  );
}
