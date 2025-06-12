import {
  Briefcase,
  Users,
  ClipboardCheck,
  TrendingUp,
  Star,
} from "lucide-react";

export default function KpmgBenefits() {
  const benefits = [
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Corporate Training",
      description: "Direct learning from KPMG experts",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Industry Projects",
      description: "Work on real-time case studies",
    },
    {
      icon: <ClipboardCheck className="w-6 h-6" />,
      title: "Certifications",
      description: "Earn KPMG-recognized credentials",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Placement Support",
      description: "Priority access to Big 4 recruiters",
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Personality Development",
      description: "Corporate grooming from day one",
    },
  ];

  return (
    <section className="space-y-12">
      <div className="mx-auto max-w-4xl text-center space-y-4">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-primary">
          Benefits of{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent">
            BCom with KPMG
          </span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Corporate-ready education with direct industry exposure
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="rounded-lg border bg-card p-6 text-center transition-all hover:shadow-sm"
          >
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
              {benefit.icon}
            </div>
            <h3 className="font-semibold">{benefit.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
