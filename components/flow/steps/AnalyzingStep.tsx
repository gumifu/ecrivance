"use client";

import { useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  ANALYZING_CRITERIA,
  ANALYZING_DURATION_MS,
  ANALYZING_TICK_MS
} from "../../../lib/feedback-demo";
import { easeOut, fadeUp, stagger } from "../../../lib/landing-motion";

type AnalyzingStepProps = {
  onComplete: () => void;
};

export function AnalyzingStep({ onComplete }: AnalyzingStepProps) {
  const reduced = useReducedMotion();
  const onCompleteRef = useRef(onComplete);
  const [completedCount, setCompletedCount] = useState(0);

  onCompleteRef.current = onComplete;

  useEffect(() => {
    if (reduced) {
      onCompleteRef.current();
      return;
    }

    const timers = ANALYZING_CRITERIA.map((_, index) =>
      window.setTimeout(() => setCompletedCount(index + 1), ANALYZING_TICK_MS * (index + 1))
    );

    const done = window.setTimeout(() => onCompleteRef.current(), ANALYZING_DURATION_MS);

    return () => {
      timers.forEach((id) => window.clearTimeout(id));
      window.clearTimeout(done);
    };
  }, [reduced]);

  return (
    <motion.div
      className="mx-auto flex max-w-md flex-col items-center px-4 py-8 text-center"
      initial="hidden"
      animate="show"
      variants={stagger(0.12)}
      aria-live="polite"
      aria-busy="true"
    >
      <motion.div
        variants={fadeUp}
        className="relative flex h-[88px] w-[88px] items-center justify-center rounded-full bg-brand-navy shadow-card"
      >
        <motion.div
          className="absolute inset-2 rounded-full border-[3px] border-white/20 border-t-white"
          animate={reduced ? undefined : { rotate: 360 }}
          transition={{ duration: 1.1, repeat: Infinity, ease: "linear" }}
          aria-hidden
        />
      </motion.div>

      <motion.h1
        variants={fadeUp}
        className="mt-8 font-display text-2xl font-bold text-gray-900 md:text-3xl"
      >
        Analyzing your writing…
      </motion.h1>
      <motion.p variants={fadeUp} className="mt-3 text-sm leading-relaxed text-gray-500 md:text-base">
        AI evaluation against TCF Canada criteria.
        <br />
        Only takes a moment.
      </motion.p>

      <motion.div
        variants={fadeUp}
        className="mt-10 w-full rounded-2xl border border-white/80 bg-white/70 p-6 shadow-card backdrop-blur-md"
      >
        <ul className="space-y-4 text-left">
          {ANALYZING_CRITERIA.map((item, index) => {
            const done = completedCount > index;
            return (
              <motion.li
                key={item.id}
                layout
                className="flex items-center gap-3"
                initial={false}
                animate={{
                  opacity: done ? 1 : 0.65
                }}
                transition={{ duration: 0.3, ease: easeOut }}
              >
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
                    done ? "bg-green-100 text-green-600" : "bg-gray-100 text-gray-400"
                  }`}
                >
                  <AnimatePresence mode="wait">
                    {done ? (
                      <motion.span
                        key="check"
                        initial={reduced ? false : { scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.25, ease: easeOut }}
                      >
                        <Check className="h-4 w-4" strokeWidth={2.5} aria-hidden />
                      </motion.span>
                    ) : (
                      <motion.span
                        key="pending"
                        initial={{ opacity: 0.5 }}
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{
                          duration: 1.2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="h-2 w-2 rounded-full bg-gray-300"
                        aria-hidden
                      />
                    )}
                  </AnimatePresence>
                </span>
                <span
                  className={`text-sm font-medium transition-colors ${
                    done ? "text-gray-800" : "text-gray-500"
                  }`}
                >
                  {item.label}
                </span>
              </motion.li>
            );
          })}
        </ul>
      </motion.div>
    </motion.div>
  );
}
