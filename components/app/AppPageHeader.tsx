type AppPageHeaderProps = {
  title: string;
  subtitle?: string;
  badge?: React.ReactNode;
};

export function AppPageHeader({ title, subtitle, badge }: AppPageHeaderProps) {
  return (
    <div className="mb-8">
      <div className="flex flex-wrap items-center gap-3">
        <h1 className="font-display text-3xl font-bold text-gray-900 md:text-4xl">{title}</h1>
        {badge}
      </div>
      {subtitle ? <p className="mt-2 text-base text-gray-500 md:text-lg">{subtitle}</p> : null}
    </div>
  );
}
