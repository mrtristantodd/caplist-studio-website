import Image from "next/image";
import { ArrowRight, Camera, Check, CircleCheck, Layers, Music2, ScanLine, SlidersHorizontal, Sparkles, RefreshCw, X } from "lucide-react";
import { InnerPage } from "@/components/editorial/InnerPage";
import { AccessLink } from "@/components/editorial/StudioUI";
import { CaplistLogo } from "@/components/brand/CaplistLogo";
import { HeroWorkflowDemo } from "@/components/home/HeroWorkflowDemo";
import { workflowReel } from "@/components/home/workflow/workflow-data";
import styles from "./how-it-works.module.css";

export const metadata = {
  alternates: { canonical: "/how-it-works" },
  title: "See CAPLIST in action — How it works",
  description: "From completed property media to additional professional products. Capture, understand, unlock, create and review with CAPLIST Studio.",
};
const stages = [
  { label: "Capture", icon: Camera, title: "You already have the source media.", body: "Photography, landscape video, drone footage and vertical content from the completed property shoot." },
  { label: "Understand", icon: ScanLine, title: "CAPLIST analyses what you captured.", body: "It identifies media type, quality, framing and suitability for additional professional outputs." },
  { label: "Unlock", icon: Layers, title: "The available product menu changes with the media.", body: "Photos may unlock a Photo Reel. Video may unlock vertical edits and teasers. Drone footage may unlock aerial-focused products." },
  { label: "Create", icon: Sparkles, title: "Choose the product. CAPLIST does the production work.", body: "You guide the creative intent. CAPLIST handles the edit, reframing, sequencing and output creation." },
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
          <div><p>From a single property shoot, 27 photos, professional video and drone footage can become a wider menu of professional products.</p><p className={styles.note}>Illustrative product opportunity · availability depends on source quality and the supported catalogue.</p></div></div>
        <dl className={styles.summary}>{[["27", "Photos"], ["1", "Professional Video"], ["1", "Drone Footage"], ["6", "Additional products available"]].map(([count,label]) => <div key={label}><dt>{label}</dt><dd>{count}</dd></div>)}</dl>
        <div className={styles.transformation}>
          <div className={styles.sources}><Media scene="front" alt="Source property exterior" /><Media scene="living" alt="Source living room" /><Media scene="drone" alt="Source aerial context" /><p>Your media</p></div>
          <div className={styles.transformCore}><ArrowRight size={20} aria-hidden="true" /><div><CaplistLogo light /><span>Understand.<br />Identify what’s possible.</span></div><ArrowRight size={20} aria-hidden="true" /></div>
          <div className={styles.outputs}>{outputs.map((o,i) => <a key={o.id} className={i === 0 ? styles.portraitOutput : ""} href={`/examples/#${o.id}`}><Media scene={o.image} alt={`${o.name} illustrative property preview`} /><span>{o.name}<ArrowRight size={14} aria-hidden="true" /></span></a>)}</div>
        </div>
      </div>
    </section>
    <section className={`${styles.wrap} ${styles.section}`}>
      <div className={styles.sectionHead}><div><Eyebrow>The media determines what is possible</Eyebrow><h2>Every property unlocks a different product menu.</h2></div><p>The products available depend on the media you captured. Each additional source opens another production possibility.</p></div>
      <div className={styles.menuProgression}>{[
        { image: "front", title: "Photos only", label: "May unlock", list: ["Photo Reel", "Cinematic Photo Motion", "More photo-based outputs"] },
        { image: "living", title: "Photos + video", label: "Adds", list: ["Vertical Video Reel", "Property Teaser", "Feature Reel"] },
        { image: "drone", title: "Photos + video + drone", label: "Adds", list: ["Drone-focused edits", "Richer Mixed Media products"] },
      ].map((item,i) => <article key={item.title}><Media scene={item.image} alt={item.title + " source example"} /><div><span className={styles.sequence}>0{i+1} / {item.label}</span><h3>{item.title}</h3><ul>{item.list.map(text => <li key={text}><Check size={15} aria-hidden="true" />{text}</li>)}</ul></div></article>)}</div>
      <p className={styles.note}>Product examples show the catalogue direction. Each output must meet its own availability and quality requirements.</p>
    </section>
    <section className={`${styles.wrap} ${styles.section} ${styles.quality}`} id="quality">
      <div><Eyebrow>Professional in. Professional out.</Eyebrow><h2>CAPLIST does not disguise poor capture.</h2><p>CAPLIST assesses resolution, sharpness, exposure, compression, motion blur, camera shake, composition and suitability for the requested output.</p><p className={styles.emphasis}>If the source media cannot support a professional result, CAPLIST should not unlock that product.</p></div>
      <div className={styles.qualityExamples}>
        <figure><Media scene="living" alt="Clear property source example" /><figcaption><span><CircleCheck size={16} /> Suitable</span><p>Clear detail. Considered framing. Usable source.</p></figcaption></figure>
        <figure><Media scene="living" alt="Illustration of lost detail from a blurred source" className={styles.unsuitable} /><figcaption><span><X size={16} /> Not suitable</span><p>Lost detail cannot support the requested output.</p></figcaption></figure>
        <p className={styles.note}>Illustrative comparison. Blur is simulated; these are not assessment results.</p>
      </div>
    </section>
    <section className={styles.creativeField}>
      <div className={`${styles.wrap} ${styles.section} ${styles.creative}`}>
        <div><Eyebrow>Creative control</Eyebrow><h2>CAPLIST makes the edit. You control the creative intent.</h2><p>Choose the finished style and format. CAPLIST handles the production work — without a timeline, keyframes or complex editing.</p></div>
        <div className={styles.intent}><p className={styles.intentLabel}>Creative intent / example</p><div className={styles.sceneOrder}>{["front","living","kitchen"].map((scene,i) => <figure key={scene}><Media scene={scene} alt={`Selected scene ${i+1}: ${scene}`} /><figcaption>0{i+1} <Check size={14} /></figcaption></figure>)}</div>
          <ul>{[[Layers,"Include / exclude source assets"],[ArrowRight,"Reorder selected scenes"],[SlidersHorizontal,"Choose product style and limited duration"],[Music2,"Choose music and mood"],[RefreshCw,"Regenerate or revise"]].map(([Icon,label]) => { const I = Icon as typeof Layers; return <li key={String(label)}><I size={18} strokeWidth={1.7} />{String(label)}</li>; })}</ul>
        </div>
      </div>
    </section>
    <section className={`${styles.wrap} ${styles.section}`}>
      <div className={styles.sectionHead}><div><Eyebrow>QC before delivery</Eyebrow><h2>Nothing leaves CAPLIST without review.</h2></div><p>Review the finished output, compare against source where useful, regenerate or revise, then approve and deliver through your existing business.</p></div>
      <div className={styles.review}><figure><video controls playsInline preload="none" poster={workflowReel.poster} aria-label="CAPLIST example mixed media reel"><source src={workflowReel.src} type="video/mp4" /><a href={workflowReel.src}>View example reel</a></video><figcaption>Existing CAPLIST demonstration reel · review before delivery</figcaption></figure><aside><p className={styles.intentLabel}>Your review</p><ol>{["Review the finished output", "Compare with source", "Request changes or regenerate", "Approve the result", "Deliver through your business"].map((text,i) => <li key={text}><span>0{i+1}</span>{text}</li>)}</ol></aside></div>
    </section>
    <section className={styles.close}><div className={styles.wrap}><div><Eyebrow>More from every property you already capture.</Eyebrow><h2>See what more your next property shoot could become.</h2></div><AccessLink /></div></section>
  </div></InnerPage>;
}
