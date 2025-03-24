import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Link } from "wouter";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <header className={`fixed w-full bg-white ${isScrolled ? "bg-opacity-95 shadow-sm" : "bg-opacity-95"} z-50 transition-all duration-300`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <a href="#home" className="text-xl font-bold text-primary">Mon Portfolio</a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li><a href="#home" className="text-dark hover:text-primary transition-colors">Accueil</a></li>
              <li><a href="#about" className="text-dark hover:text-primary transition-colors">À propos</a></li>
              <li><a href="#skills" className="text-dark hover:text-primary transition-colors">Compétences</a></li>
              <li><a href="#projects" className="text-dark hover:text-primary transition-colors">Projets</a></li>
              <li><a href="#contact" className="text-dark hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </nav>
          
          {/* Mobile Navigation Toggle */}
          <button 
            className="md:hidden focus:outline-none" 
            onClick={toggleMobileMenu} 
            aria-label="Menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
        
        {/* Mobile Navigation Menu */}
        <div className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}>
          <ul className="py-3 space-y-2 border-t">
            <li><a href="#home" className="block py-2 px-4 hover:bg-gray-100" onClick={closeMobileMenu}>Accueil</a></li>
            <li><a href="#about" className="block py-2 px-4 hover:bg-gray-100" onClick={closeMobileMenu}>À propos</a></li>
            <li><a href="#skills" className="block py-2 px-4 hover:bg-gray-100" onClick={closeMobileMenu}>Compétences</a></li>
            <li><a href="#projects" className="block py-2 px-4 hover:bg-gray-100" onClick={closeMobileMenu}>Projets</a></li>
            <li><a href="#contact" className="block py-2 px-4 hover:bg-gray-100" onClick={closeMobileMenu}>Contact</a></li>
          </ul>
        </div>
      </div>
    </header>
  );
}
