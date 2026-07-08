import React from "react";
import { motion } from "framer-motion";
import { Zap, Database, BarChart3, Briefcase, ExternalLink, Users, ArrowUpRight } from "lucide-react";

const convenioPillars = [
  { label: "Analyse ATS",        desc: "Score pondéré, compétences détectées et manquantes par CV" },
  { label: "Espace candidat",    desc: "Offres, candidatures et profil réunis en un seul endroit" },
  { label: "Espace recruteur",   desc: "Offres, ATS, équipe RH et fiches entreprise centralisés" },
  { label: "Suivi candidatures", desc: "Progression claire de chaque dossier étape par étape" },
  { label: "Collaboration RH",   desc: "Rôles Admin / Recruteur / Coordination + notes partagées" },
  { label: "Candidature spontanée", desc: "Postuler directement à une entreprise sans offre publiée" },
];

const projects = [
  {
    icon: <Zap size={28} className="text-accent" />,
    title: "Projet Java – Réseau de distribution d’électricité",
    org: "Université Paris Cité",
    date: "Octobre 2025 – Décembre 2025",
    description:
      "Projet de programmation visant à concevoir et optimiser un réseau de distribution d’électricité à partir de contraintes réelles.",
    details: [
      "Modélisation orientée objet des entités du système : générateurs, maisons et connexions.",
      "Calcul du coût global du réseau avec équilibrage des charges et pénalités de surcharge.",
      "Création et gestion du réseau via un menu interactif.",
      "Lecture, validation et sauvegarde de réseaux depuis des fichiers.",
      "Gestion rigoureuse des erreurs et exceptions.",
      "Implémentation d’un algorithme automatique d’optimisation des connexions.",
    ],
    stack: ["Java", "JavaFX", "POO", "Algorithmes", "Gestion d’exceptions"],
  },
  {
    icon: <Database size={28} className="text-accent" />,
    title: "Projet Java – Mini SGBD relationnel",
    org: "Université Paris Cité",
    date: "Septembre 2025 – Décembre 2025",
    description:
      "Développement d’un mini système de gestion de base de données en Java pour reproduire les mécanismes de base d’un SGBD relationnel.",
    details: [
      "Création et gestion de tables, avec insertion, suppression et mise à jour des données.",
      "Exécution de requêtes simples et traitement de scripts de commandes.",
      "Gestion des données via des fichiers pour assurer la persistance.",
      "Mise en pratique de l’architecture interne d’un SGBD et de la programmation orientée objet.",
      "Implémentation d’un moteur d’exécution de commandes et manipulation de structures de données.",
    ],
    stack: ["Java", "POO", "SGBD", "Persistance", "Structures de données"],
  },
  {
    icon: <BarChart3 size={28} className="text-accent" />,
    title: "Projet 3D et codage – Comparaison de moteurs 3D (Unity & Unreal Engine)",
    org: "Université Paris Cité",
    date: "Janvier 2025 – Mars 2025",
    description:
      "Projet de groupe visant à comparer deux moteurs de rendu et de simulation 3D à travers le développement de scénarios interactifs.",
    details: [
      "Développement de fonctionnalités en C++, notamment sur Unreal Engine.",
      "Conception d’un menu interactif intégrant un mini-jeu de tir avec personnage.",
      "Génération procédurale d’un terrain aléatoire.",
      "Mise en place d’éléments graphiques : feu, éclairage, cycle jour/nuit et lampe de poche.",
      "Analyse de la qualité des déplacements et des interactions des personnages.",
      "Réalisation de vidéos tutoriels et comparaison des performances, avantages et limites des deux moteurs.",
    ],
    stack: ["C++", "Unity", "Unreal Engine", "3D", "Gameplay", "Rendu temps réel"],
  },
  {
    icon: <Briefcase size={28} className="text-accent" />,
    title: "Outils d’analyse pour la gestion des stocks Airbus",
    org: "ERPsoft Consulting",
    date: "Juillet 2024 – Août 2024",
    description:
      "Conception d’outils d’analyse pour la gestion des stocks de composants Airbus, avec automatisation VBA, analyse de données critiques et coordination avec les équipes métiers.",
    details: [
      "Création de logiciels d’analyse pour le suivi de stocks de composants Airbus.",
      "Automatisation de processus en VBA avec une réduction de 25 % du temps de traitement.",
      "Analyse de données critiques liées aux processus métier.",
      "Coordination avec les équipes pour traduire les besoins opérationnels en solutions techniques.",
    ],
    stack: ["VBA", "Analyse de données", "Processus métier", "Gestion des stocks", "Coordination"],
  },
];

const cardVariants = {
  offscreen: { opacity: 0, y: 40 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", bounce: 0.3, duration: 0.8 },
  },
};

