import { useState, useEffect } from "react";
import { Menu, Download, Globe } from "lucide-react";
import { useLocation } from "wouter";
import { DeadpoolLogo } from "@/components/ui/deadpool-logo";
import { Button } from "@/components/ui/button";

// Header simplifié qui utilise le français par défaut
export default function Header() {
  const language = "fr";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();
  const isHomePage = location === "/";

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: isHomePage ? "#home" : "/", label: language === "fr" ? "Accueil" : "Home" },
    { href: isHomePage ? "#about" : "/#about", label: language === "fr" ? "À propos" : "About" },
    { href: isHomePage ? "#skills" : "/#skills", label: language === "fr" ? "Compétences" : "Skills" },
    { href: isHomePage ? "#projects" : "/#projects", label: language === "fr" ? "Projets" : "Projects" },
    { href: isHomePage ? "#contact" : "/#contact", label: language === "fr" ? "Disponibilité" : "Availability" }
  ];

  // Simple CV download button
  const downloadCV = () => {
    window.open('/cv.html', '_blank');
  };

  return (
    <header className={`fixed w-full bg-white ${isScrolled ? "bg-opacity-95 shadow-sm" : "bg-opacity-95"} z-50 transition-all duration-300`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <a href="/" className="flex items-center space-x-2">
            <DeadpoolLogo className="h-8 w-8" />
            <span className="text-xl font-bold text-red-600">Mathis Torres</span>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.href} 
                    className="text-gray-800 hover:text-red-600 transition-colors"
                    onClick={closeMobileMenu}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            
            <div className="flex items-center space-x-3">
              <LanguageButton />
              <DownloadCV />
            </div>
          </nav>
          
          {/* Mobile Navigation Toggle */}
          <div className="md:hidden flex items-center space-x-3">
            <LanguageButton />
            <button 
              className="focus:outline-none" 
              onClick={toggleMobileMenu} 
              aria-label="Menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        <div className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}>
          <ul className="py-3 space-y-2 border-t">
            {navItems.map((item, index) => (
              <li key={index}>
                <a 
                  href={item.href} 
                  className="block py-2 px-4 hover:bg-gray-100"
                  onClick={closeMobileMenu}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="py-2 px-4">
              <DownloadCV />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
