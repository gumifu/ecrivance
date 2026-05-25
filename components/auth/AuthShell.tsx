"use client";

import { motion, useReducedMotion } from "motion/react";
import { AuthHeader } from "./AuthHeader";

type AuthShellProps = {
  children: React.ReactNode;
};

export function AuthShell({ children }: AuthShellProps) {
  const reduced = useReducedMotion();

  return (
    <div className="lp-page relative flex min-h-dvh flex-col overflow-x-hidden text-gray-900">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <motion.div
          className="lp-orb lp-orb-a"
          animate={reduced ? undefined : { scale: [1, 1.08, 1], y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="lp-orb lp-orb-b"
          animate={reduced ? undefined : { scale: [1, 1.12, 1], y: [0, 20, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />
      </div>

      <AuthHeader />

      <main className="relative z-10 mx-auto flex w-full max-w-md flex-1 flex-col justify-center px-6 py-12">
        {children}
      </main>
    </div>
  );
}
