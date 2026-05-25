import { useId } from "react";
import {
  ECIRIVANCE_FEATHER_PATHS,
  ECIRIVANCE_WORDMARK_PATHS,
  LOGO_VIEWBOX
} from "./ecrivance-logo-paths";

type EcrivanceLogoProps = {
  /** @deprecated Use variant="inverse" or className text-* instead */
  color?: string;
  height?: number;
  className?: string;
  /** Navy wordmark on light backgrounds (Figma default) */
  variant?: "default" | "inverse";
};

export default function EcrivanceLogo({
  color,
  height = 28,
  className = "",
  variant = "default"
}: EcrivanceLogoProps) {
  const clipId = useId();
  const width = (height * LOGO_VIEWBOX.width) / LOGO_VIEWBOX.height;
  const variantClass = variant === "inverse" ? "text-white" : "text-brand-navy";

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${LOGO_VIEWBOX.width} ${LOGO_VIEWBOX.height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`block shrink-0 ${variantClass} ${className}`}
      style={color ? { color } : undefined}
      aria-label="Écrivance"
      role="img"
    >
      <g clipPath={`url(#${clipId})`} fill="currentColor">
        {ECIRIVANCE_FEATHER_PATHS.map((d) => (
          <path key={d.slice(0, 24)} d={d} />
        ))}
      </g>
      {ECIRIVANCE_WORDMARK_PATHS.map((d) => (
        <path key={d.slice(0, 24)} d={d} fill="currentColor" />
      ))}
      <defs>
        <clipPath id={clipId}>
          <rect width="28" height="28" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
