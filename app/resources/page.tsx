import { ArrowUpRight, BookOpen } from "lucide-react";
import { InnerPage } from "@/components/editorial/InnerPage";
export const metadata = { title: "Resources — Caplist Studio" };
export default function Resources() {
  return (
    <InnerPage>
      <section className="inner-hero shell">
        <p className="eyebrow">Resources / The Caplist journal</p>
        <h1>
          More from your media.
          <br />
          <span>More for your business.</span>
        </h1>
        <p>
          Ideas and practical guidance for professional property media
          businesses.
        </p>
      </section>
      <section className="light-section resources-section">
        <div className="shell">
          <div className="resource-heading">
            <h2>The journal</h2>
            <span className="eyebrow">Articles coming soon</span>
          </div>
          <div className="journal-empty">
            <BookOpen size={38} />
            <h3>Good things are in the works.</h3>
            <p>
              Our first articles will be here soon. In the meantime, explore
              what your existing capture could become.
            </p>
            <a href="/examples" className="button button-blue">
              Explore example products <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </InnerPage>
  );
}
