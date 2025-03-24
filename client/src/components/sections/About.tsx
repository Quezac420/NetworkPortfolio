import { motion } from "framer-motion";
import { Minus } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">À propos de moi</h2>
          <div className="space-y-6 text-gray-700">
            <p>
              Je suis actuellement en deuxième année de BUT Réseaux et Télécommunications, où j'acquiers 
              des compétences techniques solides dans la conception, l'installation et la maintenance des 
              infrastructures de communication.
            </p>
            <p>
              <strong className="text-primary">Spécialisé en administration système et réseau</strong>, je maîtrise à la fois les aspects théoriques et pratiques des infrastructures informatiques, de la cybersécurité, et des solutions de télécommunications modernes. Je m'intéresse particulièrement à la sécurisation des réseaux, à la mise en place de solutions de monitoring et à l'automatisation des tâches d'administration.
            </p>
            <p>
              En dehors de mes études, je développe mes compétences en programmation et en automatisation
              des infrastructures. Je suis également passionné de musique et un grand fan de Deadpool !
              Je suis constamment à la recherche de nouveaux défis qui me permettent d'approfondir mes 
              connaissances et de contribuer à des projets innovants.
            </p>
          </div>
          
          <Card className="mt-12 bg-gray-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Formation</h3>
              <ul className="space-y-4">
                <li className="flex">
                  <div className="flex-shrink-0 h-6 w-6 flex items-start mt-1">
                    <Minus className="h-5 w-5 text-primary" />
                  </div>
                  <div className="ml-3">
                    <p className="font-medium">2022 - Présent</p>
                    <p className="text-gray-600">BUT Réseaux et Télécommunications</p>
                    <p className="text-sm text-gray-500">Université de Technologie</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 h-6 w-6 flex items-start mt-1">
                    <Minus className="h-5 w-5 text-primary" />
                  </div>
                  <div className="ml-3">
                    <p className="font-medium">2022</p>
                    <p className="text-gray-600">Baccalauréat Scientifique option Sciences de l'Ingénieur</p>
                    <p className="text-sm text-gray-500">Lycée Général</p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
