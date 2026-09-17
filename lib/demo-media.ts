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
    purpose: "Give clients another social-ready video without another property visit.",
    description:
      "Turn suitable property footage you have already captured into a polished vertical reel your client can use on social — without returning to the property to shoot it again.",
    needs: "Property video or native vertical footage",
    media: "living",
    label: "More from the video you already shot",
  },
  {
    id: "property-teaser",
    number: "02",
    name: "Property Teaser",
    duration: "10–15 sec",
    ratio: "16:9",
    purpose: "Add a short, high-impact video product to the same property order.",
    description:
      "Create a concise teaser from suitable existing property footage — an extra finished product you can offer without adding another shoot or full edit from scratch.",
    needs: "Property video with a strong opening sequence",
    media: "suburban",
    label: "A fast extra product to offer",
  },
  {
    id: "feature-reel",
    number: "03",
    name: "Feature Reel",
    duration: "30–45 sec",
    ratio: "16:9",
    purpose: "Sell a second story from the same property video.",
    description:
      "Create a focused edit around the property’s strongest spaces, features or lifestyle moments, giving the client another reason to upgrade the media package.",
    needs: "Property video with enough coverage of the chosen feature",
    media: "kitchen",
    label: "Another story from the same shoot",
  },
  {
    id: "photo-reel",
    number: "04",
    name: "Photo Reel",
    duration: "15–30 sec",
    ratio: "9:16",
    purpose: "Turn the stills you already deliver into an additional motion product.",
    description:
      "Use the professional photography already captured for the listing to create a finished motion reel with selection, sequencing, movement, pacing and music handled for you.",
    needs: "Professionally edited property photography",
    media: "weatherboard",
    label: "One photo set. Another product to sell",
  },
  {
    id: "mixed-media",
    number: "05",
    name: "Mixed Media Reel",
    duration: "30–60 sec",
    ratio: "16:9",
    purpose: "Turn multiple media types from one shoot into a premium additional product.",
    description:
      "Bring suitable photography, property video and drone footage together in one finished edit — creating another premium deliverable from media your team has already captured.",
    needs: "Photography + property video + drone",
    media: "aerial",
    label: "More value from the complete capture",
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
