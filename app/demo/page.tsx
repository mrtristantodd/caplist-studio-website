import { InnerPage } from "@/components/editorial/InnerPage";
import { PilotRequest } from "@/components/editorial/PilotRequest";

export const metadata = {
  title: "Book a demo — Caplist Studio",
  description:
    "See what additional products Caplist Studio could create from a completed property shoot in your media business.",
};

export default function Demo() {
  return (
    <InnerPage>
      <section className="pilot-page shell">
        <div className="pilot-intro">
          <p className="eyebrow">Bring a recent property shoot</p>
          <h1>
            See what else
            <br />
            you could have
            <br />
            <span>sold from it.</span>
          </h1>
          <p>
            Show us the type of professional media your business already captures. We’ll walk through the additional Caplist products that could fit that same job, how little the workflow needs to change and where they could sit inside your existing client offer.
          </p>
          <ul>
            <li>See which additional products your current media could support</li>
            <li>Understand what you would need to do — and what Caplist handles for you</li>
            <li>Discuss pricing, packaging and the simplest way to test it on real jobs</li>
          </ul>
          <p>
            Send the details below and we’ll arrange a focused demo around your business rather than a generic software tour.
          </p>
        </div>
        <PilotRequest initialTier="Not sure yet" mode="demo" />
      </section>
    </InnerPage>
  );
}
