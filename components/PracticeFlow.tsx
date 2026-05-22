"use client";

import { useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BookOpenText,
  CheckCircle2,
  Clock3,
  FileText,
  Mail,
  Sparkles,
  Target,
  Timer,
  WandSparkles
} from "lucide-react";

type Screen =
  | "welcome"
  | "goal"
  | "level"
  | "tasks"
  | "practiceType"
  | "writing"
  | "analysis"
  | "feedback"
  | "account";

type Option = {
  title: string;
  subtitle?: string;
  badge?: string;
};

const orderedScreens: Screen[] = [
  "welcome",
  "goal",
  "level",
  "tasks",
  "practiceType",
  "writing",
  "analysis",
  "feedback",
  "account"
];

const goals: Option[] = [
  { title: "Express Entry", subtitle: "I need a better immigration score." },
  { title: "Canadian citizenship", subtitle: "I want to prepare with less stress." },
  { title: "Improve my French writing", subtitle: "I want clear daily practice." },
  { title: "Just exploring", subtitle: "I want to see how it works first." }
];

const levels: Option[] = [
  { title: "Beginner", subtitle: "A1-A2" },
  { title: "Intermediate", subtitle: "B1", badge: "Suggested start" },
  { title: "Upper Intermediate", subtitle: "B2" },
  { title: "Not sure", subtitle: "Let the feedback guide me." }
];

const taskCards = [
  {
    icon: Mail,
    title: "Task 1",
    action: "Write an email",
    words: "150-200 words",
    description: "Simple communication scenario",
    tone: "Best first task"
  },
  {
    icon: FileText,
    title: "Task 2",
    action: "Write an article",
    words: "200-250 words",
    description: "Structured explanation or discussion",
    tone: "Practice after Task 1"
  },
  {
    icon: Target,
    title: "Task 3",
    action: "Express your opinion",
    words: "300+ words",
    description: "Opinion-based argumentation",
    tone: "Hardest task"
  }
];

const analysisChecks = [
  "Grammar",
  "Vocabulary",
  "Coherence",
  "Task achievement"
];

const sampleAnswer =
  "Bonjour,\n\nJe vous écris car je ne peux pas venir à notre rendez-vous demain matin. J'ai un problème urgent au travail et je dois rester au bureau plus longtemps.\n\nJe suis désolé pour ce changement. Est-ce que nous pouvons nous rencontrer jeudi à 15 h ou vendredi matin ? Merci de me confirmer le meilleur moment pour vous.\n\nCordialement";

function minutesToTime(seconds: number) {
  const mins = Math.floor(seconds / 60).toString().padStart(2, "0");
  const secs = (seconds % 60).toString().padStart(2, "0");
  return `${mins}:${secs}`;
}

function countWords(text: string) {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

function CoachButton({
  children,
  onClick,
  variant = "primary",
  className = "",
  disabled = false
}: {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "accent";
  className?: string;
  disabled?: boolean;
}) {
  const variants = {
    primary: "bg-brand-navy text-white hover:bg-brand-navy-hover",
    secondary: "border-2 border-brand-navy bg-white text-brand-navy hover:bg-blue-50",
    accent: "bg-amber-400 text-brand-navy hover:bg-amber-500"
  };

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition disabled:cursor-not-allowed disabled:opacity-50 ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}

function ProgressDots({ screen }: { screen: Screen }) {
  const current = Math.max(0, orderedScreens.indexOf(screen));
  const visibleSteps = orderedScreens.slice(0, 8);

  return (
    <div className="flex items-center gap-2" aria-label="Onboarding progress">
      {visibleSteps.map((step, index) => (
        <span
          key={step}
          className={`h-2 rounded-full transition-all ${
            index <= current ? "w-8 bg-brand-navy" : "w-2 bg-brand-navy/20"
          }`}
        />
      ))}
    </div>
  );
}

function OptionCard({
  option,
  active,
  onClick
}: {
  option: Option;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full rounded-xl border-2 p-5 text-left shadow-card transition hover:border-brand-navy ${
        active ? "border-brand-navy bg-blue-50" : "border-gray-200 bg-white"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-lg font-semibold text-gray-900">{option.title}</p>
          {option.subtitle ? (
            <p className="mt-2 text-sm leading-6 text-gray-600">{option.subtitle}</p>
          ) : null}
        </div>
        {active ? <CheckCircle2 size={24} /> : null}
      </div>
      {option.badge ? (
        <span className="mt-4 inline-flex rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-800">
          {option.badge}
        </span>
      ) : null}
    </button>
  );
}

function AppFrame({
  screen,
  onBack,
  children,
  compact = false
}: {
  screen: Screen;
  onBack?: () => void;
  children: React.ReactNode;
  compact?: boolean;
}) {
  return (
    <main className="lp-page min-h-screen px-4 py-4 text-gray-900 sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-[calc(100vh-32px)] max-w-6xl flex-col">
        <header className="flex items-center justify-between rounded-xl border border-gray-200 bg-white/90 px-4 py-3 shadow-card backdrop-blur-sm">
          <a href="/" className="font-display text-lg font-bold text-brand-navy">
            Écrivance
          </a>
          <div className="hidden sm:block">
            <ProgressDots screen={screen} />
          </div>
          {onBack ? (
            <button
              onClick={onBack}
              className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
            >
              <ArrowLeft size={16} />
              Back
            </button>
          ) : (
            <span className="rounded-full bg-blue-50 px-3 py-2 text-xs font-semibold text-brand-navy">
              Free first feedback
            </span>
          )}
        </header>

        <div className="mt-4 sm:hidden">
          <ProgressDots screen={screen} />
        </div>

        <section
          className={`grid flex-1 place-items-center ${
            compact ? "py-5" : "py-8 sm:py-12"
          }`}
        >
          {children}
        </section>
      </div>
    </main>
  );
}

function ScreenCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`w-full rounded-2xl border border-gray-200 bg-white p-6 shadow-card sm:p-8 ${className}`}>
      {children}
    </div>
  );
}

