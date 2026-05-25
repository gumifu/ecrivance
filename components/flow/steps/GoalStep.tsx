"use client";

import { Briefcase, GraduationCap, Globe, Plane } from "lucide-react";
import { SelectCard } from "../SelectCard";

export const goalOptions = [
  {
    id: "pr",
    title: "Permanent Residency",
    subtitle: "Express Entry / immigration",
    icon: Plane
  },
  {
    id: "citizenship",
    title: "Canadian Citizenship",
    subtitle: "Citizenship application",
    icon: Globe
  },
  {
    id: "work",
    title: "Work Permit",
    subtitle: "Provincial nominee / LMIA",
    icon: Briefcase
  },
  {
    id: "studies",
    title: "Studies",
    subtitle: "University or college admission",
    icon: GraduationCap
  }
] as const;

type GoalStepProps = {
  selected: string | null;
  onSelect: (id: string) => void;
};

export function GoalStep({ selected, onSelect }: GoalStepProps) {
  return (
    <>
      <div className="text-center">
        <h1 className="font-display text-3xl font-bold text-gray-900 md:text-4xl">
          Why are you taking the TCF?
        </h1>
        <p className="mt-3 text-gray-500">We&apos;ll tailor your experience to your goal.</p>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {goalOptions.map((option) => (
          <SelectCard
            key={option.id}
            title={option.title}
            subtitle={option.subtitle}
            icon={option.icon}
            selected={selected === option.id}
            onClick={() => onSelect(option.id)}
          />
        ))}
      </div>
    </>
  );
}
