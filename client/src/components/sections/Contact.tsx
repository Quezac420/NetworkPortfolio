import { motion } from "framer-motion";
import { useContext } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { LanguageContext } from "@/App";

export default function Contact() {
  const { language } = useContext(LanguageContext);

  return (
    <section id="disponibilite" className="py-16 bg-white dark:bg-gray-800 relative">
      <div className="h-1 bg-red-600 absolute top-0 left-0 w-full" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-white">
            {language === "fr" ? "Disponibilité" : "Availability"}
          </h2>

          <div className="max-w-3xl mx-auto">
            <Card className="shadow-lg border-red-100 bg-white dark:bg-gray-800">
              <CardContent className="pt-6 p-8">
                <h4 className="font-semibold text-xl mb-4 text-red-600 dark:text-red-400">
                  {language === "fr" ? "À la recherche d'une alternance" : "Looking for an internship"}
                </h4>
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                  {language === "fr"
                    ? "Je suis actuellement à la recherche d'une alternance en réseaux et télécommunications. N'hésitez pas à me contacter pour discuter de toute opportunité professionnelle qui me permettrait de développer mes compétences tout en poursuivant ma formation."
                    : "I am currently looking for an internship in networks and telecommunications. Feel free to contact me to discuss any professional opportunity that would allow me to develop my skills while continuing my education."}
                </p>

                <div className="mt-6 bg-red-50 dark:bg-gray-700 p-4 rounded-lg border border-red-100 dark:border-red-700">
                  <p className="text-red-700 dark:text-red-200 italic">
                    {language === "fr"
                      ? "Disponible pour une alternance à partir de septembre 2025"
                      : "Available for an internship starting September 2025"}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
}