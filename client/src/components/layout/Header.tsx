
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Globe, Download } from "lucide-react";
import React, { useContext } from "react";
import { LanguageContext } from "@/App";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export default function Header() {
  const { language, toggleLanguage } = useContext(LanguageContext);

  const openCV = () => {
    window.open('/cv.html', '_blank');
  };

  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center h-16">
          <a href="/#" className="text-xl font-bold text-red-600 hover:text-red-700">Portfolio Mathis</a>

          <div className="hidden md:flex items-center space-x-6">
            <a href="/#about" className="text-gray-600 dark:text-gray-200 hover:text-red-600">
              {language === "fr" ? "À propos" : "About"}
            </a>
            <a href="/#skills" className="text-gray-600 dark:text-gray-200 hover:text-red-600">
              {language === "fr" ? "Compétences" : "Skills"}
            </a>
            <a href="/#projects" className="text-gray-600 dark:text-gray-200 hover:text-red-600">
              {language === "fr" ? "Projets" : "Projects"}
            </a>
            <a href="/#disponibilite" className="text-gray-600 dark:text-gray-200 hover:text-red-600">
              {language === "fr" ? "Disponibilité" : "Availability"}
            </a>
          </div>

          <div className="flex items-center space-x-3">
            <ThemeToggle />
            <LanguageSwitcher />

            <Button 
              variant="outline" 
              size="sm" 
              className="flex items-center gap-2 border-red-500 text-red-600 hover:bg-red-50"
              onClick={openCV}
            >
              <Download className="h-4 w-4" />
              <span>CV</span>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
