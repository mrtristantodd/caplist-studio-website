"use client";

import { useEffect, useState, type FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import { submitBetaApplication } from "./application-transport";
import styles from "@/app/founding-beta/founding-beta.module.css";

export function BetaApplication() {
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setSubmitting(true);
    setMessage("");
    try {
      const result = await submitBetaApplication({
        name: String(data.get("name") ?? "").trim(),
        business: String(data.get("business") ?? "").trim(),
        email: String(data.get("email") ?? "").trim(),
        portfolio: String(data.get("portfolio") ?? "").trim(),
        jobsPerWeek: String(data.get("jobsPerWeek") ?? ""),
        capture: data.getAll("capture").map(String),
      });
      setMessage(result.message);
    } catch {
      setMessage("Your application could not be sent. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  }

  return <form className={styles.form} onSubmit={onSubmit} aria-label="Founding Beta application" aria-describedby="application-note">
    <p className={styles.formNote} id="application-note">Applications will open here soon. This preview does not send or save your details.</p>
    <div className={styles.formGrid}>
      <label>Your name<input disabled={!ready} name="name" autoComplete="name" required maxLength={120} /></label>
      <label>Business name<input disabled={!ready} name="business" autoComplete="organization" required maxLength={160} /></label>
      <label className={styles.fullField}>Work email<input disabled={!ready} name="email" type="email" autoComplete="email" required maxLength={254} /></label>
      <label className={styles.fullField}>Website / portfolio<input disabled={!ready} name="portfolio" type="url" autoComplete="url" placeholder="https://" required maxLength={500} /></label>
      <label className={styles.fullField}>Approx. property jobs per week<input disabled={!ready} name="jobsPerWeek" type="number" inputMode="numeric" min="0" step="1" required /></label>
    </div>
    <fieldset><legend>What do you normally capture?</legend><div className={styles.captureOptions}>
      {["Photos", "Professional video", "Drone", "Vertical video"].map(option => <label key={option}><input disabled={!ready} type="checkbox" name="capture" value={option} />{option}</label>)}
    </div></fieldset>
    <button className="studio-button" type="submit" disabled={!ready || submitting}>{submitting ? "Checking application…" : "Apply for Founding Beta"}<ArrowUpRight size={18} aria-hidden="true" /></button>
    <noscript><p className={styles.formNote}>Applications are not open yet. Your details cannot be submitted from this preview.</p></noscript>
    <p className={styles.formStatus} role="status" aria-live="polite">{message}</p>
  </form>;
}
