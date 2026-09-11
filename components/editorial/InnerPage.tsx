import { SiteHeader } from "./SiteHeader";
import { Footer } from "./MarketingPage";
export function InnerPage({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main-content" className="inner-page">
        {children}
      </main>
      <Footer />
    </>
  );
}
