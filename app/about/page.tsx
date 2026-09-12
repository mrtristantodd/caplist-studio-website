import { InnerPage } from "@/components/editorial/InnerPage";
import { AccessClose } from "@/components/editorial/StudioUI";
export const metadata = { title: "About — Caplist Studio" };
export default function About() {
  return (
    <InnerPage>
      <section className="about-hero shell">
        <p className="studio-kicker">An expanding production layer</p>
        <h1>
          More from
          <br />
          every capture.
        </h1>
        <p className="studio-lead">
          When visual technology becomes commercially useful, it should become
          something your business can sell.
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
              "New AI and media technologies appear constantly. Most don’t belong in a professional property-media workflow. A new capability only becomes a product when it can deliver the quality, property fidelity, reliability and economics required for professional use.",
            ],
            [
              "Your business stays in front.",
              "Caplist Studio sits behind the professional media business — not between you and your client. Your agents don’t need another platform to learn. They buy the finished product from you. You choose what to offer, how to package it and the retail price.",
            ],
            [
              "One specific part of your workflow.",
              "Keep your existing CRM, booking system, delivery platform and agent relationships. Caplist makes more professional visual media from the assets your business already produces.",
            ],
            [
              "More products over time.",
              "The goal isn’t to give you more AI tools to experiment with. It’s to keep giving your business more products to sell. Caplist Studio is being built as an expanding production platform.",
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
