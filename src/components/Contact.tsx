import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Mail, Globe, Linkedin, MapPin, Clock } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

type FormValues = {
  name: string;
  email: string;
  problemType: string;
  phone: string;
  message: string;
};

const Contact = () => {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    setStatus("loading");

    try {
      // Simulate API call — replace with real endpoint as needed
      await new Promise((resolve) => setTimeout(resolve, 1500));

      reset();
      setStatus("success");
      setTimeout(() => setStatus("idle"), 3000);
    } catch (err) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "info@aitechive.online",
      href: "mailto:info@aitechive.online",
    },
    {
      icon: FaWhatsapp,
      label: "WhatsApp",
      value: "+234 8145617770",
      href: "https://wa.me/2348145617770",
    },
    {
      icon: Globe,
      label: "Platform",
      value: "www.shuraforall.org",
      href: "https://www.shuraforall.org",
    },
    {
      icon: Linkedin,
      label: "Social Media",
      value: "LinkedIn",
      href: "https://www.linkedin.com/in/adamu-iliyasu-07397559",
    },
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to start your learning journey? We're here to help you every
            step of the way.
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-6"></div>
        </div>

        {/* Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-foreground">
              Contact Information
            </h3>
            <div className="space-y-6">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all">
                    <contact.icon className="w-6 h-6 text-primary group-hover:text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">
                      {contact.label}
                    </div>
                    <a
                      href={contact.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-semibold text-foreground hover:text-primary transition-colors"
                    >
                      {contact.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Office Hours */}
            <div className="mt-12 p-6 bg-primary/10 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <Clock className="w-5 h-5 text-primary" />
                <h4 className="font-semibold text-foreground">Office Hours</h4>
              </div>
              <p className="text-muted-foreground">
                Monday - Friday: 9:00 AM - 6:00 PM (WAT)
                <br />
                Saturday: 10:00 AM - 4:00 PM
                <br />
                Sunday: Closed
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="card-gradient p-8 rounded-xl shadow-elegant">
            <h3 className="text-2xl font-bold mb-6 text-foreground">
              Ready to Transform Your Future?
            </h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Join thousands of learners who have transformed their careers
              through our comprehensive training programs. Whether you want to
              learn new skills or become a trainer yourself, we have the perfect
              program for you.
            </p>

            <div className="space-y-4">
              <Button variant="hero" size="lg" className="w-full">
                Get Trained
              </Button>
              <Button variant="outline" size="lg" className="w-full">
                Become a Trainer
              </Button>
            </div>

            <div className="mt-8 p-4 bg-success/10 rounded-lg border border-success/20">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                <span className="text-success font-semibold text-sm">
                  New cohort starting soon! Limited spots available.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-3xl mx-auto mt-24">
          <h3 className="text-2xl font-bold mb-6 text-center text-foreground">
            Send Us a Message
          </h3>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  {...register("name", { required: "Name is required" })}
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground focus:ring-2 focus:ring-primary focus:outline-none"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Enter a valid email",
                    },
                  })}
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground focus:ring-2 focus:ring-primary focus:outline-none"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-1">
                  Description of the Problem
                </label>
                <select
                  {...register("problemType", {
                    required: "Please select a type",
                  })}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground focus:ring-2 focus:ring-primary focus:outline-none"
                >
                  <option value="">Select one</option>
                  <option value="complaint">Complaint</option>
                  <option value="feedback">Feedback</option>
                  <option value="other">Other</option>
                </select>
                {errors.problemType && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.problemType.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  {...register("phone", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^[\d+()\-.\s]{7,}$/,
                      message: "Enter a valid phone number",
                    },
                  })}
                  placeholder="+234 803 462 5258"
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground focus:ring-2 focus:ring-primary focus:outline-none"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.phone.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-1">
                Message
              </label>
              <textarea
                rows={5}
                {...register("message", { required: "Message is required" })}
                placeholder="Type your message here..."
                className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground focus:ring-2 focus:ring-primary focus:outline-none resize-none"
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            <div className="text-center">
              <Button
                type="submit"
                variant="hero"
                size="lg"
                disabled={status === "loading"}
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </Button>

              {status === "success" && (
                <p className="mt-4 text-green-600 font-medium">
                  Message sent successfully!
                </p>
              )}
              {status === "error" && (
                <p className="mt-4 text-red-600 font-medium">
                  Something went wrong. Please try again.
                </p>
              )}
            </div>
          </form>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-3 text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span>Serving learners worldwide through ShuraForAll.org</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
