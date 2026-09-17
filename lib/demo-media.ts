/** Isolated, locally hosted demo photography. Replace after art approval. */
export const demoMedia = {
  showcaseAerial: {
    src: "/media/showcase/aerial",
    alt: "Australian sandstone and brick courtyard home overlooking a eucalyptus-lined bay",
    position: "50% 50%",
  },
  showcaseLiving: {
    src: "/media/showcase/living",
    alt: "Timber-ceiling living room opening onto the same sandstone courtyard and pool",
    position: "50% 50%",
  },
  suburban: {
    src: "/media/suburban",
    alt: "Contemporary Australian brick home with timber entry and native landscaping",
    position: "50% 50%",
  },
  weatherboard: {
    src: "/media/weatherboard",
    alt: "Traditional Australian weatherboard family home and garden",
    position: "50% 50%",
  },
  familyKitchen: {
    src: "/media/familyKitchen",
    alt: "Timber kitchen with green tiles and a garden-facing window",
    position: "50% 50%",
  },
  familyLiving: {
    src: "/media/familyLiving",
    alt: "Bright Australian family living room opening onto the garden",
    position: "50% 50%",
  },
  bedroom: {
    src: "/media/bedroom",
    alt: "Professionally styled bedroom in an Australian family home",
    position: "50% 50%",
  },
  bathroom: {
    src: "/media/bathroom",
    alt: "Contemporary bathroom with a glass shower and natural finishes",
    position: "50% 50%",
  },
  coastal: {
    src: "/media/luxury-coastal",
    alt: "A grand classical Australian coastal mansion with gardens and swimming pool",
    position: "50% 50%",
  },
  exterior: {
    src: "/media/luxury-exterior",
    alt: "A grand contemporary Australian waterfront mansion at twilight",
    position: "50% 54%",
  },
  living: {
    src: "/media/luxury-living",
    alt: "A grand Mediterranean-style Australian luxury home overlooking the harbour",
    position: "50% 50%",
  },
  kitchen: {
    src: "/media/luxury-kitchen",
    alt: "A luxury quartzite and walnut kitchen overlooking Sydney Harbour",
    position: "50% 55%",
  },
  aerial: {
    src: "/media/luxury-aerial",
    alt: "An expansive Sydney Harbour waterfront estate with pool, tennis court and private jetty",
    position: "50% 50%",
  },
} as const;
export type MediaKey = keyof typeof demoMedia;
export const products = [
  {
    id: "photo-reel",
    number: "01",
    name: "Photo Reel",
    purpose:
      "Turn the photography you already deliver into a premium motion product.",
    description:
      "Professionally edited property photography becomes a polished reel with considered movement, sequencing and pacing.",
    client: "Another social-ready way to showcase the listing.",
    business: "Another product from photography you already captured.",
    formats: "9:16 and 16:9",
    ratio: "9:16",
    duration: "15–30 sec",
    needs: "Professionally edited property photography",
    media: "weatherboard",
    label:
      "Turn the photography you already deliver into a premium motion product.",
  },
  {
    id: "vertical-reel",
    number: "02",
    name: "Vertical Video Reel",
    purpose:
      "Turn existing property footage into purpose-built vertical content.",
    description:
      "Caplist repurposes professional property video and native vertical footage into a polished vertical edit designed for mobile and social viewing.",
    client:
      "More vertical property content without another dedicated content shoot.",
    business: "More value from video footage already captured.",
    formats: "9:16",
    ratio: "9:16",
    duration: "20–30 sec",
    needs: "Professional property video and native vertical footage",
    media: "living",
    label:
      "Turn existing property footage into purpose-built vertical content.",
  },
  {
    id: "property-teaser",
    number: "03",
    name: "Property Teaser",
    purpose: "Create interest quickly with a shorter property story.",
    description:
      "A concise, high-impact edit built from the strongest moments in the property’s existing photography, video, drone or mixed media.",
    client: "A short-form asset they can use throughout the property campaign.",
    business: "Another easy addition to the property order.",
    formats: "9:16 and 16:9",
    ratio: "16:9",
    duration: "10–15 sec",
    needs: "Photography, video, drone or mixed media",
    media: "suburban",
    label: "Create interest quickly with a shorter property story.",
  },
  {
    id: "feature-reel",
    number: "04",
    name: "Feature Reel",
    purpose: "Give one standout part of the property its own story.",
    description:
      "Create a focused edit around the kitchen, pool, architecture, views, outdoor living, location or another defining feature of the property.",
    client:
      "Another premium piece of content built around a specific selling point.",
    business: "Another sellable product from the same source media.",
    formats: "9:16 and 16:9",
    ratio: "16:9",
    duration: "30–45 sec",
    needs:
      "Photography, video, drone or vertical media featuring the chosen space or detail",
    media: "kitchen",
    label: "Give one standout part of the property its own story.",
  },
  {
    id: "mixed-media",
    number: "05",
    name: "Mixed Media Reel",
    purpose: "Bring the best of the property capture together.",
    description:
      "Combine professional photography, video, drone and/or vertical media into one cohesive premium edit.",
    client:
      "A richer property story using more of the media commissioned for the listing.",
    business: "Greater value from the complete property capture.",
    formats: "9:16 and 16:9",
    ratio: "16:9",
    duration: "30–60 sec",
    needs:
      "Photography + drone, or other combinations of photography, video, drone and vertical media",
    media: "coastal",
    label: "Bring the best of the property capture together.",
  },
  {
    id: "short-property-edit",
    number: "06",
    name: "Short Property Edit",
    purpose: "Give the property story a shorter cut.",
    description:
      "A concise version of the existing property story created from the original property video or from the same underlying source media used for a mixed-media master.",
    client:
      "Another useful duration without commissioning another shoot or complete production.",
    business: "Another finished product from media already captured.",
    formats: "Primarily 16:9",
    ratio: "16:9",
    duration: "",
    needs:
      "Original property video or underlying source media from a mixed-media master",
    media: "familyLiving",
    label: "Give the property story a shorter cut.",
  },
  {
    id: "alternative-property-edit",
    number: "07",
    name: "Alternative Property Edit",
    purpose: "Create a second story from footage already captured.",
    description:
      "A different edit of the same property with its own pacing, sequence, emphasis or creative direction while still telling the complete property story.",
    client: "Another finished way to present the same listing.",
    business: "More commercial life from the original video capture.",
    formats: "16:9 · Selected 9:16 applications where appropriate",
    ratio: "16:9",
    duration: "",
    needs: "Professional property video",
    media: "exterior",
    label: "Create a second story from footage already captured.",
  },
  {
    id: "drone-location-reel",
    number: "08",
    name: "Drone & Location Reel",
    purpose: "Make the setting part of the story.",
    description:
      "A dedicated edit built around aerial footage, exterior media and location context — showing not just the property, but where it sits.",
    client:
      "A stronger way to showcase land, outlook, neighbourhood, coast, architecture or lifestyle context.",
    business: "More value from drone and location media already captured.",
    formats: "9:16 and 16:9",
    ratio: "16:9",
    duration: "",
    needs: "Drone footage, exterior media and location context",
    media: "aerial",
    label: "Make the setting part of the story.",
  },
] as const;
export type Product = (typeof products)[number];
