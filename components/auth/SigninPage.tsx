"use client";

import Link from "next/link";
import { LogIn } from "lucide-react";
import { AuthProviderCard } from "./AuthProviderCard";
import { AuthShell } from "./AuthShell";

export default function SigninPage() {
  return (
    <AuthShell>
      <div className="w-full text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-brand-navy shadow-card">
          <LogIn className="h-7 w-7" aria-hidden />
        </div>

        <h1 className="mt-6 font-display text-3xl font-bold text-gray-900 md:text-4xl">
          Start practising with Écrivance.
        </h1>
        <p className="mt-3 text-base text-gray-500">
          Practice TCF Canada writing with instant AI feedback.
        </p>

        <div className="mt-10">
          <AuthProviderCard mode="signin" />
        </div>

        <p className="mt-8 text-sm text-gray-500">
          Don&apos;t have an account?{" "}
          <Link
            href="/signup"
            className="font-semibold text-brand-navy transition hover:text-brand-navy-hover"
          >
            Sign up
          </Link>
        </p>
      </div>
    </AuthShell>
  );
}
