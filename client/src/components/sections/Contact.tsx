import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, LinkedinIcon, GithubIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Le nom doit contenir au moins 2 caractères" }),
  email: z.string().email({ message: "Email invalide" }),
  subject: z.string().min(2, { message: "Le sujet doit contenir au moins 2 caractères" }),
  message: z.string().min(10, { message: "Le message doit contenir au moins 10 caractères" }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    
    try {
      // Here we would normally send the data to an API
      // For now, we'll just simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message envoyé !",
        description: "Merci pour votre message. Je vous répondrai dans les plus brefs délais.",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de l'envoi du message.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Me contacter</h2>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6">Informations de contact</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-primary mt-1">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-700">Email</p>
                    <a href="mailto:prenom.nom@etudiant.univ.fr" className="text-primary hover:text-[#1E40AF]">
                      prenom.nom@etudiant.univ.fr
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-primary mt-1">
                    <LinkedinIcon className="h-6 w-6" />
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-700">LinkedIn</p>
                    <a 
                      href="https://linkedin.com/in/nom-prenom" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:text-[#1E40AF]"
                    >
                      linkedin.com/in/nom-prenom
                    </a>
                  </div>
                </div>
                

              </div>
              
              <Card className="mt-8">
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-4">Disponibilité</h4>
                  <p className="text-gray-600">
                    Je suis actuellement à la recherche d'un stage en réseaux et télécommunications 
                    pour une durée de 3 mois à partir de mai 2024. N'hésitez pas à me contacter pour 
                    discuter de toute opportunité.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-6">Envoyez-moi un message</h3>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <Label htmlFor="name">Nom</Label>
                  <Input 
                    id="name"
                    {...form.register("name")}
                    placeholder="Votre nom"
                    className="mt-1"
                  />
                  {form.formState.errors.name && (
                    <p className="text-red-500 text-xs mt-1">{form.formState.errors.name.message}</p>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email"
                    type="email"
                    {...form.register("email")}
                    placeholder="votre@email.com"
                    className="mt-1"
                  />
                  {form.formState.errors.email && (
                    <p className="text-red-500 text-xs mt-1">{form.formState.errors.email.message}</p>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="subject">Sujet</Label>
                  <Input 
                    id="subject"
                    {...form.register("subject")}
                    placeholder="Sujet de votre message"
                    className="mt-1"
                  />
                  {form.formState.errors.subject && (
                    <p className="text-red-500 text-xs mt-1">{form.formState.errors.subject.message}</p>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message"
                    rows={4}
                    {...form.register("message")}
                    placeholder="Votre message..."
                    className="mt-1"
                  />
                  {form.formState.errors.message && (
                    <p className="text-red-500 text-xs mt-1">{form.formState.errors.message.message}</p>
                  )}
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-[#1E40AF]"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Envoi en cours..." : "Envoyer"}
                </Button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
