import { CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function CollegeCard({
  name,
  features,
  icon,
  badge,
}: {
  name: string;
  features: string[];
  icon: React.ReactNode;
  badge?: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border bg-card p-6 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1">
      {badge && (
        <Badge variant="secondary" className="absolute right-4 top-4 text-white">
          {badge}
        </Badge>
      )}

      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
          {icon}
        </div>
        <h3 className="text-xl font-semibold">{name}</h3>
      </div>

      <ul className="mt-6 space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <CheckCircle className="h-5 w-5 flex-shrink-0 text-success mt-0.5" />
            <span className="text-muted-foreground">{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex justify-end">
        <button className="inline-flex items-center text-sm font-medium text-primary group-hover:underline">
          Learn more
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
