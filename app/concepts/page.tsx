import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { CaplistLogo } from "@/components/brand/CaplistLogo";
import styles from "./concepts.module.css";

export const metadata: Metadata = {
  title: "Homepage concept comparison | Caplist Studio",
  robots: { index: false, follow: false },
};

const criteria = [
  "Can I tell what Caplist is in five seconds?",
  "Do I understand what it does with media I already capture?",
  "Do I understand why it matters commercially?",
  "Does it feel simple enough to try?",
  "Can I picture the finished products I would sell?",
  "Does it feel professional rather than gimmicky?",
  "Does it make me want to see more?",
];

export default function ConceptsIndex() {
  return (
    <main className={styles.comparePage}>
      <div className={styles.compareShell}>
        <CaplistLogo />
        <p className={styles.kicker}>Homepage concept review</p>
        <h1>Same message. Two ways to explain it.</h1>
        <p className={styles.compareLead}>
          Both concepts use the approved buyer-first positioning and the same
          Caplist visual system. Compare whether the product is clearer when the
          workflow is demonstrated through motion or explained through a more
          restrained editorial layout.
        </p>

        <div className={styles.compareCards}>
          <a href="/concepts/editorial">
            <span>Concept A</span>
            <h2>Editorial / text-led</h2>
            <p>
              Premium, restrained and explanation-led. Uses a static transformation
              board and strong written hierarchy instead of a product animation.
            </p>
            <strong>Open concept <ArrowUpRight size={18} /></strong>
          </a>
          <a href="/concepts/animated">
            <span>Concept B</span>
            <h2>Animated product walkthrough</h2>
            <p>
              Uses the same commercial story, but demonstrates the Caplist workflow
              from uploaded media to a finished additional product.
            </p>
            <strong>Open concept <ArrowUpRight size={18} /></strong>
          </a>
        </div>

        <section className={styles.reviewCriteria}>
          <p className={styles.kicker}>Judge both against the same standard</p>
          <h2>What should be obvious to a first-time visitor?</h2>
          <ol>
            {criteria.map((criterion, index) => (
              <li key={criterion}>
                <span>0{index + 1}</span>
                <p>{criterion}</p>
              </li>
            ))}
          </ol>
        </section>

        <p className={styles.compareNote}>
          These routes are review concepts only. They are excluded from search
          indexing and are not linked from the public site navigation.
        </p>
      </div>
    </main>
  );
}
