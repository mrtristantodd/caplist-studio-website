/** Open frame terminals and inset direction, echoing the CAPLIST frame motif. */
export function FlowArrow({ className }: { className?: string }) {
  return <svg className={className} width="32" height="24" viewBox="0 0 32 24" fill="none" aria-hidden="true">
    <path d="M8 3H3V21H8M24 3H29V21H24" stroke="currentColor" strokeOpacity=".55" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
    <path d="M13 7L18 12L13 17" stroke="currentColor" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
  </svg>;
}
