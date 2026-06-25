import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Briefcase, Building2, Mic, School, Sparkles, MapPin, Calendar } from "lucide-react";

const experiences = [
  {
    Icon: Building2,
    title: "Ingénieure Logiciel – Alternance",
    org: "Capgemini",
    date: "Septembre 2026 – Septembre 2028",
    location: "Paris · 24 mois",
    description:
      "Intégration des équipes spécialisées en ingénierie logicielle et architectures Cloud, en parallèle du Master MIAGE à Panthéon-Sorbonne.",
    stack: ["Ingénierie logicielle", "Cloud", "Master MIAGE", "Alternance 24 mois"],
    status: "À venir",
    type: "upcoming",
    accent: "#4f46e5",
  },
  {
    Icon: Sparkles,
    title: "Développeuse Data Engineer",
    org: "Hyvilo",
    date: "Mai 2026 – aujourd'hui · 2 mois",
    location: "Paris, Île-de-France · Sur site",
    description:
      "Conception et développement de pipelines ETL de données dans un environnement de production.",
    details: [
      "Développement de pipelines de données avec Mage AI (Python / pandas).",
      "Intégration de données via API REST et SFTP.",
      "Transformation et normalisation de données.",
      "Débogage et stabilisation de pipelines en production.",
      "Utilisation de Git / GitLab et workflows CI/CD.",
      "Rédaction de documentation technique.",
    ],
    stack: ["Python", "pandas", "Mage AI", "API REST", "SFTP", "Git", "GitLab CI/CD"],
    status: "En cours",
    type: "active",
    accent: "#059669",
  },
  {
    Icon: Mic,
    title: "Médiatrice scientifique",
    org: "Université Paris Cité",
    date: "Mars 2026",
    location: "Paris 6e · Sur site",
    description:
      'Exposition "Un monde de maths" à la Galerie Saint-Germain — vulgarisation scientifique auprès de classes de lycée.',
    details: [
      "Animation d'ateliers interactifs de mathématiques.",
      "Vulgarisation de notions avec des exemples concrets et accessibles.",
      "Contribution à la valorisation des maths dans la vie quotidienne.",
    ],
    stack: ["Médiation scientifique", "Animation", "Prise de parole"],
    type: "other",
    accent: "#db2777",
  },
  {
    Icon: School,
    title: "L3 Licence Informatique parcours MIAGE",
    org: "Université Paris Cité",
    date: "2025 – 2026",
    location: "Paris - 75006",
    description:
      "Troisième année de licence MIAGE : développement logiciel, data, gestion de projet et systèmes d'information.",
    stack: ["Développement", "Gestion de projet", "Data", "Systèmes d'information"],
    type: "education",
    accent: "#0369a1",
  },
  {
    Icon: School,
    title: "L2 Licence Informatique et Applications",
    org: "Université Paris Cité",
    date: "Septembre 2024 – Septembre 2025",
    location: "Paris - 75006",
    description:
      "Deuxième année de licence Informatique : développement logiciel, bases de données, systèmes d'information et gestion de projet.",
    stack: ["Java", "C", "Développement web", "SGBD", "Systèmes d'information", "Unity", "Gestion de projet", "Systèmes d'exploitation"],
    type: "education",
    accent: "#0369a1",
  },
  {
    Icon: School,
    title: "L1 Licence Mathématiques et Informatique",
    org: "Université Paris Cité",
    date: "Septembre 2023 – Septembre 2024",
    location: "Paris - 75006",
    description:
      "Première année de licence pluridisciplinaire Mathématiques et Informatique : programmation, bases de données, UML et gestion de projet.",
    stack: ["C", "C#", "Java", "Python", "SQL", "PostgreSQL", "HTML", "Unity", "Unreal Engine 4", "UML", "Gestion de projet"],
    type: "education",
    accent: "#0369a1",
  },
  {
    Icon: Briefcase,
    title: "Consultante informatique – Stage",
    org: "ERPsoft Consulting",
    date: "Juillet – Août 2024",
    location: "Soisy-sur-Seine · Sur site",
    description:
      "Création d'outils d'analyse pour la gestion des stocks de composants Airbus.",
    details: [
      "Analyse des données BCP liées à la migration SAP/EIS d'Airbus : stocks, commandes, configuration.",
      "Automatisation VBA et traitement Excel des fichiers de suivi techniques.",
    ],
    stack: ["VBA", "Excel", "Analyse de données", "Gestion de projet"],
    type: "past",
    accent: "#b45309",
  },
];

function TimelineDot({ type, accent }) {
  return (
    <div className="relative flex items-center justify-center w-10 h-10 shrink-0">
      {type === "active" && (
        <span
          className="absolute inset-0 rounded-full animate-ping opacity-25"
          style={{ backgroundColor: accent }}
        />
      )}
      <div
        className="relative z-10 w-4 h-4 rounded-full border-[3px] border-white"
        style={{
          backgroundColor: accent,
          boxShadow: `0 0 0 3px ${accent}30, 0 4px 16px ${accent}50`,
        }}
      />
    </div>
  );
}

function StatusBadge({ status, type, accent }) {
  if (!status) return null;
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-[3px] text-[10px] font-bold uppercase tracking-[0.18em] mb-3"
      style={{
        backgroundColor: `${accent}10`,
        color: accent,
        border: `1px solid ${accent}30`,
      }}
    >
      {type === "active" && (
        <span className="relative flex h-1.5 w-1.5">
          <span
            className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
            style={{ backgroundColor: accent }}
          />
          <span
            className="relative inline-flex h-1.5 w-1.5 rounded-full"
            style={{ backgroundColor: accent }}
          />
        </span>
      )}
      {status}
    </span>
  );
}

