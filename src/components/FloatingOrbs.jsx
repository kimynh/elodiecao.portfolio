import React from "react";
import { motion } from "framer-motion";

const orbs = [
  {
    style: { left: "-80px", top: "4vh", width: 560, height: 560 },
    color: "rgba(79, 70, 229, 0.18)",
    animate: { y: [-25, 25, -25], x: [-10, 10, -10] },
    duration: 20, delay: 0,
  },
  {
    style: { right: "-90px", top: "18vh", width: 500, height: 500 },
    color: "rgba(245, 158, 11, 0.13)",
    animate: { y: [20, -20, 20], x: [10, -10, 10] },
    duration: 24, delay: 4,
  },
  {
    style: { left: "-60px", top: "50vh", width: 420, height: 420 },
    color: "rgba(79, 70, 229, 0.14)",
    animate: { y: [-18, 18, -18], x: [-8, 8, -8] },
    duration: 17, delay: 7,
  },
  {
    style: { right: "-70px", top: "64vh", width: 480, height: 480 },
    color: "rgba(236, 72, 153, 0.11)",
    animate: { y: [22, -22, 22], x: [12, -12, 12] },
    duration: 22, delay: 2,
  },
  {
    style: { left: "33vw", top: "-50px", width: 380, height: 380 },
    color: "rgba(117, 107, 95, 0.12)",
    animate: { y: [-12, 12, -12], x: [-6, 6, -6] },
    duration: 15, delay: 10,
  },
];

export default function FloatingOrbs() {
  return (
    <div
      className="pointer-events-none fixed inset-0 overflow-hidden"
      style={{ zIndex: 1 }}
      aria-hidden="true"
    >
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          style={{
            position: "absolute",
            ...orb.style,
            borderRadius: "50%",
            background: `radial-gradient(circle at center, ${orb.color}, transparent 65%)`,
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
