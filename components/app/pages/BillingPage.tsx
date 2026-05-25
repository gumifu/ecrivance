"use client";

import { Check, CreditCard } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { fadeUp, stagger } from "../../../lib/landing-motion";
import { AppPageHeader } from "../AppPageHeader";
import { GlassCard } from "../GlassCard";

const plans = [
  {
    name: "Pro",
    price: "$19",
    period: "/month",
    features: [
      "Unlimited practice sessions",
      "Full AI feedback",
      "Score history & analytics",
      "Priority support"
    ],
    cta: "Upgrade to Pro",
    highlight: true
  },
  {
    name: "Premium",
    price: "$39",
    period: "/month",
    features: [
      "Everything in Pro",
      "Full exam simulations",
      "Personalized study path",
      "1-on-1 coaching session"
    ],
    cta: "Upgrade to Premium",
    highlight: false
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

      <div className="mb-8 grid gap-6 md:grid-cols-2">
        {plans.map((plan) => (
          <GlassCard
            key={plan.name}
            className={`flex flex-col p-6 ${plan.highlight ? "ring-2 ring-brand-navy/20" : ""}`}
            animate
          >
            {plan.highlight ? (
              <span className="mb-3 w-fit rounded-full bg-amber-100 px-2.5 py-1 text-xs font-semibold text-amber-900">
                Most popular
              </span>
            ) : null}
            <p className="font-display text-xl font-bold text-gray-900">{plan.name}</p>
            <p className="mt-2">
              <span className="font-display text-4xl font-bold text-brand-navy">{plan.price}</span>
              <span className="text-gray-500">{plan.period}</span>
            </p>
            <ul className="mt-6 flex-1 space-y-3">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-600" aria-hidden />
                  {f}
                </li>
              ))}
            </ul>
            <Link
              href="/signup"
              className={`mt-6 w-full text-center ${plan.highlight ? "btn-primary" : "btn-secondary-gray"} py-3 text-sm`}
            >
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
