import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SiteHeader } from "@/components/editorial/SiteHeader";
import { Footer } from "@/components/editorial/MarketingPage";
import { homeCopy as copy } from "@/lib/approved-messaging";
import { products } from "@/lib/demo-media";
import { Photo } from "@/components/editorial/Photo";
import { HeroWorkflowDemo } from "@/components/home/HeroWorkflowDemo";
import styles from "./homepage.module.css";

function Paragraphs({ body }: { body: readonly string[] }) {
  return (
    <>
      {body.map((text) => (
        <p key={text}>{text}</p>
      ))}
    </>
  );
}
export function HomepageV2() {
  return (
    <div className={`marketing-v3 ${styles.page}`}>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteHeader light />
      <main id="main-content">
        <section className={`${styles.hero} ${styles.wrap}`} id="top">
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>{copy.hero.eyebrow}</p>
            <h1>{copy.hero.headline}</h1>
            <div className={styles.lead}>
              <Paragraphs body={copy.hero.body} />
            </div>
            <div className={styles.actions}>
              <a className={styles.button} href="#how-it-works">
                See Caplist in action <ArrowRight size={18} />
              </a>
              <a className={styles.textLink} href="/demo">
                Book a demo <ArrowUpRight size={17} />
              </a>
            </div>
            <p className={styles.audience}>{copy.hero.audience}</p>
          </div>
          <div className={styles.heroWorkflow} id="how-it-works">
            <HeroWorkflowDemo />
          </div>
        </section>
        {[copy.opportunity, copy.category].map((section) => (
          <section
            key={section.headline}
            className={`${styles.opportunity} ${styles.wrap} ${section === copy.category ? styles.graphite : ""}`}
          >
            <p className={styles.eyebrow}>{section.eyebrow}</p>
            <div className={styles.split}>
              <h2>{section.headline}</h2>
              <div className={styles.bodyCopy}>
                <Paragraphs body={section.body} />
                <p>
                  <strong>{section.closing}</strong>
                </p>
              </div>
            </div>
          </section>
        ))}
        <section className={`${styles.products} ${styles.wrap}`} id="products">
          <div className={styles.sectionTop}>
            <div>
              <p className={styles.eyebrow}>{copy.products.eyebrow}</p>
              <h2>{copy.products.headline}</h2>
            </div>
            <a className={styles.textLink} href="/examples">
              Products <ArrowUpRight size={18} />
            </a>
          </div>
          <div className={styles.introCopy}>
            <Paragraphs body={copy.products.body} />
          </div>
          <div className={styles.showroom}>
            {products.map((product, index) => (
              <article
                key={product.id}
                className={`${styles.product} ${styles[`product${index}`] || ""}`}
              >
                <a
                  className={`${styles.productImage} ${product.ratio === "9:16" ? styles.portrait : styles.landscape}`}
                  href={`/examples/#${product.id}`}
                  aria-label={`Explore ${product.name}`}
                >
                  <Photo
                    media={product.media}
                    sizes={
                      product.ratio === "9:16"
                        ? "(max-width:640px) 200vw, 100vw"
                        : "(max-width:640px) 90vw, 50vw"
                    }
                  />
                  <span className={styles.productFormat}>{product.ratio}</span>
                  <span className={styles.productArrow}>
                    <ArrowUpRight size={23} />
                  </span>
                </a>
                <div className={styles.productTitle}>
                  <h3>
                    <a href={`/examples/#${product.id}`}>{product.name}</a>
                  </h3>
                </div>
                <p>{product.purpose}</p>
              </article>
            ))}
          </div>
        </section>
        <section
          className={`${styles.opportunity} ${styles.wrap}`}
          id="for-media-businesses"
        >
          <p className={styles.eyebrow}>{copy.outcomes.eyebrow}</p>
          <h2>Commercial benefits</h2>
          <div className={styles.introCopy}>
            <p className={styles.outcomeLead}>{copy.outcomes.headline}</p>
            <Paragraphs body={copy.outcomes.body} />
          </div>
          <div className={styles.outcomeGrid}>
            {copy.outcomes.items.map(([title, body]) => (
              <article key={title}>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </section>
        <section className={`${styles.quality} ${styles.wrap}`} id="standards">
          <div className={styles.qualityVisual}>
            <div className={styles.sourceImage}>
              <Photo
                media="familyKitchen"
                sizes="(max-width:760px) 85vw, 44vw"
              />
              <span>Original photograph</span>
            </div>
            <div className={styles.cropImage}>
              <Photo
                media="familyKitchen"
                sizes="(max-width:760px) 38vw, 20vw"
              />
              <span>9:16</span>
            </div>
          </div>
          <div className={styles.qualityCopy}>
            <p className={styles.eyebrow}>{copy.quality.eyebrow}</p>
            <h2>{copy.quality.headline}</h2>
            <Paragraphs body={copy.quality.body} />
            <a className={styles.textLink} href="/examples">
              See product examples <ArrowRight size={18} />
            </a>
          </div>
        </section>
        <section className={`${styles.workflow} ${styles.wrap}`}>
          <p className={styles.eyebrow}>{copy.workflow.eyebrow}</p>
          <h2>{copy.workflow.headline}</h2>
          <div className={styles.introCopy}>
            <Paragraphs body={copy.workflow.body} />
          </div>
          <ol>
            {copy.workflow.steps.map(([title, body], i) => (
              <li key={title} className={i === 2 ? styles.caplistStep : ""}>
                <span>0{i + 1}</span>
                <h3>{title}</h3>
                <p>{body}</p>
                {i < 3 && <ArrowRight aria-hidden="true" size={20} />}
              </li>
            ))}
          </ol>
          <p className={styles.introCopy}>{copy.workflow.closing}</p>
        </section>
        <section className={styles.finalCta}>
          <div className={styles.wrap}>
            <p className={styles.eyebrow}>{copy.close.eyebrow}</p>
            <h2>{copy.close.headline}</h2>
            <div className={styles.introCopy}>
              <Paragraphs body={copy.close.body} />
            </div>
            <a className={styles.button} href="/demo">
              Book a demo <ArrowUpRight size={19} />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
