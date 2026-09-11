import { ArrowUpRight } from "lucide-react";
import { InnerPage } from "@/components/editorial/InnerPage";
import { Photo, FrameCorners } from "@/components/editorial/Photo";
import { PreviewButton } from "@/components/editorial/PreviewButton";
import { products } from "@/lib/demo-media";
export const metadata = { title: "Example products — Caplist Studio" };
export default function Examples() {
  return (
    <InnerPage>
      <section className="inner-hero shell">
        <p className="eyebrow">See what you can create</p>
        <h1>
          Your property media.
          <br />
          <span>Five new possibilities.</span>
        </h1>
        <p>
          A social reel. A listing teaser. A new angle on the details. Give your
          clients more ways to show a property.
        </p>
        <span className="example-disclosure">
          AI-generated luxury property concepts. Still mock-ups, not completed
          client videos.
        </span>
      </section>
      <section className="light-section examples-section">
        <div className="shell examples-grid">
          {products.map((p, i) => (
            <article className="example-card" key={p.id}>
              <div className="example-stage">
                <div
                  className={
                    "example-media " +
                    (p.ratio === "9:16" ? "example-portrait" : "")
                  }
                >
                  <Photo media={p.media} sizes="(max-width:767px) 95vw, 48vw" />
                  <div className="example-art">
                    <h2>
                      {
                        [
                          "A fresh perspective.",
                          "Make an entrance.",
                          "It’s all in the details.",
                          "A home worth a closer look.",
                          "The home. The neighbourhood.",
                        ][i]
                      }
                    </h2>
                    <p>
                      {
                        [
                          "Space to slow down",
                          "Twilight collection",
                          "Considered spaces",
                          "Every room has a story",
                          "Harbour collection",
                        ][i]
                      }
                    </p>
                  </div>
                  <FrameCorners />
                  <span className="example-format">
                    {p.duration} / {p.ratio}
                  </span>
                </div>
              </div>
              <div className="example-caption">
                <div>
                  <h3>{p.name.replace("Alternative / ", "")}</h3>
                  <p>{p.description}</p>
                </div>
                <PreviewButton product={p} className="example-open">
                  <span className="sr-only">Preview {p.name}</span>
                  <ArrowUpRight size={24} />
                </PreviewButton>
              </div>
            </article>
          ))}
        </div>
      </section>
    </InnerPage>
  );
}
