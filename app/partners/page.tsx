import type { Metadata } from "next";
import { InnerPage } from "@/components/editorial/InnerPage";
import { PartnerRequest } from "@/components/editorial/PartnerRequest";

export const metadata: Metadata = {
  title: "Partner with Caplist Studio",
  description:
    "Early partner access for professional property-media businesses that want to create and sell more products from the media they already capture.",
  robots: {
    index: false,
    follow: false,
  },
};

const products = [
  "Photo Reel",
  "20–30 second Vertical Video Reel",
  "10–15 second Property Teaser",
  "Alternative / Feature Reel",
  "Mixed Media Reel where the source media supports it",
];

export default function Partners() {
  return (
    <InnerPage>
      <section className="policy-page shell">
        <p className="eyebrow">Early partner programme</p>
        <h1>
          Add more products to your service
          <br />
          <span>without adding another shoot.</span>
        </h1>
        <p className="policy-lead">
          Caplist Studio helps professional property-media businesses turn completed photography, video, drone and vertical capture into additional finished products they can sell to existing clients.
        </p>

        <div className="policy-sections">
          <section>
            <h2>Make more of the work you already win</h2>
            <p>
              The expensive part of a property job happens before delivery: booking, travel, equipment, capture and primary editing. Caplist gives that completed media another job to do by turning it into additional products you can offer the same client.
            </p>
          </section>

          <section>
            <h2>A simple way to test it</h2>
            <p>
              Start with a completed property shoot. Upload the professional media you already have, see which additional products Caplist can create, choose one worth testing and review the finished result before deciding how it fits your normal offer.
            </p>
          </section>

          <section>
            <h2>Products you may be able to add</h2>
            <ul>
              {products.map((product) => (
                <li key={product}>{product}</li>
              ))}
            </ul>
            <p>
              The exact product mix varies by property because it depends on the media captured and the quality needed for a professional result.
            </p>
          </section>

          <section>
            <h2>Your client still buys from you</h2>
            <p>
              You choose what to offer, how to package it and what your client pays. Caplist performs the production work behind the scenes while your media business stays in front of the agent or agency relationship.
            </p>
          </section>

          <section>
            <h2>No need to rebuild the rest of your operation</h2>
            <p>
              Keep your existing CRM, booking system, delivery platform and capture workflow. Caplist is designed to add another production capability to the business you already run, not replace the systems that are already working.
            </p>
          </section>

          <section>
            <h2>Quality has to be good enough to carry your brand</h2>
            <p>
              Caplist is built for professional photography and media businesses. If the source material cannot support a product at a standard you would be comfortable delivering, that product should not be offered for the property.
            </p>
          </section>

          <section>
            <h2>Why join early</h2>
            <p>
              Early partners get to test Caplist on real jobs while the product catalogue and workflows are still being refined. Your feedback helps shape which outputs are most useful, how they fit into a working media business and what makes them genuinely sellable to agents.
            </p>
          </section>

          <section>
            <h2>What we would test together</h2>
            <p>
              We would compare the media from completed shoots with the additional products Caplist creates, then look at output quality, turnaround, workflow fit and client interest. The point is to establish whether Caplist can create useful, repeatable commercial value for your business.
            </p>
          </section>

          <section>
            <h2>Pricing</h2>
            <p>
              Preliminary subscription pricing is available on the{" "}
              <a href="/pricing">Pricing page</a>. Early-access pricing and production charges may change during testing, and any applicable price will be clear before you commit to paid work.
            </p>
          </section>

          <section>
            <h2>Media handling</h2>
            <p>
              Before you share property media, we will make the transfer, processing, retention and deletion arrangements clear. See the{" "}
              <a href="/media-policy">Media Handling Policy</a> and{" "}
              <a href="/privacy">Privacy Policy</a> before sharing files.
            </p>
          </section>
        </div>

        <PartnerRequest />
      </section>
    </InnerPage>
  );
}
