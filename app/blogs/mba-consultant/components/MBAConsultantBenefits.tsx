import { ClipboardList, Globe, BarChart2, BookOpen } from "lucide-react";

export default function MBAConsultantBenefits() {
  const benefits = [
    {
      icon: <ClipboardList className="w-6 h-6" />,
      title: "Profile Evaluation",
      description: "Analyze your work experience and academic background",
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Exam Guidance",
      description: "CAT, GMAT, GRE, MAT, or XAT preparation strategies",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Opportunities",
      description: "Access to top B-schools worldwide",
    },
    {
      icon: <BarChart2 className="w-6 h-6" />,
      title: "Interview Prep",
      description: "Mock interviews and resume building",
    },
  ];

  return (
    <section className="space-y-12">
      <div className="mx-auto max-w-4xl text-center space-y-4">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-primary">
          What an{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            MBA Consultant
          </span>{" "}
          Does
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Your strategic partner for management education success
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-xl border bg-card p-6 transition-all hover:shadow-md"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
              {benefit.icon}
            </div>
            <h3 className="text-xl font-semibold">{benefit.title}</h3>
            <p className="mt-2 text-muted-foreground">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
