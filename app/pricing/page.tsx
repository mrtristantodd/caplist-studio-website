import { InnerPage } from "@/components/editorial/InnerPage";
import { AccessLink } from "@/components/editorial/StudioUI";
export const metadata = {
  title: "Pricing — Caplist Studio",
  description:
    "Simple platform access + production. Preliminary AUD pricing for professional property-media businesses.",
};
const plans = [
  {
    name: "Launch",
    subhead: "Start adding new products to selected jobs.",
    description:
      "For professional property-media businesses that want to start small, test new products with existing clients and learn where Caplist creates the most value.",
    best: "Testing Caplist on selected properties before making it part of your regular product menu.",
    price: "$49",
    note: "+ production",
  },
  {
    name: "Growth",
    subhead: "Make Caplist part of your regular offer.",
    description:
      "For established media businesses that want additional products to become a repeatable part of what they sell to agents and agencies.",
    best: "Businesses ready to offer Caplist-created products across more of their normal property workflow.",
    price: "$149",
    note: "+ production",
  },
  {
    name: "Scale",
    subhead: "Built for higher-volume media businesses.",
    description:
      "For teams creating additional products across a larger number of property jobs and users.",
    best: "Higher-volume teams embedding Caplist more deeply into their production workflow.",
    price: "$299",
    note: "+ volume production",
  },
];
export default function Pricing() {
  return (
    <InnerPage>
      <section className="pricing-editorial">
        <div className="shell">
          <div className="pricing-intro">
            <p className="eyebrow">SIMPLE PLATFORM ACCESS + PRODUCTION</p>
            <h1>
              Choose the plan that fits your business. Create when there’s
              something worth selling.
            </h1>
            <p>
              Your subscription gives your business access to Caplist Studio.
              Production is charged when you choose to create a finished product
              for a property.
            </p>
            <p>
              You decide how that product fits your service, how you package it
              and what your client pays.
            </p>
            <div className="pricing-terms">
              <span>AUD pricing</span>
              <span>Monthly access + production</span>
              <span>Your client pricing stays yours</span>
            </div>
          </div>
          <div className="offer-grid">
            {plans.map((p, i) => (
              <article
                className={`offer-card offer-${["essential", "pro", "studio"][i]}`}
                key={p.name}
              >
                <div className="offer-body">
                  <h2>{p.name}</h2>
                  <h3>{p.subhead}</h3>
                  <p className="offer-description">{p.description}</p>
                  <div className="offer-price">
                    <strong>{p.price} / month</strong>
                    <span>{p.note}</span>
                  </div>
                  <AccessLink href={`/demo/?tier=${p.name}`}>
                    Book a demo
                  </AccessLink>
                  <div className="offer-fit">
                    <span>Best for</span>
                    <p>{p.best}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <p className="offer-scope-note">
            Introductory pricing may change as Caplist Studio develops. Any
            pricing change will be made clear before it affects your
            subscription or paid production.
          </p>
          <div className="purchase-path">
            <div>
              <p className="eyebrow">KNOW THE COST BEFORE YOU CREATE</p>
              <h2>
                Decide property by property what’s worth adding to the order.
              </h2>
            </div>
            <p>
              Caplist shows the production price before you create a paid
              product. You decide whether it makes sense for that property, how
              it fits your package and what your client pays.
            </p>
          </div>
          <div className="purchase-path">
            <h2>Caplist creates the product. You decide how to sell it.</h2>
            <ol>
              {[
                [
                  "Choose your plan",
                  "Give your team access to the Caplist workspace.",
                ],
                [
                  "Create when the opportunity is there",
                  "Add the finished products you want for that property.",
                ],
                [
                  "Sell through your own business",
                  "Package, price and deliver the product as part of the client relationship you already own.",
                ],
              ].map(([title, body], i) => (
                <li key={title}>
                  <span>0{i + 1}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <AccessLink href="/demo">Book a demo</AccessLink>
        </div>
      </section>
    </InnerPage>
  );
}
