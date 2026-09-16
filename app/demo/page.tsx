import { InnerPage } from "@/components/editorial/InnerPage";
import { PilotRequest } from "@/components/editorial/PilotRequest";

export const metadata = {
  title: "Book a demo — Caplist Studio",
  description:
    "Arrange a focused Caplist Studio demo for your professional property-media business.",
};

export default function Demo() {
  return (
    <InnerPage>
      <section className="pilot-page shell">
        <div className="pilot-intro">
          <p className="eyebrow">More from every capture</p>
          <h1>
            See what your
            <br />
            media could
            <br />
            <span>become.</span>
          </h1>
          <p>
            Tell us about your property-media business and what you would like
            to add to your client offer. We’ll show you the most relevant Caplist
            products and answer questions about how they could fit your workflow.
          </p>
          <ul>
            <li>Explore products that suit the media you already capture</li>
            <li>See how Caplist can fit your existing workflow</li>
            <li>Discuss output options, pricing and next steps</li>
          </ul>
          <p>
            Submit the details below to prepare an email request. We’ll confirm a
            suitable demo time with you by email.
          </p>
        </div>
        <PilotRequest initialTier="Not sure yet" mode="demo" />
      </section>
    </InnerPage>
  );
}
