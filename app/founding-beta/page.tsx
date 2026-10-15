import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, PackagePlus, Film } from "lucide-react";
import { CaplistLogo, CaplistMark } from "@/components/brand/CaplistLogo";
import { AppLoginLink } from "@/components/editorial/AppLoginLink";
import { AccessLink } from "@/components/editorial/StudioUI";
import { WorkflowStory } from "@/components/how-it-works/WorkflowStory";
import { BetaApplication } from "@/components/founding-beta/BetaApplication";
import styles from "./founding-beta.module.css";

export const metadata: Metadata = {
  title: "Founding Beta — CAPLIST Studio",
  description: "More from every property you already shoot. Apply for CAPLIST's Founding Beta for Australian professional property-media businesses.",
  alternates: { canonical: "/founding-beta/" },
  openGraph: {
    title: "Founding Beta — CAPLIST Studio",
    description: "Turn existing professional property media into additional finished products to sell.",
    url: "/founding-beta/",
  },
};

function ApplyLink() {
  return <AccessLink href="#apply">Apply for Founding Beta</AccessLink>;
}
function PropertyImage({ scene, alt, priority = false }: { scene: string; alt: string; priority?: boolean }) {
  return <Image src={`/media/dp001/${scene}.webp`} alt={alt} fill unoptimized preload={priority} sizes="(max-width: 640px) 80vw, 40vw" />;
}
function PhotoReelPreview() {
  return <figure className={styles.outputPreview}>
    <div className={styles.productSource}>
      <p className={styles.sourceLabel}>Source · Professionally edited photography</p>
      <div className={styles.sourceContactSheet}>
        {["front", "living", "kitchen"].map(scene => <div key={scene}><PropertyImage scene={scene} alt={`Edited ${scene} source photograph`} /></div>)}
      </div>
    </div>
    <div className={styles.outputLabel}><ArrowRight size={14} aria-hidden="true" /> Vertical photo-motion reel</div>
    <video controls playsInline preload="none" poster="/media/founding-beta/photo-reel-poster.webp" aria-label="Play illustrative Photo Reel motion sample">
      <source src="/media/founding-beta/photo-reel.mp4" type="video/mp4" />
      Your browser does not support video playback.
    </video>
    <figcaption>Illustrative motion sample · 9:16 · no audio<br />Not a confirmed CAPLIST production output.</figcaption>
  </figure>;
}

function VerticalVideoPreview() {
  return <figure className={`${styles.outputPreview} ${styles.videoSourcePreview}`}>
    <div className={styles.productSource}>
      <p className={styles.sourceLabel}>Source · Existing landscape property video</p>
      <video controls playsInline preload="none" poster="/media/dp001/drone.webp" aria-label="Play illustrative landscape source footage for Vertical Video Reel">
        <source src="/media/dp001/reel-premium-mixed.mp4" type="video/mp4" />
        Your browser does not support video playback.
      </video>
    </div>
    <div className={styles.outputLabel}><ArrowRight size={14} aria-hidden="true" /> Selected moments. Reframed for vertical.</div>
    <div className={styles.pendingOutput} role="note">
      <Film size={28} strokeWidth={1.5} aria-hidden="true" />
      <p>Vertical edit example<br />coming soon</p>
      <span>A representative finished example is not available yet.</span>
    </div>
    <figcaption>Illustrative landscape source footage · 16:9<br />A finished Vertical Video Reel is not shown.</figcaption>
  </figure>;
}

