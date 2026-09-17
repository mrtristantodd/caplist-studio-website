import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SiteHeader } from "@/components/editorial/SiteHeader";
import { Footer } from "@/components/editorial/MarketingPage";
import { PropertyPhoto, type PropertyPhotoKey } from "./PropertyPhoto";
import { ProductWalkthrough } from "./ProductWalkthrough";
import styles from "./homepage.module.css";

const showroom: {
  name: string;
  ratio: string;
  duration: string;
  photo: PropertyPhotoKey;
  description: string;
  id: string;
}[] = [
  {
    name: "Vertical Video Reel",
    ratio: "9:16",
    duration: "20–30 sec",
    photo: "kitchen",
    description:
      "Another social-ready video from footage you already captured.",
    id: "vertical-reel",
  },
  {
    name: "Property Teaser",
    ratio: "16:9",
    duration: "10–15 sec",
    photo: "living",
    description: "A short first look. An easy addition to the order.",
    id: "property-teaser",
  },
  {
    name: "Feature Reel",
    ratio: "16:9",
    duration: "30–45 sec",
    photo: "balcony",
    description: "Give a standout space its own story.",
    id: "feature-reel",
  },
  {
    name: "Photo Reel",
    ratio: "9:16",
    duration: "15–30 sec",
    photo: "bedroom",
    description: "The photo set you delivered, now in motion.",
    id: "photo-reel",
  },
  {
    name: "Mixed Media Reel",
    ratio: "16:9",
    duration: "30–60 sec",
    photo: "living",
    description: "Photography, video and aerials in one complete edit.",
    id: "mixed-media",
  },
];

