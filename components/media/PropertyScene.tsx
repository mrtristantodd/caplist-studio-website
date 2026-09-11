import { useId } from "react";
import { CornerFrame } from "@/components/ui/CornerFrame";

export function PropertyScene({ label = "24 Parkview Road", className = "" }: { label?: string; className?: string }) {
  const id = useId().replace(/:/g, "");
  const glass = `${id}-glass`;
  const warm = `${id}-warm`;
  const sky = `${id}-sky`;
  const pool = `${id}-pool`;

  return (
    <div className={`group/scene relative overflow-hidden rounded-[14px] border border-white/[0.09] bg-[#0d141a] ${className}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_62%_38%,rgba(47,123,255,.19),transparent_27%),linear-gradient(170deg,#15212a_0%,#0f161b_46%,#090d10_100%)]" />
      <svg viewBox="0 0 720 460" className="relative h-full w-full" role="img" aria-label={`Architectural property media preview for ${label}`}>
        <defs>
          <linearGradient id={glass} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#b9d7ff" stopOpacity=".45" />
            <stop offset="1" stopColor="#2f7bff" stopOpacity=".08" />
          </linearGradient>
          <linearGradient id={warm} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#ffd29a" stopOpacity=".96" />
            <stop offset="1" stopColor="#9f571f" stopOpacity=".78" />
          </linearGradient>
          <linearGradient id={sky} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#24425d" stopOpacity=".38" />
            <stop offset="1" stopColor="#0b1015" stopOpacity="0" />
          </linearGradient>
          <linearGradient id={pool} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#2f7bff" stopOpacity=".03" />
            <stop offset=".5" stopColor="#87b6ff" stopOpacity=".22" />
            <stop offset="1" stopColor="#2f7bff" stopOpacity=".02" />
          </linearGradient>
        </defs>

        <rect width="720" height="460" fill={`url(#${sky})`} />
        <circle cx="596" cy="100" r="70" fill="#9fc2ed" opacity=".035" />
        <path d="M0 343C145 329 258 343 386 331C520 319 608 329 720 312V460H0Z" fill="#0a0f13" />
        <path d="M96 350L244 207L512 145L628 235L628 356Z" fill="#10191f" />
        <path d="M233 213L512 149L512 353L233 353Z" fill="#1a262f" />
        <path d="M519 172L616 239L616 353L519 353Z" fill="#141d23" />
        <path d="M224 211L512 143L618 228" fill="none" stroke="#d8e7f5" strokeOpacity=".14" strokeWidth="2" />
        <path d="M234 262H512M234 326H616" stroke="#d8e7f5" strokeOpacity=".06" />

        <rect x="269" y="235" width="94" height="92" rx="3" fill={`url(#${warm})`} />
        <rect x="374" y="212" width="105" height="115" rx="3" fill={`url(#${warm})`} />
        <rect x="537" y="244" width="55" height="82" rx="3" fill={`url(#${warm})`} />
        <rect x="269" y="235" width="94" height="92" rx="3" fill={`url(#${glass})`} opacity=".42" />
        <rect x="374" y="212" width="105" height="115" rx="3" fill={`url(#${glass})`} opacity=".3" />
        <rect x="537" y="244" width="55" height="82" rx="3" fill={`url(#${glass})`} opacity=".28" />

        <path d="M316 236V327M426 213V327M560 244V326" stroke="#0d1419" strokeOpacity=".75" strokeWidth="3" />
        <path d="M270 279H363M374 267H479M537 284H592" stroke="#0d1419" strokeOpacity=".62" strokeWidth="2" />
        <path d="M76 363H653" stroke="#2f7bff" strokeOpacity=".15" />
        <path d="M67 375C220 360 379 379 663 365L682 410H49Z" fill={`url(#${pool})`} />
        <path d="M74 376C228 363 390 379 650 367" stroke="#dce7f4" strokeOpacity=".09" />
        <path d="M112 388C272 380 415 389 600 380" stroke="#2f7bff" strokeOpacity=".08" />

        <circle cx="151" cy="220" r="58" fill="#0c1419" />
        <circle cx="112" cy="244" r="39" fill="#0b1217" />
        <rect x="145" y="203" width="12" height="154" fill="#10181e" />
        <circle cx="641" cy="259" r="41" fill="#0c1419" />
        <rect x="637" y="253" width="8" height="103" fill="#10181e" />
      </svg>

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(110deg,transparent_26%,rgba(255,255,255,.035)_48%,transparent_68%)] opacity-40 transition-transform duration-[1200ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover/scene:translate-x-6" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/28 to-transparent" />
      <CornerFrame />
      <div className="absolute left-4 top-4 max-w-[calc(100%_-_2rem)] truncate rounded-full border border-white/[0.09] bg-black/[0.32] px-3 py-1.5 text-[9px] uppercase tracking-[.14em] text-white/70 backdrop-blur-md sm:left-5 sm:top-5 sm:text-[10px]">
        {label}
      </div>
    </div>
  );
}
