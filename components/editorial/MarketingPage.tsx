import { ArrowRight, ArrowUpRight, Check, ChevronDown } from "lucide-react";
import { CaplistLogo, CaplistMark } from "@/components/brand/CaplistLogo";
import { products } from "@/lib/demo-media";
import { CONTACTS } from "@/lib/site";
import { Photo } from "./Photo";
import { AppLoginLink } from "./AppLoginLink";
import { SiteHeader } from "./SiteHeader";
import { AccessLink, AccessClose, SectionHeading } from "./StudioUI";
import { ProductExplorer } from "./ProductExplorer";

const inputs = [
  ["Photography", "familyLiving"],
  ["Video", "suburban"],
  ["Drone", "aerial"],
  ["Vertical", "weatherboard"],
] as const;

function Hero() {
  return (
    <section id="top" className="studio-hero">
      <div className="shell studio-hero-grid">
        <div className="studio-hero-copy">
          <p className="studio-kicker">More from every capture</p>
          <h1>
            Turn every property capture into <span>more products to sell.</span>
          </h1>
          <p className="studio-lead">
            Caplist Studio turns the professional photos, video, drone and
            vertical footage you already capture into additional finished visual
            products — without another property visit or another editing
            workflow.
          </p>
          <div className="studio-actions">
            <AccessLink />
            <a className="studio-text-link" href="/demo">
              Book a demo <ArrowRight size={18} />
            </a>
          </div>
          <p className="studio-support">
            Built for professional real-estate photographers, videographers and
            property-media businesses.
          </p>
        </div>
        <div className="capture-board">
          <div className="capture-board-heading">
            <span className="studio-kicker">Existing professional media</span>
            <span className="capture-status">Source → products</span>
          </div>
          <div className="capture-feature">
            <Photo
              media="suburban"
              sizes="(max-width:900px) 90vw, 46vw"
              priority
            />
            <div>
              <span>One property.</span>
              <strong>A whole new delivery.</strong>
            </div>
          </div>
          <div className="capture-inputs">
            {inputs.map(([label, media]) => (
              <div key={label}>
                <div>
                  <Photo media={media} sizes="160px" decorative />
                </div>
                <span>{label}</span>
              </div>
            ))}
          </div>
          <div className="capture-transform">
            <span>Your media</span>
            <ArrowRight size={18} />
            <CaplistMark size={34} />
            <ArrowRight size={18} />
            <span>More to sell</span>
          </div>
          <div className="capture-products">
            {[
              "Photo Reel",
              "Vertical Reel",
              "Property Teaser",
              "Feature Reel",
              "Mixed Media",
            ].map((x) => (
              <span key={x}>{x}</span>
            ))}
          </div>
          <p className="capture-note">
            Illustrative media pool · Products depend on your source assets
          </p>
        </div>
      </div>
      <div className="shell studio-value-strip">
        <span>Your media.</span>
        <span>Your clients.</span>
        <span>Your pricing.</span>
        <strong>More to sell.</strong>
      </div>
    </section>
  );
}

function CommercialIdea() {
  return (
    <section className="studio-section studio-paper">
      <div className="shell studio-split">
        <SectionHeading
          eyebrow="One shoot. More value."
          title="The shoot is finished. The opportunity isn’t."
        >
          <p>
            By the time you deliver a property, you’ve already paid for the
            expensive part of the job — booking, travel, equipment, capture and
            primary editing.
          </p>
          <p>
            Caplist Studio helps you get more commercial value from that work by
            turning the media you’ve already produced into additional products
            your clients can buy.
          </p>
        </SectionHeading>
        <div className="commercial-expansion">
          <p className="studio-kicker">Original job</p>
          <div className="original-job">
            Photography <span>+</span> Video <span>+</span> Drone
          </div>
          <div className="expansion-line">
            <CaplistMark size={38} />
            <span>Additional products</span>
          </div>
          <div className="expansion-products">
            {products.map((p) => (
              <span key={p.id}>
                {p.name.replace("Alternative / ", "")}
                <ArrowUpRight size={16} />
              </span>
            ))}
          </div>
          <p className="commercial-conclusion">
            More of every job can become something you sell.
          </p>
        </div>
      </div>
      <div className="shell studio-assurances">
        {[
          "No second visit.",
          "No second capture.",
          "No additional manual edit from scratch.",
        ].map((x) => (
          <span key={x}>
            <Check size={18} />
            {x}
          </span>
        ))}
      </div>
    </section>
  );
}

