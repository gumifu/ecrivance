"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { AppSidebar } from "./AppSidebar";
import EcrivanceLogo from "../brand/EcrivanceLogo";

type AppShellProps = {
  children: React.ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const reduced = useReducedMotion();

  return (
    <div className="lp-page flex min-h-dvh overflow-x-hidden text-gray-900">
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

      <div className="fixed inset-y-0 left-0 z-30 hidden w-60 lg:flex">
        <AppSidebar />
      </div>

      <div className="relative z-20 flex min-w-0 flex-1 flex-col lg:ml-60">
        <div className="flex items-center gap-3 border-b border-gray-200 bg-white/80 px-4 py-3 backdrop-blur-md lg:hidden">
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-gray-700"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
          <EcrivanceLogo height={22} />
        </div>

        <main className="min-h-0 flex-1 overflow-y-auto overflow-x-hidden px-4 py-6 sm:px-8 lg:px-8 lg:py-8">
          {children}
        </main>
      </div>

      <AnimatePresence>
        {mobileOpen ? (
          <>
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-gray-900/40 lg:hidden"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 320 }}
              className="fixed inset-y-0 left-0 z-50 w-[min(280px,85vw)] lg:hidden"
            >
              <div className="relative h-full">
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  className="absolute right-3 top-4 z-10 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/80 text-gray-700"
                  aria-label="Close menu"
                >
                  <X className="h-4 w-4" />
                </button>
                <AppSidebar onNavigate={() => setMobileOpen(false)} />
              </div>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
