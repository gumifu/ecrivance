type AppPageHeaderProps = {
  title: string;
  subtitle?: string;
};

export function AppPageHeader({ title, subtitle }: AppPageHeaderProps) {
  return (
    <div className="mb-8">
      <h1 className="font-display text-3xl font-bold text-gray-900 md:text-4xl">{title}</h1>
      {subtitle ? <p className="mt-2 text-base text-gray-500 md:text-lg">{subtitle}</p> : null}
    </div>
  );
}
