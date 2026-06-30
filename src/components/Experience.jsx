import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Briefcase, Building2, GraduationCap, Mic, School, Sparkles, MapPin, Calendar } from "lucide-react";
import hyviloLogo from "../assets/hyvilo.png";
import capgeminiLogo from "../assets/Capgemini_Logo.svg.png";
import parisCiteLogo from "../assets/logo-pc.svg";
import sorbonneLogo from "../assets/sorbonne-logo.png";

const experiences = [
  {
    Icon: Building2,
    logo: capgeminiLogo,
    duo: "alternance",
    title: "Ingénieure Logiciel – Alternance",
    org: "Capgemini",
    date: "Septembre 2026 – Septembre 2028",
    location: "Issy les moulineaux · Hybride",
    description:
      "Intégration des équipes spécialisées en ingénierie logicielle et architectures Cloud, en parallèle du Master MIAGE à Panthéon-Sorbonne.",
    stack: ["Ingénierie logicielle", "Cloud", "Master MIAGE", "Alternance 24 mois"],
    status: "À venir",
    type: "upcoming",
    accent: "#0070ac",
  },
  {
    Icon: GraduationCap,
    logo: sorbonneLogo,
    duo: "alternance",
    title: "Master MIAGE",
    org: "Université Paris 1 Panthéon-Sorbonne",
    date: "Septembre 2026 – Septembre 2028",
    location: "Paris - 75013",
    description:
      "Master MIAGE en alternance chez Capgemini, centré sur la gestion de projet, les systèmes d'information et l'ingénierie logicielle.",
    stack: ["Master MIAGE", "Alternance", "Gestion de projet", "SI", "Ingénierie logicielle"],
    status: "À venir",
    type: "upcoming",
    accent: "#ed9b28",
  },
  {
    Icon: Sparkles,
    logo: hyviloLogo,
    title: "Développeuse Data Engineer",
    org: "Hyvilo",
    date: "Mai 2026 – aujourd'hui",
    location: "Paris - Sur site",
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
    accent: "#01a7ed",
  },
  {
    Icon: Mic,
    logo: parisCiteLogo,
    title: "Médiatrice scientifique",
    org: "Université Paris Cité",
    date: "Mars 2026",
    location: "Paris - 75006",
    description:
      'Exposition "Un monde de maths" à la Galerie Saint-Germain — vulgarisation scientifique auprès de classes de lycée.',
    details: [
      "Animation d'ateliers interactifs de mathématiques.",
      "Vulgarisation de notions avec des exemples concrets et accessibles.",
      "Contribution à la valorisation des maths dans la vie quotidienne.",
    ],
    stack: ["Médiation scientifique", "Animation", "Prise de parole"],
    type: "other",
    accent: "#8a1438",
  },
  {
    Icon: School,
    logo: parisCiteLogo,
    title: "L3 Licence Informatique parcours MIAGE",
    org: "Université Paris Cité",
    date: "2025 – 2026",
    location: "Paris - 75006",
    description:
      "Troisième année de licence MIAGE : développement logiciel, data, gestion de projet et systèmes d'information.",
    stack: ["Développement", "Gestion de projet", "Data", "Systèmes d'information"],
    type: "education",
    accent: "#8a1438",
  },
  {
    Icon: School,
    logo: parisCiteLogo,
    title: "L2 Licence Informatique et Applications",
    org: "Université Paris Cité",
    date: "Septembre 2024 – Septembre 2025",
    location: "Paris - 75006",
    description:
      "Deuxième année de licence Informatique : développement logiciel, bases de données, systèmes d'information et gestion de projet.",
    stack: ["Java", "C", "Développement web", "SGBD", "Systèmes d'information", "Unity", "Gestion de projet", "Systèmes d'exploitation"],
    type: "education",
    accent: "#8a1438",
  },
  {
    Icon: School,
    logo: parisCiteLogo,
    title: "L1 Licence Mathématiques et Informatique",
    org: "Université Paris Cité",
    date: "Septembre 2023 – Septembre 2024",
    location: "Paris - 75006",
    description:
      "Première année de licence pluridisciplinaire Mathématiques et Informatique : programmation, bases de données, UML et gestion de projet.",
    stack: ["C", "C#", "Java", "Python", "SQL", "PostgreSQL", "HTML", "Unity", "Unreal Engine 4", "UML", "Gestion de projet"],
    type: "education",
    accent: "#8a1438",
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
    accent: "#339c10",
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
  const { Icon, logo, title, org, date, location, description, details, stack, status, type, accent } = exp;

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
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl mt-0.5 overflow-hidden ${logo ? "bg-white border border-stone-100 shadow-sm p-1" : ""}`}
            style={!logo ? { backgroundColor: `${accent}12` } : {}}
          >
            {logo
              ? <img src={logo} alt={org} className="h-full w-full object-contain" />
              : <Icon size={18} style={{ color: accent }} />
            }
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

function Butterfly({ x, y, size = 26, color, delay = 0, duration = 9, flipX = false }) {
  const pathX = [0, 28, -18, 42, 8, -10, 0];
  const pathY = [0, -22, -44, -18, -38, -12, 0];
  return (
    <motion.div
      className="absolute pointer-events-none hidden md:block"
      style={{ left: x, top: y, zIndex: 0 }}
      animate={{ x: pathX, y: pathY }}
      transition={{ duration, delay, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" }}
    >
      <motion.div
        animate={{ rotate: [-6, 6, -4, 8, -6] }}
        transition={{ duration: duration * 0.7, delay, repeat: Infinity, ease: "easeInOut" }}
        style={{ scaleX: flipX ? -1 : 1 }}
      >
        <svg
          width={size} height={size * 0.82} viewBox="0 0 44 36" fill="none"
          style={{ filter: `drop-shadow(0 2px 6px ${color}55)` }}
        >
          <defs>
            <radialGradient id={`wg-${color.replace("#","")}`} cx="50%" cy="40%" r="60%">
              <stop offset="0%" stopColor="white" stopOpacity="0.4" />
              <stop offset="100%" stopColor={color} stopOpacity="0" />
            </radialGradient>
          </defs>
          {/* Antennae */}
          <line x1="21" y1="7" x2="14" y2="1" stroke={color} strokeWidth="1" strokeLinecap="round" />
          <line x1="23" y1="7" x2="30" y2="1" stroke={color} strokeWidth="1" strokeLinecap="round" />
          <circle cx="13.5" cy="1" r="1.4" fill={color} />
          <circle cx="30.5" cy="1" r="1.4" fill={color} />
          {/* Left upper wing */}
          <ellipse className="butterfly-wing-left" cx="13" cy="13" rx="12" ry="10" fill={color} />
          <ellipse className="butterfly-wing-left" cx="13" cy="13" rx="12" ry="10" fill={`url(#wg-${color.replace("#","")})`} />
          {/* Right upper wing */}
          <ellipse className="butterfly-wing-right" cx="31" cy="13" rx="12" ry="10" fill={color} />
          <ellipse className="butterfly-wing-right" cx="31" cy="13" rx="12" ry="10" fill={`url(#wg-${color.replace("#","")})`} />
          {/* Left lower wing */}
          <ellipse className="butterfly-wing-left" cx="12" cy="25" rx="9" ry="7" fill={color} opacity="0.8" />
          {/* Right lower wing */}
          <ellipse className="butterfly-wing-right" cx="32" cy="25" rx="9" ry="7" fill={color} opacity="0.8" />
          {/* Body */}
          <ellipse cx="22" cy="18" rx="1.8" ry="9" fill={color} />
        </svg>
      </motion.div>
    </motion.div>
  );
}

function FloatingSide({ exp, align = "left" }) {
  const year = exp.date.match(/\d{4}/g)?.[0];
  const chips = (exp.stack ?? []).slice(0, 5);
  return (
    <motion.div
      initial={{ opacity: 0, x: align === "right" ? 14 : -14 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`flex flex-col gap-3 py-2 ${align === "right" ? "items-end" : "items-start"}`}
    >
      {year && (
        <span
          className="text-4xl font-extrabold tabular-nums leading-none select-none"
          style={{ color: `${exp.accent}30` }}
        >
          {year}
        </span>
      )}
      <div className={`flex flex-wrap gap-2 max-w-[200px] ${align === "right" ? "justify-end" : "justify-start"}`}>
        {chips.map((tag, i) => (
          <motion.span
            key={tag}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 + i * 0.09, duration: 0.4, ease: "easeOut" }}
            className="float-chip text-[11px] font-semibold px-2.5 py-1 rounded-full select-none cursor-default"
            style={{
              animationDelay: `${i * 0.5}s`,
              backgroundColor: `${exp.accent}0d`,
              border: `1px solid ${exp.accent}28`,
              color: exp.accent,
            }}
          >
            {tag}
          </motion.span>
        ))}
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
        {/* ── Background orbs ───────────────────────────────── */}
        {[
          { color: "#d6568c", top: "8%",  left: "12%",  size: 260, delay: "0s"   },
          { color: "#01a7ed", top: "32%", right: "8%",  size: 220, delay: "1.8s" },
          { color: "#ed9b28", top: "58%", left: "6%",   size: 200, delay: "0.9s" },
          { color: "#d6568c", top: "78%", right: "14%", size: 180, delay: "2.4s" },
        ].map(({ color, top, left, right, size, delay }, i) => (
          <div
            key={i}
            className="pointer-events-none absolute rounded-full hidden md:block"
            style={{
              top, left, right,
              width: size, height: size,
              background: `radial-gradient(circle, ${color}12 0%, transparent 70%)`,
              animation: `orb-drift ${14 + i * 3}s ease-in-out infinite`,
              animationDelay: delay,
              filter: "blur(1px)",
            }}
          />
        ))}

        {/* ── Butterflies ───────────────────────────────────── */}
        <Butterfly x={60}   y={40}  size={44} color="#f472b6" delay={0}   duration={10} />
        <Butterfly x="72%"  y={80}  size={38} color="#e879f9" delay={1.5} duration={8}  flipX />
        <Butterfly x={40}   y={340} size={36} color="#d6568c" delay={3}   duration={11} />
        <Butterfly x="75%"  y={420} size={42} color="#fb7185" delay={0.8} duration={9}  flipX />
        <Butterfly x={55}   y={680} size={34} color="#c084fc" delay={2.2} duration={12} />
        <Butterfly x="70%"  y={740} size={40} color="#f472b6" delay={4}   duration={8}  flipX />

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
                "linear-gradient(to bottom, #d6568c 0%, #f9a8d4 35%, #d6d3d1 70%, transparent 100%)",
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
                "linear-gradient(to bottom, #d6568c 0%, #f9a8d4 35%, #d6d3d1 70%, transparent 100%)",
            }}
          />
        </div>

        {/* ── Items ─────────────────────────────────────────── */}
        <div className="flex flex-col gap-7 md:gap-10">
          {(() => {
            // Pre-process: group duo items into paired rows
            const rows = [];
            let altIdx = 0;
            let i = 0;
            while (i < experiences.length) {
              const exp = experiences[i];
              const next = experiences[i + 1];
              if (exp.duo && next?.duo === exp.duo) {
                rows.push({ type: "duo", left: exp, right: next, baseI: i });
                i += 2;
                altIdx++;
              } else {
                rows.push({ type: "single", exp, isLeft: altIdx % 2 === 0, baseI: i });
                altIdx++;
                i++;
              }
            }

            return rows.map((row) => {
              /* ── DUO ROW: two cards side by side ── */
              if (row.type === "duo") {
                return (
                  <motion.div
                    key={row.baseI}
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.55, delay: row.baseI * 0.07, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {/* Mobile: stacked */}
                    <div className="md:hidden flex flex-col gap-5">
                      {[row.left, row.right].map((exp) => (
                        <div key={exp.title} className="grid grid-cols-[2.4rem_1fr] items-start">
                          <div className="flex justify-center pt-4 z-10">
                            <TimelineDot type={exp.type} accent={exp.accent} />
                          </div>
                          <div className="pl-3">
                            <ExperienceCard exp={exp} />
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Desktop: side by side */}
                    <div className="hidden md:grid md:grid-cols-[1fr_5rem_1fr] items-start">
                      <div className="flex justify-end pr-5">
                        <ExperienceCard exp={row.left} />
                      </div>
                      {/* Two dots side by side on the center line */}
                      <div className="flex justify-center items-start pt-5 z-10">
                        <div className="flex items-center gap-1.5">
                          <div
                            className="w-3 h-3 rounded-full border-2 border-white"
                            style={{ backgroundColor: row.left.accent, boxShadow: `0 0 0 2px ${row.left.accent}35, 0 2px 8px ${row.left.accent}40` }}
                          />
                          <div
                            className="w-3 h-3 rounded-full border-2 border-white"
                            style={{ backgroundColor: row.right.accent, boxShadow: `0 0 0 2px ${row.right.accent}35, 0 2px 8px ${row.right.accent}40` }}
                          />
                        </div>
                      </div>
                      <div className="flex pl-5">
                        <ExperienceCard exp={row.right} />
                      </div>
                    </div>
                  </motion.div>
                );
              }

              /* ── SINGLE ROW: alternating ── */
              const { exp, isLeft } = row;
              return (
                <motion.div
                  key={row.baseI}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.55, delay: row.baseI * 0.07, ease: [0.22, 1, 0.36, 1] }}
                  className="relative grid items-start grid-cols-[2.4rem_1fr] md:grid-cols-[1fr_5rem_1fr]"
                >
                  {/* Mobile: dot */}
                  <div className="flex justify-center pt-4 z-10 md:hidden">
                    <TimelineDot type={exp.type} accent={exp.accent} />
                  </div>

                  {/* Desktop: left card */}
                  <div className="hidden md:flex items-start justify-end pr-5">
                    {isLeft ? (
                      <ExperienceCard exp={exp} align="right" />
                    ) : (
                      <div className="self-end pb-2 pr-2">
                        <FloatingSide exp={exp} align="right" />
                      </div>
                    )}
                  </div>

                  {/* Mobile: card / Desktop: dot */}
                  <div className="pl-3 md:hidden">
                    <ExperienceCard exp={exp} />
                  </div>
                  <div className="hidden md:flex justify-center items-start pt-4 z-10">
                    <TimelineDot type={exp.type} accent={exp.accent} />
                  </div>

                  {/* Desktop: right card */}
                  <div className="hidden md:flex items-start pl-5">
                    {!isLeft ? (
                      <ExperienceCard exp={exp} align="left" />
                    ) : (
                      <div className="self-end pb-2 pl-2">
                        <FloatingSide exp={exp} align="left" />
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            });
          })()}
        </div>
      </div>
    </section>
  );
}
