import React from "react";
import { motion } from "framer-motion";

const particles = [
  // Bord gauche
  { x: "2%",    y: "10%",  size: 18, duration: 5.5, delay: 0 },
  { x: "1.8%",  y: "28%",  size: 14, duration: 7,   delay: 1.5 },
  { x: "2.5%",  y: "46%",  size: 20, duration: 6.2, delay: 3 },
  { x: "1.5%",  y: "64%",  size: 16, duration: 8,   delay: 0.8 },
  { x: "2.2%",  y: "82%",  size: 14, duration: 5.8, delay: 2.5 },
  // Bord droit
  { x: "96.5%", y: "16%",  size: 18, duration: 6.5, delay: 1 },
  { x: "97%",   y: "34%",  size: 16, duration: 7.8, delay: 2 },
  { x: "96%",   y: "54%",  size: 20, duration: 5.5, delay: 3.5 },
  { x: "97.2%", y: "72%",  size: 14, duration: 8.5, delay: 0.4 },
  { x: "96.8%", y: "89%",  size: 18, duration: 6.8, delay: 1.8 },
  // Haut / bas
  { x: "14%",   y: "2%",   size: 16, duration: 6,   delay: 1.2 },
  { x: "82%",   y: "3.5%", size: 14, duration: 7.2, delay: 2.8 },
  { x: "47%",   y: "96%",  size: 16, duration: 5.5, delay: 1.8 },
  { x: "68%",   y: "95%",  size: 14, duration: 7,   delay: 3.2 },
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
            color: "rgba(79, 70, 229, 0.45)",
            lineHeight: 1,
            userSelect: "none",
          }}
          animate={{
            opacity: [0.2, 0.7, 0.2],
            scale: [0.7, 1.2, 0.7],
            rotate: [0, 45, 90, 45, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.delay,
          }}
        >
          ✦
        </motion.span>
      ))}
    </div>
  );
}
