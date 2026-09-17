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
    id: "PUB-001",
    title: "Capture once. Create more. Sell more.",
    description:
      "A practical guide to getting more commercial value from a property shoot you have already completed.",
    category: "Commercial",
    format: "Guide",
    href: "",
    status: "planned",
    featured: true,
  },
  {
    id: "PUB-002",
    title: "How one property shoot becomes a larger product offering",
    description:
      "See how professional photography, video, drone and vertical footage can become multiple finished products.",
    category: "Products",
    format: "Guide",
    href: "",
    status: "planned",
    featured: false,
  },
  {
    id: "PUB-003",
    title: "Increase order value without increasing shoot time",
    description:
      "How additional products create another growth lever without another property visit.",
    category: "Commercial",
    format: "Guide",
    href: "",
    status: "planned",
    featured: false,
  },
  {
    id: "PUB-004",
    title: "Photo Reel, Vertical Reel, Teaser or Feature Reel?",
    description:
      "A plain-English guide to what each product is, why a client would buy it and what media creates it.",
    category: "Products",
    format: "Guide",
    href: "",
    status: "planned",
    featured: false,
  },
  {
    id: "PUB-005",
    title: "From landscape video to vertical content",
    description:
      "How professional landscape property footage can be repurposed into mobile-first property media.",
    category: "Production",
    format: "Guide",
    href: "",
    status: "planned",
    featured: false,
  },
  {
    id: "PUB-006",
    title: "Give every piece of media more than one job",
    description:
      "Ways to extract more commercial outputs from photography, video and drone already captured.",
    category: "Production",
    format: "Guide",
    href: "",
    status: "planned",
    featured: false,
  },
  {
    id: "PUB-007",
    title: "Why professional source media still matters",
    description:
      "Why strong capture remains the foundation of professional output as production becomes more automated.",
    category: "Industry",
    format: "Guide",
    href: "",
    status: "planned",
    featured: false,
  },
  {
    id: "PUB-008",
    title: "What can your existing media become?",
    description:
      "A source-to-product guide covering photography, video, drone and native vertical content.",
    category: "Products",
    format: "Guide",
    href: "",
    status: "planned",
    featured: false,
  },
  {
    id: "PUB-009",
    title: "More content for the same property campaign",
    description:
      "How additional visual products give agents more ways to showcase a listing without another shoot.",
    category: "Commercial",
    format: "Guide",
    href: "",
    status: "planned",
    featured: false,
  },
  {
    id: "PUB-010",
    title: "The business case for getting more from every property job",
    description:
      "A commercial guide to expanding the product offering around work the business has already won.",
    category: "Commercial",
    format: "Guide",
    href: "",
    status: "planned",
    featured: false,
  },
];
export const resourceCategories = [
  "Commercial",
  "Products",
  "Production",
  "Industry",
] as const;
