import { useState } from "react";
import { motion } from "framer-motion";
import { DeadpoolLogo } from "./deadpool-logo";

export function DeadpoolPassion() {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="relative p-6 rounded-lg bg-gradient-to-br from-red-50 to-white border border-red-100 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
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
      
      {/* Animation Deadpool qui apparaît */}
      <motion.div 
        className="absolute -right-16 bottom-0"
        initial={{ x: 50, opacity: 0 }}
        animate={isHovered ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        <DeadpoolLogo className="h-32 w-32 transform -rotate-12" />
      </motion.div>
      
      {/* Bulles de dialogue */}
      {isHovered && (
        <motion.div 
          className="absolute top-4 right-24"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <div className="bg-white p-2 rounded-lg shadow-lg border border-red-300 relative">
            <p className="text-xs text-red-600 font-bold">Chimichanga!</p>
            <div className="absolute -bottom-2 right-0 w-0 h-0 border-t-8 border-l-8 border-t-red-300 border-l-transparent transform rotate-45"></div>
          </div>
        </motion.div>
      )}
    </div>
  );
}