import { InnerPage } from "@/components/editorial/InnerPage";
import { AccessClose } from "@/components/editorial/StudioUI";

export const metadata = {
  title: "About — Caplist Studio",
  description:
    "Why Caplist Studio exists: to help professional property-media businesses turn completed shoots into more products they can sell.",
};

export default function About() {
  return (
    <InnerPage>
      <section className="about-hero shell">
        <p className="studio-kicker">Why Caplist exists</p>
        <h1>
          The hardest part of the job
          <br />
          is already done.
        </h1>
        <p className="studio-lead">
          Property-media businesses already invest heavily in getting to the property, capturing it well and delivering professional media. Caplist Studio exists to help that work create more value after the shoot is finished.
        </p>
      </section>

      <section className="studio-paper studio-section">
        <div className="shell about-editorial">
          {[
            [
              "Built for the business behind the camera.",
              "Caplist turns professional photography, video, drone and vertical footage from completed property shoots into additional finished products your clients can buy — without asking you to capture the property all over again.",
            ],
            [
              "More products, not more software to learn.",
              "The goal is not to give photographers another complicated AI tool. The goal is to give property-media businesses more useful products to add to the service they already sell.",
            ],
            [
              "Professional quality still matters.",
              "Automation is only valuable if the result is good enough to deliver under your name. Caplist is designed to use professional source media, protect property fidelity and withhold products when the source cannot support them properly.",
            ],
            [
              "Your business stays between Caplist and the client.",
              "Your agents continue buying from you. You decide which products to offer, how they fit into your packages and what your client pays. Caplist supports the service behind the scenes.",
            ],
            [
              "Keep the workflow that already works.",
              "You should not need to replace your CRM, booking system, delivery platform or client relationships to use Caplist. It is designed to add another production capability to the business you already run.",
            ],
            [
              "New technology earns its place by becoming useful.",
              "Caplist will continue watching new visual-production capabilities, but only the ones that are reliable enough for professional property media should become products inside the platform.",
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
