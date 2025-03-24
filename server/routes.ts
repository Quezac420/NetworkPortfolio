import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form API endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, subject, message } = req.body;
      
      // Validate input
      if (!name || !email || !subject || !message) {
        return res.status(400).json({ 
          message: "Tous les champs sont requis" 
        });
      }
      
      // In a real application, we would handle the contact form submission here
      // For example, sending an email or storing in a database
      
      // Send success response
      res.status(200).json({ 
        message: "Message reçu avec succès" 
      });
    } catch (error) {
      console.error("Error processing contact form:", error);
      res.status(500).json({ 
        message: "Une erreur est survenue lors du traitement de votre message" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
