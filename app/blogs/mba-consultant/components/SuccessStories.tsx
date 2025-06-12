import { Quote } from "lucide-react";

export default function SuccessStories() {
  const stories = [
    {
      quote:
        "My MBA consultant helped me choose IIMs over international options, refine my resume, and ace my interviews. Today, I'm at IIM Bangalore!",
      author: "Rahul, IIM Bangalore",
      role: "MBA Student",
    },
    {
      quote:
        "I couldn't afford MBBS in India. My consultant helped me enroll in a WHO-listed university in Georgia with scholarships. Now in my 3rd year!",
      author: "Aisha, Tbilisi State University",
      role: "Medical Student",
    },
  ];

  return (
    <section className="space-y-12">
      <div className="mx-auto max-w-4xl text-center space-y-4">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-primary">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent">
            Success Stories
          </span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Real students who transformed their careers with expert guidance
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {stories.map((story, index) => (
          <div key={index} className="relative rounded-xl border bg-card p-8">
            <Quote className="absolute top-6 left-6 h-8 w-8 text-muted-foreground/10" />
            <p className="text-lg italic">"{story.quote}"</p>
            <div className="mt-6">
              <p className="font-semibold">{story.author}</p>
              <p className="text-sm text-muted-foreground">{story.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
