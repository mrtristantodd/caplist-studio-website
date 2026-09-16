import { ArrowUpRight, Check, Layers, ShieldCheck } from "lucide-react";
import { InnerPage } from "@/components/editorial/InnerPage";

export const metadata = {
  title: "Pricing — Caplist Studio",
  description:
    "Preliminary Caplist Studio pricing for professional property-media businesses: monthly platform access plus wholesale production usage.",
};

const plans = [
  {
    name: "Launch",
    level: "Early-stage media businesses",
    description:
      "A low-friction starting point for professional property-media businesses testing Caplist Studio on selected jobs.",
    price: "$49 / month",
    priceNote: "+ production usage",
    value: "Start small, validate demand and add products without changing your existing workflow.",
    features: [
      "Organisation workspace",
      "Core property projects and media ingestion",
      "Access to the available product catalogue",
      "Source-media analysis and product unlocking",
      "Wholesale usage charged only when you produce",
      "You control your own client pricing",
    ],
    use: "You want to test Caplist Studio with a modest number of real jobs before making it part of your standard offer.",
  },
  {
    name: "Growth",
    level: "Ongoing production",
    description:
      "For established media businesses using Caplist Studio regularly as an additional production layer behind their client offering.",
    price: "$149 / month",
    priceNote: "+ production usage",
    value: "Build repeatable additional products into your normal property-media workflow.",
    features: [
      "Everything in Launch",
      "Broader ongoing production access",
      "Multi-user organisation access",
      "Project and output history",
      "Priority access to new production products",
      "Commercial terms designed for regular use",
    ],
    use: "You expect Caplist Studio to become a recurring part of your normal client delivery and upsell workflow.",
  },
  {
    name: "Scale",
    level: "Higher-volume operators",
    description:
      "For larger property-media businesses that need higher throughput, broader team access and future white-label capability.",
    price: "$299 / month",
    priceNote: "+ volume production usage",
    value: "A commercial structure designed around larger teams, higher job volume and broader product mix.",
    features: [
      "Everything in Growth",
      "Higher-volume production allowances",
      "Expanded team access",
      "Volume-based usage terms",
      "Priority partner support",
      "White-label workspace options as they become available",
    ],
    use: "You operate at meaningful listing volume and want Caplist Studio embedded behind your own media brand.",
  },
] as const;

const usageBands = [
  {
    label: "Photo-led products",
    price: "From $49",
    note: "Photo reels and other outputs created primarily from professionally edited photography.",
  },
  {
    label: "Short-form video",
    price: "From $89",
    note: "Vertical reels and property teasers created from existing professional video or suitable mixed source media.",
  },
  {
    label: "Feature / mixed-media",
    price: "From $149",
    note: "More involved edits using video, photography, drone or multiple source types.",
  },
  {
    label: "Higher-complexity production",
    price: "Up to ~$299",
    note: "Indicative pilot ceiling for more complex outputs, broader deliverables or heavier production scope.",
  },
] as const;

export default function Pricing() {
  return (
    <InnerPage>
      <section className="pricing-editorial">
        <div className="shell">
          <div className="pricing-intro">
            <p className="eyebrow">Preliminary commercial model</p>
            <h1>
              Platform access.
              <br />
              <span>Production when you need it.</span>
            </h1>
            <p>
              Caplist Studio is being tested as a subscription + usage platform
              for professional property-media businesses. The subscription gives
              your business access to the platform; production usage is charged
              when you create additional sellable products from a property.
            </p>
            <div className="pricing-terms">
              <span>All prices in AUD</span>
              <span>Subscription + usage</span>
              <span>Wholesale production model</span>
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
                      <span className="offer-recommended">Recommended</span>
                    )}
                  </div>
                  <p className="offer-description">{plan.description}</p>
                  <div className="offer-price">
                    <strong>{plan.price}</strong>
                    <span>{plan.priceNote}</span>
                  </div>
                  <a className="button offer-cta" href="/partners">
                    Discuss early access
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
            Preliminary pilot pricing only. Subscription bands, production usage
            rates, inclusions and volume thresholds may change during testing as
            we validate real rendering, storage, support and production costs.
            Early partners will always see and agree the applicable price before
            committing paid production work.
          </p>

          <div className="purchase-path">
            <div>
              <span className="eyebrow">Indicative production usage</span>
              <h2>
                Wholesale costs.
                <br />
                Built for resale margin.
              </h2>
              <p style={{ marginTop: 20, lineHeight: 1.8, color: "#8b95a1" }}>
                Usage is charged when Caplist Studio manufactures an additional
                product from media you already captured. Final pricing depends on
                the output, source media and production scope.
              </p>
            </div>
            <ol>
              {usageBands.map((band, index) => (
                <li key={band.label}>
                  <span>0{index + 1}</span>
                  <div>
                    <h3>
                      {band.label} — {band.price}
                    </h3>
                    <p>{band.note}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

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
                "Are these the final prices?",
                "No. These are preliminary pilot bands designed to make the intended commercial model transparent while Caplist Studio is still being tested. Subscription prices, usage charges, inclusions and volume thresholds may change as real operating data becomes available.",
              ],
              [
                "Is Caplist Studio a subscription?",
                "The intended production model is subscription + usage. The subscription provides access to the platform; usage charges apply when you create additional property-media products.",
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
                "Can I join during the pilot?",
                "Yes. Selected early partners can discuss pilot terms directly with Caplist Studio before committing media or paid production work.",
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
