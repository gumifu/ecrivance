"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";

type StickyFlowActionsProps = {
  onBack?: () => void;
  onPrimary: () => void;
  primaryLabel: string;
  primaryDisabled?: boolean;
  primaryVariant?: "primary" | "accent";
  showBack?: boolean;
};

export function StickyFlowActions({
  onBack,
  onPrimary,
  primaryLabel,
  primaryDisabled = false,
  primaryVariant = "primary",
  showBack = true
}: StickyFlowActionsProps) {
  const primaryClass = primaryDisabled
    ? "btn-disabled"
    : primaryVariant === "accent"
      ? "btn-accent"
      : "btn-primary";
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-gray-200 bg-white/95 px-6 py-4 shadow-[0_-8px_24px_rgba(0,35,149,0.08)] backdrop-blur-md">
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-4">
        {showBack && onBack ? (
          <button type="button" onClick={onBack} className="btn-secondary-gray shrink-0">
            <ArrowLeft className="h-4 w-4" aria-hidden />
            Back
          </button>
        ) : (
          <span className="w-[100px] shrink-0" aria-hidden />
        )}
        <button
          type="button"
          onClick={onPrimary}
          disabled={primaryDisabled}
          className={`${primaryClass} ml-auto shrink-0`}
        >
          {primaryLabel}
          <ArrowRight className="h-4 w-4" aria-hidden />
        </button>
      </div>
    </div>
  );
}
