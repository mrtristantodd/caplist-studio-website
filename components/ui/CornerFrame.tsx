export function CornerFrame({ className = "" }: { className?: string }) {
  return (
    <span className={`pointer-events-none absolute inset-0 ${className}`} aria-hidden="true">
      <span className="absolute left-3 top-3 h-4 w-4 border-l border-t border-white/65 transition-[transform,opacity] duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover/scene:-translate-x-0.5 group-hover/scene:-translate-y-0.5" />
      <span className="absolute right-3 top-3 h-4 w-4 border-r border-t border-[#5794ff] shadow-[4px_-4px_18px_rgba(47,123,255,.12)] transition-[transform,filter] duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover/scene:translate-x-0.5 group-hover/scene:-translate-y-0.5 group-hover/scene:drop-shadow-[0_0_8px_rgba(87,148,255,.55)]" />
      <span className="absolute bottom-3 left-3 h-4 w-4 border-b border-l border-white/65 transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover/scene:-translate-x-0.5 group-hover/scene:translate-y-0.5" />
      <span className="absolute bottom-3 right-3 h-4 w-4 border-b border-r border-white/65 transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover/scene:translate-x-0.5 group-hover/scene:translate-y-0.5" />
    </span>
  );
}
