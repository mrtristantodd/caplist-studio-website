import { ArrowUpRight, Check, Layers, ShieldCheck } from "lucide-react";
import { InnerPage } from "@/components/editorial/InnerPage";

export const metadata = {
  title: "Pricing — Caplist Studio",
  description:
    "Preliminary Caplist Studio pricing for professional property-media businesses: monthly platform access plus usage-based production.",
};

const plans = [
  {
    name: "Launch",
    level: "Getting started",
    description:
      "For professional property-media businesses starting with a smaller number of Caplist projects.",
    price: "$49 / month",
    priceNote: "+ production usage",
    value: "Start with selected jobs and add new products without changing your existing capture workflow.",
    features: [
      "Organisation workspace",
      "Property projects and media uploads",
      "Access to the available product catalogue",
      "Source-media assessment and product recommendations",
      "Usage charged when you create a product",
      "You control your own client pricing",
    ],
    use: "You want to introduce Caplist on selected jobs and learn which products your clients respond to.",
  },
  {
    name: "Growth",
    level: "Regular use",
    description:
      "For established media businesses using Caplist regularly across their property-media workflow.",
    price: "$149 / month",
    priceNote: "+ production usage",
    value: "Make additional visual products a repeatable part of your normal client offer.",
    features: [
      "Everything in Launch",
      "Broader ongoing production access",
      "Multi-user organisation access",
      "Project and output history",
      "Priority access to new products as they become available",
      "Designed for regular use across your team",
    ],
    use: "You expect Caplist to become a recurring part of your normal property-media delivery.",
  },
  {
    name: "Scale",
    level: "Higher-volume teams",
    description:
      "For larger property-media businesses that need higher throughput, broader team access and future white-label options.",
    price: "$299 / month",
    priceNote: "+ volume production usage",
    value: "A plan designed around larger teams, higher job volume and a broader product mix.",
    features: [
      "Everything in Growth",
      "Higher-volume production access",
      "Expanded team access",
      "Volume-based usage terms",
      "Priority partner support",
      "White-label workspace options as they become available",
    ],
    use: "You run a higher-volume media business and want Caplist embedded more deeply into your existing offer.",
  },
] as const;

const usageFactors = [
  {
    label: "Product type",
    note: "Different outputs require different production work, so usage varies by the product you choose.",
  },
  {
    label: "Source media",
    note: "Photography, video, drone and mixed-media projects can have different production requirements.",
  },
  {
    label: "Production scope",
    note: "Duration, format and output requirements can affect the final usage charge.",
  },
] as const;

export default function Pricing() {
  return (
    <InnerPage>
      <section className="pricing-editorial">
        <div className="shell">
          <div className="pricing-intro">
            <p className="eyebrow">Preliminary pricing</p>
            <h1>
              Platform access.
              <br />
              <span>Production when you need it.</span>
            </h1>
            <p>
              Caplist Studio uses a subscription + usage model for professional
              property-media businesses. Your subscription gives your business
              access to the platform; a production charge applies when you
              create an additional product for a property.
            </p>
            <div className="pricing-terms">
              <span>All prices in AUD</span>
              <span>Subscription + usage</span>
              <span>You set your client pricing</span>
            </div>
          </div>

          <div className="offer-grid">
            {plans.map((plan, index) => (
              <article
                className={`offer-card offer-${index === 0 ? "essential" : index === 1 ? "pro" : "studio"}`}
                key={plan.name}
              >
                <div className="offer-topline">
                  <span>0{index + 1} / {plan.level}</span>
                  {index === 1 ? <Check size={17} /> : index === 2 ? <Layers size={17} /> : null}
                </div>
                <div className="offer-body">
                  <div className="offer-heading">
                    <h2>{plan.name}</h2>
                    {index === 1 && <span className="offer-recommended">Recommended</span>}
                  </div>
                  <p className="offer-description">{plan.description}</p>
                  <div className="offer-price">
                    <strong>{plan.price}</strong>
                    <span>{plan.priceNote}</span>
                  </div>
                  <a className="button offer-cta" href="/early-access">
                    Request early access
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
            These are introductory early-access prices and may change as Caplist
            Studio develops. Any change to subscription pricing, usage charges or
            plan inclusions will be made clear before you commit to a paid plan
            or paid production.
          </p>

          <div className="purchase-path">
            <div>
              <span className="eyebrow">Production usage</span>
              <h2>
                You only pay usage
                <br />
                when you create.
              </h2>
              <p style={{ marginTop: 20, lineHeight: 1.8, color: "#8b95a1" }}>
                The production charge is shown before you create an output, so
                you can decide whether the product makes sense for the property
                and your client package.
              </p>
            </div>
            <ol>
              {usageFactors.map((factor, index) => (
                <li key={factor.label}>
                  <span>0{index + 1}</span>
                  <div>
                    <h3>{factor.label}</h3>
                    <p>{factor.note}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="purchase-path">
            <div>
              <span className="eyebrow">How billing works</span>
              <h2>
                A predictable subscription.
                <br />
                Usage when you produce.
              </h2>
            </div>
            <ol>
              <li>
                <span>01</span>
                <div>
                  <h3>Choose your plan</h3>
                  <p>
                    Your monthly plan provides access to the Caplist Studio
                    workspace and the products available to your business.
                  </p>
                </div>
              </li>
              <li>
                <span>02</span>
                <div>
                  <h3>Create when there is an opportunity</h3>
                  <p>
                    When a property has suitable media, choose the additional
                    product you want to create and review the production charge
                    before proceeding.
                  </p>
                </div>
              </li>
              <li>
                <span>03</span>
                <div>
                  <h3>Set your own client price</h3>
                  <p>
                    You decide how the finished product is packaged and what
                    your client pays for it.
                  </p>
                </div>
              </li>
            </ol>
          </div>

          <a className="media-policy-link" href="/early-access">
            <ShieldCheck size={20} />
            <span>Want to test Caplist with your media business? Request early access.</span>
            <ArrowUpRight size={18} />
          </a>
        </div>
      </section>

      <section className="light-section pricing-section">
        <div className="shell">
          <div className="pricing-faq">
            <h2>Pricing, clearly explained.</h2>
            {[
              [
                "Are these the final prices?",
                "Not yet. These are introductory early-access prices. They may change as Caplist Studio develops, and any change will be made clear before you commit to a paid plan or paid production.",
              ],
              [
                "Is Caplist Studio a subscription?",
                "Yes. The current model is subscription + usage. Your plan provides access to the platform, and usage applies when you create an additional property-media product.",
              ],
              [
                "Will I know the usage charge before I create something?",
                "Yes. The applicable production charge should be clear before you proceed with a paid output.",
              ],
              [
                "Do I have to use Caplist pricing with my client?",
                "No. You decide how Caplist-created products are packaged and what your client pays.",
              ],
              [
                "Will higher-volume businesses get different terms?",
                "Potentially. Higher-volume teams may qualify for different usage terms as Caplist Studio expands.",
              ],
              [
                "Can I join during early access?",
                "Yes. Professional property-media businesses can request early access and discuss the most suitable starting plan.",
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
