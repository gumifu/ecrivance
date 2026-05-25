"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown, ChevronUp, Clock3, Pause, Play } from "lucide-react";
import {
  countWords,
  EXAMPLE_ANSWER,
  meetsWritingWordTarget,
  WRITING_MAX_WORDS,
  WRITING_MIN_WORDS
} from "../../../lib/writing-target";
import { WritingGuidePanel } from "../WritingGuidePanel";

const ACCENTS = ["é", "è", "ë", "ê", "à", "â", "î", "ï", "ô", "ù", "û", "ç", "«", "»"];

const TIMER_START = 20 * 60;

function formatTime(seconds: number) {
  const m = Math.floor(seconds / 60)
    .toString()
    .padStart(2, "0");
  const s = (seconds % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}

type WritingStepProps = {
  onMeetsTargetChange?: (meets: boolean) => void;
};

export function WritingStep({ onMeetsTargetChange }: WritingStepProps) {
  const [text, setText] = useState("");
  const [timeLeft, setTimeLeft] = useState(TIMER_START);
  const [paused, setPaused] = useState(false);
  const [guideOpen, setGuideOpen] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const wordCount = countWords(text);
  const progress = Math.min(100, (wordCount / WRITING_MAX_WORDS) * 100);
  const inRange = meetsWritingWordTarget(wordCount);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setTimeLeft((t) => (t > 0 ? t - 1 : 0));
    }, 1000);
    return () => window.clearInterval(id);
  }, [paused]);

  useEffect(() => {
    onMeetsTargetChange?.(inRange);
  }, [inRange, onMeetsTargetChange]);

  function insertAccent(char: string) {
    const el = textareaRef.current;
    if (!el) return;
    const start = el.selectionStart ?? text.length;
    const end = el.selectionEnd ?? text.length;
    const next = text.slice(0, start) + char + text.slice(end);
    setText(next);
    requestAnimationFrame(() => {
      el.focus();
      const pos = start + char.length;
      el.setSelectionRange(pos, pos);
    });
  }

  return (
    <div className="w-full min-w-0">
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-gray-200 bg-white/80 px-4 py-3 text-sm shadow-card backdrop-blur-sm">
        <span className="inline-flex items-center gap-2 text-gray-500">
          <span
            className={`h-2 w-2 rounded-full ${paused ? "bg-amber-400" : "bg-green-500"}`}
            aria-hidden
          />
          {paused ? "Timer paused" : "Simulation in progress"}
        </span>
        <span className="inline-flex items-center gap-2 rounded-lg bg-blue-50 px-2 py-1.5 font-semibold text-brand-navy">
          <Clock3 className="h-3.5 w-3.5 shrink-0" aria-hidden />
          <span className="tabular-nums">{formatTime(timeLeft)}</span>
          <button
            type="button"
            onClick={() => setPaused((p) => !p)}
            className="ml-0.5 inline-flex h-7 w-7 items-center justify-center rounded-md text-brand-navy transition hover:bg-blue-100"
            aria-label={paused ? "Resume timer" : "Pause timer"}
            aria-pressed={paused}
          >
            {paused ? (
              <Play className="h-3.5 w-3.5" aria-hidden />
            ) : (
              <Pause className="h-3.5 w-3.5" aria-hidden />
            )}
          </button>
        </span>
      </div>

      <div className="mt-4 rounded-2xl border border-white/80 bg-white/70 p-6 shadow-card backdrop-blur-md">
        <p className="text-xs font-semibold uppercase tracking-wider text-brand-navy">
          Task 1 — Email
        </p>
        <p className="mt-4 text-base leading-relaxed text-gray-800">
          Vous avez prévu de rendre visite à votre ami Thomas à Montréal. Malheureusement,
          votre employeur vous demande de rester plus longtemps au travail.
        </p>
        <div className="mt-4 text-sm text-gray-700">
          <p className="font-medium">Écrivez un courriel à Thomas pour :</p>
          <ul className="mt-2 list-none space-y-2 pl-0">
            {[
              "lui expliquer pourquoi vous devez changer vos dates de visite",
              "lui proposer de nouvelles dates",
              "lui demander si ces nouvelles dates lui conviennent"
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-navy" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm font-semibold text-gray-800">Écrivez 150–200 mots.</p>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setText(EXAMPLE_ANSWER)}
              className="rounded-lg border-2 border-brand-navy/30 bg-white px-3 py-1.5 text-xs font-semibold text-brand-navy transition hover:bg-blue-50"
            >
              Use Example Answer
            </button>
            <button
              type="button"
              onClick={() => setGuideOpen((open) => !open)}
              className={`inline-flex items-center gap-1 rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
                guideOpen
                  ? "bg-brand-navy text-white"
                  : "bg-blue-50 text-brand-navy hover:bg-blue-100"
              }`}
              aria-expanded={guideOpen}
            >
              Writing Guide
              {guideOpen ? (
                <ChevronUp className="h-3.5 w-3.5" aria-hidden />
              ) : (
                <ChevronDown className="h-3.5 w-3.5" aria-hidden />
              )}
            </button>
          </div>
        </div>
        {guideOpen ? <WritingGuidePanel /> : null}
      </div>

      <div className="mt-4 rounded-2xl border-2 border-gray-200 bg-white p-1 shadow-card">
        <textarea
          ref={textareaRef}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Start writing your email here…"
          className="min-h-[220px] w-full max-w-full resize-y rounded-xl border-0 bg-transparent p-5 text-base leading-relaxed text-gray-900 outline-none focus:ring-0"
        />
      </div>

      <div className="mt-3 flex min-w-0 flex-wrap gap-2 rounded-xl border border-gray-200 bg-white/90 px-3 py-3 shadow-card">
        {ACCENTS.map((char) => (
          <button
            key={char}
            type="button"
            onClick={() => insertAccent(char)}
            className="flex h-8 min-w-8 items-center justify-center rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-800 transition hover:border-brand-navy hover:bg-blue-50"
          >
            {char}
          </button>
        ))}
      </div>

      <div className="mt-4">
        <div className="h-1.5 overflow-hidden rounded-full bg-gray-100">
          <div
            className={`h-1.5 rounded-full transition-all duration-500 ${
              inRange ? "bg-green-500" : "bg-brand-navy"
            }`}
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="mt-2 flex justify-between text-xs text-gray-500">
          <span className={inRange ? "font-semibold text-green-600" : ""}>
            {wordCount} words
          </span>
          <span>
            target: {WRITING_MIN_WORDS}–{WRITING_MAX_WORDS}
          </span>
        </div>
      </div>
    </div>
  );
}
