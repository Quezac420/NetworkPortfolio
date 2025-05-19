import { motion } from "framer-motion";
import { DeadpoolLogo } from "./deadpool-logo";

interface SkillBarProps {
  name: string;
  percentage: number;
  color?: string;
}

export function SkillBar({ name, percentage, color = "bg-red-600" }: SkillBarProps) {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-2">
        <span className="font-bold text-gray-800">{name}</span>
        <div className="flex items-center">
          <span className="font-semibold text-red-600 mr-1">{percentage}</span>
          <span className="text-sm text-gray-600">%</span>
          {percentage >= 90 && <DeadpoolLogo className="h-4 w-4 ml-1" />}
        </div>
      </div>
      <div className="h-3 bg-gray-200 rounded-full relative border border-gray-300">
        <motion.div 
          className={`h-full ${color} rounded-full`}
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
        
        {/* Marks for reference points */}
        <div className="absolute inset-0 flex justify-between px-1">
          <div></div> {/* Empty div for spacing */}
          <div className="h-full w-0.5 bg-gray-300/50"></div> {/* 25% */}
          <div className="h-full w-0.5 bg-gray-300/50"></div> {/* 50% */}
          <div className="h-full w-0.5 bg-gray-300/50"></div> {/* 75% */}
          <div></div> {/* Empty div for spacing */}
        </div>
      </div>
    </div>
  );
}
