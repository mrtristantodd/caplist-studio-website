import { HomepageV2 } from "@/components/homepage/HomepageV2";
export const metadata = {
  title: "Caplist Studio",
  robots: { index: false, follow: true },
  alternates: { canonical: "/" },
};
export default function CurrentHomepage() {
  return <HomepageV2 />;
}
