import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  link?: string;
  index: number;
}

export function ProjectCard({ title, description, imageUrl, tags, link = "#", index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="overflow-hidden shadow-md border border-gray-100 h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
        <div className="h-48 bg-gray-200 relative overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        </div>
        <CardContent className="p-6">
          <h3 className="font-bold text-xl mb-2">{title}</h3>
          <p className="text-gray-600 mb-4">
            {description}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, i) => (
              <Badge key={i} variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                {tag}
              </Badge>
            ))}
          </div>
          <a href={link} className="text-primary hover:text-[#1E40AF] font-medium inline-flex items-center transition-colors">
            Voir les détails
            <ChevronRight className="h-4 w-4 ml-1" />
          </a>
        </CardContent>
      </Card>
    </motion.div>
  );
}
