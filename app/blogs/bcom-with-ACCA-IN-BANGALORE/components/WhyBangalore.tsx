import { Building2, Users, Award, Globe } from "lucide-react";

export default function WhyBangalore() {
  const reasons = [
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "UGC-Approved Colleges",
      description: "Top-rated institutions with global partnerships",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Industry Exposure",
      description: "Proximity to corporate headquarters and Big 4 firms",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Placement Records",
      description: "Highest placement rates for commerce graduates",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Curriculum",
      description: "Internationally recognized programs",
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
          India's premier destination for professional commerce education
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
