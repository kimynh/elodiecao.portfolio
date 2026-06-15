import React from "react";
import { motion } from "framer-motion";

const particles = [
  // Bord gauche
  { x: "1.8%",  y: "10%",  label: "</>",    size: 11, color: "rgba(99, 102, 241, 0.55)",  duration: 5.5, delay: 0 },
  { x: "1.5%",  y: "28%",  label: "{}",     size: 14, color: "rgba(245, 158, 11, 0.55)",  duration: 7,   delay: 1.5 },
  { x: "2.2%",  y: "46%",  label: "=>",     size: 12, color: "rgba(52, 211, 153, 0.55)",  duration: 6.2, delay: 3 },
  { x: "1.8%",  y: "64%",  label: "//",     size: 13, color: "rgba(148, 163, 184, 0.6)",  duration: 8,   delay: 0.8 },
  { x: "2.0%",  y: "82%",  label: "&&",     size: 12, color: "rgba(236, 72, 153, 0.45)", duration: 5.8, delay: 2.5 },
  // Bord droit
  { x: "96.2%", y: "16%",  label: "[ ]",    size: 12, color: "rgba(56, 189, 248, 0.55)",  duration: 6.5, delay: 1 },
  { x: "96.5%", y: "34%",  label: "fn()",   size: 10, color: "rgba(99, 102, 241, 0.5)",   duration: 7.8, delay: 2 },
  { x: "96.0%", y: "54%",  label: "++",     size: 14, color: "rgba(251, 191, 36, 0.6)",   duration: 5.5, delay: 3.5 },
  { x: "96.8%", y: "72%",  label: "01",     size: 12, color: "rgba(52, 211, 153, 0.5)",   duration: 8.5, delay: 0.4 },
  { x: "96.4%", y: "89%",  label: "< >",    size: 11, color: "rgba(236, 72, 153, 0.45)", duration: 6.8, delay: 1.8 },
  // Haut / bas
  { x: "14%",   y: "2%",   label: "const",  size: 10, color: "rgba(99, 102, 241, 0.5)",   duration: 6,   delay: 1.2 },
  { x: "82%",   y: "3.5%", label: "===",    size: 11, color: "rgba(245, 158, 11, 0.55)",  duration: 7.2, delay: 2.8 },
  { x: "47%",   y: "96%",  label: "#",      size: 15, color: "rgba(56, 189, 248, 0.5)",   duration: 5.5, delay: 1.8 },
  { x: "68%",   y: "95%",  label: "( )",    size: 13, color: "rgba(52, 211, 153, 0.5)",   duration: 7,   delay: 3.2 },
];

export default function AmbientParticles() {
  return (
    <div
      className="pointer-events-none fixed inset-0 hidden md:block"
      style={{ zIndex: 1 }}
      aria-hidden="true"
    >
      {particles.map((p, i) => (
        <motion.span
          key={i}
          style={{
            position: "absolute",
            left: p.x,
            top: p.y,
            fontSize: `${p.size}px`,
            fontFamily: "'Fira Code', 'Cascadia Code', 'JetBrains Mono', monospace",
            fontWeight: 600,
            color: p.color,
            lineHeight: 1,
            userSelect: "none",
            letterSpacing: "0.04em",
          }}
          animate={{
            opacity: [0.25, 0.75, 0.25],
            scale: [0.85, 1.1, 0.85],
            y: [0, -6, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.delay,
          }}
        >
          {p.label}
        </motion.span>
      ))}
    </div>
  );
}
