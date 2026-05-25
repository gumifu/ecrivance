"use client";

import Link from "next/link";
import { Lock } from "lucide-react";
import { SIGNUP_BENEFITS } from "../../lib/auth-content";
import { AuthBenefitsList } from "./AuthBenefitsList";
import { AuthProviderCard } from "./AuthProviderCard";
import { AuthShell } from "./AuthShell";

export default function SignupPage() {
  return (
    <AuthShell>
      <div className="w-full text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-brand-navy shadow-card">
          <Lock className="h-7 w-7" aria-hidden />
        </div>

        <h1 className="mt-6 font-display text-3xl font-bold text-gray-900 md:text-4xl">
          Unlock your full results.
        </h1>
        <p className="mt-3 text-base text-gray-500">
          Free account — no credit card needed.
        </p>

        <AuthBenefitsList items={SIGNUP_BENEFITS} />
        <AuthProviderCard mode="signup" />

        <p className="mt-8 text-sm text-gray-500">
          Already have an account?{" "}
          <Link
            href="/signin"
            className="font-semibold text-brand-navy transition hover:text-brand-navy-hover"
          >
            Sign in
          </Link>
        </p>
      </div>
    </AuthShell>
  );
}
