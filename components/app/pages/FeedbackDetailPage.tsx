"use client";

import Link from "next/link";
import { useState } from "react";
import {
  AlertTriangle,
  ArrowLeft,
  CheckCircle2,
  FileCheck2,
  Flag,
  Lightbulb,
  LineChart,
  Repeat2,
  Star,
  Target
} from "lucide-react";
import { motion } from "motion/react";
import {
  FEEDBACK_SCORES,
  FULL_WRITING_CORRECTIONS,
  LOCKED_ANALYSIS_ITEMS
} from "../../../lib/feedback-demo";
import { fadeUp, stagger } from "../../../lib/landing-motion";
import { FeedbackScoreBar } from "../../flow/FeedbackScoreBar";
import { GlassCard } from "../GlassCard";

const fullAnalysisDetails = [
  {
    icon: FileCheck2,
    title: "Grammar correction",
    body: "Most issues are related to register and verb form consistency. Your message is understandable, but several phrases need a more formal email style."
  },
  {
    icon: Lightbulb,
    title: "Vocabulary improvement",
    body: "Use more precise administrative vocabulary such as emploi du temps, modifier, convenir, and par avance to sound more natural."
  },
  {
    icon: Target,
    title: "Personalised study recommendation",
    body: "Next practice should focus on Task 2 coherence. Add connectors like cependant, donc, en revanche, and par conséquent."
  }
] as const;

type FeedbackTab = "overview" | "resume" | "errors" | "vocab" | "analysis" | "rewrite";

const feedbackTabs: { id: FeedbackTab; label: string }[] = [
  { id: "overview", label: "Overview" },
  { id: "resume", label: "Summary" },
  { id: "errors", label: "Errors" },
  { id: "vocab", label: "Vocabulary" },
  { id: "analysis", label: "Analysis" },
  { id: "rewrite", label: "C1 Rewrite" }
];

const sampleText = `Bonjour,

Je m'appelle Fumi. Je viens du Japon et j'habite à Vancouver au Canada.
Je suis étudiant en design.

Mon niveau de français est débutant. Je peux comprendre un peu, mais je ne parle pas bien.

Je veux pratiquer le français parce que j'aime les langues et je veux voyager dans les pays francophones.
Je voudrais améliorer ma communication.

Merci beaucoup et à bientôt !`;

