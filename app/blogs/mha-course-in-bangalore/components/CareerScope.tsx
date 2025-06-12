import { Building2, ClipboardList, Globe, Users } from "lucide-react";

export default function CareerScope() {
  const careers = [
    {
      title: "Hospital Administrator",
      icon: <Building2 className="w-6 h-6" />,
      salary: "₹5-30 LPA",
      growth: "High Demand",
    },
    {
      title: "Medical Operations Manager",
      icon: <ClipboardList className="w-6 h-6" />,
      salary: "₹6-25 LPA",
      growth: "Fast Growth",
    },
    {
      title: "Healthcare Consultant",
      icon: <Globe className="w-6 h-6" />,
      salary: "₹8-35 LPA",
      growth: "Global Opportunities",
    },
    {
      title: "Public Health Manager",
      icon: <Users className="w-6 h-6" />,
      salary: "Govt. Pay Scales",
      growth: "Job Security",
    },
  ];

  return (
    <section className="space-y-12">
      <div className="mx-auto max-w-4xl text-center space-y-4">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-primary">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-secondary">
            Career Scope
          </span>{" "}
          After MHA
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Diverse leadership opportunities in healthcare sector
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {careers.map((career, index) => (
          <div
            key={index}
            className="rounded-xl border bg-card p-6 transition-all hover:shadow-md"
          >
            <div className="flex flex-col h-full">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                {career.icon}
              </div>
              <h3 className="text-lg font-semibold">{career.title}</h3>
              <p className="mt-2 text-primary font-medium">{career.salary}</p>
              <p className="mt-2 text-sm text-muted-foreground">
                {career.growth}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
