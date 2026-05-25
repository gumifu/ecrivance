"use client";

import { SelectCard } from "../SelectCard";

export const timingOptions = [
  { id: "2weeks", title: "Less than 2 weeks", subtitle: "Prepare quickly" },
  { id: "1month", title: "About 1 month", subtitle: "Steady weekly plan" },
  { id: "3months", title: "3 months or more", subtitle: "Build gradually" },
  { id: "none", title: "No exam scheduled", subtitle: "Explore your level first" }
] as const;

type TimingStepProps = {
  selected: string | null;
  onSelect: (id: string) => void;
};

export function TimingStep({ selected, onSelect }: TimingStepProps) {
  return (
    <>
      <div className="text-center">
        <h1 className="font-display text-3xl font-bold text-gray-900 md:text-4xl">
          When is your exam?
        </h1>
        <p className="mt-3 text-gray-500">This helps us personalise your study plan.</p>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {timingOptions.map((option) => (
          <SelectCard
            key={option.id}
            title={option.title}
            subtitle={option.subtitle}
            selected={selected === option.id}
            onClick={() => onSelect(option.id)}
            textOnly
          />
        ))}
      </div>
    </>
  );
}
