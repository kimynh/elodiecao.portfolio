import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, Sparkles, X } from "lucide-react";
import { SiGithub } from "react-icons/si";

const navLinks = [
  { href: "#hero", label: "Accueil" },
  { href: "#about", label: "À propos" },
  { href: "#skills", label: "Compétences" },
  { href: "#projects", label: "Projets" },
  { href: "#experience", label: "Expérience" },
  { href: "#harp", label: "Harpe" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-6"
    >
      <div className="soft-card mx-auto flex max-w-6xl items-center justify-between px-5 py-3 md:px-6">
        <a href="#hero" className="flex items-center gap-3 text-primary transition-colors">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary text-sm font-bold text-white">
            EC
          </span>
          <span>
            <span className="block text-sm font-semibold tracking-tight">Elodie Cao</span>
            <span className="block text-xs text-stone-500">L3 MIAGE • Master à la rentrée</span>
          </span>
        </a>
        <div className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-stone-600 transition-colors hover:bg-white hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://github.com/kimynh"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-stone-200 bg-white/80 text-stone-600 transition-colors hover:border-stone-300 hover:text-primary"
            aria-label="Profil GitHub"
          >
            <SiGithub size={17} />
          </a>
          <a
            href="#experience"
            className="ml-1 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
          >
            <Sparkles size={16} />
            Stage Hyvilo en cours
          </a>
        </div>
        <button
          className="rounded-2xl border border-border bg-white/80 p-2 text-primary shadow-soft focus:outline-none focus:ring-2 focus:ring-primary md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Ouvrir le menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {open && (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          className="soft-card mx-auto mt-2 flex max-w-6xl flex-col gap-2 p-4 md:hidden"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-2xl px-4 py-3 text-base font-medium text-stone-700 transition-colors hover:bg-white hover:text-primary"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://github.com/kimynh"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-2xl px-4 py-3 text-base font-medium text-stone-700 transition-colors hover:bg-white hover:text-primary"
            onClick={() => setOpen(false)}
          >
            <SiGithub size={18} />
            Profil GitHub
          </a>
          <a
            href="#experience"
            className="rounded-2xl bg-primary px-4 py-3 text-base font-semibold text-white"
            onClick={() => setOpen(false)}
          >
            Stage Hyvilo en cours
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
}
