import { SiteHeader } from "./SiteHeader";
import { Footer } from "./MarketingPage";
export function InnerPage({ children }: { children: React.ReactNode }) {
  return (
    <div className="marketing-v3">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <SiteHeader light />
      <main id="main-content" className="inner-page">
        {children}
      </main>
      <Footer />
    </div>
  );
}
