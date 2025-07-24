import { Quote, Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rabi I.",
      quote: "Joining AI Techive's Train-the-Trainer program changed my career path. I'm now teaching digital skills in my community.",
      role: "Digital Marketing Trainer",
      rating: 5
    },
    {
      name: "Usman Ilias",
      quote: "After completing the Podcast Engineering course, I trained five new students. I never imagined becoming a mentor!",
      role: "Podcast Engineer & Mentor",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Success <span className="gradient-text">Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hear from our community of learners who became trainers
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-6"></div>
        </div>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="card-gradient p-8 rounded-xl shadow-card hover:shadow-elegant transition-smooth hover:scale-105 transform relative"
            >
              <div className="absolute -top-4 left-8">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <Quote className="w-4 h-4 text-white" />
                </div>
              </div>
              
              <div className="mb-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                
                <blockquote className="text-lg text-foreground leading-relaxed italic">
                  "{testimonial.quote}"
                </blockquote>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 bg-success/10 px-8 py-4 rounded-full">
            <div className="w-3 h-3 bg-success rounded-full"></div>
            <span className="text-success font-semibold">
              Join 1000+ successful learners and trainers
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;