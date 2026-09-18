import type { Viewport } from "next";
import { HomepageV2 } from "@/components/homepage/HomepageV2";
export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#ffffff",
};
export default function HomePage() {
  return <HomepageV2 />;
}
