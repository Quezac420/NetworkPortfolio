import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { DeadpoolBackground } from "@/components/ui/deadpool-background";
import { DeadpoolLogo } from "@/components/ui/deadpool-logo";
import { Server, Shield, Music } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <DeadpoolBackground />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center p-6 border-4 border-red-600 rounded-lg bg-white dark:bg-gray-800 shadow-lg relative">
          <div className="absolute top-4 right-4">
            <DeadpoolLogo className="h-10 w-10" />
          </div>
          <motion.div 
            className="md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight bg-gradient-to-r from-red-600 to-red-800 text-transparent bg-clip-text">
              Mathis Torres
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 leading-tight text-[#1F2937]">
              Étudiant en <span className="text-red-600">Réseaux</span> et <span className="text-red-600">Télécommunications</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Passionné par les technologies de réseau et les solutions de communication modernes.
              Je développe mes compétences techniques pour construire l'infrastructure numérique de demain.
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              <div className="flex items-center bg-red-50 dark:bg-red-900/20 rounded-full px-3 py-1 border border-red-200 dark:border-red-700">
                <Server className="h-4 w-4 text-red-600 mr-2" />
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200">Admin Réseau</span>
              </div>
              <div className="flex items-center bg-red-50 dark:bg-red-900/20 rounded-full px-3 py-1 border border-red-200 dark:border-red-700">
                <Shield className="h-4 w-4 text-red-600 mr-2" />
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200">Sécurité IT</span>
              </div>
              <div className="flex items-center bg-red-50 dark:bg-red-900/20 rounded-full px-3 py-1 border border-red-200 dark:border-red-700">
                <Music className="h-4 w-4 text-red-600 mr-2" />
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200">Passionné de Musique</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <Button 
                asChild 
                size="lg" 
                className="bg-red-600 hover:bg-red-700 text-white"
              >
                <a href="#projects">Voir mes projets</a>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
              >
                <a href="#contact">Me contacter</a>
              </Button>
            </div>
          </motion.div>
          <motion.div 
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border-4 border-red-600 animate-pulse"></div>
              <div className="w-60 h-60 md:w-72 md:h-72 border-4 border-white shadow-lg rounded-full relative overflow-hidden bg-red-600">
                <img 
                  src="https://i.imgur.com/fOIwj0K.png" 
                  alt="Deadpool" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 right-0 bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg border-2 border-white">
                  <Music className="h-6 w-6" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}