import { motion } from "motion/react";
import { fadeUp } from "../../lib/landing-motion";
import { useMobileReducedMotion } from "../../lib/use-mobile-reduced-motion";

type GlassCardProps = {
  children: React.ReactNode;
  className?: string;
  animate?: boolean;
};

export function GlassCard({ children, className = "", animate = false }: GlassCardProps) {
  const reduced = useMobileReducedMotion();

  const card = (
    <div
      className={`rounded-2xl border border-white/80 bg-white/70 shadow-card backdrop-blur-md ${className}`}
    >
      {children}
    </div>
  );

  if (!animate || reduced) return card;

  return (
    <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-40px" }} variants={fadeUp}>
      {card}
    </motion.div>
  );
}
