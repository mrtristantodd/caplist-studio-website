import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "./buyer-experience.css";
import "./tokens.css";
import "./studio-system.css";
import "./interface-fixes.css";
import "./marketing-v3.css";
import { SiteEffects } from "@/components/editorial/SiteEffects";
import { SITE_URL } from "@/lib/site";

const inter = localFont({
  src: "../public/fonts/inter-variable.woff2",
  variable: "--font-inter",
  weight: "100 900",
  display: "swap",
  preload: true,
  adjustFontFallback: "Arial",
});

const description =
  "Caplist Studio turns the professional property media you already capture into more premium visual products to sell — giving your clients more high-quality ways to market every listing without another property visit.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Caplist Studio | More Products From Every Property Capture",
  description,
  applicationName: "Caplist Studio",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: SITE_URL,
    siteName: "Caplist Studio",
    title: "Caplist Studio | More Products From Every Property Capture",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Caplist Studio | More Products From Every Property Capture",
    description,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-AU">
      <body className={inter.variable}>
        <SiteEffects />
        {children}
      </body>
    </html>
  );
}
