import { ArrowRight, ArrowUpRight } from "lucide-react";
import { InnerPage } from "@/components/editorial/InnerPage";
import { publicResources, resourceCategories } from "@/lib/resource-catalog";
import styles from "./resources.module.css";

export const metadata = {
  title: "Resources for Property-Media Businesses — Caplist Studio",
  description:
    "Practical guides for professional property-media businesses looking to sell more from each completed shoot.",
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
              Make every shoot
              <br />
              <span>work harder.</span>
            </h1>
            <p className={styles.heroLead}>
              Practical guides on creating, packaging and selling more professional visual products from the property media your business already captures.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="shell">
          <div className={styles.sectionIntro}>
            <h2>Useful ideas for the business behind the camera.</h2>
            <p>
              Explore ways to increase the value of a completed property job, understand which media can support different products and make smarter decisions about what is worth offering to clients.
            </p>
          </div>

          <article className={styles.featured}>
            <div className={styles.featureVisual} aria-hidden="true">
              <div className={styles.flow}>
                <span>One completed shoot</span>
                <b>→</b>
                <span>More finished products</span>
                <b>→</b>
                <span>More to sell</span>
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
