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
    headline: "4 additional products are available.",
  },
  choose: {
    step: "05",
    label: "Choose product",
    headline: "Choose what to create.",
  },
  create: {
    step: "06",
    label: "Create",
    headline: "Creating your Vertical Video Reel...",
  },
  ready: {
    step: "07",
    label: "Ready",
    headline: "Your Vertical Video Reel is ready.",
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
  { name: "Photo Reel", format: "9:16", source: "Photography" },
  { name: "Vertical Video Reel", format: "9:16", source: "Photo + video" },
  { name: "Property Teaser", format: "16:9", source: "Video + drone" },
  { name: "Alternative / Feature Reel", format: "16:9", source: "Complete job" },
] as const;

export function isWorkflowState(value: string | null): value is WorkflowState {
  return workflowStates.includes(value as WorkflowState);
}
