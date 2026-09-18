import { InnerPage } from "@/components/editorial/InnerPage";
import { AccessLink } from "@/components/editorial/StudioUI";
export const metadata = {
  title: "Early Access — Caplist Studio",
  robots: { index: false, follow: true },
};
export default function EarlyAccess() {
  return (
    <InnerPage>
      <section className="policy-page shell">
        <p className="eyebrow">CAPLIST EARLY ACCESS</p>
        <h1>Interested in using Caplist with your property-media business?</h1>
        <p className="policy-lead">
          Early access is being introduced with selected professional
          property-media businesses while the production catalogue and workflows
          are refined.
        </p>
        <p>
          Book a demo to see the product, discuss your current media workflow
          and find out whether Caplist is a fit for your business.
        </p>
        <AccessLink href="/demo">Book a demo</AccessLink>
      </section>
    </InnerPage>
  );
}
