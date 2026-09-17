import { InnerPage } from "@/components/editorial/InnerPage";
import { PilotRequest } from "@/components/editorial/PilotRequest";

export const metadata = {
  title: "Request Early Access — Caplist Studio",
  description:
    "Request early access to Caplist Studio and test how much more one completed property shoot could produce for your media business.",
};

export default function EarlyAccess() {
  return (
    <InnerPage>
      <section className="pilot-page shell">
        <div className="pilot-intro">
          <p className="eyebrow">Start with one completed shoot</p>
          <h1>
            See if Caplist can make
            <br />
            <span>your existing jobs worth more.</span>
          </h1>
          <p>
            Early access is for professional property-media businesses that want to test Caplist on real work before deciding how deeply it should fit into their service.
          </p>
          <ul>
            <li>Use media you already capture for clients</li>
            <li>Explore additional products without another property visit</li>
            <li>Keep your own client relationship, packages and pricing</li>
          </ul>
          <p>
            Tell us about your business and the media you normally produce. We’ll help you choose a practical first property to test.
          </p>
        </div>
        <PilotRequest initialTier="Not sure yet" />
      </section>
    </InnerPage>
  );
}
