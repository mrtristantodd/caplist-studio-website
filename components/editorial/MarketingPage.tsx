import { ArrowRight, ArrowUpRight, Check, ChevronDown } from "lucide-react";
import { CaplistLogo, CaplistMark } from "@/components/brand/CaplistLogo";
import { products } from "@/lib/demo-media";
import { CONTACTS } from "@/lib/site";
import { Photo } from "./Photo";
import { AppLoginLink } from "./AppLoginLink";
import { SiteHeader } from "./SiteHeader";
import { AccessLink, AccessClose, SectionHeading } from "./StudioUI";
import { ProductExplorer } from "./ProductExplorer";

const inputs = [
  ["Photography", "familyLiving"],
  ["Video", "suburban"],
  ["Drone", "aerial"],
  ["Vertical", "weatherboard"],
] as const;

function Hero() {
  return (
    <section id="top" className="studio-hero">
      <div className="shell studio-hero-grid">
        <div className="studio-hero-copy">
          <p className="studio-kicker">Capture once. Sell more.</p>
          <h1>
            Turn every property shoot into <span>more products your clients can buy.</span>
          </h1>
          <p className="studio-lead">
            Caplist Studio turns the professional photos, video, drone and vertical footage you already capture into additional finished visual products — so you can grow the value of each job without another property visit or another manual editing queue.
          </p>
          <div className="studio-actions">
            <AccessLink />
            <a className="studio-text-link" href="/demo">
              See what your media could create <ArrowRight size={18} />
            </a>
          </div>
          <p className="studio-support">
            Built for professional real-estate photographers, videographers and property-media businesses.
          </p>
        </div>

        <div className="capture-board">
          <div className="capture-board-heading">
            <span className="studio-kicker">What you already captured</span>
            <span className="capture-status">One shoot → more to sell</span>
          </div>
          <div className="capture-feature">
            <Photo media="suburban" sizes="(max-width:900px) 90vw, 46vw" priority />
            <div>
              <span>One property.</span>
              <strong>More products to offer.</strong>
            </div>
          </div>
          <div className="capture-inputs">
            {inputs.map(([label, media]) => (
              <div key={label}>
                <div><Photo media={media} sizes="160px" decorative /></div>
                <span>{label}</span>
              </div>
            ))}
          </div>
          <div className="capture-transform">
            <span>Your media</span>
            <ArrowRight size={18} />
            <CaplistMark size={34} />
            <ArrowRight size={18} />
            <span>New products</span>
          </div>
          <div className="capture-products">
            {["Photo Reel", "Vertical Reel", "Property Teaser", "Feature Reel", "Mixed Media Reel"].map((x) => <span key={x}>{x}</span>)}
          </div>
          <p className="capture-note">The products available depend on the media captured for each property.</p>
        </div>
      </div>

      <div className="shell studio-value-strip">
        <span>Same shoot.</span>
        <span>Same client.</span>
        <span>More products.</span>
        <strong>More revenue opportunity.</strong>
      </div>
    </section>
  );
}

function CommercialIdea() {
  return (
    <section className="studio-section studio-paper">
      <div className="shell studio-split">
        <SectionHeading eyebrow="You already did the hard part" title="The shoot is finished. The earning opportunity doesn’t have to be.">
          <p>
            By the time you deliver a property, you have already invested in booking, travel, equipment, capture and primary editing.
          </p>
          <p>
            Caplist helps that same job work harder by turning the media you already produced into additional products your existing client can buy.
          </p>
        </SectionHeading>

        <div className="commercial-expansion">
          <p className="studio-kicker">A property job you already completed</p>
          <div className="original-job">Photography <span>+</span> Video <span>+</span> Drone</div>
          <div className="expansion-line"><CaplistMark size={38} /><span>More products from the same capture</span></div>
          <div className="expansion-products">
            {products.map((p) => (
              <span key={p.id}>{p.name.replace("Alternative / ", "")}<ArrowUpRight size={16} /></span>
            ))}
          </div>
          <p className="commercial-conclusion">Create more to sell without creating another shoot.</p>
        </div>
      </div>

      <div className="shell studio-assurances">
        {["No second property visit.", "No second capture.", "No full manual edit from scratch."].map((x) => <span key={x}><Check size={18} />{x}</span>)}
      </div>
    </section>
  );
}

