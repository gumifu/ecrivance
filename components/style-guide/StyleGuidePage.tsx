"use client";

import {
  AlertCircle,
  AlertTriangle,
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronDown,
  Clock,
  FileText,
  Info,
  Lightbulb,
  Mail,
  MessageSquare,
  TrendingUp
} from "lucide-react";
import { Button } from "../ui/Button";

type ColorSwatch = {
  hex?: string;
  token: string;
  label: string;
  className: string;
};

const navyColors: ColorSwatch[] = [
  { hex: "#1e3a8a", token: "#1e3a8a", label: "Primary Navy", className: "bg-brand-navy" },
  { hex: "#1e40af", token: "#1e40af", label: "Navy Hover", className: "bg-brand-navy-hover" },
  { token: "bg-blue-50", label: "Light Blue BG", className: "bg-blue-50" }
];

const accentColors: ColorSwatch[] = [
  { token: "bg-amber-400", label: "Amber Accent", className: "bg-amber-400" },
  { token: "bg-amber-50", label: "Light Amber BG", className: "bg-amber-50" },
  { token: "bg-yellow-50", label: "Light Yellow BG", className: "bg-yellow-50" }
];

const grayColors: ColorSwatch[] = [
  { token: "text-gray-900", label: "Headings", className: "bg-gray-900" },
  { token: "text-gray-700", label: "Body Text", className: "bg-gray-700" },
  { token: "bg-gray-200", label: "Borders", className: "bg-gray-200" }
];

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display text-3xl font-bold text-gray-900">{children}</h2>
  );
}

function SubsectionTitle({ children }: { children: React.ReactNode }) {
  return <h3 className="text-xl font-semibold text-gray-900">{children}</h3>;
}

