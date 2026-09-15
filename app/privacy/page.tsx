import { InnerPage } from "@/components/editorial/InnerPage";
import { CONTACTS } from "@/lib/site";

export const metadata = {
  title: "Privacy Policy — Caplist Studio",
  description:
    "How Caplist Studio handles personal information submitted through this website and pre-release enquiries.",
};

export default function Privacy() {
  return (
    <InnerPage>
      <section className="policy-page shell">
        <p className="eyebrow">Privacy Policy</p>
        <h1>
          Clear about the information
          <br />
          <span>we ask you to share.</span>
        </h1>
        <p className="policy-lead">
          This policy explains how Caplist Studio handles personal information
          collected through this website and during pre-release business
          enquiries. It does not yet describe a production customer account or
          media-processing service that has not launched.
        </p>
        <p className="pilot-note">Effective 15 September 2026.</p>

        <div className="policy-sections">
          <section>
            <h2>Information we may collect</h2>
            <p>
              We may receive your name, work email address, business name,
              location, enquiry details and information you choose to include in
              correspondence with Caplist Studio. Our hosting and email providers
              may also process ordinary technical information required to deliver
              the website and email, such as IP addresses, timestamps and mail
              routing data.
            </p>
          </section>

          <section>
            <h2>How we collect it</h2>
            <p>
              Information is primarily collected when you contact us, request a
              demo or early access, enquire about a partnership, or communicate
              with us by email. Current website enquiry flows prepare an email
              draft for you to review and send; they do not silently submit your
              form data to a Caplist Studio database.
            </p>
          </section>

          <section>
            <h2>Why we use it</h2>
            <p>
              We use personal information to respond to enquiries, evaluate
              potential pilot or partner relationships, discuss product fit,
              administer business correspondence, protect the website and
              improve the Caplist Studio service. We do not sell personal
              information to advertisers.
            </p>
          </section>

          <section>
            <h2>Service providers</h2>
            <p>
              Caplist Studio may rely on third-party providers for website
              hosting, domain services, email, file transfer, cloud
              infrastructure and other operational services. Those providers may
              process information on our behalf as required to supply their
              services. As the production application is introduced, this policy
              will be updated to identify material categories of processors and
              any relevant international data handling arrangements.
            </p>
          </section>

          <section>
            <h2>Cookies, analytics and logs</h2>
            <p>
              The public website may use technical storage that is necessary for
              normal site operation. Hosting infrastructure can also generate
              standard server logs. If Caplist Studio introduces non-essential
              analytics, advertising technologies or additional cookies, we will
              update the website controls and this policy where required before
              relying on them.
            </p>
          </section>

          <section>
            <h2>Retention and security</h2>
            <p>
              We retain enquiry information only for as long as reasonably
              necessary for the purpose it was collected, ongoing business
              correspondence, record keeping, dispute management and applicable
              legal obligations. We use reasonable administrative and technical
              measures appropriate to the stage of the service, but no online
              transmission or storage method can be guaranteed to be completely
              secure.
            </p>
          </section>

          <section>
            <h2>Your choices and requests</h2>
            <p>
              You may contact us to ask about personal information you have sent
              to Caplist Studio, or to request correction or deletion where
              appropriate. We may need to retain limited records where required
              for legitimate business, security or legal reasons.
            </p>
          </section>

          <section>
            <h2>Property media is handled separately</h2>
            <p>
              Professional property photography and footage can involve
              different ownership, confidentiality and processing issues from a
              normal website enquiry. See our{" "}
              <a href="/media-policy">Media Handling Policy</a> for the current
              pre-release position. Product-specific terms will be updated before
              broader production use of the Caplist Studio application.
            </p>
          </section>

          <section>
            <h2>Changes to this policy</h2>
            <p>
              Caplist Studio is still in development. We may update this policy
              as the website, application, service providers and commercial
              model evolve. The effective date on this page will be updated when
              material changes are made.
            </p>
          </section>

          <section>
            <h2>Privacy contact</h2>
            <p>
              Questions or privacy requests can be sent to{" "}
              <a href={`mailto:${CONTACTS.privacy}`}>{CONTACTS.privacy}</a>.
            </p>
          </section>
        </div>
      </section>
    </InnerPage>
  );
}