export function HomepageV2() {
  return (
    <div className={styles.page}>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteHeader light />
      <main id="main-content">
        <section className={`${styles.hero} ${styles.wrap}`} id="top">
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>Capture once. Sell more.</p>
            <h1>
              Turn every property shoot into{" "}
              <span>more products your clients can buy.</span>
            </h1>
            <p className={styles.lead}>
              Turn the professional photos and footage you already capture into
              finished reels, teasers and feature edits. More to offer from
              every shoot.
            </p>
            <div className={styles.actions}>
              <a className={styles.button} href="#how-it-works">
                See Caplist in action <ArrowRight size={18} />
              </a>
              <a className={styles.textLink} href="/demo">
                Book a demo <ArrowUpRight size={17} />
              </a>
            </div>
            <p className={styles.audience}>
              For professional real-estate photographers,
              <br className={styles.desktopBreak} /> videographers and media
              businesses.
            </p>
          </div>
          <figure className={styles.heroFigure}>
            <div className={styles.heroImage}>
              <PropertyPhoto
                photo="living"
                priority
                sizes="(max-width:960px) 92vw, 70vw"
              />
              <span className={styles.corner} aria-hidden="true" />
            </div>
            <figcaption>
              <span>One completed shoot.</span>
              <strong>More to create.</strong>
            </figcaption>
          </figure>
        </section>
        <section
          className={`${styles.walkthrough} ${styles.wrap}`}
          id="how-it-works"
          aria-labelledby="walkthrough-heading"
        >
          <div className={styles.sectionTop}>
            <div>
              <p className={styles.eyebrow}>
                From your media to your next product
              </p>
              <h2 id="walkthrough-heading">One shoot. See what comes next.</h2>
            </div>
            <span className={styles.sectionIndex}>01 / THE STUDIO</span>
          </div>
          <ProductWalkthrough />
        </section>
        <section className={`${styles.opportunity} ${styles.wrap}`}>
          <p className={styles.eyebrow}>
            More from the work you’ve already done
          </p>
          <div className={styles.split}>
            <h2>
              The shoot is finished.
              <br />
              <span>There’s more to sell.</span>
            </h2>
            <p>
              You’ve already done the capture and the edit. Give the same client
              more to choose from, using the media you already have.
            </p>
          </div>
        </section>
        <section className={`${styles.products} ${styles.wrap}`} id="products">
          <div className={styles.sectionTop}>
            <div>
              <p className={styles.eyebrow}>Your next additions to the order</p>
              <h2>
                A bigger menu.
                <br />
                From the same shoot.
              </h2>
            </div>
            <a className={styles.textLink} href="/examples">
              Explore the products <ArrowUpRight size={18} />
            </a>
          </div>
          <div className={styles.showroom}>
            {showroom.map((product, index) => (
              <article
                key={product.id}
                className={`${styles.product} ${styles[`product${index}`]}`}
              >
                <a
                  className={`${styles.productImage} ${product.ratio === "9:16" ? styles.portrait : styles.landscape}`}
                  href="/examples"
                  aria-label={`Explore ${product.name}`}
                >
                  <PropertyPhoto
                    photo={product.photo}
                    sizes={
                      product.ratio === "9:16"
                        ? "(max-width:640px) 200vw, (max-width:960px) 120vw, 75vw"
                        : "(max-width:640px) 90vw, (max-width:960px) 44vw, 48vw"
                    }
                  />
                  <span className={styles.productFormat}>{product.ratio}</span>
                  <span className={styles.productArrow}>
                    <ArrowUpRight size={23} />
                  </span>
                </a>
                <div className={styles.productTitle}>
                  <h3>{product.name}</h3>
                  <span>{product.duration}</span>
                </div>
                <p>{product.description}</p>
              </article>
            ))}
          </div>
          <p className={styles.availability}>
            Available products depend on the media in each project.
          </p>
        </section>
        <section
          className={`${styles.outcomes} ${styles.wrap}`}
          id="for-media-businesses"
          aria-label="What it means for your business"
        >
          {[
            [
              "More per job.",
              "More finished products for the clients you already have.",
            ],
            [
              "No return visit.",
              "Start with the media from the completed shoot.",
            ],
            [
              "Less production work.",
              "Choose the direction. Caplist handles the edit.",
            ],
          ].map(([title, copy]) => (
            <div key={title}>
              <h2>{title}</h2>
              <p>{copy}</p>
            </div>
          ))}
        </section>
        <section className={`${styles.quality} ${styles.wrap}`}>
          <div className={styles.qualityVisual}>
            <div className={styles.sourceImage}>
              <PropertyPhoto
                photo="kitchen"
                sizes="(max-width:760px) 85vw, 44vw"
              />
              <span>Original photograph</span>
            </div>
            <div className={styles.cropImage}>
              <PropertyPhoto
                photo="kitchen"
                sizes="(max-width:760px) 38vw, 20vw"
              />
              <span>9:16</span>
            </div>
          </div>
          <div className={styles.qualityCopy}>
            <p className={styles.eyebrow}>Made from your media</p>
            <h2>
              Your work.
              <br />
              Beautifully carried through.
            </h2>
            <p>
              The same property. The same details. A new way for your client to
              show them.
            </p>
            <a className={styles.textLink} href="/examples">
              See the product formats <ArrowUpRight size={18} />
            </a>
          </div>
        </section>
        <section className={`${styles.workflow} ${styles.wrap}`}>
          <div className={styles.sectionTop}>
            <h2>
              Fits right into
              <br />
              your working day.
            </h2>
            <p>Your client. Your service. Your price.</p>
          </div>
          <ol>
            {[
              ["Capture", "Shoot as you normally do."],
              ["Edit", "Finish your primary media."],
              ["Caplist", "Create something more."],
              ["Review & deliver", "Make it part of your offer."],
            ].map(([title, copy], i) => (
              <li key={title} className={i === 2 ? styles.caplistStep : ""}>
                <span>0{i + 1}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
                {i < 3 && <ArrowRight aria-hidden="true" size={20} />}
              </li>
            ))}
          </ol>
        </section>
        <section className={styles.finalCta}>
          <div className={styles.wrap}>
            <p className={styles.eyebrow}>Capture once. Sell more.</p>
            <h2>
              What else could
              <br />
              your last shoot sell?
            </h2>
            <a className={styles.button} href="/demo">
              Let’s look at a property <ArrowUpRight size={19} />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
