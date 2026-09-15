import type { Metadata } from "next";
import { InnerPage } from "@/components/editorial/InnerPage";
import { PilotRedirect } from "@/components/editorial/PilotRedirect";

export const metadata: Metadata = {
  title: "Early Access — Caplist Studio",
  robots: {
    index: false,
    follow: false,
  },
};

export default function Pilot() {
  return (
    <InnerPage>
      <section className="policy-page shell">
        <p className="eyebrow">Early access</p>
        <h1>
          This page has
          <br />
          <span>moved.</span>
        </h1>
        <PilotRedirect />
      </section>
    </InnerPage>
  );
}