export default function Projects() {
  return (
    <section id="projects" className="section-shell">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-10"
      >
        <span className="eyebrow">Projets</span>
        <h2 className="section-title mt-5">Une sélection de projets concrets, du backend aux sujets plus exploratoires.</h2>
      </motion.div>
      {/* ── Convenio hero card ─────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="soft-card overflow-hidden mb-5"
      >
        {/* Top banner */}
        <div className="relative px-7 pt-7 pb-6" style={{ background: "linear-gradient(135deg, #1e0d18 0%, #2d1230 55%, #1a0f2e 100%)" }}>
          {/* Subtle glow blobs */}
          <div className="pointer-events-none absolute top-0 right-0 w-64 h-64 rounded-full opacity-30" style={{ background: "radial-gradient(circle, #f472b6 0%, transparent 70%)", transform: "translate(30%, -30%)" }} />
          <div className="pointer-events-none absolute bottom-0 left-0 w-48 h-48 rounded-full opacity-20" style={{ background: "radial-gradient(circle, #e879f9 0%, transparent 70%)", transform: "translate(-20%, 30%)" }} />

          <div className="relative flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              {/* Badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em]" style={{ background: "rgba(244,114,182,0.18)", border: "1px solid rgba(244,114,182,0.35)", color: "#f9a8d4" }}>
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
                  En ligne
                </span>
                <span className="inline-flex items-center rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em]" style={{ background: "rgba(232,121,249,0.15)", border: "1px solid rgba(232,121,249,0.3)", color: "#e879f9" }}>
                  Projet entrepreneurial
                </span>
              </div>
              {/* Logo / name */}
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-4xl font-extrabold tracking-tight text-white">convenio</span>
                <span className="text-3xl font-extrabold" style={{ color: "#f472b6" }}>.</span>
              </div>
              <p className="text-base font-medium max-w-md" style={{ color: "rgba(249,168,212,0.85)" }}>
                Recrutez vite, recrutez intelligemment, ensemble.
              </p>
            </div>
            <a
              href="https://conveniofr.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 rounded-2xl px-4 py-2.5 text-sm font-semibold transition-all hover:scale-105"
              style={{ background: "rgba(244,114,182,0.2)", border: "1px solid rgba(244,114,182,0.4)", color: "#f9a8d4" }}
            >
              Voir le portfolio Convenio <ArrowUpRight size={16} />
            </a>
          </div>

          {/* Stack */}
          <div className="relative flex flex-wrap gap-2 mt-5">
            {["Next.js", "TypeScript", "ATS", "Produit web", "2026"].map(t => (
              <span key={t} className="rounded-full px-3 py-1 text-xs font-semibold" style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.6)" }}>
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Body */}
        <div className="px-7 py-6 grid gap-6 md:grid-cols-[1fr_auto]">
          <div className="flex flex-col gap-5">
            <div>
              <p className="text-stone-600 leading-7">
                Plateforme ATS qui centralise offres, candidatures et analyses de recrutement — pensée pour les candidats comme pour les recruteurs. Né en formation, devenu un vrai produit.
              </p>
            </div>

            {/* Pillars grid */}
            <div className="grid gap-3 sm:grid-cols-2">
              {convenioPillars.map(({ label, desc }) => (
                <div key={label} className="flex gap-3 rounded-2xl border border-stone-100 bg-stone-50/60 p-3">
                  <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full" style={{ background: "linear-gradient(135deg,#f472b6,#e879f9)", marginTop: "6px" }} />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-stone-700">{label}</p>
                    <p className="mt-0.5 text-xs text-stone-500 leading-5">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Team */}
          <div className="flex flex-col gap-3 md:w-44 shrink-0">
            <div className="flex items-center gap-2 mb-1">
              <Users size={14} className="text-stone-400" />
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-stone-400">Équipe</span>
            </div>
            {["Camélia Tahar", "Shérine Meziane", "Élodie Cao"].map((name) => (
              <div key={name} className="flex items-center gap-2.5">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[10px] font-bold text-white" style={{ background: "linear-gradient(135deg,#d6568c,#e879f9)" }}>
                  {name.split(" ").map(n => n[0]).join("")}
                </div>
                <span className="text-sm font-medium text-stone-600">{name}</span>
              </div>
            ))}
            <p className="mt-2 text-xs text-stone-400 leading-5">3 développeuses — projet académique devenu entrepreneurial</p>
          </div>
        </div>
      </motion.div>

      {/* ── Other projects ─────────────────────────────────── */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <motion.div
            key={project.title}
            className="soft-card relative flex flex-col gap-4 p-6 transition-transform duration-300 hover:-translate-y-1"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f4efe8]">
              {project.icon}
            </div>
            <h3 className="text-xl font-semibold text-primary">{project.title}</h3>
            <div className="text-sm font-semibold uppercase tracking-[0.16em] text-stone-400">{project.date}</div>
            <p className="text-sm font-semibold text-stone-500">{project.org}</p>
            <p className="text-stone-600">{project.description}</p>
            {project.details && (
              <ul className="space-y-2 text-sm leading-7 text-stone-600">
                {project.details.map((detail) => (
                  <li key={detail} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            )}
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.stack.map((tech) => (
                <span key={tech} className="rounded-full border border-stone-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-stone-500">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
