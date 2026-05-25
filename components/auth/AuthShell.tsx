"use client";

import { AuthHeader } from "./AuthHeader";

type AuthShellProps = {
  children: React.ReactNode;
};

export function AuthShell({ children }: AuthShellProps) {
  return (
    <div className="lp-page relative flex min-h-dvh flex-col overflow-x-hidden text-gray-900">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="lp-orb lp-orb-a" />
        <div className="lp-orb lp-orb-b" />
      </div>

      <AuthHeader />

      <main className="relative z-10 mx-auto flex w-full max-w-md flex-1 flex-col justify-center px-6 py-12">
        {children}
      </main>
    </div>
  );
}
