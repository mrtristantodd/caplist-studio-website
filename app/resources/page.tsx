import { ArrowRight, ArrowUpRight, LockKeyhole } from "lucide-react";
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
              Practical guides on turning professional property media into more
              sellable visual products — without adding another property visit
              or another editing workflow.
            </p>
          </div>
          <aside className={styles.heroAside}>
            <strong>Public knowledge, not the reseller playbook.</strong>
            <p>
              This library explains the category, products and production
              principles behind Caplist Studio. Wholesale pricing, margin tools,
              sales scripts and partner-specific commercial material remain
              inside the authenticated Partner Sales Toolkit.
            </p>
          </aside>
        </div>
      </section>

      <section className={styles.section}>
        <div className="shell">
          <div className={styles.sectionIntro}>
            <h2>Built for the business behind the camera.</h2>
            <p>
              Not generic real-estate marketing advice. These resources focus on
              media production, repurposing, product economics and the practical
              decisions professional property-media businesses make every day.
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
                <span>Coming first</span>
              </div>
              <h3>{featured.title}</h3>
              <p>{featured.description}</p>
              <span className={styles.previewLabel}>
                First cornerstone guide in production <ArrowRight size={16} />
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
                  <span>In production</span>
                  <ArrowUpRight size={16} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.boundary}>
        <div className={`shell ${styles.boundaryGrid}`}>
          <div>
            <p className="eyebrow">For Caplist partners</p>
            <h2>Some tools belong behind the login.</h2>
          </div>
          <div className={styles.boundaryCopy}>
            <strong>
              Wholesale costs, margins and the sales mechanics remain private.
            </strong>
            <p>
              Approved Caplist partners will receive a separate Sales Toolkit
              with product sell sheets, agent-facing materials, retail guidance,
              margin tools, demo assets and co-brandable resources. Those tools
              are designed to help the media business sell — not expose the
              commercial model to the end client.
            </p>
            <a href="/partners">
              <LockKeyhole size={17} />&nbsp; Explore the partner program
            </a>
          </div>
        </div>
      </section>
    </InnerPage>
  );
}
