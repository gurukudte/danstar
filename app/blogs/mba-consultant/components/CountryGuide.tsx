import { MapPin } from "lucide-react";

export default function CountryGuide() {
  const countries = [
    { name: "Russia", highlight: "Budget-friendly, English medium" },
    { name: "Georgia", highlight: "MCI-approved, EU standard" },
    { name: "Philippines", highlight: "US-based education" },
    { name: "Uzbekistan", highlight: "No IELTS, WHO approved" },
    { name: "Kazakhstan", highlight: "Low fees, direct admission" },
  ];

  return (
    <section className="space-y-12">
      <div className="mx-auto max-w-4xl text-center space-y-4">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-primary">
          Top{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-secondary">
            MBBS Abroad
          </span>{" "}
          Destinations
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Best countries for medical education in 2025
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {countries.map((country, index) => (
          <div
            key={index}
            className="rounded-lg border bg-card p-4 transition-all hover:shadow-sm"
          >
            <div className="flex items-center gap-2 text-primary">
              <MapPin className="w-5 h-5" />
              <h3 className="font-semibold">{country.name}</h3>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              {country.highlight}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