export default function FoundingBeta() {
  return <div className={styles.page}>
    <a href="#main-content" className={styles.skipLink}>Skip to content</a>
    <header className={styles.header}>
      <div className={styles.wrap}>
        <a href="/" aria-label="CAPLIST Studio home"><CaplistLogo light /></a>
        <AppLoginLink className={styles.login} />
      </div>
    </header>
    <main id="main-content" tabIndex={-1}>
      <section className={styles.heroField} aria-labelledby="beta-title">
        <div className={`${styles.wrap} ${styles.hero}`}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>FOUNDING BETA · AUSTRALIA</p>
            <h1 id="beta-title">More from every property you already shoot.</h1>
            <p className={styles.lead}>Turn the professional photos and property video you already capture into additional finished products you can sell — without another property visit.</p>
            <ApplyLink />
            <p className={styles.micro}>First property free for accepted beta partners.</p>
            <p className={styles.qualifier}>Built for professional real-estate photographers, videographers and property-media businesses.</p>
          </div>
          <figure className={styles.heroVisual} aria-label="Existing edited photos and landscape property video become a Photo Reel and a Vertical Video Reel">
            <div className={styles.sourceStrip}>
              <span className={styles.mediaLabel}>Already captured</span>
              <div className={styles.sourcePhotos}>
                <div><PropertyImage scene="front" alt="Edited property exterior photograph" priority /></div>
                <div><PropertyImage scene="kitchen" alt="Edited kitchen photograph" /></div>
                <span>Edited photos</span>
              </div>
              <div className={styles.sourceVideo}>
                <video controls playsInline preload="none" poster="/media/dp001/drone.webp" aria-label="Play existing landscape demonstration video">
                  <source src="/media/dp001/reel-premium-mixed.mp4" type="video/mp4" />
                </video>
                <span>Landscape video · aerial opening</span>
              </div>
            </div>
            <div className={styles.transform}><span /><CaplistMark size={40} /><span /><ArrowRight size={18} aria-hidden="true" /></div>
            <div className={styles.heroOutputs}>
              <div className={styles.heroOutput}><div><PropertyImage scene="front" alt="Photo Reel portrait composition" /></div><span>Photo Reel</span></div>
              <div className={styles.heroOutput}><div><PropertyImage scene="living" alt="Vertical Video Reel portrait composition" /></div><span>Vertical Video Reel <small>Beta</small></span></div>
            </div>
            <figcaption className={styles.heroCaption}>Existing media → two product formats · illustrative overview</figcaption>
          </figure>
        </div>
        <div className={`${styles.wrap} ${styles.heroFoot}`}><span>Initial beta · 3 Australian businesses</span><span>Capture once. Create more. Sell more.</span></div>
      </section>

      <section className={`${styles.wrap} ${styles.section}`} aria-labelledby="opportunity-title">
        <div className={styles.sectionIntro}>
          <div><p className={styles.eyebrow}>THE OPPORTUNITY</p><h2 id="opportunity-title">The expensive part of the job has already happened.</h2></div>
          <p>You have already won the booking, travelled to the property, captured the media and completed the primary edit. CAPLIST gives that existing work another commercial life.</p>
        </div>
        <div className={styles.relationship}>
          <div className={styles.commercialStep}>
            <div className={styles.captureGraphic} aria-hidden="true">
              {["front", "living", "kitchen"].map(scene => <div key={scene}><PropertyImage scene={scene} alt="" /></div>)}
            </div>
            <span className={styles.stepNumber}>01 · ALREADY CAPTURED</span>
            <h3>Capture once.</h3>
            <p>Professional photography and property video. The booking, capture and primary edit are already done.</p>
          </div>
          <ArrowRight aria-hidden="true" />
          <div className={styles.commercialStep}>
            <div className={styles.createGraphic} aria-hidden="true">
              <CaplistMark size={40} /><span />
              <div><PropertyImage scene="front" alt="" /></div><div><PropertyImage scene="living" alt="" /></div>
            </div>
            <span className={styles.stepNumber}>02 · CAPLIST ADDS</span>
            <h3>Create more.</h3>
            <p>Photo Reel and Vertical Video Reel — Beta. Additional professional formats from the same property media.</p>
          </div>
          <ArrowRight aria-hidden="true" />
          <div className={styles.commercialStep}>
            <div className={styles.sellGraphic} aria-hidden="true"><PackagePlus size={36} strokeWidth={1.3} /><span>One property.<br />More to offer.</span></div>
            <span className={styles.stepNumber}>03 · YOUR BUSINESS</span>
            <h3>Sell more.</h3>
            <p>Add finished media products to your client offer, without another property visit.</p>
          </div>
        </div>
        <p className={styles.commercialClose}>More products from the same booking. <span>No return property visit.</span></p>
      </section>

      <section className={styles.productField} aria-labelledby="products-title">
        <div className={`${styles.wrap} ${styles.section}`}>
          <p className={styles.eyebrow}>TWO ADDITIONAL PRODUCTS. ONE PROPERTY UPLOAD.</p>
          <h2 id="products-title">More to deliver.<br />From the same capture.</h2>
          <div className={styles.products}>
            <article className={styles.product}>
              <PhotoReelPreview />
              <div className={styles.productCopy}><div className={styles.productTitle}><h3>Photo Reel</h3><span>A$19</span></div>
                <p>Turn professionally edited property photography into a vertical photo-motion reel ready for your client.</p>
                <dl><div><dt>Source</dt><dd>Edited property photos</dd></div><div><dt>Output</dt><dd>Vertical photo-motion reel</dd></div></dl><p className={styles.micro}>Founding Beta pricing</p>
              </div>
            </article>
            <article className={styles.product}>
              <VerticalVideoPreview />
              <div className={styles.productCopy}><div className={styles.productTitle}><h3>Vertical Video Reel <small>Beta</small></h3><span>A$89</span></div>
                <p>Turn existing professional landscape property video into a shorter vertical edit, with selected moments reframed for your client.</p>
                <dl><div><dt>Source</dt><dd>Existing professional landscape video</dd></div><div><dt>Output</dt><dd>Selected and reframed vertical edit</dd></div></dl><p className={styles.micro}>Founding Beta pricing</p>
              </div>
            </article>
          </div>
          <div className={styles.bundle}><p>Create both from the same property <strong>— A$99</strong></p><span>First complete property free for accepted beta partners.</span></div>
        </div>
      </section>

      <section className={`${styles.wrap} ${styles.section} ${styles.workflow}`} aria-labelledby="workflow-title">
        <p className={styles.eyebrow}>UPLOAD → UNLOCK → CHOOSE → CREATE</p>
        <h2 id="workflow-title">Upload once. Choose what you want. CAPLIST does the production work.</h2>
        <WorkflowStory variant="founding-beta" />
      </section>

      <section className={styles.qualityField} aria-labelledby="quality-title">
        <div className={`${styles.wrap} ${styles.section} ${styles.quality}`}>
          <div className={styles.qualityVisual}>
            <figure><div className={styles.qualitySource}><PropertyImage scene="front" alt="Professional exterior source photograph" /></div><figcaption>Professional source media</figcaption></figure>
            <ArrowRight aria-hidden="true" />
            <figure><div className={styles.qualityOutput}><PropertyImage scene="front" alt="Portrait output composition from the same exterior" /></div><figcaption>Finished product</figcaption></figure>
          </div>
          <div><p className={styles.eyebrow}>PROFESSIONAL IN. PROFESSIONAL OUT.</p><h2 id="quality-title">Professional media in. Professional product out.</h2>
            <p>CAPLIST is designed for professional property-media businesses. It adds products to your existing service — it does not replace professional capture.</p>
            <p className={styles.qualityNote}>If the source cannot support a professional result, that product is not offered.</p>
          </div>
        </div>
      </section>

      <section className={styles.betaField} aria-labelledby="founders-title">
        <div className={`${styles.wrap} ${styles.section} ${styles.beta}`}>
          <div><p className={styles.eyebrow}>FOUNDING BETA</p><h2 id="founders-title">Help shape CAPLIST with real property work.</h2>
            <p>We are opening the Founding Beta to a small number of Australian property-media businesses. Test CAPLIST on real properties and help refine the product around professional workflows.</p>
            <p className={styles.betaCount}>Initial beta · 3 businesses</p>
          </div>
          <div className={styles.qualifications}><h3>A good fit for your business?</h3><ul>
            <li>Australian professional property-media business</li>
            <li>Regularly captures edited photography and property video</li>
            <li>Prepared to test real property jobs</li>
            <li>Willing to give direct feedback</li>
          </ul></div>
        </div>
      </section>

      <section className={`${styles.wrap} ${styles.section} ${styles.pricing}`} aria-labelledby="pricing-title">
        <h2 id="pricing-title">Founding Beta pricing</h2>
        <div><dl><div><dt>Photo Reel</dt><dd>A$19</dd></div><div><dt>Vertical Video Reel — Beta</dt><dd>A$89</dd></div><div><dt>Both from one property</dt><dd>A$99</dd></div></dl>
          <p className={styles.micro}>First complete property free for accepted beta partners.</p>
        </div>
      </section>

      <section className={styles.finalField} id="apply" aria-labelledby="apply-title">
        <div className={`${styles.wrap} ${styles.section} ${styles.final}`}>
          <div><p className={styles.eyebrow}>FOUNDING BETA</p><h2 id="apply-title">See what more one of your existing properties could become.</h2>
            <p>Apply to test CAPLIST using the professional media your business already produces.</p>
            <p className={styles.micro}>3 initial Australian beta partners · first complete property free.</p>
          </div>
          <BetaApplication />
        </div>
      </section>
    </main>
    <footer className={styles.footer}><div className={styles.wrap}>
      <div><a href="/" aria-label="CAPLIST Studio home"><CaplistLogo light /></a><p>Capture once. Create more. Sell more.</p></div>
      <nav aria-label="Footer"><a href="/contact/">Contact</a><a href="/privacy/">Privacy</a><a href="/terms/">Terms</a><AppLoginLink /></nav>
    </div></footer>
  </div>;
}
