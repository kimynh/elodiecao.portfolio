import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { RotateCcw, CheckCircle2, XCircle } from "lucide-react";

const QUESTIONS = [
  // ── Python ──────────────────────────────────────────────────
  {
    lang: "Python",
    question: "Quel est le résultat de `2 ** 10` ?",
    options: ["20", "100", "512", "1024"],
    answer: 3,
    explanation: "`**` est l'opérateur d'exponentiation. 2¹⁰ = 1024.",
  },
  {
    lang: "Python",
    question: "Quelle méthode ajoute un élément à la fin d'une liste ?",
    options: [".add()", ".push()", ".append()", ".insert()"],
    answer: 2,
    explanation: "`.append()` ajoute en fin de liste. `.insert(i, val)` à un index précis.",
  },
  {
    lang: "Python",
    question: "Que retourne `bool(0)` ?",
    options: ["True", "False", "None", "0"],
    answer: 1,
    explanation: "En Python, `0`, `None`, `[]`, `{}` et `\"\"` sont tous falsy → `False`.",
  },
  {
    lang: "Python",
    question: "Comment déclare-t-on une fonction en Python ?",
    options: ["function", "fun", "def", "func"],
    answer: 2,
    explanation: "Le mot-clé `def` définit une fonction. Exemple : `def ma_fonction():`.",
  },
  {
    lang: "Python",
    question: "Que retourne `len(\"bonjour\")` ?",
    options: ["5", "6", "7", "8"],
    answer: 2,
    explanation: "`len()` compte les caractères. \"bonjour\" en a 7.",
  },
  {
    lang: "Python",
    question: "Quelle syntaxe crée un dictionnaire vide ?",
    options: ["[]", "()", "{}", "dict[]"],
    answer: 2,
    explanation: "`{}` est un dict vide. `[]` est une liste, `()` un tuple.",
  },
  {
    lang: "Python",
    question: "Que génère `range(3)` ?",
    options: ["[1, 2, 3]", "[0, 1, 2, 3]", "[0, 1, 2]", "[1, 2]"],
    answer: 2,
    explanation: "`range(n)` génère les entiers de 0 à n-1. `range(3)` → 0, 1, 2.",
  },
  {
    lang: "Python",
    question: "Quelle list comprehension retourne les carrés de 0 à 4 ?",
    options: [
      "[x^2 for x in range(5)]",
      "[x**2 for x in range(5)]",
      "[x*x for x in range(1,5)]",
      "{x**2 for x in range(5)}",
    ],
    answer: 1,
    explanation: "`[x**2 for x in range(5)]` → [0, 1, 4, 9, 16]. Attention : `x^2` est un XOR en Python !",
  },
  {
    lang: "Python",
    question: "Comment hérite-t-on d'une classe en Python ?",
    options: [
      "class Enfant extends Parent:",
      "class Enfant inherits Parent:",
      "class Enfant(Parent):",
      "class Enfant : Parent:",
    ],
    answer: 2,
    explanation: "La classe parente se met entre parenthèses. Pas de mot-clé `extends` comme en Java.",
  },
  {
    lang: "Python",
    question: "Que retourne `type(3.14)` ?",
    options: ["<class 'int'>", "<class 'double'>", "<class 'float'>", "<class 'number'>"],
    answer: 2,
    explanation: "Python utilise `float` pour les décimaux. `double` est un type Java, pas Python.",
  },
  // ── Java ────────────────────────────────────────────────────
  {
    lang: "Java",
    question: "Quelle est la valeur par défaut d'un `int` en Java ?",
    options: ["null", "undefined", "0", "-1"],
    answer: 2,
    explanation: "Types primitifs ont une valeur par défaut : `int` → 0, `boolean` → false, objet → null.",
  },
  {
    lang: "Java",
    question: "Quel mot-clé empêche une méthode d'être surchargée ?",
    options: ["static", "final", "private", "abstract"],
    answer: 1,
    explanation: "`final` sur une méthode interdit sa redéfinition dans une sous-classe.",
  },
  {
    lang: "Java",
    question: "Quelle est la classe parente de toutes les classes Java ?",
    options: ["Base", "Root", "Object", "Class"],
    answer: 2,
    explanation: "Toutes les classes héritent implicitement de `java.lang.Object`.",
  },
  {
    lang: "Java",
    question: "Quelle différence entre `==` et `.equals()` en Java ?",
    options: [
      "Aucune différence",
      "`==` compare les valeurs, `.equals()` les références",
      "`==` compare les références, `.equals()` le contenu",
      "`.equals()` ne fonctionne que sur les int",
    ],
    answer: 2,
    explanation: "`==` compare les adresses mémoire. `.equals()` compare le contenu de l'objet.",
  },
  {
    lang: "Java",
    question: "Que signifie `static` sur une méthode ?",
    options: [
      "Elle ne peut pas être modifiée",
      "Elle appartient à la classe, pas à l'instance",
      "Elle s'exécute plus vite",
      "Elle est privée",
    ],
    answer: 1,
    explanation: "`static` : appelable sans instanciation → `MaClasse.maMethode()` directement.",
  },
  {
    lang: "Java",
    question: "Qu'est-ce que l'autoboxing en Java ?",
    options: [
      "Convertir un tableau en liste",
      "Compiler automatiquement le code",
      "Convertir automatiquement un primitif en wrapper (`int` → `Integer`)",
      "Créer une copie d'un objet",
    ],
    answer: 2,
    explanation: "L'autoboxing convertit automatiquement `int` ↔ `Integer`, `double` ↔ `Double`, etc.",
  },
  {
    lang: "Java",
    question: "Quel mot-clé crée une instance de classe ?",
    options: ["create", "init", "make", "new"],
    answer: 3,
    explanation: "`new MaClasse()` alloue la mémoire et appelle le constructeur.",
  },
  {
    lang: "Java",
    question: "Quelle interface implémenter pour rendre un objet triable ?",
    options: ["Sortable", "Orderable", "Comparable", "Iterable"],
    answer: 2,
    explanation: "`Comparable<T>` impose `compareTo()`, utilisé par `Collections.sort()`.",
  },
  {
    lang: "Java",
    question: "Quelle est la différence entre `ArrayList` et `LinkedList` ?",
    options: [
      "Aucune différence",
      "ArrayList est plus rapide en accès, LinkedList en insertion au milieu",
      "LinkedList ne peut pas stocker de null",
      "ArrayList est thread-safe",
    ],
    answer: 1,
    explanation: "`ArrayList` (tableau, accès O(1)) vs `LinkedList` (liste chaînée, insertion O(1) en milieu).",
  },
  {
    lang: "Java",
    question: "Qu'est-ce qu'une interface en Java ?",
    options: [
      "Une classe avec un seul constructeur",
      "Un contrat définissant des méthodes sans implémentation",
      "Une classe finale",
      "Une classe qui étend Object",
    ],
    answer: 1,
    explanation: "Une interface est un contrat. Depuis Java 8, elle peut avoir des méthodes `default`.",
  },
];

