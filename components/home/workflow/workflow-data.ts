export const workflowStates = [
  "upload",
  "uploading",
  "understand",
  "unlock",
  "choose",
  "create",
  "ready",
  "outcome",
] as const;

export type WorkflowState = (typeof workflowStates)[number];

export const workflowDurations: Record<WorkflowState, number> = {
  upload: 1400, uploading: 2200, understand: 3000, unlock: 2300,
  choose: 1600, create: 4000, ready: 6500, outcome: 3000,
};

export const workflowReel = {
  src: "/media/dp001/reel-premium-mixed.mp4",
  poster: "/media/dp001/drone.webp",
  previewLabel: "Final reel · 16:9",
  mediaLabel: "H.264 MP4",
  targetFormat: "16:9",
  durationLabel: "23.4 sec",
  excerptStart: 3,
};

export const workflowPhases = ["Upload", "Understand", "Create", "Ready"] as const;

export const workflowPhaseByState: Record<WorkflowState, (typeof workflowPhases)[number]> = {
  upload: "Upload",
  uploading: "Upload",
  understand: "Understand",
  unlock: "Understand",
  choose: "Create",
  create: "Create",
  ready: "Ready",
  outcome: "Ready",
};

export const workflowStateDetails: Record<
  WorkflowState,
  { step: string; label: string; headline: string }
> = {
  upload: {
    step: "01",
    label: "Upload",
    headline: "Add the media already captured.",
  },
  uploading: {
    step: "02",
    label: "Uploading",
    headline: "Bringing the property job into Caplist.",
  },
  understand: {
    step: "03",
    label: "Understand",
    headline: "Understanding what you captured...",
  },
  unlock: {
    step: "04",
    label: "Unlock",
    headline: "5 additional products are available.",
  },
  choose: {
    step: "05",
    label: "Choose product",
    headline: "Choose what to create.",
  },
  create: {
    step: "06",
    label: "Create",
    headline: "Creating your Premium Mixed Media Reel...",
  },
  ready: {
    step: "07",
    label: "Ready",
    headline: "Your Premium Mixed Media Reel is ready.",
  },
  outcome: {
    step: "08",
    label: "Outcome",
    headline: "One media set. More products to sell.",
  },
};

export const propertyMedia = [
  { src: "/media/dp001/front.webp", alt: "Front exterior", label: "Exterior" },
  { src: "/media/dp001/living.webp", alt: "Main living room", label: "Living" },
  { src: "/media/dp001/kitchen.webp", alt: "Kitchen", label: "Kitchen" },
  { src: "/media/dp001/bedroom.webp", alt: "Primary bedroom", label: "Bedroom" },
  { src: "/media/dp001/pool.webp", alt: "Pool terrace", label: "Pool" },
  { src: "/media/dp001/drone.webp", alt: "Aerial property context", label: "Drone" },
] as const;

export const unlockedProducts = [
  { name: "Premium Mixed Media Reel", format: "16:9", source: "Complete job" },
  { name: "Photo Reel", format: "9:16", source: "Photography" },
  { name: "Vertical Video Reel", format: "9:16", source: "Photo + video" },
  { name: "Property Teaser", format: "9:16", source: "Video + drone" },
  { name: "Alternative / Feature Reel", format: "9:16", source: "Complete job" },
] as const;

export function isWorkflowState(value: string | null): value is WorkflowState {
  return workflowStates.includes(value as WorkflowState);
}
