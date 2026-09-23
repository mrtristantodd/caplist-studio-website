import { Photo } from "@/components/editorial/Photo";
import { InnerPage } from "@/components/editorial/InnerPage";
import { PilotRequest } from "@/components/editorial/PilotRequest";
import { demoCopy as copy } from "@/lib/approved-messaging";
export const metadata = {
  title: "Book a demo — Caplist Studio",
  description: "See what one completed property shoot could become.",
};
export default function Demo() {
  return (
    <InnerPage>
      <section className="pilot-page shell">
        <div className="pilot-intro">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h1>{copy.headline}</h1>
          {copy.body.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <div className="editorial-image">
            <Photo media="familyLiving" sizes="(max-width:960px) 90vw, 45vw" />
          </div>
          <h2>What we’ll cover</h2>
          {copy.items.map(([title, body]) => (
            <div key={title}>
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          ))}
          <p>{copy.closing}</p>
        </div>
        <PilotRequest initialTier="Not sure yet" mode="demo" />
      </section>
    </InnerPage>
  );
}
