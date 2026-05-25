"use client";

import Link from "next/link";
import { Lock } from "lucide-react";
import { motion } from "motion/react";
import { SIGNUP_BENEFITS } from "../../lib/auth-content";
import { fadeUp, scaleIn, stagger } from "../../lib/landing-motion";
import { AuthBenefitsList } from "./AuthBenefitsList";
import { AuthProviderCard } from "./AuthProviderCard";
import { AuthShell } from "./AuthShell";

export default function SignupPage() {
  return (
    <AuthShell>
      <motion.div
        className="w-full text-center"
        initial="hidden"
        animate="show"
        variants={stagger(0.1)}
      >
        <motion.div
          variants={scaleIn}
          className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-brand-navy shadow-card"
        >
          <Lock className="h-7 w-7" aria-hidden />
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="mt-6 font-display text-3xl font-bold text-gray-900 md:text-4xl"
        >
          Unlock your full results.
        </motion.h1>
        <motion.p variants={fadeUp} className="mt-3 text-base text-gray-500">
          Free account — no credit card needed.
        </motion.p>

        <AuthBenefitsList items={SIGNUP_BENEFITS} />
        <motion.div variants={fadeUp}>
          <AuthProviderCard mode="signup" />
        </motion.div>

        <motion.p variants={fadeUp} className="mt-8 text-sm text-gray-500">
          Already have an account?{" "}
          <Link
            href="/signin"
            className="font-semibold text-brand-navy transition hover:text-brand-navy-hover"
          >
            Sign in
          </Link>
        </motion.p>
      </motion.div>
    </AuthShell>
  );
}
