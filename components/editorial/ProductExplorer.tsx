"use client";
import { useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { products } from "@/lib/demo-media";
import { Photo, FrameCorners } from "./Photo";
import { PreviewButton } from "./PreviewButton";

const mediaTypes = ["Photography", "Video", "Drone", "Vertical"] as const;
type MediaType = (typeof mediaTypes)[number];

type FitState = "Best Fit" | "Good Fit" | "Limited" | "Unavailable";

function suitability(id: string, selected: MediaType[]): [FitState, string] {
  const photo = selected.includes("Photography");
  const video = selected.includes("Video") || selected.includes("Vertical");
  const drone = selected.includes("Drone");

  if (id === "photo-reel")
    return photo
      ? [
          "Best Fit",
          "You already have the key ingredient: a professional photo set that can become an additional motion product.",
        ]
      : [
          "Unavailable",
          "Add professional property photography to explore a Photo Reel.",
        ];

  if (id === "mixed-media")
    return photo && video && drone
      ? [
          "Best Fit",
          "You have the mix of photography, video and drone needed to explore a premium combined edit.",
        ]
      : photo && video
        ? [
            "Good Fit",
            "Photos and property video can support a combined edit; drone footage can add another premium layer.",
          ]
        : [
            "Unavailable",
            "Add photography and property video to explore a mixed-media product.",
          ];

  if (id === "feature-reel")
    return video
      ? [
          "Good Fit",
          "Your property video may support a second, focused edit if it includes enough coverage of a standout space or feature.",
        ]
      : [
          "Unavailable",
          "Add property video to explore a feature-focused second edit.",
        ];

  if (id === "vertical-reel")
    return selected.includes("Vertical")
      ? [
          "Best Fit",
          "Native vertical footage gives Caplist the strongest starting point for a social-ready vertical reel.",
        ]
      : selected.includes("Video")
        ? [
            "Limited",
            "Your landscape video may still work if the key rooms and features can be framed cleanly in a vertical format.",
          ]
        : [
            "Unavailable",
            "Add property video or native vertical footage to explore a Vertical Video Reel.",
          ];

  return video
    ? [
        "Good Fit",
        "Your existing property footage may be enough to create a short teaser as an additional product for the same listing.",
      ]
    : [
        "Unavailable",
        "Add property video to explore a short Property Teaser.",
      ];
}

function visibleFitLabel(state: FitState) {
  if (state === "Best Fit") return "Strong match";
  if (state === "Good Fit") return "Worth exploring";
  if (state === "Limited") return "May be possible";
  return "Needs more media";
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
          <p className="studio-kicker">Start with a property you have already shot</p>
          <h3>What media did you capture?</h3>
        </div>
        <fieldset>
          <legend className="sr-only">Media captured for this property</legend>
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
        With this media, you could potentially offer {available} of {products.length} Caplist products from the same property.
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
                  <span>{visibleFitLabel(state)}</span>
                </div>
                <h3>{p.name}</h3>
                <span className="product-meta">
                  {p.duration} · {p.ratio}
                </span>
                <p>{p.purpose}</p>
                <p className="fit-reason">{reason}</p>
                <PreviewButton product={p} className="explorer-preview">
                  See a {p.name}
                  <ArrowUpRight size={18} />
                </PreviewButton>
              </div>
            </article>
          );
        })}

        <aside className="explorer-next">
          <p className="studio-kicker">Same shoot. More to offer.</p>
          <h3>
            See what else
            <br />
            you could sell.
          </h3>
          <p>
            Caplist checks the media you already captured and shows which additional products are worth creating for that property. You choose what makes sense for your client.
          </p>
          <a className="studio-text-link" href="/demo">
            Show us a recent shoot <ArrowUpRight size={18} />
          </a>
        </aside>
      </div>
    </div>
  );
}
