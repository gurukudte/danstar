import { Building2, Cpu, Users, Award } from "lucide-react";

export default function WhyBangalore() {
  const reasons = [
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Tech Capital of India",
      description: "Home to Infosys, Wipro, Google, Microsoft and AI startups",
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Innovation Ecosystem",
      description: "Live projects, hackathons, and tech events year-round",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Industry Exposure",
      description: "Internships with top tech companies and startups",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Placement Records",
      description: "Highest placement rates for tech graduates in India",
    },
  ];

  return (
    <section className="space-y-12">
      <div className="mx-auto max-w-4xl text-center space-y-4">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-primary">
          Why Choose{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-secondary">
            Bangalore
          </span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          India's premier destination for AI and tech education
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
