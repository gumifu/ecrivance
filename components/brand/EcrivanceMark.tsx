import { useId } from "react";
import { ECIRIVANCE_FEATHER_PATHS } from "./ecrivance-logo-paths";

type EcrivanceMarkProps = {
  size?: number;
  className?: string;
  variant?: "default" | "inverse";
};

/** Feather icon mark only (app icon / compact slots) */
export default function EcrivanceMark({
  size = 28,
  className = "",
  variant = "default"
}: EcrivanceMarkProps) {
  const clipId = useId();
  const variantClass = variant === "inverse" ? "text-white" : "text-brand-navy";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`block shrink-0 ${variantClass} ${className}`}
      aria-hidden
    >
      <g clipPath={`url(#${clipId})`} fill="currentColor">
        {ECIRIVANCE_FEATHER_PATHS.map((d) => (
          <path key={d.slice(0, 24)} d={d} />
        ))}
      </g>
      <defs>
        <clipPath id={clipId}>
          <rect width="28" height="28" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
