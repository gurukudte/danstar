import { Badge } from "@/components/ui/badge";

export default function TopInstitutes() {
  const institutes = [
    {
      name: "St. John's National Academy",
      highlight: "NAAC A++ Accredited",
      placement: "98% Placement",
    },
    {
      name: "Ramaiah Institute",
      highlight: "Industry Integrated",
      placement: "Hospital Tie-ups",
    },
    {
      name: "Manipal Academy",
      highlight: "Global Recognition",
      placement: "International Placements",
    },
    {
      name: "Christ University",
      highlight: "Holistic Education",
      placement: "Research Focus",
    },
    {
      name: "Acharya Institutes",
      highlight: "Affordable Fees",
      placement: "Scholarships Available",
    },
  ];

  return (
    <section className="space-y-12">
      <div className="mx-auto max-w-4xl text-center space-y-4">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-primary">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent">
            Top MHA Institutes
          </span>{" "}
          in Bangalore
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Premier institutions with industry-aligned programs
        </p>
      </div>

      <div className="grid gap-6">
        {institutes.map((institute, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-xl border bg-card p-6 transition-all hover:shadow-md hover:border-primary/30"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold">{institute.name}</h3>
                <div className="flex gap-2 mt-2">
                  <Badge
                    variant="outline"
                    className="border-primary text-primary"
                  >
                    {institute.highlight}
                  </Badge>
                  <Badge variant="secondary" className="text-white">{institute.placement}</Badge>
                </div>
              </div>
              <button className="text-sm font-medium text-primary hover:underline whitespace-nowrap">
                View Details →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
