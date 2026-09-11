import { ArrowUpRight, Check } from "lucide-react";
import { Photo } from "@/components/editorial/Photo";
import { InnerPage } from "@/components/editorial/InnerPage";
export const metadata = { title: "Pricing — Caplist Studio" };
const plans = [
  {
    name: "Essential",
    price: null,
    unit: "per property",
    intro: "Upload your media. Let Caplist handle the rest.",
    items: [
      "Automatic image selection and sequencing",
      "Caplist-selected music",
      "Short standard duration",
      "One primary output format",
      "One output variation",
      "Essential revision allowance",
      "Automatic movement and transitions",
    ],
  },
  {
    name: "Pro",
    price: null,
    unit: "per property",
    intro: "More creative choice. The same effortless production.",
    items: [
      "Select images and adjust their order",
      "Choose your music style",
      "Additional duration options",
      "Selected additional social formats",
      "More output variations",
      "Expanded revision allowance",
      "Automatic movement and transitions",
    ],
  },
  {
    name: "Studio",
    price: null,
    unit: "per property",
    intro: "The full range of choices for a complete delivery.",
    items: [
      "Select images and adjust their order",
      "Broader curated music choice",
      "Widest duration selection",
      "Full social format pack",
      "Widest choice of output variations",
      "Most revision flexibility",
      "Automatic movement and transitions",
    ],
  },
];
export default function Pricing() {
  return (
    <InnerPage>
      <section className="pricing-hero">
        <div className="pricing-hero-image">
          <Photo media="exterior" sizes="100vw" priority />
        </div>
        <div className="inner-hero shell">
          <p className="eyebrow">Pricing</p>
          <h1>
            One capture.
            <br />
            <span>More on the invoice.</span>
          </h1>
          <p>
            Choose a product, then choose the tier for that property. Essential,
            Pro or Studio — shaped around what your client needs.
          </p>
          <div className="pricing-value">
            <span>
              <strong>1</strong> Property visit
            </span>
            <span>
              <strong>5</strong> Product possibilities
            </span>
            <span>
              <strong>More</strong> Value per delivery
            </span>

          </div>
        </div>
      </section>
      <section className="light-section pricing-section">
        <div className="shell">
          <p className="pricing-disclosure">
            Choose per property. No subscription required. Final prices and
            allowances are being confirmed.
          </p>
          <div className="pricing-grid">
            {plans.map((p, i) => (
              <article
                className={i === 1 ? "plan featured-plan" : "plan"}
                key={p.name}
              >
                <div className="plan-photo">
                  <Photo
                    media={(["living", "exterior", "aerial"] as const)[i]}
                    sizes="(max-width:767px) 90vw, 35vw"
                  />
                  <span>
                    {
                      [
                        "A fresh perspective",
                        "The complete collection",
                        "At studio scale",
                      ][i]
                    }
                  </span>
                </div>
                {i === 1 && (
                  <span className="plan-badge">Recommended · Pro</span>
                )}

                <h2>{p.name}</h2>
                <p>{p.intro}</p>
                <div className="plan-price">
                  {p.price ? (
                    <>
                      <sup>A$</sup>
                      {p.price}
                    </>
                  ) : (
                    <>Pricing soon</>
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
          <div className="tier-comparison">
            <p className="eyebrow">Your product. Your level of choice.</p>
            <h2>Five products. Three ways to make them yours.</h2>
            <p>
              Choose Essential, Pro or Studio for each product. Available
              formats depend on the media you supply.
            </p>
            <div className="tier-table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Essential</th>
                    <th>Pro</th>
                    <th>Studio</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    "Vertical Video Reel",
                    "Property Teaser",
                    "Feature Reel",
                    "Photo Reel",
                    "Mixed Media Reel",
                  ].map((name) => (
                    <tr key={name}>
                      <th scope="row">{name}</th>
                      <td>Automatic creation</td>
                      <td>Creative choice + formats</td>
                      <td>Full format pack + variants</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
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
                "No. Your media stays yours. We use it only to create the products you request — never for our own marketing, training or other customers, and never share or repurpose it without your consent.",
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
