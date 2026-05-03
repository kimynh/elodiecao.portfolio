import React from "react";
import { motion } from "framer-motion";
import { Code, Database, Server, GitBranch, BarChart3, Users } from "lucide-react";

const hardSkills = [
  {
    icon: <Code size={28} className="text-primary" />, label: "Langages", items: ["Java", "Python", "JavaScript", "C/C++", "SQL", "VBA"],
  },
  {
    icon: <Server size={28} className="text-primary" />, label: "Web & Backend", items: ["React", "Next.js", "HTML", "CSS", "Django", "API REST"],
  },
  {
    icon: <Database size={28} className="text-primary" />, label: "Data", items: ["PostgreSQL", "Analyse de données", "Excel"],
  },
  {
    icon: <GitBranch size={28} className="text-primary" />, label: "Outils", items: ["Git", "GitLab CI/CD", "Docker", "SVN"],
  },
  {
    icon: <BarChart3 size={28} className="text-primary" />, label: "Méthodes", items: ["Agile/Scrum", "UML", "Analyse fonctionnelle"],
  },
];

const softSkills = [
  "Rigueur",
  "Esprit d’équipe",
  "Communication",
  "Organisation",
  "Autonomie",
  "Capacité d’analyse",
  "Curiosité",
  "Adaptabilité",
];

const container = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function Skills() {
  return (
    <section id="skills" className="section-shell">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"
      >
        <div>
          <span className="eyebrow">Compétences</span>
          <h2 className="section-title mt-5">Des bases solides pour concevoir, développer et structurer.</h2>
        </div>
        <div className="hidden shrink-0 rounded-2xl border border-stone-200 bg-white/80 px-4 py-3 font-mono text-xs text-stone-400 shadow-soft sm:block">
          <span className="text-green-500">$</span>
          <span className="text-stone-500"> npm install </span>
          <span className="text-sky-400">--save</span>
          <span className="text-amber-400"> skills</span>
          <span className="cursor-blink ml-0.5 text-stone-400">█</span>
        </div>
      </motion.div>
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="pill-tag">Hard skills</span>
            <p className="text-sm text-stone-500">Techniques, outils et méthodes</p>
          </div>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3"
          >
            {hardSkills.map((skill) => (
              <motion.div
                key={skill.label}
                variants={item}
                className="soft-card flex flex-col gap-5 p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f4efe8]">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold text-primary">{skill.label}</h3>
                <ul className="flex flex-wrap gap-2">
                  {skill.items.map((el) => (
                    <li
                      key={el}
                      className="rounded-full border border-stone-200 bg-white px-3 py-2 text-sm font-medium text-stone-600"
                    >
                      {el}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="soft-card p-6 md:p-8"
        >
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f4efe8]">
              <Users size={28} className="text-primary" />
            </div>
            <div>
              <span className="pill-tag">Soft skills</span>
              <h3 className="mt-3 text-xl font-semibold text-primary">Qualités humaines et relationnelles</h3>
            </div>
          </div>
          <ul className="flex flex-wrap gap-3">
            {softSkills.map((skill) => (
              <li
                key={skill}
                className="rounded-full border border-stone-200 bg-white px-4 py-2 text-sm font-medium text-stone-600"
              >
                {skill}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
