import type { Transition, Variants } from "motion/react";

export const easeOut = [0.22, 1, 0.36, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: easeOut }
  }
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.5, ease: easeOut }
  }
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -32 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: easeOut }
  }
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 32 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: easeOut }
  }
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: easeOut }
  }
};

export function stagger(delayChildren = 0.08, delay = 0): Variants {
  return {
    hidden: {},
    show: {
      transition: { staggerChildren: delayChildren, delay }
    }
  };
}

export const scrollViewport = {
  once: true,
  margin: "-80px" as const,
  amount: 0.2 as const
};

export function motionTransition(
  reduced: boolean,
  transition: Transition
): Transition {
  if (!reduced) return transition;
  return { duration: 0.01 };
}
