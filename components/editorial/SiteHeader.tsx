"use client";
import { useRef } from "react";
import { UserRound, Menu, X } from "lucide-react";
import { CaplistLogo } from "@/components/brand/CaplistLogo";
import { AppLoginLink } from "./AppLoginLink";
import { AccessLink } from "./StudioUI";

function Links({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <>
      <a href="/#products" onClick={onNavigate}>
        Products
      </a>
      <a href="/#how-it-works" onClick={onNavigate}>
        How It Works
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
          <AccessLink href={light ? "/#how-it-works" : undefined} />
          <AppLoginLink className="header-avatar">
            <UserRound size={20} strokeWidth={1.7} aria-hidden="true" />
            <span className="sr-only">Sign in</span>
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
            <AccessLink href={light ? "/#how-it-works" : undefined} />
            <AppLoginLink>Log in</AppLoginLink>
          </nav>
        </details>
      </div>
    </header>
  );
}
