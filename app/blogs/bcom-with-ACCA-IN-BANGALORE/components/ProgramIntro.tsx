import { BookOpen, Users } from "lucide-react";

export default function ProgramIntro() {
  return (
    <section className="space-y-12">
      <div className="mx-auto max-w-4xl text-center space-y-4">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-primary">
          The{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            Future
          </span>{" "}
          of Commerce Education
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Upgrade your BCom with global certifications and corporate training
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="group relative overflow-hidden rounded-xl border bg-card p-6 transition-all hover:shadow-md">
          <div className="flex items-center gap-4 mb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold">BCom with ACCA</h3>
          </div>
          <p className="text-muted-foreground">
            Globally recognized accounting qualification from the UK paired with
            your BCom degree. Complete up to 9 ACCA papers alongside your
            degree.
          </p>
        </div>

        <div className="group relative overflow-hidden rounded-xl border bg-card p-6 transition-all hover:shadow-md">
          <div className="flex items-center gap-4 mb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold">BCom with KPMG</h3>
          </div>
          <p className="text-muted-foreground">
            Industry-focused training directly from KPMG experts. Corporate
            certifications, real-time projects, and placement support with Big 4
            firms.
          </p>
        </div>
      </div>
    </section>
  );
}
