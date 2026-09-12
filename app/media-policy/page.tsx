import { InnerPage } from "@/components/editorial/InnerPage";
export const metadata = { title: "Media handling — Caplist Studio" };
export default function MediaPolicy() {
  return (
    <InnerPage>
      <section className="policy-page shell">
        <p className="eyebrow">Media & enquiries</p>
        <h1>
          Your media.
          <br />
          <span>Your permission.</span>
        </h1>
        <p className="policy-lead">
          Your photography and footage belong to you. Caplist’s commitment is to
          use them only for the work you request.
        </p>
        <div className="policy-sections">
          <section>
            <h2>No reuse without your consent.</h2>
            <p>
              We will not use your media for our marketing, model training,
              public examples or other customers without your explicit consent.
              Requesting early access does not give us permission to publish
              your work.
            </p>
          </section>
          <section>
            <h2>Enquiries on this website.</h2>
            <p>
              The demo and early-access forms prepare an email draft in your
              browser. They do not upload files or submit your details to a
              Caplist database. You choose whether to send the draft through
              your email provider. Enquiry details sent to Tristan are used to
              respond to your request and discuss the project.
            </p>
          </section>
          <section>
            <h2>Before any files change hands.</h2>
            <p>
              Before a pilot starts, we will agree the transfer method, who and
              which service providers can access the media, where it is
              processed, how long it is retained and how deletion will be
              handled. These operational arrangements are not yet finalised; do
              not send property media with your initial enquiry.
            </p>
          </section>
          <section>
            <h2>A delivery you can agree to.</h2>
            <p>
              The pilot scope must identify the finished products, formats,
              revisions and permitted client usage, including any music licence
              conditions. Share only media you have permission to use. You
              retain the relationship with your client and decide how to package
              your service.
            </p>
          </section>
          <section>
            <h2>Questions or deletion requests.</h2>
            <p>
              Contact{" "}
              <a href="mailto:tristan@tristantodd.me">tristan@tristantodd.me</a>{" "}
              about an enquiry, permissions or removing information you have
              sent. We will discuss the request directly with you.
            </p>
          </section>
        </div>
      </section>
    </InnerPage>
  );
}
