import React from "react";
import { SiGithub } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="px-4 pb-10 pt-4 text-center text-sm text-stone-500 md:px-6">
      <div className="flex items-center justify-center gap-3 mb-2">
        <a
          href="https://github.com/kimynh"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 font-medium text-stone-500 transition-colors hover:text-primary"
        >
          <SiGithub size={15} />
          github.com/kimynh
        </a>
      </div>
      © {new Date().getFullYear()} Elodie Cao. Portfolio conçu avec React, Vite, Tailwind CSS et Framer Motion.
    </footer>
  );
}
