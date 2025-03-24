import { motion } from "framer-motion";
import { SkillBar } from "@/components/ui/skill-bar";
import { CertificationCard } from "@/components/ui/certification-card";
import { technicalSkills, developmentSkills, certifications } from "@/data/content";

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
          <h2 className="text-3xl font-bold mb-6 text-center">Mes compétences</h2>
          <p className="text-center mb-12 max-w-3xl mx-auto text-gray-700">
            Spécialiste en <span className="font-bold text-red-600">administration système et réseau</span>, je maîtrise les technologies clés pour construire et maintenir des infrastructures IT robustes et sécurisées.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h3 className="text-xl font-semibold mb-6">Compétences techniques</h3>
              {technicalSkills.map((skill, index) => (
                <SkillBar 
                  key={index}
                  name={skill.name}
                  percentage={skill.percentage}
                  color={skill.color}
                />
              ))}
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-6">Compétences en développement</h3>
              {developmentSkills.map((skill, index) => (
                <SkillBar 
                  key={index}
                  name={skill.name}
                  percentage={skill.percentage}
                  color="bg-green-500"
                />
              ))}
            </div>
            
            <div className="md:col-span-2 mt-4">
              <h3 className="text-xl font-semibold mb-6">Certifications</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {certifications.map((cert, index) => (
                  <CertificationCard 
                    key={index}
                    title={cert.title}
                    issuer={cert.issuer}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
