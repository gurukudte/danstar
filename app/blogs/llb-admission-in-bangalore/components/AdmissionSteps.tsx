import { ClipboardList, BookOpenCheck, FileCheck, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AdmissionSteps() {
  const steps = [
    {
      icon: <ClipboardList className="w-6 h-6" />,
      title: "Shortlist Colleges",
      description: "Choose between 3-year LLB or 5-year integrated programs",
    },
    {
      icon: <BookOpenCheck className="w-6 h-6" />,
      title: "Check Requirements",
      description: "Verify eligibility, entrance tests, and documents needed",
    },
    {
      icon: <FileCheck className="w-6 h-6" />,
      title: "Prepare Documents",
      description: "Marksheets, ID proof, photos, and other required paperwork",
    },
    {
      icon: <Send className="w-6 h-6" />,
      title: "Apply & Confirm",
      description: "Submit applications and secure your seat",
    },
  ];

  return (
    <section className="my-16 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 p-8 text-primary">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            How to Apply for LLB Admission?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Follow these simple steps to begin your legal education journey
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white">
                {step.icon}
              </div>
              <h3 className="mt-6 text-lg font-semibold">Step {index + 1}</h3>
              <h4 className="mt-2 text-lg font-medium">{step.title}</h4>
              <p className="mt-2 text-sm text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg font-medium text-foreground">
            Need personalized guidance? Our experts can help you through every
            step!
          </p>
          <Button className="mt-6 text-white text-center">Get Free Counseling</Button>
        </div>
      </div>
    </section>
  );
}
