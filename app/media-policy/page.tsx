import { InnerPage } from "@/components/editorial/InnerPage";
import { CONTACTS } from "@/lib/site";

export const metadata = {
  title: "Media Handling Policy — Caplist Studio",
  description:
    "Caplist Studio's current pre-release approach to professional property media, permissions, processing and reuse.",
};

export default function MediaPolicy() {
  return (
    <InnerPage>
      <section className="policy-page shell">
        <p className="eyebrow">Media Handling Policy</p>
        <h1>
          Your media.
          <br />
          <span>Your permission.</span>
        </h1>
        <p className="policy-lead">
          Caplist Studio is being built for professional property-media
          businesses. Property photography and footage should be handled as
          professional source material, not as free content for unrelated reuse.
        </p>
        <p className="pilot-note">Pre-release position · 15 September 2026.</p>

        <div className="policy-sections">
          <section>
            <h2>No unrelated reuse without permission</h2>
            <p>
              We will not use customer or pilot media for public marketing,
              portfolio examples, unrelated customers or model training without
              explicit permission appropriate to that use. Requesting a demo,
              early access or a partner discussion does not grant Caplist Studio
              permission to publish your work.
            </p>
          </section>

          <section>
            <h2>The public website does not accept property uploads</h2>
            <p>
              Current demo, contact, partner and early-access forms prepare an
              email draft in your browser. They do not upload property files to
              Caplist Studio. Do not send property media, client file links,
              credentials or property addresses with an initial enquiry unless
              Caplist Studio has specifically agreed a transfer method with you.
            </p>
          </section>

          <section>
            <h2>Production media will require an agreed workflow</h2>
            <p>
              Before pilot or production files change hands, the relevant
              workflow should identify the transfer method, authorised access,
              processing services, expected retention, deletion arrangements,
              security controls and any material international processing. Those
              arrangements will evolve with the production application and will
              be documented before broader customer use.
            </p>
          </section>

          <section>
            <h2>Property fidelity matters</h2>
            <p>
              Caplist Studio is intended to create additional visual products
              from existing professional media while preserving the underlying
              property. Generative capabilities should not materially invent,
              remove or alter real property characteristics where doing so would
              make the finished media misleading.
            </p>
          </section>

          <section>
            <h2>Source rights remain your responsibility</h2>
            <p>
              You should only provide media you are authorised to use and
              process. This can include permissions relating to the photographer,
              videographer, agency, property owner, talent, music and any other
              third-party rights relevant to the requested output.
            </p>
          </section>

          <section>
            <h2>Finished-product rights are agreed with the work</h2>
            <p>
              Pilot or production scope should identify the intended finished
              products, formats, revisions, permitted client use and any
              third-party licence conditions. Caplist Studio is designed so the
              professional media business retains the client relationship and
              decides how finished products are packaged and sold.
            </p>
          </section>

          <section>
            <h2>Personal information is covered separately</h2>
            <p>
              Information such as your name, work email and enquiry details is
              handled under the <a href="/privacy">Privacy Policy</a>. This page
              focuses on professional property media and associated production
              files.
            </p>
          </section>

          <section>
            <h2>Media questions or deletion requests</h2>
            <p>
              Contact{" "}
              <a href={`mailto:${CONTACTS.privacy}`}>{CONTACTS.privacy}</a> for
              privacy or deletion requests, or{" "}
              <a href={`mailto:${CONTACTS.partners}`}>{CONTACTS.partners}</a> for
              pilot and partner media-handling discussions.
            </p>
          </section>
        </div>
      </section>
    </InnerPage>
  );
}
