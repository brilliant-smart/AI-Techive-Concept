import { Globe, Mail, Phone, Linkedin } from "lucide-react";

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="bg-foreground text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary-glow rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AT</span>
              </div>
              <span className="text-xl font-bold">AI Techive</span>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              Empowering lives through skill training and building a community
              of self-reliant individuals who grow into future trainers.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#about"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#programs"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Programs
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Programs</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Digital Marketing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Graphic Design
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  UI/UX Design
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Train-the-Trainer
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
                <a
                  href="mailto:info@aitechive.online"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  info@aitechive.online
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" />
                <a
                  href="tel:+2348145617770"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  +234 8145617770
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="w-4 h-4 text-primary" />
                <a
                  href="https://www.shuraforall.org"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  ShuraForAll.org
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-white/60">
            © {currentYear} AI Techive Concept. All rights reserved. Powered by
            ShuraForAll.org
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
