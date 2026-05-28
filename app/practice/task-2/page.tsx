import type { Metadata } from "next";
import { TrainingModeView } from "../../../components/flow/TrainingModeView";
import { getTrainingTask } from "../../../lib/training-tasks";
import { noIndexMetadata } from "../../../lib/seo";

export const metadata: Metadata = {
  title: "Task 2 Practice - Écrivance",
  description: "TCF Canada Task 2 article and letter writing practice.",
  ...noIndexMetadata
};

export default function PracticeTask2Page() {
  return <TrainingModeView task={getTrainingTask(2)} />;
}
