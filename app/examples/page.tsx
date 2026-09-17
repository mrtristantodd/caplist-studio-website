import { InnerPage } from "@/components/editorial/InnerPage";
import { Photo, FrameCorners } from "@/components/editorial/Photo";
import { AccessLink } from "@/components/editorial/StudioUI";
import { products } from "@/lib/demo-media";
export const metadata = {
  title: "Products — Caplist Studio",
  description:
    "One property. More products to sell. Explore the Caplist product catalogue.",
};
export default function Products() {
  return (
    <InnerPage>
      <section className="examples-hero">
        <div className="examples-hero-backdrop">
          <Photo media="aerial" sizes="100vw" priority />
        </div>
        <div className="inner-hero shell">
          <p className="eyebrow">THE CAPLIST PRODUCT CATALOGUE</p>
          <h1>One property. More products to sell.</h1>
          <p>
            Photography, video, drone and vertical footage don’t have to end
            with the first delivery. Caplist turns existing property media into
            a growing range of finished visual products you can add to your
            client offer.
          </p>
          <p>
            More ways for your clients to market the property. More value from
            the capture your business already completed.
          </p>
        </div>
      </section>
      <section className="light-section examples-section">
        <div className="shell examples-grid">
          {products.map((p) => (
            <article className="example-card" key={p.id} id={p.id}>
              <div className="example-stage">
                <div
                  className={`example-media ${p.ratio === "9:16" ? "example-portrait" : ""}`}
                >
                  <Photo
                    media={p.media}
                    sizes={
                      p.ratio === "9:16"
                        ? "(max-width:767px) 180vw, 100vw"
                        : "(max-width:767px) 90vw, 48vw"
                    }
                  />
                  <FrameCorners />
                  <span className="example-format">{p.ratio}</span>
                </div>
              </div>
              <div className="example-caption">
                <div>
                  <h2>{p.name}</h2>
                  <h3>{p.purpose}</h3>
                  <p>{p.description}</p>
                  <dl className="product-facts">
                    <div>
                      <dt>For your client</dt>
                      <dd>{p.client}</dd>
                    </div>
                    <div>
                      <dt>For your business</dt>
                      <dd>{p.business}</dd>
                    </div>
                    <div>
                      <dt>Source media</dt>
                      <dd>{p.needs}</dd>
                    </div>
                    <div>
                      <dt>Formats</dt>
                      <dd>{p.formats}</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="studio-close">
        <div className="shell">
          <h2>One capture should create more than one opportunity.</h2>
          <p>
            Caplist is designed to get more useful commercial life from
            professional property media — creating more finished products for
            your business to sell and more high-quality content for your clients
            to use.
          </p>
          <AccessLink href="/demo">Book a demo</AccessLink>
        </div>
      </section>
    </InnerPage>
  );
}
