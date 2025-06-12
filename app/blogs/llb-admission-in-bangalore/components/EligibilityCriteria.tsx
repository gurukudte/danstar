export default function EligibilityCriteria() {
  const criteria = [
    {
      emoji: "🎓",
      title: "Academic Qualification",
      description:
        "Minimum 45-50% marks in 12th (for 5-year program) or graduation (for 3-year program)",
    },
    {
      emoji: "📝",
      title: "Entrance Exams",
      description:
        "CLAT, LSAT, or college-specific tests (some offer direct admission)",
    },
    {
      emoji: "👨‍⚖️",
      title: "Age Limit",
      description:
        "No age restriction as per latest Bar Council of India guidelines",
    },
  ];

  return (
    <section className="space-y-12 flex flex-col justify-center">
      <div className="mx-auto max-w-4xl text-center space-y-4 text-primary">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent">
            Eligibility
          </span>{" "}
          for LLB Admission
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Start your legal journey with these simple requirements
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 text-primary">
        {criteria.map((item, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-2xl border bg-card p-6 shadow-sm transition-all hover:shadow-md"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-2xl">
                {item.emoji}
              </div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
            </div>
            <p className="mt-4 text-muted-foreground">{item.description}</p>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary opacity-0 hover:opacity-100 transition-opacity" />
          </div>
        ))}
      </div>
    </section>
  );
}
