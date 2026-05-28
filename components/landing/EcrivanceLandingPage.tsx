"use client";

import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Check,
  CheckCircle2,
  Clock,
  Edit3,
  FileText,
  Lock,
  Target,
  TrendingUp,
  Zap
} from "lucide-react";
import { motion } from "motion/react";
import EcrivanceLogo from "../brand/EcrivanceLogo";
import {
  easeOut,
  fadeIn,
  fadeInLeft,
  fadeInRight,
  fadeUp,
  scrollViewport,
  stagger
} from "../../lib/landing-motion";
import { useMobileReducedMotion } from "../../lib/use-mobile-reduced-motion";
import { LandingShareChat } from "./LandingShareChat";
import { ProgressChart } from "./ProgressChart";
import { ScoreBar } from "./ScoreBar";

function GlassCard({
  children,
  className = ""
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      className={`rounded-2xl border border-white/80 bg-white/70 p-5 shadow-card backdrop-blur-md md:p-6 ${className}`}
    >
      {children}
    </motion.div>
  );
}

function SectionHeading({
  title,
  subtitle
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <motion.div
      className="mx-auto mb-8 max-w-2xl text-center md:mb-12"
      initial="hidden"
      whileInView="show"
      viewport={scrollViewport}
      variants={stagger(0.1)}
    >
      <motion.h2
        variants={fadeUp}
        className="font-display text-2xl font-bold text-gray-900 md:text-4xl"
      >
        {title}
      </motion.h2>
      {subtitle ? (
        <motion.p variants={fadeUp} className="mt-3 text-base leading-relaxed text-gray-500 md:text-lg">
          {subtitle}
        </motion.p>
      ) : null}
    </motion.div>
  );
}

function RevealGrid({
  children,
  className = ""
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={scrollViewport}
      variants={stagger(0.1)}
    >
      {children}
    </motion.div>
  );
}

