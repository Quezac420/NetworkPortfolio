import { useState } from "react";
import { motion } from "framer-motion";
import { Music } from "lucide-react";

export function MusicPassion() {
  const [isHovered, setIsHovered] = useState(false);
  
  // Notes de musique qui apparaissent lorsqu'on survole le composant
  const notes = [
    { x: -30, y: -40, rotate: -15, delay: 0 },
    { x: 30, y: -50, rotate: 15, delay: 0.1 },
    { x: -40, y: -30, rotate: -10, delay: 0.2 },
    { x: 40, y: -20, rotate: 20, delay: 0.3 },
    { x: 0, y: -60, rotate: 0, delay: 0.15 }
  ];

  return (
    <div 
      className="relative p-6 rounded-lg bg-gradient-to-br from-red-50 to-white border border-red-100"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
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
      
      {/* Notes de musique animées */}
      {notes.map((note, index) => (
        <motion.div 
          key={index}
          className="absolute"
          initial={{ opacity: 0, y: 0, x: 0, rotate: 0 }}
          animate={isHovered ? { 
            opacity: [0, 1, 0],
            y: note.y,
            x: note.x,
            rotate: note.rotate
          } : { opacity: 0 }}
          transition={{ 
            duration: 1.5, 
            delay: note.delay,
            times: [0, 0.3, 1],
            repeat: isHovered ? Infinity : 0,
            repeatDelay: 0.5
          }}
          style={{ top: '40%', left: '50%' }}
        >
          {index % 2 === 0 ? 
            <span className="text-xl text-red-600 font-bold">♪</span> : 
            <span className="text-2xl text-red-600 font-bold">♫</span>
          }
        </motion.div>
      ))}
    </div>
  );
}