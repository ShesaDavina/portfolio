import React, { useEffect, useState } from "react";
import HeaderComp from "./components/Header";
import HeroComp from "./components/Hero";
import AboutComp from "./components/About";
import SkillsComp from "./components/Skills";
import EducationComp from "./components/Education";
import ProjectsComp from "./components/Projects";
import ContactComp from "./components/Contact";
import FooterComp from "./components/Footer";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <>
      <HeaderComp />
      <HeroComp />
      <AboutComp />
      <SkillsComp />
      <EducationComp />
      <ProjectsComp />
      <ContactComp />
      <FooterComp />
    </>
  );
}