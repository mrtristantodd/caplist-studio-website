import { Photo } from "@/components/editorial/Photo";
import { InnerPage } from "@/components/editorial/InnerPage";
import { PartnerRequest } from "@/components/editorial/PartnerRequest";
import { AccessLink } from "@/components/editorial/StudioUI";
export const metadata = {
  title: "Partners — Caplist Studio",
  description: "Help shape a better way to get more from every property shoot.",
};
export default function Partners() {
  return (
    <InnerPage>
      <section className="policy-page shell">
        <p className="eyebrow">EARLY PARTNER PROGRAMME</p>
        <h1>Help shape a better way to get more from every property shoot.</h1>
        <p className="policy-lead">
          We’re working with selected professional property-media businesses to
          test Caplist on real property jobs, refine the product catalogue and
          make sure the finished outputs are genuinely valuable to both the
          media business and its clients.
        </p>
        <AccessLink href="#partner-enquiry">Discuss a partnership</AccessLink>
        <div className="editorial-image">
          <Photo media="exterior" sizes="90vw" />
        </div>
        <div className="policy-sections">
          <section>
            <p className="eyebrow">Why partner early?</p>
            <h2>Build new products around work your business already wins.</h2>
            <p>
              Early partners use real completed property captures to test how
              Caplist fits into an operating media business.
            </p>
            <p>
              Together, we look at the finished products, how easily they fit
              into your workflow, how useful they are to your clients and where
              the product catalogue should go next.
            </p>
          </section>
          <section>
            <h2>What your business gets</h2>
            <ul>
              <li>More products to offer from existing property media.</li>
              <li>
                A direct role in shaping products designed for professional
                property-media businesses.
              </li>
              <li>
                Early exposure to new production capabilities as they become
                commercially useful.
              </li>
              <li>
                A workflow that keeps your business, brand and client
                relationship in front.
              </li>
            </ul>
          </section>
          <section>
            <p className="eyebrow">What your clients get</p>
            <h2>More high-quality ways to market every listing.</h2>
            <p>
              Caplist gives your business a broader visual product menu so
              agents can buy more content from the media provider they already
              trust — instead of organising another supplier, another shoot or
              another production workflow.
            </p>
          </section>
          <section>
            <h2>What we test together</h2>
            <ul>
              {[
                "Output quality",
                "Product usefulness",
                "Workflow fit",
                "Production turnaround",
                "Client interest",
                "Which products are worth developing further",
              ].map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </section>
        </div>
        <div id="partner-enquiry">
          <PartnerRequest />
        </div>
      </section>
    </InnerPage>
  );
}
