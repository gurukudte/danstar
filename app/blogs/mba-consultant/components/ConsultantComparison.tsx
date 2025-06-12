export default function ConsultantComparison() {
  return (
    <section className="space-y-12">
      <div className="mx-auto max-w-4xl text-center space-y-4">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-primary">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent">
            Consultant Services
          </span>{" "}
          Comparison
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          What to expect from top MBA and MBBS consultants
        </p>
      </div>

      <div className="rounded-xl border overflow-hidden">
        <div className="grid grid-cols-3 bg-muted">
          <div className="p-4 font-semibold">Feature</div>
          <div className="p-4 font-semibold text-center">MBA Consultant</div>
          <div className="p-4 font-semibold text-center">MBBS Consultant</div>
        </div>

        {[
          { feature: "Profile Assessment", mba: "✅ Yes", mbbs: "✅ Yes" },
          {
            feature: "University Shortlisting",
            mba: "Tailored",
            mbbs: "Country-based",
          },
          {
            feature: "Document Help",
            mba: "SOPs & Essays",
            mbbs: "Admission Letters",
          },
          { feature: "Exam Prep", mba: "CAT/GMAT/GRE", mbbs: "Not required" },
          { feature: "Visa Assistance", mba: "✅", mbbs: "✅" },
          { feature: "Post-Admission", mba: "Limited", mbbs: "Full Support" },
        ].map((item, index) => (
          <div key={index} className="grid grid-cols-3 border-t">
            <div className="p-4 text-muted-foreground">{item.feature}</div>
            <div className="p-4 text-center">{item.mba}</div>
            <div className="p-4 text-center">{item.mbbs}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
