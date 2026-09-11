import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  CheckCheck,
  Video,
  Scan,
  Plus,
  Minus,
} from "lucide-react";
import { CaplistLogo, CaplistMark } from "@/components/brand/CaplistLogo";
import { products, type MediaKey } from "@/lib/demo-media";
import { Photo, FrameCorners } from "./Photo";
import { PreviewButton } from "./PreviewButton";
import { SiteHeader } from "./SiteHeader";

function Chapter({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) {
  return (
    <p className="eyebrow chapter">
      <span className="chapter-index">{number}</span>
      {children}
    </p>
  );
}

function Hero() {
  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="hero-atmosphere">
        <Photo media="exterior" sizes="100vw" decorative />
      </div>
      <div className="shell hero-main">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="blue-dot" /> Professional media. More opportunity.
          </p>
          <h1 id="hero-title">
            <span>MORE FROM</span>
            <span>EVERY</span>
            <span className="blue-type">CAPTURE.</span>
          </h1>
          <p className="hero-description">
            Turn the professional property photography, video and drone media
            you’ve already captured into{" "}
            <strong>
              additional visual products your media business can sell.
            </strong>
          </p>
          <div className="hero-actions">
            <a href="/#products" className="button button-blue">
              See what your media can create
              <ArrowUpRight size={18} />
            </a>
            <a href="/#how-it-works" className="text-link">
              See how it works
              <ArrowDown size={16} />
            </a>
          </div>
          <p className="hero-qualifier">
            <CheckCheck size={16} /> Built for professional property-media
            businesses.
            <br />
            No additional property visit.
          </p>
        </div>
        <div className="hero-media">
          <div className="hero-property">
            <Photo
              media="exterior"
              priority
              sizes="(max-width: 767px) 100vw, (max-width: 1023px) 90vw, 55vw"
            />
            <div className="photo-shade" />
            <FrameCorners />
            <div className="property-caption">
              <span>EXISTING CAPTURE / 001</span>
              <span>PARKDALE HOUSE, VIC</span>
            </div>
            <div className="vertical-view">
              <FrameCorners />
              <span>9:16</span>
            </div>
          </div>
          <div className="source-contact">
            <p className="eyebrow">Your capture</p>
            <div className="source-thumbnails">
              {(
                [
                  ["exterior", "27 Photos"],
                  ["living", "Property Video"],
                  ["aerial", "Drone Clips"],
                  ["kitchen", "Vertical Clips"],
                ] as [MediaKey, string][]
              ).map(([media, label]) => (
                <div key={label}>
                  <div className="source-thumb">
                    <Photo media={media} sizes="110px" decorative />
                  </div>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="hero-product-list">
            <p className="eyebrow">New products</p>
            {products.map((p) => (
              <a href={`#${p.id}`} key={p.id}>
                <div>
                  <Photo media={p.media} sizes="100px" decorative />
                </div>
                <span>
                  {p.name.replace("Alternative / ", "")}
                  <small>{p.duration}</small>
                </span>
              </a>
            ))}
          </div>
          <div className="hero-output">
            <div className="output-image">
              <Photo media="living" sizes="200px" />
              <FrameCorners />
              <span className="output-ratio">9:16</span>
            </div>
            <span className="output-caption">
              <span className="blue-dot" /> Vertical Video Reel
              <small>One of five new possibilities</small>
            </span>
          </div>
        </div>
      </div>
      <div className="shell hero-relationship">
        <div className="relationship-origin">
          <span className="eyebrow">Captured media</span>
          <span>Photos. Video. Drone. Vertical.</span>
        </div>
        <ArrowRight className="relationship-arrow" size={24} />
        <div className="relationship-brand">
          <CaplistMark size={30} />
          <span>CAPLIST</span>
        </div>
        <ArrowRight className="relationship-arrow" size={24} />
        <div className="relationship-products">
          <span className="eyebrow">Additional sellable products</span>
          <p>
            Vertical Video Reel <b>·</b> Property Teaser <b>·</b> Feature Reel{" "}
            <b>·</b> Photo Reel <b>·</b> Mixed Media Reel
          </p>
        </div>
      </div>
    </section>
  );
}

function Opportunity() {
  const steps = ["Book", "Travel", "Capture", "Edit", "Deliver"];
  const media: MediaKey[] = [
    "living",
    "aerial",
    "exterior",
    "kitchen",
    "exterior",
  ];
  return (
    <section
      id="for-media-businesses"
      className="opportunity light-section chapter-section"
      aria-labelledby="opportunity-title"
    >
      <div className="shell opportunity-reference">
        <div className="opportunity-story">
          <Chapter number="01">The commercial opportunity</Chapter>
          <h2 id="opportunity-title">
            The expensive
            <br />
            part already
            <br />
            happened.
          </h2>
          <p>
            You’ve booked, travelled, captured and delivered. Now turn the media
            from that same job into additional products your clients can buy.
          </p>
          <p className="usp-copy">
            One property visit.
            <br />
            <strong>More products to sell.</strong>
          </p>
          <a href="/examples" className="button button-outline">
            See the possibilities <ArrowUpRight size={18} />
          </a>
        </div>
        <div className="delivery-diagram">
          <p className="eyebrow workflow-heading">Your standard workflow</p>
          <ol className="capture-journey">
            {steps.map((step, i) => (
              <li key={step}>
                <div className="journey-label">
                  <span>{step}</span>
                </div>
                <div className={`journey-photo journey-${step.toLowerCase()}`}>
                  <Photo
                    media={media[i]}
                    sizes="(max-width:767px) 30vw, 15vw"
                    decorative
                  />
                  {i === 0 && (
                    <div className="booking-ticket">
                      <span>SHOOT</span>
                      <strong>Booked</strong>
                      <Check size={18} />
                    </div>
                  )}
                  {i === 3 && (
                    <div className="edit-tracks">
                      <i />
                      <i />
                      <i />
                    </div>
                  )}
                  <FrameCorners />
                </div>
                {i < 4 && <ArrowRight className="workflow-arrow" size={16} />}
              </li>
            ))}
          </ol>
          <div
            className="deliver-branch"
            aria-label="From Deliver, Caplist creates five additional products"
          >
            <div className="branch-origin" />
            <div className="branch-bar" />
            <div className="branch-brand">
              <CaplistMark size={23} />
              <span>
                Same capture. <strong>Additional delivery by Caplist.</strong>
              </span>
            </div>
          </div>
          <div className="possibility-grid">
            {products.map((product) => (
              <a
                href={`#${product.id}`}
                className="possibility"
                key={product.id}
              >
                <div className="possibility-photo">
                  <Photo
                    media={product.media}
                    sizes="(max-width:767px) 40vw, 16vw"
                  />
                  <FrameCorners />
                </div>
                <h3>{product.name.replace("Alternative / ", "")}</h3>
              </a>
            ))}
          </div>
          <p className="opportunity-note">
            Your original delivery stays the same. Your offer gets bigger.
          </p>
        </div>
      </div>
    </section>
  );
}

function Transformation() {
  return (
    <section
      id="how-it-works"
      className="transformation chapter-section"
      aria-labelledby="transformation-title"
    >
      <div className="shell">
        <div className="how-composition">
          <div className="how-copy">
            <Chapter number="02">How Caplist works</Chapter>
            <h2 id="transformation-title">
              One capture.
              <br />
              <span className="muted-type">Multiple products.</span>
            </h2>
            <p>
              Turn your finished photos, property video and drone footage into
              new reels and edits. Choose from the products suited to your
              capture, then add them to your client’s delivery.
            </p>
            <a href="/#products" className="button button-blue">
              Explore the five products <ArrowUpRight size={18} />
            </a>
          </div>
          <div
            className="media-exploded"
            aria-label="Photography, video, drone and vertical media become additional property products"
          >
            <div className="media-input-labels">
              {["Photos", "Video", "Drone", "Vertical"].map((x) => (
                <span key={x}>
                  {x}
                  <i />
                </span>
              ))}
            </div>
            <div className="media-plane plane-back">
              <Photo media="aerial" sizes="500px" />
              <span>THE WIDER VIEW</span>
              <FrameCorners />
            </div>
            <div className="media-plane plane-main">
              <Photo media="exterior" sizes="700px" />
              <span>THE PROPERTY STORY</span>
              <FrameCorners />
            </div>
            <div className="media-plane plane-front">
              <Photo media="kitchen" sizes="500px" />
              <span>THE DETAILS</span>
              <FrameCorners />
            </div>
            <div className="media-plane plane-vertical">
              <Photo media="living" sizes="300px" />
              <span>9:16</span>
              <FrameCorners />
            </div>
          </div>
        </div>
        <div className="assessment-strip">
          <span className="eyebrow">A professional standard at every step</span>
          {[
            "Scene selection",
            "Quality assessment",
            "Format eligibility",
            "Product matching",
          ].map((x) => (
            <span key={x}>
              <Check size={18} />
              {x}
            </span>
          ))}
        </div>
        <div className="source-outcomes">
          <div>
            <span className="eyebrow">01 / Photography</span>
            <h3>Stills become a story.</h3>
            <p>Professionally edited photos</p>
            <ArrowDown />
            <strong>Photo Reel</strong>
          </div>
          <div>
            <span className="eyebrow">02 / Property video</span>
            <h3>One film. New perspectives.</h3>
            <p>Suitable footage and feature coverage</p>
            <ArrowDown />
            <strong>
              Vertical Video Reel · Property Teaser · Feature Reel
            </strong>
          </div>
          <div>
            <span className="eyebrow">03 / Mixed capture</span>
            <h3>Bring it all together.</h3>
            <p>Photography, video and drone footage</p>
            <ArrowDown />
            <strong>Mixed Media Reel</strong>
          </div>
        </div>
        <p className="how-note">
          Already captured vertical? Suitable vertical clips can also support
          social reels and mixed-media stories.
        </p>
      </div>
    </section>
  );
}

function Catalogue() {
  return (
    <section
      id="products"
      className="catalogue light-section chapter-section"
      aria-labelledby="catalogue-title"
    >
      <div className="shell">
        <div className="catalogue-reference-heading">
          <div>
            <Chapter number="03">Product catalogue</Chapter>
            <h2 id="catalogue-title">
              Professional products,
              <br />
              ready to sell.
            </h2>
          </div>
          <p>
            Give your clients more ways to market a property. Social reels,
            listing teasers and feature edits — created from the media you
            already have.
          </p>
          <a href="/examples" className="text-link">
            See example products <ArrowUpRight size={18} />
          </a>
        </div>
        <div className="reference-catalogue">
          {products.map((product) => (
            <article id={product.id} key={product.id}>
              <div className="reference-product-image">
                <Photo
                  media={product.media}
                  sizes="(max-width:767px) 90vw, 22vw"
                />
                <FrameCorners />
                <span className="reference-ratio">{product.ratio}</span>
                <PreviewButton product={product} className="reference-preview">
                  <span className="sr-only">Preview {product.name}</span>
                  <ArrowUpRight size={22} />
                </PreviewButton>
              </div>
              <h3>{product.name.replace("Alternative / ", "")}</h3>
              <p className="product-meta">
                {product.duration} · {product.ratio}
              </p>
              <p>{product.purpose}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Standards() {
  return (
    <section
      id="standards"
      className="standards chapter-section"
      aria-labelledby="standards-title"
    >
      <div className="shell standards-reference">
        <div className="standards-story">
          <Chapter number="04">Built for media professionals</Chapter>
          <h2 id="standards-title">
            Your craft.
            <br />
            In every product.
          </h2>
          <p>
            You create professional property media. Caplist helps you get more
            from it — with considered edits that reflect the quality of your
            work.
          </p>
          <p>
            Start with sharp, high-resolution photos and well-shot footage. Give
            your clients more content you’re proud to deliver.
          </p>
          <a href="/examples" className="button button-blue">
            See the finished look <ArrowUpRight size={18} />
          </a>
        </div>
        <div className="professional-console">
          <div className="console-title">
            <span className="eyebrow">
              Professional media. Client-ready products.
            </span>
            <span>EXAMPLE</span>
          </div>
          <div className="console-main">
            <div className="console-image">
              <Photo media="exterior" sizes="500px" />
              <FrameCorners />
            </div>
            <dl>
              {[
                ["Detail", "Sharp & clear"],
                ["Resolution", "High quality"],
                ["Exposure", "Balanced"],
                ["Composition", "Considered"],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt>{k}</dt>
                  <dd>
                    <Check size={15} />
                    {v}
                  </dd>
                </div>
              ))}
            </dl>
            <div className="quality-seal">
              <CheckCheck size={32} />
              <strong>PRO</strong>
              <span>FROM THE START</span>
            </div>
          </div>
          <div className="console-filmstrip">
            {(
              [
                "exterior",
                "living",
                "kitchen",
                "aerial",
                "exterior",
              ] as MediaKey[]
            ).map((m, i) => (
              <div key={i}>
                <Photo media={m} sizes="150px" decorative />
              </div>
            ))}
          </div>
        </div>
        <div className="delivery-checks">
          <p className="eyebrow">More for your clients</p>
          {products.map((p) => (
            <span key={p.id}>
              <Check size={18} />
              {p.name.replace("Alternative / ", "")}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Close() {
  return (
    <section className="commercial-close" aria-labelledby="close-title">
      <Photo media="exterior" sizes="100vw" />
      <div className="close-shade" />
      <div className="shell close-content">
        <Chapter number="05">Your next opportunity</Chapter>
        <h2 id="close-title">
          YOUR NEXT PRODUCT
          <br />
          MAY ALREADY BE
          <br />
          ON YOUR HARD DRIVE.
        </h2>
        <p>Capture once. Create more. Sell more.</p>
        <a className="button button-blue" href="/#products">
          See what your media can create
          <ArrowUpRight size={18} />
        </a>
        <div className="close-equation">
          <div>
            <strong>1</strong>
            <span>PROPERTY VISIT</span>
          </div>
          <Plus size={20} />
          <div>
            <strong>5</strong>
            <span>POTENTIAL PRODUCTS</span>
          </div>
          <ArrowRight size={24} />
          <div>
            <strong>More.</strong>
            <span>FROM EVERY CAPTURE</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="footer-top">
          <a href="/#top" aria-label="Caplist Studio home">
            <CaplistLogo />
          </a>
          <p>
            Professional media.
            <br />
            <span>More opportunity.</span>
          </p>
          <a href="/#top" className="text-link">
            Back to top
            <ArrowUpRight size={16} />
          </a>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Caplist Studio</span>
          <nav aria-label="Footer navigation">
            <a href="/#products">Products</a>
            <a href="/#how-it-works">How Caplist Works</a>
            <a href="/#for-media-businesses">For Media Businesses</a>
            <a href="/pricing">Pricing</a>
            <a href="/resources">Resources</a>
          </nav>
          <span>Static visual preview / 01</span>
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
      <main id="main-content">
        <Hero />
        <Opportunity />
        <Transformation />
        <Catalogue />
        <Standards />
        <Close />
      </main>
      <Footer />
    </>
  );
}
