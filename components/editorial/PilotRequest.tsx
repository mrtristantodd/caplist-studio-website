"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Check, Copy, Mail } from "lucide-react";
import { CONTACTS } from "@/lib/site";

const recipient = CONTACTS.partners;
const validTiers = ["Launch", "Growth", "Scale"];

export function PilotRequest({
  initialTier,
  mode = "early-access",
}: {
  initialTier: string;
  mode?: "early-access" | "demo";
}) {
  const isDemo = mode === "demo";
  const [details, setDetails] = useState({
    name: "",
    email: "",
    business: "",
    tier: initialTier,
    media: "Photography",
    brief: "",
  });
  const [review, setReview] = useState(false);
  const [opened, setOpened] = useState(false);
  const [copied, setCopied] = useState(false);
  const heading = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (review) heading.current?.focus();
  }, [review]);

  useEffect(() => {
    const requestedTier = new URLSearchParams(window.location.search).get("tier");
    if (requestedTier && validTiers.includes(requestedTier)) {
      setDetails((current) => ({ ...current, tier: requestedTier }));
    }
  }, []);

  const body = `Hi Caplist Studio,\n\n${isDemo ? "I’d like to arrange a Caplist Studio demo." : "I’d like to request early access to Caplist Studio."}\n\nName: ${details.name}\nBusiness: ${details.business}\nReply email: ${details.email}\nInterested plan: ${details.tier}\nMedia I currently offer: ${details.media}\n\nWhat I’d like Caplist to help with:\n${details.brief}\n\nPlease contact me about suitable products, pricing and next steps before I share any property media.\n\nThanks,\n${details.name}`;

  async function copy() {
    try {
      await navigator.clipboard.writeText(body);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  if (review)
    return (
      <div className="pilot-form pilot-review">
        <p className="eyebrow">02 / Review your request</p>
        <h2 ref={heading} tabIndex={-1}>
          {opened ? "Finish sending in your email app." : "Your request is ready to send."}
        </h2>
        <p>
          {opened
            ? "We can’t confirm whether your email was sent. Send the draft in your email app, or copy it below and email Caplist Studio directly."
            : "Review the details below. Opening your email app creates a draft; nothing is sent from this website."}
        </p>
        <label htmlFor="pilot-draft">Email to {recipient}</label>
        <textarea id="pilot-draft" readOnly value={body} rows={13} />
        <div className="pilot-actions">
          <a
            className="button button-blue"
            onClick={() => setOpened(true)}
            href={`mailto:${recipient}?subject=${encodeURIComponent(`Caplist ${isDemo ? "demo request" : "early access"} — ${details.tier}`)}&body=${encodeURIComponent(body)}`}
          >
            <Mail size={18} />
            Open email draft
            <ArrowUpRight size={18} />
          </a>
          <button className="button button-outline" onClick={copy} type="button">
            {copied ? <Check size={18} /> : <Copy size={18} />} {copied ? "Copied" : "Copy request"}
          </button>
        </div>
        <p role="status" className="pilot-note">
          {copied
            ? `Request copied. Paste it into an email to ${recipient}.`
            : "If your email app does not open, copy the request or select the text above."}
        </p>
        <div className="pilot-next">
          <h3>What happens next</h3>
          <p>
            We’ll reply to {details.email} to answer questions and
            {isDemo ? " arrange a suitable demo time" : " discuss early access"}.
            You do not need to send property media or make a payment to enquire.
            {isDemo && " A demo is booked once we have agreed a time with you."}
          </p>
        </div>
        <button
          className="text-link"
          type="button"
          onClick={() => {
            setReview(false);
            setOpened(false);
            setCopied(false);
          }}
        >
          Edit your details
        </button>
      </div>
    );

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
          tier: String(data.get("tier")),
          media: String(data.get("media")),
          brief: String(data.get("brief")).trim(),
        });
        setReview(true);
      }}
    >
      <p className="eyebrow">01 / Your business</p>
      <p className="pilot-note">Name, work email and media business are required.</p>
      <h2>{isDemo ? "Book a demo." : "Request early access."}</h2>
      <div className="pilot-field-grid">
        <label>
          Your name
          <input name="name" autoComplete="name" required maxLength={100} defaultValue={details.name} />
        </label>
        <label>
          Work email
          <input name="email" type="email" autoComplete="email" required maxLength={180} defaultValue={details.email} />
        </label>
      </div>
      <label>
        Media business
        <input name="business" autoComplete="organization" required maxLength={160} defaultValue={details.business} />
      </label>
      <div className="pilot-field-grid">
        <label>
          Plan you’re interested in
          <select name="tier" value={details.tier} onChange={(event) => setDetails((current) => ({ ...current, tier: event.target.value }))}>
            {["Not sure yet", ...validTiers].map((x) => <option key={x}>{x}</option>)}
          </select>
        </label>
        <label>
          Media you already offer
          <select name="media" defaultValue={details.media}>
            {["Photography", "Property video", "Photography, video and drone", "I’d like advice"].map((x) => <option key={x}>{x}</option>)}
          </select>
        </label>
      </div>
      <label>
        What would you like to create? (optional)
        <textarea
          name="brief"
          maxLength={1200}
          rows={4}
          defaultValue={details.brief}
          placeholder="Tell us which additional products would be useful for your clients."
        />
      </label>
      <p className="pilot-note">
        Please leave out property addresses, client names and file links at this
        stage. <a href="/media-policy">See how we handle media and enquiries</a>.
      </p>
      <button className="button button-blue" type="submit">
        Review my request <ArrowUpRight size={18} />
      </button>
    </form>
  );
}
