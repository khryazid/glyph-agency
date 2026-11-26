import React from "react";

interface GlyphMarkProps {
  tone?: "light" | "dark" | "badge-dark" | "badge-light";
  className?: string;
}

export const GLYPH_G_PATH =
  "M88.24 34.57A38 38 0 1 0 98 60L98 53.75L69.5 53.75L75.75 60L69.5 66.25L84.72 66.25A25.5 25.5 0 1 1 78.95 42.94Z";

export const GLYPH_DIAMOND_PATH = "M58.5 49L69.5 60L58.5 71L47.5 60Z";

export function GlyphMark({ tone = "light", className = "size-7" }: GlyphMarkProps) {
  const isBadge = tone === "badge-dark" || tone === "badge-light";
  const isDarkSurface = tone === "dark" || tone === "badge-dark";
  const letterColor = isDarkSurface ? "#FFFFFF" : "#18181B";

  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      {tone === "badge-dark" ? (
        <rect width="120" height="120" rx="28" fill="#141417" />
      ) : null}
      {tone === "badge-light" ? (
        <rect
          x="1.5"
          y="1.5"
          width="117"
          height="117"
          rx="26.5"
          fill="#FFFFFF"
          stroke="#E4E4E7"
          strokeWidth="3"
        />
      ) : null}
      <g
        transform={
          isBadge ? undefined : "translate(-12 -12) scale(1.2)"
        }
      >
        <path d={GLYPH_G_PATH} fill={letterColor} />
        <path d={GLYPH_DIAMOND_PATH} fill="#FF8400" />
      </g>
    </svg>
  );
}

interface GlyphLockupProps {
  tone?: "light" | "dark";
  markClassName?: string;
  textClassName?: string;
}

export function GlyphLockup({
  tone = "light",
  markClassName = "size-7",
  textClassName = "text-lg",
}: GlyphLockupProps) {
  const isDark = tone === "dark";

  return (
    <span className="inline-flex items-center gap-2.5">
      <GlyphMark
        tone={isDark ? "badge-light" : "badge-dark"}
        className={markClassName}
      />
      <span
        className={`font-display tracking-[-0.03em] leading-none ${textClassName}`}
      >
        <span className={`font-bold ${isDark ? "text-white" : "text-[#18181B]"}`}>
          Glyph
        </span>{" "}
        <span className={`font-normal ${isDark ? "text-zinc-400" : "text-[#52525B]"}`}>
          Agency
        </span>
      </span>
    </span>
  );
}
