import { useState, useContext } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import { LanguageContext } from "@/App";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

// Création d'un contexte pour la langue directement dans la page d'accueil
export type LanguageType = 'fr' | 'en';

export default function Home() {
  const { language } = useContext(LanguageContext);
  
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}