function ExperienceCard({ exp, align = "left" }) {
  const { Icon, title, org, date, location, description, details, stack, status, type, accent } = exp;

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="relative soft-card overflow-hidden w-full group cursor-default"
    >
      {/* Gradient top accent */}
      <div
        className="absolute inset-x-0 top-0 h-[3px] transition-opacity duration-300 opacity-70 group-hover:opacity-100"
        style={{ background: `linear-gradient(90deg, ${accent}, ${accent}00)` }}
      />

      <div className="p-5 md:p-6">
        <StatusBadge status={status} type={type} accent={accent} />

        {/* Header */}
        <div className="flex items-start gap-3">
          <div
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl mt-0.5"
            style={{ backgroundColor: `${accent}12` }}
          >
            <Icon size={18} style={{ color: accent }} />
          </div>
          <div className="min-w-0">
            <h3 className="text-[15px] font-semibold leading-snug text-primary">{title}</h3>
            <p className="text-sm font-medium text-stone-500 mt-0.5">{org}</p>
          </div>
        </div>

        {/* Meta */}
        <div className="mt-3.5 flex flex-wrap gap-x-4 gap-y-1 text-[11px] font-medium text-stone-400">
          <span className="flex items-center gap-1.5">
            <Calendar size={10} />
            {date}
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin size={10} />
            {location}
          </span>
        </div>

        {/* Description */}
        <p className="mt-3 text-sm leading-relaxed text-stone-600">{description}</p>

        {/* Details */}
        {details && (
          <ul className="mt-3 space-y-1.5 text-[13px] text-stone-500 leading-relaxed">
            {details.map((d, j) => (
              <li key={j} className="flex gap-2.5">
                <span
                  className="mt-[7px] h-1 w-1 shrink-0 rounded-full"
                  style={{ backgroundColor: accent }}
                />
                {d}
              </li>
            ))}
          </ul>
        )}

        {/* Stack tags */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {stack.map((tag) => (
            <span
              key={tag}
              className="rounded-full px-2.5 py-[3px] text-[10px] font-bold uppercase tracking-[0.12em]"
              style={{
                backgroundColor: `${accent}08`,
                border: `1px solid ${accent}25`,
                color: accent,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const lineRef = useRef(null);

  return (
    <section id="experience" className="section-shell">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-14"
      >
        <span className="eyebrow">Parcours</span>
        <h2 className="section-title mt-5">
          Stage chez Hyvilo, alternance chez Capgemini,{" "}
          <br className="hidden md:block" />
          Master à Panthéon-Sorbonne.
        </h2>
      </motion.div>

      {/* Timeline container */}
      <div className="relative" ref={lineRef}>

        {/* ── Animated line ─────────────────────────────────── */}
        {/* Mobile: left-side line */}
        <div className="absolute left-[1.2rem] top-0 bottom-0 w-px overflow-hidden md:hidden">
          <motion.div
            className="w-full h-full origin-top"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
            style={{
              background:
                "linear-gradient(to bottom, #4f46e5 0%, #c4b5fd 35%, #d6d3d1 70%, transparent 100%)",
            }}
          />
        </div>
        {/* Desktop: center line */}
        <div className="absolute hidden md:block left-1/2 -translate-x-1/2 top-0 bottom-0 w-px overflow-hidden">
          <motion.div
            className="w-full h-full origin-top"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
            style={{
              background:
                "linear-gradient(to bottom, #4f46e5 0%, #c4b5fd 35%, #d6d3d1 70%, transparent 100%)",
            }}
          />
        </div>

        {/* ── Items ─────────────────────────────────────────── */}
        <div className="flex flex-col gap-7 md:gap-10">
          {experiences.map((exp, i) => {
            const isLeft = i % 2 === 0;

            return (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.55,
                  delay: i * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`
                  relative grid items-start
                  grid-cols-[2.4rem_1fr]
                  md:grid-cols-[1fr_5rem_1fr]
                `}
              >
                {/* ── MOBILE: dot (col 1) ── */}
                <div className="flex justify-center pt-4 z-10 md:hidden">
                  <TimelineDot type={exp.type} accent={exp.accent} />
                </div>

                {/* ── DESKTOP: left card (col 1) ── */}
                <div className="hidden md:flex items-start justify-end pr-5">
                  {isLeft ? (
                    <ExperienceCard exp={exp} align="right" />
                  ) : (
                    /* Year label for right-side items — subtle marker */
                    <div className="self-center ml-auto">
                      <span className="text-[11px] font-semibold text-stone-300 tracking-widest select-none">
                        {exp.date.match(/\d{4}/g)?.slice(-1)[0]}
                      </span>
                    </div>
                  )}
                </div>

                {/* ── MOBILE: card (col 2) / DESKTOP: dot (col 2) ── */}
                <div className="pl-3 md:hidden">
                  <ExperienceCard exp={exp} />
                </div>
                <div className="hidden md:flex justify-center items-start pt-4 z-10">
                  <TimelineDot type={exp.type} accent={exp.accent} />
                </div>

                {/* ── DESKTOP: right card (col 3) ── */}
                <div className="hidden md:flex items-start pl-5">
                  {!isLeft ? (
                    <ExperienceCard exp={exp} align="left" />
                  ) : (
                    <div className="self-center">
                      <span className="text-[11px] font-semibold text-stone-300 tracking-widest select-none">
                        {exp.date.match(/\d{4}/g)?.slice(-1)[0]}
                      </span>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
