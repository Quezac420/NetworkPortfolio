import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Download, Globe } from "lucide-react";
import { useContext } from "react";
import { LanguageContext } from "@/App";

export default function Header() {
  const { language, toggleLanguage } = useContext(LanguageContext);

  const openCV = () => {
    window.open('/cv.html', '_blank');
  };

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center h-16">
          <Link href="/">
            <a className="text-xl font-bold text-red-600">MT</a>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            <Link href="/#about">
              <a className="text-gray-600 hover:text-red-600">
                {language === "fr" ? "À propos" : "About"}
              </a>
            </Link>
            <Link href="/#skills">
              <a className="text-gray-600 hover:text-red-600">
                {language === "fr" ? "Compétences" : "Skills"}
              </a>
            </Link>
            <Link href="/#projects">
              <a className="text-gray-600 hover:text-red-600">
                {language === "fr" ? "Projets" : "Projects"}
              </a>
            </Link>
            <Link href="/#contact">
              <a className="text-gray-600 hover:text-red-600">
                {language === "fr" ? "Contact" : "Contact"}
              </a>
            </Link>
          </div>

          <div className="flex items-center space-x-3">
            <Button 
              variant="outline" 
              size="sm" 
              className="flex items-center gap-2 border-red-500 text-red-600 hover:bg-red-50"
              onClick={toggleLanguage}
            >
              <Globe className="h-4 w-4" />
              <span className="w-6 text-center">{language === "fr" ? "FR" : "EN"}</span>
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