import type { Metadata } from "next";
import { HomepageConcept } from "@/components/editorial/HomepageConcept";

export const metadata: Metadata = {
  title: "Homepage concept — Animated | Caplist Studio",
  robots: { index: false, follow: false },
};

export default function AnimatedHomepageConcept() {
  return <HomepageConcept variant="animated" />;
}