export default function PracticeFlow() {
  const [screen, setScreen] = useState<Screen>("welcome");
  const [goal, setGoal] = useState("Express Entry");
  const [level, setLevel] = useState("Intermediate");
  const [practiceType, setPracticeType] = useState<"quick" | "full">("quick");
  const [answer, setAnswer] = useState(sampleAnswer);
  const [timeLeft, setTimeLeft] = useState(20 * 60);
  const [analysisStep, setAnalysisStep] = useState(0);

  const currentIndex = orderedScreens.indexOf(screen);
  const wordCount = useMemo(() => countWords(answer), [answer]);

  useEffect(() => {
    if (screen !== "writing") return;

    setTimeLeft(practiceType === "quick" ? 20 * 60 : 60 * 60);
  }, [practiceType, screen]);

  useEffect(() => {
    if (screen !== "writing") return;

    const interval = window.setInterval(() => {
      setTimeLeft((current) => Math.max(0, current - 1));
    }, 1000);

    return () => window.clearInterval(interval);
  }, [screen]);

  useEffect(() => {
    if (screen !== "analysis") return;

    setAnalysisStep(0);
    const interval = window.setInterval(() => {
      setAnalysisStep((current) => Math.min(analysisChecks.length, current + 1));
    }, 520);
    const done = window.setTimeout(() => setScreen("feedback"), 2600);

    return () => {
      window.clearInterval(interval);
      window.clearTimeout(done);
    };
  }, [screen]);

  function goNext(next: Screen) {
    setScreen(next);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function goBack() {
    const previous = orderedScreens[Math.max(0, currentIndex - 1)];
    if (screen === "analysis") return;
    setScreen(previous);
  }

  if (screen === "welcome") {
    return (
      <AppFrame screen={screen}>
        <ScreenCard className="max-w-3xl text-center">
          <span className="mx-auto inline-flex rounded-full border border-gray-200 bg-green-100 px-4 py-2 text-xs font-semibold uppercase">
            Private TCF writing coach
          </span>
          <h1 className="mt-6 text-4xl font-semibold leading-tight sm:text-6xl">
            Let's find your current TCF Writing level.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base font-bold leading-8 text-gray-600 sm:text-lg">
            You'll complete a short real-style writing task and receive AI
            feedback in under 30 seconds.
          </p>
          <div className="mt-8 grid gap-3 text-left sm:grid-cols-3">
            {[
              ["Real TCF-style tasks", BookOpenText],
              ["Instant AI feedback", WandSparkles],
              ["No teacher required", CheckCircle2]
            ].map(([label, Icon]) => (
              <div key={label as string} className="rounded-2xl border border-gray-200 bg-amber-50/60 p-4">
                <Icon size={22} />
                <p className="mt-3 text-sm font-semibold">{label as string}</p>
              </div>
            ))}
          </div>
          <CoachButton onClick={() => goNext("goal")} className="mt-8 w-full sm:w-auto">
            Continue <ArrowRight size={18} />
          </CoachButton>
        </ScreenCard>
      </AppFrame>
    );
  }

  if (screen === "goal") {
    return (
      <AppFrame screen={screen} onBack={goBack}>
        <ScreenCard className="max-w-4xl">
          <p className="text-sm font-semibold uppercase text-gray-500">Step 1</p>
          <h1 className="mt-3 text-3xl font-semibold sm:text-5xl">What is your current goal?</h1>
          <p className="mt-3 max-w-2xl text-sm font-bold leading-6 text-gray-600">
            Choose one. This helps your feedback focus on the right outcome.
          </p>
          <div className="mt-7 grid gap-4 md:grid-cols-2">
            {goals.map((item) => (
              <OptionCard
                key={item.title}
                option={item}
                active={goal === item.title}
                onClick={() => setGoal(item.title)}
              />
            ))}
          </div>
          <CoachButton onClick={() => goNext("level")} className="mt-7 w-full sm:w-auto">
            Continue <ArrowRight size={18} />
          </CoachButton>
        </ScreenCard>
      </AppFrame>
    );
  }

  if (screen === "level") {
    return (
      <AppFrame screen={screen} onBack={goBack}>
        <ScreenCard className="max-w-4xl">
          <p className="text-sm font-semibold uppercase text-gray-500">Step 2</p>
          <h1 className="mt-3 text-3xl font-semibold sm:text-5xl">What is your current French level?</h1>
          <p className="mt-3 max-w-2xl text-sm font-bold leading-6 text-gray-600">
            No test needed now. Pick your best guess and start.
          </p>
          <div className="mt-7 grid gap-4 md:grid-cols-2">
            {levels.map((item) => (
              <OptionCard
                key={item.title}
                option={item}
                active={level === item.title}
                onClick={() => setLevel(item.title)}
              />
            ))}
          </div>
          <CoachButton onClick={() => goNext("tasks")} className="mt-7 w-full sm:w-auto">
            See the 3 writing tasks <ArrowRight size={18} />
          </CoachButton>
        </ScreenCard>
      </AppFrame>
    );
  }

  if (screen === "tasks") {
    return (
      <AppFrame screen={screen} onBack={goBack}>
        <ScreenCard className="max-w-6xl">
          <p className="text-sm font-semibold uppercase text-gray-500">TCF Written Expression</p>
          <h1 className="mt-3 text-3xl font-semibold sm:text-5xl">Understand the 3 tasks quickly.</h1>
          <p className="mt-3 max-w-2xl text-sm font-bold leading-6 text-gray-600">
            Start with Task 1. It is the easiest way to experience feedback without pressure.
          </p>
          <div className="mt-7 grid gap-4 lg:grid-cols-3">
            {taskCards.map(({ icon: Icon, title, action, words, description, tone }, index) => (
              <article
                key={title}
                className={`rounded-3xl border border-gray-200 p-5 shadow-card ${
                  index === 0 ? "bg-amber-50" : "bg-white"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl border border-gray-200 bg-white">
                    <Icon size={23} />
                  </span>
                  <span className="rounded-full border border-gray-200 bg-green-100 px-3 py-1 text-xs font-semibold">
                    {tone}
                  </span>
                </div>
                <h2 className="mt-5 text-2xl font-semibold">{title}</h2>
                <p className="mt-2 text-lg font-semibold">{action}</p>
                <p className="mt-3 text-sm font-bold text-gray-600">{words}</p>
                <p className="mt-2 text-sm font-bold leading-6 text-gray-600">{description}</p>
              </article>
            ))}
          </div>
          <CoachButton onClick={() => goNext("practiceType")} className="mt-7 w-full sm:w-auto">
            Start with Task 1 <ArrowRight size={18} />
          </CoachButton>
        </ScreenCard>
      </AppFrame>
    );
  }

  if (screen === "practiceType") {
    return (
      <AppFrame screen={screen} onBack={goBack}>
        <ScreenCard className="max-w-5xl">
          <p className="text-sm font-semibold uppercase text-gray-500">Choose your practice type</p>
          <h1 className="mt-3 text-3xl font-semibold sm:text-5xl">Start small. Get feedback fast.</h1>
          <p className="mt-3 max-w-2xl text-sm font-bold leading-6 text-gray-600">
            You can do the full simulation later. Your first session should feel easy to begin.
          </p>
          <div className="mt-7 grid gap-4 md:grid-cols-2">
            <button
              onClick={() => setPracticeType("quick")}
              className={`rounded-3xl border border-gray-200 p-6 text-left shadow-card transition hover:-translate-y-0.5 ${
                practiceType === "quick" ? "bg-amber-50" : "bg-white"
              }`}
            >
              <span className="inline-flex rounded-full border border-gray-200 bg-green-100 px-3 py-1 text-xs font-semibold">
                Recommended
              </span>
              <h2 className="mt-5 text-2xl font-semibold">Quick Practice</h2>
              <p className="mt-2 text-lg font-semibold">15-20 min</p>
              <ul className="mt-5 grid gap-3 text-sm font-bold text-gray-600">
                <li className="flex gap-2"><CheckCircle2 size={18} /> Fast feedback</li>
                <li className="flex gap-2"><CheckCircle2 size={18} /> Low pressure</li>
                <li className="flex gap-2"><CheckCircle2 size={18} /> Best for first practice</li>
              </ul>
            </button>
            <button
              onClick={() => setPracticeType("full")}
              className={`rounded-3xl border border-gray-200 p-6 text-left shadow-card transition hover:-translate-y-0.5 ${
                practiceType === "full" ? "bg-amber-50" : "bg-white"
              }`}
            >
              <span className="inline-flex rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-semibold">
                Exam mode
              </span>
              <h2 className="mt-5 text-2xl font-semibold">Full Exam Simulation</h2>
              <p className="mt-2 text-lg font-semibold">60 min</p>
              <ul className="mt-5 grid gap-3 text-sm font-bold text-gray-600">
                <li className="flex gap-2"><Timer size={18} /> Real exam timing</li>
                <li className="flex gap-2"><FileText size={18} /> All writing tasks</li>
                <li className="flex gap-2"><Clock3 size={18} /> Better after one quick try</li>
              </ul>
            </button>
          </div>
          <CoachButton onClick={() => goNext("writing")} className="mt-7 w-full sm:w-auto">
            Start writing now <ArrowRight size={18} />
          </CoachButton>
        </ScreenCard>
      </AppFrame>
    );
  }

  if (screen === "writing") {
    return (
      <AppFrame screen={screen} onBack={goBack} compact>
        <div className="grid w-full max-w-6xl gap-5 lg:grid-cols-[340px_minmax(0,1fr)]">
          <aside className="rounded-[2rem] border border-gray-200 bg-white p-5 shadow-card">
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-2xl border border-gray-200 bg-amber-50">
                <Mail size={23} />
              </span>
              <div>
                <p className="text-sm font-semibold text-gray-500">Task 1</p>
                <h1 className="text-2xl font-semibold">Write an email</h1>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
                <p className="text-xs font-semibold uppercase text-gray-500">Timer</p>
                <p className="mt-2 text-3xl font-semibold">{minutesToTime(timeLeft)}</p>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
                <p className="text-xs font-semibold uppercase text-gray-500">Words</p>
                <p className="mt-2 text-3xl font-semibold">{wordCount}</p>
              </div>
            </div>
            <div className="mt-6 rounded-2xl border border-gray-200 bg-amber-50/70 p-4">
              <p className="text-xs font-semibold uppercase text-gray-500">Prompt</p>
              <p className="mt-2 text-sm font-bold leading-6">
                Write a message to your landlord. You cannot attend tomorrow's appointment.
                Apologize, explain why, suggest a new time, and ask for confirmation.
              </p>
            </div>
          </aside>

          <section className="rounded-[2rem] border border-gray-200 bg-white p-4 shadow-card sm:p-5">
            <textarea
              value={answer}
              onChange={(event) => setAnswer(event.target.value)}
              className="min-h-[440px] w-full resize-none rounded-3xl border border-gray-200 bg-gray-50 p-5 text-base font-semibold leading-8 outline-none transition focus:bg-white focus:ring-4 focus:ring-brand-navy/20"
              placeholder="Write your answer here..."
            />
            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm font-bold text-gray-500">
                Aim for 150-200 words. Submit when you are ready.
              </p>
              <CoachButton
                onClick={() => goNext("analysis")}
                disabled={wordCount < 20}
                className="w-full sm:w-auto"
              >
                Get my feedback <WandSparkles size={18} />
              </CoachButton>
            </div>
          </section>
        </div>
      </AppFrame>
    );
  }

  if (screen === "analysis") {
    return (
      <AppFrame screen={screen}>
        <ScreenCard className="max-w-2xl text-center">
          <span className="mx-auto grid h-16 w-16 place-items-center rounded-3xl border border-gray-200 bg-amber-50 shadow-card">
            <WandSparkles size={30} />
          </span>
          <h1 className="mt-6 text-3xl font-semibold sm:text-5xl">Analyzing your writing...</h1>
          <p className="mx-auto mt-4 max-w-lg text-sm font-bold leading-6 text-gray-600">
            Your coach is checking the parts that matter in TCF writing.
          </p>
          <div className="mx-auto mt-8 grid max-w-md gap-3 text-left">
            {analysisChecks.map((item, index) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-gray-50 p-4">
                <span className={`grid h-8 w-8 place-items-center rounded-full border border-gray-200 ${
                  index < analysisStep ? "bg-green-100" : "bg-white"
                }`}>
                  {index < analysisStep ? <CheckCircle2 size={17} /> : index + 1}
                </span>
                <p className="text-sm font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </ScreenCard>
      </AppFrame>
    );
  }

  if (screen === "feedback") {
    return (
      <AppFrame screen={screen} onBack={() => goNext("writing")}>
        <div className="grid w-full max-w-6xl gap-5 lg:grid-cols-[320px_minmax(0,1fr)]">
          <ScreenCard className="bg-amber-50">
            <p className="text-sm font-semibold uppercase text-gray-500">Your result</p>
            <p className="mt-5 text-7xl font-semibold">B1</p>
            <p className="mt-2 text-lg font-semibold">Estimated NCLC level</p>
            <p className="mt-5 text-sm font-bold leading-6 text-gray-600">
              Good first practice. You understood the task and your message is clear.
            </p>
            <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-4">
              <p className="text-xs font-semibold uppercase text-gray-500">Goal</p>
              <p className="mt-2 text-sm font-semibold">{goal}</p>
              <p className="mt-3 text-xs font-semibold uppercase text-gray-500">Starting level</p>
              <p className="mt-2 text-sm font-semibold">{level}</p>
            </div>
          </ScreenCard>

          <ScreenCard>
            <div className="grid gap-5 md:grid-cols-2">
              <section className="rounded-3xl border border-gray-200 bg-green-100 p-5">
                <h2 className="text-2xl font-semibold">Strengths</h2>
                <ul className="mt-5 grid gap-4 text-sm font-bold leading-6">
                  <li className="flex gap-3"><CheckCircle2 size={20} /> Clear opinion and purpose</li>
                  <li className="flex gap-3"><CheckCircle2 size={20} /> Good sentence structure</li>
                </ul>
              </section>
              <section className="rounded-3xl border border-gray-200 bg-gray-50 p-5">
                <h2 className="text-2xl font-semibold">Improve next</h2>
                <ul className="mt-5 grid gap-4 text-sm font-bold leading-6">
                  <li className="flex gap-3"><Sparkles size={20} /> Use more transition words</li>
                  <li className="flex gap-3"><Sparkles size={20} /> Shorten repeated sentences</li>
                </ul>
              </section>
            </div>

            <section className="mt-5 rounded-3xl border border-gray-200 bg-amber-50 p-5">
              <p className="text-sm font-semibold uppercase text-gray-500">Next recommendation</p>
              <h2 className="mt-2 text-2xl font-semibold">Practice coherence in Task 2.</h2>
              <p className="mt-3 text-sm font-bold leading-6 text-gray-600">
                Try adding connectors before each new idea. Start with these:
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["cependant", "pourtant", "en revanche"].map((connector) => (
                  <span key={connector} className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold">
                    {connector}
                  </span>
                ))}
              </div>
            </section>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <CoachButton onClick={() => goNext("account")} className="w-full sm:w-auto">
                Continue improving <ArrowRight size={18} />
              </CoachButton>
              <CoachButton onClick={() => goNext("tasks")} variant="secondary" className="w-full sm:w-auto">
                Try another task
              </CoachButton>
            </div>
          </ScreenCard>
        </div>
      </AppFrame>
    );
  }

  return (
    <AppFrame screen={screen} onBack={goBack}>
      <ScreenCard className="max-w-3xl text-center">
        <span className="mx-auto grid h-16 w-16 place-items-center rounded-3xl border border-gray-200 bg-amber-50 shadow-card">
          <CheckCircle2 size={30} />
        </span>
        <h1 className="mt-6 text-4xl font-semibold leading-tight sm:text-6xl">
          Save your progress and continue improving.
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-base font-bold leading-8 text-gray-600">
          Create a free account after your first feedback. No setup before value.
        </p>
        <div className="mx-auto mt-8 grid max-w-xl gap-3 text-left sm:grid-cols-2">
          {[
            "Save your score history",
            "Track improvement",
            "Unlock more practice sessions",
            "Build your study routine"
          ].map((item) => (
            <div key={item} className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-gray-50 p-4">
              <CheckCircle2 size={20} />
              <p className="text-sm font-semibold">{item}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <CoachButton className="w-full sm:w-auto">
            Create free account <ArrowRight size={18} />
          </CoachButton>
          <CoachButton onClick={() => goNext("writing")} variant="secondary" className="w-full sm:w-auto">
            Practice again
          </CoachButton>
        </div>
      </ScreenCard>
    </AppFrame>
  );
}
