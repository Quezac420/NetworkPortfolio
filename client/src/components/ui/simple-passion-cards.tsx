import { useState } from "react";
import { motion } from "framer-motion";
import { Music } from "lucide-react";
import { DeadpoolLogo } from "./deadpool-logo";

// Composant simplifié pour la passion musique
export function MusicCard() {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="relative p-6 rounded-lg bg-gradient-to-br from-red-50 to-white border border-red-100 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center mb-3">
        <div className="p-2 rounded-full bg-red-100">
          <Music className="h-5 w-5 text-red-600" />
        </div>
        <h3 className="ml-3 font-bold text-lg text-red-600">Passionné de Musique</h3>
      </div>
      
      <p className="text-gray-700">
        J'adore jouer et composer dans mon temps libre, la musique est une source d'inspiration constante.
      </p>
      
      {isHovered && (
        <motion.div 
          className="absolute top-8 right-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex space-x-1">
            <div className="text-2xl text-red-600">♪</div>
            <div className="text-2xl text-red-600">♫</div>
          </div>
        </motion.div>
      )}
    </div>
  );
}

// Composant simplifié pour la passion Deadpool
export function DeadpoolCard() {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="relative p-6 rounded-lg bg-gradient-to-br from-red-50 to-white border border-red-100 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center mb-3">
        <div className="p-2 rounded-full bg-red-100">
          <DeadpoolLogo className="h-5 w-5" />
        </div>
        <h3 className="ml-3 font-bold text-lg text-red-600">Fan de Deadpool</h3>
      </div>
      
      <p className="text-gray-700">
        L'humour et la résilience de ce personnage m'inspirent au quotidien et se reflètent dans mon approche de résolution de problèmes.
      </p>
      
      {isHovered && (
        <motion.div 
          className="absolute right-0 bottom-0"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <DeadpoolLogo className="h-24 w-24 opacity-50" />
        </motion.div>
      )}
    </div>
  );
}