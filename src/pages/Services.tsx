import { Link } from "react-router-dom";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import servicesHero from "@/assets/services-hero.jpg";

const services = [
  {
    title: "Urban Planning",
    description:
      "We create comprehensive master plans that balance economic growth, environmental stewardship, and social equity. Our planning practice works at every scale — from regional spatial strategies to neighborhood-level urban design.",
    deliverables: [
      "Regional and metropolitan master plans",
      "Zoning and land use frameworks",
      "Transport and mobility planning",
      "Environmental impact assessments",
      "Community engagement strategies",
      "Policy and regulatory advisory",
    ],
  },
  {
    title: "Architecture",
    description:
      "Our architectural practice designs buildings and spaces that respond to climate, culture, and context. We believe that architecture at its best is invisible — it simply makes life better for the people who inhabit it.",
    deliverables: [
      "Conceptual and schematic design",
      "Design development and documentation",
      "Sustainable and green building design",
      "Interior architecture",
      "Adaptive reuse and heritage projects",
      "Construction administration",
    ],
  },
  {
    title: "Engineering",
    description:
      "Our engineering team provides the technical backbone that turns design ambition into structural reality. We specialize in the complex civil and structural challenges unique to rapidly urbanizing environments.",
    deliverables: [
      "Structural engineering and analysis",
      "Civil and site engineering",
      "Geotechnical investigations",
      "Infrastructure design (roads, drainage, utilities)",
      "Construction supervision",
      "Value engineering and cost optimization",
    ],
  },
  {
    title: "Real Estate Development",
    description:
      "We advise developers, investors, and governments on the full lifecycle of real estate projects — from market analysis and feasibility through financing, delivery, and asset management.",
    deliverables: [
      "Market research and feasibility studies",
      "Financial modeling and investment analysis",
      "Development management",
      "Public-private partnership structuring",
      "Asset management strategy",
      "Highest and best use analysis",
    ],
  },
];

const Services = () => {
  return (
    <main>
      <PageHero
        title="Services"
        subtitle="Four integrated disciplines. One seamless delivery."
        backgroundImage={servicesHero}
      />

      {services.map((service, i) => (
        <section
          key={service.title}
          className={`${i % 2 === 0 ? "section-light" : "section-dark"} py-24 lg:py-32`}
        >
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              <ScrollReveal className="lg:col-span-5">
                <span className="font-body text-sm uppercase tracking-widest text-sage mb-4 block">
                  0{i + 1}
                </span>
                <h2 className={`heading-lg ${i % 2 === 0 ? "text-foreground" : "text-midnight-foreground"}`}>
                  {service.title}
                </h2>
              </ScrollReveal>
              <ScrollReveal className="lg:col-span-6 lg:col-start-7" delay={0.15}>
                <p className={`body-lg mb-8 ${i % 2 === 0 ? "text-muted-foreground" : "text-machinery"}`}>
                  {service.description}
                </p>
                <h4 className={`font-body text-sm uppercase tracking-widest mb-4 ${i % 2 === 0 ? "text-foreground" : "text-midnight-foreground"}`}>
                  Key Deliverables
                </h4>
                <ul className="space-y-2">
                  {service.deliverables.map((item) => (
                    <li
                      key={item}
                      className={`body-md flex items-start gap-3 ${i % 2 === 0 ? "text-muted-foreground" : "text-machinery"}`}
                    >
                      <span className="text-sage mt-1.5 shrink-0">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </ScrollReveal>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="bg-sage py-20">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <ScrollReveal>
            <h2 className="heading-lg text-sage-foreground mb-6">
              Need a Multi-Disciplinary Partner?
            </h2>
            <Link to="/contact" className="btn-outline text-sage-foreground border-sage-foreground">
              Start a Conversation
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default Services;