function RainOverlay() {
  const drops = useMemo(
    () =>
      Array.from({ length: 55 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        delay: Math.random() * 1.2,
        duration: 0.55 + Math.random() * 0.6,
        height: 14 + Math.random() * 18,
        width: 1 + Math.random(),
      })),
    []
  );

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {drops.map((d) => (
        <motion.div
          key={d.id}
          className="absolute rounded-full"
          style={{
            left: `${d.x}%`,
            top: -30,
            width: d.width,
            height: d.height,
            background: "linear-gradient(to bottom, transparent, #93c5fd)",
            opacity: 0.7,
          }}
          animate={{ y: "105vh" }}
          transition={{ duration: d.duration, delay: d.delay, repeat: Infinity, ease: "linear" }}
        />
      ))}
    </div>
  );
}

function pickRandom() {
  return QUESTIONS[Math.floor(Math.random() * QUESTIONS.length)];
}

const LANG_STYLE = {
  Python: { bg: "rgba(59,130,246,0.12)", border: "rgba(59,130,246,0.3)", color: "#3b82f6", dot: "#3b82f6" },
  Java:   { bg: "rgba(249,115,22,0.12)", border: "rgba(249,115,22,0.3)",  color: "#f97316", dot: "#f97316" },
};

export default function Quiz() {
  const [q, setQ] = useState(pickRandom);
  const [selected, setSelected] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [showRain, setShowRain] = useState(false);

  const lang = LANG_STYLE[q.lang];
  const isCorrect = answered && selected === q.answer;
  const isWrong = answered && selected !== q.answer;

  const handleSelect = (idx) => {
    if (answered) return;
    setSelected(idx);
    setAnswered(true);

    if (idx === q.answer) {
      confetti({
        particleCount: 140,
        spread: 90,
        origin: { y: 0.65 },
        colors: ["#d6568c", "#f472b6", "#fda4af", "#f9a8d4", "#ffffff", "#e879f9"],
      });
      setTimeout(() =>
        confetti({ particleCount: 60, spread: 120, origin: { x: 0.1, y: 0.7 }, colors: ["#f472b6", "#fda4af"] }),
        300
      );
      setTimeout(() =>
        confetti({ particleCount: 60, spread: 120, origin: { x: 0.9, y: 0.7 }, colors: ["#d6568c", "#e879f9"] }),
        500
      );
    } else {
      setShowRain(true);
      setTimeout(() => setShowRain(false), 3000);
    }
  };

  const handleNext = () => {
    setQ(pickRandom());
    setSelected(null);
    setAnswered(false);
    setShowRain(false);
  };

  return (
    <>
      {showRain && <RainOverlay />}

      <section className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-8"
        >
          <span className="eyebrow">Quiz dev</span>
          <h2 className="section-title mt-5">Teste tes connaissances.</h2>
          <p className="section-copy">Une question Python ou Java. Bonne réponse → confettis. Mauvaise réponse → météo défavorable.</p>
        </motion.div>

        <motion.div
          key={q.question}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="soft-card overflow-hidden"
        >
          {/* Header */}
          <div className="px-7 pt-7 pb-5 border-b border-stone-100">
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <span
                className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.18em]"
                style={{ background: lang.bg, border: `1px solid ${lang.border}`, color: lang.color }}
              >
                <span className="h-1.5 w-1.5 rounded-full" style={{ background: lang.dot }} />
                {q.lang}
              </span>
              <button
                onClick={handleNext}
                className="inline-flex items-center gap-1.5 rounded-full border border-stone-200 bg-white/80 px-3 py-1.5 text-xs font-semibold text-stone-500 transition-all hover:border-stone-300 hover:text-stone-700"
              >
                <RotateCcw size={12} />
                Nouvelle question
              </button>
            </div>

            {/* Code-styled question */}
            <div className="mt-5 rounded-xl border px-5 py-4 font-mono text-sm leading-7" style={{ background: "#1e0d18", borderColor: "#4a1e35" }}>
              <div className="mb-2 flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full" style={{ background: "#ff6b9d" }} />
                <span className="h-2 w-2 rounded-full" style={{ background: "#ffb3d1" }} />
                <span className="h-2 w-2 rounded-full" style={{ background: "#ff8fc4" }} />
                <span className="ml-3 text-[10px]" style={{ color: "#7d4063" }}>question.{q.lang.toLowerCase()}</span>
              </div>
              <p style={{ color: "#ffc2d9" }}>{q.question}</p>
            </div>
          </div>

          {/* Options */}
          <div className="px-7 py-6 grid gap-3 sm:grid-cols-2">
            {q.options.map((opt, idx) => {
              const isSelected = selected === idx;
              const isAnswerCorrect = idx === q.answer;

              let borderColor = "#e7e5e4";
              let bg = "rgba(255,255,255,0.8)";
              let textColor = "#44403c";

              if (answered) {
                if (isAnswerCorrect) {
                  borderColor = "#86efac";
                  bg = "rgba(134,239,172,0.12)";
                  textColor = "#15803d";
                } else if (isSelected && !isAnswerCorrect) {
                  borderColor = "#fca5a5";
                  bg = "rgba(252,165,165,0.12)";
                  textColor = "#b91c1c";
                }
              } else if (isSelected) {
                borderColor = "#f472b6";
                bg = "rgba(244,114,182,0.08)";
              }

              return (
                <motion.button
                  key={idx}
                  onClick={() => handleSelect(idx)}
                  whileHover={!answered ? { scale: 1.015 } : {}}
                  whileTap={!answered ? { scale: 0.985 } : {}}
                  className="flex items-center gap-3 rounded-2xl border px-4 py-3.5 text-left text-sm font-medium transition-all"
                  style={{ borderColor, background: bg, color: textColor, cursor: answered ? "default" : "pointer" }}
                >
                  <span
                    className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border text-[10px] font-bold"
                    style={{
                      borderColor: answered && isAnswerCorrect ? "#86efac" : answered && isSelected ? "#fca5a5" : "#d6d3d1",
                      background: answered && isAnswerCorrect ? "rgba(134,239,172,0.2)" : "transparent",
                      color: textColor,
                    }}
                  >
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span>{opt}</span>
                  {answered && isAnswerCorrect && <CheckCircle2 size={14} className="ml-auto shrink-0 text-green-500" />}
                  {answered && isSelected && !isAnswerCorrect && <XCircle size={14} className="ml-auto shrink-0 text-red-400" />}
                </motion.button>
              );
            })}
          </div>

          {/* Explanation */}
          <AnimatePresence>
            {answered && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden"
              >
                <div
                  className="mx-7 mb-7 rounded-2xl border px-5 py-4"
                  style={{
                    background: isCorrect ? "rgba(134,239,172,0.08)" : "rgba(252,165,165,0.08)",
                    borderColor: isCorrect ? "rgba(134,239,172,0.4)" : "rgba(252,165,165,0.4)",
                  }}
                >
                  <p className="text-xs font-bold uppercase tracking-[0.18em] mb-1.5" style={{ color: isCorrect ? "#15803d" : "#b91c1c" }}>
                    {isCorrect ? "Bonne réponse !" : "Pas tout à fait…"}
                  </p>
                  <p className="text-sm leading-6 text-stone-600">{q.explanation}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </section>
    </>
  );
}
