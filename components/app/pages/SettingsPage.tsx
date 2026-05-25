"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  LANGUAGE_OPTIONS,
  LEVEL_OPTIONS,
  NCLC_OPTIONS
} from "../../../lib/app-demo-data";
import { fadeUp, stagger } from "../../../lib/landing-motion";
import { AppPageHeader } from "../AppPageHeader";
import { GlassCard } from "../GlassCard";

const goals = [
  { id: "express", label: "Express Entry", sub: "NCLC 7+" },
  { id: "citizenship", label: "Citizenship", sub: "NCLC 4+" },
  { id: "work", label: "Work permit", sub: "NCLC 5+" },
  { id: "general", label: "General improvement", sub: "Any level" }
] as const;

export function SettingsPage() {
  const [goal, setGoal] = useState("express");
  const [notifications, setNotifications] = useState({
    practice: true,
    weekly: true,
    tips: false
  });

  return (
    <motion.div initial="hidden" animate="show" variants={stagger(0.06)} className="mx-auto max-w-3xl">
      <motion.div variants={fadeUp}>
        <AppPageHeader title="Settings" subtitle="Customize your study preferences and account" />
      </motion.div>

      <GlassCard className="mb-6 p-6" animate>
        <h2 className="font-display text-xl font-bold text-gray-900">Study Preferences</h2>
        <p className="mt-1 text-sm text-gray-600">Your goal and exam timeline</p>

        <p className="mt-6 text-sm font-medium text-gray-700">Primary goal</p>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {goals.map((g) => (
            <button
              key={g.id}
              type="button"
              onClick={() => setGoal(g.id)}
              className={`rounded-xl border p-4 text-left transition ${
                goal === g.id
                  ? "border-brand-navy bg-blue-50/80 ring-1 ring-brand-navy/30"
                  : "border-gray-200 bg-white hover:border-gray-300"
              }`}
            >
              <p className="font-semibold text-gray-900">{g.label}</p>
              <p className="mt-1 text-xs text-gray-500">{g.sub}</p>
            </button>
          ))}
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Target NCLC</span>
            <select className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none focus:border-brand-navy focus:ring-2 focus:ring-brand-navy/20">
              {NCLC_OPTIONS.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
          </label>
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Exam date (optional)</span>
            <input
              type="date"
              className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none focus:border-brand-navy focus:ring-2 focus:ring-brand-navy/20"
            />
          </label>
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Current level</span>
            <select
              defaultValue={LEVEL_OPTIONS[1]}
              className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none focus:border-brand-navy focus:ring-2 focus:ring-brand-navy/20"
            >
              {LEVEL_OPTIONS.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
          </label>
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Feedback language</span>
            <select
              defaultValue="English"
              className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none focus:border-brand-navy focus:ring-2 focus:ring-brand-navy/20"
            >
              {LANGUAGE_OPTIONS.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
          </label>
        </div>
      </GlassCard>

      <GlassCard className="mb-6 p-6" animate>
        <h2 className="font-display text-xl font-bold text-gray-900">Account</h2>
        <div className="mt-6 space-y-4">
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Full name</span>
            <input
              type="text"
              defaultValue="Michael Chen"
              className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-brand-navy focus:ring-2 focus:ring-brand-navy/20"
            />
          </label>
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Email</span>
            <input
              type="email"
              defaultValue="michael@example.com"
              className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-brand-navy focus:ring-2 focus:ring-brand-navy/20"
            />
          </label>
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Password</span>
            <input
              type="password"
              placeholder="••••••••"
              className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-brand-navy focus:ring-2 focus:ring-brand-navy/20"
            />
          </label>
        </div>
      </GlassCard>

      <GlassCard className="mb-6 p-6" animate>
        <h2 className="font-display text-xl font-bold text-gray-900">Notifications</h2>
        <div className="mt-4 space-y-4">
          {(
            [
              ["practice", "Practice reminders", "Get reminded to practice daily"],
              ["weekly", "Weekly progress report", "Summary of your improvement"],
              ["tips", "Study tips & updates", "French writing tips and product news"]
            ] as const
          ).map(([key, title, sub]) => (
            <label
              key={key}
              className="flex cursor-pointer items-start justify-between gap-4 rounded-xl border border-gray-100 p-4"
            >
              <div>
                <p className="text-sm font-medium text-gray-900">{title}</p>
                <p className="mt-1 text-xs text-gray-500">{sub}</p>
              </div>
              <input
                type="checkbox"
                checked={notifications[key]}
                onChange={(e) =>
                  setNotifications((n) => ({ ...n, [key]: e.target.checked }))
                }
                className="mt-1 h-5 w-5 rounded border-gray-300 text-brand-navy focus:ring-brand-navy"
              />
            </label>
          ))}
        </div>
      </GlassCard>

      <div className="mb-8 flex justify-end">
        <button type="button" className="btn-primary px-8">
          Save changes
        </button>
      </div>

      <GlassCard className="border-red-100 p-6" animate>
        <h2 className="font-display text-xl font-bold text-red-700">Danger Zone</h2>
        <p className="mt-2 text-sm text-gray-600">
          Permanently delete your account and all practice history.
        </p>
        <button
          type="button"
          className="mt-4 rounded-xl border border-red-200 bg-red-50 px-5 py-2.5 text-sm font-semibold text-red-700 transition hover:bg-red-100"
        >
          Delete account
        </button>
      </GlassCard>
    </motion.div>
  );
}
