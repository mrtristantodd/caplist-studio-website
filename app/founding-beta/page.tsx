import type { Metadata } from "next";
import Image from "next/image";
import { UserRound } from "lucide-react";
import { CaplistLogo } from "@/components/brand/CaplistLogo";
import { AppLoginLink } from "@/components/editorial/AppLoginLink";
import { AccessLink } from "@/components/editorial/StudioUI";
import { WorkflowStory } from "@/components/how-it-works/WorkflowStory";
import { BetaApplication } from "@/components/founding-beta/BetaApplication";
import { BetaMotion } from "@/components/founding-beta/BetaMotion";
import { BetaMotionLogo } from "@/components/founding-beta/BetaMotionLogo";
import { FlowArrow } from "@/components/founding-beta/FlowArrow";
import { ReelPreview } from "@/components/founding-beta/ReelPreview";
import { LiveCropPreview } from "@/components/founding-beta/LiveCropPreview";
import styles from "./founding-beta.module.css";

export const metadata: Metadata = {
  title: "Beta — CAPLIST Studio",
  description: "One shoot. More products to sell. Join the CAPLIST Beta for Australian professional property-media businesses.",
  alternates: { canonical: "/founding-beta/" },
  openGraph: { title: "Beta — CAPLIST Studio", description: "More from every property you already shoot.", url: "/founding-beta/" },
};
function StartLink({ label = "Get started" }: { label?: string }) { return <AccessLink href="#signup">{label}</AccessLink>; }
function PropertyImage({ scene, alt = "", priority = false }: { scene: string; alt?: string; priority?: boolean }) {
  return <Image src={`/media/dp001/${scene}.webp`} alt={alt} fill unoptimized preload={priority} sizes="(max-width: 640px) 90vw, 60vw" />;
}
function HeroTransformation() {
  return <figure className={styles.heroVisual} aria-label="A property media catalogue becomes a Photo Reel and a Vertical Video Reel">
    <BetaMotion className={styles.heroStage} loop>
      <div className={styles.stageTop}>ONE CAPTURE. TWO PRODUCTS.</div>
      <div className={styles.heroScene}>
        <div className={styles.heroInputs} aria-hidden="true">
          <div className={styles.heroCatalogue}>
            {["front", "living", "kitchen", "bedroom", "pool", "drone"].map((scene, index) => <div className={index === 0 || index === 5 ? styles.heroSelected : undefined} key={scene}><PropertyImage scene={scene} priority={index === 0} /><span>{String(index + 1).padStart(2, "0")}</span></div>)}
          </div>
          <div className={styles.heroTransform}><div className={styles.motionIdentity}><BetaMotionLogo /></div><span>One property. More possibilities.</span></div>
        </div>
        <FlowArrow className={styles.heroConnector} />
        <div className={styles.heroOutputs}>
          <div className={styles.heroOutput}><ReelPreview kind="photo" /><span>Photo Reel<small>Photography in motion</small></span></div>
          <div className={styles.heroOutput}><ReelPreview kind="video" /><span>Vertical Video Reel <small>Beta · Reframed for vertical</small></span></div>
        </div>
      </div>
    </BetaMotion>
  </figure>;
}
function PhotoReelPreview() {
  return <div className={styles.photoPreview}>
    <div className={styles.photoStage}>
      <div className={styles.photoSources} aria-hidden="true">
        {["front", "living", "kitchen"].map(scene => <div key={scene}><PropertyImage scene={scene} /></div>)}
        <span>Edited photography</span>
      </div>
      <FlowArrow className={styles.productConnector} />
      <div className={styles.photoPlayer}><ReelPreview kind="photo" /><span>Photo Reel <small>9:16</small></span></div>
    </div>
    <p className={styles.previewNote}>Sample preview · Photography, brought into motion.</p>
  </div>;
}

