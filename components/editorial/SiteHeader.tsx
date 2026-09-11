"use client";
import { useRef } from "react";
import { UserRound, Menu, X } from "lucide-react";
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
          <PreviewButton notice="login" className="profile-signin">
            <span className="profile-avatar"><UserRound size={22} /></span>
            <span className="profile-label"><strong>Guest</strong><span>Sign in</span></span>
          </PreviewButton>
        </div>
        <details ref={menu} className="mobile-menu">
          <summary aria-label="Toggle navigation">
            <Menu className="menu-open" size={22} />
            <X className="menu-close" size={22} />
          </summary>
          <nav aria-label="Mobile navigation">
            <Links onNavigate={() => menu.current?.removeAttribute("open")} />
            <PreviewButton notice="login">Sign in</PreviewButton>
          </nav>
        </details>
      </div>
    </header>
  );
}
