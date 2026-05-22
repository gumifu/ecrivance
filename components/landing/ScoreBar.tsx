"use client";

import { motion, useReducedMotion } from "motion/react";
import { easeOut, motionTransition, scrollViewport } from "../../lib/landing-motion";

type ScoreBarProps = {
  label: string;
  value: number;
  color?: string;
  delay?: number;
};

export function ScoreBar({
  label,
  value,
  color = "#1e3a8a",
  delay = 0
}: ScoreBarProps) {
  const reduced = useReducedMotion();

  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between">
        <span className="text-sm text-gray-600">{label}</span>
        <motion.span
          className="text-sm font-semibold"
          style={{ color }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={scrollViewport}
          transition={motionTransition(reduced ?? false, {
            delay: delay + 0.25,
            duration: 0.4
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
          whileInView={{ width: `${value}%` }}
          viewport={scrollViewport}
          transition={motionTransition(reduced ?? false, {
            delay,
            duration: 0.8,
            ease: easeOut
          })}
        />
      </div>
    </div>
  );
}
