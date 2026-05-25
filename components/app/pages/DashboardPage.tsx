"use client";

import Link from "next/link";
import { ArrowRight, Check, Lightbulb, Target } from "lucide-react";
import { motion } from "motion/react";
import { fadeUp, stagger } from "../../../lib/landing-motion";
import { ProgressChart } from "../../landing/ProgressChart";
import { FeedbackScoreBar } from "../../flow/FeedbackScoreBar";
import { AppPageHeader } from "../AppPageHeader";
import { GlassCard } from "../GlassCard";
import { StatCard } from "../StatCard";

const studySteps = [
  { title: "First writing completed", sub: "Task 1 — Email (B1+)", done: true },
  { title: "Improve coherence", sub: "Task 2 — Next step", done: false },
  { title: "Opinion writing", sub: "Task 3 — Upcoming", done: false },
  { title: "Full simulation", sub: "60-min exam", done: false }
];

const weekDays = [
  { label: "M", done: true },
  { label: "T", done: true },
  { label: "W", done: true },
  { label: "T", done: true },
  { label: "F", done: false },
  { label: "S", done: false },
  { label: "S", done: false }
];

export function DashboardPage() {
  return (
    <motion.div initial="hidden" animate="show" variants={stagger(0.06)} className="mx-auto max-w-5xl">
      <motion.div variants={fadeUp}>
        <AppPageHeader title="Dashboard" subtitle="Track your progress and improvement" />
      </motion.div>

      <div className="mb-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
        <motion.div variants={fadeUp}>
          <StatCard label="Current Level" value="B1+" hint="Intermediate" />
        </motion.div>
        <motion.div variants={fadeUp}>
          <StatCard label="Estimated NCLC" value="6–7" hint="+1 from last week" />
        </motion.div>
        <motion.div variants={fadeUp}>
          <StatCard label="Target NCLC" value="7+" hint="Express Entry" />
        </motion.div>
        <motion.div variants={fadeUp}>
          <StatCard label="Practice Sessions" value="4" hint="This month" />
        </motion.div>
      </div>

      <div className="mb-8 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <GlassCard className="p-6" animate>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="font-display text-xl font-bold text-gray-900">Score Progress</h2>
            <span className="text-xs text-gray-500">4 weeks</span>
          </div>
          <ProgressChart height={180} />
          <div className="mt-6 grid grid-cols-3 gap-4 border-t border-gray-100 pt-4 text-center">
            <div>
              <p className="text-2xl font-bold text-gray-900">75</p>
              <p className="text-xs text-gray-500">Current Score</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-green-600">+20</p>
              <p className="text-xs text-gray-500">Improvement</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">4</p>
              <p className="text-xs text-gray-500">Sessions</p>
            </div>
          </div>
        </GlassCard>

        <GlassCard className="p-6" animate>
          <div className="mb-4 flex items-center gap-2">
            <Target className="h-4 w-4 text-brand-navy" aria-hidden />
            <h2 className="font-display text-xl font-bold text-gray-900">Focus Areas</h2>
          </div>
          <div className="space-y-4">
            <FeedbackScoreBar label="Coherence" value={68} color="#002395" delay={0.1} />
            <FeedbackScoreBar label="Vocabulary" value={70} delay={0.2} />
            <FeedbackScoreBar label="Task Completion" value={85} color="#22c55e" delay={0.3} />
          </div>
          <div className="mt-6 rounded-xl border border-amber-100 bg-amber-50/80 p-4">
            <p className="text-sm font-semibold text-gray-800">Recommendation</p>
            <p className="mt-1 text-sm text-gray-600">
              Practice Task 2 to improve coherence and transitions.
            </p>
          </div>
        </GlassCard>
      </div>

      <GlassCard className="mb-8 p-6" animate>
        <div className="mb-6 flex items-center gap-2">
          <Lightbulb className="h-4 w-4 text-brand-navy" aria-hidden />
          <h2 className="font-display text-xl font-bold text-gray-900">Study Path</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {studySteps.map((step, i) => (
            <div key={step.title} className="relative flex flex-col items-center text-center">
              {i < studySteps.length - 1 ? (
                <span
                  className="absolute left-[calc(50%+24px)] top-6 hidden h-0.5 w-[calc(100%-48px)] bg-gray-200 lg:block"
                  aria-hidden
                />
              ) : null}
              <span
                className={`flex h-12 w-12 items-center justify-center rounded-full ${
                  step.done ? "bg-brand-navy text-white" : "border-2 border-gray-200 bg-white text-gray-400"
                }`}
              >
                {step.done ? <Check className="h-5 w-5" aria-hidden /> : null}
              </span>
              <p className="mt-3 text-sm font-medium text-gray-800">{step.title}</p>
              <p className="mt-1 text-xs text-gray-500">{step.sub}</p>
            </div>
          ))}
        </div>
      </GlassCard>

      <GlassCard className="mb-8 p-6" animate>
        <h2 className="font-display text-xl font-bold text-gray-900">Weekly Practice</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {weekDays.map((day, i) => (
            <span
              key={`${day.label}-${i}`}
              className={`flex h-10 w-10 items-center justify-center rounded-xl text-sm font-semibold ${
                day.done
                  ? "bg-brand-navy text-white"
                  : "border border-gray-200 bg-white text-gray-500"
              }`}
            >
              {day.label}
            </span>
          ))}
        </div>
        <p className="mt-4 text-sm text-gray-600">
          <span className="font-semibold text-brand-navy">4 day streak!</span> Practice 3 more
          days this week to reach your goal.
        </p>
      </GlassCard>

      <div className="flex justify-center">
        <Link href="/app" className="btn-primary">
          Continue practice
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>
    </motion.div>
  );
}
