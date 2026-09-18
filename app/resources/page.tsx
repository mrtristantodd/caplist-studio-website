import { Photo } from "@/components/editorial/Photo";
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
              Practical guides for creating, packaging and selling more
              professional visual products from property media your business
              already captures.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="shell">
          <div className={styles.sectionIntro}>
            <h2>Better ways to turn capture into commercial value.</h2>
            <p>
              Explore how professional photography, video, drone and vertical
              media can create a larger product menu for your business — and
              give your clients more high-quality content to market every
              listing.
            </p>
          </div>

          <article className={styles.featured}>
            <div className={styles.featureVisual} aria-hidden="true">
              <Photo
                media="coastal"
                sizes="(max-width:760px) 90vw, 50vw"
                decorative
              />
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
