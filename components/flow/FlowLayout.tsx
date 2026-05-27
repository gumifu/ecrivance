"use client";

import { motion } from "motion/react";
import { FlowHeader } from "./FlowHeader";
import { SiteFooter } from "./SiteFooter";
import { useMobileReducedMotion } from "../../lib/use-mobile-reduced-motion";

type FlowLayoutProps = {
  children: React.ReactNode;
  actions?: React.ReactNode;
  showOrbs?: boolean;
  showFooter?: boolean;
  maxWidth?: "md" | "lg";
};

export default function FlowLayout({
  children,
  actions,
  showOrbs = true,
  showFooter = true,
  maxWidth = "md"
}: FlowLayoutProps) {
  const reduced = useMobileReducedMotion();
  const widthClass = maxWidth === "lg" ? "max-w-3xl" : "max-w-3xl";

  const mainClass = `relative z-10 mx-auto w-full flex-1 overflow-x-hidden px-5 pt-6 pb-24 sm:px-6 md:pt-8 md:pb-28 ${widthClass}`;

  return (
    <div className="lp-page relative min-h-dvh overflow-x-hidden text-gray-900">
      {showOrbs ? (
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
      ) : null}

      <section className="relative flex min-h-dvh flex-col">
        <FlowHeader />

        <main className={mainClass}>{children}</main>

        {actions}
      </section>

      {showFooter ? <SiteFooter className={actions ? "pb-24" : undefined} /> : null}
    </div>
  );
}
