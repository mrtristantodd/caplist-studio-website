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
          Visual mock-ups using Australian photography. Still previews
          illustrate the design; finished videos are not generated.
        </span>
      </section>
      <section className="light-section examples-section">
        <div className="shell examples-grid">
          {products.map((p, i) => (
            <article className="example-card" key={p.id}>
              <div
                className={
                  "example-media " +
                  (p.ratio === "9:16" ? "example-portrait" : "")
                }
              >
                <Photo media={p.media} sizes="(max-width:767px) 95vw, 48vw" />
                <div className="example-art">
                  <span>CAPLIST / PROPERTY STORIES</span>
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
                        "Parkdale House · Victoria",
                        "Considered spaces",
                        "Every room has a story",
                        "Sylvania Waters · NSW",
                      ][i]
                    }
                  </p>
                </div>
                <FrameCorners />
                <span className="example-format">
                  {p.duration} / {p.ratio}
                </span>
              </div>
              <div className="example-caption">
                <div>
                  <p className="eyebrow">0{i + 1} / Example product</p>
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
