import type { Metadata } from "next";
import { TrainingModeView } from "../../../components/flow/TrainingModeView";
import { getTrainingTask } from "../../../lib/training-tasks";
import { noIndexMetadata } from "../../../lib/seo";

export const metadata: Metadata = {
  title: "Task 3 Practice - Écrivance",
  description: "TCF Canada Task 3 argumentative writing practice.",
  ...noIndexMetadata
};

export default function PracticeTask3Page() {
  return <TrainingModeView task={getTrainingTask(3)} />;
}
