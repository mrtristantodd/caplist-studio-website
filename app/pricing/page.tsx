import { ArrowUpRight, Check, Layers, ShieldCheck } from "lucide-react";
import { InnerPage } from "@/components/editorial/InnerPage";

export const metadata = {
  title: "Pricing — Caplist Studio",
  description:
    "Preliminary Caplist Studio pricing for professional property-media businesses: monthly access plus production usage when you create additional products.",
};

const plans = [
  {
    name: "Launch",
    level: "Test it on selected jobs",
    description:
      "For professional property-media businesses that want to start small and see how clients respond to additional products.",
    price: "$49 / month",
    priceNote: "+ production usage",
    value: "Use Caplist on selected properties, learn which products sell and build confidence before making it part of your everyday offer.",
    features: [
      "Your Caplist Studio workspace",
      "Property projects and media uploads",
      "Access to available Caplist products",
      "Media checks before a product is offered",
      "Production charged only when you choose to create",
      "You decide what your client pays",
    ],
    use: "A practical starting point if you want to test Caplist without changing the rest of your business.",
  },
  {
    name: "Growth",
    level: "Make it part of your normal offer",
    description:
      "For established media businesses using Caplist regularly to add more products to existing property jobs.",
    price: "$149 / month",
    priceNote: "+ production usage",
    value: "Turn additional visual products into a repeatable part of your client packages without building another editing team around them.",
    features: [
      "Everything in Launch",
      "Broader ongoing production access",
      "Multi-user business access",
      "Project and output history",
      "Priority access to new products as they become available",
      "Designed for regular use across your team",
    ],
    use: "Best suited if you expect Caplist-created products to become a recurring part of what your business sells.",
  },
  {
    name: "Scale",
    level: "Higher-volume teams",
    description:
      "For larger property-media businesses that need higher throughput, broader team access and future white-label options.",
    price: "$299 / month",
    priceNote: "+ volume production usage",
    value: "Support a larger team and higher job volume while keeping the client relationship and retail offer inside your own media business.",
    features: [
      "Everything in Growth",
      "Higher-volume production access",
      "Expanded team access",
      "Volume-based usage terms",
      "Priority partner support",
      "White-label workspace options as they become available",
    ],
    use: "Built for businesses that want Caplist embedded more deeply into a higher-volume service operation.",
  },
] as const;

const usageFactors = [
  {
    label: "The product you choose",
    note: "Different finished products involve different levels of production, so the usage charge can vary by output.",
  },
  {
    label: "The media available",
    note: "Photography, video, drone and mixed-media projects can require different production work.",
  },
  {
    label: "The finished format",
    note: "Duration, aspect ratio and output requirements can affect the production charge shown before you create.",
  },
] as const;

export default function Pricing() {
  return (
    <InnerPage>
      <section className="pricing-editorial">
        <div className="shell">
          <div className="pricing-intro">
            <p className="eyebrow">Preliminary early-access pricing</p>
            <h1>
              Pay for access.
              <br />
              <span>Use it when there is something worth selling.</span>
            </h1>
            <p>
              Caplist Studio combines a monthly subscription with production usage. The subscription gives your business access to the platform; a production charge applies only when you choose to create an additional product for a property.
            </p>
            <div className="pricing-terms">
              <span>All prices in AUD</span>
              <span>Subscription + usage</span>
              <span>You set your client price</span>
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
            These are introductory early-access prices and may change while Caplist Studio is being tested. Any change to subscription pricing, production charges or plan inclusions will be made clear before you commit to a paid plan or paid output.
          </p>

          <div className="purchase-path">
            <div>
              <span className="eyebrow">Know the cost before you create</span>
              <h2>
                Decide property by property
                <br />
                whether the product makes sense.
              </h2>
              <p style={{ marginTop: 20, lineHeight: 1.8, color: "#8b95a1" }}>
                Caplist shows the applicable production charge before you create a paid output. You can compare that cost with how you plan to package and price the product for your client, then choose whether to proceed.
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
              <span className="eyebrow">The commercial model</span>
              <h2>
                Caplist creates the product.
                <br />
                You decide how to sell it.
              </h2>
            </div>
            <ol>
              <li>
                <span>01</span>
                <div>
                  <h3>Choose the plan that fits your volume</h3>
                  <p>Your monthly plan gives your business access to the Caplist workspace and the products available at that level.</p>
                </div>
              </li>
              <li>
                <span>02</span>
                <div>
                  <h3>Create only when there is a real opportunity</h3>
                  <p>When a property has suitable media, choose the additional product you want and review the production charge before proceeding.</p>
                </div>
              </li>
              <li>
                <span>03</span>
                <div>
                  <h3>Package and price it for your own market</h3>
                  <p>You decide how the finished product fits your service menu and what your client pays.</p>
                </div>
              </li>
            </ol>
          </div>

          <a className="media-policy-link" href="/early-access">
            <ShieldCheck size={20} />
            <span>Want to test whether Caplist can make your existing shoots worth more? Request early access.</span>
            <ArrowUpRight size={18} />
          </a>
        </div>
      </section>

      <section className="light-section pricing-section">
        <div className="shell">
          <div className="pricing-faq">
            <h2>Pricing, without the guesswork.</h2>
            {[
              [
                "Are these the final prices?",
                "Not yet. These are introductory early-access prices. They may change as Caplist Studio is tested, and any change will be made clear before you commit to a paid plan or paid production.",
              ],
              [
                "Why is there both a subscription and a production charge?",
                "The subscription gives your business access to the Caplist platform. Production usage applies only when you choose to create a finished product for a property.",
              ],
              [
                "Will I know the production charge first?",
                "Yes. The applicable production charge should be clear before you proceed with a paid output.",
              ],
              [
                "Can I choose what my client pays?",
                "Yes. You decide how Caplist-created products are packaged and priced inside your own media business.",
              ],
              [
                "Will higher-volume businesses get different terms?",
                "Potentially. Higher-volume teams may qualify for different usage terms as Caplist Studio expands.",
              ],
              [
                "Can I start small?",
                "Yes. Launch is designed for businesses that want to test Caplist on selected jobs before making it part of their regular offer.",
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
