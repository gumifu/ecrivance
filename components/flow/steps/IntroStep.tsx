"use client";

import { CheckCircle2, Sparkles } from "lucide-react";

const introItems = [
  {
    title: "Real TCF-style tasks",
    body: "Practice with the same kind of writing prompt you will see on exam day."
  },
  {
    title: "Instant AI feedback",
    body: "Get your estimated level, score breakdown, and corrections in under 30 seconds."
  },
  {
    title: "No teacher required",
    body: "Start anytime and understand exactly what to improve next."
  }
] as const;

export function IntroStep() {
  return (
    <>
      <div className="text-center">
        <h1 className="font-display text-3xl font-bold text-gray-900 md:text-4xl">
          Let&apos;s find your current TCF Writing level.
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-gray-500">
          You&apos;ll complete a short real-style writing task and receive AI feedback
          in under 30 seconds.
        </p>
      </div>

      <div className="mx-auto mt-10 max-w-2xl rounded-3xl border border-white/80 bg-white/65 p-6 text-left shadow-card backdrop-blur-md md:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-brand-navy">
            <Sparkles className="h-6 w-6" aria-hidden />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-navy">
              Your first diagnostic task
            </p>
            <p className="mt-1 font-display text-xl font-bold text-gray-900">
              Write once. Know your level. See what to improve.
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          <div className="rounded-2xl bg-blue-50/70 px-4 py-3">
            <p className="font-display text-2xl font-bold text-brand-navy">3 Free Credits</p>
            <p className="mt-1 text-xs font-medium text-gray-600">
              Start with a real TCF task
            </p>
          </div>
          <div className="rounded-2xl bg-blue-50/70 px-4 py-3">
            <p className="font-display text-2xl font-bold text-brand-navy">&lt;30s</p>
            <p className="mt-1 text-xs font-medium text-gray-600">AI feedback time</p>
          </div>
          <div className="rounded-2xl bg-blue-50/70 px-4 py-3">
            <p className="font-display text-2xl font-bold text-brand-navy">NCLC</p>
            <p className="mt-1 text-xs font-medium text-gray-600">Level estimate</p>
          </div>
        </div>

        <ul className="mt-6 space-y-4">
          {introItems.map((item) => (
            <li key={item.title} className="flex gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-navy" aria-hidden />
              <div>
                <p className="font-semibold text-gray-900">{item.title}</p>
                <p className="mt-0.5 text-sm leading-relaxed text-gray-500">{item.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
