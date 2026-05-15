import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import HeroComp from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [visibleSections, setVisibleSections] = useState({}); // Hapus skills: true

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      console.log('Found sections:', Array.from(sections).map(s => s.id));

      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.8 && rect.bottom > 0;

        if (isVisible) {
          setVisibleSections(prev => ({
            ...prev,
            [section.id]: true
          }));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <HeroComp />
      <About isVisible={visibleSections.about || false} />
      <Skills isVisible={visibleSections.skills || false} />
      <Education isVisible={visibleSections.education || false} />
      <Projects isVisible={visibleSections.projects || false} />
      <Certificates isVisible={visibleSections.certificates || false} />
      <Contact isVisible={visibleSections.contact || false} />
      <Footer />
    </div>
  );
}