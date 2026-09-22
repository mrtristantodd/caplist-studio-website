import type { Metadata } from "next";
import { HeroWorkflowDemo } from "@/components/home/HeroWorkflowDemo";

export const metadata: Metadata = {
  title: "Workflow Hero Review | Caplist Studio",
  robots: { index: false, follow: false },
};

export default function WorkflowReviewPage() {
  return (
    <main style={{ minHeight: "100dvh", background: "#f8fafc", color: "#0b0d10" }}>
      <header style={{ width: "min(1480px, calc(100% - 64px))", margin: "0 auto", paddingTop: 56 }}>
        <p style={{ color: "#2f7bff", fontSize: 11, fontWeight: 650, letterSpacing: ".12em", textTransform: "uppercase" }}>
          Internal visual review
        </p>
        <h1 style={{ marginTop: 12, fontSize: "clamp(36px, 5vw, 64px)", lineHeight: 1, letterSpacing: "-.055em", fontWeight: 520 }}>
          Homepage workflow hero
        </h1>
        <p style={{ maxWidth: 650, marginTop: 18, color: "#566170", lineHeight: 1.6 }}>
          Pass 1 static states for hierarchy, responsive composition and product-language review.
        </p>
      </header>
      <HeroWorkflowDemo reviewAll />
    </main>
  );
}
