"use client";

import { SelectCard } from "../SelectCard";

export const scoreOptions = [
  {
    id: "nclc5",
    title: "NCLC 5",
    subtitle: "A2 · Basic / minimum for some programs"
  },
  {
    id: "nclc7",
    title: "NCLC 7",
    subtitle: "B1+ · Standard / Express Entry CRS"
  },
  {
    id: "nclc9",
    title: "NCLC 9",
    subtitle: "B2+ · Advanced / maximum CRS points"
  },
  {
    id: "unsure",
    title: "I'm not sure",
    subtitle: "Start with a placement-style writing task"
  }
] as const;

type ScoreStepProps = {
  selected: string | null;
  onSelect: (id: string) => void;
};

export function ScoreStep({ selected, onSelect }: ScoreStepProps) {
  return (
    <>
      <div className="text-center">
        <h1 className="font-display text-3xl font-bold text-gray-900 md:text-4xl">
          What&apos;s your target score?
        </h1>
        <p className="mt-3 text-gray-500">Choose the NCLC level you need to achieve.</p>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {scoreOptions.map((option) => (
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
