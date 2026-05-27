type SlideLayout =
  | "cover"
  | "agenda"
  | "context"
  | "cards"
  | "flow"
  | "quote"
  | "persona"
  | "beforeAfter"
  | "feedback"
  | "metrics"
  | "roadmap";

type Slide = {
  section: string;
  title: string;
  message: string;
  bullets?: string[];
  visualTitle: string;
  visualNotes: string[];
  layout?: SlideLayout;
  tags?: string[];
};

const slides: Slide[] = [
  {
    section: "Introduction",
    title: "Designing the First Successful Learning Experience",
    message: "UX Redesign for Écrivance",
    bullets: ["Helping users reach AI feedback faster."],
    visualTitle: "Hero product mockup placeholder",
    visualNotes: ["Final product mockup", "Landing + Feedback screens", "Clean product presentation"],
    layout: "cover",
    tags: ["Final Project Presentation"]
  },
  {
    section: "Introduction",
    title: "Today’s Agenda",
    message: "A UX case study about improving understanding speed.",
    bullets: [
      "Introduction",
      "Problem Definition",
      "Research & Insights",
      "Problem Statement & HMW",
      "Design Strategy",
      "UX Redesign — Before / After",
      "Final User Flow & Prototype",
      "Expected Impact",
      "Reflection & Next Steps"
    ],
    visualTitle: "Agenda flow placeholder",
    visualNotes: ["Use section timeline", "Simple progress line"],
    layout: "agenda"
  },
  {
    section: "Introduction",
    title: "What is Écrivance?",
    message: "An AI-powered writing practice platform for TCF Canada candidates.",
    bullets: [
      "Practice Writing Tasks 1, 2, and 3",
      "Write under exam-like conditions",
      "Receive instant AI feedback",
      "Track progress over time"
    ],
    visualTitle: "Product screenshot trio",
    visualNotes: ["Landing page screenshot", "Writing screen screenshot", "Feedback screen screenshot"],
    layout: "context"
  },
  {
    section: "Introduction",
    title: "Why This Project Matters",
    message: "This is exam preparation connected to immigration goals.",
    bullets: [
      "Real exam deadlines",
      "PR / immigration pressure",
      "Limited study time",
      "Need level and next steps quickly"
    ],
    visualTitle: "Emotional context diagram",
    visualNotes: ["Exam deadline", "Immigration goal", "Limited time", "Anxiety"],
    layout: "cards"
  },
  {
    section: "Introduction",
    title: "Users Are Under Pressure",
    message: "They need confidence, structure, and fast feedback.",
    bullets: [
      "Adult learners and immigrants",
      "French level around A2–B2",
      "Often studying after work",
      "Need practical, direct guidance"
    ],
    visualTitle: "Persona placeholder cards",
    visualNotes: ["Persona image here", "User context here", "Study constraints here"],
    layout: "persona"
  },
  {
    section: "Problem Definition",
    title: "Current Product Challenge",
    message: "The product works technically, but users may not understand its value quickly enough.",
    bullets: [
      "AI feedback is powerful",
      "Writing practice is useful",
      "The path to the first successful experience needs more guidance"
    ],
    visualTitle: "Current flow placeholder",
    visualNotes: ["Landing", "Sign up", "Choose task", "Write", "Feedback"],
    layout: "flow"
  },
  {
    section: "Problem Definition",
    title: "Current UX Issues",
    message: "The main issue is the whole first-time experience.",
    bullets: [
      "Onboarding value is not clear enough",
      "Tasks 1 / 2 / 3 can feel confusing",
      "Users do not know what to do first",
      "AI feedback can feel overwhelming",
      "Dashboard needs stronger next-action guidance"
    ],
    visualTitle: "Five issue cards",
    visualNotes: ["Simple icons", "Short issue labels", "Friction points"],
    layout: "cards"
  },
  {
    section: "Problem Definition",
    title: "Why Users Leave Early",
    message: "They leave before reaching the core AI feedback experience.",
    bullets: ["Discover", "Sign up", "Confusion", "No first practice", "Leave"],
    visualTitle: "Drop-off journey diagram",
    visualNotes: ["Show friction markers", "Use muted warning color", "Highlight confusion"],
    layout: "flow"
  },
  {
    section: "Problem Definition",
    title: "The Real Problem",
    message: "Users are not leaving because they do not want to learn. They leave because they do not understand the value fast enough.",
    bullets: ["Motivation is not the problem", "Delayed understanding is the problem"],
    visualTitle: "Insight statement layout",
    visualNotes: ["Motivation ≠ Problem", "Delayed understanding = Problem"],
    layout: "quote",
    tags: ["Core Insight"]
  },
  {
    section: "Research & Insights",
    title: "Research Inputs",
    message: "The redesign was based on multiple sources of information.",
    bullets: [
      "Project brief",
      "Founder interview",
      "Product analytics",
      "Persona analysis",
      "Competitive / UX pattern review",
      "Existing product screens"
    ],
    visualTitle: "Research source cards",
    visualNotes: ["Brief", "Interview", "Analytics", "Personas", "Screens"],
    layout: "cards"
  },
  {
    section: "Research & Insights",
    title: "Founder Interview Insights",
    message: "The founder’s goals revealed the importance of first practice, feedback clarity, and continuity.",
    bullets: [
      "Users need to understand value quickly",
      "Feedback is the core product experience",
      "A learning pathway is needed",
      "The product should feel like structured training",
      "Retention depends on whether users feel progress"
    ],
    visualTitle: "Interview note placeholders",
    visualNotes: ["Founder quote card", "Sticky-note insights", "Priority themes"],
    layout: "quote"
  },
  {
    section: "Research & Insights",
    title: "User Behavior Insights",
    message: "The biggest opportunity is improving activation and retention.",
    bullets: [
      "Some users do not complete first practice",
      "Value needs to appear earlier",
      "First feedback experience is critical",
      "Continued use depends on clear next steps"
    ],
    visualTitle: "Activation funnel placeholder",
    visualNotes: ["Visit", "Sign up", "First practice", "Feedback", "Return"],
    layout: "flow"
  },
  {
    section: "Research & Insights",
    title: "Persona 01 — Busy Immigrant Learner",
    message: "This user needs simple guidance because time and mental energy are limited.",
    bullets: [
      "India-born learner living in Canada",
      "Preparing for PR / immigration",
      "Works full-time and studies at night",
      "French level A2–B1",
      "Needs current level, real tasks, and next steps"
    ],
    visualTitle: "Persona card placeholder",
    visualNotes: ["Photo placeholder", "Quote", "Needs", "Pain points"],
    layout: "persona"
  },
  {
    section: "Research & Insights",
    title: "Persona 02 — Efficiency-Focused Learner",
    message: "This user is comfortable with tools, but leaves quickly if value is unclear.",
    bullets: [
      "Brazil-born tech worker in Canada",
      "Busy but efficient",
      "Comfortable with digital tools",
      "Needs fast feedback, clear score, and a learning path",
      "Gets frustrated when the next step is unclear"
    ],
    visualTitle: "Persona card placeholder",
    visualNotes: ["Photo placeholder", "Quote", "Tool expectations", "Progress needs"],
    layout: "persona"
  },
  {
    section: "Research & Insights",
    title: "Key Insight",
    message: "The problem is not motivation. The problem is delayed understanding.",
    bullets: ["Users want to improve", "The product must guide them from curiosity to confidence"],
    visualTitle: "Large typography placeholder",
    visualNotes: ["Use as memorable transition slide", "Minimal visual noise"],
    layout: "quote",
    tags: ["Core Narrative"]
  },
  {
    section: "Problem Statement & HMW",
    title: "Problem Statement",
    message: "Busy TCF Canada candidates cannot clearly understand the platform’s value, task structure, and next actions during onboarding.",
    bullets: [
      "User: Busy TCF Canada candidates",
      "Problem: Value, task structure, and next actions are not clear fast enough",
      "Consequence: They leave before reaching AI feedback"
    ],
    visualTitle: "Problem statement blocks",
    visualNotes: ["User", "Problem", "Consequence"],
    layout: "cards"
  },
  {
    section: "Problem Statement & HMW",
    title: "How Might We",
    message: "How might we help users reach their first successful AI feedback experience within 3 minutes?",
    bullets: ["Reduce confusion", "Guide users toward the next best action"],
    visualTitle: "Centered HMW statement",
    visualNotes: ["Subtle product background", "One strong question"],
    layout: "quote"
  },
  {
    section: "Design Strategy",
    title: "Design Strategy",
    message: "The redesign reduces cognitive load and guides users toward success.",
    bullets: [
      "Reduce Thinking",
      "Guide the First Action",
      "Make Feedback Actionable",
      "Visualize Growth"
    ],
    visualTitle: "Four UX principle cards",
    visualNotes: ["One card per principle", "Use calm hierarchy"],
    layout: "cards"
  },
  {
    section: "Design Strategy",
    title: "Design Direction",
    message: "The interface should feel clear, calm, and trustworthy.",
    bullets: [
      "Calm learning environment",
      "Strong hierarchy",
      "Simple choices",
      "Clear progress",
      "Professional but warm"
    ],
    visualTitle: "Style guide placeholder",
    visualNotes: ["Navy palette", "Amber accent", "Typography", "Rounded UI components"],
    layout: "context"
  },
  {
    section: "UX Redesign — Before / After",
    title: "Redesign Overview",
    message: "The redesign improves the entire first learning journey.",
    bullets: ["Landing Page", "Onboarding", "Task Selection", "Writing Experience", "AI Feedback", "Dashboard"],
    visualTitle: "Screen map placeholder",
    visualNotes: ["One thumbnail per redesigned area", "Connect with journey line"],
    layout: "flow"
  },
  {
    section: "UX Redesign — Before / After",
    title: "Landing Page — Communicating Value Faster",
    message: "The first screen must explain the value before asking users to commit.",
    bullets: [
      "Before: Users may not understand what result they will get",
      "After: TCF Writing, AI feedback, score outcome, and clear CTA are visible"
    ],
    visualTitle: "Before / After screenshots",
    visualNotes: ["Before landing screenshot", "After landing screenshot", "Highlight CTA and result preview"],
    layout: "beforeAfter"
  },
  {
    section: "UX Redesign — Before / After",
    title: "Onboarding — From Uncertainty to First Action",
    message: "The onboarding reduces anxiety by explaining what will happen next.",
    bullets: [
      "Short real-style task",
      "Fast AI feedback",
      "Current level estimate",
      "Free credits to start"
    ],
    visualTitle: "Onboarding before / after",
    visualNotes: ["Highlight 3 Free Credits", "<30s", "NCLC"],
    layout: "beforeAfter"
  },
  {
    section: "UX Redesign — Before / After",
    title: "Task Selection — Guiding the Next Best Step",
    message: "The product acts like a learning coach instead of making users decide everything.",
    bullets: [
      "Before: Users may not know which task to choose",
      "After: Recommended Next Step guides action based on previous result"
    ],
    visualTitle: "Task selection comparison",
    visualNotes: ["Before task list", "After Recommended Next Step", "Callout around recommendation"],
    layout: "beforeAfter"
  },
  {
    section: "UX Redesign — Before / After",
    title: "Writing Experience — Creating Focus and Calm",
    message: "The writing screen should support concentration, not add pressure.",
    bullets: [
      "Clear task context",
      "Timer and exam-like structure",
      "Simple writing area",
      "Reduced distractions",
      "Preparation countdown"
    ],
    visualTitle: "Writing screen annotation",
    visualNotes: ["Timer", "Prompt", "Writing area", "Submit CTA"],
    layout: "context"
  },
  {
    section: "UX Redesign — Before / After",
    title: "AI Feedback — From Overwhelming to Actionable",
    message: "Users should first understand the result, then what to improve, then what to do next.",
    bullets: ["Overview", "Summary", "Errors", "Vocabulary", "Analysis", "C1 Rewrite"],
    visualTitle: "Feedback screen placeholder",
    visualNotes: ["Score", "Corrections", "Priority", "Retry action"],
    layout: "feedback",
    tags: ["Strongest Redesign Area"]
  },
  {
    section: "UX Redesign — Before / After",
    title: "Feedback as a Learning System",
    message: "The feedback screen is designed not only to evaluate, but to teach.",
    bullets: [
      "Overview: quick score and breakdown",
      "Summary: explanation and priority issue",
      "Errors: specific corrections",
      "Vocabulary: useful words and connectors",
      "Analysis: metrics and recommendations",
      "C1 Rewrite: higher-level example"
    ],
    visualTitle: "Feedback layer diagram",
    visualNotes: ["Stacked tab cards", "Screenshot placeholder for each tab"],
    layout: "feedback"
  },
  {
    section: "UX Redesign — Before / After",
    title: "Dashboard — Helping Users Feel Growth",
    message: "Retention improves when users can see progress and know the next step.",
    bullets: [
      "Current level",
      "Target NCLC",
      "Score progress",
      "Focus areas",
      "Study path",
      "Continue practice CTA"
    ],
    visualTitle: "Dashboard screenshot placeholder",
    visualNotes: ["Progress chart", "Focus area", "Study path", "CTA"],
    layout: "context"
  },
  {
    section: "Final User Flow & Prototype",
    title: "Redesigned Learning Journey",
    message: "The redesign connects each step into one guided learning loop.",
    bullets: ["Discover", "Understand", "Start Practice", "Write", "Receive Feedback", "Know Next Step", "Practice Again"],
    visualTitle: "Learning loop diagram",
    visualNotes: ["Use product thumbnails", "Connect loop with arrows"],
    layout: "flow"
  },
  {
    section: "Final User Flow & Prototype",
    title: "Prototype Walkthrough",
    message: "The prototype demonstrates the first successful learning experience.",
    bullets: [
      "Landing page",
      "Onboarding",
      "Sign up / sign in",
      "New Practice",
      "Writing task",
      "Feedback",
      "Dashboard",
      "Continue practice"
    ],
    visualTitle: "Prototype path placeholder",
    visualNotes: ["Large demo path", "Screen thumbnails", "Start-to-feedback line"],
    layout: "flow"
  },
  {
    section: "Expected Impact",
    title: "Expected Impact",
    message: "The redesign is expected to improve activation, understanding, and retention.",
    bullets: [
      "Activation: faster path to first practice",
      "Understanding: clearer score and feedback",
      "Retention: visible progress and recommended next task"
    ],
    visualTitle: "Three KPI cards",
    visualNotes: ["Activation", "Understanding", "Retention"],
    layout: "metrics"
  },
  {
    section: "Expected Impact",
    title: "How Success Could Be Measured",
    message: "Success should be measured by whether users reach and understand feedback faster.",
    bullets: [
      "Time to first practice",
      "First practice completion rate",
      "First feedback completion rate",
      "D1 / D3 / D7 retention",
      "Free-to-paid conversion",
      "Feedback usefulness rating"
    ],
    visualTitle: "Measurement dashboard placeholder",
    visualNotes: ["Metric cards", "Simple trend lines", "No complicated charts"],
    layout: "metrics"
  },
  {
    section: "Reflection & Next Steps",
    title: "Reflection",
    message: "UX is not decoration. UX is how users understand, trust, and continue.",
    bullets: [
      "AI products still need human guidance",
      "Clarity creates trust",
      "Feedback must be actionable",
      "Onboarding is part of the product experience",
      "Growth visualization supports retention"
    ],
    visualTitle: "Reflection statement placeholder",
    visualNotes: ["Minimal typography", "Calm background"],
    layout: "quote"
  },
  {
    section: "Reflection & Next Steps",
    title: "Next Steps",
    message: "The project can continue through validation and personalization.",
    bullets: [
      "Usability testing with real TCF learners",
      "Improve mobile-first details",
      "Add multilingual support",
      "Personalize study paths",
      "Refine pricing / upgrade moments",
      "Test onboarding variations"
    ],
    visualTitle: "Roadmap placeholder",
    visualNotes: ["Now", "Next", "Later"],
    layout: "roadmap"
  },
  {
    section: "Closing",
    title: "Thank You",
    message: "Helping users learn with clarity, confidence, and momentum.",
    bullets: ["Final product mockup placeholder"],
    visualTitle: "Final product hero",
    visualNotes: ["Use best final product image", "Keep clean and confident"],
    layout: "cover",
    tags: ["Écrivance"]
  }
];

