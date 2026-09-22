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
        const active = selected && product.name === "Vertical Video Reel";
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

function UploadScene() {
  return (
    <div className={styles.uploadLayout}>
      <div className={styles.dropzone}>
        <span className={styles.dropIcon}><Upload size={23} /></span>
        <strong>Upload completed property media</strong>
        <p>Drop files here or choose a folder</p>
        <button type="button">Choose media</button>
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

function UploadingScene() {
  return (
    <div className={styles.uploadingLayout}>
      <ThumbnailGrid compact />
      <aside className={styles.uploadStatus}>
        <div className={styles.statusHeading}>
          <span><ArrowDownToLine size={18} /></span>
          <div><strong>Uploading media</strong><small>Professional source files</small></div>
        </div>
        <div className={styles.progressTrack}><span style={{ width: "76%" }} /></div>
        <div className={styles.progressMeta}><span>76%</span><span>30 of 39 files</span></div>
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
          <span>Kitchen</span><span>Exterior</span><span>Pool</span><span>4K</span><span>Vertical-safe</span>
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
        <strong>Vertical Video Reel</strong>
        <dl>
          <div><dt>Format</dt><dd>9:16</dd></div>
          <div><dt>Duration</dt><dd>20 to 30 sec</dd></div>
          <div><dt>Creative control</dt><dd>Style + source selection</dd></div>
        </dl>
        <button type="button">Create reel <ArrowRight size={16} /></button>
      </aside>
    </div>
  );
}

function CreateScene() {
  const statuses = [
    ["Selecting strongest scenes", true],
    ["Reframing for 9:16", true],
    ["Building sequence", true],
    ["Rendering", false],
    ["Quality check", false],
  ] as const;
  return (
    <div className={styles.createLayout}>
      <div className={styles.sourceRail}>
        {propertyMedia.slice(0, 5).map((media) => (
          <img key={media.src} src={media.src} alt="" />
        ))}
      </div>
      <div className={styles.feedLine}><ArrowRight size={18} /></div>
      <div className={styles.verticalOutput}>
        <img src="/media/dp001/pool.webp" alt="Vertical reel preview showing the pool terrace" />
        <span>9:16</span>
      </div>
      <aside className={styles.processingList}>
        {statuses.map(([label, complete]) => (
          <p key={label} className={complete ? styles.complete : ""}>
            {complete ? <Check size={14} /> : <span />}{label}
          </p>
        ))}
      </aside>
    </div>
  );
}

function ReadyScene() {
  return (
    <div className={styles.readyLayout}>
      <div className={styles.reelPreview}>
        <video
          controls
          muted
          playsInline
          preload="metadata"
          poster="/media/dp001/drone.webp"
          aria-label="DP001 property reel preview"
        >
          <source src="/media/dp001/reel-v03.mp4" type="video/mp4" />
        </video>
        <span className={styles.readyBadge}><Check size={13} />Ready</span>
      </div>
      <aside className={styles.outputDetails}>
        <span className={styles.outputIcon}><Play size={19} /></span>
        <p>Vertical Video Reel</p>
        <strong>9 Coastview Drive</strong>
        <dl>
          <div><dt>Duration</dt><dd>23 sec</dd></div>
          <div><dt>Output</dt><dd>1080 × 1920</dd></div>
          <div><dt>Source</dt><dd>Existing property media</dd></div>
        </dl>
        <div className={styles.outputActions}>
          <button type="button"><Play size={15} />Preview</button>
          <a href="/media/dp001/reel-v03.mp4" download><Download size={15} />Download</a>
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
      <ArrowRight className={styles.outcomeArrow} size={25} />
      <div className={styles.outcomeProducts}>
        <span>Multiple professional outputs</span>
        <div>
          {unlockedProducts.map((product) => (
            <article key={product.name}><Film size={15} /><strong>{product.name}</strong></article>
          ))}
        </div>
        <p>Capture once. Create more. Sell more.</p>
      </div>
    </div>
  );
}

export function WorkflowScene({ state }: { state: WorkflowState }) {
  switch (state) {
    case "upload": return <UploadScene />;
    case "uploading": return <UploadingScene />;
    case "understand": return <UnderstandScene />;
    case "unlock": return <UnlockScene />;
    case "choose": return <ChooseScene />;
    case "create": return <CreateScene />;
    case "ready": return <ReadyScene />;
    case "outcome": return <OutcomeScene />;
  }
}
