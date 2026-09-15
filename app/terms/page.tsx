import { InnerPage } from "@/components/editorial/InnerPage";
import { CONTACTS } from "@/lib/site";

export const metadata = {
  title: "Terms of Use — Caplist Studio",
  description:
    "Terms governing use of the Caplist Studio public website and pre-release enquiries.",
};

export default function Terms() {
  return (
    <InnerPage>
      <section className="policy-page shell">
        <p className="eyebrow">Terms of Use</p>
        <h1>
          Clear terms for using
          <br />
          <span>the Caplist Studio website.</span>
        </h1>
        <p className="policy-lead">
          These terms apply to the public Caplist Studio website and pre-release
          enquiries. Separate customer, pilot, subscription or production terms
          may apply before any paid service or media-processing engagement
          begins.
        </p>
        <p className="pilot-note">Effective 15 September 2026.</p>

        <div className="policy-sections">
          <section>
            <h2>Using this website</h2>
            <p>
              You may use this website for lawful business and informational
              purposes. You must not interfere with the website, attempt to gain
              unauthorised access to systems, misuse forms or contact channels,
              scrape the service in a way that causes unreasonable load, or use
              the website for unlawful, fraudulent or abusive activity.
            </p>
          </section>

          <section>
            <h2>Pre-release information</h2>
            <p>
              Caplist Studio is under active development. Product descriptions,
              examples, pricing concepts, availability, workflows and future
              capabilities may change before commercial release. Website content
              is not a guarantee that a particular product, feature, release
              date or commercial term will be available.
            </p>
          </section>

          <section>
            <h2>Enquiries are not orders</h2>
            <p>
              Requesting a demo, early access or a partner discussion does not
              create a subscription, purchase, agency relationship or obligation
              for either party to proceed. Any paid pilot or production work
              must be separately agreed, including scope, pricing, timing,
              deliverables, media handling, revisions and usage rights.
            </p>
          </section>

          <section>
            <h2>Intellectual property</h2>
            <p>
              Unless otherwise stated, the Caplist Studio name, brand, website
              design, software concepts, written content, interface elements and
              other original material on this website are owned by or licensed
              to Caplist Studio. You may not reproduce, republish or commercially
              exploit that material except as permitted by law or with written
              permission.
            </p>
          </section>

          <section>
            <h2>Your material and communications</h2>
            <p>
              You remain responsible for information and material you choose to
              send to Caplist Studio and for having the right to share it. Do not
              include confidential property media, passwords, credentials or
              sensitive client information in an initial website enquiry. Our
              current approach to property media is described in the{" "}
              <a href="/media-policy">Media Handling Policy</a>.
            </p>
          </section>

          <section>
            <h2>Third-party services and links</h2>
            <p>
              This website may link to or rely on third-party services. Those
              services are governed by their own terms, privacy practices and
              availability. Caplist Studio does not control third-party services
              merely because they are linked from or used alongside this
              website.
            </p>
          </section>

          <section>
            <h2>Website availability and accuracy</h2>
            <p>
              We aim to keep website information useful and current, but the
              site may contain errors, omissions or temporary interruptions. To
              the extent permitted by law, the website is provided on an
              as-available basis and should not be relied on as professional,
              legal, financial or property advice.
            </p>
          </section>

          <section>
            <h2>Liability</h2>
            <p>
              Nothing in these terms excludes rights or remedies that cannot be
              excluded under applicable law. Subject to those rights, Caplist
              Studio is not responsible for indirect or consequential loss
              arising solely from reliance on the public website, inability to
              access it, or use of third-party links or services.
            </p>
          </section>

          <section>
            <h2>Privacy</h2>
            <p>
              Our handling of personal information submitted through the public
              website is described in the <a href="/privacy">Privacy Policy</a>.
            </p>
          </section>

          <section>
            <h2>Changes</h2>
            <p>
              We may update these terms as Caplist Studio develops. Material
              changes will be reflected by updating the effective date shown on
              this page.
            </p>
          </section>

          <section>
            <h2>Governing law</h2>
            <p>
              These website terms are governed by the laws of New South Wales,
              Australia, and applicable Commonwealth laws. Courts with
              jurisdiction in New South Wales may hear disputes concerning these
              website terms.
            </p>
          </section>

          <section>
            <h2>Questions</h2>
            <p>
              General questions about these terms can be sent to{" "}
              <a href={`mailto:${CONTACTS.general}`}>{CONTACTS.general}</a>.
            </p>
          </section>
        </div>
      </section>
    </InnerPage>
  );
}
