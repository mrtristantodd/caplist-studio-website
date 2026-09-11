/** Vector interpretation of the user-approved rising-bar brand board. */
export function CaplistMark({ size = 32 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 48"
      aria-hidden="true"
      fill="currentColor"
    >
      <path d="M2 22 10 27V47L2 42Z M13 12 23 18V40L15 35V21L13 20Z M25 1 37 8V32L29 27V12L25 10Z" />
    </svg>
  );
}
export function CaplistLogo() {
  return (
    <div className="caplist-logo" aria-label="Caplist Studio">
      <CaplistMark size={37} />
      <div className="caplist-wordmark">
        <svg viewBox="0 0 215 29" aria-hidden="true">
          <g
            fill="none"
            stroke="currentColor"
            strokeWidth="3.5"
            strokeLinecap="square"
            strokeLinejoin="round"
          >
            <path d="M24 5H11C4 5 3 10 3 14s1 10 8 10h13M34 24 47 5 60 24M72 24V5h17c11 0 11 13 0 13H73M109 5v19h23M143 5v19M179 5h-17c-9 0-9 9 0 9h10c10 0 10 10 0 10h-18M188 5h24M200 5v19" />
          </g>
        </svg>
        <span>STUDIO</span>
      </div>
    </div>
  );
}
