import { Activity, UserCheck, Brain, School } from "lucide-react";

export default function CareerScope() {
  const careers = [
    {
      title: "Clinical Physiotherapist",
      icon: <Activity className="w-6 h-6" />,
      description: "Work in hospitals and healthcare centers",
    },
    {
      title: "Sports Physiotherapist",
      icon: <UserCheck className="w-6 h-6" />,
      description: "Specialize in athlete rehabilitation",
    },
    {
      title: "Rehab Specialist",
      icon: <Brain className="w-6 h-6" />,
      description: "Help patients recover from injuries",
    },
    {
      title: "Higher Studies",
      icon: <School className="w-6 h-6" />,
      description: "Pursue MPT or MBA in Healthcare",
    },
  ];

  return (
    <section className="space-y-12">
      <div className="mx-auto max-w-4xl text-center space-y-4">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-primary">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-secondary">
            Career Scope
          </span>{" "}
          After BPT
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Diverse opportunities in India's growing healthcare sector
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {careers.map((career, index) => (
          <div
            key={index}
            className="rounded-xl border bg-card p-6 text-center transition-all hover:shadow-md"
          >
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              {career.icon}
            </div>
            <h3 className="mt-4 text-lg font-semibold">{career.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              {career.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
