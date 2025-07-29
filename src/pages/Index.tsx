import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Programs from "@/components/Programs";
import HowItWorks from "@/components/HowItWorks";
import TrainTheTrainer from "@/components/TrainTheTrainer";
import Instructors from "@/components/Instructors";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="programs">
          <Programs />
        </section>

        <section id="how-it-works">
          <HowItWorks />
        </section>

        <section id="train-the-trainer">
          <TrainTheTrainer />
        </section>

        <section id="instructors">
          <Instructors />
        </section>

        <section id="testimonials">
          <Testimonials />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
