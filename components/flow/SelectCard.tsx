"use client";

import type { LucideIcon } from "lucide-react";

type SelectCardProps = {
  title: string;
  subtitle: string;
  icon?: LucideIcon;
  emoji?: string;
  selected: boolean;
  onClick: () => void;
  compact?: boolean;
  textOnly?: boolean;
};

export function SelectCard({
  title,
  subtitle,
  icon: Icon,
  emoji,
  selected,
  onClick,
  compact = false,
  textOnly = false
}: SelectCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full rounded-2xl border-2 bg-white p-6 text-left shadow-card transition hover:border-brand-navy/40 ${
        compact ? "p-5" : "p-6"
      } ${selected ? "border-brand-navy bg-blue-50/80 ring-1 ring-brand-navy/20" : "border-gray-200"}`}
    >
      {emoji ? (
        <span className="text-2xl" aria-hidden>
          {emoji}
        </span>
      ) : Icon ? (
        <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-blue-50 text-brand-navy">
          <Icon className="h-5 w-5" aria-hidden />
        </span>
      ) : null}
      <p
        className={
          textOnly
            ? "font-display text-2xl font-bold text-brand-navy"
            : `font-semibold text-gray-900 ${compact ? "text-base" : "text-lg"}`
        }
      >
        {title}
      </p>
      {subtitle ? (
        <p className={textOnly ? "mt-2 text-sm font-medium text-gray-600" : "mt-1 text-sm text-gray-500"}>
          {subtitle}
        </p>
      ) : null}
    </button>
  );
}
