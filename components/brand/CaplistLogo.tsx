export function CaplistMark({ size = 28 }: { size?: number }) {
  const s = size;
  const stroke = Math.max(2, Math.round(size * 0.12));
  return (
    <svg width={s} height={s} viewBox="0 0 32 32" aria-hidden="true">
      <path d="M4 12V4h8" fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="square" />
      <path d="M20 4h8v8" fill="none" stroke="#2F7BFF" strokeWidth={stroke} strokeLinecap="square" />
      <path d="M28 20v8h-8" fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="square" />
      <path d="M12 28H4v-8" fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="square" />
    </svg>
  );
}

export function CaplistLogo() {
  return (
    <div className="flex items-center gap-3" aria-label="Caplist Studio">
      <CaplistMark size={30} />
      <div className="leading-none">
        <div className="text-[15px] font-semibold tracking-[0.23em]">CAPLIST</div>
        <div className="mt-1 text-[8px] font-medium tracking-[0.48em] text-[#5794ff]">STUDIO</div>
      </div>
    </div>
  );
}
