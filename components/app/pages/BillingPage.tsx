"use client";

import { CreditCard } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { fadeUp, stagger } from "../../../lib/landing-motion";
import { AppPageHeader } from "../AppPageHeader";
import { GlassCard } from "../GlassCard";

const plans = [
  {
    name: "TCF Sprint",
    price: "$7.00 CAD",
    description: "2 weeks of access. Ideal for candidates 1–2 weeks before the exam.",
    note: "Cancel anytime. AI feedback included.",
    cta: "Switch next renewal",
    badge: null,
    highlight: false,
    current: false,
    tone: "mint"
  },
  {
    name: "Essential Prep",
    price: "$12.99 CAD",
    description: "1 month of access. Ideal for most candidates preparing over 1 month.",
    note: "No charge today. Your current plan stays active until renewal.",
    cta: "Switch next renewal",
    badge: "Most popular",
    highlight: true,
    current: false,
    tone: "amber"
  },
  {
    name: "Complete Prep",
    price: "$27.00 CAD",
    description: "3 months of access. Equivalent to $9/mo - save $11.97 vs monthly.",
    note: "No charge today. Your current plan stays active until renewal.",
    cta: "Switch next renewal",
    badge: null,
    highlight: false,
    current: false,
    tone: "white"
  }
] as const;

const payments = [
  { date: "2026-04-01", amount: "$0.00", status: "Free plan" },
  { date: "2026-03-01", amount: "$0.00", status: "Free plan" }
] as const;

export function BillingPage() {
  return (
    <motion.div initial="hidden" animate="show" variants={stagger(0.06)} className="mx-auto max-w-5xl">
      <motion.div variants={fadeUp}>
        <AppPageHeader title="Billing" subtitle="Manage your plan and payment details" />
      </motion.div>

      <GlassCard className="mb-8 p-6" animate>
        <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">Current Plan</p>
        <div className="mt-3 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="font-display text-2xl font-bold text-gray-900">Free</p>
            <p className="mt-1 text-sm text-gray-600">3 practice credits per month · Basic feedback</p>
          </div>
          <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-brand-navy">
            Active
          </span>
        </div>
      </GlassCard>

      <div className="mb-8 grid items-stretch gap-5 lg:grid-cols-3">
        {plans.map((plan) => (
          <GlassCard
            key={plan.name}
            className={`flex h-full min-h-[295px] flex-col p-5 md:p-6 ${
              plan.highlight ? "bg-amber-50/60 ring-2 ring-amber-200/70" : ""
            } ${plan.tone === "mint" ? "bg-emerald-50/55" : ""}`}
            animate
          >
            <div className="mb-3 flex items-start justify-between gap-3">
              <p className="font-display text-xl font-bold leading-tight text-gray-900 md:text-2xl">
                {plan.name}
              </p>
              {plan.badge ? (
                <span
                  className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold shadow-sm ${
                    plan.current
                      ? "bg-brand-navy text-white"
                      : "bg-brand-navy px-3.5 py-1.5 text-white ring-2 ring-brand-navy/10"
                  }`}
                >
                  {plan.badge}
                </span>
              ) : null}
            </div>

            <p className="font-display text-3xl font-bold text-gray-950">{plan.price}</p>
            <p className="mt-3 text-sm leading-relaxed text-gray-600">{plan.description}</p>
            <p className="mt-5 flex-1 text-sm leading-relaxed text-gray-700">{plan.note}</p>

            <Link href="/signup" className="btn-primary mt-6 w-full px-4 py-3 text-center text-sm">
              {plan.cta}
            </Link>
          </GlassCard>
        ))}
      </div>

      <GlassCard className="mb-8 p-6" animate>
        <div className="flex items-center gap-2">
          <CreditCard className="h-4 w-4 text-brand-navy" aria-hidden />
          <h2 className="font-display text-xl font-bold text-gray-900">Payment Method</h2>
        </div>
        <p className="mt-4 text-sm text-gray-600">No payment method on file.</p>
        <button type="button" className="btn-secondary-gray mt-4 px-5 py-2.5 text-sm">
          Add payment method
        </button>
      </GlassCard>

      <GlassCard className="overflow-hidden p-0" animate>
        <div className="border-b border-gray-100 px-6 py-4">
          <h2 className="font-display text-xl font-bold text-gray-900">Payment History</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[320px] text-left text-sm">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50/50 text-xs uppercase text-gray-500">
                <th className="px-6 py-3 font-semibold">Date</th>
                <th className="px-6 py-3 font-semibold">Amount</th>
                <th className="px-6 py-3 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((row) => (
                <tr key={row.date} className="border-b border-gray-100 last:border-0">
                  <td className="px-6 py-4 text-gray-700">{row.date}</td>
                  <td className="px-6 py-4 text-gray-700">{row.amount}</td>
                  <td className="px-6 py-4 text-gray-600">{row.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </GlassCard>
    </motion.div>
  );
}
