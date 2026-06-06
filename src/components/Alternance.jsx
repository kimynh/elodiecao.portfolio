import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Handshake, MapPin, Car } from "lucide-react";
import sorbonneLogo from "../assets/sorbonne-logo.png";

const highlights = [
  {
    icon: <GraduationCap size={18} className="text-accent" />,
    label: "Admise à",
    value: "Panthéon-Sorbonne",
  },
  {
    icon: <MapPin size={18} className="text-accent" />,
    label: "Localisation",
    value: "Paris — Île-de-France",
  },
  {
    icon: <Handshake size={18} className="text-accent" />,
    label: "Disponibilité",
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
        <span className="eyebrow">Alternance 2026</span>
        <h2 className="section-title mt-5 max-w-3xl">
          Admise à Panthéon-Sorbonne,{" "}
          <span className="font-display italic text-taupe">
            je cherche une entreprise partenaire.
          </span>
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-stone-600 md:text-lg">
          Après mon stage chez Hyvilo cet été, je rejoindrai le Master MIAGE à
          Panthéon-Sorbonne à la rentrée 2026. Pour intégrer cette formation,
          j'ai besoin d'un contrat d'alternance. Je suis à la recherche d'une
          entreprise où je pourrai contribuer concrètement tout en montant en
          compétences sur le développement et les systèmes d'information.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1.1fr]">
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
                exigence académique et la qualité de son réseau professionnel,
                ancré dans le tissu économique parisien.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="pill-tag">Université historique</span>
              <span className="pill-tag">Réseau Paris 1</span>
              <span className="pill-tag">2-3 sem. entreprise / 2-3 sem. école</span>
            </div>
          </motion.div>

          {/* Infos pratiques */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            <div className="rounded-[1.75rem] border border-stone-200/80 bg-[#f8f5ef] p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-stone-500">
                Ce que j'apporte
              </p>
              <p className="mt-3 text-base leading-7 text-stone-700">
                Une base solide en développement web (React, Django), en
                analyse de données et en gestion de projet, avec la capacité
                de comprendre à la fois le code et les besoins fonctionnels.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
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
                  <p className="mt-2 text-sm font-semibold text-primary">
                    {value}
                  </p>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-semibold text-white transition-transform hover:scale-[1.02]"
            >
              Proposer une alternance
              <Handshake size={18} />
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
