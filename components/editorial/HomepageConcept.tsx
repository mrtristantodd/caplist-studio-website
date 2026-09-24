import { ArrowRight, Check, Play } from "lucide-react";
import { CaplistMark } from "@/components/brand/CaplistLogo";
import { products } from "@/lib/demo-media";
import { Photo } from "./Photo";
import { SiteHeader } from "./SiteHeader";
import { AccessLink } from "./StudioUI";
import { Footer } from "./MarketingPage";
import styles from "@/app/concepts/concepts.module.css";

type Variant = "editorial" | "animated";

const productNames = [
  "Photo Reel",
  "Vertical Video Reel",
  "Property Teaser",
  "Feature Reel",
  "Mixed Media",
];

const benefits = [
  [
    "Make each booking worth more",
    "Add finished visual products to a property order instead of relying only on more shoots for growth.",
  ],
  [
    "Avoid another editing queue",
    "Caplist handles the production work, so adding a product does not mean adding another full manual edit.",
  ],
  [
    "Keep the client relationship",
    "Your agent buys from you. You decide what to offer, how to package it and what to charge.",
  ],
] as const;

function ConceptHero({ variant }: { variant: Variant }) {
  return (
    <section className={styles.hero} id="top">
      <div className={`shell ${styles.heroGrid}`}>
        <div className={styles.heroCopy}>
          <p className={styles.kicker}>Capture once. Sell more.</p>
          <h1>
            Turn every property shoot into <span>more products your clients can buy.</span>
          </h1>
          <p className={styles.lead}>
            Caplist Studio turns the professional photos, video and drone media
            you already capture into additional finished visual products — so
            you can grow the value of each job without another property visit or
            another manual editing queue.
          </p>
          <div className={styles.actions}>
            <AccessLink />
            <a className={styles.textLink} href="/demo">
              Book a demo <ArrowRight size={18} />
            </a>
          </div>
          <p className={styles.audience}>
            Built for professional real-estate photographers, videographers and
            property-media businesses.
          </p>
        </div>

        {variant === "animated" ? <HeroMiniAnimation /> : <HeroEditorialBoard />}
      </div>

      <div className={`shell ${styles.valueStrip}`}>
        <span>Same shoot.</span>
        <span>Same client.</span>
        <span>More products.</span>
        <strong>More revenue opportunity.</strong>
      </div>
    </section>
  );
}

function HeroEditorialBoard() {
  return (
    <div className={styles.editorialBoard} aria-label="One shoot can become more products">
      <div className={styles.boardLabel}>One completed property shoot</div>
      <div className={styles.boardMedia}>
        <div className={styles.boardPhoto}>
          <Photo media="suburban" sizes="(max-width:900px) 88vw, 42vw" priority />
        </div>
        <div className={styles.mediaTags}>
          <span>27 photos</span>
          <span>Property video</span>
          <span>Drone</span>
        </div>
      </div>
      <div className={styles.boardArrow}>
        <ArrowRight size={18} />
        <span>Caplist Studio</span>
      </div>
      <div className={styles.boardProducts}>
        {productNames.map((name) => (
          <span key={name}>{name}</span>
        ))}
      </div>
      <p>One completed job can become a bigger product menu.</p>
    </div>
  );
}

function HeroMiniAnimation() {
  return (
    <div className={styles.miniDemo} aria-label="Animated Caplist Studio workflow preview">
      <div className={styles.miniTopline}>
        <span>14 River Street</span>
        <span>Completed shoot</span>
      </div>
      <div className={styles.miniStage}>
        <div className={`${styles.miniFrame} ${styles.miniFrameOne}`}>
          <strong>Media uploaded</strong>
          <div className={styles.miniCounts}>
            <span>27 photos</span>
            <span>1 video</span>
            <span>Drone</span>
          </div>
        </div>
        <div className={`${styles.miniFrame} ${styles.miniFrameTwo}`}>
          <CaplistMark size={34} onDark />
          <strong>Checking what this shoot can become…</strong>
          <div className={styles.progressTrack}><span /></div>
        </div>
        <div className={`${styles.miniFrame} ${styles.miniFrameThree}`}>
          <span className={styles.miniSuccess}>5 products available</span>
          <div className={styles.miniProductList}>
            {productNames.slice(0, 4).map((name) => <span key={name}>{name}</span>)}
          </div>
        </div>
      </div>
      <p>See the opportunity before you decide what to create.</p>
    </div>
  );
}

function OpportunitySection() {
  return (
    <section className={styles.paperSection}>
      <div className={`shell ${styles.split}`}>
        <div>
          <p className={styles.kicker}>The economics are already in your favour</p>
          <h2>The shoot is finished. The earning opportunity doesn’t have to be.</h2>
        </div>
        <div className={styles.prose}>
          <p>
            By delivery day, you have already paid for the expensive part of the
            job: booking, travel, equipment, capture and primary editing.
          </p>
          <p>
            Caplist helps the same completed job work harder by turning suitable
            media into additional products the same client can buy.
          </p>
          <strong>No second visit. No second capture. No full edit from scratch.</strong>
        </div>
      </div>
    </section>
  );
}

