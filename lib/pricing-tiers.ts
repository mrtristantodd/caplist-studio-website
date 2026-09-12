/** Working product scope from Caplist planning. Commercial allowances are not final. */
export const pricingTiers = [
  {
    name: "Essential",
    level: "A simple starting point",
    media: "weatherboard",
    description:
      "An additional deliverable for your everyday property listing.",
    value: "Choose the product. We shape the edit.",
    inheritance: "Your starting toolkit",
    features: [
      "Automatic image selection and sequencing",
      "Caplist-selected music",
      "Standard short edit",
      "One primary output format",
      "One output variation",
      "Automatic movement and transitions",
    ],
    use: "Your client needs one straightforward addition to their listing campaign.",
  },
  {
    name: "Pro",
    level: "More creative direction",
    media: "suburban",
    description: "A more considered edit for a property with a story to tell.",
    value: "Shape the story. Extend the delivery.",
    inheritance: "Everything in Essential, plus",
    features: [
      "Select the images you want to include",
      "Exclude shots and refine their sequence",
      "Choose a music style for the property",
      "Additional edit-length options",
      "Additional social-format options",
      "More output variations",
    ],
    use: "Your client has a specific brief, favourite features or more than one social placement.",
  },
  {
    name: "Studio",
    level: "The complete campaign",
    media: "exterior",
    description:
      "The broadest creative scope for a coordinated property campaign.",
    value: "One property. A fuller set of deliverables.",
    inheritance: "Everything in Pro, plus",
    features: [
      "Broader curated music selection",
      "The widest choice of edit lengths",
      "Full social-format pack",
      "Portrait, square and landscape delivery",
      "The widest choice of output variations",
      "The most revision flexibility",
    ],
    use: "Your client needs a consistent campaign across several channels and placements.",
  },
] as const;
