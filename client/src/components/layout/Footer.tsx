import { LinkedinIcon, GithubIcon, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1F2937] py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-white font-medium text-lg">Portfolio - Étudiant en Réseaux et Télécommunications</p>
            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} - Tous droits réservés</p>
          </div>
          
          <div className="flex space-x-4">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <span className="sr-only">LinkedIn</span>
              <LinkedinIcon className="h-6 w-6" />
            </a>
            
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <span className="sr-only">GitHub</span>
              <GithubIcon className="h-6 w-6" />
            </a>
            
            <a href="mailto:contact@example.com" className="text-gray-400 hover:text-white transition-colors">
              <span className="sr-only">Email</span>
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
