"use client";

import { ArrowRight, Lock } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import {
  FEEDBACK_SCORES,
  LOCKED_ANALYSIS_ITEMS,
  WRITING_CORRECTIONS
} from "../../../lib/feedback-demo";
import { easeOut, fadeUp, scaleIn, stagger } from "../../../lib/landing-motion";
import { FeedbackScoreBar } from "../FeedbackScoreBar";

const feedbackTabs = [
  "Overview",
  "Summary",
  "Errors",
  "Vocabulary",
  "Analysis",
  "C1 Rewrite"
] as const;

export function FeedbackStep() {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className="mx-auto w-full max-w-3xl pb-8"
      initial="hidden"
      animate="show"
      variants={stagger(0.08)}
    >
      <motion.div variants={fadeUp} className="flex justify-center">
        <span className="rounded-full bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-navy">
          Task 1 — Email
        </span>
      </motion.div>

      <motion.p
        variants={scaleIn}
        className="mt-6 text-center font-display text-5xl font-bold text-brand-navy md:text-6xl"
      >
        B1+
      </motion.p>
      <motion.p variants={fadeUp} className="mt-2 text-center text-lg text-gray-600">
        Estimated NCLC 6–7
      </motion.p>

      <motion.div
        variants={fadeUp}
        className="mt-8 rounded-2xl border border-gray-200 bg-white/70 p-1 shadow-card backdrop-blur-md"
        aria-label="Feedback sections"
      >
        <div className="grid grid-cols-2 gap-1 sm:grid-cols-3 lg:grid-cols-6">
          {feedbackTabs.map((tab, index) => {
            const locked = index > 0;
            return (
              <button
                key={tab}
                type="button"
                disabled={locked}
                className={`inline-flex items-center justify-center gap-1.5 rounded-xl px-3 py-2 text-center text-sm font-semibold transition ${
                  locked
                    ? "cursor-not-allowed text-gray-400"
                    : "bg-brand-navy text-white shadow-sm"
                }`}
              >
                {locked ? <Lock className="h-3.5 w-3.5" aria-hidden /> : null}
                {tab}
              </button>
            );
          })}
        </div>
      </motion.div>

      <motion.div
        variants={fadeUp}
        className="mt-8 rounded-2xl border border-white/80 bg-white/70 p-6 shadow-card backdrop-blur-md"
      >
        <h2 className="font-display text-xl font-bold text-gray-900">Score Breakdown</h2>
        <div className="mt-6 space-y-5">
          {FEEDBACK_SCORES.map((score, index) => (
            <FeedbackScoreBar
              key={score.label}
              label={score.label}
              value={score.value}
              color={score.color}
              delay={0.15 + index * 0.12}
            />
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={fadeUp}
        className="mt-6 rounded-2xl border border-white/80 bg-white/70 p-6 shadow-card backdrop-blur-md"
      >
        <h2 className="font-display text-xl font-bold text-gray-900">Writing Corrections</h2>
        <p className="mt-1 text-sm text-gray-500">2 of 14 corrections shown</p>
        <motion.div
          className="mt-5 space-y-4"
          variants={stagger(0.1, 0.35)}
          initial="hidden"
          animate="show"
        >
          {WRITING_CORRECTIONS.map((item) => (
            <motion.div
              key={item.id}
              variants={fadeUp}
              className="rounded-xl border border-blue-100 bg-blue-50/60 p-4"
            >
              <p className="text-sm text-gray-600">
                <span className="font-medium text-gray-500">Original</span>{" "}
                <span className="text-gray-400 line-through">&quot;{item.original}&quot;</span>
              </p>
              <p className="mt-2 text-sm text-gray-800">
                <span className="font-medium text-gray-500">Better</span>{" "}
                <span className="font-semibold text-brand-navy">&quot;{item.better}&quot;</span>
              </p>
              <p className="mt-2 text-xs text-gray-500">{item.note}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div variants={fadeUp} className="relative mt-6 overflow-hidden rounded-2xl">
        <div
          className={`rounded-2xl border border-gray-200 bg-white p-6 ${
            reduced ? "" : "blur-[6px]"
          }`}
          aria-hidden={!reduced}
        >
          <h3 className="font-display text-xl font-bold text-gray-900">Full Analysis</h3>
          <ul className="mt-4 space-y-3">
            {LOCKED_ANALYSIS_ITEMS.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 rounded-lg border border-gray-100 bg-gray-50 px-3 py-3 text-sm text-gray-700"
              >
                <span className="h-4 w-4 rounded bg-gray-200" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/55 px-6 py-10 text-center backdrop-blur-[2px]">
          <motion.div
            initial={reduced ? false : { scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.45, ease: easeOut }}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-navy text-white shadow-card"
          >
            <Lock className="h-5 w-5" aria-hidden />
          </motion.div>
          <p className="mt-4 font-display text-lg font-bold text-gray-900">Full results locked</p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-gray-600">
            Sign up free to unlock your complete analysis, all 14 corrections, and personalised
            recommendations.
          </p>
        </div>
      </motion.div>

      <motion.p
        variants={fadeUp}
        className="mt-6 flex items-center justify-center gap-1 text-center text-xs text-gray-400 md:hidden"
      >
        <Lock className="h-3 w-3" aria-hidden />
        Unlock below to see everything
        <ArrowRight className="h-3 w-3" aria-hidden />
      </motion.p>
    </motion.div>
  );
}
