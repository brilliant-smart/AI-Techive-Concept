import { UserPlus, Target, Wrench, Award, GraduationCap } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "Join us on ShuraForAll.org",
      description: "Sign up and become part of our learning community",
      step: "01",
    },
    {
      icon: Target,
      title: "Pick a Skill",
      description:
        "Choose from our diverse range of programs that match your interests",
      step: "02",
    },
    {
      icon: Wrench,
      title: "Learn by Doing",
      description: "Engage with hands-on projects and real-world applications",
      step: "03",
    },
    {
      icon: Award,
      title: "Get Certified",
      description: "Build your portfolio and earn recognized certifications",
      step: "04",
    },
    {
      icon: GraduationCap,
      title: "Become a Trainer",
      description: "Inspire others through our Train-the-Trainer track",
      step: "05",
    },
  ];

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your journey from learner to trainer in 5 simple steps
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-6"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connection line for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-primary/30 z-0">
                    <div className="w-full h-full bg-gradient-to-r from-primary to-primary/30"></div>
                  </div>
                )}

                <div className="relative z-10 card-gradient p-6 rounded-xl shadow-card hover:shadow-elegant transition-smooth hover:scale-105 transform text-center">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-xl flex items-center justify-center mx-auto shadow-glow">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold mb-3 text-foreground">
                    {step.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
