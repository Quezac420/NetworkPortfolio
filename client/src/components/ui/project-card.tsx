import { motion } from "framer-motion";
import { ChevronRight, Server, Shield } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { DeadpoolLogo } from "./deadpool-logo";

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
      <Card className="overflow-hidden shadow-md border-2 border-red-500 h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg relative">
        <div className="absolute top-0 right-0 p-2 z-10">
          <DeadpoolLogo className="h-8 w-8 opacity-75" />
        </div>
        <div className="h-48 bg-gray-200 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 z-[1]"></div>
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 p-3 flex gap-2 z-[2]">
            {title.toLowerCase().includes('réseau') && (
              <div className="bg-red-600 rounded-full p-1.5">
                <Server className="h-5 w-5 text-white" />
              </div>
            )}
            {(title.toLowerCase().includes('sécurité') || title.toLowerCase().includes('admin')) && (
              <div className="bg-red-600 rounded-full p-1.5">
                <Shield className="h-5 w-5 text-white" />
              </div>
            )}
          </div>
        </div>
        <CardContent className="p-6">
          <h3 className="font-bold text-xl mb-2 text-red-600">{title}</h3>
          <p className="text-gray-600 mb-4">
            {description}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, i) => (
              <Badge key={i} variant="outline" className="border-red-500 text-red-700 hover:bg-red-50">
                {tag}
              </Badge>
            ))}
          </div>
          <a href={link} className="text-red-600 hover:text-red-800 font-bold inline-flex items-center transition-colors">
            Voir les détails
            <ChevronRight className="h-4 w-4 ml-1" />
          </a>
        </CardContent>
      </Card>
    </motion.div>
  );
}
