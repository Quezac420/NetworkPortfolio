import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import Home from "@/pages/Home";
import ProjectDetail from "@/pages/ProjectDetail";
import NotFound from "@/pages/not-found";
import { useState, createContext, useCallback } from "react";

// Create a context for language
export const LanguageContext = createContext({
  language: 'fr' as 'fr' | 'en',
  toggleLanguage: () => {},
  setLanguage: (lang: 'fr' | 'en') => {}
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
    setLanguage(prev => prev === 'fr' ? 'en' : 'fr');
  }, []);

  const handleSetLanguage = useCallback((lang: 'fr' | 'en') => {
    setLanguage(lang);
  }, []);
  
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageContext.Provider value={{ language, toggleLanguage, setLanguage: handleSetLanguage }}>
        <Router />
        <Toaster />
      </LanguageContext.Provider>
    </QueryClientProvider>
  );
}

export default App;
