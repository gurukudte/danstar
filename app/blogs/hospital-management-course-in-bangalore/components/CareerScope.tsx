import {
  Building2,
  Briefcase,
  ClipboardSignature,
  Shield,
  Rocket,
} from "lucide-react";

export default function CareerScope() {
  const careers = [
    {
      title: "Hospital Administrator",
      icon: <Building2 className="w-6 h-6" />,
      salary: "₹4-15 LPA",
    },
    {
      title: "Healthcare Consultant",
      icon: <Briefcase className="w-6 h-6" />,
      salary: "₹6-20 LPA",
    },
    {
      title: "Medical Practice Manager",
      icon: <ClipboardSignature className="w-6 h-6" />,
      salary: "₹5-12 LPA",
    },
    {
      title: "Health Insurance Analyst",
      icon: <Shield className="w-6 h-6" />,
      salary: "₹4-10 LPA",
    },
    {
      title: "Public Health Official",
      icon: <Rocket className="w-6 h-6" />,
      salary: "Govt. Pay Scales",
    },
  ];

  return (
    <section className="space-y-12">
      <div className="mx-auto max-w-4xl text-center space-y-4">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-primary">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-secondary">
            Career Scope
          </span>{" "}
          & Salary Potential
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Diverse leadership opportunities in India's growing healthcare sector
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {careers.map((career, index) => (
          <div
            key={index}
            className="rounded-xl border bg-card p-6 text-center transition-all hover:shadow-md"
          >
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              {career.icon}
            </div>
            <h3 className="mt-4 text-lg font-semibold">{career.title}</h3>
            <p className="mt-2 text-sm font-medium text-primary">
              {career.salary}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
