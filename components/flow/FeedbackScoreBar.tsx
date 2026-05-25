"use client";

import { motion, useReducedMotion } from "motion/react";
import { easeOut, motionTransition } from "../../lib/landing-motion";

type FeedbackScoreBarProps = {
  label: string;
  value: number;
  color?: string;
  delay?: number;
};

export function FeedbackScoreBar({
  label,
  value,
  color = "#002395",
  delay = 0
}: FeedbackScoreBarProps) {
  const reduced = useReducedMotion();

  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between">
        <span className="text-sm text-gray-600">{label}</span>
        <motion.span
          className="text-sm font-semibold"
          style={{ color }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={motionTransition(reduced ?? false, {
            delay: delay + 0.2,
            duration: 0.35
          })}
        >
          {value}/100
        </motion.span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-gray-100">
        <motion.div
          className="h-1.5 rounded-full"
          style={{ backgroundColor: color }}
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={motionTransition(reduced ?? false, {
            delay,
            duration: 0.85,
            ease: easeOut
          })}
        />
      </div>
    </div>
  );
}
