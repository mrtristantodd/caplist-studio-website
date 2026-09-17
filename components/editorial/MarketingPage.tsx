import { CaplistLogo } from "@/components/brand/CaplistLogo";

export function Footer() {
  return (
    <footer className="brand-footer">
      <div className="shell">
        <div className="brand-footer-main">
          <div>
            <a href="/#top" aria-label="Caplist Studio home">
              <CaplistLogo />
            </a>
            <h2>Capture once. Create more. Sell more.</h2>
          </div>
          <nav aria-label="Explore">
            <h3 className="footer-nav-heading">Explore</h3>
            <a href="/examples">Products</a>
            <a href="/pricing">Pricing</a>
            <a href="/#how-it-works">See Caplist in action</a>
            <a href="/resources">Resources</a>
            <a href="/#for-media-businesses">For your business</a>
            <a href="/demo">Book a demo</a>
            <a href="/partners">Partners</a>
          </nav>
          <div>
            <nav aria-label="Company">
              <h3 className="footer-nav-heading">Company</h3>
              <a href="/about">About</a>
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
