import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "./buyer-experience.css";
import "./tokens.css";
import "./studio-system.css";
import { SiteEffects } from "@/components/editorial/SiteEffects";

const inter = localFont({
  src: "../public/fonts/inter-variable.woff2",
  variable: "--font-inter",
  weight: "100 900",
  display: "swap",
  preload: true,
  adjustFontFallback: "Arial",
});

export const metadata: Metadata = {
  title: "Caplist Studio | More Products From Every Property Capture",
  description:
    "Caplist Studio turns professional real-estate photography, video, drone and vertical footage into additional finished visual products your property-media business can sell.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
  themeColor: "#080d10",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <SiteEffects />
        {children}
      </body>
    </html>
  );
}
