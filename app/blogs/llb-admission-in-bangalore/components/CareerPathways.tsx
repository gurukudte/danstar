import { Briefcase, Gavel, BookOpen, Scale, Landmark } from "lucide-react";

export default function CareerPathways() {
  const careerPaths = [
    {
      name: "Corporate Legal Advisor",
      icon: <Briefcase className="w-5 h-5" />,
      description: "Advise businesses on legal matters and compliance",
    },
    {
      name: "Judge (Judicial Services)",
      icon: <Gavel className="w-5 h-5" />,
      description: "Preside over court proceedings and deliver judgments",
    },
    {
      name: "Legal Journalist",
      icon: <BookOpen className="w-5 h-5" />,
      description: "Report on legal developments and court cases",
    },
    {
      name: "Human Rights Activist",
      icon: <Scale className="w-5 h-5" />,
      description: "Advocate for fundamental rights and social justice",
    },
    {
      name: "Civil Services Officer",
      icon: <Landmark className="w-5 h-5" />,
      description: "Serve in administrative roles with legal expertise",
    },
    {
      name: "Legal Tech Consultant",
      icon: <Briefcase className="w-5 h-5" />,
      description: "Bridge law and technology for innovative solutions",
    },
  ];

  return (
    <section className="space-y-12">
      <div className="mx-auto max-w-4xl text-center space-y-4 text-primary">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            Career Pathways
          </span>{" "}
          After LLB
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          A law degree opens doors to diverse opportunities beyond traditional
          practice
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 text-primary">
        {careerPaths.map((career, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-xl border bg-card p-6 transition-all hover:shadow-md hover:border-primary/30"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                {career.icon}
              </div>
              <div>
                <h3 className="font-semibold text-lg">{career.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {career.description}
                </p>
              </div>
            </div>
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>
    </section>
  );
}
