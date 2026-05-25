"use client";

import { Check } from "lucide-react";
import { motion } from "motion/react";
import { fadeUp, stagger } from "../../lib/landing-motion";

type AuthBenefitsListProps = {
  items: readonly string[];
};

export function AuthBenefitsList({ items }: AuthBenefitsListProps) {
  return (
    <motion.ul
      className="mt-8 space-y-4 text-left"
      initial="hidden"
      animate="show"
      variants={stagger(0.08, 0.25)}
    >
      {items.map((item) => (
        <motion.li key={item} variants={fadeUp} className="flex items-start gap-3">
          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
            <Check className="h-3 w-3" strokeWidth={3} aria-hidden />
          </span>
          <span className="text-sm text-gray-700">{item}</span>
        </motion.li>
      ))}
    </motion.ul>
  );
}
