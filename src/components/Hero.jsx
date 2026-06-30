import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, BriefcaseBusiness, CalendarDays } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="section-shell pt-4">
      <div className="soft-card relative overflow-hidden px-6 py-8 md:px-10 md:py-12">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="grid gap-10 lg:grid-cols-[1.4fr_0.9fr] lg:items-end">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="eyebrow"
            >
              Portfolio 2026
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="mt-5 max-w-4xl text-5xl font-semibold tracking-tight text-primary md:text-7xl"
            >
              Elodie Cao,
              <span className="font-display ml-3 italic text-taupe">
                MIAGE, produit et développement
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.05, ease: "easeOut" }}
              className="mt-6 max-w-2xl text-lg leading-8 text-stone-600 md:text-xl"
            >
              Actuellement en L3 MIAGE à l’Université Paris Cité, je suis en stage chez Hyvilo du 20 mai au 14 août 2026. En septembre 2026, je rejoins Capgemini en alternance pour 2 ans, en parallèle du Master MIAGE à Panthéon-Sorbonne.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="mt-8 flex flex-col gap-4 sm:flex-row"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-semibold text-white transition-transform hover:scale-[1.02]" style={{ background: "linear-gradient(135deg, #d6568c, #f472b6)" }}
              >
                Me contacter
                <ArrowRight size={18} />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full border border-border bg-white/80 px-6 py-3 text-base font-semibold text-primary transition-colors hover:bg-white"
              >
                Voir mes projets
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.15, ease: "easeOut" }}
            className="grid gap-4"
          >
            <div className="rounded-[1.75rem] border p-5 shadow-soft" style={{ background: "#1e0d18", borderColor: "#4a1e35" }}>
              <div className="mb-4 flex items-center gap-1.5">
                <span className="h-3 w-3 rounded-full" style={{ background: "#ff6b9d" }} />
                <span className="h-3 w-3 rounded-full" style={{ background: "#ffb3d1" }} />
                <span className="h-3 w-3 rounded-full" style={{ background: "#ff8fc4" }} />
                <span className="ml-4 font-mono text-xs" style={{ color: "#7d4063" }}>profil.js</span>
              </div>
              <div className="font-mono text-sm leading-7">
                <p><span className="italic" style={{ color: "#6b3355" }}>{"// Elodie Cao — 2026"}</span></p>
                <p>
                  <span style={{ color: "#ff6eb4" }}>const </span>
                  <span style={{ color: "#ffc2d9" }}>profil</span>
                  <span style={{ color: "#c47a9a" }}> = {"{"}</span>
                </p>
                <p className="pl-5">
                  <span style={{ color: "#f4a8c7" }}>formation</span>
                  <span style={{ color: "#8a4060" }}>: </span>
                  <span style={{ color: "#ffaac8" }}>"Master MIAGE"</span>
                  <span style={{ color: "#8a4060" }}>,</span>
                </p>
                <p className="pl-5">
                  <span style={{ color: "#f4a8c7" }}>école</span>
                  <span style={{ color: "#8a4060" }}>: </span>
                  <span style={{ color: "#ffaac8" }}>"Panthéon-Sorbonne"</span>
                  <span style={{ color: "#8a4060" }}>,</span>
                </p>
                <p className="pl-5">
                  <span style={{ color: "#f4a8c7" }}>contrat</span>
                  <span style={{ color: "#8a4060" }}>: </span>
                  <span style={{ color: "#ffaac8" }}>"Capgemini — 24 mois"</span>
                  <span style={{ color: "#8a4060" }}>,</span>
                </p>
                <p className="pl-5">
                  <span style={{ color: "#f4a8c7" }}>stack</span>
                  <span style={{ color: "#8a4060" }}>: [</span>
                  <span style={{ color: "#ffd6e7" }}>"React"</span>
                  <span style={{ color: "#8a4060" }}>, </span>
                  <span style={{ color: "#ffd6e7" }}>"Django"</span>
                  <span style={{ color: "#8a4060" }}>, </span>
                  <span style={{ color: "#ffd6e7" }}>"Python"</span>
                  <span style={{ color: "#8a4060" }}>],</span>
                </p>
                <p className="pl-5">
                  <span style={{ color: "#f4a8c7" }}>alternance</span>
                  <span style={{ color: "#8a4060" }}>: </span>
                  <span style={{ color: "#ff6eb4" }}>true</span>
                  <span style={{ color: "#8a4060" }}>,</span>
                </p>
                <p className="pl-5">
                  <span style={{ color: "#f4a8c7" }}>disponible</span>
                  <span style={{ color: "#8a4060" }}>: </span>
                  <span style={{ color: "#ffaac8" }}>"sept. 2026"</span>
                  <span style={{ color: "#8a4060" }}>,</span>
                </p>
                <p>
                  <span style={{ color: "#c47a9a" }}>{"}"}</span>
                  <span className="cursor-blink ml-0.5" style={{ color: "#ff6eb4" }}>|</span>
                </p>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.75rem] border border-stone-200/80 bg-[#f8f5ef] p-5">
                <CalendarDays size={20} className="text-primary" />
                <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-stone-500">
                  Stage
                </p>
                <p className="mt-2 text-lg font-semibold text-primary">
                  Mai à août 2026
                </p>
              </div>
              <div className="rounded-[1.75rem] border border-stone-200/80 bg-[#f8f5ef] p-5">
                <BriefcaseBusiness size={20} className="text-primary" />
                <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-stone-500">
                  Focus
                </p>
                <p className="mt-2 text-lg font-semibold text-primary">
                  Python, Mage AI, CI/CD
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
