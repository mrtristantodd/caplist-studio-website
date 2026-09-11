/** Isolated, locally hosted demo photography. Replace after art approval. */
export const demoMedia = {
  exterior: {
    src: "/media/au-exterior",
    alt: "Parkdale House by R Architecture in Victoria, with a mature gum tree and illuminated timber facade",
    position: "50% 54%",
  },
  living: {
    src: "/media/au-living",
    alt: "Living room with garden-facing glazing in Sydney, New South Wales",
    position: "50% 50%",
  },
  kitchen: {
    src: "/media/au-kitchen",
    alt: "White kitchen and timber detailing in Crows Nest, New South Wales",
    position: "50% 55%",
  },
  aerial: {
    src: "/media/au-aerial",
    alt: "Aerial view of waterfront homes in Sylvania Waters, New South Wales",
    position: "50% 50%",
  },
} as const;
export type MediaKey = keyof typeof demoMedia;
export const products = [
  {
    id: "vertical-reel",
    number: "01",
    name: "Vertical Video Reel",
    duration: "20–30 sec",
    ratio: "9:16",
    purpose: "A new perspective. Made for the small screen.",
    description:
      "Turn suitable landscape footage into a considered vertical story, ready for your client’s social channels.",
    needs: "Property video · vertical-safe composition",
    media: "living",
    label: "A different perspective",
  },
  {
    id: "property-teaser",
    number: "02",
    name: "Property Teaser",
    duration: "10–15 sec",
    ratio: "16:9",
    purpose: "The first impression, distilled.",
    description:
      "A concise property introduction that puts the strongest moments first and gives your client another way to launch a listing.",
    needs: "Property video · a strong opening sequence",
    media: "exterior",
    label: "Make an entrance",
  },
  {
    id: "feature-reel",
    number: "03",
    name: "Alternative / Feature Reel",
    duration: "30–45 sec",
    ratio: "16:9",
    purpose: "Give the details their own story.",
    description:
      "Create another edit around the spaces, finishes and features that make a property distinctive.",
    needs: "Property video · sufficient feature coverage",
    media: "kitchen",
    label: "A closer look",
  },
  {
    id: "photo-reel",
    number: "04",
    name: "Photo Reel",
    duration: "15–30 sec",
    ratio: "9:16",
    purpose: "Your photography. A new format.",
    description:
      "A purposeful sequence built from professionally edited photographs, extending the value of a stills-only shoot.",
    needs: "Professionally edited photography",
    media: "exterior",
    label: "Still images. More possibilities.",
  },
  {
    id: "mixed-media",
    number: "05",
    name: "Mixed Media Reel",
    duration: "30–60 sec",
    ratio: "16:9",
    purpose: "Bring the whole property story together.",
    description:
      "Photography, property video and aerial perspectives combine into a richer visual product from the media already captured.",
    needs: "Photography + property video + drone",
    media: "aerial",
    label: "The complete picture",
  },
] as const satisfies readonly {
  id: string;
  number: string;
  name: string;
  duration: string;
  ratio: string;
  purpose: string;
  description: string;
  needs: string;
  media: MediaKey;
  label: string;
}[];
export type Product = (typeof products)[number];
