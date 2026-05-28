"use client";

import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Clock,
  FileText,
  Mail,
  MessageSquare,
  Sparkles,
  Crown,
  Lock,
  Zap
} from "lucide-react";
import { motion } from "motion/react";
import { fadeUp, stagger } from "../../../lib/landing-motion";
import { useMobileReducedMotion } from "../../../lib/use-mobile-reduced-motion";
import { AppPageHeader } from "../AppPageHeader";
import { GlassCard } from "../GlassCard";

const taskCards = [
  {
    id: 1,
    label: "TASK 1",
    title: "Email writing",
    words: "150–200 words",
    desc: "Simple communication scenario",
    icon: Mail,
    href: "/practice",
    recommended: false
  },
  {
    id: 2,
    label: "TASK 2",
    title: "Article writing",
    words: "200–250 words",
    desc: "Structured explanation or discussion",
    icon: FileText,
    href: "/practice/task-2",
    recommended: true
  },
  {
    id: 3,
    label: "TASK 3",
    title: "Opinion essay",
    words: "300+ words",
    desc: "Opinion-based argumentation",
    icon: MessageSquare,
    href: "/practice/task-3",
    recommended: false
  }
] as const;

export function NewPracticePage() {
  const reduced = useMobileReducedMotion();

  return (
    <motion.div
      initial={reduced ? false : "hidden"}
      animate="show"
      variants={stagger(0.08)}
      className="mx-auto max-w-4xl"
    >
      <motion.div variants={fadeUp}>
        <AppPageHeader
          title="New Practice"
          subtitle="Choose a task and start writing"
          badge={
            <span className="inline-flex rounded-full border border-blue-100 bg-white px-3 py-1 text-sm font-semibold text-brand-navy shadow-sm">
              Free · 2 Credits Left
            </span>
          }
        />
      </motion.div>

      <motion.div variants={fadeUp} className="mb-4 md:mb-5">
        <div className="flex flex-col gap-3 rounded-2xl border border-amber-100 bg-amber-50/70 px-4 py-3 shadow-sm sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-800">
              <Crown className="h-4 w-4" aria-hidden />
            </span>
            <div>
              <p className="text-sm font-semibold text-gray-900">
                Need more practice credits?
              </p>
              <p className="mt-0.5 text-xs text-gray-600">
                Upgrade to unlock unlimited tasks and full feedback history.
              </p>
            </div>
          </div>
          <Link
            href="/app/billing"
            className="shrink-0 rounded-xl bg-brand-navy px-4 py-2 text-center text-sm font-semibold text-white transition hover:bg-brand-navy-hover"
          >
            View plans
          </Link>
        </div>
      </motion.div>

      <GlassCard className="mb-4 p-5 md:mb-6 md:p-6" animate>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-brand-navy">
            <Sparkles className="h-5 w-5" aria-hidden />
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-navy">
              Recommended next step
            </p>
            <h2 className="mt-1 font-display text-xl font-bold text-gray-900">
              Task 2 — Coherence Practice
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              Your first writing was clear, but transitions can be stronger. This task
              focuses on linking ideas smoothly.
            </p>
          </div>
          <Link
            href="/practice/task-2"
            className="btn-primary inline-flex w-full shrink-0 self-start sm:w-auto"
          >
            Start
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </GlassCard>

      <GlassCard className="mb-6 p-5 md:mb-8" animate>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-medium text-gray-800">From your last practice:</p>
            <p className="mt-1 text-sm text-gray-600">
              Try using cependant, donc, and en revanche to improve coherence.
            </p>
          </div>
          <Link
            href="/app/feedback"
            className="btn-secondary-gray shrink-0 px-5 py-2.5 text-sm"
          >
            <BookOpen className="h-4 w-4" aria-hidden />
            View feedback
          </Link>
        </div>
      </GlassCard>

      <motion.h2 variants={fadeUp} className="mb-4 font-display text-xl font-bold text-gray-900">
        Practice Mode
      </motion.h2>
      <div className="mb-8 grid gap-4 md:mb-10 md:grid-cols-2">
        <GlassCard className="p-5" animate>
          <div className="flex h-full flex-col gap-4">
            <div className="flex items-start justify-between gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-brand-navy">
                <Zap className="h-5 w-5" aria-hidden />
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2.5 py-1 text-xs font-semibold text-brand-navy">
                <Lock className="h-3 w-3" aria-hidden />
                1 credit required
              </span>
            </div>
            <div className="flex-1">
              <p className="font-semibold text-gray-900">Quick Practice</p>
              <p className="mt-1 font-display text-2xl font-bold text-brand-navy">15–20 min</p>
              <p className="mt-2 text-sm text-gray-600">
                One focused writing task with instant feedback
              </p>
              <ul className="mt-3 space-y-1 text-sm text-gray-500">
                <li>· Fast feedback</li>
                <li>· Low pressure</li>
                <li>· Perfect for daily practice</li>
              </ul>
            </div>
            <button type="button" className="btn-secondary-gray w-full px-4 py-2.5 text-sm">
              Start with credit
            </button>
          </div>
        </GlassCard>
        <GlassCard className="p-5" animate>
          <div className="flex h-full flex-col gap-4">
            <div className="flex items-start justify-between gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-brand-navy">
                <Clock className="h-5 w-5" aria-hidden />
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2.5 py-1 text-xs font-semibold text-amber-900">
                <Lock className="h-3 w-3" aria-hidden />
                Pro only
              </span>
            </div>
            <div className="flex-1">
              <p className="font-semibold text-gray-900">Full Exam Simulation</p>
              <p className="mt-1 font-display text-2xl font-bold text-brand-navy">60 min</p>
              <p className="mt-2 text-sm text-gray-600">
                Complete all 3 tasks in real exam conditions
              </p>
              <ul className="mt-3 space-y-1 text-sm text-gray-500">
                <li>· Real exam timing</li>
                <li>· All tasks included</li>
                <li>· Complete assessment</li>
              </ul>
            </div>
            <Link href="/app/billing" className="btn-primary w-full px-4 py-2.5 text-sm">
              <Lock className="h-4 w-4" aria-hidden />
              Upgrade to unlock
            </Link>
          </div>
        </GlassCard>
      </div>

      <motion.h2 variants={fadeUp} className="mb-4 font-display text-xl font-bold text-gray-900">
        Choose a Recommended Task
      </motion.h2>
      <div className="grid gap-4 md:grid-cols-3">
        {taskCards.map((task) => {
          const Icon = task.icon;
          return (
            <GlassCard key={task.id} className="relative flex flex-col p-5" animate>
              {task.recommended ? (
                <span className="absolute right-4 top-4 rounded-full bg-amber-100 px-2.5 py-1 text-xs font-semibold text-amber-900">
                  Recommended
                </span>
              ) : null}
              <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-brand-navy">
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                {task.label}
              </p>
              <p className="mt-1 font-semibold text-gray-900">{task.title}</p>
              <p className="mt-1 text-xs text-gray-500">{task.words}</p>
              <p className="mt-3 flex-1 text-sm text-gray-600">{task.desc}</p>
              <Link
                href={task.href}
                className={`mt-4 w-full text-center ${task.recommended ? "btn-primary" : "btn-secondary-gray"} py-2.5 text-sm`}
              >
                Start {task.label}
              </Link>
            </GlassCard>
          );
        })}
      </div>
    </motion.div>
  );
}
