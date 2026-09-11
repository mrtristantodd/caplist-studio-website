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
              <span>TWILIGHT EXTERIOR</span>
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
  return (
    <section
      id="for-media-businesses"
      className="opportunity light-section chapter-section"
      aria-labelledby="opportunity-title"
    >
      <div className="shell">
        <div className="opportunity-heading">
          <div>
            <Chapter number="01">The commercial opportunity</Chapter>
            <h2 id="opportunity-title">
              THE EXPENSIVE
              <br />
              PART ALREADY
              <br />
              <span className="muted-type">HAPPENED.</span>
            </h2>
          </div>
          <div className="opportunity-intro">
            <p>
              You’ve booked the job. Made the trip. Captured the property.
              Delivered the edit.
            </p>
            <p>
              The hard work is already in the files.
              <br />
              <strong>Now make more of what’s there.</strong>
            </p>
          </div>
        </div>
        <ol className="lifecycle">
          {["Book", "Travel", "Capture", "Edit", "Deliver"].map((step, i) => (
            <li key={step}>
              <span className="step-number">0{i + 1}</span>
              <span>{step}</span>
              {i === 4 ? <Check size={20} /> : <ArrowRight size={20} />}
            </li>
          ))}
        </ol>
        <div className="opportunity-branch">
          <div className="capture-sheet">
            <div className="sheet-photo">
              <Photo media="exterior" sizes="(max-width: 767px) 80vw, 30vw" />
              <FrameCorners />
            </div>
            <div className="sheet-small">
              <Photo media="living" sizes="200px" />
            </div>
            <span className="sheet-caption">THE CAPTURE YOU ALREADY HAVE</span>
          </div>
          <div className="branch-copy">
            <div className="branch-connector">
              <span />
              <Plus size={26} />
              <span />
            </div>
            <h3>
              One property visit.
              <br />
              <span>More to put on the invoice.</span>
            </h3>
            <p>
              Extend an existing delivery with a teaser, a vertical edit or a
              photo reel. Additional products from professional media you’ve
              already created.
            </p>
            <a href="#how-it-works" className="text-link">
              See what’s possible
              <ArrowUpRight size={18} />
            </a>
          </div>
          <div className="opportunity-outputs">
            <span className="eyebrow">Same capture. More products.</span>
            {products.map((p) => (
              <a href={`#${p.id}`} key={p.id}>
                <span>
                  {p.name === "Alternative / Feature Reel"
                    ? "Feature Reel"
                    : p.name}
                </span>
                <ArrowUpRight size={16} />
              </a>
            ))}
          </div>
        </div>
        <div className="opportunity-bottom">
          <span>ONE PROPERTY VISIT</span>
          <ArrowRight size={18} />
          <span>EXISTING CAPTURE</span>
          <ArrowRight size={18} />
          <strong>MULTIPLE ADDITIONAL PRODUCTS</strong>
        </div>
      </div>
    </section>
  );
}

function Transformation() {
  const stages = [
    {
      number: "01",
      title: "Start with photography",
      media: ["living", "kitchen"] as MediaKey[],
      inputs: "PHOTOS",
      outputs: ["Photo Reel"],
      note: "Give a stills-only shoot a second life.",
    },
    {
      number: "02",
      title: "Add property video",
      media: ["exterior"] as MediaKey[],
      inputs: "PHOTOS + VIDEO",
      outputs: [
        "Photo Reel",
        "Vertical Video Reel",
        "Property Teaser",
        "Feature Reel",
      ],
      note: "More coverage. More ways to tell the story.",
    },
    {
      number: "03",
      title: "Bring in the wider view",
      media: ["aerial"] as MediaKey[],
      inputs: "PHOTOS + VIDEO + DRONE",
      outputs: ["All previous products", "Mixed Media Reel"],
      note: "Connect the home to its surroundings.",
    },
  ];
  return (
    <section
      id="how-it-works"
      className="transformation chapter-section"
      aria-labelledby="transformation-title"
    >
      <div className="shell">
        <div className="section-heading">
          <div>
            <Chapter number="02">How Caplist works</Chapter>
            <h2 id="transformation-title">
              ONE CAPTURE.
              <br />
              <span className="muted-type">MULTIPLE PRODUCTS.</span>
            </h2>
          </div>
          <p>
            The catalogue starts with your media.
            <br />
            What you supply determines what you can create. Every output must
            meet the professional standard.
          </p>
        </div>
        <div className="transformation-stages">
          {stages.map((stage) => (
            <article
              className={`transform-stage stage-${stage.number}`}
              key={stage.number}
            >
              <div className="stage-top">
                <span>{stage.number}</span>
                <h3>{stage.title}</h3>
              </div>
              <div className={`stage-media stage-media-${stage.media.length}`}>
                {stage.media.map((media) => (
                  <div className="stage-photo" key={media}>
                    <Photo
                      media={media}
                      sizes="(max-width: 767px) 85vw, 32vw"
                    />
                    <FrameCorners />
                  </div>
                ))}
                <span className="image-label">{stage.inputs}</span>
              </div>
              <div className="stage-flow">
                <span /> <ArrowDown size={18} /> <span />
              </div>
              <ul className="stage-outputs">
                {stage.outputs.map((output, i) => (
                  <li
                    key={output}
                    className={
                      stage.number !== "01" && i === 0 ? "previous-output" : ""
                    }
                  >
                    <Check size={15} />
                    {output}
                  </li>
                ))}
              </ul>
              <p className="stage-note">{stage.note}</p>
            </article>
          ))}
        </div>
        <div className="vertical-footnote">
          <span className="format-symbol" aria-hidden="true">
            9:16
          </span>
          <p>
            <strong>Already captured vertical?</strong> Suitable vertical clips
            can also support social-first reels and mixed-media stories.
          </p>
          <span className="eyebrow">Source-led. Standard-led.</span>
        </div>
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
