import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Hero() {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight text-[#1F2937]">
              Étudiant en <span className="text-primary">Réseaux</span> et <span className="text-primary">Télécommunications</span>
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Passionné par les technologies de réseau et les solutions de communication modernes. 
              Je développe mes compétences techniques pour construire l'infrastructure numérique de demain.
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <Button 
                asChild 
                size="lg" 
                className="bg-primary hover:bg-[#1E40AF] text-white"
              >
                <a href="#projects">Voir mes projets</a>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="border-primary text-primary hover:bg-primary hover:text-white"
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
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-blue-100 flex items-center justify-center">
              <Avatar className="w-60 h-60 md:w-72 md:h-72 border-4 border-white shadow-lg">
                <AvatarImage src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Photo de profil" />
                <AvatarFallback className="text-4xl">JD</AvatarFallback>
              </Avatar>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
