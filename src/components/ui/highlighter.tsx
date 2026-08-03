"use client";

import { useLayoutEffect, useRef } from "react";
import type React from "react";
import { useInView, motion } from "motion/react";
import { annotate } from "rough-notation";
import { type RoughAnnotation } from "rough-notation/lib/model";

type AnnotationAction =
  | "highlight"
  | "underline"
  | "box"
  | "circle"
  | "strike-through"
  | "crossed-off"
  | "bracket"
  | "custom-highlight";

interface HighlighterProps {
  children: React.ReactNode;
  action?: AnnotationAction;
  color?: string;
  strokeWidth?: number;
  animationDuration?: number;
  iterations?: number;
  padding?: number;
  multiline?: boolean;
  isView?: boolean;
}

export function Highlighter({
  children,
  action = "highlight",
  color = "#ffd1dc",
  strokeWidth = 1.5,
  animationDuration = 600,
  iterations = 2,
  padding = 2,
  multiline = true,
  isView = false,
}: HighlighterProps) {
  const elementRef = useRef<HTMLSpanElement>(null);

  const isInView = useInView(elementRef, {
    once: true,
    margin: "-10%",
  });

  // If isView is false, always show. If isView is true, wait for inView
  const shouldShow = !isView || isInView;

  useLayoutEffect(() => {
    const element = elementRef.current;
    let annotation: RoughAnnotation | null = null;

    if (shouldShow && element && action !== "custom-highlight") {
      const annotationConfig = {
        type: action,
        color,
        strokeWidth,
        animationDuration,
        iterations,
        padding,
        multiline,
      };

      const currentAnnotation = annotate(element, annotationConfig);
      annotation = currentAnnotation;
      currentAnnotation.show();
    }
    return () => {
      annotation?.remove();
    };
  }, [
    shouldShow,
    action,
    color,
    strokeWidth,
    animationDuration,
    iterations,
    padding,
    multiline,
  ]);

  return (
    <span ref={elementRef} className="relative inline-block bg-transparent">
      {children}

      {action === "custom-highlight" && shouldShow && (
        <svg
          className="absolute left-0 w-full -bottom-2 -z-10 overflow-visible"
          viewBox="0 0 117 22"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M2.50024 19.501C9.00024 15.001 14.0002 12.001 24.0002 9.00098C39.086 4.47525 49.0041 7.20593 82.5002 10C94.5002 11.001 105 10 114.5 2.5"
            fill="none"
            stroke={color}
            strokeWidth={5}
            strokeLinecap="round"
            initial={{ pathLength: 0, scale: 1.2 }}
            animate={{ pathLength: 1, scale: 1.2 }}
            transition={{
              duration: animationDuration / 1000,
              ease: "easeOut",
            }}
          />
        </svg>
      )}
    </span>
  );
}