export default function EcrivanceLandingPage() {
  const reduced = useMobileReducedMotion();

  return (
    <div className="lp-page min-h-screen overflow-x-hidden text-gray-900">
      <motion.header
        className="sticky top-0 z-50 border-b border-brand-navy/10 bg-white/80 backdrop-blur-md"
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: reduced ? 0.01 : 0.45, ease: easeOut }}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-6 sm:py-4">
          <Link href="/">
            <EcrivanceLogo height={22} />
          </Link>
          <nav className="hidden items-center gap-8 text-sm text-gray-500 md:flex">
            <a href="#how-it-works" className="transition hover:text-gray-900">
              How it works
            </a>
            <a href="#feedback" className="transition hover:text-gray-900">
              Feedback
            </a>
            <a href="#pricing" className="transition hover:text-gray-900">
              Pricing
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <Link
              href="/signin"
              className="hidden text-sm text-gray-500 transition hover:text-gray-900 sm:inline"
            >
              Sign in
            </Link>
            <Link href="/onboarding" className="btn-primary-sm">
              Start free
            </Link>
          </div>
        </div>
      </motion.header>

      {/* Hero */}
      <section className="relative px-5 pb-12 pt-8 sm:px-6 md:pb-16 md:pt-20">
        <motion.div
          className="lp-orb lp-orb-a"
          aria-hidden
          animate={
            reduced
              ? undefined
              : { scale: [1, 1.08, 1], y: [0, -20, 0] }
          }
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="lp-orb lp-orb-b"
          aria-hidden
          animate={
            reduced
              ? undefined
              : { scale: [1, 1.12, 1], y: [0, 20, 0] }
          }
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />

        <div className="relative z-10 mx-auto max-w-6xl">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial="hidden"
            animate="show"
            variants={stagger(0.1)}
          >
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-brand-navy"
            >
              <Zap className="h-3.5 w-3.5" aria-hidden />
              AI feedback in under 30 seconds
            </motion.span>
            <motion.h1
              variants={fadeUp}
              className="mt-5 font-display text-3xl font-bold leading-tight text-gray-900 sm:text-5xl md:mt-6 md:text-6xl"
            >
              TCF Canada Writing,
              <br />
              <motion.span
                className="inline-block text-brand-navy"
                animate={reduced ? undefined : { opacity: [0.75, 1, 0.75] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                for your Express Entry.
              </motion.span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-gray-500 md:mt-5 md:text-lg"
            >
              Practice Tasks 1, 2, and 3 in real exam conditions with AI feedback aligned
              to TCF Canada scoring criteria.
            </motion.p>
            <motion.div
              variants={fadeUp}
              className="mt-6 flex flex-col items-center gap-2 md:mt-8"
            >
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Link href="/onboarding" className="btn-primary">
                  Try Demo Task
                  <motion.span
                    animate={reduced ? undefined : { x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="inline-flex"
                  >
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </motion.span>
                </Link>
              </motion.div>
              <span className="text-sm text-gray-400">No signup required</span>
            </motion.div>
          </motion.div>

          <RevealGrid className="mx-auto mt-10 grid max-w-4xl gap-4 md:mt-14 md:grid-cols-3 md:gap-5">
            <GlassCard>
              <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
                Your Results
              </p>
              <motion.p
                className="mt-2 font-display text-4xl font-bold text-brand-navy"
                initial={{ scale: 0.85, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={scrollViewport}
                transition={{ delay: 0.4, duration: 0.5, ease: easeOut }}
              >
                B2
              </motion.p>
              <p className="text-sm text-gray-400">NCLC Level 8–9</p>
              <div className="mt-5 space-y-3">
                <ScoreBar label="Overall" value={78} delay={0.1} />
                <ScoreBar label="Grammar" value={82} color="#22c55e" delay={0.2} />
                <ScoreBar label="Vocabulary" value={75} color="#5266c5" delay={0.3} />
                <ScoreBar label="Coherence" value={76} color="#5266c5" delay={0.4} />
              </div>
            </GlassCard>
            <GlassCard className="md:col-span-2">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
                  Score Progress
                </p>
                <span className="text-xs text-gray-400">6 weeks</span>
              </div>
              <ProgressChart height={150} />
              <motion.div
                className="mt-4 grid grid-cols-3 gap-3 border-t border-gray-100 pt-4 text-center"
                initial="hidden"
                whileInView="show"
                viewport={scrollViewport}
                variants={stagger(0.08, 0.5)}
              >
                {[
                  { value: "82", label: "Current", className: "text-gray-900" },
                  { value: "+27", label: "Gained", className: "text-green-500" },
                  { value: "12", label: "Sessions", className: "text-gray-900" }
                ].map((stat) => (
                  <motion.div key={stat.label} variants={fadeUp}>
                    <p className={`text-xl font-bold ${stat.className}`}>{stat.value}</p>
                    <p className="text-xs text-gray-400">{stat.label}</p>
                  </motion.div>
                ))}
              </motion.div>
            </GlassCard>
          </RevealGrid>

          <motion.div
            className="mt-10 flex flex-wrap justify-center gap-6 text-center md:mt-14 md:gap-16"
            initial="hidden"
            whileInView="show"
            viewport={scrollViewport}
            variants={stagger(0.1, 0.2)}
          >
            {[
              { value: "800+", label: "Practice sessions" },
              { value: "< 30s", label: "AI feedback speed" },
              { value: "Task 1–3", label: "Full TCF coverage" },
              { value: "NCLC", label: "Official scoring scale" }
            ].map((stat) => (
              <motion.div key={stat.label} variants={fadeUp}>
                <p className="font-display text-2xl font-bold text-gray-900">{stat.value}</p>
                <p className="mt-0.5 text-sm text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pain points */}
      <section className="px-5 py-14 sm:px-6 md:py-20">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            title="Preparing can feel overwhelming."
            subtitle="Most candidates face the same four blockers."
          />
          <RevealGrid className="grid gap-4 md:grid-cols-2">
            {[
              {
                icon: Target,
                title: "You don't know your real level",
                body: "Without regular feedback, it's hard to know if you're ready for exam day."
              },
              {
                icon: Clock,
                title: "Teacher feedback is slow and costly",
                body: "Waiting days for corrections and paying high fees blocks consistent practice."
              },
              {
                icon: FileText,
                title: "Generic apps don't match TCF format",
                body: "Most language apps aren't built around TCF Canada's specific structure."
              },
              {
                icon: TrendingUp,
                title: "You don't know what to fix next",
                body: "Without clear guidance, you waste time on areas that won't move your score."
              }
            ].map(({ icon: Icon, title, body }) => (
              <GlassCard key={title} className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-brand-navy">
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-gray-500">{body}</p>
                </div>
              </GlassCard>
            ))}
          </RevealGrid>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="px-5 py-14 sm:px-6 md:py-20">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            title="How Écrivance Works"
            subtitle="Four steps from opening the app to knowing your NCLC level."
          />
          <RevealGrid className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                n: "1",
                title: "Choose a Task",
                body: "Select Task 1, 2, or 3 based on what you want to practise."
              },
              {
                n: "2",
                title: "Write under real timing",
                body: "Same time limits as the actual TCF Canada exam."
              },
              {
                n: "3",
                title: "Get AI feedback",
                body: "NCLC score and detailed breakdown in under 30 seconds."
              },
              {
                n: "4",
                title: "Track improvement",
                body: "See your score history and know you are ready."
              }
            ].map(({ n, title, body }) => (
              <GlassCard key={n} className="text-center">
                <motion.div
                  className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-brand-navy text-sm font-bold text-white"
                  animate={
                    reduced
                      ? undefined
                      : {
                          boxShadow: [
                            "0 0 0px rgba(0,35,149,0)",
                            "0 0 16px rgba(0,35,149,0.35)",
                            "0 0 0px rgba(0,35,149,0)"
                          ]
                        }
                  }
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: Number(n) * 0.4
                  }}
                >
                  {n}
                </motion.div>
                <h3 className="font-semibold text-gray-800">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">{body}</p>
              </GlassCard>
            ))}
          </RevealGrid>
        </div>
      </section>

      {/* Feedback */}
      <section id="feedback" className="px-5 py-14 sm:px-6 md:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={scrollViewport}
            variants={fadeInLeft}
          >
            <h2 className="font-display text-3xl font-bold text-gray-900 md:text-4xl">
              Clear, actionable feedback
              <br />
              you can use immediately.
            </h2>
            <p className="mt-4 leading-relaxed text-gray-500">
              No generic comments. No overwhelming corrections. Just a score, a breakdown,
              and one clear next step.
            </p>
            <motion.ul
              className="mt-8 space-y-5"
              variants={stagger(0.12)}
              initial="hidden"
              whileInView="show"
              viewport={scrollViewport}
            >
              {[
                {
                  icon: CheckCircle2,
                  label: "Estimated NCLC Level",
                  sub: "Know exactly where you stand for Express Entry."
                },
                {
                  icon: BarChart3,
                  label: "Breakdown by Category",
                  sub: "Grammar, vocabulary, and coherence scored separately."
                },
                {
                  icon: TrendingUp,
                  label: "Specific Next Steps",
                  sub: "One clear action to focus on for your next session."
                }
              ].map(({ icon: Icon, label, sub }) => (
                <motion.li key={label} variants={fadeUp} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-brand-navy">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">{label}</p>
                    <p className="mt-0.5 text-sm text-gray-500">{sub}</p>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={scrollViewport}
            variants={fadeInRight}
          >
            <GlassCard className="p-5 md:p-8">
              <span className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-semibold text-brand-navy">
                Task 2 — Article
              </span>
              <motion.p
                className="mt-5 font-display text-4xl font-bold text-brand-navy md:mt-6 md:text-5xl"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={scrollViewport}
                transition={{ delay: 0.2, duration: 0.5, ease: easeOut }}
              >
                B2
              </motion.p>
              <p className="text-sm text-gray-400">NCLC 8–9</p>
              <div className="mt-6 space-y-4">
                <ScoreBar label="Overall Score" value={78} delay={0.2} />
                <ScoreBar label="Grammar" value={82} color="#22c55e" delay={0.3} />
                <ScoreBar label="Vocabulary" value={75} color="#5266c5" delay={0.4} />
                <ScoreBar label="Coherence" value={76} color="#5266c5" delay={0.5} />
              </div>
              <motion.div
                className="mt-5 rounded-xl border-l-[3px] border-violet-500 bg-violet-50 p-4"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={scrollViewport}
                transition={{ delay: 0.55, duration: 0.4 }}
              >
                <p className="text-sm font-semibold text-gray-800">Next step</p>
                <p className="mt-1 text-sm text-gray-600">
                  Use transition words like &quot;cependant&quot; and &quot;pourtant&quot; to improve
                  coherence and reach B2+.
                </p>
              </motion.div>
              <div className="mt-5 border-t border-gray-100 pt-5">
                <p className="text-sm font-medium text-gray-700">Strengths</p>
                <motion.ul
                  className="mt-3 space-y-2"
                  variants={stagger(0.08)}
                  initial="hidden"
                  whileInView="show"
                  viewport={scrollViewport}
                >
                  {[
                    "Strong verb conjugation throughout",
                    "Good variety of sentence structures"
                  ].map((item) => (
                    <motion.li
                      key={item}
                      variants={fadeIn}
                      className="flex items-start gap-2 text-sm text-gray-600"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-500" aria-hidden />
                      {item}
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* Tasks */}
      <section className="px-5 py-14 sm:px-6 md:py-20">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            title="Practice All 3 TCF Writing Tasks"
            subtitle="Each task tests different writing skills. Practise all three to be fully prepared."
          />
          <RevealGrid className="grid gap-5 md:grid-cols-3">
            {[
              {
                icon: Edit3,
                tag: "TASK 1",
                title: "Email",
                range: "150–200 words",
                desc: "Write a personal or professional email responding to a specific situation.",
                example: "Write to a friend about changing your vacation plans."
              },
              {
                icon: FileText,
                tag: "TASK 2",
                title: "Article",
                range: "200–250 words",
                desc: "Write an informative article or report for a publication or organisation.",
                example: "Write an article about the benefits of public transportation."
              },
              {
                icon: BookOpen,
                tag: "TASK 3",
                title: "Opinion Essay",
                range: "300+ words",
                desc: "Develop and defend your viewpoint on a topic with clear arguments.",
                example: "Should cities ban cars from downtown areas?"
              }
            ].map(({ icon: Icon, tag, title, range, desc, example }) => {
              const locked = tag !== "TASK 1";

              return (
                <GlassCard key={tag} className="flex flex-col">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-brand-navy">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-brand-navy">
                    {tag}
                  </p>
                  <h3 className="mt-1 font-display text-xl font-bold text-gray-900">{title}</h3>
                  <p className="text-sm text-gray-400">{range}</p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-600">{desc}</p>
                  <p className="mt-4 rounded-xl bg-blue-50 p-3 text-sm text-gray-600">
                    <span className="font-medium text-gray-700">Example: </span>
                    {example}
                  </p>
                  <motion.div
                    className="mt-5"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      href={locked ? "/signin" : "/onboarding"}
                      className="btn-primary w-full text-center"
                    >
                      {locked ? <Lock className="h-4 w-4" aria-hidden /> : null}
                      Try {tag}
                    </Link>
                  </motion.div>
                </GlassCard>
              );
            })}
          </RevealGrid>
        </div>
      </section>

      {/* Progress */}
      <section className="px-5 py-14 sm:px-6 md:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={scrollViewport}
            variants={fadeInLeft}
          >
            <h2 className="font-display text-3xl font-bold text-gray-900 md:text-4xl">
              Watch your scores improve
              <br />
              week by week.
            </h2>
            <p className="mt-4 leading-relaxed text-gray-500">
              Track progress over time and see what consistent practice achieves. Know you
              are ready before exam day.
            </p>
            <motion.div
              className="mt-8 space-y-3"
              variants={stagger(0.1)}
              initial="hidden"
              whileInView="show"
              viewport={scrollViewport}
            >
              {[
                {
                  icon: TrendingUp,
                  label: "Score History",
                  sub: "All past results in one place"
                },
                {
                  icon: Target,
                  label: "Target Score Tracking",
                  sub: "Set your goal and monitor progress"
                },
                {
                  icon: BarChart3,
                  label: "Weekly Practice Streak",
                  sub: "Build consistency with regular practice"
                }
              ].map(({ icon: Icon, label, sub }) => (
                <motion.div key={label} variants={fadeUp}>
                  <GlassCard className="flex items-center gap-4 p-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-brand-navy">
                      <Icon className="h-4 w-4" aria-hidden />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-800">{label}</p>
                      <p className="text-xs text-gray-400">{sub}</p>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={scrollViewport}
            variants={fadeInRight}
          >
            <GlassCard className="p-5 md:p-7">
              <div className="mb-5 flex items-center justify-between">
                <h3 className="font-semibold text-gray-800">Your Progress</h3>
                <span className="text-xs text-gray-400">6 weeks</span>
              </div>
              <ProgressChart height={220} />
              <motion.div
                className="mt-4 grid grid-cols-3 gap-4 border-t border-gray-100 pt-4 text-center"
                variants={stagger(0.1, 0.4)}
                initial="hidden"
                whileInView="show"
                viewport={scrollViewport}
              >
                {[
                  { value: "82", label: "Current Score", className: "text-gray-900" },
                  { value: "+27", label: "Improvement", className: "text-green-500" },
                  { value: "12", label: "Sessions", className: "text-gray-900" }
                ].map((stat) => (
                  <motion.div key={stat.label} variants={fadeUp}>
                    <p className={`text-xl font-bold ${stat.className}`}>{stat.value}</p>
                    <p className="text-xs text-gray-400">{stat.label}</p>
                  </motion.div>
                ))}
              </motion.div>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* Built around TCF */}
      <section className="px-5 py-14 sm:px-6 md:py-20">
        <div className="mx-auto max-w-5xl">
          <motion.div
            className="rounded-2xl bg-gradient-to-br from-brand-navy to-[#5266c5] p-6 text-center text-white md:p-12"
            initial={{ opacity: 0, y: 36, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={scrollViewport}
            transition={{ duration: 0.65, ease: easeOut }}
          >
            <h2 className="font-display text-3xl font-bold md:text-4xl">
              Built around the real TCF Canada exam.
            </h2>
            <motion.div
              className="mt-8 grid gap-4 text-left md:mt-10 md:grid-cols-3 md:gap-6"
              variants={stagger(0.14)}
              initial="hidden"
              whileInView="show"
              viewport={scrollViewport}
            >
              {[
                {
                  icon: CheckCircle2,
                  title: "3 Writing Tasks",
                  body: "All three official TCF Canada tasks, structured exactly as on the exam."
                },
                {
                  icon: Clock,
                  title: "Real Exam Timing",
                  body: "Practise with the same 60-minute limit to build pacing and confidence."
                },
                {
                  icon: Target,
                  title: "NCLC-Based Scores",
                  body: "Scores that map to Canadian Language Benchmarks used for Express Entry."
                }
              ].map(({ icon: Icon, title, body }) => (
                <motion.div
                  key={title}
                  variants={fadeUp}
                  className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm"
                >
                  <Icon className="mb-3 h-8 w-8 opacity-90" aria-hidden />
                  <h3 className="font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-blue-100">{body}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section id="pricing" className="px-5 py-16 text-center sm:px-6 md:py-24">
        <motion.div
          className="mx-auto max-w-xl"
          initial="hidden"
          whileInView="show"
          viewport={scrollViewport}
          variants={stagger(0.12)}
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-brand-navy"
          >
            No credit card required
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="mt-5 font-display text-3xl font-bold text-gray-900 md:mt-6 md:text-4xl"
          >
            Start your first practice
            <br />
            in under 3 minutes.
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-gray-500">
            Join hundreds of TCF Canada candidates preparing for Express Entry.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8">
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link href="/onboarding" className="btn-primary inline-flex">
                Try Demo Task
                <motion.span
                  animate={reduced ? undefined : { x: [0, 5, 0] }}
                  transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
                  className="inline-flex"
                >
                  <ArrowRight className="h-5 w-5" aria-hidden />
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <motion.footer
        className="border-t border-gray-100 px-5 py-10 sm:px-6 md:py-12"
        initial="hidden"
        whileInView="show"
        viewport={scrollViewport}
        variants={fadeIn}
      >
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-4">
          <div>
            <EcrivanceLogo height={20} />
            <p className="mt-3 text-sm text-gray-400">
              TCF Canada Writing practice with instant AI feedback.
            </p>
          </div>
          {[
            { heading: "Product", links: ["How it works", "Pricing", "FAQ"] },
            { heading: "Resources", links: ["TCF Canada Guide", "Express Entry", "Blog"] },
            { heading: "Company", links: ["About", "Contact", "Privacy"] }
          ].map(({ heading, links }) => (
            <div key={heading}>
              <h4 className="text-sm font-semibold text-gray-700">{heading}</h4>
              <ul className="mt-3 space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-gray-400 transition hover:text-gray-700">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-6xl border-t border-gray-100 pt-6 text-center text-xs text-gray-400">
          © 2026 Écrivance. All rights reserved.
        </p>
      </motion.footer>

      <LandingShareChat />
    </div>
  );
}
