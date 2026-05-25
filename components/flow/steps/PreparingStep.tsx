"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { easeOut } from "../../../lib/landing-motion";

const TICK_MS = 1000;
const TICK_COUNT = 3;
const INTRO_DURATION_MS = 2000;
const PREPARE_DURATION_MS = INTRO_DURATION_MS + TICK_MS * TICK_COUNT;

const RING_SIZE = 168;
const STROKE_WIDTH = 8;
const RADIUS = (RING_SIZE - STROKE_WIDTH) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
const CENTER = RING_SIZE / 2;

type PreparingStepProps = {
  onComplete: () => void;
};

export function PreparingStep({ onComplete }: PreparingStepProps) {
  const reduced = useReducedMotion();
  const onCompleteRef = useRef(onComplete);
  const [showCountdown, setShowCountdown] = useState(false);
  const [count, setCount] = useState(3);

  onCompleteRef.current = onComplete;

  useEffect(() => {
    if (reduced) {
      onCompleteRef.current();
      return;
    }

    const intro = window.setTimeout(() => setShowCountdown(true), INTRO_DURATION_MS);
    const t2 = window.setTimeout(() => setCount(2), INTRO_DURATION_MS + TICK_MS);
    const t1 = window.setTimeout(() => setCount(1), INTRO_DURATION_MS + TICK_MS * 2);
    const done = window.setTimeout(() => onCompleteRef.current(), PREPARE_DURATION_MS);

    return () => {
      window.clearTimeout(intro);
      window.clearTimeout(t2);
      window.clearTimeout(t1);
      window.clearTimeout(done);
    };
  }, [reduced]);

  return (
    <div
      className="flex min-h-[calc(100dvh-10rem)] flex-col items-center justify-center px-4 text-center"
      aria-live="polite"
      aria-busy="true"
    >
      <AnimatePresence mode="wait">
        {!showCountdown ? (
          <motion.div
            key="preparing"
            initial={reduced ? false : { opacity: 0, y: 8 }}
            animate={reduced ? undefined : { opacity: 1, y: 0 }}
            exit={reduced ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: easeOut }}
            className="flex h-[168px] flex-col items-center justify-center"
          >
            <p className="font-display text-3xl font-bold text-brand-navy">Preparing...</p>
            <div className="mt-5 flex gap-2" aria-hidden>
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  className="h-2.5 w-2.5 rounded-full bg-brand-navy"
                  animate={reduced ? undefined : { opacity: [0.25, 1, 0.25], y: [0, -6, 0] }}
                  transition={{
                    duration: 0.9,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.15
                  }}
                />
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="countdown"
            initial={reduced ? false : { opacity: 0, y: 8 }}
            animate={reduced ? undefined : { opacity: 1, y: 0 }}
            exit={reduced ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: easeOut }}
            className="relative mt-12"
            style={{ width: RING_SIZE, height: RING_SIZE }}
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={TICK_COUNT}
            aria-valuenow={TICK_COUNT - count + 1}
            aria-label="Preparing countdown"
          >
            <svg
              width={RING_SIZE}
              height={RING_SIZE}
              viewBox={`0 0 ${RING_SIZE} ${RING_SIZE}`}
              className="block -rotate-90"
              aria-hidden
            >
              <circle
                cx={CENTER}
                cy={CENTER}
                r={RADIUS}
                fill="none"
                stroke="#e5e7eb"
                strokeWidth={STROKE_WIDTH}
              />
              {!reduced ? (
                <circle
                  key={count}
                  cx={CENTER}
                  cy={CENTER}
                  r={RADIUS}
                  fill="none"
                  stroke="#002395"
                  strokeWidth={STROKE_WIDTH}
                  strokeLinecap="round"
                  strokeDasharray={CIRCUMFERENCE}
                  strokeDashoffset={CIRCUMFERENCE}
                  className="preparing-ring-tick"
                />
              ) : null}
            </svg>

            <div className="absolute inset-0 flex items-center justify-center">
              <AnimatePresence mode="popLayout">
                <motion.span
                  key={count}
                  initial={reduced ? false : { opacity: 0, scale: 0.6 }}
                  animate={reduced ? undefined : { opacity: 1, scale: 1 }}
                  exit={reduced ? undefined : { opacity: 0, scale: 1.15 }}
                  transition={{ duration: 0.25, ease: easeOut }}
                  className="font-display text-6xl font-bold text-brand-navy"
                >
                  {count}
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
