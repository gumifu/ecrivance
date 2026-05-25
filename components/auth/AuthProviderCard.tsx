"use client";

import Link from "next/link";
import { ChevronRight, Mail } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { AppleIcon, GoogleIcon } from "./AuthIcons";

type AuthProviderCardProps = {
  mode: "signup" | "signin";
};

export function AuthProviderCard({ mode }: AuthProviderCardProps) {
  const reduced = useReducedMotion();
  const emailLabel = mode === "signup" ? "Sign up with email" : "Sign in with email";

  return (
    <div className="mt-10 w-full rounded-2xl border border-white/80 bg-white/70 p-6 shadow-card backdrop-blur-md">
      <div className="space-y-3">
        <motion.button
          type="button"
          whileHover={reduced ? undefined : { scale: 1.01 }}
          whileTap={reduced ? undefined : { scale: 0.99 }}
          className="btn-social w-full py-3.5"
        >
          <GoogleIcon />
          Continue with Google
        </motion.button>
        <motion.button
          type="button"
          whileHover={reduced ? undefined : { scale: 1.01 }}
          whileTap={reduced ? undefined : { scale: 0.99 }}
          className="btn-social w-full py-3"
        >
          <AppleIcon />
          Continue with Apple
        </motion.button>
      </div>

      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center" aria-hidden>
          <div className="w-full border-t border-gray-200" />
        </div>
        <p className="relative mx-auto w-fit bg-white/80 px-3 text-xs text-gray-500">
          or use email
        </p>
      </div>

      <motion.div whileHover={reduced ? undefined : { scale: 1.01 }} whileTap={reduced ? undefined : { scale: 0.99 }}>
        <Link href="/app" className="btn-social w-full py-3">
          <Mail className="h-4 w-4 text-gray-600" aria-hidden />
          {emailLabel}
          <ChevronRight className="ml-auto h-4 w-4 text-gray-400" aria-hidden />
        </Link>
      </motion.div>
    </div>
  );
}
