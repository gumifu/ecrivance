const structure = [
  { step: "1. Greeting", hint: "Cher Thomas, / Salut Thomas," },
  { step: "2. Reason", hint: "Explain why the dates are changing" },
  { step: "3. New dates", hint: "Propose specific dates" },
  { step: "4. Request", hint: "Ask if the new dates work" },
  { step: "5. Closing", hint: "Polite sign-off + your name" }
];

const checklist = [
  "Reason for the change is explained",
  "New dates are proposed",
  "A question is asked to the friend",
  "Closing formula is present"
];

const usefulWords =
  "malheureusement · je suis désolé(e) · j'espère que · pourrais-tu · en revanche · cela te convient";

export function WritingGuidePanel() {
  return (
    <div className="mt-5 border-t border-gray-200 pt-5">
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
            Recommended structure
          </p>
          <ul className="mt-3 space-y-2 text-sm text-gray-700">
            {structure.map(({ step, hint }) => (
              <li key={step} className="flex gap-2">
                <span className="w-24 shrink-0 font-semibold text-gray-800">{step}</span>
                <span className="text-gray-600">{hint}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-gray-500">
            <span className="font-semibold text-gray-700">Tone:</span> Informal — use
            &quot;tu&quot; throughout
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
            Checklist
          </p>
          <ul className="mt-3 space-y-2">
            {checklist.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                <span
                  className="mt-0.5 h-3.5 w-3.5 shrink-0 rounded border border-gray-300 bg-white"
                  aria-hidden
                />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-gray-500">
            Useful words
          </p>
          <p className="mt-2 text-sm leading-relaxed text-gray-600">{usefulWords}</p>
        </div>
      </div>
    </div>
  );
}
