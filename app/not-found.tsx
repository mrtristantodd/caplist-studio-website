import { ArrowUpRight } from "lucide-react";
import { InnerPage } from "@/components/editorial/InnerPage";

export default function NotFound() {
  return (
    <InnerPage>
      <section className="policy-page shell">
        <p className="eyebrow">404</p>
        <h1>
          This page isn’t part of
          <br />
          <span>the current Caplist Studio site.</span>
        </h1>
        <p className="policy-lead">
          The link may be outdated, or the page may have moved as the platform
          develops.
        </p>
        <a className="button button-blue" href="/">
          Return home <ArrowUpRight size={18} />
        </a>
      </section>
    </InnerPage>
  );
}
