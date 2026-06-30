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
        <div className="mt-8 rounded-2xl border px-5 py-4 font-mono text-sm" style={{ background: "#1e0d18", borderColor: "#4a1e35" }}>
          <div className="mb-3 flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#ff6b9d" }} />
            <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#ffb3d1" }} />
            <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#ff8fc4" }} />
            <span className="ml-3 text-xs" style={{ color: "#7d4063" }}>terminal</span>
          </div>
          <p>
            <span style={{ color: "#ff6eb4" }}>elodie</span>
            <span style={{ color: "#8a4060" }}>@portfolio</span>
            <span style={{ color: "#c47a9a" }}>:~$ </span>
            <span style={{ color: "#ffc2d9" }}>git log --oneline</span>
          </p>
          <p className="mt-1" style={{ color: "#6b3355" }}>
            <span style={{ color: "#ff6eb4" }}>✓</span> alternance trouvée — Hyvilo, depuis mai 2026
          </p>
        </div>
        <div className="mt-6 flex flex-col gap-4">
          <a
            href="mailto:elodiecao05@gmail.com"
            className="flex items-center gap-3 rounded-2xl border px-5 py-4 text-base font-semibold transition-all hover:scale-[1.01]"
            style={{ borderColor: "#f9a8d4", background: "rgba(214,86,140,0.05)", color: "#be185d" }}
          >
            <Mail size={20} /> elodiecao05@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/elodie-cao-674075298"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-2xl border px-5 py-4 text-base font-semibold transition-all hover:scale-[1.01]"
            style={{ borderColor: "#f9a8d4", background: "rgba(214,86,140,0.05)", color: "#be185d" }}
          >
            <Linkedin size={20} /> linkedin.com/in/elodie-cao-674075298
          </a>
        </div>
      </motion.div>
    </section>
  );
}
