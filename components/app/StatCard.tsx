type StatCardProps = {
  label: string;
  value: string;
  hint: string;
  valueClassName?: string;
};

export function StatCard({ label, value, hint, valueClassName = "text-brand-navy" }: StatCardProps) {
  return (
    <div className="rounded-2xl border border-white/80 bg-white/70 p-5 shadow-card backdrop-blur-md">
      <p className="text-xs font-medium text-gray-500">{label}</p>
      <p className={`mt-2 font-display text-3xl font-bold md:text-4xl ${valueClassName}`}>{value}</p>
      <p className="mt-1 text-xs text-gray-500">{hint}</p>
    </div>
  );
}