export default function FoundingBeta() {
  return <div className={styles.page}>
    <a href="#main-content" className={styles.skipLink}>Skip to content</a>
    <header className={styles.header}><div className={styles.wrap}>
      <a href="/" aria-label="CAPLIST Studio home"><CaplistLogo /></a><AppLoginLink className={styles.login}><UserRound size={18} strokeWidth={1.7} aria-hidden="true" /><span className="sr-only">Studio login</span></AppLoginLink>
    </div></header>
    <main id="main-content" tabIndex={-1}>
      <section className={styles.heroField} aria-labelledby="beta-title">
        <div className={`${styles.wrap} ${styles.hero}`}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>BETA · AUSTRALIA</p>
            <h1 id="beta-title">More from every property you already shoot.</h1>
            <p className={styles.heroPromise}>One shoot. More products to sell.</p>
            <p className={styles.lead}>Turn the professional photos and property video you already capture into additional finished products — without another property visit or another full manual edit.</p>
            <StartLink /><p className={styles.micro}>Start with a property you’ve already captured.</p>
          </div>
          <HeroTransformation />
        </div>
        <div className={`${styles.wrap} ${styles.heroFoot}`}><p>Built for professional real-estate photographers, videographers and property-media businesses.</p><span>CAPTURE ONCE. CREATE MORE.</span></div>
      </section>

      <section className={`${styles.wrap} ${styles.section} ${styles.opportunity}`} aria-labelledby="opportunity-title">
        <p className={styles.eyebrow}>THE OPPORTUNITY</p><h2 id="opportunity-title">The expensive part of the job has already happened.</h2>
        <div className={styles.opportunityCopy}><p>You’ve already won the booking, travelled to the property, captured the media and completed the primary edit.</p><p>CAPLIST gives that existing work another commercial life.</p></div>
        <div className={styles.relationship}>
          <div><span>01 / SOURCE</span><h3>Captured</h3></div>
          <FlowArrow />
          <div><span>02 / TRANSFORM</span><h3>CAPLIST</h3></div>
          <FlowArrow />
          <div><span>03 / OUTPUT</span><h3>More to sell</h3></div>
        </div>
      </section>

      <section className={styles.productField} aria-labelledby="products-title"><div className={`${styles.wrap} ${styles.section}`}>
        <div className={styles.offerIntro}><div><p className={styles.eyebrow}>TWO PRODUCTS. ONE PROPERTY.</p><h2 id="products-title">Same capture.<br />A bigger offer.</h2></div><p>Finished vertical products for your clients.<br /><span>Beta pricing · per property</span></p></div>
        <div className={styles.productShowcase}>
          <article className={styles.product} aria-labelledby="photo-product-title">
            <div className={styles.productHeading}><h3 id="photo-product-title">Photo Reel</h3><span className={styles.productPrice}>A$19</span></div>
            <p className={styles.productDescription}>Your edited photography. A finished reel ready for your client.</p>
            <PhotoReelPreview />
          </article>
          <article className={styles.product} aria-labelledby="video-product-title">
            <div className={styles.productHeading}><h3 id="video-product-title">Vertical Video Reel <small>Beta</small></h3><span className={styles.productPrice}>A$89</span></div>
            <p className={styles.productDescription}>Your landscape footage. A shorter vertical edit to add to the offer.</p>
            <LiveCropPreview />
          </article>
        </div>
        <div className={styles.bundle}><div><p>Both from one property <span>— A$99</span></p><p className={styles.firstFree}>Your first property is free.</p></div><StartLink label="Join the Beta" /></div>
      </div></section>

      <section className={`${styles.wrap} ${styles.section} ${styles.workflow}`} aria-labelledby="workflow-title">
        <p className={styles.eyebrow}>A SIMPLE WORKFLOW</p><h2 id="workflow-title">Four steps. One upload.</h2><WorkflowStory variant="founding-beta" />
      </section>

      <section className={`${styles.wrap} ${styles.section} ${styles.quality}`} aria-labelledby="quality-title">
        <p className={styles.eyebrow}>THE PROFESSIONAL STANDARD</p><div className={styles.sectionIntro}><h2 id="quality-title">Professional media in.<br />Professional product out.</h2><div className={styles.qualityCopy}><p>CAPLIST is designed for professional property-media businesses. It adds products to your existing service — it does not replace professional capture.</p><p className={styles.qualityNote}>If the source cannot support a professional result, that product is not offered.</p></div></div>
        <div className={styles.qualityVisual}>
          <figure><div className={styles.qualitySource}><PropertyImage scene="front" alt="Professional property exterior source photograph" /></div><figcaption>PROFESSIONAL SOURCE</figcaption></figure>
          <FlowArrow />
          <figure><div className={styles.qualityOutput}><ReelPreview kind="photo" /></div><figcaption>FINISHED PRODUCT</figcaption></figure>
        </div>
      </section>

      <section className={styles.betaField} aria-labelledby="industry-title"><div className={`${styles.wrap} ${styles.section}`}>
        <p className={styles.eyebrow}>WHY JOIN THE BETA NOW</p><h2 id="industry-title">Help shape the future of real-estate media in Australia.</h2>
        <div className={styles.benefits}>
          <div><h3>Use work you already have</h3><p>No new shoot required.</p></div>
          <div><h3>Add products without another full edit</h3><p>Put CAPLIST into your existing production workflow.</p></div>
          <div><h3>Help shape what comes next</h3><p>Real professional use will influence the product.</p></div>
        </div>
      </div></section>

      <section className={styles.finalField} aria-labelledby="close-title"><div className={`${styles.wrap} ${styles.section} ${styles.final}`}>
        <p className={styles.eyebrow}>BETA</p><h2 id="close-title">See what more your properties could become.</h2><p>Turn your next property delivery into a bigger offer.</p><StartLink label="Join the Beta" /><p className={styles.micro}>Start with a property you’ve already captured.</p>
      </div></section>

      <section className={`${styles.wrap} ${styles.section} ${styles.signup}`} id="signup" aria-labelledby="signup-title">
        <h2 id="signup-title">Join the Beta</h2><BetaApplication />
      </section>
    </main>
    <footer className={styles.footer}><div className={styles.wrap}><div><a href="/" aria-label="CAPLIST Studio home"><CaplistLogo /></a><p>Capture once. Create more. Sell more.</p></div><nav aria-label="Footer"><a href="/contact/">Contact</a><a href="/privacy/">Privacy</a><a href="/terms/">Terms</a><AppLoginLink /></nav></div></footer>
  </div>;
}