function Placeholder({ slide }: { slide: Slide }) {
  const notes = slide.visualNotes;

  if (slide.layout === "beforeAfter") {
    return (
      <div className="grid h-full grid-cols-2 gap-4">
        {["Before image here", "After image here"].map((label, index) => (
          <div key={label} className="flex flex-col rounded-3xl border border-white bg-white/70 p-4 shadow-card">
            <div className="mb-3 flex items-center justify-between">
              <span className={`rounded-full px-3 py-1 text-xs font-bold ${index === 0 ? "bg-gray-100 text-gray-500" : "bg-blue-50 text-brand-navy"}`}>
                {index === 0 ? "Before" : "After"}
              </span>
              <span className="text-xs text-gray-400">Screenshot</span>
            </div>
            <div className="flex flex-1 items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-gradient-to-br from-gray-50 to-blue-50/70 text-center text-sm font-semibold text-gray-500">
              {label}
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (slide.layout === "feedback") {
    return (
      <div className="flex h-full flex-col rounded-3xl border border-white bg-white/75 p-5 shadow-card">
        <div className="mb-4 grid grid-cols-3 gap-2 text-center text-xs font-bold text-brand-navy">
          {["Overview", "Summary", "Errors", "Vocabulary", "Analysis", "C1 Rewrite"].map((tab) => (
            <span key={tab} className="rounded-full bg-blue-50 px-3 py-2">
              {tab}
            </span>
          ))}
        </div>
        <div className="grid flex-1 grid-cols-[0.75fr_1.25fr] gap-4">
          <div className="rounded-2xl bg-blue-50/80 p-4">
            <p className="text-xs font-bold uppercase tracking-wider text-gray-400">Score</p>
            <p className="mt-2 font-display text-5xl font-bold text-brand-navy">B1+</p>
            <div className="mt-5 space-y-2">
              {[82, 75, 68].map((value) => (
                <div key={value} className="h-2 rounded-full bg-white">
                  <div className="h-2 rounded-full bg-brand-navy" style={{ width: `${value}%` }} />
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-gradient-to-br from-white to-blue-50/70 text-center">
            <div>
              <p className="font-semibold text-gray-700">{slide.visualTitle}</p>
              <p className="mt-2 text-sm text-gray-500">Add feedback tab screenshots here</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (slide.layout === "persona") {
    return (
      <div className="grid h-full grid-cols-[0.8fr_1.2fr] gap-4 rounded-3xl border border-white bg-white/75 p-5 shadow-card">
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-blue-50/80 text-center">
          <div className="h-24 w-24 rounded-full bg-white shadow-card" />
          <p className="mt-4 text-sm font-bold text-brand-navy">Persona image here</p>
          <p className="mt-1 text-xs text-gray-500">Replace with user photo</p>
        </div>
        <div className="flex flex-col justify-center gap-3">
          {notes.map((note) => (
            <div key={note} className="rounded-2xl bg-blue-50/70 px-4 py-3 text-sm font-semibold text-gray-700">
              {note}
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (slide.layout === "flow" || slide.layout === "roadmap") {
    return (
      <div className="flex h-full flex-col justify-center rounded-3xl border border-white bg-white/75 p-5 shadow-card">
        <p className="mb-4 text-sm font-bold text-brand-navy">{slide.visualTitle}</p>
        <div className="flex items-center gap-2 overflow-hidden">
          {notes.slice(0, 6).map((note, index) => (
            <div key={note} className="flex min-w-0 flex-1 items-center gap-2">
              <div className="flex min-h-24 flex-1 items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-blue-50/70 p-3 text-center text-xs font-semibold text-gray-600">
                {note}
              </div>
              {index < Math.min(notes.length, 6) - 1 ? <span className="text-brand-navy">→</span> : null}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-full flex-col justify-between rounded-3xl border border-white bg-white/75 p-5 shadow-card">
      <div>
        <p className="text-sm font-bold text-brand-navy">{slide.visualTitle}</p>
        <p className="mt-2 text-sm text-gray-500">Replace this placeholder with final visual assets.</p>
      </div>
      <div className="my-5 flex flex-1 items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-gradient-to-br from-white to-blue-50/80 text-center">
        <div className="px-6">
          <p className="font-display text-2xl font-bold text-gray-700">Image / diagram here</p>
          <p className="mt-2 text-sm text-gray-500">{notes[0]}</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {notes.slice(0, 4).map((note) => (
          <span key={note} className="rounded-xl bg-blue-50 px-3 py-2 text-xs font-semibold text-gray-600">
            {note}
          </span>
        ))}
      </div>
    </div>
  );
}

function SlideCard({ slide, index }: { slide: Slide; index: number }) {
  const isCover = slide.layout === "cover";
  const isQuote = slide.layout === "quote";

  return (
    <section
      id={`slide-${index + 1}`}
      className="mx-auto aspect-[16/9] w-full max-w-6xl scroll-mt-6 overflow-hidden rounded-[2rem] border border-white/80 bg-gradient-to-br from-white via-[#f8fbff] to-[#f2f5ff] p-8 shadow-[0_24px_80px_rgba(0,35,149,0.12)]"
    >
      <div className="flex h-full flex-col">
        <div className="mb-5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-brand-navy">
              {slide.section}
            </span>
            {slide.tags?.map((tag) => (
              <span key={tag} className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-800">
                {tag}
              </span>
            ))}
          </div>
          <span className="text-sm font-semibold text-gray-400">
            {String(index + 1).padStart(2, "0")} / {slides.length}
          </span>
        </div>

        <div className={`grid flex-1 gap-8 ${isCover || isQuote ? "grid-cols-[1.05fr_0.95fr]" : "grid-cols-[0.9fr_1.1fr]"}`}>
          <div className="flex flex-col justify-center">
            <img src="/brand/ecrivance-logo-navy.svg" alt="Écrivance" className="mb-8 h-8 w-fit" />
            <h1 className={`${isCover ? "text-5xl" : isQuote ? "text-4xl" : "text-3xl"} font-display font-bold leading-[1.04] tracking-[-0.045em] text-gray-950`}>
              {slide.title}
            </h1>
            <p className={`${isQuote ? "mt-7 text-2xl" : "mt-5 text-xl"} max-w-xl leading-relaxed text-gray-600`}>
              {slide.message}
            </p>
            {slide.bullets?.length ? (
              <ul className={`mt-7 grid gap-3 ${slide.bullets.length > 5 ? "grid-cols-2" : "grid-cols-1"}`}>
                {slide.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 text-sm font-medium leading-relaxed text-gray-700">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-navy" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>

          <div className="min-h-0">
            <Placeholder slide={slide} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function PitchDeckPage() {
  return (
    <main className="min-h-screen bg-[#f3f6ff] px-5 py-8 text-gray-900">
      <div className="mx-auto mb-8 flex max-w-6xl flex-col gap-4 rounded-3xl border border-white/80 bg-white/70 p-5 shadow-card backdrop-blur-md md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-navy">
            Écrivance Final Project Presentation
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-[-0.04em] text-gray-950">
            UX case study deck draft
          </h2>
        </div>
        <div className="flex flex-wrap gap-2 text-sm font-semibold text-gray-500">
          <span className="rounded-full bg-blue-50 px-4 py-2">{slides.length} slides</span>
          <span className="rounded-full bg-amber-100 px-4 py-2 text-amber-800">16:9 layout</span>
          <span className="rounded-full bg-white px-4 py-2">Placeholders included</span>
        </div>
      </div>

      <div className="space-y-10">
        {slides.map((slide, index) => (
          <SlideCard key={`${slide.section}-${slide.title}`} slide={slide} index={index} />
        ))}
      </div>
    </main>
  );
}
