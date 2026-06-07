import React from "react";
import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <motion.div
      initial={{ opacity: 0, scaleX: 0.6 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="mx-auto flex max-w-6xl items-center gap-4 px-6"
    >
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-stone-300/60 to-stone-200/40" />
      <div className="flex items-center gap-1.5">
        <span className="h-1 w-1 rounded-full bg-stone-300" />
        <span className="h-1.5 w-1.5 rounded-full bg-stone-400/60" />
        <span className="h-1 w-1 rounded-full bg-stone-300" />
      </div>
      <div className="h-px flex-1 bg-gradient-to-l from-transparent via-stone-300/60 to-stone-200/40" />
    </motion.div>
  );
}
