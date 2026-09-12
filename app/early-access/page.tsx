import { InnerPage } from "@/components/editorial/InnerPage";
import { PilotRequest } from "@/components/editorial/PilotRequest";
export const metadata = { title: "Request Early Access — Caplist Studio" };
export default async function EarlyAccess({
  searchParams,
}: {
  searchParams: Promise<{ tier?: string }>;
}) {
  const { tier } = await searchParams;
  const initialTier =
    tier && ["Essential", "Pro", "Studio"].includes(tier)
      ? tier
      : "Not sure yet";
  return (
    <InnerPage>
      <section className="pilot-page shell">
        <div className="pilot-intro">
          <p className="eyebrow">More from every capture</p>
          <h1>
            Your media.
            <br />
            Your clients.
            <br />
            <span>More to sell.</span>
          </h1>
          <p>
            Caplist Studio is being built to help you turn more of your existing
            professional media into finished products your clients can buy.
          </p>
          <ul>
            <li>For professional real-estate photographers</li>
            <li>For videographers and property-media businesses</li>
            <li>Your clients. Your service. Your pricing.</li>
          </ul>
          <p>
            Request early access to start a conversation about your business and
            the products you want to offer.
          </p>
        </div>
        <PilotRequest initialTier={initialTier} />
      </section>
    </InnerPage>
  );
}
