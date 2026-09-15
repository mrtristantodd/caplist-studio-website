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
            Tell us about your property-media business and the products you want
            to offer. We’ll use that context to arrange a focused conversation.
          </p>
          <ul>
            <li>Explore suitable products for your source media</li>
            <li>See how Caplist fits your existing workflow</li>
            <li>Discuss creative scope and delivery needs</li>
          </ul>
          <p>
            Your request opens an email draft to Caplist Studio. A demo time is
            confirmed by email.
          </p>
        </div>
        <PilotRequest initialTier="Not sure yet" mode="demo" />
      </section>
    </InnerPage>
  );
}
