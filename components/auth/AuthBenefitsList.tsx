"use client";

import { Check } from "lucide-react";

type AuthBenefitsListProps = {
  items: readonly string[];
};

export function AuthBenefitsList({ items }: AuthBenefitsListProps) {
  return (
    <ul className="mt-8 space-y-4 text-left">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
            <Check className="h-3 w-3" strokeWidth={3} aria-hidden />
          </span>
          <span className="text-sm text-gray-700">{item}</span>
        </li>
      ))}
    </ul>
  );
}
