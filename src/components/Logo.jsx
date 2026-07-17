import { useState } from "react";
import { Link } from "react-router-dom";

function Mark({ className = "" }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M68 22c14 8 20 24 13 38-8 16-28 22-44 13-13-7-19-21-15-33"
        stroke="currentColor"
        strokeWidth="9"
        strokeLinecap="round"
      />
      <path
        d="M22 40c-2 5-3 9-1 13"
        stroke="currentColor"
        strokeWidth="13"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Logo({ dark = false, className = "" }) {
  const [broken, setBroken] = useState(false);
  const textColor = dark ? "text-cream" : "text-ink";

  return (
    <Link
      to="/"
      className={`flex items-center shrink-0 ${className}`}
      aria-label="Aurigin Media home"
    >
      {broken ? (
        <span className="flex items-center gap-2.5">
          <Mark className={`w-7 h-7 ${textColor}`} />
          <span
            className={`font-display font-bold tracking-[0.15em] text-sm ${textColor}`}
          >
            AURIGIN
          </span>
        </span>
      ) : (
        <img
          src="/logo.png"
          alt="Aurigin Media"
          className="h-14 md:h-16 w-auto object-contain"
          onError={() => setBroken(true)}
        />
      )}
    </Link>
  );
}

export function LogoMark({ className = "" }) {
  return <Mark className={className} />;
}

// Decorative use of the real logo mark (cropped to just the brush-stroke
// circle, no wordmark) as a background flourish. tone="dark" inverts +
// screen-blends so a white-background source file still reads correctly
// sitting on a dark (ink) section.
export function LogoWatermark({ className = "", tone = "light" }) {
  const blend =
    tone === "dark" ? "invert mix-blend-screen" : "mix-blend-multiply";

  return (
    <img
      src="/logo-mark.png"
      alt=""
      aria-hidden="true"
      className={`object-contain select-none pointer-events-none ${blend} ${className}`}
    />
  );
}
