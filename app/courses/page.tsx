"use client"
import { motion } from "framer-motion";
import {
  BrainCircuit,
  HeartPulse,
  Microscope,
  Leaf,
  Activity,
  BookOpen,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CoursesPage = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const aiCourses = [
    {
      title: "AI for Cheminformatics",
      description:
        "Learn AI applications in chemical data analysis and drug discovery.",
      icon: <Microscope className="w-5 h-5" />,
    },
    {
      title: "AI for Drug Discovery",
      description:
        "Master AI techniques for pharmaceutical research and development.",
      icon: <Microscope className="w-5 h-5" />,
    },
    {
      title: "AI for Ayurveda",
      description:
        "Integrate AI with traditional Ayurvedic medicine practices.",
      icon: <Leaf className="w-5 h-5" />,
    },
    {
      title: "AI for Physiotherapists",
      description:
        "Apply AI in physical therapy assessment and treatment planning.",
      icon: <Activity className="w-5 h-5" />,
    },
    {
      title: "AI for Beginners",
      description:
        "Fundamentals of artificial intelligence for healthcare professionals.",
      icon: <BrainCircuit className="w-5 h-5" />,
    },
  ];

  const nursingCourses = [
    {
      title: "Nursing Informatics",
      description:
        "Specialized training in healthcare information systems for nurses.",
      icon: <HeartPulse className="w-5 h-5" />,
    },
    {
      title: "Nursing Forensics",
      description: "Forensic science applications in nursing and patient care.",
      icon: <HeartPulse className="w-5 h-5" />,
    },
  ];

  const trainingPrograms = [
    {
      title: "Upskilling Programs",
      description:
        "Enhance your current skill set with our targeted training modules.",
      features: [
        "Latest healthcare technologies",
        "Advanced clinical practices",
        "Specialized equipment training",
      ],
    },
    {
      title: "Reskilling Programs",
      description:
        "Transition to new healthcare roles with comprehensive training.",
      features: [
        "Career transition support",
        "Cross-disciplinary training",
        "Certification preparation",
      ],
    },
    {
      title: "Soft Skills Development",
      description:
        "Essential non-technical skills for healthcare professionals.",
      features: [
        "Patient communication",
        "Team collaboration",
        "Leadership training",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
          Healthcare Education & Training Programs
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Specialized courses designed to empower healthcare professionals with
          cutting-edge knowledge and skills.
        </p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 flex justify-center gap-4"
        >
          <Button className="bg-primary hover:bg-primary/90 text-white cursor-pointer">
            Browse All Courses
          </Button>
          <Button
            variant="outline"
            className="border-secondary  cursor-pointer"
          >
            Speak to Advisor
          </Button>
        </motion.div>
      </motion.section>

      {/* AI Courses Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <BrainCircuit className="w-8 h-8 mr-2 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">
              AI in Healthcare Courses
            </h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Cutting-edge artificial intelligence applications tailored for
            healthcare specialties.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
        >
          {aiCourses.map((course, index) => (
            <motion.div key={index} variants={item}>
              <Card className="hover:shadow-lg transition-all duration-300 h-full flex flex-col border-border hover:border-primary/30">
                <CardHeader className="flex flex-row items-center space-x-4 pb-3">
                  <div className="p-2 bg-secondary/10 rounded-full text-secondary">
                    {course.icon}
                  </div>
                  <CardTitle className="text-lg text-foreground">
                    {course.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {course.description}
                  </CardDescription>
                  <motion.div whileHover={{ scale: 1.03 }} className="mt-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-secondary text-secondary-foreground"
                    >
                      Course Details
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Nursing Specializations */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-card rounded-xl border border-border">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <HeartPulse className="w-8 h-8 mr-2 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">
              Nursing Specializations
            </h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Advanced training programs for nursing professionals seeking
            specialization.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {nursingCourses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="hover:shadow-lg transition-all duration-300 h-full flex flex-col border-border hover:border-primary/30">
                <CardHeader className="flex flex-row items-center space-x-4 pb-3">
                  <div className="p-2 bg-secondary/10 rounded-full text-secondary">
                    {course.icon}
                  </div>
                  <CardTitle className="text-lg text-foreground">
                    {course.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {course.description}
                  </CardDescription>
                  <motion.div whileHover={{ scale: 1.03 }} className="mt-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-secondary text-secondary-foreground"
                    >
                      Program Details
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <BookOpen className="w-8 h-8 mr-2 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">
              Professional Training Programs
            </h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive training solutions for healthcare career advancement.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trainingPrograms.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="hover:shadow-lg transition-all duration-300 h-full flex flex-col border-border hover:border-primary/30">
                <CardHeader>
                  <CardTitle className="text-foreground">
                    {program.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {program.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-2 text-sm text-foreground">
                    {program.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        whileHover={{ x: 5 }}
                        className="flex items-start"
                      >
                        <span className="text-primary mr-2">•</span>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
                <motion.div whileHover={{ scale: 1.03 }} className="px-6 pb-6">
                  <Button
                    variant="outline"
                    className="w-full border-secondary text-secondary-foreground"
                  >
                    View Curriculum
                  </Button>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default CoursesPage;
