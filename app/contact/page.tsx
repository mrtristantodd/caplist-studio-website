import { ArrowUpRight, Mail } from "lucide-react";
import { InnerPage } from "@/components/editorial/InnerPage";
export const metadata = { title: "Contact — Caplist Studio" };
export default function Contact() {
  return (
    <InnerPage>
      <section className="inner-hero shell contact-hero">
        <p className="eyebrow">Contact Caplist</p>
        <h1>
          What would you
          <br />
          <span>like to create?</span>
        </h1>
        <p>
          A question, a client request or an idea for a new product — we’d love
          to hear it.
        </p>
        <a className="contact-email" href="mailto:tristan@tristantodd.me">
          <Mail size={24} />
          tristan@tristantodd.me
          <ArrowUpRight size={24} />
        </a>
      </section>
    </InnerPage>
  );
}
