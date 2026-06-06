import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Mic, School, Sparkles } from "lucide-react";

const experiences = [
  {
    icon: <Sparkles size={20} className="text-accent" />,
    title: "Stagiaire développement web – Hyvilo",
    org: "Hyvilo",
    date: "20 mai 2026 – 14 août 2026",
    location: "Paris 15e · Sur site",
    description: "Stage encadré par Yves Tannier, directeur technique, autour du développement d’une application web et de la conception de composants pour le back-office et le front-office.",
    details: [
      "Développement front-end en JavaScript et React pour les interfaces back-office et front-office.",
      "Conception de composants back-end en Python et Django.",
      "Écriture de tests unitaires et fonctionnels, avec versioning Git et CI/CD sur GitLab.",
    ],
    stack: ["React", "JavaScript", "Python", "Django", "Git", "GitLab CI/CD"],
    status: "En cours",
  },
  {
    icon: <Mic size={22} className="text-primary" />,
    title: "Étudiante médiatrice scientifique – Exposition “Un monde de maths”",
    org: "Université Paris Cité",
    date: "Mars 2026",
    location: "Paris 6e · Sur site",
    description: "Participation à une exposition de vulgarisation scientifique organisée par l’UFR à la Galerie Saint-Germain.",
    details: [
      "Accompagnement de classes de 3e et de Seconde lors de visites pédagogiques.",
      "Explication de notions mathématiques avec des exemples concrets et accessibles.",
      "Animation d’ateliers interactifs et mise en pratique auprès des visiteurs.",
      "Contribution à la valorisation des mathématiques et de leurs applications dans la vie quotidienne.",
    ],
    stack: ["Médiation scientifique", "Animation", "Prise de parole"],
  },
  {
    icon: <Briefcase size={22} className="text-primary" />,
    title: "Consultante en informatique – Stage",
    org: "ERPsoft Consulting",
    date: "Juillet 2024 – Août 2024",
    location: "Soisy-sur-Seine · Sur site",
    description: "Création d’outils d’analyse pour la gestion des stocks de composants Airbus.",
    details: [
      "Analyse et suivi des données BCP liées à la migration SAP/EIS d'Airbus : stocks, commandes, configuration système",
      "Automatisation VBA et traitement Excel des fichiers de suivi techniques",
      "Création de logiciels d'analyse pour la gestion des stocks de composants Airbus",
    ],
    stack: ["VBA", "Analyse de données", "Gestion de projet", "Processus métier", "Excel"],
  },
  {
    icon: <School size={22} className="text-primary" />,
    title: "L3 MIAGE – Université Paris Cité",
    org: "Université Paris Cité",
    date: "2025 – 2026",
    location: "Paris",
    description: "Formation MIAGE centrée sur le développement, la gestion de projet, la data et les systèmes d’information.",
    stack: ["Développement", "Gestion de projet", "Data", "Systèmes d’information"],
  },
];

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function Experience() {
  return (
    <section id="experience" className="section-shell">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-10"
      >
        <span className="eyebrow">Expérience</span>
        <h2 className="section-title mt-5">Un parcours en construction, actuellement en stage chez Hyvilo.</h2>
      </motion.div>
      <div className="relative flex flex-col gap-5 pl-4 md:pl-8">
        <div className="absolute left-0 top-2 h-[calc(100%-0.5rem)] w-px bg-stone-300 md:left-3" />
        {experiences.map((exp) => (
          <motion.div
            key={exp.title}
            variants={item}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="soft-card relative ml-3 flex items-start gap-4 p-6"
          >
            <div className="absolute -left-7 top-8 h-3 w-3 rounded-full border-4 border-[#f5ede2] bg-primary md:-left-[2.15rem]" />
            <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#f4efe8]">
              {exp.icon}
            </div>
            <div className="flex-1">
              {exp.status ? <span className="pill-tag">{exp.status}</span> : null}
              <h3 className="mt-3 text-xl font-semibold text-primary">{exp.title}</h3>
              <div className="mt-1 text-sm font-medium uppercase tracking-[0.16em] text-stone-400">{exp.date}</div>
              <p className="mt-1 text-sm font-semibold text-stone-500">{exp.org} · {exp.location}</p>
              <div className="mt-3 text-stone-600">{exp.description}</div>
              {exp.details ? (
                <ul className="mt-4 space-y-2 text-sm leading-7 text-stone-600">
                  {exp.details.map((detail) => (
                    <li key={detail} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
              {exp.stack ? (
                <div className="mt-5 flex flex-wrap gap-2">
                  {exp.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-stone-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-stone-500"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
