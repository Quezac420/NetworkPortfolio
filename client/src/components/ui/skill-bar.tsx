import { motion } from "framer-motion";

interface SkillBarProps {
  name: string;
  percentage: number;
  color?: string;
}

export function SkillBar({ name, percentage, color = "bg-primary" }: SkillBarProps) {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="font-medium text-gray-700">{name}</span>
        <span className="text-sm text-gray-500">{percentage}%</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full">
        <motion.div 
          className={`h-full ${color} rounded-full`}
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
