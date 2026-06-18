import React from "react";
import { motion } from "framer-motion";
import {
  SiJavascript,
  SiPython,
  SiOpenjdk,
  SiCplusplus,
  SiHtml5,
  SiCss,
  SiReact,
  SiNextdotjs,
  SiDjango,
  SiPostgresql,
  SiGit,
  SiGitlab,
  SiDocker,
  SiSubversion,
} from "react-icons/si";
import { Users } from "lucide-react";

const categories = [
  {
    label: "Langages",
    skills: [
      { Icon: SiJavascript, name: "JavaScript", color: "#B8960C" },
      { Icon: SiPython,     name: "Python",     color: "#3776AB" },
      { Icon: SiOpenjdk,    name: "Java",        color: "#ED8B00" },
      { Icon: SiCplusplus,  name: "C/C++",       color: "#00599C" },
      {                     name: "SQL",          color: "#4479A1" },
      {                     name: "VBA",          color: "#217346" },
    ],
  },
  {
    label: "Web & Backend",
    skills: [
      { Icon: SiReact,     name: "React",    color: "#22aacf" },
      { Icon: SiNextdotjs, name: "Next.js",  color: "#111827" },
      { Icon: SiHtml5,     name: "HTML5",    color: "#E34F26" },
      { Icon: SiCss,       name: "CSS3",     color: "#1572B6" },
      { Icon: SiDjango,    name: "Django",   color: "#0C4B33" },
      {                    name: "API REST", color: "#6366f1" },
    ],
  },
  {
    label: "Data",
    skills: [
      { Icon: SiPostgresql,     name: "PostgreSQL",        color: "#4169E1" },
      {                         name: "Excel",             color: "#217346" },
      {                         name: "Mage AI",           color: "#7c3aed" },
      {                         name: "Analyse de données",color: "#0369a1" },
    ],
  },
  {
    label: "Outils & DevOps",
    skills: [
      { Icon: SiGit,    name: "Git",          color: "#F05032" },
      { Icon: SiGitlab, name: "GitLab CI/CD", color: "#FC6D26" },
      { Icon: SiDocker, name: "Docker",       color: "#2496ED" },
      { Icon: SiSubversion, name: "SVN",        color: "#809CC9" },
    ],
  },
  {
    label: "Méthodes",
    skills: [
      { name: "Agile / Scrum",        color: "#0ea5e9" },
      { name: "UML",                  color: "#f59e0b" },
      { name: "Analyse fonctionnelle",color: "#8b5cf6" },
    ],
  },
];

const softSkills = [
  "Rigueur",
  "Esprit d'équipe",
  "Communication",
  "Organisation",
  "Autonomie",
  "Capacité d'analyse",
  "Curiosité",
  "Adaptabilité",
];

// Pair categories for the 2-col desktop grid
const categoryPairs = [
  [categories[0], categories[1]],
  [categories[2], categories[3]],
  [categories[4]],
];

function SkillBadge({ skill, delay = 0 }) {
  const { Icon, name, color } = skill;
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay }}
      whileHover={{ y: -2, scale: 1.03 }}
      className="inline-flex items-center gap-2 rounded-xl px-3.5 py-2 text-sm font-medium cursor-default select-none"
      style={{
        backgroundColor: `${color}0d`,
        border: `1px solid ${color}30`,
        color: "#374151",
      }}
    >
      {Icon && <Icon size={15} style={{ color, flexShrink: 0 }} />}
      {name}
    </motion.span>
  );
}

function CategorySection({ cat, baseDelay = 0 }) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-4">
        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-stone-400 whitespace-nowrap">
          {cat.label}
        </span>
        <div className="flex-1 h-px bg-stone-200" />
      </div>
      <div className="flex flex-wrap gap-2">
        {cat.skills.map((skill, i) => (
          <SkillBadge key={skill.name} skill={skill} delay={baseDelay + i * 0.04} />
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section-shell">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-12 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"
      >
        <div>
          <span className="eyebrow">Compétences</span>
          <h2 className="section-title mt-5">
            Des bases solides pour concevoir,{" "}
            <br className="hidden md:block" />
            développer et structurer.
          </h2>
        </div>
        <div className="hidden shrink-0 rounded-2xl border border-stone-200 bg-white/80 px-4 py-3 font-mono text-xs text-stone-400 shadow-soft sm:block">
          <span className="text-green-500">$</span>
          <span className="text-stone-500"> npm install </span>
          <span className="text-sky-400">--save</span>
          <span className="text-amber-400"> skills</span>
          <span className="cursor-blink ml-0.5 text-stone-400">█</span>
        </div>
      </motion.div>

      {/* Hard skills */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="soft-card p-6 md:p-8 mb-5"
      >
        <div className="mb-6 flex items-center gap-3">
          <span className="eyebrow">Hard skills</span>
          <p className="text-sm text-stone-500">Techniques, outils et méthodes</p>
        </div>

        <div className="flex flex-col gap-8">
          {categoryPairs.map((pair, pi) => (
            <div
              key={pi}
              className={`grid gap-8 ${pair.length === 2 ? "md:grid-cols-2" : ""}`}
            >
              {pair.map((cat, ci) => (
                <CategorySection
                  key={cat.label}
                  cat={cat}
                  baseDelay={pi * 0.05 + ci * 0.1}
                />
              ))}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Soft skills */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="soft-card p-6 md:p-8"
      >
        <div className="mb-5 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f4efe8]">
            <Users size={18} className="text-primary" />
          </div>
          <div>
            <span className="eyebrow">Soft skills</span>
            <p className="mt-1 text-sm text-stone-500">Qualités humaines et relationnelles</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2.5">
          {softSkills.map((skill, i) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="rounded-full border border-stone-200 bg-white px-4 py-2 text-sm font-medium text-stone-600"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
