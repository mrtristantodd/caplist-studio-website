import type { Metadata } from "next";
import { STUDIO_PREVIEW_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Studio Preview — Caplist Studio",
  robots: { index: false, follow: false },
};

export default function StudioPreviewPage() {
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
      <meta httpEquiv="refresh" content={`0;url=${STUDIO_PREVIEW_URL}`} />
      <section style={{ maxWidth: 560, textAlign: "center" }}>
        <p style={{ marginBottom: 12, color: "#8b95a1" }}>CAPLIST STUDIO</p>
        <h1 style={{ margin: 0, fontSize: "clamp(32px, 6vw, 56px)", lineHeight: 1 }}>
          Opening Studio Preview
        </h1>
        <p style={{ margin: "20px auto", color: "#a6adb4", lineHeight: 1.7 }}>
          This temporary preview link will become the client login destination when the live Studio app is released.
        </p>
        <a
          href={STUDIO_PREVIEW_URL}
          style={{
            display: "inline-block",
            padding: "14px 18px",
            background: "#2f7bff",
            color: "#fff",
            borderRadius: 6,
          }}
        >
          Open Studio Preview
        </a>
      </section>
    </main>
  );
}
