import type { Metadata } from "next";
import { InnerPage } from "@/components/editorial/InnerPage";
import { PartnerRequest } from "@/components/editorial/PartnerRequest";

export const metadata: Metadata = {
  title: "Partner with Caplist Studio",
  description:
    "A private overview for professional property-media businesses exploring an early Caplist Studio partnership.",
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
          Caplist Studio is a production layer for professional property-media
          businesses. It takes photography, video, drone and vertical footage
          already captured at a property and turns suitable source media into
          additional finished visual products — without another property visit
          or another manual edit from scratch.
        </p>

        <div className="policy-sections">
          <section>
            <h2>The commercial idea</h2>
            <p>
              By the time a property shoot is complete, your business has
              already absorbed the expensive part of the job: booking, travel,
              equipment, capture and primary editing. Caplist Studio is designed
              to help you extract more commercial value from that existing media
              by manufacturing additional products you can resell to your own
              clients.
            </p>
          </section>

          <section>
            <h2>How it works</h2>
            <p>
              Ingest → understand → unlock → select → create → quality check →
              deliver. Caplist analyses the supplied professional media,
              determines which products the source material can legitimately
              support, then performs the production work while the media business
              keeps focused creative control.
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
              source media meets the quality standard required for the output.
            </p>
          </section>

          <section>
            <h2>Your business stays in front</h2>
            <p>
              Caplist sits behind the professional media business rather than
              between you and the agent. You retain the client relationship,
              decide what to offer, set the retail price and package Caplist-made
              products inside your existing service model.
            </p>
          </section>

          <section>
            <h2>What Caplist is not</h2>
            <p>
              It is not a photographer CRM, booking platform, real-estate
              campaign manager, listing portal, social scheduler or browser video
              editor. Caplist focuses on one job: producing additional
              professional visual and motion products from media your business
              has already captured.
            </p>
          </section>

          <section>
            <h2>Professional input → professional output</h2>
            <p>
              Caplist is being designed for established photographers,
              videographers and property-media businesses. Source quality is part
              of the product decision. Unsuitable media should disable outputs
              rather than be disguised by automation.
            </p>
          </section>

          <section>
            <h2>Why early partners matter</h2>
            <p>
              The early programme is intended to validate real production
              workflows, source-media quality, output standards, turnaround,
              pricing and integration requirements with working property-media
              businesses before broader release. This is a practical product
              partnership, not an obligation to adopt unfinished technology.
            </p>
          </section>

          <section>
            <h2>What we would test together</h2>
            <p>
              A partner pilot can use completed real-world shoots to evaluate
              which products can be manufactured reliably, how much additional
              production value exists per property, what needs human review and
              what commercial model makes sense for both businesses.
            </p>
          </section>

          <section>
            <h2>Pricing and commercial terms</h2>
            <p>
              Early partner pricing is discussed directly because the production
              catalogue, processing costs and wholesale structure are still being
              validated. Caplist is being designed so the media business can
              retain meaningful resale margin rather than compete with its own
              production supplier.
            </p>
          </section>

          <section>
            <h2>Media handling</h2>
            <p>
              Property media should only move into a pilot after the transfer,
              processing, retention and deletion arrangements have been agreed.
              See the <a href="/media-policy">Media Handling Policy</a> and{" "}
              <a href="/privacy">Privacy Policy</a> before sharing files.
            </p>
          </section>
        </div>

        <PartnerRequest />
      </section>
    </InnerPage>
  );
}
