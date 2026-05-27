type AppPageHeaderProps = {
  title: string;
  subtitle?: string;
  badge?: React.ReactNode;
};

export function AppPageHeader({ title, subtitle, badge }: AppPageHeaderProps) {
  return (
    <div className="mb-5 md:mb-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="font-display text-2xl font-bold text-gray-900 md:text-4xl">{title}</h1>
        {badge}
      </div>
      {subtitle ? <p className="mt-1.5 text-sm text-gray-500 md:mt-2 md:text-lg">{subtitle}</p> : null}
    </div>
  );
}
