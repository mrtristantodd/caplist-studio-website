import { useEffect, useRef, useState } from "react";
import {
  ArrowDownToLine,
  ArrowRight,
  Check,
  CheckCircle2,
  Download,
  FileVideo2,
  Film,
  ImageIcon,
  Images,
  Play,
  ScanSearch,
  Upload,
} from "lucide-react";
import {
  propertyMedia,
  workflowReel,
  unlockedProducts,
  type WorkflowState,
} from "./workflow-data";
import styles from "./workflow.module.css";

function ThumbnailGrid({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`${styles.thumbnailGrid} ${compact ? styles.compactGrid : ""}`}>
      {propertyMedia.map((media, index) => (
        <figure key={media.src} className={index === 0 ? styles.thumbLead : ""}>
          <img src={media.src} alt={media.alt} />
          <figcaption>{media.label}</figcaption>
        </figure>
      ))}
    </div>
  );
}

function MediaCounts() {
  return (
    <div className={styles.mediaCounts}>
      <span><Images size={15} />27 photos</span>
      <span><FileVideo2 size={15} />Professional video</span>
      <span><Film size={15} />Drone media</span>
    </div>
  );
}

function ProductList({ selected = false }: { selected?: boolean }) {
  return (
    <div className={styles.productList}>
      {unlockedProducts.map((product) => {
        const active = selected && product.name === "Premium Mixed Media Reel";
        return (
          <article key={product.name} className={active ? styles.selectedProduct : ""}>
            <span className={styles.productIcon}>
              {active ? <Check size={15} /> : <Film size={15} />}
            </span>
            <div>
              <strong>{product.name}</strong>
              <small>{product.source}</small>
            </div>
            <span>{product.format}</span>
          </article>
        );
      })}
    </div>
  );
}

function UploadScene({ animated = false }: { animated?: boolean }) {
  return (
    <div className={styles.uploadLayout}>
      <div className={styles.dropzone}>
        {animated ? <div className={styles.incomingMedia} aria-label="Existing photography, video and drone media">
          {[propertyMedia[0], propertyMedia[1], propertyMedia[5]].map(media => <img key={media.src} src={media.src} alt={media.alt} />)}
        </div> : <span className={styles.dropIcon}><Upload size={23} /></span>}
        <strong>Upload completed property media</strong>
        <p>Drop files here or choose a folder</p>
        <span className={styles.demoButton}>Choose media</span>
      </div>
      <aside className={styles.sourceSummary}>
        <div className={styles.projectPhoto}>
          <img src="/media/dp001/front.webp" alt="Northern Beaches residence" />
        </div>
        <strong>9 Coastview Drive</strong>
        <span>Northern Beaches, NSW</span>
        <MediaCounts />
      </aside>
    </div>
  );
}

function UploadingScene({ animated = false }: { animated?: boolean }) {
  return (
    <div className={styles.uploadingLayout}>
      <ThumbnailGrid compact />
      <aside className={styles.uploadStatus}>
        <div className={styles.statusHeading}>
          <span><ArrowDownToLine size={18} /></span>
          <div><strong>Uploading media</strong><small>Professional source files</small></div>
        </div>
        <div className={styles.progressTrack}><span style={{ width: animated ? "100%" : "76%", transformOrigin: "left" }} /></div>
        <div className={styles.progressMeta}><span data-upload-percent>76%</span><span data-upload-files>30 of 39 files</span></div>
        <MediaCounts />
      </aside>
    </div>
  );
}

function UnderstandScene() {
  const groups = [
    { title: "Photography", detail: "27 files", icon: ImageIcon, image: propertyMedia[2] },
    { title: "Professional video", detail: "4K landscape", icon: FileVideo2, image: propertyMedia[1] },
    { title: "Drone", detail: "Location context", icon: Film, image: propertyMedia[5] },
  ];
  return (
    <div className={styles.understandLayout}>
      <div className={styles.mediaGroups}>
        {groups.map(({ title, detail, icon: Icon, image }) => (
          <article key={title}>
            <img src={image.src} alt={image.alt} />
            <div><Icon size={16} /><strong>{title}</strong><span>{detail}</span></div>
          </article>
        ))}
      </div>
      <aside className={styles.analysisPanel}>
        <span className={styles.analysisIcon}><ScanSearch size={20} /></span>
        <strong>Media organised</strong>
        {["Rooms and features identified", "Quality and format checked", "Suitable outputs matched"].map((item) => (
          <p key={item}><CheckCircle2 size={15} />{item}</p>
        ))}
        <div className={styles.analysisTags}>
          <span>Kitchen</span><span>Exterior</span><span>Pool</span><span>4K</span><span>Suitable for vertical</span>
        </div>
      </aside>
    </div>
  );
}

function UnlockScene() {
  return (
    <div className={styles.unlockLayout}>
      <div className={styles.unlockSummary}>
        <div className={styles.unlockImage}>
          <img src="/media/dp001/drone.webp" alt="Aerial view of the property" />
          <span><Check size={14} />Source quality passed</span>
        </div>
        <p>We found 27 photos, professional video and drone footage.</p>
        <MediaCounts />
      </div>
      <ProductList />
    </div>
  );
}

function ChooseScene() {
  return (
    <div className={styles.chooseLayout}>
      <ProductList selected />
      <aside className={styles.choiceSummary}>
        <span className={styles.choiceIcon}><Film size={20} /></span>
        <p>Selected product</p>
        <strong>Premium Mixed Media Reel</strong>
        <dl>
          <div><dt>Format</dt><dd>16:9</dd></div>
          <div><dt>Duration</dt><dd>23.4 sec</dd></div>
          <div><dt>Creative control</dt><dd>Style + source selection</dd></div>
        </dl>
        <span className={styles.demoButton}>Create reel <ArrowRight size={16} /></span>
      </aside>
    </div>
  );
}

