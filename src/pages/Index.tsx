import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import heroBg from "@/assets/hero-bg.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const services = [
  {
    title: "Urban Planning",
    description:
      "Master plans and zoning strategies that shape sustainable, livable cities for generations to come.",
  },
  {
    title: "Architecture",
    description:
      "Bold, purposeful design that balances form, function, and environmental responsibility.",
  },
  {
    title: "Engineering",
    description:
      "Structural and civil engineering solutions that bring ambitious visions to buildable reality.",
  },
  {
    title: "Real Estate Development",
    description:
      "End-to-end development advisory from feasibility through delivery and asset management.",
  },
];

const stats = [
  { value: "20+", label: "Projects Delivered" },
  { value: "12", label: "Countries Reached" },
  { value: "50+", label: "Team Members" },
  { value: "8", label: "Years of Excellence" },
];

const featuredProjects = [
  {
    title: "Accra Central District Masterplan",
    location: "Accra, Ghana",
    category: "Urban Planning",
    image: project2,
  },
  {
    title: "Zenith Towers Residential Complex",
    location: "Lagos, Nigeria",
    category: "Architecture",
    image: project1,
  },
  {
    title: "Continental Business Park",
    location: "Nairobi, Kenya",
    category: "Real Estate",
    image: project3,
  },
];

const Index = () => {
  return (
    <main>
      {/* Hero */}
      <section className="relative md:h-screen h-full flex items-center section-dark md:pt-10 pt-[7rem]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="absolute inset-0 bg-midnight/60" />
        </div>
        <div className="container mx-auto pt-0 pb-10 lg:pt-10 md:pt-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <p className="font-body text-sm uppercase tracking-[0.3em] text-sage mb-6">
              Urban and Regional Planning
            </p>
            <h1 className="heading-xl text-midnight-foreground mb-8">
              Shaping Cities.
              <br />
              Building Futures.
            </h1>
            <p className="body-lg text-machinery mb-12 max-w-xl">
              SAGE Global Consult is a multi-disciplinary consultancy delivering
              transformative urban planning, architecture, engineering, and real
              estate development across Africa and beyond.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/projects" className="btn-primary">
                View Our Projects
              </Link>
              <Link
                to="/contact"
                className="btn-outline text-midnight-foreground border-midnight-foreground"
              >
                Get a Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Intro */}
      <section className="section-light py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <ScrollReveal className="lg:col-span-4">
              <h2 className="heading-lg text-foreground">Who We Are</h2>
            </ScrollReveal>
            <ScrollReveal className="lg:col-span-7 lg:col-start-6" delay={0.15}>
              <p className="body-lg text-muted-foreground mb-6">
                Founded with a singular vision to transform the built
                environment across the African continent, SAGE Global Consult
                brings together expertise in urban planning, architecture,
                engineering, and real estate development under one roof.
              </p>
              <p className="body-md text-muted-foreground">
                We work with governments, institutional investors, and private
                developers to conceive, plan, and deliver projects that define
                skylines and improve communities. Our approach is rooted in
                rigorous analysis, cross-disciplinary collaboration, and a deep
                understanding of local context.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-dark py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <h2 className="heading-lg text-midnight-foreground mb-16">
              Our Disciplines
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 0.1}>
                <div className="border border-machinery/20 p-8 card-hover">
                  <h3 className="heading-sm text-midnight-foreground mb-4">
                    {service.title}
                  </h3>
                  <p className="body-md text-machinery">
                    {service.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-light py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.1}>
                <div className="text-center lg:text-left">
                  <p className="heading-xl text-sage">{stat.value}</p>
                  <p className="body-sm text-muted-foreground mt-2 uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-light py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <div className="flex items-end justify-between mb-16">
              <h2 className="heading-lg text-foreground">Latest Projects</h2>
              <Link
                to="/projects"
                className="nav-link pb-1 text-sage hidden md:block"
              >
                View All Projects
              </Link>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project, i) => (
              <ScrollReveal key={project.title} delay={i * 0.1}>
                <Link to="/projects" className="group block card-hover">
                  <div className="aspect-[4/3] overflow-hidden mb-4">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <span className="font-body text-xs uppercase tracking-widest text-sage">
                    {project.category}
                  </span>
                  <h3 className="heading-sm text-foreground mt-2">
                    {project.title}
                  </h3>
                  <p className="body-sm text-muted-foreground mt-1">
                    {project.location}
                  </p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Teaser */}
      <section className="section-dark py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <ScrollReveal className="lg:col-span-8">
              <blockquote>
                <p className="heading-md text-midnight-foreground leading-relaxed">
                  "SAGE Global Consult delivered a masterplan that transformed
                  our vision for the district into a viable, investable reality.
                  Their cross-disciplinary team understood both the technical
                  and political complexities."
                </p>
                <footer className="mt-8">
                  <p className="body-md text-midnight-foreground font-semibold">
                    Dr. Kwame Asante
                  </p>
                  <p className="body-sm text-machinery">
                    Director of Urban Development, Ministry of Planning, Ghana
                  </p>
                </footer>
              </blockquote>
            </ScrollReveal>
            <ScrollReveal
              className="lg:col-span-3 lg:col-start-10 flex items-end"
              delay={0.2}
            >
              <Link to="/testimonials" className="nav-link pb-1 text-sage">
                Read More Testimonials
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-sage py-20">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <ScrollReveal>
            <h2 className="heading-lg text-sage-foreground mb-6">
              Ready to Build the Future?
            </h2>
            <p className="body-lg text-sage-foreground/80 mb-10 max-w-xl mx-auto">
              Let's discuss how SAGE Global Consult can bring your next project
              to life.
            </p>
            <Link
              to="/contact"
              className="btn-outline text-sage-foreground border-sage-foreground"
            >
              Get a Consultation
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default Index;
