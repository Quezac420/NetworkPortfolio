import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useContext } from "react";
import { LanguageContext } from "@/App";

export function DownloadButton() {
  const { language } = useContext(LanguageContext);
  
  const handleDownload = () => {
    window.open('/cv.html', '_blank');
  };
  
  return (
    <Button 
      variant="outline" 
      size="sm" 
      className="flex items-center gap-2 border-red-500 text-red-600 hover:bg-red-50"
      onClick={handleDownload}
    >
      <Download className="h-4 w-4" />
      <span>{language === "fr" ? "CV" : "Resume"}</span>
    </Button>
  );
}