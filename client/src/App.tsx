import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import Home from "@/pages/Home";
import ProjectDetail from "@/pages/ProjectDetail";
import NotFound from "@/pages/not-found";
import React, { useState, createContext, useCallback } from "react";
import { ThemeProvider } from "@/contexts/ThemeContext";

type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
}

export const LanguageContext = createContext<LanguageContextType>({
  language: 'fr',
  toggleLanguage: () => {},
  setLanguage: () => {}
});

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/project/:id" component={ProjectDetail} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  // Add language state to the app
  const [language, setLanguage] = useState<'fr' | 'en'>('fr');
  
  // Create a toggle function that switches the language
  const toggleLanguage = useCallback(() => {
    const newLang = language === 'fr' ? 'en' : 'fr';
    setLanguage(newLang);
    handleSetLanguage(newLang);
  }, [language]);

  const handleSetLanguage = useCallback((lang: 'fr' | 'en') => {
    setLanguage(lang);
  }, []);
  
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <LanguageContext.Provider value={{ language, toggleLanguage, setLanguage: handleSetLanguage }}>
        <Router />
        <Toaster />
      </LanguageContext.Provider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
