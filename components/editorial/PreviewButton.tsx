"use client";
import { useRef } from "react";
import { ArrowUpRight, X } from "lucide-react";
import type { Product } from "@/lib/demo-media";
import { Photo, FrameCorners } from "./Photo";
type Notice = "pricing" | "login" | "resources";
const notices = {
  pricing: {
    title: "More value. Pricing to follow.",
    text: "Plans and pricing will be introduced in a later product phase. For now, explore the visual product catalogue and the possibilities in your existing capture.",
    link: "Explore the products",
    href: "/#products",
  },
  login: {
    title: "Studio access comes next.",
    text: "This is the Caplist Studio visual preview. Account access will be available in a later product phase. Explore how captured media becomes additional products below.",
    link: "See how Caplist works",
    href: "/#how-it-works",
  },
  resources: {
    title: "Start with a stronger capture.",
    text: "Professional media is the foundation of every product. This introductory checklist shows what makes an asset suitable for repurposing.",
    link: "Explore professional standards",
    href: "/#standards",
  },
};
export function PreviewButton({
  notice,
  product,
  children,
  className = "",
}: {
  notice?: Notice;
  product?: Product;
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  const info = notices[notice ?? "resources"];
  return (
    <>
      <button
        type="button"
        className={className}
        onClick={() => ref.current?.showModal()}
      >
        {children}
      </button>
      <dialog
        ref={ref}
        className={`preview-dialog ${product ? "product-dialog" : ""}`}
        aria-label={product?.name ?? info.title}
        onClick={(event) => {
          if (event.target === event.currentTarget) ref.current?.close();
        }}
      >
        <button
          type="button"
          className="dialog-close"
          aria-label="Close preview"
          onClick={() => ref.current?.close()}
        >
          <X size={22} />
        </button>
        {product ? (
          <>
            <div className="dialog-photo">
              <Photo
                media={product.media}
                sizes="(max-width: 700px) 90vw, 600px"
              />
              <FrameCorners />
              <span className="image-label">
                Still preview · {product.ratio}
              </span>
            </div>
            <div className="dialog-copy">
              <p className="eyebrow">
                Product {product.number} / Visual concept
              </p>
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <dl>
                <div>
                  <dt>Duration</dt>
                  <dd>{product.duration}</dd>
                </div>
                <div>
                  <dt>Format</dt>
                  <dd>{product.ratio}</dd>
                </div>
              </dl>
              <p className="dialog-needs">Source media: {product.needs}</p>
              <p className="prototype-note">
                Illustrative still preview. No video has been generated.
              </p>
            </div>
          </>
        ) : (
          <div className="dialog-copy">
            <p className="eyebrow">Caplist Studio / Visual preview</p>
            <h2>{info.title}</h2>
            <p>{info.text}</p>
            {notice === "resources" && (
              <ul className="resource-list">
                <li>Professionally edited, full-resolution photography.</li>
                <li>
                  Stable video with consistent exposure and usable coverage.
                </li>
                <li>Room around the subject for a vertical reframe.</li>
                <li>
                  Clear aerial context and a considered mix of perspectives.
                </li>
              </ul>
            )}
            <a
              className="button button-blue"
              href={info.href}
              onClick={() => ref.current?.close()}
            >
              {info.link}
              <ArrowUpRight size={17} />
            </a>
          </div>
        )}
      </dialog>
    </>
  );
}
