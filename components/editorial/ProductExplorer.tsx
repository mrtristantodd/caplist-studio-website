"use client";
import { useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { products } from "@/lib/demo-media";
import { Photo, FrameCorners } from "./Photo";
import { PreviewButton } from "./PreviewButton";
const mediaTypes = ["Photography", "Video", "Drone", "Vertical"] as const;
type MediaType = (typeof mediaTypes)[number];
function suitability(id: string, selected: MediaType[]) {
  const photo = selected.includes("Photography"),
    video = selected.includes("Video") || selected.includes("Vertical"),
    drone = selected.includes("Drone");
  if (id === "photo-reel")
    return photo
      ? [
          "Best Fit",
          "Professional photography supports a motion-led photo product.",
        ]
      : [
          "Unavailable",
          "Add professional photography to explore a Photo Reel.",
        ];
  if (id === "mixed-media")
    return photo && video && drone
      ? [
          "Best Fit",
          "Photography, video and drone support a fuller property story.",
        ]
      : photo && video
        ? [
            "Good Fit",
            "Photos and video can form a combined edit; drone adds another perspective.",
          ]
        : [
            "Unavailable",
            "Combine photography and property video to explore this product.",
          ];
  if (id === "feature-reel")
    return video
      ? [
          "Good Fit",
          "Suitable video needs enough coverage of the property’s features.",
        ]
      : [
          "Unavailable",
          "Add property video with coverage of the features you want to show.",
        ];
  if (id === "vertical-reel")
    return selected.includes("Vertical")
      ? ["Best Fit", "Native vertical footage supports this delivery format."]
      : selected.includes("Video")
        ? ["Limited", "Landscape footage needs a suitable vertical-safe crop."]
        : ["Unavailable", "Add property video or native vertical footage."];
  return video
    ? [
        "Good Fit",
        "Suitable property footage can support a concise opening edit.",
      ]
    : ["Unavailable", "Add property video with a strong opening sequence."];
}
export function ProductExplorer() {
  const [selected, setSelected] = useState<MediaType[]>([
    "Photography",
    "Video",
    "Drone",
  ]);
  const available = products.filter(
    (p) => suitability(p.id, selected)[0] !== "Unavailable",
  ).length;
  return (
    <div className="product-explorer">
      <div className="explorer-controls">
        <div>
          <p className="studio-kicker">Explore a source-media example</p>
          <h3>What have you already captured?</h3>
        </div>
        <fieldset>
          <legend className="sr-only">Available source media</legend>
          {mediaTypes.map((type) => (
            <label key={type}>
              <input
                type="checkbox"
                checked={selected.includes(type)}
                onChange={() =>
                  setSelected((current) =>
                    current.includes(type)
                      ? current.filter((x) => x !== type)
                      : [...current, type],
                  )
                }
              />
              {type}
            </label>
          ))}
        </fieldset>
      </div>
      <p className="explorer-result" role="status">
        {available} of {products.length} products could suit this media
        combination.
      </p>
      <div className="explorer-grid">
        {products.map((p) => {
          const [state, reason] = suitability(p.id, selected);
          return (
            <article
              id={p.id}
              key={p.id}
              className="explorer-card"
              data-availability={state}
            >
              <div className="reference-product-image" data-ratio={p.ratio}>
                <Photo
                  media={p.media}
                  sizes="(max-width:767px) 90vw, (max-width:1100px) 45vw, 30vw"
                />
                <FrameCorners />
                <span className="reference-ratio">{p.ratio}</span>
              </div>
              <div className="explorer-card-copy">
                <div className="fit-state" data-fit={state}>
                  {state === "Best Fit" && <Check size={14} />}
                  <span>{state}</span>
                </div>
                <h3>{p.name}</h3>
                <span className="product-meta">
                  {p.duration} · {p.ratio}
                </span>
                <p>{p.purpose}</p>
                <p className="fit-reason">{reason}</p>
                <PreviewButton product={p} className="explorer-preview">
                  Preview {p.name}
                  <ArrowUpRight size={18} />
                </PreviewButton>
              </div>
            </article>
          );
        })}
        <aside className="explorer-next">
          <p className="studio-kicker">One source → more outputs</p>
          <h3>
            Your media defines
            <br />
            the possibilities.
          </h3>
          <p>
            These are illustrative fit states based on media type. Actual
            availability also depends on source quality, composition and the
            current release.
          </p>
          <a className="studio-text-link" href="/demo">
            Discuss your media <ArrowUpRight size={18} />
          </a>
        </aside>
      </div>
    </div>
  );
}
