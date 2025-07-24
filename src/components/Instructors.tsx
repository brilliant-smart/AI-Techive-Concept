import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Linkedin, Award, Users, Star } from "lucide-react";

const instructors = [
  {
    name: "Adamu Iliyasu",
    role: "Data Analyst | Excel Expert | Transforming Data into Actionable Insights",
    image: "/public/Adamu-Iliyasu.png",
    bio: "Detail-oriented data analyst with a strong background in using Excel to organize, clean, and interpret complex datasets. Passionate about transforming raw data into clear, actionable insights that drive business decisions.",
    specialties: [
      "Data Analysis",
      "Excel Dashboards",
      "Data Cleaning & Transformation",
      "Business Reporting",
      "Pivot Tables & VLOOKUP",
      "Decision Support",
    ],
    achievements: "200+ Reports Delivered",
    rating: 4.9,
    linkedIn: "#",
  },
  {
    name: "Hamisu Abubakar Muhammad",
    role: "Full-Stack Developer | AI & LLM Engineer | Specializing in Health Tech & LLM-Web Integration",
    image: "/public/Brilliant-Smart.png",
    bio: "Experienced full-stack developer with a strong foundation in web technologies and AI integration. Skilled in building and deploying dynamic websites and intelligent systems. Currently focused on leveraging LLMs to drive innovation in health tech.",
    specialties: [
      "Full-Stack Web Development",
      "AI & LLM Integration",
      "Health Informatics",
      "Database Architecture",
      "Digital Health Solutions",
      "Software Engineering",
    ],
    achievements: "300+ Students Certified",
    rating: 4.8,
    linkedIn: "#",
  },
  {
    name: "Muhammad Auwal Adam",
    role: "Public Speaker | Podcast Host | Program Organizer & Motivational Leader",
    image: "/public/Auwal-Adam.png",
    bio: "Dynamic communicator with a passion for public speaking, podcast hosting, and inspiring audiences. Skilled in organizing impactful programs, delivering motivational talks, and creating engaging content that resonates with diverse groups.",
    specialties: [
      "Public Speaking",
      "Podcast Hosting",
      "Program Organization",
      "Motivational Speaking",
      "Content Creation",
      "Event Facilitation",
    ],
    achievements: "100+ Successful Graduates",
    rating: 4.5,
    linkedIn: "#",
  },
];

const Instructors = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Meet Your <span className="gradient-text">Expert Instructors</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Learn from industry professionals who have successfully transitioned
            hundreds of students into skilled practitioners and confident
            trainers.
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {instructors.map((instructor, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden hover:shadow-elegant transition-smooth hover:scale-105 transform"
            >
              <CardContent className="p-8">
                {/* Instructor Avatar */}
                <div className="flex flex-col items-center mb-6">
                  <Avatar className="w-24 h-24 mb-4 ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all">
                    <AvatarImage
                      src={instructor.image}
                      alt={instructor.name}
                      className="object-cover"
                    />
                    <AvatarFallback className="text-2xl font-bold bg-primary/10">
                      {instructor.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>

                  <h3 className="text-2xl font-bold text-center mb-2">
                    {instructor.name}
                  </h3>
                  <p className="text-primary font-semibold text-center mb-4">
                    {instructor.role}
                  </p>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(instructor.rating)
                              ? "text-accent fill-accent"
                              : "text-muted-foreground"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm font-semibold">
                      {instructor.rating}
                    </span>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-muted-foreground text-center mb-6 leading-relaxed">
                  {instructor.bio}
                </p>

                {/* Specialties */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-center">
                    Specialties
                  </h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {instructor.specialties.map((specialty, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Achievement */}
                <div className="flex items-center justify-center gap-2 mb-6 p-3 bg-success/10 rounded-lg">
                  <Award className="w-5 h-5 text-success" />
                  <span className="text-sm font-semibold text-success">
                    {instructor.achievements}
                  </span>
                </div>

                {/* LinkedIn Button */}
                <Button
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  asChild
                >
                  <a
                    href={instructor.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    Connect on LinkedIn
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/10 to-primary-glow/10 rounded-2xl p-8 max-w-4xl mx-auto">
            <Users className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">
              Join Our Expert-Led Training Programs
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Get personalized guidance from industry professionals who are
              committed to your success. Start your journey to becoming both a
              skilled professional and an inspiring trainer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="shadow-glow">
                Start Learning Now
              </Button>
              <Button variant="outline" size="lg">
                Become a Trainer
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instructors;
