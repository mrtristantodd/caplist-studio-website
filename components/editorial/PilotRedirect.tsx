"use client";

import { useEffect } from "react";

const validTiers = ["Essential", "Pro", "Studio"];

export function PilotRedirect() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const tier = params.get("tier");
    const suffix = tier && validTiers.includes(tier) ? `?tier=${encodeURIComponent(tier)}` : "";
    window.location.replace(`/early-access/${suffix}`);
  }, []);

  return (
    <p>
      This page has moved. <a href="/early-access/">Continue to Early Access</a>.
    </p>
  );
}
