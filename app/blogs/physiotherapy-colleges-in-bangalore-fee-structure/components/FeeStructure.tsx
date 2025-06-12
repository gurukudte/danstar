export default function FeeStructure() {
  const feeData = [
    {
      type: "Government Colleges",
      range: "₹40,000 – ₹70,000",
      features: ["Affordable fees", "Limited seats", "Merit-based"],
    },
    {
      type: "Private Colleges",
      range: "₹90,000 – ₹1,50,000",
      features: ["Better infrastructure", "More seats", "Direct admission"],
    },
    {
      type: "Top Tier Institutions",
      range: "₹2,00,000 – ₹3,00,000",
      features: ["Global exposure", "Premium facilities", "Placement support"],
    },
  ];

  return (
    <section className="space-y-12">
      <div className="mx-auto max-w-4xl text-center space-y-4">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-primary">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent">
            Fee Structure
          </span>{" "}
          for 2025
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Transparent breakdown of BPT course fees across college categories
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {feeData.map((item, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-2xl border bg-card p-6 shadow-sm transition-all hover:shadow-md"
          >
            <h3 className="text-xl font-semibold">{item.type}</h3>
            <p className="mt-2 text-2xl font-bold text-primary">
              {item.range}
              <span className="text-sm font-normal text-muted-foreground">
                {" "}
                / year
              </span>
            </p>
            <ul className="mt-4 space-y-2">
              {item.features.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-muted-foreground"
                >
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-primary"
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
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary opacity-0 hover:opacity-100 transition-opacity" />
          </div>
        ))}
      </div>

      <div className="text-center text-sm text-primary">
        * Fees may vary based on hostel, lab, and other facility charges
      </div>
    </section>
  );
}
