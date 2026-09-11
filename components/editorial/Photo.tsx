"use client";
import Image, { type ImageLoaderProps } from "next/image";
import { demoMedia, type MediaKey } from "@/lib/demo-media";
// Responsive files are served directly; no remote image service or image API.
function localLoader({ src, width }: ImageLoaderProps) {
  const size =
    [480, 960, 1600, 2200].find((candidate) => candidate >= width) ?? 2200;
  return `${src}-${size}.webp`;
}
export function Photo({
  media,
  className = "",
  sizes = "100vw",
  priority = false,
  decorative = false,
}: {
  media: MediaKey;
  className?: string;
  sizes?: string;
  priority?: boolean;
  decorative?: boolean;
}) {
  const image = demoMedia[media];
  return (
    <Image
      loader={localLoader}
      src={image.src}
      alt={decorative ? "" : image.alt}
      fill
      sizes={sizes}
      preload={priority}
      className={`photo ${className}`}
      style={{ objectPosition: image.position }}
    />
  );
}
export function FrameCorners({ className = "" }: { className?: string }) {
  return (
    <span className={`frame-corners ${className}`} aria-hidden="true">
      <i />
      <i />
      <i />
      <i />
    </span>
  );
}
