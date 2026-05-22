type EcrivanceLogoProps = {
  color?: string;
  height?: number;
  className?: string;
};

export default function EcrivanceLogo({
  color = "#1e3a8a",
  height = 24,
  className = ""
}: EcrivanceLogoProps) {
  return (
    <span
      className={`font-display font-bold tracking-tight ${className}`}
      style={{ color, fontSize: height, lineHeight: 1 }}
    >
      Écrivance
    </span>
  );
}
