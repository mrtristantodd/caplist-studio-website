/** Approved Caplist Studio artwork; the SVGs preserve the supplied logo paths. */
export function CaplistMark({ size = 32, onDark = false }: { size?: number; onDark?: boolean }) {
  return (
    <img
      src={`/brand/caplist-mark-${onDark ? "dark" : "light"}.svg`}
      width={size}
      height={(size * 600) / 620}
      alt=""
      aria-hidden="true"
      className="brand-mark"
    />
  );
}
export function CaplistLogo({ light = false }: { light?: boolean }) {
  return (
    <div className="brand-lockup" role="img" aria-label="Caplist Studio">
      <img
        src={`/brand/caplist-horizontal-on-${light ? "light" : "dark"}.svg`}
        width={190}
        height={39}
        alt=""
        aria-hidden="true"
      />
    </div>
  );
}
