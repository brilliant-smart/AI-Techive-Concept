import {
  Users,
  Target,
  TrendingUp,
  MessageCircle,
  HandHeart,
  Trophy,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const TrainTheTrainer = () => {
  const features = [
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Effective Communication",
      description:
        "Master the art of clear, impactful communication that builds understanding and drives results.",
    },
    {
      icon: <HandHeart className="w-8 h-8" />,
      title: "Collaborative Support",
      description:
        "Learn to create environments where team members naturally support and elevate each other.",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Problem Solving",
      description:
        "Combine diverse strengths and perspectives to tackle complex challenges and find innovative solutions.",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Individual Growth",
      description:
        "Develop personal skills while contributing to collective success and team achievement.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Group Leadership",
      description:
        "Prepare to lead and contribute meaningfully in any work environment or team setting.",
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Shared Goals",
      description:
        "Unite teams around common objectives and create pathways to collective achievement.",
    },
  ];

  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Train the <span className="gradient-text">Trainer</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            This training program is designed to help participants develop
            essential teamwork skills that drive collective success. Through
            practical exercises, collaborative projects, and guided discussions,
            trainees learn how to communicate effectively, support one another,
            and combine their strengths to solve problems and achieve shared
            goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-8 shadow-card hover:shadow-glow transition-all duration-300 hover:scale-105 border border-border"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-lg bg-primary/10 text-primary mr-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {feature.title}
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-card rounded-2xl p-12 shadow-elegant border border-border">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Transform Your Leadership Impact
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                By working in teams, participants not only improve their
                individual performance but also learn how to thrive in group
                settings, preparing them to lead and contribute meaningfully in
                any work environment.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-4"></div>
                  <span className="text-foreground">
                    Practical exercises and real-world applications
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-4"></div>
                  <span className="text-foreground">
                    Collaborative projects that build lasting skills
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-4"></div>
                  <span className="text-foreground">
                    Guided discussions with expert facilitators
                  </span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-primary/20 to-primary-glow/20 rounded-2xl p-8 mb-8">
                <div className="text-6xl font-bold gradient-text mb-4">95%</div>
                <p className="text-xl text-foreground font-semibold">
                  Success Rate
                </p>
                <p className="text-muted-foreground mt-2">
                  Participants report improved teamwork skills
                </p>
              </div>
              <Button variant="hero" size="lg" className="w-full">
                Start Your Training Journey
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainTheTrainer;
