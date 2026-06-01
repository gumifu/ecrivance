"use client";

import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { easeOut } from "../../lib/landing-motion";
import FlowLayout from "./FlowLayout";
import OnboardingShell from "./OnboardingShell";
import { StickyFlowActions } from "./StickyFlowActions";
import { AnalyzingStep } from "./steps/AnalyzingStep";
import { FeedbackStep } from "./steps/FeedbackStep";
import { GoalStep } from "./steps/GoalStep";
import { IntroStep } from "./steps/IntroStep";
import { PreparingStep } from "./steps/PreparingStep";
import { ScoreStep } from "./steps/ScoreStep";
import { TimingStep } from "./steps/TimingStep";
import { WritingStep } from "./steps/WritingStep";

export type FlowStep =
  | "intro"
  | "goal"
  | "score"
  | "timing"
  | "preparing"
  | "writing"
  | "analyzing"
  | "feedback";

const stepOrder: FlowStep[] = ["intro", "goal", "score", "timing", "writing"];

const stepMotion = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
};

export default function DemoFlow() {
  const router = useRouter();
  const reduced = useReducedMotion();
  const [step, setStep] = useState<FlowStep>("intro");
  const [goal, setGoal] = useState<string | null>(null);
  const [score, setScore] = useState<string | null>(null);
  const [timing, setTiming] = useState<string | null>(null);
  const [meetsWordTarget, setMeetsWordTarget] = useState(false);

  const stepIndex = stepOrder.indexOf(step === "preparing" ? "timing" : step);

  const goTo = useCallback((next: FlowStep) => {
    if (next !== "writing") {
      setMeetsWordTarget(false);
    }
    setStep(next);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [step]);

  const finishPreparing = useCallback(() => goTo("writing"), [goTo]);
  const finishAnalyzing = useCallback(() => goTo("feedback"), [goTo]);

  if (step === "feedback") {
    return (
      <FlowLayout
        maxWidth="lg"
        actions={
          <StickyFlowActions
            showBack={false}
            onPrimary={() => router.push("/signup")}
            primaryLabel="Unlock full results"
            primaryVariant="primary"
          />
        }
      >
        <AnimatePresence mode="wait">
          <motion.div
            key="feedback"
            initial={reduced ? false : stepMotion.initial}
            animate={reduced ? undefined : stepMotion.animate}
            exit={reduced ? undefined : stepMotion.exit}
            transition={{ duration: 0.35, ease: easeOut }}
          >
            <FeedbackStep />
          </motion.div>
        </AnimatePresence>
      </FlowLayout>
    );
  }

  if (step === "analyzing") {
    return (
      <FlowLayout showFooter={false}>
        <AnimatePresence mode="wait">
          <motion.div
            key="analyzing"
            initial={reduced ? false : stepMotion.initial}
            animate={reduced ? undefined : stepMotion.animate}
            exit={reduced ? undefined : stepMotion.exit}
            transition={{ duration: 0.35, ease: easeOut }}
          >
            <AnalyzingStep onComplete={finishAnalyzing} />
          </motion.div>
        </AnimatePresence>
      </FlowLayout>
    );
  }

  if (step === "preparing") {
    return (
      <FlowLayout showFooter={false}>
        <AnimatePresence mode="wait">
          <motion.div
            key="preparing"
            initial={reduced ? false : stepMotion.initial}
            animate={reduced ? undefined : stepMotion.animate}
            exit={reduced ? undefined : stepMotion.exit}
            transition={{ duration: 0.35, ease: easeOut }}
          >
            <PreparingStep onComplete={finishPreparing} />
          </motion.div>
        </AnimatePresence>
      </FlowLayout>
    );
  }

  if (step === "writing") {
    return (
      <FlowLayout
        maxWidth="lg"
        actions={
          <StickyFlowActions
            onBack={() => goTo("timing")}
            onPrimary={() => goTo("analyzing")}
            primaryLabel="Submit"
            primaryDisabled={!meetsWordTarget}
          />
        }
      >
        <AnimatePresence mode="wait">
          <motion.div
            key="writing"
            initial={reduced ? false : stepMotion.initial}
            animate={reduced ? undefined : stepMotion.animate}
            exit={reduced ? undefined : stepMotion.exit}
            transition={{ duration: 0.35, ease: easeOut }}
          >
            <WritingStep onMeetsTargetChange={setMeetsWordTarget} />
          </motion.div>
        </AnimatePresence>
      </FlowLayout>
    );
  }

  const stickyActions = (
    <StickyFlowActions
      showBack={step !== "intro"}
      onBack={
        step === "goal"
          ? () => goTo("intro")
          : step === "score"
          ? () => goTo("goal")
          : step === "timing"
            ? () => goTo("score")
            : undefined
      }
      onPrimary={() => {
        if (step === "intro") goTo("goal");
        else if (step === "goal") goTo("score");
        else if (step === "score") goTo("timing");
        else goTo("preparing");
      }}
      primaryLabel={step === "timing" ? "Start Writing Task 1" : "Continue"}
      primaryLabelShort={step === "timing" ? "Start Task 1" : undefined}
      primaryVariant={step === "timing" ? "accent" : "primary"}
      primaryDisabled={
        step === "goal" ? !goal : step === "score" ? !score : step === "timing" ? !timing : false
      }
    />
  );

  return (
    <OnboardingShell stepIndex={stepIndex} totalSteps={4} actions={stickyActions}>
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={reduced ? false : stepMotion.initial}
          animate={reduced ? undefined : stepMotion.animate}
          exit={reduced ? undefined : stepMotion.exit}
          transition={{ duration: 0.35, ease: easeOut }}
        >
          {step === "intro" && <IntroStep />}
          {step === "goal" && <GoalStep selected={goal} onSelect={setGoal} />}
          {step === "score" && <ScoreStep selected={score} onSelect={setScore} />}
          {step === "timing" && <TimingStep selected={timing} onSelect={setTiming} />}
        </motion.div>
      </AnimatePresence>
    </OnboardingShell>
  );
}
