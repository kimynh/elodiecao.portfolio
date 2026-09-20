import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Building2, GraduationCap } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="section-shell">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]"
      >
        <div>
          <span className="eyebrow">À propos</span>
          <h2 className="section-title mt-5">
            Un profil hybride entre rigueur académique, sens du produit et exécution technique.
          </h2>
          <div className="mt-8 flex flex-col gap-3">
            <div className="flex items-center gap-3 rounded-2xl border border-stone-200/80 bg-white/80 px-4 py-3">
              <GraduationCap size={16} className="shrink-0 text-emerald-500" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-stone-400">En cours</p>
                <p className="text-sm font-semibold text-primary">Master MIAGE · Panthéon-Sorbonne</p>
              </div>
              <span className="ml-auto h-2 w-2 rounded-full bg-emerald-400" />
            </div>
            <div className="flex items-center gap-3 rounded-2xl border border-stone-200/80 bg-white/80 px-4 py-3">
              <Building2 size={16} className="shrink-0 text-accent" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-stone-400">Octobre 2026 · 24 mois</p>
                <p className="text-sm font-semibold text-primary">Alternance · Capgemini</p>
              </div>
              <span className="ml-auto h-2 w-2 rounded-full bg-accent/60" />
            </div>
            <div className="flex items-center gap-3 rounded-2xl border border-stone-200/80 bg-white/80 px-4 py-3">
              <Sparkles size={16} className="shrink-0 text-stone-400" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-stone-400">Terminé</p>
                <p className="text-sm font-semibold text-primary">Stage · Hyvilo</p>
              </div>
              <span className="ml-auto h-2 w-2 rounded-full bg-stone-300" />
            </div>
          </div>
        </div>
        <div className="soft-card p-6 md:p-8">
          <p className="text-base leading-8 text-stone-600 md:text-lg">
            Je suis actuellement en Master MIAGE à l’Université Paris 1 Panthéon-Sorbonne. Mon parcours me permet de faire le lien entre développement logiciel, analyse de données et compréhension des besoins métier avec un intérêt marqué pour les systèmes d’information.
          </p>
          <p className="mt-5 text-base leading-8 text-stone-600 md:text-lg">
            J’aime les projets bien pensés, les interfaces lisibles et les équipes où l’on construit avec méthode. J’ai terminé mon stage chez Hyvilo et je rejoindrai Capgemini en octobre 2026 pour une alternance de 2 ans en ingénierie logicielle.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="pill-tag">Panthéon-Sorbonne</span>
            <span className="pill-tag">MIAGE</span>
            <span className="pill-tag">Développement & SI</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
