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
      "A practical guide to creating more commercial value from a property shoot you have already completed.",
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
      "See how photography, video, drone and vertical footage from one property can become additional products to offer the same client.",
    category: "Products",
    format: "Illustrated guide",
    href: "/resources/five-products-from-one-capture",
    status: "planned",
  },
  {
    id: "PUB-004",
    title: "Increase order value without increasing shoot time",
    description:
      "How adding products to completed property jobs can create another growth lever without adding another property visit.",
    category: "Commercial",
    format: "Article",
    href: "/resources/increase-aov-without-more-shoot-time",
    status: "planned",
  },
  {
    id: "PUB-005",
    title: "Photo Reel vs Vertical Reel vs Property Teaser",
    description:
      "A plain-English comparison of what each product gives the client and the property media needed to create it.",
    category: "Products",
    format: "Comparison guide",
    href: "/resources/product-comparison",
    status: "planned",
  },
  {
    id: "PUB-006",
    title: "Can landscape property video become a vertical reel?",
    description:
      "What needs to be true before professional 16:9 property footage can be reframed into a polished 9:16 product.",
    category: "Production",
    format: "Technical guide",
    href: "/resources/landscape-video-to-vertical",
    status: "planned",
  },
  {
    id: "PUB-007",
    title: "Why professional source media still matters with AI",
    description:
      "AI can speed up production, but sharp, well-composed and professionally captured source media still determines what is worth creating.",
    category: "Industry",
    format: "Article",
    href: "/resources/professional-source-media-and-ai",
    status: "planned",
  },
  {
    id: "PUB-008",
    title: "What else could you sell from the media you already capture?",
    description:
      "A source-media guide showing how photography, property video, drone and native vertical footage can expand the product menu for one property.",
    category: "Products",
    format: "Interactive guide",
    href: "/resources/source-media-product-guide",
    status: "planned",
  },
  {
    id: "PUB-010",
    title: "When should Caplist say no to a product?",
    description:
      "Why some media should not be used for some outputs, and how quality checks protect the standard of the finished product.",
    category: "Production",
    format: "Guide",
    href: "/resources/source-media-quality",
    status: "planned",
  },
  {
    id: "PUB-011",
    title: "The business case for getting more from every property shoot",
    description:
      "A commercial guide to additional products, pricing strategy and the revenue opportunity inside media you have already paid to capture.",
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
