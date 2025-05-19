import { useContext } from "react";
import { LanguageContext } from "@/App";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

export function LanguageSwitcher() {
  const { language, toggleLanguage } = useContext(LanguageContext);
  
  return (
    <Button 
      variant="outline" 
      size="sm" 
      className="flex items-center gap-2 border-red-500 text-red-600 hover:bg-red-50"
      onClick={toggleLanguage}
    >
      <Globe className="h-4 w-4" />
      <span className="w-6 text-center">{language === "fr" ? "EN" : "FR"}</span>
    </Button>
  );
}