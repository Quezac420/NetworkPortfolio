import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

// Création d'un contexte pour la langue directement dans la page d'accueil
export type LanguageType = 'fr' | 'en';

export default function Home() {
  // État de langue au niveau de la page d'accueil
  const [language, setLanguage] = useState<LanguageType>('fr');
  
  // Fonction pour changer la langue
  const toggleLanguage = () => {
    setLanguage(prevLang => prevLang === 'fr' ? 'en' : 'fr');
  };
  
  return (
    <div>
      <Header language={language} toggleLanguage={toggleLanguage} />
      <main>
        <Hero />
        <About language={language} />
        <Skills language={language} />
        <Projects language={language} />
        <Contact language={language} />
      </main>
      <Footer language={language} />
    </div>
  );
}