function StaticHowItWorks() {
  const steps = [
    ["01", "Upload the completed job", "Add the professional media you already captured for the property."],
    ["02", "See what else you could sell", "Caplist checks the media and shows the additional products that make sense for that property."],
    ["03", "Choose the product", "You make a few focused choices. Caplist handles the production and you review the result."],
    ["04", "Sell it through your business", "Deliver it through your existing workflow, to your client, at the price you decide."],
  ] as const;

  return (
    <section className={styles.darkSection} id="how-it-works">
      <div className="shell">
        <div className={styles.sectionIntro}>
          <p className={styles.kicker}>Simple for you</p>
          <h2>From completed shoot to another sellable product.</h2>
          <p>Caplist does the production work. You decide what is worth creating.</p>
        </div>
        <div className={styles.stepsGrid}>
          {steps.map(([number, title, description]) => (
            <article key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function AnimatedWalkthrough() {
  return (
    <section className={styles.walkthroughSection} id="walkthrough">
      <div className={`shell ${styles.walkthroughGrid}`}>
        <div className={styles.walkthroughCopy}>
          <p className={styles.kicker}>Watch one completed job become more to sell</p>
          <h2>Upload the media. See the opportunities. Choose what to create.</h2>
          <p>
            The point is not to give you another editor to learn. The point is
            to make an additional product available with a handful of decisions.
          </p>
          <ul>
            <li><Check size={17} /> Uses media already captured</li>
            <li><Check size={17} /> Shows the products that fit the property</li>
            <li><Check size={17} /> Keeps creative control focused and simple</li>
            <li><Check size={17} /> Produces a finished output you can sell</li>
          </ul>
        </div>

        <div className={styles.appDemo} aria-label="Animated demonstration of the Caplist Studio workflow">
          <div className={styles.appChrome}>
            <span className={styles.appBrand}><CaplistMark size={24} onDark /> CAPLIST STUDIO</span>
            <span>PROJECT / 14 RIVER STREET</span>
          </div>
          <div className={styles.appBody}>
            <div className={`${styles.demoScene} ${styles.sceneUpload}`}>
              <div className={styles.demoHeading}>
                <span>01 / MEDIA</span>
                <strong>Completed property shoot uploaded</strong>
              </div>
              <div className={styles.assetGrid}>
                <div><Photo media="familyLiving" sizes="180px" /><span>27 photos</span></div>
                <div><Photo media="suburban" sizes="180px" /><span>Property video</span></div>
                <div><Photo media="aerial" sizes="180px" /><span>Drone</span></div>
              </div>
            </div>

            <div className={`${styles.demoScene} ${styles.sceneAnalyse}`}>
              <div className={styles.demoHeading}>
                <span>02 / CHECK</span>
                <strong>Caplist checks what the media can support</strong>
              </div>
              <div className={styles.analysisPanel}>
                <div className={styles.analysisIcon}><CaplistMark size={44} onDark /></div>
                <p>Looking at media type, quality and suitability for additional products.</p>
                <div className={styles.analysisRows}>
                  <span>Photography <b>Ready</b></span>
                  <span>Property video <b>Ready</b></span>
                  <span>Drone <b>Ready</b></span>
                </div>
              </div>
            </div>

            <div className={`${styles.demoScene} ${styles.sceneProducts}`}>
              <div className={styles.demoHeading}>
                <span>03 / OPPORTUNITY</span>
                <strong>5 additional products available</strong>
              </div>
              <div className={styles.demoProducts}>
                {productNames.map((name, index) => (
                  <div className={index === 1 ? styles.selectedProduct : ""} key={name}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <strong>{name}</strong>
                    {index === 1 && <small>Selected</small>}
                  </div>
                ))}
              </div>
            </div>

            <div className={`${styles.demoScene} ${styles.sceneCreate}`}>
              <div className={styles.demoHeading}>
                <span>04 / CREATE</span>
                <strong>Vertical Video Reel</strong>
              </div>
              <div className={styles.createGrid}>
                <div className={styles.choicePanel}>
                  <label>Style <b>Cinematic</b></label>
                  <label>Duration <b>25 sec</b></label>
                  <label>Music <b>Modern</b></label>
                  <button type="button">Create reel <ArrowRight size={16} /></button>
                </div>
                <div className={styles.phonePreview}>
                  <Photo media="living" sizes="190px" />
                  <span><Play size={18} fill="currentColor" /></span>
                </div>
              </div>
            </div>

            <div className={`${styles.demoScene} ${styles.sceneReady}`}>
              <div className={styles.readyCard}>
                <div className={styles.readyPreview}>
                  <Photo media="living" sizes="240px" />
                  <span><Play size={20} fill="currentColor" /></span>
                </div>
                <div>
                  <span className={styles.readyStatus}>READY</span>
                  <h3>Vertical Video Reel</h3>
                  <p>Same shoot. Another finished product to sell.</p>
                  <button type="button">Review output</button>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.demoTimeline} aria-hidden="true"><span /></div>
        </div>
      </div>
    </section>
  );
}

function ProductSection() {
  return (
    <section className={styles.paperSection} id="products">
      <div className="shell">
        <div className={styles.sectionIntroWide}>
          <div>
            <p className={styles.kicker}>A bigger product menu from the same capture</p>
            <h2>What else could you sell from a completed property shoot?</h2>
          </div>
          <p>
            Different media opens different opportunities. The important part is
            that each one becomes a finished product you can offer without
            starting the job again.
          </p>
        </div>
        <div className={styles.productGrid}>
          {products.map((product) => (
            <article key={product.id}>
              <div className={styles.productImage}>
                <Photo media={product.media} sizes="(max-width:760px) 90vw, 30vw" />
                <span>{product.duration} · {product.ratio}</span>
              </div>
              <div className={styles.productCopy}>
                <h3>{product.name.replace("Alternative / ", "")}</h3>
                <p>{product.purpose}</p>
                <small>Works with: {product.needs}</small>
              </div>
            </article>
          ))}
        </div>
        <a className={styles.textLinkDark} href="/examples">
          Explore all product examples <ArrowRight size={18} />
        </a>
      </div>
    </section>
  );
}

function BenefitSection() {
  return (
    <section className={styles.benefitSection} id="for-media-businesses">
      <div className="shell">
        <div className={styles.sectionIntro}>
          <p className={styles.kicker}>Why it matters commercially</p>
          <h2>Make more from each job — not only from doing more jobs.</h2>
          <p>
            Growth does not have to mean another photographer on the road or
            another editor in the queue.
          </p>
        </div>
        <div className={styles.benefitGrid}>
          {benefits.map(([title, description], index) => (
            <article key={title}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function QualitySection() {
  return (
    <section className={styles.qualitySection}>
      <div className={`shell ${styles.qualityGrid}`}>
        <div>
          <p className={styles.kicker}>Professional in. Professional out.</p>
          <h2>Automation only helps if the finished product is good enough to carry your name.</h2>
          <p>
            Caplist is designed for professional media businesses. It checks the
            source media before offering products and does not treat every file
            as suitable for every output.
          </p>
          <strong>Quality is a gate, not an afterthought.</strong>
        </div>
        <div className={styles.qualityImage}>
          <Photo media="familyKitchen" sizes="(max-width:760px) 90vw, 46vw" />
          <div>
            <span>Source suitability</span>
            <span>Property fidelity</span>
            <span>Professional finish</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function WorkflowSection() {
  return (
    <section className={styles.paperSection}>
      <div className="shell">
        <div className={styles.sectionIntroWide}>
          <div>
            <p className={styles.kicker}>Keep the business you already run</p>
            <h2>Caplist slots into your workflow after the primary edit.</h2>
          </div>
          <p>
            Keep your CRM, booking system, delivery platform and agent
            relationships. Caplist adds another production step only when there
            is a product worth creating.
          </p>
        </div>
        <div className={styles.workflowRow}>
          {[
            ["01", "Capture", "Your normal property shoot"],
            ["02", "Primary edit", "Your existing delivery workflow"],
            ["03", "Caplist", "Create additional products"],
            ["04", "Sell & deliver", "Your client, your price"],
          ].map(([number, title, text], index) => (
            <div className={index === 2 ? styles.workflowHighlight : ""} key={number}>
              <span>{number}</span>
              <strong>{title}</strong>
              <p>{text}</p>
            </div>
          ))}
        </div>
        <div className={styles.endState}>
          <h2>Your client. Your service. <span>Your price.</span></h2>
          <p>
            Caplist creates more product capacity. You decide how to turn it into
            revenue.
          </p>
          <AccessLink />
        </div>
      </div>
    </section>
  );
}

export function HomepageConcept({ variant }: { variant: Variant }) {
  return (
    <>
      <a href="#concept-main" className="skip-link">Skip to content</a>
      <SiteHeader />
      <main id="concept-main" className={styles.page}>
        <ConceptHero variant={variant} />
        {variant === "animated" ? <AnimatedWalkthrough /> : <StaticHowItWorks />}
        <OpportunitySection />
        {variant === "animated" ? <StaticHowItWorks /> : null}
        <ProductSection />
        <BenefitSection />
        <QualitySection />
        <WorkflowSection />
      </main>
      <Footer />
    </>
  );
}
