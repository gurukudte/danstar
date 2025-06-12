import { ClipboardCheck, Search, FileText, Clock } from "lucide-react";

export default function WhyConsultants() {
  const reasons = [
    {
      icon: <ClipboardCheck className="w-6 h-6" />,
      title: "Personalized Guidance",
      description: "Tailored advice based on your background and goals",
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "University Shortlisting",
      description: "Find best-fit universities matching your profile",
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Application Strategy",
      description: "Craft compelling SOPs and application documents",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Visa Assistance",
      description: "Simplify complex documentation and deadlines",
    },
  ];

  return (
    <section className="space-y-12">
      <div className="mx-auto max-w-5xl text-center space-y-4">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-primary">
          Why You Need{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            Expert Consultants
          </span>{" "}
          in 2025
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Professional guidance is no longer a luxury—it's a necessity
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-xl border bg-card p-6 transition-all hover:shadow-md"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
              {reason.icon}
            </div>
            <h3 className="text-xl font-semibold">{reason.title}</h3>
            <p className="mt-2 text-muted-foreground">{reason.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
    