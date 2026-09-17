import { MotionPreview } from "@/components/editorial/MotionPreview";
import { ArrowUpRight } from "lucide-react";
import { InnerPage } from "@/components/editorial/InnerPage";
import { Photo, FrameCorners } from "@/components/editorial/Photo";
import { PreviewButton } from "@/components/editorial/PreviewButton";
import { AccessClose } from "@/components/editorial/StudioUI";
import { products } from "@/lib/demo-media";

export const metadata = {
  title: "Products you can sell — Caplist Studio",
  description:
    "See the additional visual products Caplist Studio can create from professional property media you have already captured.",
};

export default function Examples() {
  return (
    <InnerPage>
      <section className="examples-hero">
        <div className="examples-hero-backdrop">
          <Photo media="aerial" sizes="100vw" priority />
        </div>
        <div className="inner-hero shell">
          <p className="eyebrow">More products from the same property</p>
          <h1>
            See what else
            <br />
            <span>you could sell.</span>
          </h1>
          <p>
            Caplist turns suitable photography, property video, drone and vertical footage from a completed shoot into additional finished products you can offer the same client.
          </p>
          <div className="examples-hero-signature">
            <span>One completed shoot</span>
            <strong>5</strong>
            <span>Additional product types to explore</span>
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
                          "More from the footage you already shot.",
                          "A fast extra product for the same listing.",
                          "Give one feature its own story.",
                          "Turn the photo set into motion.",
                          "Bring the full capture together.",
                        ][i]
                      }
                    </h2>
                    <p>{p.label}</p>
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
                  <span className="sr-only">See a {p.name}</span>
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
