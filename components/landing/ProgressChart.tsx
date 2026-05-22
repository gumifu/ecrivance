"use client";

import { motion, useReducedMotion } from "motion/react";
import { easeOut, motionTransition, scrollViewport } from "../../lib/landing-motion";

const defaultData = [
  { week: "W1", score: 55 },
  { week: "W2", score: 62 },
  { week: "W3", score: 68 },
  { week: "W4", score: 75 },
  { week: "W5", score: 78 },
  { week: "W6", score: 82 }
];

type ProgressChartProps = {
  data?: typeof defaultData;
  height?: number;
};

export function ProgressChart({ data = defaultData, height = 140 }: ProgressChartProps) {
  const reduced = useReducedMotion();
  const padding = { top: 12, right: 12, bottom: 28, left: 36 };
  const width = 520;
  const chartHeight = height - padding.top - padding.bottom;
  const minScore = 40;
  const maxScore = 100;

  const points = data.map((d, i) => {
    const x =
      padding.left +
      (i / (data.length - 1)) * (width - padding.left - padding.right);
    const y =
      padding.top +
      chartHeight -
      ((d.score - minScore) / (maxScore - minScore)) * chartHeight;
    return { x, y, ...d };
  });

  const linePath = points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ");

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className="w-full"
      role="img"
      aria-label="Score progress over 6 weeks"
    >
      {[40, 55, 70, 85, 100].map((tick) => {
        const y =
          padding.top +
          chartHeight -
          ((tick - minScore) / (maxScore - minScore)) * chartHeight;
        return (
          <g key={tick}>
            <line
              x1={padding.left}
              y1={y}
              x2={width - padding.right}
              y2={y}
              stroke="#f3f4f6"
              strokeWidth={1}
            />
            <text x={8} y={y + 4} fill="#9ca3af" fontSize={11}>
              {tick}
            </text>
          </g>
        );
      })}
      <motion.path
        d={linePath}
        fill="none"
        stroke="#1e3a8a"
        strokeWidth={2.5}
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0.6 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={scrollViewport}
        transition={motionTransition(reduced ?? false, {
          duration: 1.2,
          ease: easeOut
        })}
      />
      {points.map((p, i) => (
        <motion.circle
          key={p.week}
          cx={p.x}
          cy={p.y}
          r={4}
          fill="#1e3a8a"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={scrollViewport}
          transition={motionTransition(reduced ?? false, {
            delay: 0.35 + i * 0.08,
            duration: 0.35,
            ease: easeOut
          })}
        />
      ))}
      {points.map((p) => (
        <text
          key={`${p.week}-label`}
          x={p.x}
          y={height - 6}
          textAnchor="middle"
          fill="#9ca3af"
          fontSize={11}
        >
          {p.week}
        </text>
      ))}
    </svg>
  );
}
