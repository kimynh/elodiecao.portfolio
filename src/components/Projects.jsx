import React from "react";
import { motion } from "framer-motion";
import { ServerCog, Zap, Database, BarChart3, Briefcase } from "lucide-react";

const projects = [
  {
    icon: <ServerCog size={28} className="text-accent" />,
    title: "Développement d’une plateforme de recrutement intelligente (ATS)",
    org: "Université Paris Cité",
    date: "Janvier 2026 – aujourd’hui",
    description:
      "Projet d’équipe mené dans le cadre de la Licence Informatique pour simplifier le processus de recrutement pour les candidats et les recruteurs via une application web.",
    details: [
      "Conception d’un espace candidat avec vue détaillée des offres et filtres par localisation, type de contrat ou durée.",
      "Intégration du dépôt de CV avec analyse en temps réel et score de matching avec les offres.",
      "Création d’un espace RH avec tableau de bord, suivi des candidatures, classement automatisé des profils et gestion des offres.",
      "Développement d’un moteur de scoring fondé sur la détection de compétences clés et l’adéquation formation/expérience.",
    ],
    stack: ["PostgreSQL", "Python", "React", "Analyse de CV", "Matching", "Base de données", "Produit web"],
    main: true,
  },
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
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <motion.div
            key={project.title}
            className={`soft-card relative flex flex-col gap-4 p-6 transition-transform duration-300 hover:-translate-y-1 ${project.main ? "md:col-span-2 pt-12" : ""}`}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
            {project.main && (
              <div className="absolute inset-x-0 top-0 flex items-center gap-2 rounded-t-3xl border-b border-stone-200/50 bg-stone-50/70 px-5 py-2.5 backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-accent/50" />
                <span className="font-mono text-[11px] font-medium text-stone-400">ATS.jsx</span>
                <span className="ml-auto font-mono text-[11px] text-stone-300">
                  <span className="text-accent/50">{"<"}</span>
                  {"/"}
                  <span className="text-accent/50">{">"}</span>
                </span>
              </div>
            )}
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f4efe8]">
              {project.icon}
            </div>
            <h3 className="text-xl font-semibold text-primary">
              {project.title}
            </h3>
            <div className="text-sm font-semibold uppercase tracking-[0.16em] text-stone-400">
              {project.date}
            </div>
            <p className="text-sm font-semibold text-stone-500">{project.org}</p>
            <p className="text-stone-600">{project.description}</p>
            {project.details ? (
              <ul className="space-y-2 text-sm leading-7 text-stone-600">
                {project.details.map((detail) => (
                  <li key={detail} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            ) : null}
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-stone-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-stone-500"
                >
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
