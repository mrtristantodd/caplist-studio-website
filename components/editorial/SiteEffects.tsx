"use client";
import { useEffect } from "react";
export function SiteEffects() {
  useEffect(() => {
    const preference = matchMedia("(prefers-reduced-motion: reduce)");
    const targets = Array.from(document.querySelectorAll<HTMLElement>(".opportunity-story,.delivery-diagram,.how-copy,.media-exploded,.catalogue-reference-heading,.standards-story,.professional-console,.delivery-checks,.close-content,.example-card,.plan,.tier-comparison,.pricing-faq,.footer-invitation,.feature-strip > span"));
    let observer: IntersectionObserver | undefined;
    let frame = 0;
    const update = () => {
      frame = 0;
      const range = document.documentElement.scrollHeight - innerHeight;
      document.documentElement.style.setProperty("--reading-progress", String(range > 0 ? scrollY / range : 0));
      document.documentElement.classList.toggle("page-scrolled", scrollY > 24);
    };
    const scroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    const setup = () => {
      observer?.disconnect();
      targets.forEach(el => el.classList.remove("reveal-pending"));
      if (preference.matches) return;
      observer = new IntersectionObserver(entries => entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("reveal-pending");
          observer?.unobserve(entry.target);
        }
      }), { threshold: 0.08 });
      targets.forEach((el, i) => {
        el.classList.add("site-reveal");
        el.style.setProperty("--reveal-delay", `${(i % 3) * 55}ms`);
        if (el.getBoundingClientRect().top > innerHeight) {
          el.classList.add("reveal-pending");
          observer?.observe(el);
        }
      });
    };
    setup(); update();
    preference.addEventListener("change", setup);
    addEventListener("scroll", scroll, { passive: true });
    addEventListener("resize", scroll);
    return () => {
      observer?.disconnect(); cancelAnimationFrame(frame);
      preference.removeEventListener("change", setup);
      removeEventListener("scroll", scroll); removeEventListener("resize", scroll);
      targets.forEach(el => el.classList.remove("reveal-pending", "site-reveal"));
    };
  }, []);
  return <div className="reading-progress" aria-hidden="true"><span /></div>;
}
