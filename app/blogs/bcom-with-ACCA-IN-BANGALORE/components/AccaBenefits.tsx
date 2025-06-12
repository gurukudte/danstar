import { Award, Globe, Currency, FileText, BarChart } from "lucide-react";

export default function AccaBenefits() {
  const benefits = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Dual Qualification",
      description: "Earn BCom degree + ACCA certification simultaneously",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Recognition",
      description:
        "Recognized in 180+ countries including UK, EU, and Middle East",
    },
    {
      icon: <Currency className="w-6 h-6" />,
      title: "High Salary Potential",
      description: "₹6-12 LPA starting salary post-qualification",
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "IFRS Expertise",
      description: "Master international financial reporting standards",
    },
    {
      icon: <BarChart className="w-6 h-6" />,
      title: "Big 4 Opportunities",
      description: "Direct pathway to EY, Deloitte, PwC, and KPMG",
    },
  ];

  return (
    <section className="space-y-12">
      <div className="mx-auto max-w-4xl text-center space-y-4">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-primary">
          Benefits of{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            BCom with ACCA
          </span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Become a globally qualified accounting professional
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
