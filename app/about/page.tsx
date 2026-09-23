import { Photo } from "@/components/editorial/Photo";
import { InnerPage } from "@/components/editorial/InnerPage";
import { AccessLink } from "@/components/editorial/StudioUI";
import { aboutCopy as copy } from "@/lib/approved-messaging";
export const metadata = {
  title: "About — Caplist Studio",
  description:
    "Why Caplist Studio exists: professional property-media software built to get more from every capture.",
};
export default function About() {
  return (
    <InnerPage>
      <section className="about-hero shell">
        <p className="studio-kicker">{copy.eyebrow}</p>
        <h1>{copy.headline}</h1>
        {copy.body.map((p) => (
          <p className="studio-lead" key={p}>
            {p}
          </p>
        ))}
      </section>
      <div className="shell image-pair">
        <div className="editorial-image">
          <Photo media="weatherboard" sizes="(max-width:640px) 90vw, 50vw" />
        </div>
        <div className="editorial-image">
          <Photo media="living" sizes="(max-width:640px) 90vw, 40vw" />
        </div>
      </div>
      <section className="studio-paper studio-section">
        <div className="shell about-editorial">
          {copy.sections.map((s) => (
            <article key={s.headline}>
              <h2>{s.headline}</h2>
              <div>
                {s.body.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="studio-close">
        <div className="shell">
          <h2>{copy.close.headline}</h2>
          {copy.close.body.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <AccessLink href="/demo">Book a demo</AccessLink>
        </div>
      </section>
    </InnerPage>
  );
}
