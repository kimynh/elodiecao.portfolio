import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Harp from "./components/Harp";
import Alternance from "./components/Alternance";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import ScrollToTop from "./components/ScrollToTop";
import SectionDivider from "./components/SectionDivider";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen font-sans text-text relative overflow-x-hidden">
      {loading && <Loader />}
      <Navbar />
      <main className="relative z-10 pt-24 pb-8">
        <Hero />
        <SectionDivider />
        <Alternance />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Skills />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <Experience />
        <SectionDivider />
        <Harp />
        <SectionDivider />
        <Contact />
        <ScrollToTop />
      </main>
      <Footer />
    </div>
  );
}

export default App;
