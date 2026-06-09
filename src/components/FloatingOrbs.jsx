import React from "react";
import { motion } from "framer-motion";

const orbs = [
  {
    style: { left: "-120px", top: "5vh", width: 520, height: 520 },
    color: "rgba(79, 70, 229, 0.08)",
    animate: { y: [-25, 25, -25], x: [-10, 10, -10] },
    duration: 20, delay: 0,
  },
  {
    style: { right: "-140px", top: "22vh", width: 460, height: 460 },
    color: "rgba(245, 158, 11, 0.06)",
    animate: { y: [20, -20, 20], x: [10, -10, 10] },
    duration: 24, delay: 4,
  },
  {
    style: { left: "-80px", top: "52vh", width: 380, height: 380 },
    color: "rgba(79, 70, 229, 0.05)",
    animate: { y: [-18, 18, -18], x: [-8, 8, -8] },
    duration: 17, delay: 7,
  },
  {
    style: { right: "-110px", top: "66vh", width: 440, height: 440 },
    color: "rgba(236, 72, 153, 0.04)",
    animate: { y: [22, -22, 22], x: [12, -12, 12] },
    duration: 22, delay: 2,
  },
  {
    style: { left: "35vw", top: "-70px", width: 340, height: 340 },
    color: "rgba(117, 107, 95, 0.05)",
    animate: { y: [-12, 12, -12], x: [-6, 6, -6] },
    duration: 15, delay: 10,
  },
];

export default function FloatingOrbs() {
  return (
    <div
      className="pointer-events-none fixed inset-0 overflow-hidden"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    >
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          style={{
            position: "absolute",
            ...orb.style,
            borderRadius: "50%",
            background: `radial-gradient(circle at center, ${orb.color}, transparent 70%)`,
          }}
          animate={orb.animate}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: orb.delay,
          }}
        />
      ))}
    </div>
  );
}
