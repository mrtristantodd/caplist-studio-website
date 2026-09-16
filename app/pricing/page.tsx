import { ArrowUpRight, Check, Layers, ShieldCheck } from "lucide-react";
import { InnerPage } from "@/components/editorial/InnerPage";

export const metadata = {
  title: "Pricing — Caplist Studio",
  description:
    "Caplist Studio pricing for professional property-media businesses: platform access plus production usage, with partner and volume terms for growing teams.",
};

const plans = [
  {
    name: "Pilot",
    level: "Early partner access",
    description:
      "For selected property-media businesses helping validate workflows, product quality and commercial fit before full paid launch.",
    price: "Partner pricing by agreement",
    priceNote: "Founding-partner terms during the pilot period",
    value: "Test the workflow with real jobs before the commercial model is locked.",
    features: [
      "Access to the current Caplist Studio product catalogue",
      "Real-property production testing",
      "Direct feedback into product development",
      "Pilot usage terms agreed before work begins",
      "No long-term plan commitment during validation",
    ],
    use: "You want early access and are prepared to help validate Caplist Studio with genuine property-media jobs.",
  },
  {
    name: "Production",
    level: "Standard commercial model",
    description:
      "For professional media businesses using Caplist Studio as an ongoing production layer behind their existing client offering.",
    price: "Subscription + usage",
    priceNote: "Monthly platform access plus wholesale production charges",
    value: "Keep the client relationship. Add more products. Pay for the production you use.",
    features: [
      "Organisation workspace and user access",
      "Property projects and media ingestion",
      "Source-media analysis and product unlocking",
      "Wholesale production charged per property or output",
      "Output delivery and project history",
      "You control your own retail pricing",
    ],
    use: "You want Caplist Studio operating as part of your normal property-media workflow.",
  },
  {
    name: "Scale",
    level: "Higher-volume businesses",
    description:
      "For established photography businesses that need higher throughput, broader team access or future white-label capability.",
    price: "Volume / white-label terms",
    priceNote: "Custom platform and usage pricing",
    value: "A commercial structure designed around volume, team size and product mix.",
    features: [
      "Higher-volume production allowances",
      "Multi-user organisation access",
      "Volume-based usage pricing",
      "Priority partner support",
      "White-label workspace options as they become available",
      "Commercial terms matched to operating scale",
    ],
    use: "You operate at meaningful listing volume and want Caplist Studio embedded behind your own media brand.",
  },
] as const;

export default function Pricing() {
  return (
    <InnerPage>
      <section className="pricing-editorial">
        <div className="shell">
          <div className="pricing-intro">
            <p className="eyebrow">Commercial model</p>
            <h1>
              Platform access.
              <br />
              <span>Production when you need it.</span>
            </h1>
            <p>
              Caplist Studio is being built around a subscription + usage model
              for professional property-media businesses. The subscription gives
              your business access to the platform; production usage is charged
              when you create additional sellable products from a property.
            </p>
            <div className="pricing-terms">
              <span>Subscription + usage</span>
              <span>Wholesale production model</span>
              <span>Your clients. Your retail pricing.</span>
            </div>
          </div>

          <div className="offer-grid">
            {plans.map((plan, index) => (
              <article
                className={`offer-card offer-${index === 0 ? "essential" : index === 1 ? "pro" : "studio"}`}
                key={plan.name}
              >
                <div className="offer-topline">
                  <span>
                    0{index + 1} / {plan.level}
                  </span>
                  {index === 1 ? (
                    <Check size={17} />
                  ) : index === 2 ? (
                    <Layers size={17} />
                  ) : null}
                </div>
                <div className="offer-body">
                  <div className="offer-heading">
                    <h2>{plan.name}</h2>
                    {index === 1 && (
                      <span className="offer-recommended">Core model</span>
                    )}
                  </div>
                  <p className="offer-description">{plan.description}</p>
                  <div className="offer-price">
                    <strong>{plan.price}</strong>
                    <span>{plan.priceNote}</span>
                  </div>
                  <a
                    className="button offer-cta"
                    href={index === 0 ? "/partners" : "/contact"}
                  >
                    {index === 0 ? "Discuss pilot access" : "Discuss pricing"}
                    <ArrowUpRight size={18} />
                  </a>
                  <p className="offer-value">{plan.value}</p>
                  <h3>What it includes</h3>
                  <ul>
                    {plan.features.map((feature) => (
                      <li key={feature}>
                        <Check size={17} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="offer-fit">
                    <span>Best fit</span>
                    <p>{plan.use}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="offer-scope-note">
            Subscription bands and product-level usage rates are still being
            validated with early partners. We will publish final production
            pricing before paid general availability rather than lock in rates
            before real operating data is available.
          </p>

          <div className="purchase-path">
            <div>
              <span className="eyebrow">How the economics work</span>
              <h2>
                Pay for the platform.
                <br />
                Pay when you produce.
              </h2>
            </div>
            <ol>
              <li>
                <span>01</span>
                <div>
                  <h3>Platform subscription</h3>
                  <p>
                    Your recurring subscription covers access to the Caplist
                    Studio workspace, media understanding, product catalogue and
                    production orchestration layer.
                  </p>
                </div>
              </li>
              <li>
                <span>02</span>
                <div>
                  <h3>Production usage</h3>
                  <p>
                    When you create a product, a wholesale usage charge applies
                    according to the output, source media and production scope.
                    You are not paying for another property visit.
                  </p>
                </div>
              </li>
              <li>
                <span>03</span>
                <div>
                  <h3>Your resale margin</h3>
                  <p>
                    You retain the agent relationship, decide how the output is
                    packaged and set the retail price charged to your client.
                  </p>
                </div>
              </li>
            </ol>
          </div>

          <a className="media-policy-link" href="/partners">
            <ShieldCheck size={20} />
            <span>
              Interested in founding-partner pricing? See the partner program.
            </span>
            <ArrowUpRight size={18} />
          </a>
        </div>
      </section>

      <section className="light-section pricing-section">
        <div className="shell">
          <div className="pricing-faq">
            <h2>Pricing, without the fine print.</h2>
            {[
              [
                "Is Caplist Studio a subscription?",
                "The intended production model is subscription + usage. The subscription provides access to the platform; usage charges apply when you create additional property-media products.",
              ],
              [
                "Why are the final monthly prices not published yet?",
                "Caplist Studio is still in pilot-stage validation. We are testing real production cost, product mix, storage, rendering and support requirements before fixing subscription bands that need to work for both Caplist Studio and its media-business partners.",
              ],
              [
                "What am I paying for when I create a product?",
                "The usage component covers the production of the output you select. Different outputs can have different processing, rendering, music, storage and quality-control requirements.",
              ],
              [
                "Do I have to pass Caplist pricing on to my client?",
                "No. Caplist Studio is a wholesale production layer. You decide how products are packaged and what your client pays.",
              ],
              [
                "Will higher-volume businesses get different terms?",
                "Yes. Volume, team size, output mix and future white-label requirements can justify a different commercial structure from a smaller media business.",
              ],
              [
                "Can I join before final pricing is published?",
                "Yes. Selected early partners can discuss pilot terms directly with Caplist Studio before committing media or production work.",
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
