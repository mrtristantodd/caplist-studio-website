import { InnerPage } from "@/components/editorial/InnerPage";
import { AccessLink } from "@/components/editorial/StudioUI";
export default function NotFound() {
  return (
    <InnerPage>
      <section className="policy-page shell">
        <p className="eyebrow">404</p>
        <h1>That page isn’t here.</h1>
        <p className="policy-lead">
          Head back to Caplist Studio and see how one property shoot can become
          more products to sell.
        </p>
        <AccessLink href="/">Back to Caplist Studio</AccessLink>
      </section>
    </InnerPage>
  );
}
