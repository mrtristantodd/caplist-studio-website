import type { Metadata } from "next";
import { HomepageConcept } from "@/components/editorial/HomepageConcept";

export const metadata: Metadata = {
  title: "Homepage concept — Editorial | Caplist Studio",
  robots: { index: false, follow: false },
};

export default function EditorialHomepageConcept() {
  return <HomepageConcept variant="editorial" />;
}
