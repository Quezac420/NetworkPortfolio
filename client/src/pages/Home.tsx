
import React, { useContext } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import { LanguageContext } from "@/App";

export default function Home() {
  const { language } = useContext(LanguageContext);
  
  return (
    <div className="min-h-screen w-full bg-background dark:bg-gray-900 text-foreground transition-colors duration-200">
      <Header />
      <div className="h-1 bg-red-600" />
      <Hero />
      <div className="h-1 bg-red-600" />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
