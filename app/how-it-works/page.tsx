import Image from "next/image";
import { ArrowRight, Upload, Check, CircleCheck, Layers, Music2, SlidersHorizontal, Clapperboard, RefreshCw, X } from "lucide-react";
import { InnerPage } from "@/components/editorial/InnerPage";
import { AccessLink } from "@/components/editorial/StudioUI";
import { CaplistLogo } from "@/components/brand/CaplistLogo";
import { HeroWorkflowDemo } from "@/components/home/HeroWorkflowDemo";
import { workflowReel } from "@/components/home/workflow/workflow-data";
import styles from "./how-it-works.module.css";

export const metadata = {
  alternates: { canonical: "/how-it-works" },
  title: "See CAPLIST in action — How it works",
  description: "From completed property media to additional professional products. Upload, unlock, choose, create and review with CAPLIST Studio.",
};
const stages = [
  { label: "Upload", icon: Upload, title: "Use the media you already captured.", body: "Photos, video, drone and vertical footage from the property." },
  { label: "Unlock", icon: Layers, title: "See what more you can create.", body: "CAPLIST shows the additional products available from that property." },
  { label: "Choose", icon: Check, title: "Select what you want to sell.", body: "Choose the product and guide the creative intent." },
  { label: "Create", icon: Clapperboard, title: "CAPLIST does the production work.", body: "Review the finished output and deliver it through your business." },
];
const outputs = [
  { name: "Photo Reel", image: "front", id: "photo-reel" },
  { name: "Vertical Video Reel", image: "living", id: "vertical-reel" },
  { name: "Property Teaser", image: "pool", id: "property-teaser" },
  { name: "Feature Reel", image: "kitchen", id: "feature-reel" },
  { name: "Drone Reel", image: "drone", id: "drone-location-reel" },
  { name: "Mixed Media Reel", image: "bedroom", id: "mixed-media" },
];
function Media({ scene, alt, className = "" }: { scene: string; alt: string; className?: string }) {
  return <div className={`${styles.media} ${className}`}><Image src={`/media/dp001/${scene}.webp`} alt={alt} fill unoptimized sizes="(max-width: 640px) 85vw, 40vw" /></div>;
}
function Eyebrow({ children }: { children: React.ReactNode }) { return <p className={styles.eyebrow}>{children}</p>; }

