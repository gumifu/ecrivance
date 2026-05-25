"use client";

import Link from "next/link";
import { LogIn } from "lucide-react";
import { motion } from "motion/react";
import { fadeUp, scaleIn, stagger } from "../../lib/landing-motion";
import { AuthProviderCard } from "./AuthProviderCard";
import { AuthShell } from "./AuthShell";

export default function SigninPage() {
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
          <LogIn className="h-7 w-7" aria-hidden />
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="mt-6 font-display text-3xl font-bold text-gray-900 md:text-4xl"
        >
          Welcome back.
        </motion.h1>
        <motion.p variants={fadeUp} className="mt-3 text-base text-gray-500">
          Sign in to continue your TCF Canada writing practice.
        </motion.p>

        <motion.div variants={fadeUp} className="mt-10">
          <AuthProviderCard mode="signin" />
        </motion.div>

        <motion.p variants={fadeUp} className="mt-8 text-sm text-gray-500">
          Don&apos;t have an account?{" "}
          <Link
            href="/signup"
            className="font-semibold text-brand-navy transition hover:text-brand-navy-hover"
          >
            Sign up
          </Link>
        </motion.p>
      </motion.div>
    </AuthShell>
  );
}
