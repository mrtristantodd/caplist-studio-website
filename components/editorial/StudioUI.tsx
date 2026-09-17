import { ArrowUpRight } from "lucide-react";
export function AccessLink({
  secondary = false,
  href = "/#products",
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
        <p className="studio-kicker">More from every capture</p>
        <div className="studio-close-grid">
          <h2>
            You’ve already done
            <br />
            the expensive part.
          </h2>
          <div>
            <p>
              Your next property shoot will already produce valuable
              professional media. Caplist Studio is being built to help you turn
              more of that media into finished products your clients can buy.
            </p>
            <AccessLink />
            <a className="studio-text-link" href="/demo">
              Book a demo ↗
            </a>
          </div>
        </div>
        <p className="studio-support">
          For professional real-estate photographers, videographers and
          property-media businesses.
        </p>
      </div>
    </section>
  );
}
