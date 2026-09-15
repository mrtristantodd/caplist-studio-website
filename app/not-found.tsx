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
        <a
          className="button button-blue"
          href="/"
          aria-label="Return to the Caplist Studio homepage"
          style={{ color: "#fff", opacity: 1, visibility: "visible", gap: 12 }}
        >
          <span style={{ color: "#fff", opacity: 1, visibility: "visible" }}>
            Return home
          </span>
          <ArrowUpRight
            size={18}
            aria-hidden="true"
            style={{ color: "#fff", opacity: 1, visibility: "visible" }}
          />
        </a>
      </section>
    </InnerPage>
  );
}
