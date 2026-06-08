import React from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="section-shell">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="soft-card p-8 md:p-10"
      >
        <span className="eyebrow">Contact</span>
        <h2 className="section-title mt-5">Discutons de vos projets, de vos équipes ou d’une collaboration.</h2>
        <p className="section-copy">
          Je suis ouverte aux échanges autour des systèmes d’information, du développement et de toute opportunité future.
        </p>
        <div className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-900 px-5 py-4 font-mono text-sm">
          <div className="mb-3 flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
            <span className="ml-3 text-xs text-zinc-500">terminal</span>
          </div>
          <p className="text-zinc-300">
            <span className="text-green-400">elodie</span>
            <span className="text-zinc-500">@portfolio</span>
            <span className="text-zinc-400">:~$ </span>
            <span className="text-zinc-200">git log --oneline</span>
          </p>
          <p className="mt-1 text-zinc-500">
            <span className="text-green-500">✓</span> alternance trouvée — Hyvilo, depuis mai 2026
          </p>
        </div>
        <div className="mt-6 flex flex-col gap-4">
          <a
            href="mailto:elodiecao05@gmail.com"
            className="flex items-center gap-3 rounded-2xl border border-stone-200 bg-white px-5 py-4 text-base font-semibold text-primary transition-colors hover:border-primary/40"
          >
            <Mail size={20} /> elodiecao05@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/elodie-cao-674075298"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-2xl border border-stone-200 bg-white px-5 py-4 text-base font-semibold text-primary transition-colors hover:border-primary/40"
          >
            <Linkedin size={20} /> linkedin.com/in/elodie-cao-674075298
          </a>
        </div>
      </motion.div>
    </section>
  );
}
