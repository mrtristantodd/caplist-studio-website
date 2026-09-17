import { ArrowUpRight } from "lucide-react";
import { homeCopy } from "@/lib/approved-messaging";
export function AccessLink({
  secondary = false,
  href = "/#how-it-works",
  children = "See Caplist in action",
}: {
  secondary?: boolean;
  href?: string;
  children?: React.ReactNode;
}) {
  return (
    <a
      className={`studio-button ${secondary ? "studio-button-secondary" : ""}`}
      href={href}
    >
      {children}
      <ArrowUpRight size={18} />
    </a>
  );
}
export function SectionHeading({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="studio-section-heading">
      <p className="studio-kicker">{eyebrow}</p>
      <h2>{title}</h2>
      {children && <div className="studio-heading-copy">{children}</div>}
    </div>
  );
}
export function AccessClose() {
  return (
    <section className="studio-close">
      <div className="shell">
        <p className="studio-kicker">{homeCopy.close.eyebrow}</p>
        <div className="studio-close-grid">
          <h2>{homeCopy.close.headline}</h2>
          <div>
            {homeCopy.close.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <AccessLink href="/demo">Book a demo</AccessLink>
          </div>
        </div>
      </div>
    </section>
  );
}
