import { InnerPage } from "@/components/editorial/InnerPage";
import { AccessClose } from "@/components/editorial/StudioUI";
export const metadata = { title: "About — Caplist Studio" };
export default function About() {
  return (
    <InnerPage>
      <section className="about-hero shell">
        <p className="studio-kicker">More products from the media you already capture</p>
        <h1>
          More from
          <br />
          every capture.
        </h1>
        <p className="studio-lead">
          When new visual technology is reliable enough for professional
          property media, Caplist Studio turns it into something your business
          can offer clients.
        </p>
      </section>
      <section className="studio-paper studio-section">
        <div className="shell about-editorial">
          {[
            [
              "Built for professional media businesses.",
              "Caplist Studio turns the professional photos, video, drone and vertical footage you already capture into additional finished visual products — without another property visit or another editing workflow.",
            ],
            [
              "Professional in. Professional out.",
              "New AI and media technologies appear constantly. Caplist only turns them into customer-facing products when they can meet the quality, property fidelity and reliability expected from professional property media.",
            ],
            [
              "Your business stays in front.",
              "Your agents buy the finished product from you. You choose what to offer, how to package it and the price your client pays. Caplist supports your media business rather than stepping between you and your clients.",
            ],
            [
              "Keep the workflow you already use.",
              "Keep your existing CRM, booking system, delivery platform and agent relationships. Caplist focuses on creating more professional visual media from the assets your business already produces.",
            ],
            [
              "More products over time.",
              "The aim is not to give you more AI tools to experiment with. It is to keep expanding the range of professional products your business can sell as the technology becomes good enough to trust.",
            ],
          ].map(([title, text]) => (
            <article key={title}>
              <h2>{title}</h2>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
      <AccessClose />
    </InnerPage>
  );
}
