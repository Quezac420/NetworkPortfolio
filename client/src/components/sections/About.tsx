import { motion } from "framer-motion";
import { CalendarDays, GraduationCap, Network, Shield, Music } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { DeadpoolLogo } from "@/components/ui/deadpool-logo";
import { MusicPassion } from "@/components/ui/music-passion";
import { DeadpoolPassion } from "@/components/ui/deadpool-passion";
import { useContext } from "react";
import { LanguageContext } from "@/App";

export default function About() {
  const { language } = useContext(LanguageContext);

  return (
    <section id="about" className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center mb-8">
            <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-red-600 to-red-800 text-transparent bg-clip-text">
              {language === 'fr' ? 'À propos de moi' : 'About me'}
            </h2>
            <DeadpoolLogo className="h-8 w-8 ml-3" />
          </div>

          <div className="space-y-6 text-gray-700 relative">
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-red-500 to-red-700"></div>
            <p className="pl-4 text-gray-700 dark:text-gray-300">
              {language === 'fr' ? (
                <>Je suis actuellement en <strong className="text-red-600">deuxième année de BUT Réseaux et Télécommunications</strong>, où j'acquiers 
                des compétences techniques solides dans la conception, l'installation et la maintenance des 
                infrastructures de communication.</>
              ) : (
                <>I am currently in my <strong className="text-red-600">second year of Networks and Telecommunications studies</strong>, 
                where I am developing strong technical skills in the design, installation and maintenance of 
                communication infrastructures.</>
              )}
            </p>
            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-600">
              <div className="flex items-center mb-2">
                <Network className="h-5 w-5 text-red-600 mr-2" />
                <strong className="text-red-700">
                  {language === 'fr' ? 'Spécialisation en administration système et réseau' : 'Specialization in system and network administration'}
                </strong>
              </div>
              <p>
                {language === 'fr' ? (
                  <>Je maîtrise à la fois les aspects théoriques et pratiques des infrastructures informatiques, 
                  de la cybersécurité, et des solutions de télécommunications modernes. Je m'intéresse particulièrement 
                  à la sécurisation des réseaux, à la mise en place de solutions de monitoring et à l'automatisation 
                  des tâches d'administration.</>
                ) : (
                  <>I master both theoretical and practical aspects of IT infrastructures, 
                  cybersecurity, and modern telecommunications solutions. I am particularly interested 
                  in network security, implementing monitoring solutions, and automating 
                  administration tasks.</>
                )}
              </p>
            </div>
            <p className="pl-4 text-gray-700 dark:text-gray-300">
              {language === 'fr' ? (
                <>En dehors de mes études, je développe mes compétences en programmation et en automatisation
                des infrastructures.</>
              ) : (
                <>Outside of my studies, I develop my skills in programming and infrastructure
                automation.</>
              )}
            </p>
            <div className="flex flex-col md:flex-row gap-4 pl-0">
              <div className="flex-1">
                {/* Remplace la carte MusicPassion par une version simplifiée */}
                <div 
                  className="relative p-6 rounded-lg bg-gradient-to-br from-red-50 to-white border border-red-100 overflow-hidden group"
                >
                  <div className="flex items-center mb-3">
                    <div className="p-2 rounded-full bg-red-100">
                      <span className="text-xl text-red-600">♫</span>
                    </div>
                    <h3 className="ml-3 font-bold text-lg text-red-600">Passionné de Musique</h3>
                  </div>

                  <p className="text-gray-700">
                    J'adore jouer et composer dans mon temps libre, la musique est une source d'inspiration constante.
                  </p>

                  <div className="absolute top-8 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-1">
                      <div className="text-2xl text-red-600">♪</div>
                      <div className="text-2xl text-red-600">♫</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                {/* Remplace la carte DeadpoolPassion par une version simplifiée */}
                <div 
                  className="relative p-6 rounded-lg bg-gradient-to-br from-red-50 to-white border border-red-100 overflow-hidden group"
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

                  <div className="absolute right-0 bottom-0 opacity-0 group-hover:opacity-50 transition-opacity duration-300">
                    <DeadpoolLogo className="h-24 w-24" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Card className="mt-12 border-2 border-red-500 shadow-md">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <GraduationCap className="h-6 w-6 text-red-600 mr-2" />
                <h3 className="text-xl font-semibold">{language === 'fr' ? 'Formation' : 'Education'}</h3>
              </div>
              <ul className="space-y-6">
                <li className="relative pl-8 pb-6 border-l-2 border-red-200">
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-red-600"></div>
                  <div>
                    <div className="flex items-center mb-1">
                      <CalendarDays className="h-4 w-4 text-red-600 mr-2" />
                      <p className="font-medium text-red-700">2023 - {language === 'fr' ? 'Présent' : 'Present'}</p>
                    </div>
                    <p className="font-bold text-gray-800">
                      {language === 'fr' ? 'BUT Réseaux et Télécommunications' : 'Bachelor in Networks and Telecommunications'}
                    </p>
                    <p className="text-sm text-gray-600">
                      {language === 'fr' ? 'Université de Technologie' : 'Technology University'}
                    </p>
                  </div>
                </li>
                <li className="relative pl-8">
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-red-600"></div>
                  <div>
                    <div className="flex items-center mb-1">
                      <CalendarDays className="h-4 w-4 text-red-600 mr-2" />
                      <p className="font-medium text-red-700">2023</p>
                    </div>
                    <p className="font-bold text-gray-800">
                      {language === 'fr' ? 'Baccalauréat MATHS NSI' : 'High School Diploma in Mathematics and Computer Science'}
                    </p>
                    <p className="text-sm text-gray-600">
                      {language === 'fr' ? 'Lycée Général' : 'General High School'}
                    </p>
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