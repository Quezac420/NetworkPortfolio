import { useState, useEffect } from 'react';
import { useParams, Link } from 'wouter';
import { ArrowLeft, Download, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { DeadpoolLogo } from '@/components/ui/deadpool-logo';
import { projects, projectsEN } from '@/data/content';
import ReactMarkdown from 'react-markdown';

export default function ProjectDetail() {
  const { id } = useParams();
  const [language, setLanguage] = useState<'fr' | 'en'>('fr');
  
  // Get the appropriate project data based on language
  const currentProjects = language === 'fr' ? projects : projectsEN;
  const project = currentProjects.find(p => p.id === id);
  
  // If project not found, show a message
  if (!project) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold text-red-600 mb-4">Projet non trouvé</h1>
        <p className="mb-8">Le projet que vous recherchez n'existe pas.</p>
        <Link href="/">
          <Button>
            <ArrowLeft className="mr-2 h-4 w-4" /> Retour à l'accueil
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative h-64 md:h-80 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30 z-10"></div>
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 z-20">
          <DeadpoolLogo className="h-12 w-12" />
        </div>
        <div className="absolute inset-0 flex items-center justify-between z-10 container mx-auto px-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{project.title}</h1>
            <div className="flex flex-wrap gap-2 mt-4">
              {project.tags.map((tag, i) => (
                <Badge key={i} className="bg-red-600 hover:bg-red-700">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
          <div className="hidden md:flex gap-2">
            <Button 
              variant="ghost" 
              className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20"
              onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
            >
              <Globe className="mr-2 h-4 w-4" />
              {language === 'fr' ? 'English' : 'Français'}
            </Button>
            <Button 
              variant="ghost" 
              className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20"
              onClick={() => window.print()}
            >
              <Download className="mr-2 h-4 w-4" />
              {language === 'fr' ? 'Télécharger' : 'Download'}
            </Button>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <Link href="/#projects">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {language === 'fr' ? 'Retour aux projets' : 'Back to projects'}
            </Button>
          </Link>
          <div className="flex md:hidden gap-2">
            <Button 
              variant="outline"
              size="sm"
              onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
            >
              <Globe className="mr-2 h-4 w-4" />
              {language === 'fr' ? 'EN' : 'FR'}
            </Button>
            <Button 
              variant="outline"
              size="sm"
              onClick={() => window.print()}
            >
              <Download className="mr-2 h-4 w-4" />
              {language === 'fr' ? 'PDF' : 'PDF'}
            </Button>
          </div>
        </div>
        
        <Card className="p-6 md:p-8 shadow-lg border-red-100 mb-8">
          <p className="text-lg text-gray-700 mb-8">{project.description}</p>
          
          <div className="prose prose-red max-w-none">
            <ReactMarkdown>
              {project.detailedDescription}
            </ReactMarkdown>
          </div>
        </Card>
      </div>
    </div>
  );
}