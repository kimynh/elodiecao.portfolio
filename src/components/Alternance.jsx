import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, MapPin, Car, CalendarDays } from "lucide-react";
import sorbonneLogo from "../assets/sorbonne-logo.png";
import hyviloLogo from "../assets/hyvilo.png";
import capgeminiLogo from "../assets/Capgemini_Logo.svg.png";

const highlights = [
  {
    icon: <GraduationCap size={18} className="text-accent" />,
    label: "École",
    value: "Panthéon-Sorbonne",
  },
  {
    icon: <MapPin size={18} className="text-accent" />,
    label: "Localisation",
    value: "Paris — Île-de-France",
  },
  {
    icon: <CalendarDays size={18} className="text-accent" />,
    label: "Début alternance",
    value: "Septembre 2026",
  },
  {
    icon: <Car size={18} className="text-accent" />,
    label: "Mobilité",
    value: "Permis B",
  },
];

export default function Alternance() {
  return (
    <section id="alternance" className="section-shell">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span className="eyebrow">Alternance confirmée</span>
        <h2 className="section-title mt-5 max-w-3xl">
          Capgemini dès septembre 2026,{" "}
          <span className="font-display italic text-taupe">
            Master MIAGE à Panthéon-Sorbonne.
          </span>
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-stone-600 md:text-lg">
          Après mon stage chez Hyvilo cet été, je rejoindrai Capgemini en
          septembre 2026 en tant qu'Ingénieure Logiciel en alternance pour 24 mois,
          en parallèle du Master MIAGE à Panthéon-Sorbonne.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {/* Sorbonne card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="soft-card flex flex-col justify-between gap-6 p-6"
          >
            <div>
              <span className="pill-tag mb-4 inline-flex">Confirmée</span>
              <img
                src={sorbonneLogo}
                alt="Panthéon Sorbonne - Université Paris 1"
                className="mx-auto h-24 w-auto object-contain"
              />
              <h3 className="mt-5 text-xl font-semibold text-primary">
                Panthéon Sorbonne — Paris 1
              </h3>
              <p className="mt-2 text-sm leading-6 text-stone-600">
                Université de rang mondial et l'une des plus anciennes
                d'Europe, Paris 1 délivre un Master MIAGE reconnu pour son
                exigence académique et la qualité de son réseau professionnel.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="pill-tag">Université historique</span>
              <span className="pill-tag">Réseau Paris 1</span>
              <span className="pill-tag">Master MIAGE</span>
            </div>
          </motion.div>

          {/* Hyvilo card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="soft-card flex flex-col justify-between gap-6 p-6"
          >
            <div>
              <span className="pill-tag mb-4 inline-flex">En cours</span>
              <img
                src={hyviloLogo}
                alt="Hyvilo"
                className="mx-auto h-14 w-auto object-contain"
              />
              <h3 className="mt-5 text-xl font-semibold text-primary">
                Hyvilo
              </h3>
              <p className="mt-1 text-sm font-semibold text-stone-500">
                Stagiaire développement web
              </p>
              <p className="mt-3 text-sm leading-6 text-stone-600">
                Stage de 3 mois autour du développement d'une application web —
                back-office et front-office — encadré par le directeur technique.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="pill-tag">Mai – Août 2026</span>
              <span className="pill-tag">React</span>
              <span className="pill-tag">Django</span>
              <span className="pill-tag">GitLab CI/CD</span>
            </div>
          </motion.div>

          {/* Capgemini card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="soft-card flex flex-col justify-between gap-6 p-6"
          >
            <div>
              <span className="pill-tag mb-4 inline-flex">Alternance signée</span>
              <img
                src={capgeminiLogo}
                alt="Capgemini"
                className="mx-auto h-14 w-auto object-contain"
              />
              <h3 className="mt-5 text-xl font-semibold text-primary">
                Capgemini
              </h3>
              <p className="mt-1 text-sm font-semibold text-stone-500">
                Ingénieure Logiciel — Alternance
              </p>
              <p className="mt-3 text-sm leading-6 text-stone-600">
                Intégration des équipes spécialisées en ingénierie logicielle
                et architectures Cloud dès septembre 2026, pour un contrat de
                24 mois en parallèle du Master MIAGE.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="pill-tag">Septembre 2026</span>
              <span className="pill-tag">24 mois</span>
              <span className="pill-tag">Ingénierie logicielle</span>
              <span className="pill-tag">Cloud</span>
            </div>
          </motion.div>
        </div>

        {/* Highlights strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4"
        >
          {highlights.map(({ icon, label, value }) => (
            <div
              key={label}
              className="rounded-[1.75rem] border border-stone-200/80 bg-white/85 p-4 shadow-soft"
            >
              <div className="flex items-center gap-2">
                {icon}
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-stone-400">
                  {label}
                </p>
              </div>
              <p className="mt-2 text-sm font-semibold text-primary">{value}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
