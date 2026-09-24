import { InnerPage } from "@/components/editorial/InnerPage";
import { AccessLink } from "@/components/editorial/StudioUI";
import styles from "./pricing.module.css";

export const metadata = {
  title: "Pricing — Caplist Studio",
  description:
    "CAPLIST plans and wholesale production pricing for professional property-media businesses.",
};

const plans = [
  {
    name: "Launch",
    price: "$49 / month",
    purpose: "For photographers starting to add CAPLIST products to selected jobs.",
    description:
      "Access the complete CAPLIST workflow with standard wholesale production pricing.",
    features: [
      "Product planning and capture requirements",
      "Property media analysis and product opportunities",
      "Sales Opportunities",
      "Partner sales support resources",
      "Standard media retention",
      "Standard wholesale production rates",
    ],
    cta: "Start with Launch",
  },
  {
    name: "Growth",
    price: "$149 / month",
    purpose:
      "For photography businesses making CAPLIST part of their regular product offer.",
    description:
      "Everything in Launch, with better production economics and additional business tools.",
    features: [
      "Reduced wholesale production rates",
      "Custom business branding",
      "Longer media retention",
      "Saved production preferences",
      "Priority production",
      "Commercial performance reporting",
      "Selected workflow integrations as available",
      "Full Sales Opportunities and Partner Sales Toolkit access",
    ],
    cta: "Choose Growth",
    popular: true,
  },
  {
    name: "Scale",
    price: "$299 / month",
    purpose: "For established, higher-volume property-media businesses.",
    description:
      "Built for teams processing more properties and producing more CAPLIST products.",
    features: [
      "Volume wholesale production rates",
      "Multiple users",
      "Team permissions",
      "White-label product catalogue",
      "Longer source-media retention",
      "Advanced commercial reporting",
      "Workflow integrations",
      "API and webhook access as available",
      "Priority support",
    ],
    cta: "Choose Scale",
  },
] as const;

const productionPrices = [
  { name: "Photo Reel", launch: "$69", growth: "$59", scale: "$49" },
  { name: "15 sec Property Teaser", launch: "$59", growth: "$49", scale: "$39" },
  { name: "30 sec Vertical Video Reel", launch: "$109", growth: "$89", scale: "$79" },
  { name: "9:16 Walkthrough", launch: "$139", growth: "$119", scale: "$99" },
  { name: "16:9 Walkthrough", launch: "$149", growth: "$129", scale: "$109" },
  { name: "Drone Reel", launch: "$99", growth: "$79", scale: "$69" },
  { name: "Mixed Media Reel", launch: "$159", growth: "$139", scale: "$119" },
] as const;

const pricingSteps = [
  {
    title: "Subscribe",
    paragraphs: [
      "Choose the CAPLIST plan that matches your business volume. Your subscription gives you access to the platform, media analysis and supporting sales tools.",
    ],
  },
  {
    title: "Capture and upload",
    paragraphs: [
      "Upload the professional media from a completed property. CAPLIST identifies the additional products that media can support.",
    ],
  },
  {
    title: "Produce on demand",
    paragraphs: [
      "Create the products you want, when you need them, at the wholesale production rate for your plan.",
    ],
  },
] as const;

const questions = [
  {
    question: "Do I pay every time I upload a property?",
    answer: [
      "No. Your subscription provides access to CAPLIST's analysis and workflow. Production charges apply when you choose to create a finished commercial product.",
    ],
  },
  {
    question: "Can I create another product later?",
    answer: [
      "Yes.",
      "If the required source media remains available, CAPLIST can use the existing property analysis to create another eligible product later without unnecessarily starting from scratch.",
    ],
  },
  {
    question: "Can I download my finished media?",
    answer: [
      "Yes.",
      "Once you have paid for a finished downloadable production, it belongs to your business and can be delivered or stored using your normal workflow.",
    ],
  },
  {
    question: "Can I set my own retail prices?",
    answer: [
      "Yes.",
      "CAPLIST provides wholesale production. You control your customer relationship, product pricing and resale margin.",
    ],
  },
  {
    question: "Does CAPLIST take a percentage of my sale?",
    answer: [
      "No.",
      "You pay your CAPLIST subscription and the applicable wholesale production charge. What you charge your client is your business.",
    ],
  },
  {
    question: "What if my footage does not meet the required standard?",
    answer: [
      "CAPLIST checks whether the supplied media meets the requirements of the selected product.",
      "If something prevents professional production, CAPLIST identifies the issue rather than knowingly creating a poor-quality final product.",
    ],
  },
  {
    question: "Do I need to change my current workflow?",
    answer: [
      "No.",
      "CAPLIST is designed to sit between professional editing and delivery:",
      "CAPTURE → EDIT → CAPLIST → QC → DELIVER",
      "Continue using the cameras, editors and delivery tools that work for your business.",
    ],
  },
] as const;

