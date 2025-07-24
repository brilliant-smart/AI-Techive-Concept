import { Target, Users, TrendingUp, Globe } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "Building a community of skillful, self-reliant individuals"
    },
    {
      icon: Users,
      title: "Train-the-Trainer",
      description: "Empowering learners to become mentors and guides"
    },
    {
      icon: TrendingUp,
      title: "Growth-Focused",
      description: "Structured programs designed for continuous improvement"
    },
    {
      icon: Globe,
      title: "Global Platform",
      description: "Accessible training through ShuraForAll.org"
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            About <span className="gradient-text">AI Techive</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              At AI Techive Concept, we're on a mission to build a community of skillful, 
              self-reliant individuals. We offer structured, accessible training programs 
              that empower learners to not only grow but to guide others through our 
              Train-the-Trainer approach.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              All our trainings are hosted on the <strong>ShuraForAll.org</strong> platform — 
              a hub for collaboration, learning, and decision-making.
            </p>
            
            <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-lg">
              <p className="text-lg font-semibold text-primary">
                "Transforming learners into leaders, one skill at a time."
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="card-gradient p-6 rounded-xl shadow-card hover:shadow-elegant transition-smooth hover:scale-105 transform"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;