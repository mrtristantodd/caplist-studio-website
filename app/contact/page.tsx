import { InnerPage } from "@/components/editorial/InnerPage";
import { ContactRequest } from "@/components/editorial/ContactRequest";
import { CONTACTS } from "@/lib/site";

export const metadata = {
  title: "Contact — Caplist Studio",
  description:
    "Contact Caplist Studio about product enquiries, partnerships, privacy or accounts.",
};

export default function Contact() {
  return (
    <InnerPage>
      <section className="policy-page shell">
        <p className="eyebrow">Contact Caplist Studio</p>
        <h1>How can we help?</h1>
        <p className="policy-lead">
          Choose the enquiry that best matches what you need and we’ll make sure
          it reaches the right place.
        </p>

        <ContactRequest />

        <div className="policy-sections">
          <section>
            <h2>General enquiries</h2>
            <p>
              <a href={`mailto:${CONTACTS.general}`}>{CONTACTS.general}</a>
            </p>
          </section>
          <section>
            <h2>Demos &amp; product enquiries</h2>
            <p>
              <a href="/demo">Book a demo</a>
            </p>
          </section>
          <section>
            <h2>Partnerships</h2>
            <p>
              <a href={`mailto:${CONTACTS.partners}`}>{CONTACTS.partners}</a>
            </p>
          </section>
          <section>
            <h2>Privacy & data</h2>
            <p>
              <a href={`mailto:${CONTACTS.privacy}`}>{CONTACTS.privacy}</a>
            </p>
          </section>
          <section>
            <h2>Accounts & billing</h2>
            <p>
              <a href={`mailto:${CONTACTS.accounts}`}>{CONTACTS.accounts}</a>
            </p>
          </section>
        </div>
      </section>
    </InnerPage>
  );
}
