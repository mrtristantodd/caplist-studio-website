"use client";
import { useRef } from "react";
import { Menu, UserRound, X } from "lucide-react";
import { CaplistLogo } from "@/components/brand/CaplistLogo";
import { AppLoginLink } from "./AppLoginLink";
import { AppSignupLink } from "./AppSignupLink";

function Links({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <>
      <a href="/examples" onClick={onNavigate}>
        Products
      </a>
      <a href="/#how-it-works" onClick={onNavigate}>
        See Caplist in action
      </a>
      <a href="/#for-media-businesses" onClick={onNavigate}>
        For your business
      </a>
      <a href="/pricing" onClick={onNavigate}>
        Pricing
      </a>
      <a href="/resources" onClick={onNavigate}>
        Resources
      </a>
      <a href="/about" onClick={onNavigate}>
        About
      </a>
    </>
  );
}

export function SiteHeader({ light = false }: { light?: boolean }) {
  const menu = useRef<HTMLDetailsElement>(null);
  return (
    <header className={`site-header ${light ? "home-header-light" : ""}`}>
      <div className="shell header-inner">
        <a href="/#top" className="brand-link" aria-label="Caplist Studio home">
          <CaplistLogo light />
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <Links />
        </nav>
        <div className="header-actions">
          <AppSignupLink className="button button-blue header-cta">Try CAPLIST</AppSignupLink>
          <AppLoginLink className="header-avatar">
            <UserRound size={18} strokeWidth={1.7} aria-hidden="true" />
            <span className="sr-only">Log in to Studio</span>
          </AppLoginLink>
        </div>
        <details ref={menu} className="mobile-menu">
          <summary aria-label="Toggle navigation">
            <Menu className="menu-open" size={22} />
            <X className="menu-close" size={22} />
          </summary>
          <nav
            aria-label="Mobile navigation"
            onClick={(event) => {
              if ((event.target as HTMLElement).closest("a"))
                menu.current?.removeAttribute("open");
            }}
          >
            <Links onNavigate={() => menu.current?.removeAttribute("open")} />
            <AppLoginLink>Log in</AppLoginLink>
            <AppSignupLink className="button button-blue header-cta">Try CAPLIST</AppSignupLink>
          </nav>
        </details>
      </div>
    </header>
  );
}
