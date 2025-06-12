import { Briefcase, Globe, Users, TrendingUp } from "lucide-react";

export default function WhyBangalore() {
  const benefits = [
    {
      icon: <Briefcase className="w-6 h-6 text-primary" />,
      title: "Placement Opportunities",
      description:
        "Bangalore's thriving legal market offers internships and placements with top law firms and corporates.",
    },
    {
      icon: <Globe className="w-6 h-6 text-secondary" />,
      title: "Global Exposure",
      description:
        "Many colleges have international collaborations and moot court competitions with global participation.",
    },
    {
      icon: <Users className="w-6 h-6 text-accent" />,
      title: "Diverse Student Community",
      description:
        "Learn alongside peers from across India and abroad in Bangalore's cosmopolitan environment.",
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-destructive" />,
      title: "Tech-Integrated Learning",
      description:
        "Unique focus on LegalTech, IPR, and cyber laws thanks to Bangalore's tech ecosystem.",
    },
  ];

  return (
    <section className="my-16 items-center">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary">
          Why Choose Bangalore for Your LLB?
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          India's Silicon Valley is also becoming the premier destination for
          legal education
        </p>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex gap-6">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
              {benefit.icon}
            </div>
            <div>
              <h3 className="text-xl font-semibold">{benefit.title}</h3>
              <p className="mt-2 text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
