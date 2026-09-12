import { InnerPage } from "@/components/editorial/InnerPage";
export const metadata = { title: "Early access & terms — Caplist Studio" };
export default function Terms() {
  return (
    <InnerPage>
      <section className="policy-page shell">
        <p className="eyebrow">Early access & production terms</p>
        <h1>
          A conversation first.
          <br />
          <span>An agreement before production.</span>
        </h1>
        <p className="policy-lead">
          Caplist Studio is being built for professional property-media
          businesses. Requesting early access does not purchase a product or
          create a paid subscription.
        </p>
        <div className="policy-sections">
          <section>
            <h2>Early-access requests</h2>
            <p>
              The website prepares an email draft for you to review and send.
              Access, release dates and production availability are not
              guaranteed by submitting an enquiry.
            </p>
          </section>
          <section>
            <h2>Before production begins</h2>
            <p>
              The price, deliverables, revisions, timing, media handling and
              usage rights must be agreed before work begins. Final production
              terms will be provided for review at that stage.
            </p>
          </section>
          <section>
            <h2>Questions</h2>
            <p>
              Contact{" "}
              <a href="mailto:tristan@tristantodd.me">tristan@tristantodd.me</a>
              . Read our{" "}
              <a href="/media-policy">privacy and media-handling commitment</a>{" "}
              before sharing information or files.
            </p>
          </section>
        </div>
      </section>
    </InnerPage>
  );
}
