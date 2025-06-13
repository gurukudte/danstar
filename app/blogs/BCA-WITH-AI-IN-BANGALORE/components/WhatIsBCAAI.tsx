import { Cpu, BrainCircuit } from "lucide-react";

export default function WhatIsBCAAI() {
  return (
    <section className="space-y-12">
      <div className="mx-auto max-w-4xl text-center space-y-4">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-primary">
          What is{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            BCA with AI?
          </span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          The cutting-edge blend of computer applications and artificial
          intelligence
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="group relative overflow-hidden rounded-xl border bg-card p-6 transition-all hover:shadow-md">
          <div className="flex items-center gap-4 mb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold">3-Year UG Degree</h3>
          </div>
          <p className="text-muted-foreground">
            Bachelor of Computer Applications with AI specialization - a
            complete undergraduate program that prepares you for the tech
            industry.
          </p>
        </div>

        <div className="group relative overflow-hidden rounded-xl border bg-card p-6 transition-all hover:shadow-md">
          <div className="flex items-center gap-4 mb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <BrainCircuit className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold">AI Integration</h3>
          </div>
          <p className="text-muted-foreground">
            Beyond traditional programming - learn to build intelligent systems
            that think, learn, and solve real-world problems.
          </p>
        </div>
      </div>
    </section>
  );
}
