import { AppSignupLink } from "./AppSignupLink";
import { AppLoginLink } from "./AppLoginLink";
import { CaplistLogo } from "@/components/brand/CaplistLogo";

export function Footer() {
  return (
    <footer className="brand-footer">
      <div className="shell">
        <div className="brand-footer-main">
          <div>
            <a href="/#top" aria-label="Caplist Studio home">
              <CaplistLogo monochrome />
            </a>
            <h2>Capture once. Create more. Sell more.</h2>
          </div>
          <nav aria-label="Product">
            <h3 className="footer-nav-heading">Product</h3>
            <a href="/how-it-works">How it works</a>
            <a href="/examples">Products</a>
            <a href="/pricing">Pricing</a>
            <AppSignupLink />
            <AppLoginLink />
          </nav>
          <div>
            <nav aria-label="Company">
              <h3 className="footer-nav-heading">Company</h3>
              <a href="/about">About</a>
              <a href="/resources">Resources</a>
              <a href="/partners">Partners</a>
              <a href="/contact">Contact</a>
            </nav>
            <nav aria-label="Legal">
              <h3 className="footer-nav-heading">Legal</h3>
              <a href="/privacy">Privacy</a>
              <a href="/terms">Terms</a>
              <a href="/media-policy">Media Handling Policy</a>
            </nav>
          </div>
        </div>
        <div className="brand-footer-bottom">
          <span>© {new Date().getFullYear()} Caplist Studio</span>
          <a href="/#top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
