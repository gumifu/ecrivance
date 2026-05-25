"use client";

import { CheckCircle2, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { fadeUp, stagger } from "../../../lib/landing-motion";

const introItems = [
  {
    title: "Real TCF-style tasks",
    body: "Practice with the same kind of writing prompt you will see on exam day."
  },
  {
    title: "Instant AI feedback",
    body: "Get your estimated level, score breakdown, and corrections in under 30 seconds."
  },
  {
    title: "No teacher required",
    body: "Start anytime and understand exactly what to improve next."
  }
] as const;

export function IntroStep() {
  const reduced = useReducedMotion();

  return (
    <motion.div
      initial={reduced ? false : "hidden"}
      animate="show"
      variants={stagger(0.08)}
    >
      <motion.div variants={fadeUp} className="text-center">
        <h1 className="font-display text-3xl font-bold text-gray-900 md:text-4xl">
          Let&apos;s find your current TCF Writing level.
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-gray-500">
          You&apos;ll complete a short real-style writing task and receive AI feedback
          in under 30 seconds.
        </p>
      </motion.div>

      <motion.div
        variants={fadeUp}
        className="mx-auto mt-10 max-w-2xl rounded-3xl border border-white/80 bg-white/65 p-6 text-left shadow-card backdrop-blur-md md:p-8"
      >
        <motion.div variants={fadeUp} className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <motion.div
            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-brand-navy"
            animate={reduced ? undefined : { y: [0, -4, 0] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <Sparkles className="h-6 w-6" aria-hidden />
          </motion.div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-navy">
              Your first diagnostic task
            </p>
            <p className="mt-1 font-display text-xl font-bold text-gray-900">
              Write once. Know your level. See what to improve.
            </p>
          </div>
        </motion.div>

        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          <motion.div variants={fadeUp} className="rounded-2xl bg-blue-50/70 px-4 py-3">
            <p className="font-display text-2xl font-bold text-brand-navy">3 Free Credits</p>
            <p className="mt-1 text-xs font-medium text-gray-600">
              Start with a real TCF task
            </p>
          </motion.div>
          <motion.div variants={fadeUp} className="rounded-2xl bg-blue-50/70 px-4 py-3">
            <p className="font-display text-2xl font-bold text-brand-navy">&lt;30s</p>
            <p className="mt-1 text-xs font-medium text-gray-600">AI feedback time</p>
          </motion.div>
          <motion.div variants={fadeUp} className="rounded-2xl bg-blue-50/70 px-4 py-3">
            <p className="font-display text-2xl font-bold text-brand-navy">NCLC</p>
            <p className="mt-1 text-xs font-medium text-gray-600">Level estimate</p>
          </motion.div>
        </div>

        <ul className="mt-6 space-y-4">
          {introItems.map((item) => (
            <motion.li key={item.title} variants={fadeUp} className="flex gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-navy" aria-hidden />
              <div>
                <p className="font-semibold text-gray-900">{item.title}</p>
                <p className="mt-0.5 text-sm leading-relaxed text-gray-500">{item.body}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
}
