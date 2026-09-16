import { ArrowRight, ArrowUpRight } from "lucide-react";
import { InnerPage } from "@/components/editorial/InnerPage";
import { publicResources, resourceCategories } from "@/lib/resource-catalog";
import styles from "./resources.module.css";

export const metadata = {
  title: "Resources for Property-Media Businesses — Caplist Studio",
  description:
    "Guides, product education and commercial thinking for professional real-estate photographers, videographers and property-media businesses.",
};

export default function Resources() {
  const featured = publicResources.find((resource) => resource.featured)!;
  const remaining = publicResources.filter((resource) => !resource.featured);

  return (
    <InnerPage>
      <section className={styles.hero}>
        <div className={`shell ${styles.heroGrid}`}>
          <div>
            <p className="eyebrow">Resources for property-media businesses</p>
            <h1>
              Better production thinking.
              <br />
              <span>More commercial value.</span>
            </h1>
            <p className={styles.heroLead}>
              Practical guides for professional property-media businesses that
              want to create more sellable visual products from the media they
              already capture.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="shell">
          <div className={styles.sectionIntro}>
            <h2>Built for the business behind the camera.</h2>
            <p>
              Explore practical guidance on product opportunities, source-media
              quality, production decisions and ways to create more value from
              each property shoot.
            </p>
          </div>

          <article className={styles.featured}>
            <div className={styles.featureVisual} aria-hidden="true">
              <div className={styles.flow}>
                <span>Existing professional media</span>
                <b>→</b>
                <span>Caplist Studio</span>
                <b>→</b>
                <span>More products to sell</span>
              </div>
            </div>
            <div className={styles.featureCopy}>
              <div className={styles.meta}>
                <span>{featured.category}</span>
                <span>{featured.format}</span>
                <span>Coming soon</span>
              </div>
              <h3>{featured.title}</h3>
              <p>{featured.description}</p>
              <span className={styles.previewLabel}>
                Coming soon <ArrowRight size={16} />
              </span>
            </div>
          </article>

          <div className={styles.categories} aria-label="Resource categories">
            {resourceCategories.map((category) => (
              <span key={category}>{category}</span>
            ))}
          </div>

          <div className={styles.grid}>
            {remaining.map((resource) => (
              <article className={styles.card} key={resource.id}>
                <div className={styles.cardMeta}>
                  <span>{resource.category}</span>
                  <span>{resource.format}</span>
                </div>
                <h3>{resource.title}</h3>
                <p>{resource.description}</p>
                <div className={styles.cardFooter}>
                  <span>Coming soon</span>
                  <ArrowUpRight size={16} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </InnerPage>
  );
}
