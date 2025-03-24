import { CheckCircle } from "lucide-react";

interface CertificationCardProps {
  title: string;
  issuer: string;
}

export function CertificationCard({ title, issuer }: CertificationCardProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="text-primary mb-2">
        <CheckCircle className="h-6 w-6" />
      </div>
      <h4 className="font-medium text-gray-800">{title}</h4>
      <p className="text-sm text-gray-500">{issuer}</p>
    </div>
  );
}
