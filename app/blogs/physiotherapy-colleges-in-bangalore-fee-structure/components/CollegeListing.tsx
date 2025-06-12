import { Badge } from "@/components/ui/badge";

export default function CollegeListing() {
  const colleges = [
    { name: "Ramaiah Medical College", rating: "AAA+" },
    { name: "Krupanidhi College of Physiotherapy", rating: "AAA" },
    { name: "Garden City University", rating: "AAA" },
    { name: "RV College of Physiotherapy", rating: "AA+" },
    { name: "Padmashree Institute", rating: "AA" },
    { name: "Srinivasa College", rating: "AA" },
    { name: "Hillside College", rating: "A+" },
  ];

  return (
    <section className="space-y-12">
      <div className="mx-auto max-w-4xl text-center space-y-4">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-primary">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            Top Physiotherapy Colleges
          </span>{" "}
          in Bangalore
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Renowned institutions with state-of-the-art labs and hospital tie-ups
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {colleges.map((college, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-xl border bg-card p-6 transition-all hover:shadow-md hover:border-primary/30"
          >
            <div className="flex items-start justify-between">
              <h3 className="font-semibold text-lg">{college.name}</h3>
              <Badge variant="outline" className="border-primary text-primary">
                {college.rating}
              </Badge>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <svg
                  className="h-4 w-4 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Hospital Internships</span>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  className="h-4 w-4 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Modern Equipment</span>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  className="h-4 w-4 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Expert Faculty</span>
              </li>
            </ul>
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>
    </section>
  );
}
