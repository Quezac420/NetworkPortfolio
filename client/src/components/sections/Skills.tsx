import { motion } from "framer-motion";
import { SkillBar } from "@/components/ui/skill-bar";
import { CertificationCard } from "@/components/ui/certification-card";
import { technicalSkills, developmentSkills, certifications } from "@/data/content";
import { Server, Code, Award } from "lucide-react";
import { DeadpoolLogo } from "@/components/ui/deadpool-logo";

export default function Skills() {
  return (
    <section id="skills" className="py-16 bg-gradient-to-b from-red-50 to-red-100 relative">
      <div className="absolute top-0 left-0 w-full h-2 bg-red-600"></div>
      <div className="absolute bottom-0 left-0 w-full h-2 bg-red-600"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center mb-8">
            <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-red-600 to-red-800 text-transparent bg-clip-text">Mes compétences</h2>
            <DeadpoolLogo className="h-8 w-8 ml-3" />
          </div>
          
          <div className="relative bg-white rounded-lg p-6 border-2 border-red-500 shadow-lg max-w-3xl mx-auto mb-12">
            <div className="absolute -top-3 -right-3 bg-red-600 rounded-full p-1.5">
              <Server className="h-5 w-5 text-white" />
            </div>
            <p className="text-center text-gray-700">
              Spécialiste en <span className="font-bold text-red-600">administration système et réseau</span>, je maîtrise les technologies clés pour construire et maintenir des infrastructures IT robustes et sécurisées. Mes compétences techniques reflètent ma passion pour l'excellence opérationnelle.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg border-2 border-red-500 shadow-md relative">
              <div className="absolute -top-4 left-4 bg-white px-4 py-1 border-2 border-red-600 rounded-full flex items-center space-x-2">
                <Server className="h-5 w-5 text-red-600" />
                <h3 className="text-xl font-bold text-red-600">Compétences techniques</h3>
              </div>
              <div className="mt-4 pt-2">
                {technicalSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <SkillBar 
                      name={skill.name}
                      percentage={skill.percentage}
                      color={skill.color}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg border-2 border-red-500 shadow-md relative">
              <div className="absolute -top-4 left-4 bg-white px-4 py-1 border-2 border-red-600 rounded-full flex items-center space-x-2">
                <Code className="h-5 w-5 text-red-600" />
                <h3 className="text-xl font-bold text-red-600">Compétences en développement</h3>
              </div>
              <div className="mt-4 pt-2">
                {developmentSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <SkillBar 
                      name={skill.name}
                      percentage={skill.percentage}
                      color="bg-red-500"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="md:col-span-2 mt-8">
              <div className="flex items-center justify-center mb-6">
                <Award className="h-6 w-6 text-red-600 mr-2" />
                <h3 className="text-xl font-bold text-red-600">Certifications</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <CertificationCard 
                      title={cert.title}
                      issuer={cert.issuer}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
