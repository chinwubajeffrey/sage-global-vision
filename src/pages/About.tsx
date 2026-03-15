import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import aboutHero from "@/assets/about-hero.jpg";

const values = [
  {
    title: "Precision",
    description:
      "Every detail matters. We apply rigorous analysis and meticulous execution to deliver solutions that endure.",
  },
  {
    title: "Integration",
    description:
      "Our multi-disciplinary model ensures that planning, design, and engineering work in concert from day one.",
  },
  {
    title: "Impact",
    description:
      "We measure success not just in built area, but in the lasting positive change our projects create for communities.",
  },
  {
    title: "Integrity",
    description:
      "We build trust through transparency, honest counsel, and unwavering commitment to our clients' long-term interests.",
  },
];

const team = [
  { name: "Nwafor Emmanuel", role: "Founding Director & Chief Planner" },
  { name: "Emeka Okafor", role: "Head of Architecture" },
  { name: "Fatima Al-Hassan", role: "Director of Engineering" },
  { name: "Kofi Annan-Poku", role: "Head of Real Estate Development" },
  { name: "Amara Diallo", role: "Senior Urban Designer" },
  { name: "Chinwuba Jeffrey", role: "Software Engineer" },
];

const milestones = [
  { year: "2025", event: "SAGE Global Consult founded in Accra, Ghana." },
  {
    year: "2025",
    event:
      "First major urban masterplan commissioned for Greater Accra Metropolitan Area.",
  },
  {
    year: "2025",
    event: "Expanded operations to Lagos, Nigeria and Nairobi, Kenya.",
  },
  { year: "2025", event: "Launched integrated engineering division." },
  {
    year: "2025",
    event: "Completed 15th major project across 8 African nations.",
  },
  {
    year: "2026",
    event: "Established real estate development advisory practice.",
  },
  {
    year: "2026",
    event: "Pan-African portfolio surpasses 20 transformative projects.",
  },
];

const About = () => {
  return (
    <main>
      <PageHero
        title="About SAGE"
        subtitle="A consultancy built on the conviction that great cities are designed, not left to chance."
        backgroundImage={aboutHero}
      />

      {/* Story */}
      <section className="section-light py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <ScrollReveal className="lg:col-span-4">
              <h2 className="heading-lg text-foreground">Our Story</h2>
            </ScrollReveal>
            <ScrollReveal className="lg:col-span-7 lg:col-start-6" delay={0.15}>
              <p className="body-lg text-muted-foreground mb-6">
                SAGE Global Consult was founded in 2025 with a clear mandate: to
                bring world-class urban planning and development expertise to
                Africa's rapidly growing cities.
              </p>
              <p className="body-md text-muted-foreground mb-6">
                Our founders recognized that the continent's urbanization —
                projected to add 900 million city dwellers by 2050 — demanded a
                new kind of consultancy. One that could integrate planning,
                architecture, engineering, and development advisory into a
                seamless, collaborative process.
              </p>
              <p className="body-md text-muted-foreground">
                Today, SAGE operates across twelve countries, partnering with
                governments, institutional investors, and private developers to
                shape the cities and communities of tomorrow. Every project we
                undertake is guided by our founding belief: that the built
                environment has the power to transform lives.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-dark py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <h2 className="heading-lg text-midnight-foreground mb-16">
              Core Values
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {values.map((value, i) => (
              <ScrollReveal key={value.title} delay={i * 0.1}>
                <h3 className="heading-md text-sage mb-4">{value.title}</h3>
                <p className="body-md text-machinery">{value.description}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-light py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <h2 className="heading-lg text-foreground mb-16">Leadership</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <ScrollReveal key={member.name} delay={i * 0.08}>
                <div className="card-hover">
                  <div className="aspect-[3/4] bg-muted mb-4" />
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    {member.name}
                  </h3>
                  <p className="body-sm text-muted-foreground mt-1">
                    {member.role}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-dark py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <h2 className="heading-lg text-midnight-foreground mb-16">
              Milestones
            </h2>
          </ScrollReveal>
          <div className="space-y-12 max-w-3xl">
            {milestones.map((item, i) => (
              <ScrollReveal key={item.year} delay={i * 0.08}>
                <div className="flex gap-8 items-center">
                  <span className="heading-md text-sage shrink-0 w-20">
                    {item.year}
                  </span>
                  <div className="border-l border-machinery/30 pl-8">
                    <p className="body-md text-machinery">{item.event}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
