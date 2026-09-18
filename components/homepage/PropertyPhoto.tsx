"use client";
import Image, { type ImageLoaderProps } from "next/image";
function loader({ src, width }: ImageLoaderProps) {
  const size = [480, 960, 1600, 2400].find((value) => value >= width) ?? 2400;
  return `${src}-${size}.webp`;
}

export const propertyPhotos = {
  living: "Chapel Street living room opening onto the balcony",
  kitchen:
    "Chapel Street kitchen with white cabinetry and a window above the sink",
  bedroom: "Chapel Street bedroom with a large window and upholstered bed",
  balcony: "Chapel Street balcony with plants and outdoor seating",
  bathroom:
    "Chapel Street bathroom with a glass shower and wall-mounted vanity",
} as const;
export type PropertyPhotoKey = keyof typeof propertyPhotos;

export function PropertyPhoto({
  photo,
  sizes = "50vw",
  priority = false,
}: {
  photo: PropertyPhotoKey;
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <Image
      loader={loader}
      src={`/media/chapel/${photo}`}
      alt={propertyPhotos[photo]}
      fill
      sizes={sizes}
      preload={priority}
      style={{ objectFit: "cover" }}
    />
  );
}
