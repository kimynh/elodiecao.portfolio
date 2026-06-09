import React from "react";
import { motion } from "framer-motion";

const particles = [
  // Bord gauche
  { x: "2%",    y: "10%",  scale: 0.8, duration: 5.5, delay: 0 },
  { x: "1.5%",  y: "28%",  scale: 1.1, duration: 7,   delay: 1.5 },
  { x: "2.5%",  y: "46%",  scale: 0.7, duration: 6.2, delay: 3 },
  { x: "1.8%",  y: "64%",  scale: 0.9, duration: 8,   delay: 0.8 },
  { x: "2.2%",  y: "82%",  scale: 0.6, duration: 5.8, delay: 2.5 },
  // Bord droit
  { x: "97%",   y: "16%",  scale: 0.9, duration: 6.5, delay: 1 },
  { x: "96.5%", y: "34%",  scale: 1,   duration: 7.8, delay: 2 },
  { x: "97.5%", y: "54%",  scale: 0.7, duration: 5.5, delay: 3.5 },
  { x: "96%",   y: "72%",  scale: 0.8, duration: 8.5, delay: 0.4 },
  { x: "97%",   y: "90%",  scale: 1,   duration: 6.8, delay: 1.8 },
  // Haut / bas
  { x: "14%",   y: "2.5%", scale: 0.8, duration: 6,   delay: 1.2 },
  { x: "83%",   y: "4%",   scale: 0.7, duration: 7.2, delay: 2.8 },
  { x: "47%",   y: "97%",  scale: 0.9, duration: 5.5, delay: 1.8 },
  { x: "68%",   y: "96%",  scale: 0.7, duration: 7,   delay: 3.2 },
];

export default function AmbientParticles() {
  return (
    <div
      className="pointer-events-none fixed inset-0 hidden lg:block"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    >
      {particles.map((p, i) => (
        <motion.span
          key={i}
          style={{
            position: "absolute",
            left: p.x,
            top: p.y,
            fontSize: `${p.scale * 11}px`,
            color: "rgba(79, 70, 229, 0.22)",
            lineHeight: 1,
            userSelect: "none",
          }}
          animate={{
            opacity: [0.12, 0.5, 0.12],
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