function SourceMedia() {
  const descriptions = [
    [
      "Professional Photography",
      "Your professionally edited property images can become motion-led visual products built for modern delivery formats.",
    ],
    [
      "Professional Video",
      "Existing landscape or vertical footage can become shorter, alternative and platform-specific edits.",
    ],
    [
      "Drone Media",
      "Aerial footage can support dedicated drone products or strengthen mixed-media edits.",
    ],
    [
      "Native Vertical",
      "Professionally captured vertical footage can be combined with other media or repurposed into alternative social formats.",
    ],
  ];

  return (
    <section className="studio-section studio-dark">
      <div className="shell">
        <div className="studio-split">
          <SectionHeading
            eyebrow="One media pool. More products."
            title="Your existing media becomes the starting point."
          />
          <div className="studio-prose">
            <p>
              Upload the professional media already captured for the property.
              Caplist Studio understands what’s there, assesses what it’s
              suitable for and shows you the additional products that can be
              created from it.
            </p>
            <p>
              A property with photography may offer one set of products. Add
              professional video, drone or vertical footage and more
              possibilities become available.
            </p>
            <strong>
              You don’t start with an editor. You start with what can this
              property become?
            </strong>
          </div>
        </div>
        <div className="source-editorial-grid">
          {descriptions.map(([title, description], i) => (
            <article key={title}>
              <div className="source-editorial-image">
                <Photo
                  media={inputs[i][1]}
                  sizes="(max-width:767px) 90vw,25vw"
                />
                <span>0{i + 1}</span>
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    [
      "Upload",
      "Add the media you’ve already captured.",
      "Professional photos, video, drone and vertical footage from the property.",
    ],
    [
      "Unlock",
      "See what your media can produce.",
      "Caplist assesses the supplied assets and makes suitable products available for that property.",
    ],
    [
      "Create",
      "Choose the product. Caplist makes the edit.",
      "Make focused creative choices, review the finished product and deliver through your existing workflow.",
    ],
  ];

  return (
    <section id="how-it-works" className="studio-section studio-paper">
      <div className="shell studio-how">
        <div>
          <SectionHeading
            eyebrow="Complex behind the scenes. Simple for you."
            title="Upload. Unlock. Create."
          />
          <p className="studio-auto">
            Auto by default.
            <br />
            <span>Control when it matters.</span>
          </p>
        </div>
        <ol className="studio-steps">
          {steps.map(([title, headline, description], i) => (
            <li key={title}>
              <span className="step-number">0{i + 1}</span>
              <div>
                <span className="studio-kicker">{title}</span>
                <h3>{headline}</h3>
                <p>{description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Catalogue() {
  return (
    <section
      id="products"
      className="studio-section studio-paper studio-catalogue"
    >
      <div className="shell">
        <div className="studio-split">
          <SectionHeading
            eyebrow="An expanding product catalogue"
            title="More ways to sell the media you’ve already made."
          />
          <div className="studio-prose">
            <p>
              Caplist Studio isn’t built around one output. Different source
              media can support different finished products — giving your
              business more to offer without adding another shoot.
            </p>
            <a className="studio-text-link" href="/examples">
              Explore the product examples <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
        <ProductExplorer />
        <div className="studio-catalogue-note">
          <div>
            <h3>More products over time.</h3>
            <p>
              Caplist Studio is being built as an expanding production platform.
              As new visual-production capabilities reach the standard required
              for professional real-estate media, they can become new products
              your business can offer.
            </p>
          </div>
          <p>
            Product availability depends on source media, quality requirements
            and the current Caplist Studio release.
          </p>
        </div>
      </div>
    </section>
  );
}

function BusinessBenefits() {
  const benefits = [
    [
      "More product inventory",
      "Give clients more visual products to choose from without having to capture every product separately.",
    ],
    [
      "Higher AOV potential",
      "Add paid visual products to existing property orders and packages.",
    ],
    [
      "Low additional production labour",
      "Caplist performs the production work instead of adding another manual editing queue to your business.",
    ],
    [
      "Keep the client",
      "Caplist sits behind your media business. You maintain the relationship with the agent or agency.",
    ],
    [
      "Control the price",
      "You decide how Caplist-generated products are packaged, positioned and sold.",
    ],
    [
      "Scale differently",
      "Growth doesn’t have to come only from putting another photographer on the road.",
    ],
  ];

  return (
    <section id="for-media-businesses" className="studio-section studio-paper">
      <div className="shell">
        <div className="studio-split">
          <SectionHeading
            eyebrow="Built to make each job worth more"
            title="Grow what you sell — not just how many properties you shoot."
          />
          <div className="studio-prose">
            <p>
              Traditional growth in property media usually means more bookings,
              more shooters, more travel or more editing capacity.
            </p>
            <p>
              Caplist Studio creates another lever:{" "}
              <strong>more value from work you’ve already captured.</strong>
            </p>
          </div>
        </div>
        <div className="studio-benefits">
          {benefits.map(([title, description], i) => (
            <article key={title}>
              <span className="studio-index">0{i + 1}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function QualityAndControl() {
  return (
    <section id="standards" className="studio-section studio-paper">
      <div className="shell studio-split">
        <div>
          <SectionHeading
            eyebrow="Professional in. Professional out."
            title="Built to extend professional capture — not replace it."
          />
          <div className="studio-prose">
            <p>
              Caplist Studio is made for photography and media businesses whose
              work already has to meet a professional standard. It doesn’t exist
              to disguise bad capture.
            </p>
            <p>
              It evaluates the media supplied and only makes products available
              where the source material can support the result.
            </p>
            <strong>
              Because if the finished product carries your name, it needs to
              deserve it.
            </strong>
          </div>
          <div className="quality-principles">
            {[
              [
                "Source suitability",
                "Not every asset belongs in every product.",
              ],
              [
                "Professional output",
                "Products should feel intentional and commercially deliverable — not automatically generated for the sake of it.",
              ],
              ["Property fidelity", "The property should remain the property."],
              [
                "Quality before novelty",
                "New visual capabilities belong in Caplist only when they can perform reliably enough for professional use.",
              ],
            ].map(([title, text]) => (
              <details key={title}>
                <summary>
                  {title}
                  <ChevronDown size={18} />
                </summary>
                <p>{text}</p>
              </details>
            ))}
          </div>
        </div>
        <div className="creative-panel">
          <div className="creative-image">
            <Photo media="familyLiving" sizes="(max-width:767px) 90vw,45vw" />
          </div>
          <div className="creative-copy">
            <p className="studio-kicker">Control without another editor</p>
            <h2>
              Caplist makes the edit.
              <br />
              You control the intent.
            </h2>
            <p>
              You shouldn’t need to become a video editor to create another
              product. Caplist handles the production decisions that consume
              time.
            </p>
            <div className="production-tasks">
              {[
                "Selection",
                "Movement",
                "Transitions",
                "Pacing",
                "Sequencing",
                "Reframing",
                "Music timing",
                "Rendering",
              ].map((x) => (
                <span key={x}>{x}</span>
              ))}
            </div>
            <p>
              Where creative input matters, you can make focused decisions such
              as selecting source assets, changing order, choosing an approved
              style or music direction, or requesting another version.
            </p>
            <strong>
              No timeline. No keyframes.
              <br />
              No complicated editing software.
            </strong>
            <p>
              Just enough control to protect the creative intent without handing
              the production work back to you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function WorkflowAndReseller() {
  return (
    <section className="studio-section studio-paper">
      <div className="shell">
        <SectionHeading
          eyebrow="Built around the business you already run"
          title="Add Caplist to your workflow. Don’t replace it."
        />
        <p className="studio-workflow-intro">
          Keep capturing the way you capture. Keep your existing CRM, booking
          system, delivery platform and agent relationships.
        </p>
        <ol className="studio-workflow">
          {[
            ["Capture", "Your existing shoot"],
            ["Edit", "Your normal primary workflow"],
            ["Caplist", "Create additional sellable products"],
            ["Deliver", "Through the systems you already use"],
          ].map(([title, description], i) => (
            <li className={i === 2 ? "is-caplist" : ""} key={title}>
              <span className="studio-kicker">0{i + 1}</span>
              <h3>{title}</h3>
              <p>{description}</p>
              {i < 3 && <ArrowRight size={20} />}
            </li>
          ))}
        </ol>
        <p className="studio-workflow-note">
          Caplist isn’t trying to run the entire real-estate campaign. It makes
          more professional visual media from the assets your business already
          produces.
        </p>
        <div className="studio-reseller">
          <div>
            <p className="studio-kicker">Your business stays in front</p>
            <h2>
              Your client.
              <br />
              Your service.
              <br />
              <span>Your margin.</span>
            </h2>
          </div>
          <div className="studio-prose">
            <p>
              Caplist Studio sits behind the professional media business — not
              between you and your client. Your agents don’t need another
              platform to learn. They buy the finished product from you.
            </p>
            <p>
              You choose what to offer. You decide how to package it. You set
              the retail price.
            </p>
            <p>
              And as Caplist Studio develops, higher-volume media businesses can
              operate through a more deeply branded or white-label experience.
            </p>
            <strong>
              Caplist provides the production capability.
              <br />
              You own the relationship.
            </strong>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="brand-footer">
      <div className="shell">
        <div className="brand-footer-main">
          <div>
            <a href="/#top" aria-label="Caplist Studio home">
              <CaplistLogo />
            </a>
            <h2>More from every capture.</h2>
            <p>
              Turn existing professional property media into additional finished
              visual products your media business can sell.
            </p>
          </div>
          <nav aria-label="Footer navigation">
            <a href="/#products">Products</a>
            <a href="/#how-it-works">How It Works</a>
            <a href="/#for-media-businesses">For Media Businesses</a>
            <a href="/about">About</a>
            <a href="/pricing">Pricing</a>
            <a href="/contact">Contact</a>
            <AppLoginLink>Log In</AppLoginLink>
          </nav>
          <div className="brand-footer-contact">
            <p className="studio-kicker">Start a conversation</p>
            <a href={`mailto:${CONTACTS.general}`}>
              {CONTACTS.general} <ArrowUpRight size={18} />
            </a>
            <AccessLink />
          </div>
        </div>
        <div className="brand-footer-bottom">
          <span>© {new Date().getFullYear()} Caplist Studio</span>
          <div>
            <a href="/privacy">Privacy</a>
            <a href="/media-policy">Media Handling</a>
            <a href="/terms">Terms</a>
            <a href="/#top">Back to top ↑</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function MarketingPage() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main-content" className="studio-home">
        <Hero />
        <CommercialIdea />
        <SourceMedia />
        <HowItWorks />
        <Catalogue />
        <BusinessBenefits />
        <QualityAndControl />
        <WorkflowAndReseller />
        <section className="studio-vision studio-section">
          <div className="shell">
            <SectionHeading
              eyebrow="An expanding production layer"
              title="When visual technology becomes commercially useful, it should become something you can sell."
            />
            <p>
              New AI and media technologies appear constantly. Most don’t belong
              in a professional property-media workflow. A new capability only
              becomes a product when it can deliver the quality, property
              fidelity, reliability and economics required for professional use.
            </p>
            <strong>
              The goal isn’t to give you more AI tools to experiment with.
              <br />
              It’s to keep giving your business more products to sell.
            </strong>
            <a className="studio-text-link" href="/about">
              About Caplist Studio <ArrowUpRight size={18} />
            </a>
          </div>
        </section>
        <AccessClose />
      </main>
      <Footer />
    </>
  );
}