export default function Pricing() {
  return (
    <InnerPage>
      <div className={styles.page}>
        <section className={`${styles.hero} ${styles.wrap}`} aria-labelledby="pricing-title">
          <p className={styles.eyebrow}>PRICING</p>
          <h1 id="pricing-title">Plans built around how often you produce.</h1>
          <div className={styles.heroText}>
            <p className={styles.lead}>
              CAPLIST gives professional property-media businesses the tools to turn each completed shoot into more products to sell.
            </p>
            <p>
              Subscribe for access to the platform, media intelligence and workflow. Then pay a wholesale production rate only when you choose to create a finished commercial product.
            </p>
          </div>
          <div className={styles.heroFoot}>
            <strong>Capture once. Edit once. CAPLIST it. Sell more.</strong>
            <span>Early access pricing. AUD, excluding GST.</span>
          </div>
        </section>

        <section className={`${styles.planSection} ${styles.wrap}`} aria-labelledby="plans-title">
          <h2 id="plans-title" className={styles.visuallyHidden}>Subscription plans</h2>
          <div className={styles.planGrid}>
            {plans.map((plan) => (
              <article className={`${styles.planCard} ${"popular" in plan ? styles.popular : ""}`} key={plan.name}>
                <div className={styles.planTop}>
                  <div className={styles.planNameRow}>
                    <h3>{plan.name}</h3>
                    {"popular" in plan && <span className={styles.popularBadge}>MOST POPULAR</span>}
                  </div>
                  <p className={styles.planPurpose}>{plan.purpose}</p>
                  <p className={styles.planDescription}>{plan.description}</p>
                  <p className={styles.planPrice}>{plan.price}</p>
                </div>
                <div className={styles.planBottom}>
                  <p className={styles.includes}>Includes:</p>
                  <ul>
                    {plan.features.map((feature) => <li key={feature}>{feature}</li>)}
                  </ul>
                  <AccessLink href="/early-access">{plan.cta}</AccessLink>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={`${styles.section} ${styles.wrap}`} aria-labelledby="production-title">
          <div className={styles.sectionIntro}>
            <p className={styles.eyebrow}>WHOLESALE PRODUCTION PRICING</p>
            <h2 id="production-title">Pay when you create something to sell.</h2>
            <div className={styles.sectionCopy}>
              <p>CAPLIST identifies the additional products your existing media can support and keeps them available to create when you need them.</p>
              <p className={styles.emphasis}>A production charge applies only when you create a finished product.</p>
            </div>
          </div>
          <div className={styles.rateTableWrap}>
            <table className={styles.rateTable}>
              <caption className={styles.visuallyHidden}>Wholesale production prices by subscription plan, AUD excluding GST</caption>
              <thead><tr><th scope="col">Production</th><th scope="col">Launch</th><th scope="col" className={styles.growthColumn}>Growth</th><th scope="col">Scale</th></tr></thead>
              <tbody>
                {productionPrices.map((product) => (
                  <tr key={product.name}>
                    <th scope="row">{product.name}</th>
                    <td>{product.launch}</td>
                    <td className={styles.growthColumn}>{product.growth}</td>
                    <td>{product.scale}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className={styles.mobileRates} aria-label="Wholesale production prices by subscription plan">
            {productionPrices.map((product) => (
              <article key={product.name}>
                <h3>{product.name}</h3>
                <dl>
                  <div><dt>Launch</dt><dd>{product.launch}</dd></div>
                  <div><dt>Growth</dt><dd>{product.growth}</dd></div>
                  <div><dt>Scale</dt><dd>{product.scale}</dd></div>
                </dl>
              </article>
            ))}
          </div>
          <p className={styles.rateNote}>Production availability depends on the source media supplied and whether it meets CAPLIST&apos;s quality and capture requirements.</p>
        </section>

        <section className={`${styles.section} ${styles.wrap}`} aria-labelledby="works-title">
          <h2 id="works-title">How CAPLIST pricing works</h2>
          <div className={styles.steps}>
            {pricingSteps.map((step, index) => (
              <article key={step.title}>
                <span className={styles.stepNumber}>0{index + 1}</span>
                <h3>{step.title}</h3>
                {step.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </article>
            ))}
          </div>
        </section>

        <section className={`${styles.inventory} ${styles.wrap}`} aria-labelledby="inventory-title">
          <div>
            <h2 id="inventory-title">Your media can keep working after the shoot</h2>
            <h3>More products, ready when you need them.</h3>
            <p>A completed property may already contain everything needed to create additional professional media.</p>
            <p>CAPLIST identifies those opportunities so you can return later and create another product without another property visit.</p>
            <ul className={styles.productChips}>
              <li>Property Teaser</li>
              <li>Vertical Reel</li>
              <li>Drone Reel</li>
              <li>Alternative Edit</li>
            </ul>
            <p className={styles.emphasis}>Create what you need, when you need it.</p>
            <p>Return to an existing property and produce additional media from the source assets already captured.</p>
          </div>
        </section>

        <section className={`${styles.section} ${styles.wrap} ${styles.businessValue}`} aria-labelledby="business-value-title">
          <div>
            <p className={styles.eyebrow}>BUILT FOR YOUR BUSINESS</p>
            <h2 id="business-value-title">More value as CAPLIST becomes part of your workflow.</h2>
          </div>
          <div className={styles.businessValueCopy}>
            <p>Launch gives you a low-risk way to start adding new products to selected jobs.</p>
            <p>Growth adds stronger commercial tools and reduced production rates for businesses using CAPLIST regularly.</p>
            <p>Scale adds team, white-label and workflow capabilities for established higher-volume media businesses.</p>
            <div className={styles.commercialPoints}>
              <p>You remain free to set your own retail prices.</p>
              <p>CAPLIST does not take a percentage of what you charge your clients.</p>
            </div>
          </div>
        </section>

        <section className={`${styles.quality} ${styles.wrap}`} aria-labelledby="quality-title">
          <h2 id="quality-title">Professional input. Professional output.</h2>
          <div>
            <p>CAPLIST is designed for professionally captured and edited property media.</p>
            <p>Each product has defined source-media and quality requirements.</p>
            <p>CAPLIST checks the supplied media before production and identifies problems that could prevent the selected product from meeting professional standards.</p>
            <p>If the required source media is missing or unsuitable, CAPLIST will tell you before creating the final output.</p>
          </div>
        </section>

        <section className={`${styles.section} ${styles.wrap} ${styles.faq}`} aria-labelledby="faq-title">
          <h2 id="faq-title">Frequently asked questions</h2>
          <div className={styles.faqList}>
            {questions.map(({ question, answer }) => (
              <details key={question}>
                <summary>{question}</summary>
                <div>{answer.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
              </details>
            ))}
          </div>
        </section>

        <section className={`${styles.finalCta} ${styles.wrap}`} aria-labelledby="final-title">
          <div>
            <h2 id="final-title">More from every property you already shoot.</h2>
            <p>Turn professionally captured media into additional products your business can sell—without another property visit or another manual edit.</p>
          </div>
          <div className={styles.finalAction}>
            <AccessLink href="/early-access">Start with CAPLIST</AccessLink>
            <p>Capture once. Edit once. Sell more.</p>
          </div>
        </section>
      </div>
    </InnerPage>
  );
}
