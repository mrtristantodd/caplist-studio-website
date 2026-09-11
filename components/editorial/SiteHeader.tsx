"use client";
import { useRef } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { CaplistLogo } from "@/components/brand/CaplistLogo";
import { PreviewButton } from "./PreviewButton";
function Links({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <>
      <a href="/#products" onClick={onNavigate}>
        Products
      </a>
      <a href="/#how-it-works" onClick={onNavigate}>
        How Caplist Works
      </a>
      <a href="/#for-media-businesses" onClick={onNavigate}>
        For Media Businesses
      </a>
      <a href="/pricing" onClick={onNavigate}>
        Pricing
      </a>
      <a href="/resources" onClick={onNavigate}>
        Resources
      </a>
    </>
  );
}
export function SiteHeader() {
  const menu = useRef<HTMLDetailsElement>(null);
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <a href="/#top" className="brand-link" aria-label="Caplist Studio home">
          <CaplistLogo />
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <Links />
        </nav>
        <div className="header-actions">
          <PreviewButton notice="login" className="login-link">
            Log in
          </PreviewButton>
          <a href="/#products" className="button button-blue header-cta">
            <span className="full-cta">See what you can create</span>
            <span className="short-cta">Explore products</span>
            <ArrowUpRight size={15} />
          </a>
        </div>
        <details ref={menu} className="mobile-menu">
          <summary aria-label="Toggle navigation">
            <Menu className="menu-open" size={22} />
            <X className="menu-close" size={22} />
          </summary>
          <nav aria-label="Mobile navigation">
            <Links onNavigate={() => menu.current?.removeAttribute("open")} />
            <PreviewButton notice="login">Log in</PreviewButton>
          </nav>
        </details>
      </div>
    </header>
  );
}
