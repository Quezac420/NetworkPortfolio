import { ProjectCard } from "@/components/ui/project-card";
import { projects, projectsEN } from "@/data/content";
import { useContext } from "react";
import { LanguageContext } from "@/App";

export default function Projects() {
  const { language } = useContext(LanguageContext);
  const projectsData = language === 'fr' ? projects : projectsEN;
  
  return (
    <section id="projects" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="h-1 bg-red-600 absolute top-0 left-0 w-full" />
        <div className="h-1 bg-red-600 absolute bottom-0 left-0 w-full" />
        <h2 className="text-3xl font-bold mb-12 text-center">
          {language === 'fr' ? 'Mes projets' : 'My projects'}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              index={index}
              id={project.id}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              tags={project.tags}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
