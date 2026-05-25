export const ANALYZING_CRITERIA = [
  { id: "grammar", label: "Grammar & verb conjugation" },
  { id: "vocabulary", label: "Vocabulary range" },
  { id: "coherence", label: "Coherence & flow" },
  { id: "task", label: "Task completion" }
] as const;

export const FEEDBACK_SCORES = [
  { label: "Overall Score", value: 75, color: "#002395" },
  { label: "Task Completion", value: 85, color: "#22c55e" },
  { label: "Vocabulary", value: 70, color: "#002395" },
  { label: "Coherence", value: 68, color: "#002395" }
] as const;

export const FULL_WRITING_CORRECTIONS = [
  {
    id: "1",
    original: "je dois modifier",
    better: "je suis contraint de modifier",
    note: "More formal register"
  },
  {
    id: "2",
    original: "comme nous l'avions prévu",
    better: "tel que prévu initialement",
    note: "Stronger cohesion"
  },
  {
    id: "3",
    original: "je veux vous dire",
    better: "je souhaiterais vous informer",
    note: "More appropriate formal tone"
  },
  {
    id: "4",
    original: "mon horaire a changé",
    better: "mon emploi du temps a été modifié",
    note: "More precise vocabulary"
  },
  {
    id: "5",
    original: "je ne peux pas venir",
    better: "je ne serai pas en mesure de me présenter",
    note: "Formal register for an email"
  },
  {
    id: "6",
    original: "parce que j'ai un rendez-vous",
    better: "en raison d'un rendez-vous important",
    note: "Concise causal phrase"
  },
  {
    id: "7",
    original: "c'est un problème",
    better: "cela représente une difficulté",
    note: "More polished phrasing"
  },
  {
    id: "8",
    original: "je suis désolé",
    better: "je vous prie de m'excuser",
    note: "Better fit for formal apology"
  },
  {
    id: "9",
    original: "si c'est possible",
    better: "si cela vous convient",
    note: "More natural request"
  },
  {
    id: "10",
    original: "un autre jour",
    better: "une autre date",
    note: "Better collocation"
  },
  {
    id: "11",
    original: "je peux aussi",
    better: "je pourrais également",
    note: "Conditional form softens the request"
  },
  {
    id: "12",
    original: "merci beaucoup",
    better: "je vous remercie par avance",
    note: "Professional closing phrase"
  },
  {
    id: "13",
    original: "j'attends votre réponse",
    better: "je reste dans l'attente de votre réponse",
    note: "More idiomatic formal closing"
  },
  {
    id: "14",
    original: "bonne journée",
    better: "veuillez agréer mes salutations distinguées",
    note: "Appropriate formal sign-off"
  }
] as const;

export const WRITING_CORRECTIONS = FULL_WRITING_CORRECTIONS.slice(0, 2);

export const LOCKED_ANALYSIS_ITEMS = [
  "Full grammar correction (14 issues)",
  "Vocabulary improvement suggestions",
  "Personalised study recommendations",
  "Score history & progress tracking",
  "NCLC benchmark comparison"
] as const;

export const ANALYZING_TICK_MS = 1000;
export const ANALYZING_DURATION_MS = ANALYZING_CRITERIA.length * ANALYZING_TICK_MS;
