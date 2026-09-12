/** Original outlined wordmark and three-panel mark from the supplied CAPLIST.zip. */
export function CaplistMark({ size = 32 }: { size?: number }) {
  return (
    <img
      src="/brand/caplist-mark-light.svg"
      width={size}
      height={(size * 280) / 340}
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
        src={`/brand/caplist-mark-${light ? "dark" : "light"}.svg`}
        width={38}
        height={31.3}
        alt=""
        aria-hidden="true"
        className="brand-mark"
      />
      <img
        src={`/brand/caplist-wordmark-${light ? "dark" : "light"}.svg`}
        width={140}
        height={39.2}
        alt=""
        aria-hidden="true"
      />
    </div>
  );
}
