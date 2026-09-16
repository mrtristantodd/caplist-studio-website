/** Public-facing resource catalogue. Keep partner economics and sales mechanics out of this library. */
export type PublicResourceStatus = "live" | "planned";

export type PublicResource = {
  id: string;
  title: string;
  description: string;
  category: "Commercial" | "Production" | "Products" | "Industry";
  format: string;
  href: string;
  status: PublicResourceStatus;
  featured?: boolean;
};

export const publicResources: PublicResource[] = [
  {
    id: "PUB-002",
    title: "Capture once. Sell more.",
    description:
      "A practical guide to creating more commercial value from professional property media you have already captured.",
    category: "Commercial",
    format: "Guide",
    href: "/resources/capture-once-sell-more",
    status: "planned",
    featured: true,
  },
  {
    id: "PUB-003",
    title: "Five products from one property capture",
    description:
      "See how photography, video, drone and vertical footage can unlock additional professional deliverables.",
    category: "Products",
    format: "Illustrated guide",
    href: "/resources/five-products-from-one-capture",
    status: "planned",
  },
  {
    id: "PUB-004",
    title: "Increase AOV without increasing shoot time",
    description:
      "Why product expansion can create another growth lever for property-media businesses without adding another visit.",
    category: "Commercial",
    format: "Article",
    href: "/resources/increase-aov-without-more-shoot-time",
    status: "planned",
  },
  {
    id: "PUB-005",
    title: "Photo Reel vs Vertical Reel vs Property Teaser",
    description:
      "A clear comparison of what each product is designed to do and the source media each one needs.",
    category: "Products",
    format: "Comparison guide",
    href: "/resources/product-comparison",
    status: "planned",
  },
  {
    id: "PUB-006",
    title: "Landscape video to vertical: what actually works",
    description:
      "The practical constraints behind reframing professional 16:9 property footage into premium 9:16 outputs.",
    category: "Production",
    format: "Technical guide",
    href: "/resources/landscape-video-to-vertical",
    status: "planned",
  },
  {
    id: "PUB-007",
    title: "Why professional source media still matters with AI",
    description:
      "AI can accelerate production, but it does not remove the need for sharp, well-composed, professionally captured source media.",
    category: "Industry",
    format: "Article",
    href: "/resources/professional-source-media-and-ai",
    status: "planned",
  },
  {
    id: "PUB-008",
    title: "What can your media unlock?",
    description:
      "A source-media guide showing how photography, professional video, drone and native vertical footage expand the available product catalogue.",
    category: "Products",
    format: "Interactive guide",
    href: "/resources/source-media-product-guide",
    status: "planned",
  },
  {
    id: "PUB-010",
    title: "How Caplist assesses source-media quality",
    description:
      "An overview of why source suitability matters and why some outputs should remain unavailable when the media cannot support them.",
    category: "Production",
    format: "Guide",
    href: "/resources/source-media-quality",
    status: "planned",
  },
  {
    id: "PUB-011",
    title: "The economics of property-media repurposing",
    description:
      "A commercial guide to additional products, pricing strategy and the revenue potential of getting more from each completed property shoot.",
    category: "Commercial",
    format: "Commercial guide",
    href: "/resources/property-media-repurposing-economics",
    status: "planned",
  },
];

export const resourceCategories = [
  "All",
  "Commercial",
  "Products",
  "Production",
  "Industry",
] as const;