export function FeedbackDetailPage() {
  const [activeTab, setActiveTab] = useState<FeedbackTab>("overview");

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={stagger(0.08)}
      className="mx-auto w-full max-w-3xl pb-8"
    >
      <motion.div variants={fadeUp} className="mb-6">
        <Link
          href="/app"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition hover:text-brand-navy"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden />
          Back to practice
        </Link>
      </motion.div>

      <motion.div variants={fadeUp} className="flex justify-center">
        <span className="rounded-full bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-navy">
          Task 1 — Email
        </span>
      </motion.div>

      <motion.p
        variants={fadeUp}
        className="mt-6 text-center font-display text-5xl font-bold text-brand-navy md:text-6xl"
      >
        B1+
      </motion.p>
      <motion.p variants={fadeUp} className="mt-2 text-center text-lg text-gray-600">
        Estimated NCLC 6–7
      </motion.p>

      <motion.div
        variants={fadeUp}
        className="mt-8 rounded-2xl border border-gray-200 bg-white/70 p-1 shadow-card backdrop-blur-md"
      >
        <div className="grid grid-cols-2 gap-1 sm:grid-cols-3 lg:grid-cols-6">
          {feedbackTabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`rounded-xl px-3 py-2 text-center text-sm font-semibold transition ${
                activeTab === tab.id
                  ? "bg-brand-navy text-white shadow-sm"
                  : "text-gray-500 hover:bg-blue-50 hover:text-brand-navy"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </motion.div>

      {activeTab === "overview" ? (
        <>
      <GlassCard className="mt-8 p-6" animate>
        <h2 className="font-display text-xl font-bold text-gray-900">Score Breakdown</h2>
        <div className="mt-6 space-y-5">
          {FEEDBACK_SCORES.map((score, index) => (
            <FeedbackScoreBar
              key={score.label}
              label={score.label}
              value={score.value}
              color={score.color}
              delay={0.15 + index * 0.12}
            />
          ))}
        </div>
      </GlassCard>

      <GlassCard className="mt-6 p-6" animate>
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="font-display text-xl font-bold text-gray-900">
              Writing Corrections
            </h2>
            <p className="mt-1 text-sm text-gray-500">14 of 14 corrections shown</p>
          </div>
          <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
            Fully unlocked
          </span>
        </div>
        <div className="mt-5 space-y-3">
          {FULL_WRITING_CORRECTIONS.map((item) => (
            <div key={item.id} className="rounded-xl border border-blue-100 bg-blue-50/60 p-4">
              <p className="text-sm text-gray-600">
                <span className="font-medium text-gray-500">Original</span>{" "}
                <span className="text-gray-400 line-through">&quot;{item.original}&quot;</span>
              </p>
              <p className="mt-2 text-sm text-gray-800">
                <span className="font-medium text-gray-500">Better</span>{" "}
                <span className="font-semibold text-brand-navy">&quot;{item.better}&quot;</span>
              </p>
              <p className="mt-2 text-xs text-gray-500">{item.note}</p>
            </div>
          ))}
        </div>
      </GlassCard>

      <GlassCard className="mt-6 p-6" animate>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="font-display text-xl font-bold text-gray-900">Full Analysis</h2>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
            <CheckCircle2 className="h-3.5 w-3.5" aria-hidden />
            Unlocked
          </span>
        </div>

        <ul className="mt-5 space-y-3">
          {LOCKED_ANALYSIS_ITEMS.map((item) => (
            <li
              key={item}
              className="flex items-center gap-3 rounded-lg border border-green-100 bg-green-50/50 px-3 py-3 text-sm text-gray-700"
            >
              <CheckCircle2 className="h-4 w-4 shrink-0 text-green-600" aria-hidden />
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-6 grid gap-4">
          {fullAnalysisDetails.map((detail) => {
            const Icon = detail.icon;
            return (
              <div
                key={detail.title}
                className="rounded-xl border border-gray-100 bg-white/70 p-4"
              >
                <div className="flex items-start gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-brand-navy">
                    <Icon className="h-4 w-4" aria-hidden />
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900">{detail.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-gray-600">
                      {detail.body}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </GlassCard>
        </>
      ) : null}

      {activeTab === "resume" ? <ResumeTab /> : null}
      {activeTab === "errors" ? <ErrorsTab /> : null}
      {activeTab === "vocab" ? <VocabTab /> : null}
      {activeTab === "analysis" ? <AnalysisTab /> : null}
      {activeTab === "rewrite" ? <RewriteTab /> : null}

      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        <Link href="/practice" className="btn-primary justify-center">
          <Repeat2 className="h-4 w-4" aria-hidden />
          Retry this task
        </Link>
        <Link href="/app/dashboard" className="btn-secondary-gray justify-center">
          <LineChart className="h-4 w-4" aria-hidden />
          View progress
        </Link>
      </div>
    </motion.div>
  );
}

function FeedbackPreviewShell({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <GlassCard className="mt-8 overflow-hidden p-0" animate>
      <div className="border-b border-white/80 bg-white/55 px-5 py-4 sm:px-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="font-display text-lg font-bold text-gray-900">
              Task 1 <span className="font-sans text-sm font-medium text-gray-500">01:14 · 67 words</span>
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-bold text-brand-navy shadow-sm">
              10<span className="text-xs text-gray-400"> /20</span>
            </span>
            <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-gray-700 shadow-sm">
              CEFR B2
            </span>
            <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-gray-700 shadow-sm">
              NCLC 7
            </span>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-[0.9fr_1.15fr]">
        <div className="border-b border-white/80 bg-white/35 p-5 md:border-b-0 md:border-r sm:p-6">
          <p className="text-xs font-bold uppercase tracking-wider text-gray-500">Your text</p>
          <pre className="mt-4 whitespace-pre-wrap rounded-2xl border border-white/80 bg-white/70 p-4 font-mono text-xs leading-relaxed text-gray-800 shadow-sm">
            {sampleText}
          </pre>
        </div>
        <div className="bg-white/30 p-5 sm:p-6">
          <h2 className="font-display text-xl font-bold text-gray-900">Analysis</h2>
          {children}
          <FeedbackRating />
        </div>
      </div>
    </GlassCard>
  );
}

function FeedbackRating() {
  return (
    <div className="mt-6 border-t border-gray-200 pt-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-gray-900">How do you find this analysis?</p>
          <div className="mt-2 flex gap-1 text-gray-400" aria-label="Rating">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5" aria-hidden />
            ))}
          </div>
        </div>
        <button
          type="button"
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm"
        >
          <Flag className="h-4 w-4" aria-hidden />
          Report an error
        </button>
      </div>
    </div>
  );
}

function ResumeTab() {
  return (
    <FeedbackPreviewShell>
      <div className="mt-5 rounded-2xl border border-white/80 bg-white/70 p-5 shadow-sm">
        <p className="text-sm leading-relaxed text-gray-700">
          Texte B2 solide. Bien structuré avec une formule d&apos;ouverture et de clôture.
          Quelques erreurs de grammaire et de vocabulaire, mais le message est
          compréhensible. La tâche est partiellement accomplie car les raisons de
          pratiquer le français manquent de détails.
        </p>
      </div>

      <div className="mt-5 rounded-2xl border border-blue-100 bg-blue-50/55 p-4">
        <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-navy">
          <AlertTriangle className="h-4 w-4" aria-hidden />
          À corriger en priorité
        </div>
        <CorrectionCard />
      </div>

      <div className="mt-5 space-y-4">
        {[
          ["Morphosyntaxe", 3],
          ["Compétence lexicale", 3],
          ["Cohérence et cohésion", 3],
          ["Recevabilité", 1]
        ].map(([label, score]) => (
          <MiniCriterion key={label} label={String(label)} score={Number(score)} />
        ))}
      </div>
    </FeedbackPreviewShell>
  );
}

function ErrorsTab() {
  return (
    <FeedbackPreviewShell>
      <div className="mt-5 rounded-2xl border border-white/80 bg-white/70 p-5 shadow-sm">
        <p className="mb-4 text-xs font-bold uppercase tracking-wider text-gray-500">
          Texte avec erreurs surlignées
        </p>
        <p className="whitespace-pre-wrap font-mono text-xs leading-loose text-gray-800">
          Bonjour,{"\n\n"}Je m&apos;appelle Fumi. Je viens du Japon et j&apos;habite à Vancouver au Canada.{"\n"}
          Je suis étudiant en design.{"\n\n"}Mon niveau de français est débutant. Je peux comprendre un peu, mais{" "}
          <span className="rounded bg-blue-100 px-1 font-bold text-brand-navy">je ne parle pas bien</span>.{"\n\n"}
          Je veux pratiquer le français parce que j&apos;aime les langues et je veux voyager dans les pays francophones.{"\n"}
          <span className="rounded bg-blue-100 px-1 font-bold text-brand-navy">Je voudrais améliorer ma communication</span>.
        </p>
      </div>
      <div className="mt-5 space-y-4">
        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-wider text-gray-700">Grave (1)</p>
          <CorrectionCard />
        </div>
        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-wider text-gray-700">Moyenne (1)</p>
          <CorrectionCard
            original="je ne parle pas bien"
            better="je m'exprime encore avec difficulté"
            note="L'expression est correcte, mais peut être formulée de manière plus fluide."
          />
        </div>
      </div>
    </FeedbackPreviewShell>
  );
}

function VocabTab() {
  return (
    <FeedbackPreviewShell>
      <div className="mt-5 rounded-2xl border border-green-100 bg-green-50/60 p-4">
        <p className="text-xs font-bold uppercase tracking-wider text-green-700">Bien utilisé</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {["pratiquer", "améliorer", "communication"].map((word) => (
            <span key={word} className="rounded-full border border-green-100 bg-white px-3 py-1 text-sm text-gray-700">
              {word}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-5 space-y-3">
        <p className="text-xs font-bold uppercase tracking-wider text-gray-600">À améliorer</p>
        <VocabSuggestion from="bien" to="correctement" note="Utiliser un terme plus précis pour exprimer l'idée." />
        <VocabSuggestion from="un peu" to="quelques notions" note="Exprimer une connaissance plus nuancée." />
      </div>
      <div className="mt-5 rounded-2xl border border-white/80 bg-white/70 p-4 shadow-sm">
        <p className="text-xs font-bold uppercase tracking-wider text-gray-600">Connecteurs manquants</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {["en outre", "de plus"].map((word) => (
            <span key={word} className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-sm text-brand-navy">
              {word}
            </span>
          ))}
        </div>
      </div>
    </FeedbackPreviewShell>
  );
}

function AnalysisTab() {
  return (
    <FeedbackPreviewShell>
      <div className="mt-5 rounded-2xl border border-white/80 bg-white/70 p-4 shadow-sm">
        <p className="text-xs font-bold uppercase tracking-wider text-gray-500">
          Métriques linguistiques
        </p>
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            ["Phrases", "11"],
            ["Long. moy.", "6 mots"],
            ["Mots uniques", "78.8%"],
            ["Connecteurs", "2"]
          ].map(([label, value]) => (
            <div key={label} className="rounded-xl border border-blue-100 bg-blue-50/50 px-3 py-3 text-center">
              <p className="text-[10px] font-bold uppercase tracking-wider text-gray-500">{label}</p>
              <p className="mt-1 font-display text-xl font-bold text-brand-navy">{value}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 rounded-2xl border border-blue-100 bg-blue-50/55 p-4">
        <p className="text-xs font-bold uppercase tracking-wider text-gray-600">Recommandations</p>
        <ol className="mt-3 space-y-2 text-sm text-gray-700">
          <li>1. Utiliser des phrases plus variées pour exprimer des idées.</li>
          <li>2. Pratiquer l&apos;utilisation de connecteurs pour lier les phrases.</li>
          <li>3. Développer davantage les raisons pour lesquelles vous pratiquez.</li>
        </ol>
      </div>
    </FeedbackPreviewShell>
  );
}

function RewriteTab() {
  return (
    <FeedbackPreviewShell>
      <div className="mt-5 rounded-2xl border border-blue-200 bg-blue-50/70 p-4">
        <p className="text-sm text-gray-700">
          Cette réécriture montre comment votre texte pourrait atteindre le niveau C1.
        </p>
      </div>
      <div className="mt-4 rounded-2xl border border-white/80 bg-white/70 p-5 shadow-sm">
        <p className="whitespace-pre-wrap font-mono text-xs leading-loose text-gray-800">
          Bonjour, Je m&apos;appelle Fumi.{" "}
          <span className="rounded bg-red-100 px-1 text-red-700 line-through">Je viens du Japon et j&apos;habite</span>{" "}
          <span className="rounded bg-green-100 px-1 text-green-700">Actuellement, je vis</span> à Vancouver, au Canada.
          {"\n\n"}Mon niveau de français est débutant.{" "}
          <span className="rounded bg-green-100 px-1 text-green-700">
            Cependant, je comprends certaines bases
          </span>{" "}
          et je souhaite progresser afin de communiquer plus aisément.
          {"\n\n"}Je veux pratiquer le français parce que j&apos;ai un grand intérêt pour les langues et je souhaite voyager dans les pays francophones.
        </p>
      </div>
    </FeedbackPreviewShell>
  );
}

function CorrectionCard({
  original = "Je voudrais améliorer ma communication",
  better = "Je voudrais améliorer ma communication en pratiquant avec un partenaire.",
  note = "La phrase ne précise pas comment le partenaire va aider à améliorer la communication."
}: {
  original?: string;
  better?: string;
  note?: string;
}) {
  return (
    <div className="rounded-xl border border-white/80 bg-white/80 p-4 shadow-sm">
      <div className="mb-2 flex flex-wrap gap-2">
        <span className="rounded-full border border-blue-100 bg-blue-50 px-2 py-1 text-xs text-brand-navy">Recevabilité</span>
        <span className="rounded-full border border-blue-100 bg-blue-50 px-2 py-1 text-xs text-brand-navy">task adequacy</span>
      </div>
      <p className="text-sm text-gray-700">
        <span className="text-gray-400 line-through">{original}</span>{" "}
        <span className="font-bold text-gray-900">→ {better}</span>
      </p>
      <p className="mt-2 text-xs leading-relaxed text-gray-500">{note}</p>
    </div>
  );
}

function MiniCriterion({ label, score }: { label: string; score: number }) {
  return (
    <div>
      <div className="mb-1 flex items-center justify-between">
        <p className="text-sm font-semibold text-gray-800">{label}</p>
        <p className="text-sm font-bold text-gray-900">{score}/5</p>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-gray-200">
        <div className="h-full rounded-full bg-brand-navy" style={{ width: `${score * 20}%` }} />
      </div>
    </div>
  );
}

function VocabSuggestion({
  from,
  to,
  note
}: {
  from: string;
  to: string;
  note: string;
}) {
  return (
    <div className="rounded-xl border border-blue-100 bg-blue-50/55 p-4">
      <p className="text-sm text-gray-700">
        <span className="text-gray-400 line-through">{from}</span>{" "}
        <span className="font-bold text-gray-900">→ {to}</span>
      </p>
      <p className="mt-1 text-xs text-gray-500">{note}</p>
    </div>
  );
}
