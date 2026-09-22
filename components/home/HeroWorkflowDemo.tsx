"use client";

import { useEffect, useState } from "react";
import { WorkflowShell } from "./workflow/WorkflowShell";
import {
  isWorkflowState,
  workflowStateDetails,
  workflowStates,
  type WorkflowState,
} from "./workflow/workflow-data";
import styles from "./workflow/workflow.module.css";

export function HeroWorkflowDemo({ reviewAll = false }: { reviewAll?: boolean }) {
  const [state, setState] = useState<WorkflowState>("unlock");

  useEffect(() => {
    if (reviewAll) return;
    const requested = new URLSearchParams(window.location.search).get("workflowState");
    if (isWorkflowState(requested)) setState(requested);
  }, [reviewAll]);

  if (reviewAll) {
    return (
      <div className={styles.reviewGrid}>
        {workflowStates.map((item) => (
          <div key={item} className={styles.reviewItem}>
            <div className={styles.reviewLabel}>
              <span>{workflowStateDetails[item].step}</span>
              <strong>{workflowStateDetails[item].label}</strong>
            </div>
            <WorkflowShell state={item} review />
          </div>
        ))}
      </div>
    );
  }

  return <WorkflowShell state={state} />;
}
