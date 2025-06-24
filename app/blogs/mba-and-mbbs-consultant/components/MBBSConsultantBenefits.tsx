import { Map, Home, Handshake, ShieldCheck } from "lucide-react";

export default function MBBSConsultantBenefits() {
  const benefits = [
    {
      icon: <Map className="w-6 h-6" />,
      title: "Country Selection",
      description: "Guidance for 15+ countries with fee structures",
    },
    {
      icon: <Home className="w-6 h-6" />,
      title: "Travel & Accommodation",
      description: "End-to-end support from visa to hostel",
    },
    {
      icon: <Handshake className="w-6 h-6" />,
      title: "University Tie-ups",
      description: "Direct partnerships for faster admissions",
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "MCI/NMC Compliance",
      description: "Ensure your degree is recognized in India",
    },
  ];

  return (
    <section className="space-y-12">
      <div className="mx-auto max-w-4xl text-center space-y-4">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-primary">
          Benefits of{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            MBBS Abroad Consultants
          </span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Your trusted partner for international medical education
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
