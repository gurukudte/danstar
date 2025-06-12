import { GraduationCap, Users, Rocket } from "lucide-react";

export default function WhatIsMHA() {
  return (
    <section className="space-y-12">
      <div className="mx-auto max-w-4xl text-center space-y-4">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-primary">
          What is{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            MHA?
          </span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Master of Hospital Administration - Your gateway to healthcare
          leadership
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        <div className="group relative overflow-hidden rounded-xl border bg-card p-6 transition-all hover:shadow-md">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4 text-primary">
            <GraduationCap className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-semibold">
            Professional Postgraduate Course
          </h3>
          <p className="mt-2 text-muted-foreground">
            Designed to create leaders in healthcare management
          </p>
        </div>

        <div className="group relative overflow-hidden rounded-xl border bg-card p-6 transition-all hover:shadow-md">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4 text-primary">
            <Users className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-semibold">For All Backgrounds</h3>
          <p className="mt-2 text-muted-foreground">
            Open to science, commerce, and management graduates
          </p>
        </div>

        <div className="group relative overflow-hidden rounded-xl border bg-card p-6 transition-all hover:shadow-md">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4 text-primary">
            <Rocket className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-semibold">Career Transformation</h3>
          <p className="mt-2 text-muted-foreground">
            From hospitals to healthcare startups and NGOs
          </p>
        </div>
      </div>
    </section>
  );
}
