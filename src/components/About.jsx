import React from "react";
import { motion } from "framer-motion";

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
        </div>
        <div className="soft-card p-6 md:p-8">
          <p className="text-base leading-8 text-stone-600 md:text-lg">
            Je suis actuellement en L3 MIAGE à l’Université Paris Cité et j’entrerai en Master MIAGE à Panthéon-Sorbonne à la rentrée 2026. Mon parcours me permet de faire le lien entre développement logiciel, analyse de données et compréhension des besoins métier, avec un intérêt marqué pour les systèmes d’information.
          </p>
          <p className="mt-5 text-base leading-8 text-stone-600 md:text-lg">
            J’aime les projets bien pensés, les interfaces lisibles et les équipes où l’on construit avec méthode. Je suis actuellement en stage chez Hyvilo depuis le 20 mai 2026, avant de poursuivre avec une alternance à partir de septembre 2026.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="pill-tag">Université Paris Cité</span>
            <span className="pill-tag">MIAGE</span>
            <span className="pill-tag">Développement & SI</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
