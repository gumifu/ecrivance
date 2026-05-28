export type TrainingTaskId = 2 | 3;

export type TrainingTaskConfig = {
  id: TrainingTaskId;
  badge: string;
  taskSelectLabel: string;
  themeTitle: string;
  themePrompt: string;
  documents?: { title: string; body: string }[];
  wordMin: number;
  wordMax: number;
  structure: string[];
  editorTitle: string;
  editorLevel: string;
  editorTone: "green" | "sand";
  placeholder: string;
};

export const TRAINING_TASKS: Record<TrainingTaskId, TrainingTaskConfig> = {
  2: {
    id: 2,
    badge: "Task 2 B1-B2",
    taskSelectLabel: "Task 2 - Article/Letter (120-150 words)",
    themeTitle: "Theme / Title",
    themePrompt:
      "Vous avez récemment participé à une séance de fitness dans un centre sportif de votre région. Rédigez un article sur votre blog pour relater votre expérience et exprimer votre avis sur ce centre.",
    wordMin: 120,
    wordMax: 150,
    structure: [
      "Strong title",
      "Short engaging introduction",
      "Detailed personal experience",
      "Recommendations / action-oriented conclusion"
    ],
    editorTitle: "Task 2 Article / Letter",
    editorLevel: "B1-B2",
    editorTone: "green",
    placeholder: "Write your text here..."
  },
  3: {
    id: 3,
    badge: "Task 3 B2-C1",
    taskSelectLabel: "Task 3 - Argumentative (120-180 words)",
    themeTitle: "Theme / Title",
    themePrompt: "Repas livrés au bureau : avantages et limites",
    documents: [
      {
        title: "Document 1",
        body: "De plus en plus d'entreprises proposent des plateaux-repas livrés directement au bureau. Pour les salariés, c'est un gain de temps précieux : plus besoin de sortir chercher un sandwich ou d'attendre longtemps à la cantine. Les équipes peuvent déjeuner ensemble sans quitter le bâtiment, ce qui favorise parfois la convivialité."
      },
      {
        title: "Document 2",
        body: "Pourtant, cette pratique soulève des questions. La qualité nutritionnelle n'est pas toujours au rendez-vous, et les emballages jetables augmentent les déchets. Certains employés regrettent aussi de ne plus faire une vraie pause à l'extérieur, indispensable pour se déconnecter du travail."
      }
    ],
    wordMin: 120,
    wordMax: 180,
    structure: [
      "Title",
      "Part 1: Summary of both documents",
      "Part 2: Argued position with examples"
    ],
    editorTitle: "Task 3 Argumentative text",
    editorLevel: "B2-C1",
    editorTone: "sand",
    placeholder: "Write your text here..."
  }
};

export function getTrainingTask(id: TrainingTaskId): TrainingTaskConfig {
  return TRAINING_TASKS[id];
}
