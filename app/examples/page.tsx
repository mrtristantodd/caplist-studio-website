import { MotionPreview } from "@/components/editorial/MotionPreview";
import { ArrowUpRight } from "lucide-react";
import { InnerPage } from "@/components/editorial/InnerPage";
import { Photo, FrameCorners } from "@/components/editorial/Photo";
import { PreviewButton } from "@/components/editorial/PreviewButton";
import { AccessClose } from "@/components/editorial/StudioUI";
import { products } from "@/lib/demo-media";
export const metadata = { title: "Example products — Caplist Studio" };
export default function Examples() {
  return (
    <InnerPage>
      <section className="examples-hero">
        <div className="examples-hero-backdrop">
          <Photo media="aerial" sizes="100vw" priority />
        </div>
        <div className="inner-hero shell">
          <p className="eyebrow">An expanding product catalogue</p>
          <h1>
            More ways to sell
            <br />
            <span>the media you’ve already made.</span>
          </h1>
          <p>
            Different source media can support different finished products —
            giving your business more to offer without adding another shoot.
          </p>
          <div className="examples-hero-signature">
            <span>One capture</span>
            <strong>5</strong>
            <span>New ways to deliver</span>
          </div>
        </div>
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
                  <MotionPreview product={p} />
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
      <AccessClose />
    </InnerPage>
  );
}
