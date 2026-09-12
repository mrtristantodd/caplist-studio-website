/** Isolated, locally hosted demo photography. Replace after art approval. */
export const demoMedia = {
  suburban: {
    src: "/media/suburban",
    alt: "AI property concept: suburban",
    position: "50% 50%",
  },
  weatherboard: {
    src: "/media/weatherboard",
    alt: "AI property concept: weatherboard",
    position: "50% 50%",
  },
  familyKitchen: {
    src: "/media/familyKitchen",
    alt: "AI property concept: family kitchen",
    position: "50% 50%",
  },
  familyLiving: {
    src: "/media/familyLiving",
    alt: "AI property concept: family living",
    position: "50% 50%",
  },
  bedroom: {
    src: "/media/bedroom",
    alt: "AI property concept: bedroom",
    position: "50% 50%",
  },
  bathroom: {
    src: "/media/bathroom",
    alt: "AI property concept: bathroom",
    position: "50% 50%",
  },
  coastal: {
    src: "/media/luxury-coastal",
    alt: "AI concept of a grand classical Australian coastal mansion with gardens and swimming pool",
    position: "50% 50%",
  },
  exterior: {
    src: "/media/luxury-exterior",
    alt: "AI concept of a grand contemporary Australian waterfront mansion at twilight",
    position: "50% 54%",
  },
  living: {
    src: "/media/luxury-living",
    alt: "AI concept of a grand Mediterranean-style Australian luxury home overlooking the harbour",
    position: "50% 50%",
  },
  kitchen: {
    src: "/media/luxury-kitchen",
    alt: "AI concept of a luxury quartzite and walnut kitchen overlooking Sydney Harbour",
    position: "50% 55%",
  },
  aerial: {
    src: "/media/luxury-aerial",
    alt: "AI concept of an expansive Sydney Harbour waterfront estate with pool, tennis court and private jetty",
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
    purpose: "Turn existing property video into vertical content.",
    description:
      "Repurpose suitable professional footage into a polished vertical edit without returning to the property to shoot everything again.",
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
    purpose: "A shorter cut built to create impact quickly.",
    description:
      "Create a concise visual preview from suitable existing footage and media.",
    needs: "Property video · a strong opening sequence",
    media: "suburban",
    label: "Make an entrance",
  },
  {
    id: "feature-reel",
    number: "03",
    name: "Feature Reel",
    duration: "30–45 sec",
    ratio: "16:9",
    purpose: "Create another story from the same property.",
    description:
      "Build an alternative edit around a property’s strongest spaces, features or visual moments.",
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
    purpose: "Turn professional photography into intentional motion.",
    description:
      "Image selection, sequencing, movement, pacing and music combine to create a finished motion product — not a basic slideshow.",
    needs: "Professionally edited photography",
    media: "weatherboard",
    label: "Still images. More possibilities.",
  },
  {
    id: "mixed-media",
    number: "05",
    name: "Mixed Media",
    duration: "30–60 sec",
    ratio: "16:9",
    purpose: "Bring photography, video and drone together.",
    description:
      "Where the supplied assets support it, combine different professional media types into one finished product.",
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
