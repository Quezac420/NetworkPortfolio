import { Award } from "lucide-react";
import { DeadpoolLogo } from "./deadpool-logo";

interface CertificationCardProps {
  title: string;
  issuer: string;
}

export function CertificationCard({ title, issuer }: CertificationCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md border-2 border-red-500 hover:shadow-lg transition-all transform hover:-translate-y-1">
      <div className="flex justify-between items-start mb-3">
        <div className="text-red-600 dark:text-red-400">
          <Award className="h-6 w-6" />
        </div>
        <DeadpoolLogo className="h-5 w-5 opacity-50" />
      </div>
      <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-1">{title}</h4>
      <p className="text-sm text-gray-500 dark:text-gray-400">{issuer}</p>
    </div>
  );
}