function SourceMedia() {
  const descriptions = [
    ["Professional Photography", "Already deliver a photo set? The same professionally edited images can become a finished motion reel you can add to the order."],
    ["Professional Video", "Get more than one product from footage you already shot by creating shorter, vertical or feature-focused edits."],
    ["Drone Media", "Use aerial footage again inside premium mixed-media products instead of letting it end with the original delivery."],
    ["Native Vertical", "Turn professionally captured vertical footage into additional social-ready products without another mobile-content visit."],
  ];

  return (
    <section className="studio-section studio-dark">
      <div className="shell">
        <div className="studio-split">
          <SectionHeading eyebrow="Start with what you already have" title="Upload a completed shoot. See what else you could sell from it." />
          <div className="studio-prose">
            <p>
              Caplist looks at the professional media already captured for the property and identifies the additional products that media can support.
            </p>
            <p>
              Photography can open one set of opportunities. Add video, drone or vertical footage and the range of products you can offer may grow.
            </p>
            <strong>You do not need to change the way you shoot just to discover more value in the work you already produced.</strong>
          </div>
        </div>

        <div className="source-editorial-grid">
          {descriptions.map(([title, description], i) => (
            <article key={title}>
              <div className="source-editorial-image">
                <Photo media={inputs[i][1]} sizes="(max-width:767px) 90vw,25vw" />
                <span>0{i + 1}</span>
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    ["Upload", "Add the property media you already captured.", "Use the professional photos, video, drone and vertical footage from a completed shoot."],
    ["See the opportunities", "Caplist shows what else you could create and sell.", "The platform checks the media and identifies the additional products worth exploring for that property."],
    ["Choose and create", "Pick the product. Caplist handles the production.", "Make a few focused creative choices, review the finished result and deliver it through the workflow you already use."],
  ];

  return (
    <section id="how-it-works" className="studio-section studio-paper">
      <div className="shell studio-how">
        <div>
          <SectionHeading eyebrow="Simple enough to try on one property" title="Upload. Choose. Sell." />
          <p className="studio-auto">Caplist does the production.<br /><span>You stay in control of what gets sold.</span></p>
        </div>
        <ol className="studio-steps">
          {steps.map(([title, headline, description], i) => (
            <li key={title}>
              <span className="step-number">0{i + 1}</span>
              <div><span className="studio-kicker">{title}</span><h3>{headline}</h3><p>{description}</p></div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Catalogue() {
  return (
    <section id="products" className="studio-section studio-paper studio-catalogue">
      <div className="shell">
        <div className="studio-split">
          <SectionHeading eyebrow="What else could you sell from the same shoot?" title="Turn one property capture into a bigger product menu." />
          <div className="studio-prose">
            <p>
              Caplist is not a single-output tool. The media you already capture can support different finished products, giving clients more ways to buy from the same property job.
            </p>
            <a className="studio-text-link" href="/examples">See the product examples <ArrowUpRight size={18} /></a>
          </div>
        </div>

        <ProductExplorer />

        <div className="studio-catalogue-note">
          <div>
            <h3>Your product menu can grow over time.</h3>
            <p>
              As new visual-production capabilities become reliable enough for professional property media, Caplist can turn them into practical new products your business can offer.
            </p>
          </div>
          <p>If the source media cannot support a professional result, Caplist should not offer that product for the property.</p>
        </div>
      </div>
    </section>
  );
}

function BusinessBenefits() {
  const benefits = [
    ["Make each booking worth more", "Add paid visual products to jobs you have already won instead of relying only on more bookings for growth."],
    ["Give clients more reasons to upgrade", "Expand the product menu around the same property so agents can choose more than the original delivery."],
    ["Avoid another editing queue", "Caplist handles the production work instead of turning every extra product into another manual job for your team."],
    ["Keep your client relationship", "Your agents continue buying from your media business. Caplist stays behind the service you provide."],
    ["Set your own selling price", "You decide how each product is packaged, positioned and priced for your market."],
    ["Grow without putting another shooter on the road", "Create another growth lever from work your team already captures, even when shoot capacity is tight."],
  ];

  return (
    <section id="for-media-businesses" className="studio-section studio-paper">
      <div className="shell">
        <div className="studio-split">
          <SectionHeading eyebrow="A different way to grow a property-media business" title="Make more from each job — not only from doing more jobs." />
          <div className="studio-prose">
            <p>Traditional growth usually means more bookings, more photographers, more travel or more editing capacity.</p>
            <p>Caplist creates another option: <strong>increase what each completed property job can produce for your business.</strong></p>
          </div>
        </div>

        <div className="studio-benefits">
          {benefits.map(([title, description], i) => (
            <article key={title}><span className="studio-index">0{i + 1}</span><h3>{title}</h3><p>{description}</p></article>
          ))}
        </div>
      </div>
    </section>
  );
}

function QualityAndControl() {
  return (
    <section id="standards" className="studio-section studio-paper">
      <div className="shell studio-split">
        <div>
          <SectionHeading eyebrow="Your reputation comes first" title="Automation only helps if the finished product is good enough to carry your name." />
          <div className="studio-prose">
            <p>
              Caplist is built for professional media businesses. It does not try to disguise weak source material or create a product simply because a file was uploaded.
            </p>
            <p>It checks whether the supplied media is suitable and only makes products available where the source can support the result.</p>
            <strong>If you would not be comfortable delivering it to a client, Caplist should not be comfortable creating it.</strong>
          </div>

          <div className="quality-principles">
            {[
              ["Right media for the product", "Not every photo or clip belongs in every output. Caplist should use only the material that supports the finished product."],
              ["Professional result", "The output should feel intentionally produced and commercially deliverable — not like an automatic template was applied."],
              ["Property stays true", "The finished media should not materially invent or alter real property characteristics."],
              ["Useful before novel", "New visual technology belongs in Caplist only when it can perform reliably enough for professional use."],
            ].map(([title, text]) => (
              <details key={title}><summary>{title}<ChevronDown size={18} /></summary><p>{text}</p></details>
            ))}
          </div>
        </div>

        <div className="creative-panel">
          <div className="creative-image"><Photo media="familyLiving" sizes="(max-width:767px) 90vw,45vw" /></div>
          <div className="creative-copy">
            <p className="studio-kicker">Creative control without becoming the editor</p>
            <h2>You choose the direction.<br />Caplist handles the edit.</h2>
            <p>You should not need to open another timeline just to add another product to the order. Caplist handles the production decisions that normally consume editing time.</p>
            <div className="production-tasks">
              {["Selection", "Movement", "Transitions", "Pacing", "Sequencing", "Reframing", "Music timing", "Rendering"].map((x) => <span key={x}>{x}</span>)}
            </div>
            <p>
              When your judgement matters, you can make focused choices such as selecting source assets, adjusting order, choosing an approved style or music direction, or requesting another version.
            </p>
            <strong>No timeline. No keyframes.<br />No complicated editing software.</strong>
            <p>You keep the creative intent without taking the production workload back.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function WorkflowAndReseller() {
  return (
    <section className="studio-section studio-paper">
      <div className="shell">
        <SectionHeading eyebrow="Fits around the business you already run" title="Keep your workflow. Add another way to make each shoot more valuable." />
        <p className="studio-workflow-intro">Keep your existing capture process, CRM, booking system, delivery platform and agent relationships. Caplist sits between the media you have already produced and the extra products you want to sell.</p>

        <ol className="studio-workflow">
          {[
            ["Capture", "Shoot the property as you normally do"],
            ["Edit", "Complete your normal primary delivery"],
            ["Caplist", "Create extra products from the same media"],
            ["Deliver", "Sell and deliver through your existing business"],
          ].map(([title, description], i) => (
            <li className={i === 2 ? "is-caplist" : ""} key={title}>
              <span className="studio-kicker">0{i + 1}</span><h3>{title}</h3><p>{description}</p>{i < 3 && <ArrowRight size={20} />}
            </li>
          ))}
        </ol>

        <p className="studio-workflow-note">The goal is not to make your business operate like Caplist. It is to make Caplist fit the business you already operate.</p>

        <div className="studio-reseller">
          <div>
            <p className="studio-kicker">Your business stays in front</p>
            <h2>Your client.<br />Your service.<br /><span>Your price.</span></h2>
          </div>
          <div className="studio-prose">
            <p>Your agents continue buying from you. You choose which Caplist-created products to offer, how they fit into your packages and what your client pays.</p>
            <p>Caplist performs the production work behind the scenes while your media business owns the relationship and the service experience.</p>
            <p>For larger teams, deeper branding and white-label options can become available as the platform expands.</p>
            <strong>Caplist creates more product capacity.<br />You decide how to turn it into revenue.</strong>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="brand-footer">
      <div className="shell">
        <div className="brand-footer-main">
          <div>
            <a href="/#top" aria-label="Caplist Studio home"><CaplistLogo /></a>
            <h2>Capture once. Sell more.</h2>
            <p>Turn professional property media you have already captured into additional finished products your clients can buy.</p>
          </div>
          <nav aria-label="Footer navigation">
            <h3 className="footer-nav-heading">Explore</h3>
            <a href="/#products">Products</a>
            <a href="/#how-it-works">How It Works</a>
            <a href="/#for-media-businesses">For Media Businesses</a>
            <a href="/pricing">Pricing</a>
            <a href="/resources">Resources</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
            <AppLoginLink>Log In</AppLoginLink>
          </nav>
          <div className="brand-footer-contact">
            <h3 className="footer-nav-heading">Get in touch</h3>
            <p className="studio-kicker">See if Caplist fits your business</p>
            <a href={`mailto:${CONTACTS.general}`}>{CONTACTS.general} <ArrowUpRight size={18} /></a>
            <AccessLink />
          </div>
        </div>
        <div className="brand-footer-bottom">
          <span>© {new Date().getFullYear()} Caplist Studio</span>
          <div>
            <a href="/privacy">Privacy</a>
            <a href="/media-policy">Media Handling</a>
            <a href="/terms">Terms</a>
            <a href="/#top">Back to top ↑</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function MarketingPage() {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <SiteHeader />
      <main id="main-content" className="studio-home">
        <Hero />
        <CommercialIdea />
        <SourceMedia />
        <HowItWorks />
        <Catalogue />
        <BusinessBenefits />
        <QualityAndControl />
        <WorkflowAndReseller />
        <section className="studio-vision studio-section">
          <div className="shell">
            <SectionHeading
              eyebrow="More useful products as the technology improves"
              title="You should not have to chase every new AI tool to keep your product menu moving forward."
            />
            <p>
              Caplist watches new visual-production capabilities and turns the useful ones into repeatable property-media products only when they are reliable enough for professional work.
            </p>
            <strong>The point is not more software to learn.<br />The point is more products your business can sell.</strong>
            <a className="studio-text-link" href="/about">Why Caplist exists <ArrowUpRight size={18} /></a>
          </div>
        </section>
        <AccessClose />
      </main>
      <Footer />
    </>
  );
}
