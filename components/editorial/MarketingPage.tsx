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
            <a href="#products" className="button button-blue">
              See what your media can create
              <ArrowUpRight size={18} />
            </a>
            <a href="#how-it-works" className="text-link">
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
  const steps = [
    { name: "Book", detail: "The job is booked", media: "living" },
    { name: "Travel", detail: "One property visit", media: "aerial" },
    { name: "Capture", detail: "Your professional media", media: "exterior" },
    { name: "Edit", detail: "Your finished files", media: "kitchen" },
    { name: "Deliver", detail: "The original package", media: "exterior" },
  ] as const;
  return (
    <section
      id="for-media-businesses"
      className="opportunity light-section chapter-section"
      aria-labelledby="opportunity-title"
    >
      <div className="shell">
        <div className="opportunity-v2-heading">
          <div>
            <Chapter number="01">The commercial opportunity</Chapter>
            <h2 id="opportunity-title">
              The expensive part
              <br />
              already happened.
            </h2>
          </div>
          <p>
            You’ve booked, travelled, captured and delivered. The investment is
            already in your files.{" "}
            <strong>
              Turn that same capture into more products your clients can buy.
            </strong>
          </p>
        </div>
        <ol className="capture-journey">
          {steps.map((step, i) => (
            <li key={step.name}>
              <div className="journey-label">
                <span>
                  0{i + 1} / {step.name}
                </span>
                <Check size={18} />
              </div>
              <div
                className={`journey-photo journey-${step.name.toLowerCase()}`}
              >
                <Photo
                  media={step.media}
                  sizes="(max-width: 600px) 45vw, 20vw"
                  decorative
                />
                {i === 0 && (
                  <div className="booking-ticket">
                    <span>PROPERTY SHOOT</span>
                    <strong>Confirmed</strong>
                    <CheckCheck size={25} />
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
              <p>{step.detail}</p>
            </li>
          ))}
        </ol>
        <div
          className="core-promise"
          aria-label="One property visit, existing capture, multiple additional products"
        >
          <div>
            <span className="promise-number">01</span>
            <h3>
              One property
              <br />
              visit.
            </h3>
          </div>
          <ArrowRight className="promise-arrow" />
          <div>
            <span className="promise-number">
              <Scan />
            </span>
            <h3>
              Your existing
              <br />
              capture.
            </h3>
          </div>
          <ArrowRight className="promise-arrow" />
          <div className="promise-result">
            <span className="promise-number">05</span>
            <h3>
              Multiple additional
              <br />
              products.
            </h3>
          </div>
        </div>
        <div className="output-intro">
          <p className="eyebrow">Same capture. More products.</p>
          <p>A bigger offer, without another trip.</p>
        </div>
        <div className="possibility-grid">
          {products.map((product) => (
            <a href={`#${product.id}`} className="possibility" key={product.id}>
              <div className="possibility-photo">
                <Photo
                  media={product.media}
                  sizes="(max-width: 600px) 85vw, 25vw"
                />
                <FrameCorners />
                <span>{product.ratio}</span>
                <ArrowUpRight size={22} />
              </div>
              <h3>{product.name.replace("Alternative / ", "")}</h3>
              <p>
                {product.duration} · {product.ratio}
              </p>
            </a>
          ))}
        </div>
        <p className="opportunity-note">
          Five product possibilities. Availability depends on the coverage and
          quality of your media.
        </p>
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
              Start with the professional media you already have. Caplist
              assesses the content, quality and formats, then identifies the
              products that capture can support.
            </p>
            <a href="#products" className="button button-blue">
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
        <div className="section-heading">
          <div>
            <Chapter number="03">The product catalogue</Chapter>
            <h2 id="catalogue-title">
              PROFESSIONAL
              <br />
              PRODUCTS.
              <br />
              <span className="muted-type">READY TO SELL.</span>
            </h2>
          </div>
          <div className="catalogue-intro">
            <p>
              A considered collection of visual products. Created from your
              existing capture. Ready to become part of your offer.
            </p>
            <span className="eyebrow">05 products / More possibilities</span>
          </div>
        </div>
        <div className="editorial-catalogue">
          {products.map((product) => (
            <article
              id={product.id}
              className={`catalogue-product product-${product.number}`}
              key={product.id}
            >
              <div className="catalogue-media">
                <Photo
                  media={product.media}
                  sizes={
                    product.number === "05"
                      ? "(max-width: 767px) 100vw, 85vw"
                      : "(max-width: 767px) 90vw, 50vw"
                  }
                />
                <div className="photo-shade" />
                <FrameCorners />
                <div className="catalogue-overlay">
                  <span>{product.label}</span>
                  <span className="format-tag">{product.ratio}</span>
                </div>
                {product.number === "04" && (
                  <div className="photo-sequence">
                    {(["living", "kitchen", "exterior"] as MediaKey[]).map(
                      (media) => (
                        <div key={media}>
                          <Photo media={media} sizes="130px" decorative />
                        </div>
                      ),
                    )}
                  </div>
                )}
                {product.number === "05" && (
                  <div className="mixed-inset">
                    <Photo media="exterior" sizes="300px" />
                    <span>GROUND / AIR / DETAIL</span>
                  </div>
                )}
              </div>
              <div className="product-caption">
                <span className="product-index">{product.number}</span>
                <div className="product-copy">
                  <h3>{product.name}</h3>
                  <p>{product.purpose}</p>
                  <span className="product-requirements">{product.needs}</span>
                </div>
                <PreviewButton product={product} className="product-open">
                  <span className="sr-only">Preview {product.name}</span>
                  <ArrowUpRight size={24} />
                </PreviewButton>
              </div>
              <div className="product-specs">
                <span>{product.duration}</span>
                <span>{product.ratio}</span>
                <span>Visual concept</span>
              </div>
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
      <div className="shell">
        <div className="section-heading">
          <div>
            <Chapter number="04">Professional standards</Chapter>
            <h2 id="standards-title">
              ONLY WHAT
              <br />
              THE MEDIA
              <br />
              <span className="muted-type">CAN SUPPORT.</span>
            </h2>
          </div>
          <div>
            <p>Professional input. Professional output.</p>
            <p>
              Caplist assesses source media before a product becomes available.
              When the capture can’t support the result, that product stays
              unavailable.
            </p>
            <PreviewButton notice="resources" className="text-link">
              The capture checklist
              <ArrowUpRight size={18} />
            </PreviewButton>
          </div>
        </div>
        <div className="standards-assessment">
          <div className="assessment-image">
            <Photo media="exterior" sizes="(max-width: 767px) 90vw, 42vw" />
            <FrameCorners />
            <div className="assessment-caption">
              <span>
                <Video size={14} /> PROPERTY VIDEO / SOURCE FRAME
              </span>
              <span>4K</span>
            </div>
            <div className="assessment-crop">
              <FrameCorners />
              <span>VERTICAL-SAFE AREA</span>
            </div>
          </div>
          <div className="assessment-copy">
            <p className="eyebrow">
              <Scan size={15} /> An example of a suitable capture
            </p>
            <dl className="quality-metrics">
              {[
                ["Resolution", "4K source"],
                ["Sharpness", "Clear detail"],
                ["Exposure", "Balanced"],
                ["Motion stability", "Stable"],
                ["Composition", "Suitable"],
                ["Vertical reframe", "Subject retained"],
              ].map(([name, value]) => (
                <div key={name}>
                  <dt>{name}</dt>
                  <dd>
                    {value}
                    <Check size={15} />
                  </dd>
                </div>
              ))}
            </dl>
            <div className="eligibility available">
              <Check size={19} />
              <div>
                <strong>Vertical Video Reel available</strong>
                <span>The source supports the output.</span>
              </div>
            </div>
            <div className="eligibility unavailable">
              <Minus size={19} />
              <div>
                <strong>Below the standard? Unavailable.</strong>
                <span>
                  Poor resolution, heavy blur or insufficient footage won’t
                  unlock a premium output.
                </span>
              </div>
            </div>
            <p className="assessment-note">
              Illustrative assessment. No media is being analysed.
            </p>
          </div>
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
        <a className="button button-blue" href="#products">
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

function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="footer-top">
          <a href="#top" aria-label="Caplist Studio home">
            <CaplistLogo />
          </a>
          <p>
            Professional media.
            <br />
            <span>More opportunity.</span>
          </p>
          <a href="#top" className="text-link">
            Back to top
            <ArrowUpRight size={16} />
          </a>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Caplist Studio</span>
          <nav aria-label="Footer navigation">
            <a href="#products">Products</a>
            <a href="#how-it-works">How Caplist Works</a>
            <a href="#for-media-businesses">For Media Businesses</a>
            <PreviewButton notice="pricing">Pricing</PreviewButton>
            <PreviewButton notice="resources">Resources</PreviewButton>
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
