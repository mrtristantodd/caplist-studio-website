import type { Metadata } from "next";
import { APP_LIVE, APP_URL, STUDIO_PREVIEW_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Studio — Caplist Studio",
  robots: { index: false, follow: false },
};

export default function StudioPreviewPage() {
  const destination = APP_LIVE ? APP_URL : STUDIO_PREVIEW_URL;
  const label = APP_LIVE ? "Opening Studio" : "Opening Studio Preview";
  const action = APP_LIVE ? "Open Studio" : "Open Studio Preview";

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        padding: "32px",
        background: "#080d10",
        color: "#f7f9fb",
      }}
    >
      <meta httpEquiv="refresh" content={`0;url=${destination}`} />
      <section style={{ maxWidth: 560, textAlign: "center" }}>
        <p style={{ marginBottom: 12, color: "#8b95a1" }}>CAPLIST STUDIO</p>
        <h1 style={{ margin: 0, fontSize: "clamp(32px, 6vw, 56px)", lineHeight: 1 }}>
          {label}
        </h1>
        <p style={{ margin: "20px auto", color: "#a6adb4", lineHeight: 1.7 }}>
          {APP_LIVE
            ? "Continue to the Caplist Studio client workspace."
            : "This permanent website route points to the current client-interface preview and can later switch to the live Studio app without changing the public link."}
        </p>
        <a
          href={destination}
          style={{
            display: "inline-block",
            padding: "14px 18px",
            background: "#2f7bff",
            color: "#fff",
            borderRadius: 6,
          }}
        >
          {action}
        </a>
      </section>
    </main>
  );
}
