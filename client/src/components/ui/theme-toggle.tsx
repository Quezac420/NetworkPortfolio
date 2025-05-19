
import { useContext } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { ThemeContext } from "@/contexts/ThemeContext";

export function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  
  return (
    <Button 
      variant="outline" 
      size="sm" 
      className="flex items-center gap-2 border-red-500 text-red-600 hover:bg-red-50 dark:border-red-400 dark:text-red-300"
      onClick={toggleTheme}
    >
      {theme === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
    </Button>
  );
}
