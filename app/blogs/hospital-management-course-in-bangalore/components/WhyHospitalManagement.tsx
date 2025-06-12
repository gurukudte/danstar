import { LineChart, Users, ClipboardSignature } from "lucide-react";

export default function WhyHospitalManagement() {
  const benefits = [
    {
      icon: <LineChart className="w-6 h-6 text-primary" />,
      title: "High-Growth Industry",
      description: "India's healthcare sector growing at 22% annually",
    },
    {
      icon: <Users className="w-6 h-6 text-secondary" />,
      title: "Leadership Roles",
      description: "Manage entire hospital operations and teams",
    },
    {
      icon: <ClipboardSignature className="w-6 h-6 text-accent" />,
      title: "Diverse Opportunities",
      description: "Hospitals, startups, insurance, consulting & more",
    },
  ];

  return (
    <section className="space-y-12">
      <div className="mx-auto max-w-4xl text-center space-y-4">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-primary">
          Why Choose{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            Hospital Management?
          </span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Become the backbone of modern healthcare without being a doctor
        </p>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-xl border bg-card p-6 transition-all hover:shadow-md"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
              {benefit.icon}
            </div>
            <h3 className="text-xl font-semibold">{benefit.title}</h3>
            <p className="mt-2 text-muted-foreground">{benefit.description}</p>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        ))}
      </div>
    </section>
  );
}
