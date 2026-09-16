import type { Metadata } from "next";
import { InnerPage } from "@/components/editorial/InnerPage";
import { PartnerRequest } from "@/components/editorial/PartnerRequest";

export const metadata: Metadata = {
  title: "Partner with Caplist Studio",
  description:
    "An early-access overview for professional property-media businesses exploring Caplist Studio.",
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
  "Mixed Media Reel where source quality supports it",
];

export default function Partners() {
  return (
    <InnerPage>
      <section className="policy-page shell">
        <p className="eyebrow">Early partner programme</p>
        <h1>
          Turn the media you already capture into
          <br />
          <span>more products to sell.</span>
        </h1>
        <p className="policy-lead">
          Caplist Studio helps professional property-media businesses turn
          existing photography, video, drone and vertical footage into additional
          finished visual products — without another property visit or another
          full edit from scratch.
        </p>

        <div className="policy-sections">
          <section>
            <h2>Why it matters</h2>
            <p>
              By the time a property shoot is complete, you have already done
              the expensive work: booking, travel, capture and primary editing.
              Caplist gives you a way to create more products from that same job
              and offer them to your existing clients.
            </p>
          </section>

          <section>
            <h2>How it works</h2>
            <p>
              Upload the professional media you already captured. Caplist checks
              what the property media can support, shows you the products that
              are available, then creates the output you choose. You review the
              result and deliver it through your existing client workflow.
            </p>
          </section>

          <section>
            <h2>What one property may unlock</h2>
            <ul>
              {products.map((product) => (
                <li key={product}>{product}</li>
              ))}
            </ul>
            <p>
              Product availability depends on what was captured and whether the
              source media meets the quality required for the finished output.
            </p>
          </section>

          <section>
            <h2>Your business stays in front</h2>
            <p>
              You keep the agent relationship, choose which products to offer,
              decide how they fit into your packages and set the price your
              client pays. Caplist works behind your media business rather than
              replacing it.
            </p>
          </section>

          <section>
            <h2>What Caplist focuses on</h2>
            <p>
              Caplist is built specifically to create additional professional
              visual and motion products from media your business has already
              captured. It is not intended to replace your CRM, booking system,
              delivery platform, listing portal or social scheduler.
            </p>
          </section>

          <section>
            <h2>Professional input. Professional output.</h2>
            <p>
              Caplist is designed for photographers, videographers and
              property-media businesses whose work already meets a professional
              standard. If the source media cannot support a product properly,
              that product should not be offered for that property.
            </p>
          </section>

          <section>
            <h2>What early partners can help shape</h2>
            <p>
              We are looking for working property-media businesses willing to
              try Caplist on real jobs and give practical feedback on output
              quality, turnaround, workflow and which products clients are most
              interested in buying.
            </p>
          </section>

          <section>
            <h2>What we would test together</h2>
            <p>
              We can start with completed property shoots and compare the source
              media with the additional products Caplist creates. The goal is to
              learn what works reliably, what needs improvement and where the
              strongest commercial opportunities are for your business.
            </p>
          </section>

          <section>
            <h2>Pricing</h2>
            <p>
              Preliminary subscription pricing is available on the{" "}
              <a href="/pricing">Pricing page</a>. Early-access pricing and
              production charges may change as the service develops, and any
              applicable price will be clear before you commit to paid work.
            </p>
          </section>

          <section>
            <h2>Media handling</h2>
            <p>
              Before you share property media, we will make the transfer,
              processing, retention and deletion arrangements clear. See the{" "}
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
