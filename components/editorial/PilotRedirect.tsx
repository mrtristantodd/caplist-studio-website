"use client";

import { useEffect } from "react";

const validTiers = ["Launch", "Growth", "Scale"];

export function PilotRedirect() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const tier = params.get("tier");
    const suffix =
      tier && validTiers.includes(tier)
        ? `?tier=${encodeURIComponent(tier)}`
        : "";
    window.location.replace(`/demo/${suffix}`);
  }, []);

  return (
    <p>
      This page has moved. <a href="/demo/">Book a demo</a>.
    </p>
  );
}
