/** One framing definition drives both the source outline and the rendered crop. */
export const SOURCE_ASPECT = 16 / 9;
export const OUTPUT_ASPECT = 9 / 16;
export const CROP_WIDTH_FRACTION = OUTPUT_ASPECT / SOURCE_ASPECT;
export const CROP_LEFT_FRACTION = (1 - CROP_WIDTH_FRACTION) / 2;

export function getCropRect(width: number, height: number) {
  if (!Number.isFinite(width) || !Number.isFinite(height) || width <= 0 || height <= 0) {
    throw new RangeError("Source dimensions must be positive and finite.");
  }
  // Match object-fit: cover in the 16:9 source preview, including its poster.
  const visibleWidth = Math.min(width, height * SOURCE_ASPECT);
  const visibleHeight = visibleWidth / SOURCE_ASPECT;
  return {
    x: (width - visibleWidth) / 2 + visibleWidth * CROP_LEFT_FRACTION,
    y: (height - visibleHeight) / 2,
    width: visibleWidth * CROP_WIDTH_FRACTION,
    height: visibleHeight,
  };
}
