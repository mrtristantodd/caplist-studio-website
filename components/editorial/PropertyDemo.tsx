"use client";
import { useState } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Photo } from "./Photo";
const formats = [
  {
    ratio: "9:16",
    use: "A vertical placement for your client’s social story.",
  },
  { ratio: "4:5", use: "A portrait placement for your client’s social feed." },
  { ratio: "16:9", use: "A landscape placement for a property presentation." },
];
export function PropertyDemo() {
  const [selected, setSelected] = useState(0);
  return (
    <section
      id="standards"
      className="property-study chapter-section"
      aria-labelledby="standards-title"
    >
      <div className="shell">
        <div className="study-heading">
          <div>
            <p className="eyebrow">
              04 / From your files to your client’s channels
            </p>
            <h2 id="standards-title">
              One property image.
              <br />
              See the delivery change.
            </h2>
          </div>
          <p>
            The subject stays the same. The crop changes to suit the placement
            your agent or agency client needs.
          </p>
        </div>
        <div className="study-workbench">
          <div className="study-input">
            <p className="eyebrow">Your input / Property photography</p>
            <div className="study-source">
              <Photo
                media="weatherboard"
                sizes="(max-width:767px) 90vw, 45vw"
              />
              <div
                className="study-crop"
                style={{
                  aspectRatio: formats[selected].ratio.replace(":", "/"),
                  ...(selected === 2 ? { width: "88%", height: "auto" } : {}),
                }}
              />
            </div>
            <h3>Start with the media you already have.</h3>
            <p>
              A suitable source image, with space around the subject to support
              a different crop.
            </p>
          </div>
          <ArrowRight className="study-arrow" />
          <div className="study-output">
            <div
              className="format-controls"
              role="group"
              aria-label="Preview an output format"
            >
              {formats.map((format, index) => (
                <button
                  key={format.ratio}
                  type="button"
                  aria-pressed={selected === index}
                  onClick={() => setSelected(index)}
                >
                  {format.ratio}
                </button>
              ))}
            </div>
            <div className="study-result-stage">
              <div
                className="study-result"
                data-format={formats[selected].ratio}
                style={{
                  aspectRatio: formats[selected].ratio.replace(":", "/"),
                  height: "auto",
                  width: `min(100%, calc(268px * ${formats[selected].ratio.replace(":", "/")}))`,
                }}
              >
                <Photo
                  media="weatherboard"
                  sizes="(max-width:767px) 70vw, 30vw"
                />
                <span>A new perspective.</span>
              </div>
            </div>
            <p aria-live="polite">{formats[selected].use}</p>
          </div>
        </div>
        <div className="study-caption">
          <p>
            Format demonstration using one concept image. This shows framing,
            not a completed client video. Final formats depend on your source
            media.
          </p>
          <a className="text-link" href="/pilot">
            Discuss your own property brief <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