function ColorColumn({ title, swatches }: { title: string; swatches: ColorSwatch[] }) {
  return (
    <div className="space-y-4">
      <SubsectionTitle>{title}</SubsectionTitle>
      <div className="space-y-4">
        {swatches.map((swatch) => (
          <div key={swatch.label} className="flex items-center gap-4">
            <div className={`h-20 w-20 shrink-0 rounded-lg ${swatch.className}`} />
            <div>
              <p className="font-mono text-sm text-gray-600">{swatch.token}</p>
              <p className="text-sm font-medium text-gray-900">{swatch.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CodeLabel({ children }: { children: React.ReactNode }) {
  return <code className="sg-code">{children}</code>;
}

export default function StyleGuidePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-8 md:px-14 md:py-10">
        <header className="mb-12">
          <h1 className="font-display text-5xl font-bold text-gray-900">
            Écrivance Style Guide
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Components, colors, and design patterns
          </p>
        </header>

        {/* Color Palette */}
        <section className="mb-16">
          <SectionTitle>Color Palette</SectionTitle>
          <div className="mt-8 grid gap-10 md:grid-cols-3">
            <ColorColumn title="Navy (Primary)" swatches={navyColors} />
            <ColorColumn title="Yellow/Amber (Accent)" swatches={accentColors} />
            <ColorColumn title="Gray Scale" swatches={grayColors} />
          </div>
        </section>

        {/* Typography */}
        <section className="mb-16">
          <SectionTitle>
            Typography | Heading : Sora_Bold / Body text : Inter
          </SectionTitle>
          <div className="mt-8 rounded-xl border-2 border-gray-200 p-8 md:p-10">
            <div className="space-y-8">
              <div>
                <h1 className="font-display text-5xl font-bold text-gray-900">
                  Heading 1
                </h1>
                <CodeLabel>text-5xl font-bold</CodeLabel>
              </div>
              <div>
                <h2 className="font-display text-4xl font-bold text-gray-900">
                  Heading 2
                </h2>
                <CodeLabel>text-4xl font-bold</CodeLabel>
              </div>
              <div>
                <h3 className="font-display text-3xl font-bold text-gray-900">
                  Heading 3
                </h3>
                <CodeLabel>text-3xl font-bold</CodeLabel>
              </div>
              <div>
                <h4 className="font-display text-2xl font-bold text-gray-900">
                  Heading 4
                </h4>
                <CodeLabel>text-2xl font-bold</CodeLabel>
              </div>
              <div>
                <h5 className="font-display text-xl font-semibold text-gray-900">
                  Heading 5
                </h5>
                <CodeLabel>text-xl font-semibold</CodeLabel>
              </div>
              <div>
                <p className="text-lg text-gray-700">
                  Body Large - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <CodeLabel>text-lg text-gray-700</CodeLabel>
              </div>
              <div>
                <p className="text-base text-gray-700">
                  Body Regular - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <CodeLabel>text-base text-gray-700</CodeLabel>
              </div>
              <div>
                <p className="text-sm text-gray-600">
                  Body Small - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <CodeLabel>text-sm text-gray-600</CodeLabel>
              </div>
            </div>
          </div>
        </section>

        {/* Buttons */}
        <section className="mb-16">
          <SectionTitle>Buttons</SectionTitle>
          <div className="mt-8 space-y-8 rounded-xl border-2 border-gray-200 p-8 md:p-10">
            <div>
              <SubsectionTitle>Primary</SubsectionTitle>
              <div className="mt-4 flex flex-wrap items-center gap-4">
                <Button>Primary Button</Button>
                <Button showIcon>With Icon</Button>
                <Button size="sm">Small</Button>
              </div>
            </div>
            <div>
              <SubsectionTitle>Secondary (Outline)</SubsectionTitle>
              <div className="mt-4 flex flex-wrap items-center gap-4">
                <Button variant="secondary">Secondary Button</Button>
                <Button variant="secondary-gray">Gray Outline</Button>
              </div>
            </div>
            <div>
              <SubsectionTitle>Accent (Yellow/Amber)</SubsectionTitle>
              <div className="mt-4">
                <Button variant="accent">Accent Button</Button>
              </div>
            </div>
            <div>
              <SubsectionTitle>Disabled</SubsectionTitle>
              <div className="mt-4">
                <Button variant="disabled">Disabled Button</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Cards */}
        <section className="mb-16">
          <SectionTitle>Cards</SectionTitle>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <article className="card-basic">
              <SubsectionTitle>Basic Card</SubsectionTitle>
              <p className="mt-2 text-base text-gray-700">
                Standard card with border-2 border-gray-200
              </p>
              <CodeLabel>bg-white rounded-xl border-2 border-gray-200 p-6</CodeLabel>
            </article>
            <article className="card-highlighted">
              <SubsectionTitle>Highlighted Card</SubsectionTitle>
              <p className="mt-2 text-base text-gray-700">
                Amber gradient background for recommended items
              </p>
              <CodeLabel>bg-gradient-to-br from-amber-50 to-yellow-50</CodeLabel>
            </article>
            <article className="card-hover">
              <SubsectionTitle>Hover Card</SubsectionTitle>
              <p className="mt-2 text-base text-gray-700">
                Interactive card with hover effects
              </p>
              <CodeLabel>hover:border-[#1e3a8a] hover:shadow-lg</CodeLabel>
            </article>
            <article className="card-info">
              <SubsectionTitle>Info Card</SubsectionTitle>
              <p className="mt-2 text-base text-gray-700">
                Light blue background for informational content
              </p>
              <CodeLabel>bg-blue-50 border border-blue-200</CodeLabel>
            </article>
          </div>
        </section>

        {/* Icons */}
        <section className="mb-16">
          <SectionTitle>Icons (Lucide React)</SectionTitle>
          <div className="mt-8 rounded-xl border-2 border-gray-200 p-8">
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-8">
              {[
                { Icon: Mail, name: "Mail" },
                { Icon: FileText, name: "FileText" },
                { Icon: MessageSquare, name: "Message" },
                { Icon: Check, name: "Check" },
                { Icon: AlertTriangle, name: "Alert" },
                { Icon: Lightbulb, name: "Lightbulb" },
                { Icon: TrendingUp, name: "Trending" },
                { Icon: Clock, name: "Clock" }
              ].map(({ Icon, name }) => (
                <div key={name} className="flex flex-col items-center gap-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-brand-navy">
                    <Icon className="h-6 w-6" aria-hidden />
                  </div>
                  <span className="text-xs text-gray-600">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Badges */}
        <section className="mb-16">
          <SectionTitle>Badges &amp; Labels</SectionTitle>
          <div className="mt-8 space-y-8 rounded-xl border-2 border-gray-200 p-8 md:p-10">
            <div>
              <SubsectionTitle>Status Badges</SubsectionTitle>
              <div className="mt-4 flex flex-wrap gap-3">
                <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-800">
                  Completed
                </span>
                <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-medium text-amber-800">
                  Pending
                </span>
                <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-800">
                  B1+
                </span>
                <span className="rounded-full bg-amber-400 px-4 py-2 text-sm font-semibold text-brand-navy">
                  Recommended
                </span>
              </div>
            </div>
            <div>
              <SubsectionTitle>Task Labels</SubsectionTitle>
              <div className="mt-4 flex flex-wrap gap-3">
                <span className="rounded-md bg-brand-navy px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                  TASK 1
                </span>
                <span className="rounded-md bg-orange-500 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                  TASK 2
                </span>
                <span className="rounded-md bg-gray-700 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                  TASK 3
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Form Elements */}
        <section className="mb-16">
          <SectionTitle>Form Elements</SectionTitle>
          <div className="mt-8 max-w-2xl rounded-xl border-2 border-gray-200 p-8 md:p-10">
            <div className="space-y-6">
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-900">
                  Text Input
                </label>
                <input
                  type="text"
                  placeholder="Enter text..."
                  className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-base text-gray-900 outline-none transition focus:border-brand-navy"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-900">
                  Select Dropdown
                </label>
                <div className="relative">
                  <select className="w-full appearance-none rounded-xl border-2 border-gray-200 bg-white px-4 py-3 pr-10 text-base text-gray-900 outline-none transition focus:border-brand-navy">
                    <option>Choose an option</option>
                    <option>Task 1 - Email</option>
                    <option>Task 2 - Article</option>
                    <option>Task 3 - Opinion Essay</option>
                  </select>
                  <ChevronDown
                    className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500"
                    aria-hidden
                  />
                </div>
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-900">
                  Textarea
                </label>
                <textarea
                  rows={4}
                  placeholder="Enter text..."
                  className="w-full resize-y rounded-xl border-2 border-gray-200 px-4 py-3 text-base text-gray-900 outline-none transition focus:border-brand-navy"
                />
              </div>
              <label className="flex cursor-pointer items-center gap-3">
                <input
                  type="checkbox"
                  className="h-5 w-5 rounded border-2 border-gray-300 text-brand-navy focus:ring-brand-navy"
                />
                <span className="text-base text-gray-700">Checkbox Label</span>
              </label>
            </div>
          </div>
        </section>

        {/* Alert Boxes */}
        <section className="mb-8">
          <SectionTitle>Alert Boxes</SectionTitle>
          <div className="mt-8 space-y-4">
            <div className="flex gap-4 rounded-xl border border-green-200 bg-green-50 p-4">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-600" aria-hidden />
              <div>
                <p className="font-semibold text-green-900">Success!</p>
                <p className="mt-1 text-sm text-green-800">
                  Your progress has been saved successfully.
                </p>
              </div>
            </div>
            <div className="flex gap-4 rounded-xl border border-amber-200 bg-amber-50 p-4">
              <Lightbulb className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" aria-hidden />
              <div>
                <p className="font-semibold text-amber-900">Tip</p>
                <p className="mt-1 text-sm text-amber-800">
                  Try using more transition words to improve coherence and reach B2+.
                </p>
              </div>
            </div>
            <div className="flex gap-4 rounded-xl border border-blue-200 bg-blue-50 p-4">
              <Info className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" aria-hidden />
              <div>
                <p className="font-semibold text-blue-900">Info</p>
                <p className="mt-1 text-sm text-blue-800">
                  You have 1 practice session remaining this month.
                </p>
              </div>
            </div>
            <div className="flex gap-4 rounded-xl border border-red-200 bg-red-50 p-4">
              <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-600" aria-hidden />
              <div>
                <p className="font-semibold text-red-900">Error</p>
                <p className="mt-1 text-sm text-red-800">
                  Something went wrong. Please try again.
                </p>
              </div>
            </div>
          </div>
        </section>

        <footer className="border-t border-gray-200 pt-8 text-sm text-gray-500">
          <p>
            Synced from{" "}
            <a
              href="https://www.figma.com/design/5QlHCMknO7l6N1XMUU6zRp/%C3%89crivance?node-id=10-6006"
              className="text-brand-navy underline"
              target="_blank"
              rel="noreferrer"
            >
              Figma — Écrivance Style Guide (10:6006)
            </a>
          </p>
          <a href="/" className="mt-4 inline-flex items-center gap-1 text-brand-navy hover:underline">
            Back to home <ArrowRight className="h-4 w-4" aria-hidden />
          </a>
        </footer>
      </div>
    </div>
  );
}
