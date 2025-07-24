import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Users, Award, Presentation } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-24 md:pt-32 min-h-screen hero-gradient flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Empowering Lives Through
            <span className="block gradient-text pb-3">Skill Training</span>
          </h1>

          <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-3xl mx-auto leading-relaxed">
            <span className="block text-2xl md:text-3xl font-semibold text-primary mb-4">
              Learn. Grow. Lead.
            </span>
            Through powerful online training on the{" "}
            <span className="font-medium text-white">ShuraForAll</span>{" "}
            platform,
            <span className="font-semibold text-white">
              {" "}
              AI Techive Concept
            </span>{" "}
            is building a new generation of digital experts — empowered to
            succeed and prepared to train others.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button variant="hero" size="hero" className="group">
              Start Learning Now
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              variant="outline"
              size="hero"
              className="border-white text-primary hover:bg-white hover:text-secondary-foreground"
            >
              <Users className="w-5 h-5 mr-2" />
              Join Our Community
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">8+</div>
              <div className="text-sm opacity-80">Skill Programs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">95%</div>
              <div className="text-sm opacity-80">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-sm opacity-80">Expert Trainers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
