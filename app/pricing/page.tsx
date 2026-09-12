import { ArrowUpRight, Check, Layers, ShieldCheck } from "lucide-react";
import { Photo } from "@/components/editorial/Photo";
import { InnerPage } from "@/components/editorial/InnerPage";
import { pricingTiers } from "@/lib/pricing-tiers";
export const metadata = { title: "Pricing — Caplist Studio" };
export default function Pricing() {
  return (
    <InnerPage>
      <section className="pricing-editorial">
        <div className="shell">
          <div className="pricing-intro">
            <p className="eyebrow">A product for every property brief</p>
            <h1>
              More products to sell.
              <br />
              <span>Your clients. Your pricing.</span>
            </h1>
            <p>
              Choose a product, then the creative scope. Add it to your own
              client package, under your media business, at the price you
              choose.
            </p>
            <div className="pricing-terms">
              <span>Per property</span>
              <span>No subscription required</span>
              <span>Early access</span>
            </div>
          </div>
          <div className="offer-grid">
            {pricingTiers.map((tier, index) => (
              <article
                className={`offer-card offer-${tier.name.toLowerCase()}`}
                key={tier.name}
              >
                <div className="offer-topline">
                  <span>
                    0{index + 1} / {tier.level}
                  </span>
                  {index === 1 ? (
                    <Check size={17} />
                  ) : index === 2 ? (
                    <Layers size={17} />
                  ) : null}
                </div>
                <div className="offer-image">
                  <Photo
                    media={tier.media}
                    sizes="(max-width:767px) 90vw, 33vw"
                  />
                  <span>
                    {
                      [
                        "Everyday listings",
                        "Distinctive architecture",
                        "Signature properties",
                      ][index]
                    }
                  </span>
                </div>
                <div className="offer-body">
                  <div className="offer-heading">
                    <h2>{tier.name}</h2>
                    {index === 1 && (
                      <span className="offer-recommended">Recommended</span>
                    )}
                  </div>
                  <p className="offer-description">{tier.description}</p>
                  <div className="offer-price">
                    <strong>Discuss your requirements</strong>
                    <span>Pricing confirmed before production</span>
                  </div>
                  <a
                    className="button offer-cta"
                    href={`/demo?tier=${tier.name}`}
                  >
                    Discuss {tier.name}
                    <ArrowUpRight size={18} />
                  </a>
                  <p className="offer-value">{tier.value}</p>
                  <h3>{tier.inheritance}</h3>
                  <ul>
                    {tier.features.map((feature) => (
                      <li key={feature}>
                        <Check size={17} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="offer-fit">
                    <span>Choose this when</span>
                    <p>{tier.use}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <p className="offer-scope-note">
            Working tier scope. Final prices, durations, format availability and
            revision allowances are confirmed before production. Property images
            illustrate different briefs; any property can use any tier.
          </p>
          <div className="purchase-path">
            <div>
              <span className="eyebrow">Before you commit</span>
              <h2>
                A clear brief.
                <br />
                An agreed delivery.
              </h2>
            </div>
            <ol>
              <li>
                <span>01</span>
                <div>
                  <h3>Tell us what your client needs</h3>
                  <p>
                    Start with the media you have and where the finished product
                    will be used.
                  </p>
                </div>
              </li>
              <li>
                <span>02</span>
                <div>
                  <h3>Review the scope and price</h3>
                  <p>
                    Agree the products, formats, music rights and revision
                    allowance before sharing files.
                  </p>
                </div>
              </li>
              <li>
                <span>03</span>
                <div>
                  <h3>Approve your client delivery</h3>
                  <p>
                    You retain the client relationship and decide how to package
                    and price the result.
                  </p>
                </div>
              </li>
            </ol>
          </div>
          <a className="media-policy-link" href="/media-policy">
            <ShieldCheck size={20} />
            <span>
              Your media. Your permission. Read our media-handling commitment.
            </span>
            <ArrowUpRight size={18} />
          </a>
        </div>
      </section>
      <section className="light-section pricing-section">
        <div className="shell">
          <div className="pricing-faq">
            <h2>A few things to know.</h2>
            {[
              [
                "Do I need to visit the property again?",
                "No. Caplist uses the professional media from your existing capture.",
              ],
              [
                "Can every capture create all five products?",
                "The available products depend on your media. Edited photography can support a Photo Reel; property video opens up teasers and feature edits. Drone footage adds another perspective.",
              ],
              [
                "Can I use Caplist with my old media?",
                "Yes. Your archive can become new deliverables too. Start with your original high-quality photos and footage, with permission to use them for the project.",
              ],
              [
                "Can I sell what I create with Caplist to my clients?",
                "Yes. Caplist is designed to create additional products you can sell under your own media business. You decide how to package and price your client delivery.",
              ],
              [
                "Do you use my media anywhere?",
                "Your media belongs to you. Caplist’s commitment is to use it only for the work you request, with no reuse for marketing, training or other customers without your consent. Before a pilot, we will agree how files are transferred, accessed and deleted. This website does not accept media uploads.",
              ],
              [
                "Can I purchase a plan now?",
                "Caplist Studio is being built for professional property-media businesses. Request early access to start a conversation. Pricing and production terms will be confirmed before any work begins.",
              ],
            ].map(([q, a]) => (
              <details key={q}>
                <summary>{q}</summary>
                <p>{a}</p>
              </details>
            ))}
            <details>
              <summary>I have a request from a client. Can you add it?</summary>
              <p>
                We’re always looking to improve Caplist and would love to hear
                what your client needs.{" "}
                <a href="/contact">
                  Tell us about your request <ArrowUpRight size={16} />
                </a>
              </p>
            </details>
          </div>
        </div>
      </section>
    </InnerPage>
  );
}
