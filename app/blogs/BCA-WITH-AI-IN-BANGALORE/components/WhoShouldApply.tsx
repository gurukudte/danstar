import { Code, Calculator, Cpu, User } from "lucide-react";

export default function WhoShouldApply() {
  const profiles = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Coding Enthusiasts",
      description: "Students who love programming and technology",
    },
    {
      icon: <Calculator className="w-6 h-6" />,
      title: "Math/CS Students",
      description: "12th passouts with math or computer science background",
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Tech Innovators",
      description: "Those wanting to build AI solutions and products",
    },
    {
      icon: <User className="w-6 h-6" />,
      title: "Future-Ready Students",
      description: "Looking for high-growth, future-proof careers",
    },
  ];

  return (
    <section className="space-y-12">
      <div className="mx-auto max-w-4xl text-center space-y-4">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            Who Should Apply?
          </span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Ideal candidates for BCA with AI program
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {profiles.map((profile, index) => (
          <div
            key={index}
            className="rounded-lg border bg-card p-6 text-center transition-all hover:shadow-sm"
          >
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
              {profile.icon}
            </div>
            <h3 className="font-semibold">{profile.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              {profile.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
