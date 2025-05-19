
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Globe, Download } from "lucide-react";
import { useContext } from "react";
import { LanguageContext } from "@/App";

export default function Header() {
  const { language, toggleLanguage } = useContext(LanguageContext);

  const handleLanguageToggle = () => {
    toggleLanguage();
  };

  const openCV = () => {
    window.open('/cv.html', '_blank');
  };

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center h-16">
          <div className="text-xl font-bold text-red-600">Portfolio Mathis</div>

          <div className="hidden md:flex items-center space-x-6">
            <a href="/#about" className="text-gray-600 hover:text-red-600">
              {language === "fr" ? "À propos" : "About"}
            </a>
            <a href="/#skills" className="text-gray-600 hover:text-red-600">
              {language === "fr" ? "Compétences" : "Skills"}
            </a>
            <a href="/#projects" className="text-gray-600 hover:text-red-600">
              {language === "fr" ? "Projets" : "Projects"}
            </a>
            <a href="/#contact" className="text-gray-600 hover:text-red-600">
              {language === "fr" ? "Contact" : "Contact"}
            </a>
          </div>

          <div className="flex items-center space-x-3">
            <Button 
              variant="outline" 
              size="sm" 
              className="flex items-center gap-2 border-red-500 text-red-600 hover:bg-red-50"
              onClick={handleLanguageToggle}
            >
              <Globe className="h-4 w-4" />
              <span className="w-6 text-center">{language === "fr" ? "EN" : "FR"}</span>
            </Button>

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