export default function HowItWorks() {
  return <InnerPage><div className={styles.page}>
    <section className={styles.heroField}>
      <div className={`${styles.wrap} ${styles.hero}`}>
        <div><Eyebrow>See CAPLIST in action</Eyebrow><h1>One property shoot. More professional products to sell.</h1>
          <p className={styles.lead}>Use the professional photography, video, drone and vertical footage you already capture. CAPLIST understands what media is available, shows you what additional products can be created from it, and produces the finished outputs for you to review and deliver.</p>
          <AccessLink />
        </div>
        <figure className={styles.workflow}><HeroWorkflowDemo /><figcaption>One capture → multiple outputs</figcaption></figure>
      </div>
    </section>
    <section className={`${styles.wrap} ${styles.section}`}>
      <Eyebrow>How it works</Eyebrow><h2>From your media to more products in four steps.</h2><p>A simple workflow. Professional results.</p>
      <ol className={styles.stages}>{stages.map(({ label, icon: Icon, title, body }, i) => <li key={label}>
        <div className={styles.stageLabel}><Icon size={23} strokeWidth={1.7} /><span>0{i + 1}</span><strong>{label}</strong></div>
        <h3>{title}</h3><p>{body}</p>{i < 3 && <ArrowRight className={styles.connector} size={18} aria-hidden="true" />}
      </li>)}</ol>
    </section>
    <section className={styles.opportunityField}>
      <div className={`${styles.wrap} ${styles.section}`}>
        <div className={styles.sectionHead}><div><Eyebrow>CAPLIST shows what more the property can become</Eyebrow><h2>Your media.<br />A bigger opportunity.</h2></div>
          <div><p>From one property shoot, existing photos, video and drone footage can unlock a wider menu of professional products.</p><p className={styles.eyebrow}>Example property</p></div></div>
        <dl className={styles.summary}>{[["27", "Photos"], ["1", "Professional Video"], ["1", "Drone Footage"], ["6", "Additional products available"]].map(([count,label]) => <div key={label}><dt>{label}</dt><dd>{count}</dd></div>)}</dl>
        <div className={styles.transformation}>
          <div className={styles.sources}><Media scene="front" alt="Source property exterior" /><Media scene="living" alt="Source living room" /><Media scene="drone" alt="Source aerial context" /><p>Your media</p></div>
          <div className={styles.transformCore}><ArrowRight size={20} aria-hidden="true" /><div><CaplistLogo light /></div><ArrowRight size={20} aria-hidden="true" /></div>
          <div className={styles.outputs}>{outputs.map((o,i) => <a key={o.id} className={i === 0 ? styles.portraitOutput : ""} href={`/examples/#${o.id}`}><Media scene={o.image} alt={`${o.name} illustrative property preview`} /><span>{o.name}<ArrowRight size={14} aria-hidden="true" /></span></a>)}</div>
        </div>
      </div>
    </section>
    <section className={`${styles.wrap} ${styles.section}`}>
      <div className={styles.sectionHead}><div><Eyebrow>The media determines what is possible</Eyebrow><h2>Every property unlocks a different product menu.</h2></div></div>
      <div className={styles.menuProgression}>{[
        { image: "front", title: "Photos", label: "May unlock", list: ["Photo Reel", "Photo Motion"] },
        { image: "living", title: "Photos + Video", label: "Adds", list: ["Vertical Video Reel", "Property Teaser", "Feature Reel"] },
        { image: "drone", title: "Photos + Video + Drone", label: "Adds", list: ["Drone-focused edits", "Mixed Media products"] },
      ].map((item,i) => <article key={item.title}><Media scene={item.image} alt={item.title + " source example"} /><div><span className={styles.sequence}>0{i+1} / {item.label}</span><h3>{item.title}</h3><ul>{item.list.map(text => <li key={text}><Check size={15} aria-hidden="true" />{text}</li>)}</ul></div></article>)}</div>
    </section>
    <section className={`${styles.wrap} ${styles.section} ${styles.quality}`} id="quality">
      <div><Eyebrow>Professional in. Professional out.</Eyebrow><h2>CAPLIST protects the standard of your work.</h2><p>CAPLIST checks whether the supplied media is suitable for the product you want to create.</p><p className={styles.emphasis}>If the source cannot support a professional result, that product is not offered.</p></div>
      <div className={styles.qualityExamples}>
        <figure><Media scene="living" alt="Clear property source example" /><figcaption><span><CircleCheck size={16} /> Suitable</span></figcaption></figure>
        <figure><Media scene="living" alt="Illustration of lost detail from a blurred source" className={styles.unsuitable} /><figcaption><span><X size={16} /> Not suitable</span></figcaption></figure>
        <p className={styles.note}>Example only — blur simulated.</p>
      </div>
    </section>
    <section className={styles.creativeField}>
      <div className={`${styles.wrap} ${styles.section} ${styles.creative}`}>
        <div><Eyebrow>Creative control</Eyebrow><h2>CAPLIST makes the edit. You control the creative intent.</h2></div>
        <div className={styles.intent}><p className={styles.intentLabel}>Creative intent</p><div className={styles.sceneOrder}>{["front","living","kitchen"].map((scene,i) => <figure key={scene}><Media scene={scene} alt={`Selected scene ${i+1}: ${scene}`} /><figcaption>0{i+1} <Check size={14} /></figcaption></figure>)}</div>
          <ul>{[[Layers,"Choose the media"],[SlidersHorizontal,"Choose the style"],[ArrowRight,"Set the order"],[Music2,"Choose music / mood"],[RefreshCw,"Review or regenerate"]].map(([Icon,label]) => { const I = Icon as typeof Layers; return <li key={String(label)}><I size={18} strokeWidth={1.7} />{String(label)}</li>; })}</ul>
        </div>
      </div>
    </section>
    <section className={`${styles.wrap} ${styles.section}`}>
      <div className={styles.sectionHead}><div><Eyebrow>QC before delivery</Eyebrow><h2>Nothing leaves CAPLIST without review.</h2></div></div>
      <div className={styles.review}><figure><video controls playsInline preload="none" poster={workflowReel.poster} aria-label="CAPLIST example mixed media reel"><source src={workflowReel.src} type="video/mp4" /><a href={workflowReel.src}>View example reel</a></video></figure><aside><p className={styles.intentLabel}>Your review</p><ol>{["Preview", "Revise if needed", "Approve", "Deliver"].map((text,i) => <li key={text}><span>0{i+1}</span>{text}</li>)}</ol></aside></div>
    </section>
    <section className={styles.close}><div className={styles.wrap}><div><Eyebrow>More from every property you already capture.</Eyebrow><h2>See what more your next property shoot could become.</h2></div><AccessLink /></div></section>
  </div></InnerPage>;
}
