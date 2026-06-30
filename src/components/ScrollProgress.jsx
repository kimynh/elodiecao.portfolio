import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[200] origin-left"
      style={{
        scaleX,
        height: "2px",
        background: "linear-gradient(90deg, #d6568c 0%, #f472b6 55%, #fda4af 100%)",
      }}
    />
  );
}
