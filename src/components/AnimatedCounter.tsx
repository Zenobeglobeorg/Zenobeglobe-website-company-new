import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedCounterProps {
  value: string; // e.g. "150+", "98%", "24/7", "10+"
  duration?: number;
  className?: string;
}

/**
 * Affiche une statistique avec un effet de "comptage" progressif dès qu'elle
 * entre dans le viewport, au lieu d'un simple scale-in statique.
 * Gère les suffixes (+, %, ★) et les valeurs non numériques (24/7) en les
 * laissant intactes après le compte final.
 */
export default function AnimatedCounter({ value, duration = 1.4, className = "" }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState("0");

  // Extrait la partie numérique et le suffixe (+, %, etc.)
  const match = value.match(/^(\d+)(.*)$/);
  const numericTarget = match ? parseInt(match[1], 10) : null;
  const suffix = match ? match[2] : "";

  useEffect(() => {
    if (!isInView) return;

    // Valeurs non purement numériques (ex: "24/7") : pas de compteur, affichage direct
    if (numericTarget === null) {
      setDisplayValue(value);
      return;
    }

    let start: number | null = null;
    const step = (timestamp: number) => {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / (duration * 1000), 1);
      const current = Math.floor(progress * numericTarget);
      setDisplayValue(`${current}${suffix}`);
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setDisplayValue(value);
      }
    };
    requestAnimationFrame(step);
  }, [isInView, numericTarget, suffix, value, duration]);

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5 }}
    >
      {isInView ? displayValue : "0"}
    </motion.span>
  );
}
