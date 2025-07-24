import { Button } from "@/components/ui/button";
import {
  Monitor,
  Palette,
  Smartphone,
  Mic,
  FileText,
  BarChart3,
  Users,
  GraduationCap,
  Code,
  Megaphone,
} from "lucide-react";

const Programs = () => {
  const programs = [
    {
      icon: Monitor,
      title: "Digital Marketing",
      description:
        "Master SEO, social media, and online advertising strategies",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Palette,
      title: "Graphic Design",
      description: "Create stunning visuals and brand identities",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Smartphone,
      title: "UI/UX Design",
      description: "Design user-friendly interfaces and experiences",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Build modern, responsive websites and web applications",
      color: "from-green-600 to-emerald-600",
    },
    {
      icon: Mic,
      title: "Podcast Engineering",
      description: "Professional audio production and podcast creation",
      color: "from-red-500 to-red-600",
    },
    {
      icon: FileText,
      title: "Content Creation",
      description: "Craft compelling content that engages audiences",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: BarChart3,
      title: "Excel for Data Analysis",
      description: "Transform data into actionable insights",
      color: "from-teal-500 to-cyan-500",
    },
    {
      icon: Megaphone,
      title: "Public Speaking",
      description: "Develop confidence and communication skills",
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: GraduationCap,
      title: "Train-the-Trainer Program",
      description: "Become a mentor and inspire others",
      color: "from-primary to-primary-glow",
      featured: true,
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Our <span className="gradient-text">Programs</span>
          </h2>

          <div className="w-24 h-1 bg-primary mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className={`group relative card-gradient p-6 rounded-xl shadow-card hover:shadow-elegant transition-smooth hover:scale-105 transform ${
                program.featured
                  ? "lg:col-span-2 lg:col-start-2 border-2 border-primary/20"
                  : ""
              }`}
            >
              {program.featured && (
                <div className="absolute -top-3 left-6 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                  Featured Program
                </div>
              )}

              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${program.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
              >
                <program.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-xl font-bold mb-3 text-foreground">
                {program.title}
              </h3>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {program.description}
              </p>

              <Button
                variant={program.featured ? "default" : "outline"}
                className="w-full group-hover:scale-105 transition-transform"
              >
                Learn More
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button variant="hero" size="lg">
            View All Programs
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Programs;
