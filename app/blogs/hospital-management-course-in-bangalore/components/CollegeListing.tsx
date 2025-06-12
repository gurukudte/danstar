import { Badge } from "@/components/ui/badge";

export default function CollegeListing() {
  const colleges = [
    {
      name: "St. John's Medical College",
      program: "MHA (Master of Hospital Administration)",
      highlight: "NAAC A++ Accredited",
    },
    {
      name: "Ramaiah Institute",
      program: "MBA in Hospital Administration",
      highlight: "Industry Integrated",
    },
    {
      name: "Christ University",
      program: "BBA/MBA Healthcare Management",
      highlight: "Global Exposure",
    },
    {
      name: "Indian Academy",
      program: "PGDM in Healthcare",
      highlight: "100% Placements",
    },
    {
      name: "Acharya Institute",
      program: "BHA/MHA Programs",
      highlight: "Affordable Fees",
    },
  ];

  return (
    <section className="space-y-12">
      <div className="mx-auto max-w-4xl text-center space-y-4">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-primary">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent">
            Top Colleges
          </span>{" "}
          in Bangalore
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Premier institutions offering hospital management programs
        </p>
      </div>

      <div className="grid gap-6">
        {colleges.map((college, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-xl border bg-card p-6 transition-all hover:shadow-md hover:border-primary/30"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold">{college.name}</h3>
                <p className="text-muted-foreground mt-1">{college.program}</p>
              </div>
              <Badge variant="secondary" className="w-fit text-white">
                {college.highlight}
              </Badge>
            </div>
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>
    </section>
  );
}
