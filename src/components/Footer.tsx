import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="section-dark py-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <img
              src={logo}
              alt="SAGE Global Consult"
              className="h-10 w-auto mb-6"
            />
            <p className="body-sm text-machinery max-w-xs">
              Shaping cities and communities through integrated urban planning,
              architecture, engineering, and real estate development.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-body text-sm uppercase tracking-widest text-midnight-foreground mb-6">
              Navigation
            </h4>
            <div className="flex flex-col gap-3">
              {[
                { label: "Home", path: "/" },
                { label: "About", path: "/about" },
                { label: "Services", path: "/services" },
                { label: "Projects", path: "/projects" },
                { label: "Testimonials", path: "/testimonials" },
                { label: "Contact", path: "/contact" },
              ].map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="body-sm text-machinery hover:text-sage transition-colors duration-200"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body text-sm uppercase tracking-widest text-midnight-foreground mb-6">
              Contact
            </h4>
            <div className="flex flex-col gap-3 body-sm text-machinery">
              <p>Km 8, Enugu -Abakaliki Express Way</p>
              <p> Abakaliki, Ebonyi State</p>
              <p>emmanwafor57@gmail.com</p>
              <p>+234 803 548 5995</p>
            </div>
            {/* Social */}
            <div className="flex gap-4 mt-6">
              {["LinkedIn", "Instagram", "X"].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="font-body text-xs uppercase tracking-widest text-machinery hover:text-sage transition-colors duration-200"
                >
                  {platform}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-machinery/20 pt-8">
          <p className="body-sm text-machinery/60 text-center">
            © {new Date().getFullYear()} SAGE Global Consult. All rights
            reserved.
          </p>
          <br />
          <p className="body-sm text-machinery/60 text-center">
            Built by Velto
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
