"use client";

import type { MotionProps } from "motion/react";
import { motion } from "motion/react";
import type { CSSProperties } from "react";
import { useEffect, useMemo, useRef, useState } from "react";

type AnimatedValue = string | number;
type AnimationSnapshot = Record<string, AnimatedValue>;
type AnimationKeyframes = Record<string, AnimatedValue[]>;
type AnimateBy = "words" | "characters";
type Direction = "top" | "bottom";
type Segment = {
  key: string;
  value: string;
};

type BlurTextProps = {
  text?: string;
  delay?: number;
  className?: string;
  animateBy?: AnimateBy;
  direction?: Direction;
  threshold?: number;
  rootMargin?: string;
  animationFrom?: AnimationSnapshot;
  animationTo?: AnimationSnapshot[];
  easing?: (value: number) => number;
  onAnimationComplete?: () => void;
  stepDuration?: number;
  style?: CSSProperties;
};

function buildKeyframes(
  from: AnimationSnapshot,
  steps: AnimationSnapshot[],
): AnimationKeyframes {
  const keys = new Set([
    ...Object.keys(from),
    ...steps.flatMap((step) => Object.keys(step)),
  ]);

  const keyframes: AnimationKeyframes = {};
  keys.forEach((key) => {
    const fallback = from[key] ?? steps.find((step) => key in step)?.[key] ?? 0;
    keyframes[key] = [
      from[key] ?? fallback,
      ...steps.map((step) => step[key] ?? fallback),
    ];
  });

  return keyframes;
}

function buildSegments(text: string, animateBy: AnimateBy): Segment[] {
  const counters = new Map<string, number>();
  const values = animateBy === "words" ? text.split(" ") : text.split("");

  return values.map((value) => {
    const count = counters.get(value) ?? 0;
    counters.set(value, count + 1);

    return {
      key: `${animateBy}-${value}-${count}`,
      value,
    };
  });
}

const BlurText = ({
  text = "",
  delay = 200,
  className = "",
  animateBy = "words",
  direction = "top",
  threshold = 0.1,
  rootMargin = "0px",
  animationFrom,
  animationTo,
  easing = (value) => value,
  onAnimationComplete,
  stepDuration = 0.35,
  style,
}: BlurTextProps) => {
  const elements = useMemo(
    () => buildSegments(text, animateBy),
    [text, animateBy],
  );
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setInView(true);
          observer.unobserve(element);
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const defaultFrom = useMemo<AnimationSnapshot>(
    () =>
      direction === "top"
        ? { filter: "blur(10px)", opacity: 0, y: -50 }
        : { filter: "blur(10px)", opacity: 0, y: 50 },
    [direction],
  );

  const defaultTo = useMemo<AnimationSnapshot[]>(
    () => [
      {
        filter: "blur(5px)",
        opacity: 0.5,
        y: direction === "top" ? 5 : -5,
      },
      { filter: "blur(0px)", opacity: 1, y: 0 },
    ],
    [direction],
  );

  const fromSnapshot = animationFrom ?? defaultFrom;
  const toSnapshots = animationTo ?? defaultTo;
  const animateKeyframes = buildKeyframes(
    fromSnapshot,
    toSnapshots,
  ) as MotionProps["animate"];
  const initialSnapshot = fromSnapshot as MotionProps["initial"];
  const stepCount = toSnapshots.length + 1;
  const totalDuration = stepDuration * (stepCount - 1);
  const times = Array.from({ length: stepCount }, (_, index) =>
    stepCount === 1 ? 0 : index / (stepCount - 1),
  );

  return (
    <p
      className={className}
      ref={ref}
      style={{ display: "flex", flexWrap: "wrap", ...style }}
    >
      {elements.map((segment, index) => {
        const transition = {
          delay: (index * delay) / 1000,
          duration: totalDuration,
          ease: easing,
          times,
        } satisfies MotionProps["transition"];

        return (
          <motion.span
            animate={inView ? animateKeyframes : initialSnapshot}
            className="inline-block will-change-[transform,filter,opacity]"
            initial={initialSnapshot}
            key={segment.key}
            onAnimationComplete={
              index === elements.length - 1 ? onAnimationComplete : undefined
            }
            transition={transition}
          >
            {segment.value === " " ? "\u00A0" : segment.value}
            {animateBy === "words" && index < elements.length - 1 && "\u00A0"}
          </motion.span>
        );
      })}
    </p>
  );
};

export default BlurText;
