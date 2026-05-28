"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Clock3, FileText } from "lucide-react";
import { countWords } from "../../lib/writing-target";
import type { TrainingTaskConfig } from "../../lib/training-tasks";

const ACCENTS = ["é", "è", "ê", "ë", "à", "â", "î", "ï", "ô", "ù", "û", "ç", "«", "»"];

const TIMER_START = 20 * 60;

function formatTime(seconds: number) {
  const m = Math.floor(seconds / 60)
    .toString()
    .padStart(2, "0");
  const s = (seconds % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}

function meetsWordTarget(count: number, min: number, max: number) {
  return count >= min && count <= max;
}

type TrainingModeViewProps = {
  task: TrainingTaskConfig;
};

export function TrainingModeView({ task }: TrainingModeViewProps) {
  const router = useRouter();
  const [text, setText] = useState("");
  const [timeLeft, setTimeLeft] = useState(TIMER_START);
  const [paused, setPaused] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const wordCount = countWords(text);
  const progress = Math.min(100, (wordCount / task.wordMax) * 100);
  const inRange = meetsWordTarget(wordCount, task.wordMin, task.wordMax);

  const editorBarClass =
    task.editorTone === "green"
      ? "border-green-100 bg-green-50 text-green-900"
      : "border-amber-100 bg-amber-50/90 text-amber-950";

  const badgeClass =
    task.id === 2
      ? "bg-green-100 text-green-800"
      : "bg-gray-100 text-gray-700";

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setTimeLeft((t) => (t > 0 ? t - 1 : 0));
    }, 1000);
    return () => window.clearInterval(id);
  }, [paused]);

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
    <div className="lp-page min-h-dvh text-gray-900">
      <header className="border-b border-gray-200 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-4 sm:px-6">
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="font-display text-xl font-bold text-gray-900 sm:text-2xl">
              Training Mode
            </h1>
            <span
              className={`rounded-full px-2.5 py-1 text-xs font-semibold ${badgeClass}`}
            >
              {task.badge}
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-lg border border-blue-100 bg-blue-50 px-3 py-2 text-sm font-semibold tabular-nums text-brand-navy">
              <Clock3 className="h-4 w-4 shrink-0" aria-hidden />
              {formatTime(timeLeft)}
            </span>
            <button
              type="button"
              onClick={() => setPaused((p) => !p)}
              className="btn-secondary-gray px-4 py-2 text-sm"
            >
              {paused ? "Resume" : "Pause"}
            </button>
            <button
              type="button"
              onClick={() => router.push("/app")}
              className="btn-secondary-gray px-4 py-2 text-sm"
            >
              Quit
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,320px)_1fr]">
          <aside className="space-y-4">
            <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-card">
              <label
                htmlFor={`task-select-${task.id}`}
                className="text-sm font-medium text-gray-700"
              >
                Task to practice:
              </label>
              <select
                id={`task-select-${task.id}`}
                defaultValue={task.taskSelectLabel}
                className="mt-2 w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-800 outline-none focus:border-brand-navy focus:ring-1 focus:ring-brand-navy/20"
              >
                <option>{task.taskSelectLabel}</option>
              </select>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-card">
              <p className="text-sm font-semibold text-gray-900">{task.themeTitle}</p>
              <p className="mt-3 text-sm leading-relaxed text-gray-700">{task.themePrompt}</p>
            </div>

            {task.documents?.map((doc) => (
              <div
                key={doc.title}
                className="rounded-xl border border-gray-200 bg-white p-4 shadow-card"
              >
                <p className="text-sm font-semibold text-gray-900">{doc.title}</p>
                <p className="mt-3 text-sm leading-relaxed text-gray-700">{doc.body}</p>
              </div>
            ))}

            <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-card">
              <p className="text-sm font-semibold text-gray-900">Response frame</p>
              <div className="mt-3 rounded-lg border border-gray-100 bg-gray-50 px-3 py-2">
                <p className="text-xs font-medium text-gray-500">Word limit</p>
                <p className="mt-0.5 text-sm font-semibold text-gray-800">
                  {task.wordMin}-{task.wordMax} words
                </p>
              </div>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-gray-500">
                Recommended TCF structure
              </p>
              <ul className="mt-2 space-y-1.5 text-sm text-gray-700">
                {task.structure.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-navy" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <section className="min-w-0 space-y-4">
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-card">
              <div
                className={`flex flex-wrap items-center justify-between gap-2 border-b px-4 py-3 ${editorBarClass}`}
              >
                <p className="text-sm font-semibold">{task.editorTitle}</p>
                <p className="text-sm font-semibold">{task.editorLevel}</p>
              </div>
              <textarea
                ref={textareaRef}
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder={task.placeholder}
                className="min-h-[280px] w-full resize-y border-0 bg-white p-5 text-base leading-relaxed text-gray-900 outline-none focus:ring-0 sm:min-h-[360px]"
              />
              <div className="border-t border-gray-100 px-4 py-3">
                <button
                  type="button"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-navy transition hover:text-brand-navy-hover"
                >
                  <FileText className="h-4 w-4" aria-hidden />
                  Use a template
                </button>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 rounded-xl border border-gray-200 bg-white px-3 py-3 shadow-card">
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

            <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-card">
              <div className="flex flex-wrap items-center justify-between gap-2 text-sm">
                <span className={inRange ? "font-semibold text-green-600" : "text-gray-700"}>
                  {wordCount} words
                </span>
                <span className="text-gray-500">
                  min: {task.wordMin}, max: {task.wordMax}
                </span>
              </div>
              <div className="mt-3 flex items-center gap-3">
                <div className="h-2 min-w-0 flex-1 overflow-hidden rounded-full bg-gray-100">
                  <div
                    className={`h-2 rounded-full transition-all duration-500 ${
                      inRange ? "bg-green-500" : "bg-brand-navy"
                    }`}
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <span className="hidden shrink-0 text-xs text-gray-500 sm:inline">
                  min: {task.wordMin}, max: {task.wordMax}
                </span>
              </div>
            </div>
          </section>
        </div>

        <div className="mt-6 flex justify-end">
          {inRange ? (
            <Link href="/app/feedback" className="btn-primary px-8 py-3 text-base">
              Finish training
            </Link>
          ) : (
            <button type="button" disabled className="btn-disabled px-8 py-3 text-base">
              Finish training
            </button>
          )}
        </div>
      </main>
    </div>
  );
}
