import { ClipboardList, BookOpenCheck, Send } from "lucide-react";

export default function AdmissionProcess() {
  const requirements = [
    "10+2 with Physics, Chemistry & Biology",
    "Minimum 45%-50% marks",
    "Direct admission or merit-based counseling",
    "No NEET required for most colleges",
  ];

  return (
    <section className="space-y-12">
      <div className="mx-auto max-w-4xl text-center space-y-4">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-primary">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Admission Process
          </span>{" "}
          & Eligibility
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Simple steps to secure your seat in top BPT colleges
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-4 flex flex-col justify-center items-center">
          <h3 className="text-xl font-semibold">Basic Requirements</h3>
          <ul className="space-y-3">
            {requirements.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <svg
                    className="h-4 w-4"
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
                </div>
                <span className="text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col justify-center items-center space-y-6">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <ClipboardList className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">1. Shortlist Colleges</h3>
                <p className="text-sm text-muted-foreground">
                  Compare based on fees, location & facilities
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <BookOpenCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">2. Check Eligibility</h3>
                <p className="text-sm text-muted-foreground">
                  Verify academic requirements and documents
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Send className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">3. Apply & Confirm</h3>
                <p className="text-sm text-muted-foreground">
                  Submit applications before deadlines
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
