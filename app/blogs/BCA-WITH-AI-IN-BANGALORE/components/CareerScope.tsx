import {
  Cpu,
  Database,
  BrainCircuit,
  LineChart,
  MessageSquare,
  Settings,
} from "lucide-react";
import { FaRobot } from "react-icons/fa";

export default function CareerScope() {
  const careers = [
    {
      title: "AI Developer",
      icon: <Cpu className="w-6 h-6" />,
      salary: "₹6-15 LPA",
    },
    {
      title: "Data Scientist",
      icon: <Database className="w-6 h-6" />,
      salary: "₹8-20 LPA",
    },
    {
      title: "ML Engineer",
      icon: <BrainCircuit className="w-6 h-6" />,
      salary: "₹7-18 LPA",
    },
    {
      title: "Automation Specialist",
      icon: <Settings className="w-6 h-6" />,
      salary: "₹5-12 LPA",
    },
    {
      title: "AI Research Associate",
      icon: <LineChart className="w-6 h-6" />,
      salary: "₹6-14 LPA",
    },
    {
      title: "Chatbot Developer",
      icon: <MessageSquare className="w-6 h-6" />,
      salary: "₹5-12 LPA",
    },
    {
      title: "AI Product Manager",
      icon: <FaRobot className="w-6 h-6" />,
      salary: "₹10-25 LPA",
    },
  ];

  return (
    <section className="w-full space-y-12">
      <div className="mx-auto max-w-4xl text-center space-y-4">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-primary">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-secondary">
            Career Scope
          </span>{" "}
          After BCA with AI
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          High-growth job roles with excellent salary potential
        </p>
      </div>

      <div className="w-full grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {careers.map((career, index) => (
          <div
            key={index}
            className="rounded-lg border bg-card p-6 text-center transition-all hover:shadow-sm"
          >
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
              {career.icon}
            </div>
            <h3 className="font-semibold">{career.title}</h3>
            <p className="mt-2 text-primary font-medium">{career.salary}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
