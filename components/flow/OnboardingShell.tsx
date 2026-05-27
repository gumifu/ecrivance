"use client";

import FlowLayout from "./FlowLayout";

type OnboardingShellProps = {
  children: React.ReactNode;
  stepIndex: number;
  totalSteps?: number;
  actions: React.ReactNode;
};

export function SetupDots({
  stepIndex,
  totalSteps = 3
}: {
  stepIndex: number;
  totalSteps?: number;
}) {
  return (
    <div
      className="mb-6 flex shrink-0 items-center justify-center gap-2 md:mb-8"
      aria-label={`Step ${stepIndex + 1} of ${totalSteps}`}
    >
      {Array.from({ length: totalSteps }).map((_, index) => (
        <span
          key={index}
          className={`h-2 rounded-full transition-all duration-300 ${
            index === stepIndex ? "w-6 bg-brand-navy" : "w-2 bg-gray-300"
          }`}
        />
      ))}
    </div>
  );
}

export default function OnboardingShell({
  children,
  stepIndex,
  totalSteps = 3,
  actions
}: OnboardingShellProps) {
  return (
    <FlowLayout actions={actions}>
      <SetupDots stepIndex={stepIndex} totalSteps={totalSteps} />
      <div className="overflow-x-hidden px-1 pb-8">{children}</div>
    </FlowLayout>
  );
}
