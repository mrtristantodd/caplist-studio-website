"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight, Check, Copy, Mail } from "lucide-react";
import { CONTACTS } from "@/lib/site";

export function PartnerRequest() {
  const [details, setDetails] = useState({
    name: "",
    business: "",
    email: "",
    location: "",
    volume: "",
    services: "Photography",
    interest: "",
  });
  const [review, setReview] = useState(false);
  const [copied, setCopied] = useState(false);

  const body = useMemo(
    () =>
      `Hi Caplist Studio,\n\nI’m interested in discussing an early Caplist Studio partnership.\n\nName: ${details.name}\nBusiness: ${details.business}\nWork email: ${details.email}\nLocation: ${details.location}\nApproximate property shoots per month: ${details.volume || "Not provided"}\nCurrent services: ${details.services}\n\nWhat interests me about Caplist Studio:\n${details.interest}\n\nPlease contact me to discuss fit, pilot scope and next steps.\n\nThanks,\n${details.name}`,
    [details],
  );

  async function copy() {
    try {
      await navigator.clipboard.writeText(body);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  if (review) {
    return (
      <div className="pilot-form pilot-review">
        <p className="eyebrow">02 / Review your partner enquiry</p>
        <h2>Ready to start the conversation.</h2>
        <p>
          Review the draft below. Nothing is sent until you open your email app
          and choose to send it.
        </p>
        <label htmlFor="partner-draft">Email to {CONTACTS.partners}</label>
        <textarea id="partner-draft" readOnly value={body} rows={14} />
        <div className="pilot-actions">
          <a
            className="button button-blue"
            href={`mailto:${CONTACTS.partners}?subject=${encodeURIComponent(`Caplist Studio partner enquiry — ${details.business}`)}&body=${encodeURIComponent(body)}`}
          >
            <Mail size={18} />
            Open email draft
            <ArrowUpRight size={18} />
          </a>
          <button className="button button-outline" type="button" onClick={copy}>
            {copied ? <Check size={18} /> : <Copy size={18} />}{" "}
            {copied ? "Copied" : "Copy enquiry"}
          </button>
        </div>
        <p role="status" className="pilot-note">
          {copied
            ? `Enquiry copied. Paste it into an email to ${CONTACTS.partners}.`
            : "If your email app does not open, copy the enquiry and send it manually."}
        </p>
        <button
          type="button"
          className="text-link"
          onClick={() => {
            setReview(false);
            setCopied(false);
          }}
        >
          Edit your details
        </button>
      </div>
    );
  }

  return (
    <form
      className="pilot-form"
      onSubmit={(event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        setDetails({
          name: String(data.get("name")).trim(),
          business: String(data.get("business")).trim(),
          email: String(data.get("email")).trim(),
          location: String(data.get("location")).trim(),
          volume: String(data.get("volume")).trim(),
          services: String(data.get("services")),
          interest: String(data.get("interest")).trim(),
        });
        setReview(true);
      }}
    >
      <p className="eyebrow">01 / Your media business</p>
      <h2>Request a partner discussion.</h2>
      <div className="pilot-field-grid">
        <label>
          Your name
          <input name="name" autoComplete="name" required maxLength={100} />
        </label>
        <label>
          Work email
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={180}
          />
        </label>
      </div>
      <div className="pilot-field-grid">
        <label>
          Media business
          <input
            name="business"
            autoComplete="organization"
            required
            maxLength={160}
          />
        </label>
        <label>
          Location
          <input name="location" required maxLength={120} />
        </label>
      </div>
      <div className="pilot-field-grid">
        <label>
          Approx. property shoots per month (optional)
          <input name="volume" inputMode="numeric" maxLength={30} />
        </label>
        <label>
          Current services
          <select name="services" defaultValue="Photography">
            <option>Photography</option>
            <option>Photography + video</option>
            <option>Photography + video + drone</option>
            <option>Full-service property media</option>
            <option>Other</option>
          </select>
        </label>
      </div>
      <label>
        What interests you about Caplist Studio?
        <textarea name="interest" required maxLength={1600} rows={6} />
      </label>
      <p className="pilot-note">
        Please do not send property media or client file links with this initial
        enquiry. We’ll agree an appropriate transfer method if a pilot moves
        forward.
      </p>
      <button className="button button-blue" type="submit">
        Review partner enquiry <ArrowUpRight size={18} />
      </button>
    </form>
  );
}
