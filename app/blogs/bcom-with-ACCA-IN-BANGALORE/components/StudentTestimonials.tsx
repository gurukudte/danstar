import { Quote } from "lucide-react";

export default function StudentTestimonials() {
  const testimonials = [
    {
      quote:
        "Studying BCom with ACCA in Bangalore gave me the edge I needed. I got internship offers from EY and Deloitte by 2nd year!",
      author: "Aparna S.",
      role: "BCom with ACCA Student",
    },
    {
      quote:
        "The corporate exposure and training we got from KPMG was game-changing. I already have a job offer before graduation.",
      author: "Rohan T.",
      role: "BCom with KPMG Student",
    },
  ];

  return (
    <section className="space-y-12">
      <div className="mx-auto max-w-4xl text-center space-y-4">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Students Speak
          </span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Hear from students who transformed their careers
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="relative rounded-xl border bg-card p-8">
            <Quote className="absolute top-6 left-6 h-8 w-8 text-muted-foreground/10" />
            <p className="text-lg italic">"{testimonial.quote}"</p>
            <div className="mt-6">
              <p className="font-semibold">{testimonial.author}</p>
              <p className="text-sm text-muted-foreground">
                {testimonial.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
