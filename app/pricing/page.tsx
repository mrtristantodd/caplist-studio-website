import { ArrowUpRight, Check } from "lucide-react";
import { InnerPage } from "@/components/editorial/InnerPage";
export const metadata = { title: "Pricing — Caplist Studio" };
const plans = [
  {
    name: "Single product",
    price: "29",
    unit: "per product",
    intro: "Add one more reason to choose your media business.",
    items: [
      "One additional reel or edit",
      "Choose a product suited to your capture",
      "Add it to your existing client delivery",
    ],
  },
  {
    name: "Property collection",
    price: "99",
    unit: "per property",
    intro: "Build a bigger marketing package from one capture.",
    items: [
      "Up to five additional products",
      "A coordinated collection for one listing",
      "Product selection based on supplied media",
    ],
  },
  {
    name: "Studio",
    price: null,
    unit: "for ongoing volume",
    intro: "A repeatable offer for busy property media teams.",
    items: [
      "A proposed volume pricing arrangement",
      "A consistent product range for your team",
      "A package shaped around your workflow",
    ],
  },
];
export default function Pricing() {
  return (
    <InnerPage>
      <section className="inner-hero shell">
        <p className="eyebrow">Pricing</p>
        <h1>
          One capture.
          <br />
          <span>More on the invoice.</span>
        </h1>
        <p>
          Add a single product or offer a complete collection. Keep doing the
          work you do best. Get more value from every delivery.
        </p>
      </section>
      <section className="light-section pricing-section">
        <div className="shell">
          <p className="pricing-disclosure">
            Pricing concept for design review · Illustrative AUD amounts, not a
            live offer. Plans, inclusions and GST treatment are to be confirmed.
          </p>
          <div className="pricing-grid">
            {plans.map((p, i) => (
              <article
                className={i === 1 ? "plan featured-plan" : "plan"}
                key={p.name}
              >
                {i === 1 && (
                  <span className="plan-badge">
                    The complete property story
                  </span>
                )}
                <p className="eyebrow">
                  0{i + 1} / {p.name}
                </p>
                <h2>{p.name}</h2>
                <p>{p.intro}</p>
                <div className="plan-price">
                  {p.price ? (
                    <>
                      <sup>A$</sup>
                      {p.price}
                    </>
                  ) : (
                    <>Let’s tailor it</>
                  )}
                </div>
                <span className="plan-unit">{p.unit}</span>
                <a
                  className={
                    "button " + (i === 1 ? "button-blue" : "button-outline")
                  }
                  href="/examples"
                >
                  Explore example products <ArrowUpRight size={18} />
                </a>
                <ul>
                  {p.items.map((x) => (
                    <li key={x}>
                      <Check size={18} />
                      {x}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="pricing-explainer">
            <h2>
              You’ve already made the trip.
              <br />
              Make more of the files.
            </h2>
            <p>
              Caplist is designed for professional property photographers and
              media businesses. Your existing photos, video and drone footage
              become additional products you can offer to your clients.
            </p>
          </div>
          <div className="pricing-faq">
            <h2>A few things to know.</h2>
            {[
              [
                "Do I need to visit the property again?",
                "No additional visit is part of the concept. Products use the professional media from your existing capture.",
              ],
              [
                "Can every capture create all five products?",
                "The available products depend on your media. Edited photography can support a Photo Reel; property video opens up teasers and feature edits. Drone footage adds another perspective.",
              ],
              [
                "Can I purchase a plan now?",
                "Not yet. This is a visual pricing proposal for review. Purchasing and account access are not available.",
              ],
            ].map(([q, a]) => (
              <details key={q}>
                <summary>{q}</summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </InnerPage>
  );
}
