import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const inter = localFont({
  src: "../public/fonts/inter-variable.woff2",
  variable: "--font-inter",
  weight: "100 900",
  display: "swap",
  preload: true,
  adjustFontFallback: "Arial",
});

export const metadata: Metadata = {
  title: "Caplist Studio — MORE FROM EVERY CAPTURE.",
  description:
    "Turn professional property photography, video and drone media you've already captured into additional visual products your media business can sell. No additional property visit.",
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
      <body className={inter.variable}>{children}</body>
    </html>
  );
}
