import {
  LayoutGrid,
  PieChart,
  ClipboardList,
  Megaphone,
  Network,
} from "lucide-react";

export default function CurriculumHighlights() {
  const subjects = [
    { icon: <LayoutGrid className="w-5 h-5" />, name: "Healthcare Operations" },
    { icon: <PieChart className="w-5 h-5" />, name: "Hospital Finance" },
    {
      icon: <ClipboardList className="w-5 h-5" />,
      name: "Clinical Coordination",
    },
    { icon: <Megaphone className="w-5 h-5" />, name: "Healthcare Marketing" },
    { icon: <Network className="w-5 h-5" />, name: "Strategic Management" },
  ];

  return (
    <section className="space-y-12">
      <div className="mx-auto max-w-4xl text-center space-y-4">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-primary">
          What You'll{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            Learn
          </span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Comprehensive curriculum transforming you into healthcare business
          leader
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {subjects.map((subject, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-3 rounded-lg border bg-card p-4 text-center transition-all hover:shadow-sm"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              {subject.icon}
            </div>
            <h3 className="font-medium">{subject.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
