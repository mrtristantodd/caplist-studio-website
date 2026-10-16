"use client";

import { useEffect, useState, type FormEvent } from "react";
import { ArrowUpRight, ChevronDown } from "lucide-react";
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
        capture: data.getAll("capture").map(String),
      });
      setMessage(result.message);
    } catch {
      setMessage("Your application could not be sent. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  }

  return <form className={styles.form} onSubmit={onSubmit} aria-label="Beta signup" aria-describedby="application-note">
    <p className={styles.formNote} id="application-note">Applications will open here soon. This preview does not send or save your details. Fields marked * are required.</p>
    <div className={styles.formGrid}>
      <label>Your name *<input disabled={!ready} name="name" autoComplete="name" required maxLength={120} /></label>
      <label>Business name *<input disabled={!ready} name="business" autoComplete="organization" required maxLength={160} /></label>
      <label className={styles.fullField}>Work email *<input disabled={!ready} name="email" type="email" autoComplete="email" required maxLength={254} /></label>
      <label className={styles.fullField}>Mobile number *<input disabled={!ready} name="mobile" type="tel" autoComplete="tel" required maxLength={30} /></label>
      <label className={styles.fullField}>Website / Instagram *<input disabled={!ready} name="portfolio" type="text" autoComplete="url" placeholder="Website URL or @instagram" required maxLength={500} /></label>
      <label className={styles.fullField}>Approx. property shoots per week<span className={styles.selectControl}><select disabled={!ready} name="shootsPerWeek" defaultValue=""><option value="" disabled>Select a range</option>{["1–5", "6–10", "11–20", "20+"].map(value => <option key={value}>{value}</option>)}</select><ChevronDown size={18} aria-hidden="true" /></span></label>
    </div>
    <fieldset><legend>What do you usually capture?</legend><div className={styles.captureOptions}>
      {["Photos", "Professional video", "Drone", "Vertical video"].map(option => <label key={option}><input disabled={!ready} type="checkbox" name="capture" value={option} />{option}</label>)}
    </div></fieldset>
    <fieldset><legend>Which Beta product are you most interested in?</legend><div className={styles.captureOptions}>
      {["Photo Reel", "Vertical Video Reel", "Both"].map(option => <label key={option}><input disabled={!ready} type="radio" name="productInterest" value={option} />{option}</label>)}
    </div></fieldset>
    <fieldset><legend>Do you have recent professional property media available to test CAPLIST?</legend><div className={styles.captureOptions}>
      {["Yes", "No"].map(option => <label key={option}><input disabled={!ready} type="radio" name="mediaAvailable" value={option} />{option}</label>)}
    </div></fieldset>
    <label className={styles.workflowNote}>Anything else we should know about your workflow? (optional)<textarea disabled={!ready} name="workflowNotes" rows={3} maxLength={1000} /></label>
    <label className={styles.consent}><input disabled={!ready} type="checkbox" name="contactConsent" required /><span>I consent to CAPLIST Studio contacting me about my Beta application and product access. *</span></label>
    <button className="studio-button" type="submit" disabled={!ready || submitting}>{submitting ? "Checking application…" : "Join the Beta"}<ArrowUpRight size={18} aria-hidden="true" /></button>
    <noscript><p className={styles.formNote}>Applications are not open yet. Your details cannot be submitted from this preview.</p></noscript>
    <p className={styles.formStatus} role="status" aria-live="polite">{message}</p>
  </form>;
}
