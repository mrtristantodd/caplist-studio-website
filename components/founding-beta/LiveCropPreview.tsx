"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { verticalVideoMedia } from "./vertical-video-media";
import { MediaControls } from "./MediaControls";
import { FlowArrow } from "./FlowArrow";
import { CROP_LEFT_FRACTION, CROP_WIDTH_FRACTION, getCropRect } from "./crop-geometry";
import styles from "./LiveCropPreview.module.css";

const poster = verticalVideoMedia.poster;
const frameStyle = {
  "--crop-left": `${CROP_LEFT_FRACTION * 100}%`,
  "--crop-width": `${CROP_WIDTH_FRACTION * 100}%`,
  "--source-width": `${100 / CROP_WIDTH_FRACTION}%`,
} as CSSProperties;

export function LiveCropPreview() {
  const root = useRef<HTMLDivElement>(null);
  const source = useRef<HTMLVideoElement>(null);
  const sourceDisplay = useRef<HTMLCanvasElement>(null);
  const output = useRef<HTMLCanvasElement>(null);
  const [playing, setPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [time, setTime] = useState(0);
  const [ready, setReady] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const video = source.current;
    const canvas = output.current;
    const landscape = sourceDisplay.current;
    const container = root.current;
    if (!video || !canvas || !landscape || !container) return;
    const context = canvas.getContext("2d", { alpha: false });
    const landscapeContext = landscape.getContext("2d", { alpha: false });
    if (!context || !landscapeContext) { setError("The live crop preview is unavailable in this browser."); return; }
    setReady(true);
    let disposed = false;
    let videoFrame: number | undefined;
    let animationFrame: number | undefined;
    const preference = matchMedia("(prefers-reduced-motion: reduce)");
    const draw = (image: CanvasImageSource, width: number, height: number) => {
      const crop = getCropRect(width, height);
      const sourceWidth = crop.height * 16 / 9;
      // Paint both views in one frame callback, using one decoded frame and colour path.
      landscapeContext.drawImage(image, (width - sourceWidth) / 2, crop.y, sourceWidth, crop.height, 0, 0, landscape.width, landscape.height);
      const renderedCrop = getCropRect(landscape.width, landscape.height);
      context.drawImage(landscape, renderedCrop.x, renderedCrop.y, renderedCrop.width, renderedCrop.height, 0, 0, canvas.width, canvas.height);
      landscape.dataset.ready = "true";
      canvas.dataset.ready = "true";
    };
    const still = new window.Image();
    const drawVideo = () => {
      if (video.paused && video.currentTime === 0) {
        if (still.complete && still.naturalWidth) draw(still, still.naturalWidth, still.naturalHeight);
        return;
      }
      if (video.readyState >= 2 && video.videoWidth) draw(video, video.videoWidth, video.videoHeight);
    };
    const stopFrames = () => {
      if (videoFrame !== undefined) video.cancelVideoFrameCallback(videoFrame);
      if (animationFrame !== undefined) cancelAnimationFrame(animationFrame);
      videoFrame = animationFrame = undefined;
    };
    const schedule = () => {
      if (disposed || video.paused || document.hidden) return;
      if (typeof video.requestVideoFrameCallback === "function") {
        videoFrame = video.requestVideoFrameCallback(() => { drawVideo(); schedule(); });
      } else {
        animationFrame = requestAnimationFrame(() => { drawVideo(); schedule(); });
      }
    };
    const onPlay = () => { setPlaying(true); stopFrames(); schedule(); };
    const onPause = () => { setPlaying(false); stopFrames(); drawVideo(); };
    const onTime = () => setTime(video.currentTime);
    const onMetadata = () => setDuration(Number.isFinite(video.duration) ? video.duration : 0);
    const pause = () => { if (!video.paused) video.pause(); };
    const onVisibility = () => { if (document.hidden) pause(); };
    const onPreference = () => { if (preference.matches) pause(); };
    const onError = () => { stopFrames(); setPlaying(false); setError("The preview could not load. Please reload the page to try again."); };
    still.onload = () => { if (!disposed && video.paused && video.currentTime === 0) draw(still, still.naturalWidth, still.naturalHeight); };
    still.src = poster;
    video.addEventListener("play", onPlay);
    video.addEventListener("pause", onPause);
    video.addEventListener("ended", onPause);
    video.addEventListener("loadeddata", drawVideo);
    video.addEventListener("seeked", drawVideo);
    video.addEventListener("loadedmetadata", onMetadata);
    video.addEventListener("timeupdate", onTime);
    video.addEventListener("error", onError);
    if (video.readyState >= 1) onMetadata();
    drawVideo();
    document.addEventListener("visibilitychange", onVisibility);
    preference.addEventListener("change", onPreference);
    const observer = new IntersectionObserver(entries => { if (!entries[0].isIntersecting) pause(); }, { threshold: 0.15 });
    observer.observe(container);
    return () => {
      disposed = true;
      stopFrames();
      observer.disconnect();
      still.onload = null;
      video.removeEventListener("play", onPlay);
      video.removeEventListener("pause", onPause);
      video.removeEventListener("ended", onPause);
      video.removeEventListener("loadeddata", drawVideo);
      video.removeEventListener("seeked", drawVideo);
      video.removeEventListener("loadedmetadata", onMetadata);
      video.removeEventListener("timeupdate", onTime);
      video.removeEventListener("error", onError);
      document.removeEventListener("visibilitychange", onVisibility);
      preference.removeEventListener("change", onPreference);
    };
  }, []);

  async function toggle() {
    const video = source.current;
    if (!video) return;
    if (!video.paused) video.pause();
    else {
      setError("");
      try { await video.play(); } catch { setError("Playback could not start. Please try again."); }
    }
  }

  return <div ref={root} className={styles.preview} style={frameStyle}>
    <div className={styles.media}>
      <figure className={styles.source}>
        <div className={styles.sourceFrame}>
          <video ref={source} muted playsInline preload="metadata" poster={poster} aria-label="Landscape source for the live crop preview">
            <source src={verticalVideoMedia.src} type="video/mp4" />
          </video>
          <canvas ref={sourceDisplay} width={1280} height={720} aria-hidden="true" />
          <span className={styles.cropGuide} aria-hidden="true"><span>9:16</span></span>
        </div>
        <figcaption>Landscape source <span>16:9</span></figcaption>
      </figure>
      <FlowArrow className={styles.connector} />
      <figure className={styles.output}>
        <div className={styles.outputFrame}>
          <img className={styles.outputPoster} src={poster} alt="" />
          <canvas ref={output} width={405} height={720} role="img" aria-label="Live 9:16 crop of the exact blue-framed source region" />

        </div>
        <MediaControls label="crop preview" playing={playing} time={time} duration={duration} disabled={!ready} onToggle={toggle} onSeek={value => {
          if (source.current) source.current.currentTime = value;
          setTime(value);
        }} />
        <figcaption>Vertical preview <span>9:16</span></figcaption>
      </figure>
    </div>
    <p className={styles.note}>Live crop demonstration · Sample footage.</p>
    {error && <p className={styles.error} role="status">{error}</p>}
    <noscript><p className={styles.note}>Enable JavaScript to play the live crop. The still shows the same framing.</p></noscript>
  </div>;
}
