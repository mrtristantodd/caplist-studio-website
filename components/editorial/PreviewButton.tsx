"use client";
import { MotionPreview } from "./MotionPreview";
import { useRef } from "react";
import { ArrowUpRight, X } from "lucide-react";
import type { Product } from "@/lib/demo-media";
import { FrameCorners } from "./Photo";
type Notice = "pricing" | "login" | "resources";
const notices = {
  pricing: {
    title: "See current pricing.",
    text: "View the introductory subscription plans and learn how production usage works before you decide whether Caplist Studio fits your business.",
    link: "View pricing",
    href: "/pricing",
  },
  login: {
    title: "Caplist Studio is currently invite-only.",
    text: "If you run a professional property-media business, book a demo and we’ll talk through how Caplist could fit your existing workflow.",
    link: "Book a demo",
    href: "/demo",
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
              <MotionPreview product={product} />
              <FrameCorners />
              <span className="image-label">
                Motion preview · {product.ratio}
              </span>
            </div>
            <div className="dialog-copy">
              <p className="eyebrow">Product {product.number} / Example</p>
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
            </div>
          </>
        ) : (
          <div className="dialog-copy">
            <p className="eyebrow">Caplist Studio</p>
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
