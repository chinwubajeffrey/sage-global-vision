import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "SAGE Global Consult delivered a masterplan that transformed our vision for the district into a viable, investable reality. Their cross-disciplinary team understood both the technical and political complexities.",
    name: "Dr. Kwame Asante",
    role: "Director of Urban Development, Ministry of Planning, Ghana",
    rating: 5,
  },
  {
    quote: "Their architectural team produced a design that is both striking and deeply functional. The Zenith Towers project has become a benchmark for residential development in Lagos.",
    name: "Adaeze Nneka Obi",
    role: "CEO, Pinnacle Properties, Nigeria",
    rating: 5,
  },
  {
    quote: "Working with SAGE on the Kigali Innovation Hub was a seamless experience. They brought international best practices while respecting the unique context of our market.",
    name: "Jean-Pierre Habimana",
    role: "Director of Innovation, Rwanda ICT Chamber",
    rating: 5,
  },
  {
    quote: "The infrastructure engineering on the Tema New Town project was executed to the highest international standards. SAGE's supervision ensured quality at every stage.",
    name: "Ing. Samuel Tetteh",
    role: "Municipal Engineer, Tema Metropolitan Assembly",
    rating: 5,
  },
  {
    quote: "SAGE's feasibility study and financial modeling gave us the confidence to commit $120 million to the Lusaka development. Their analysis was rigorous and their recommendations actionable.",
    name: "Charles Mwanza",
    role: "Managing Partner, Zambezi Capital Partners",
    rating: 5,
  },
  {
    quote: "Few consultancies in Africa can integrate planning, design, and engineering the way SAGE does. They are a genuine one-stop-shop for complex urban projects.",
    name: "Prof. Amina Bello",
    role: "Head of Urban Studies, University of Lagos",
    rating: 5,
  },
  {
    quote: "The Abuja Waterfront project has completely reimagined what urban regeneration can look like in West Africa. SAGE's vision was bold, and their execution was precise.",
    name: "Hon. Ibrahim Garba",
    role: "Commissioner for Works, FCT Abuja",
    rating: 4,
  },
  {
    quote: "SAGE brought clarity to a complex multi-stakeholder process. Their ability to communicate technical solutions to non-technical audiences is exceptional.",
    name: "Sophie Kamara",
    role: "Country Director, UN-Habitat Sierra Leone",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <main>
      {/* Hero Quote */}
      <section className="section-dark min-h-[70vh] flex items-center">
        <div className="container mx-auto px-6 lg:px-12 py-32">
          <ScrollReveal>
            <blockquote className="max-w-4xl">
              <p className="heading-md text-midnight-foreground leading-relaxed mb-8">
                "{testimonials[0].quote}"
              </p>
              <footer>
                <p className="body-md text-midnight-foreground font-semibold">
                  {testimonials[0].name}
                </p>
                <p className="body-sm text-machinery">{testimonials[0].role}</p>
              </footer>
            </blockquote>
          </ScrollReveal>
        </div>
      </section>

      {/* Grid */}
      <section className="section-light py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <h2 className="heading-lg text-foreground mb-16">Client Voices</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.slice(1).map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 0.08}>
                <div className="border border-border p-8 card-hover h-full flex flex-col">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star
                        key={j}
                        size={16}
                        className={j < t.rating ? "fill-sage text-sage" : "text-machinery"}
                      />
                    ))}
                  </div>
                  <p className="body-md text-muted-foreground flex-1 mb-6">
                    "{t.quote}"
                  </p>
                  <footer>
                    <p className="font-body font-semibold text-foreground">{t.name}</p>
                    <p className="body-sm text-muted-foreground">{t.role}</p>
                  </footer>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Testimonials;
