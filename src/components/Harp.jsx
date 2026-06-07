import React from "react";
import { motion } from "framer-motion";
import { Music, Youtube, Heart } from "lucide-react";
import harpBg from "../assets/harp-bg.svg";

const floatingNotes = [
  { symbol: "♪", x: 6,  y: 12, duration: 4.0, delay: 0.0 },
  { symbol: "♫", x: 88, y: 18, duration: 3.5, delay: 0.8 },
  { symbol: "♩", x: 12, y: 72, duration: 5.0, delay: 1.5 },
  { symbol: "♬", x: 82, y: 62, duration: 4.5, delay: 0.3 },
  { symbol: "♭", x: 50, y: 8,  duration: 3.8, delay: 1.2 },
  { symbol: "♪", x: 93, y: 42, duration: 4.2, delay: 0.6 },
  { symbol: "♫", x: 4,  y: 48, duration: 3.6, delay: 1.8 },
  { symbol: "♩", x: 70, y: 85, duration: 4.8, delay: 0.9 },
];

const tags = ["Harpe celtique", "Compositions", "Reprises", "Chaîne YouTube", "Musique classique"];

export default function Harp() {
  return (
    <section id="harp" className="section-shell relative">
      <img
        src={harpBg}
        alt=""
        className="pointer-events-none absolute inset-0 h-full w-full select-none object-cover opacity-50"
        aria-hidden="true"
      />

      {/* Notes flottantes */}
      {floatingNotes.map((note, i) => (
        <motion.span
          key={i}
          className="pointer-events-none absolute hidden select-none text-3xl text-accent/20 md:block"
          style={{ left: `${note.x}%`, top: `${note.y}%` }}
          animate={{ y: [-14, 14, -14], opacity: [0.15, 0.45, 0.15] }}
          transition={{
            duration: note.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: note.delay,
          }}
        >
          {note.symbol}
        </motion.span>
      ))}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="soft-card relative overflow-hidden p-8 md:p-10"
      >
        {/* Ligne accent en haut de la carte */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

        <div className="grid gap-8 lg:grid-cols-[1fr_1.3fr]">
          {/* Colonne gauche */}
          <div className="flex flex-col">
            <span className="eyebrow">Hors cadre</span>
            <h2 className="section-title mt-5">Ma passion : la harpe</h2>

            <div className="mt-3 flex items-center gap-2">
              <Music size={16} className="text-accent" />
              <span className="text-sm font-semibold text-stone-500">Pratiquée depuis l'enfance · 15 ans+</span>
            </div>

            <p className="mt-5 text-base leading-8 text-stone-600">
              Je pratique la harpe depuis l'enfance. Cet instrument m'apporte créativité, rigueur et sens du détail — des qualités que je mets aussi au service de mes projets informatiques.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span key={tag} className="pill-tag">{tag}</span>
              ))}
            </div>

            <a
              href="https://www.youtube.com/@elodieynh"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-red-500 px-5 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
            >
              <Youtube size={17} />
              Voir ma chaîne @elodieynh
            </a>

            {/* Bandeau citation */}
            <div className="mt-auto pt-8 flex items-center gap-3 border-t border-stone-100">
              <Heart size={13} className="shrink-0 text-rose-400" />
              <p className="text-sm italic text-stone-400">
                La musique, comme le code, demande précision et créativité.
              </p>
              <Heart size={13} className="shrink-0 text-rose-400" />
            </div>
          </div>

          {/* Colonne droite : vidéo */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="overflow-hidden rounded-3xl border border-white/80 bg-white/70 p-3 shadow-soft"
          >
            <iframe
              width="100%"
              height="100%"
              style={{ minHeight: "280px" }}
              src="https://www.youtube.com/embed/Jg4Kn7YzMhY"
              title="YouTube Harpe Elodie Cao"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-[1.25rem]"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
