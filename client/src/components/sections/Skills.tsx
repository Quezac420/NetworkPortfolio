import { motion } from "framer-motion";
import { SkillBar } from "@/components/ui/skill-bar";
import { CertificationCard } from "@/components/ui/certification-card";
import { technicalSkills, developmentSkills, certifications } from "@/data/content";

export default function Skills() {
  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Mes compétences</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h3 className="text-xl font-semibold mb-6">Compétences techniques</h3>
              {technicalSkills.map((skill, index) => (
                <SkillBar 
                  key={index}
                  name={skill.name}
                  percentage={skill.percentage}
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
