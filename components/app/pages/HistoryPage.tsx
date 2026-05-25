"use client";

import Link from "next/link";
import { BookOpen, Mail, FileText, RotateCcw } from "lucide-react";
import { motion } from "motion/react";
import { HISTORY_ENTRIES } from "../../../lib/app-demo-data";
import { fadeUp, stagger } from "../../../lib/landing-motion";
import { AppPageHeader } from "../AppPageHeader";
import { GlassCard } from "../GlassCard";
import { StatCard } from "../StatCard";

const taskIcons = {
  "Task 1 — Email": Mail,
  "Task 2 — Article": FileText
} as const;

export function HistoryPage() {
  return (
    <motion.div initial="hidden" animate="show" variants={stagger(0.06)} className="mx-auto max-w-5xl">
      <motion.div variants={fadeUp}>
        <AppPageHeader
          title="History"
          subtitle="Review your past submissions and feedback"
        />
      </motion.div>

      <div className="mb-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
        <motion.div variants={fadeUp}>
          <StatCard label="Total Submissions" value="4" hint="" valueClassName="text-gray-900" />
        </motion.div>
        <motion.div variants={fadeUp}>
          <StatCard label="Average Score" value="66" hint="" valueClassName="text-gray-900" />
        </motion.div>
        <motion.div variants={fadeUp}>
          <StatCard label="Best Score" value="75" hint="" valueClassName="text-brand-navy" />
        </motion.div>
        <motion.div variants={fadeUp}>
          <StatCard label="Improvement" value="+20" hint="" valueClassName="text-green-600" />
        </motion.div>
      </div>

      <GlassCard className="overflow-hidden p-0" animate>
        <div className="border-b border-gray-100 px-6 py-4">
          <h2 className="font-display text-xl font-bold text-gray-900">Previous Submissions</h2>
        </div>
        <div className="divide-y divide-gray-100">
          {HISTORY_ENTRIES.map((entry) => {
            const Icon = taskIcons[entry.task as keyof typeof taskIcons] ?? Mail;
            return (
              <div key={entry.id} className="p-5 sm:p-6">
                <div className="flex flex-col gap-4 sm:flex-row">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-brand-navy">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <p className="flex flex-wrap items-center gap-2 font-semibold text-gray-900">
                          {entry.task}
                          <span className="rounded-full bg-blue-50 px-2 py-0.5 text-xs font-semibold text-brand-navy">
                            {entry.level}
                          </span>
                        </p>
                        <p className="mt-1 text-xs text-gray-500">{entry.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-display text-3xl font-bold text-brand-navy">{entry.score}</p>
                        <p className="text-xs text-gray-500">Score</p>
                      </div>
                    </div>
                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      <div className="rounded-lg border border-green-100 bg-green-50/60 px-3 py-3">
                        <p className="text-xs font-semibold uppercase text-green-700">Strength</p>
                        <p className="mt-1 text-sm text-gray-700">{entry.strength}</p>
                      </div>
                      <div className="rounded-lg border border-amber-100 bg-amber-50/60 px-3 py-3">
                        <p className="text-xs font-semibold uppercase text-amber-800">Improve</p>
                        <p className="mt-1 text-sm text-gray-700">{entry.improve}</p>
                      </div>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <Link href="/app/feedback" className="btn-secondary-gray px-4 py-2 text-sm">
                        <BookOpen className="h-3.5 w-3.5" aria-hidden />
                        View feedback
                      </Link>
                      <Link href="/practice" className="btn-secondary-gray px-4 py-2 text-sm">
                        <RotateCcw className="h-3.5 w-3.5" aria-hidden />
                        Retry task
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </GlassCard>
    </motion.div>
  );
}
