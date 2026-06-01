"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";

type StickyFlowActionsProps = {
  onBack?: () => void;
  onPrimary: () => void;
  primaryLabel: string;
  primaryLabelShort?: string;
  primaryDisabled?: boolean;
  primaryVariant?: "primary" | "accent";
  showBack?: boolean;
};

const actionBtnBase =
  "inline-flex h-11 min-w-[5.75rem] shrink-0 items-center justify-center gap-2 rounded-xl px-4 text-sm font-semibold sm:px-5";

export function StickyFlowActions({
  onBack,
  onPrimary,
  primaryLabel,
  primaryLabelShort,
  primaryDisabled = false,
  primaryVariant = "primary",
  showBack = true
}: StickyFlowActionsProps) {
  const primaryClass = primaryDisabled
    ? `${actionBtnBase} min-w-[9.5rem] cursor-not-allowed bg-gray-200 text-gray-400`
    : primaryVariant === "accent"
      ? `${actionBtnBase} min-w-[9.5rem] bg-amber-400 text-gray-900 transition hover:bg-amber-500`
      : `${actionBtnBase} min-w-[9.5rem] bg-brand-navy text-white transition hover:bg-brand-navy-hover`;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-gray-200 bg-white/95 px-4 py-3 shadow-[0_-8px_24px_rgba(0,35,149,0.08)] backdrop-blur-md sm:px-6 sm:py-4">
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-3 sm:gap-4">
        {showBack && onBack ? (
          <button type="button" onClick={onBack} className={`${actionBtnBase} border-2 border-gray-300 bg-white text-gray-700 transition hover:bg-gray-50`}>
            <ArrowLeft className="h-4 w-4 shrink-0" aria-hidden />
            Back
          </button>
        ) : (
          <span className={`${actionBtnBase} pointer-events-none invisible border-2 border-transparent`} aria-hidden>
            Back
          </span>
        )}
        <button
          type="button"
          onClick={onPrimary}
          disabled={primaryDisabled}
          className={`${primaryClass} ml-auto`}
        >
          <span className="sm:hidden">{primaryLabelShort ?? primaryLabel}</span>
          <span className="hidden sm:inline">{primaryLabel}</span>
          <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
        </button>
      </div>
    </div>
  );
}
