"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowUpRight, Check, Copy, Mail } from "lucide-react";
import { CONTACTS } from "@/lib/site";

const enquiryRoutes = {
  "General enquiries": CONTACTS.general,
  "Demos & product enquiries": CONTACTS.general,
  Partnerships: CONTACTS.partners,
  "Privacy & data": CONTACTS.privacy,
  "Accounts & billing": CONTACTS.accounts,
} as const;

type EnquiryType = keyof typeof enquiryRoutes;

export function ContactRequest() {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    business: "",
    type: "General enquiries" as EnquiryType,
    message: "",
  });
  const [review, setReview] = useState(false);
  const reviewHeading = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    if (review) reviewHeading.current?.focus();
  }, [review]);
  const [copied, setCopied] = useState(false);
  const recipient = enquiryRoutes[details.type];

  const body = useMemo(
    () =>
      `Hi Caplist Studio,\n\nName: ${details.name}\nBusiness: ${details.business || "Not provided"}\nReply email: ${details.email}\nEnquiry type: ${details.type}\n\nMessage:\n${details.message}\n\nThanks,\n${details.name}`,
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
    const subject = `Caplist Studio enquiry — ${details.type}`;
    return (
      <div className="pilot-form pilot-review">
        <p className="eyebrow">02 / Review your enquiry</p>
        <h2 ref={reviewHeading} tabIndex={-1}>
          Your message is ready.
        </h2>
        <p>
          Review the details below, then open the draft in your email app. The
          website does not send anything until you choose to send the email.
        </p>
        <label htmlFor="contact-draft">Email to {recipient}</label>
        <textarea id="contact-draft" readOnly value={body} rows={12} />
        <div className="pilot-actions">
          <a
            className="button button-blue"
            href={`mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`}
          >
            <Mail size={18} />
            Open email draft
            <ArrowUpRight size={18} />
          </a>
          <button
            className="button button-outline"
            onClick={copy}
            type="button"
          >
            {copied ? <Check size={18} /> : <Copy size={18} />}{" "}
            {copied ? "Copied" : "Copy message"}
          </button>
        </div>
        <p role="status" className="pilot-note">
          {copied
            ? `Message copied. Paste it into an email to ${recipient}.`
            : "If your email app does not open, copy the message and send it manually."}
        </p>
        <button
          className="text-link"
          type="button"
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
          email: String(data.get("email")).trim(),
          business: String(data.get("business")).trim(),
          type: String(data.get("type")) as EnquiryType,
          message: String(data.get("message")).trim(),
        });
        setReview(true);
      }}
    >
      <p className="eyebrow">01 / Your enquiry</p>
      <h2>Contact Caplist Studio.</h2>
      <div className="pilot-field-grid">
        <label>
          Your name
          <input
            name="name"
            defaultValue={details.name}
            autoComplete="name"
            required
            maxLength={100}
          />
        </label>
        <label>
          Work email
          <input
            name="email"
            defaultValue={details.email}
            type="email"
            autoComplete="email"
            required
            maxLength={180}
          />
        </label>
      </div>
      <div className="pilot-field-grid">
        <label>
          Business (optional)
          <input
            name="business"
            defaultValue={details.business}
            autoComplete="organization"
            maxLength={160}
          />
        </label>
        <label>
          Enquiry type
          <select name="type" defaultValue={details.type}>
            {Object.keys(enquiryRoutes).map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
        </label>
      </div>
      <label>
        Message
        <textarea
          name="message"
          defaultValue={details.message}
          required
          maxLength={2000}
          rows={7}
        />
      </label>
      <p className="pilot-note">
        Please do not send property media, passwords or other sensitive files in
        an initial website enquiry. See our{" "}
        <a href="/privacy">Privacy Policy</a> and{" "}
        <a href="/media-policy">Media Handling Policy</a>.
      </p>
      <button className="button button-blue" type="submit">
        Review my enquiry <ArrowUpRight size={18} />
      </button>
    </form>
  );
}