function CreateScene({ animated = false }: { animated?: boolean }) {
  const statuses = [
    ["Selecting strongest scenes", true],
    ["Building sequence", true],
    ["Applying motion treatment", true],
    ["Rendering", false],
    ["Quality check", false],
  ] as const;
  return (
    <div className={styles.createLayout}>
      <div className={styles.sourceRail}>
        {propertyMedia.slice(0, 5).map((media) => (
          <img key={media.src} src={media.src} alt="" />
        ))}
        {animated && <div className={styles.flyingMedia} aria-hidden="true">
          {propertyMedia.slice(0, 3).map(media => <img key={media.src} src={media.src} alt="" />)}
        </div>}
      </div>
      <div className={styles.feedLine}><ArrowRight size={18} /></div>
      <div className={styles.verticalOutput}>
        <img src="/media/dp001/pool.webp" alt="Premium Mixed Media Reel preview showing the pool terrace" />
        <span>16:9</span>
      </div>
      <aside className={styles.processingList}>
        {statuses.map(([label, complete]) => (
          <p key={label} className={complete ? styles.complete : ""}>
            {complete || animated ? <Check size={14} /> : <span />}{label}
          </p>
        ))}
      </aside>
    </div>
  );
}

function ReadyScene({ animated = false, running = false, paused = false }: { animated?: boolean; running?: boolean; paused?: boolean }) {
  const video = useRef<HTMLVideoElement>(null);
  const [manualPlaying, setManualPlaying] = useState(false);
  const [unavailable, setUnavailable] = useState(false);
  useEffect(() => {
    const media = video.current;
    if (!media) return;
    const play = !paused && (running || manualPlaying);
    if (play) void media.play().catch(() => setUnavailable(true));
    else media.pause();
    return () => media.pause();
  }, [animated, running, manualPlaying, paused]);
  useEffect(() => {
    const media = video.current;
    if (!media) return;
    const pauseHidden = () => { if (document.hidden) { media.pause(); setManualPlaying(false); } };
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) { media.pause(); setManualPlaying(false); }
    });
    observer.observe(media);
    document.addEventListener("visibilitychange", pauseHidden);
    return () => { observer.disconnect(); document.removeEventListener("visibilitychange", pauseHidden); };
  }, []);
  return (
    <div className={styles.readyLayout}>
      <div className={styles.reelPreview}>
        <video
          ref={video}
          controls={!animated}
          muted
          playsInline
          preload="none"
          poster={workflowReel.poster}
          onLoadedMetadata={() => { if (animated && video.current) video.current.currentTime = workflowReel.excerptStart; }}
          onError={() => setUnavailable(true)}
          aria-label="DP001 property reel preview"
        >
          <source src={workflowReel.src} type="video/mp4" />
        </video>
        <span className={styles.readyBadge}>{workflowReel.previewLabel}</span>
        {unavailable && <span className={styles.videoFallback}>Preview available to download</span>}
      </div>
      <aside className={styles.outputDetails}>
        <span className={styles.outputIcon}><Play size={19} /></span>
        <p>Premium Mixed Media Reel</p>
        <strong>9 Coastview Drive</strong>
        <dl>
          <div><dt>Duration</dt><dd>{workflowReel.durationLabel}</dd></div>
          <div><dt>Format</dt><dd>{workflowReel.targetFormat}</dd></div>
          <div><dt>Media</dt><dd>{workflowReel.mediaLabel}</dd></div>
          <div><dt>Source</dt><dd>Existing property media</dd></div>
        </dl>
        <div className={styles.outputActions}>
          <button type="button" onClick={() => setManualPlaying(value => !value)} aria-pressed={manualPlaying}>
            <Play size={15} />{manualPlaying ? "Pause preview" : "Preview"}</button>
          <a href={workflowReel.src} download aria-label="Download the final Premium Mixed Media Reel"><Download size={15} />Download</a>
        </div>
      </aside>
    </div>
  );
}

function OutcomeScene() {
  return (
    <div className={styles.outcomeLayout}>
      <div className={styles.outcomeSource}>
        <span>One property</span>
        <div className={styles.outcomeStack}>
          {propertyMedia.slice(0, 3).map((media) => (
            <img key={media.src} src={media.src} alt="" />
          ))}
        </div>
        <strong>One media set</strong>
      </div>
      <div className={styles.outcomeBridge} aria-hidden="true">
        <i />
        <div className={styles.outcomeFragments}>
          {propertyMedia.slice(0, 3).map(media => <img key={media.src} src={media.src} alt="" />)}
        </div>
      </div>
      <div className={styles.outcomeProducts}>
        <span>Multiple professional outputs</span>
        <div>
          {unlockedProducts.filter(product => product.name !== "Premium Mixed Media Reel").map((product) => (
            <article key={product.name}><Film size={15} /><strong>{product.name}</strong></article>
          ))}
        </div>
        <p>Capture once. Create more. Sell more.</p>
      </div>
    </div>
  );
}

export function WorkflowScene({ state, animated = false, running = false, paused = false }: { state: WorkflowState; animated?: boolean; running?: boolean; paused?: boolean }) {
  switch (state) {
    case "upload": return <UploadScene animated={animated} />;
    case "uploading": return <UploadingScene animated={animated} />;
    case "understand": return <UnderstandScene />;
    case "unlock": return <UnlockScene />;
    case "choose": return <ChooseScene />;
    case "create": return <CreateScene animated={animated} />;
    case "ready": return <ReadyScene animated={animated} running={running} paused={paused} />;
    case "outcome": return <OutcomeScene />;
  }
}
