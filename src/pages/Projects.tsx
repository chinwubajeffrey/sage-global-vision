import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import heroBg from "@/assets/hero-bg.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const categories = ["All", "Urban Planning", "Architecture", "Engineering", "Real Estate"];

const projects = [
  { title: "Accra Central District Masterplan", location: "Accra, Ghana", category: "Urban Planning", description: "A 250-hectare master plan integrating mixed-use development, transit corridors, and green infrastructure for Ghana's capital.", image: project2 },
  { title: "Zenith Towers Residential Complex", location: "Lagos, Nigeria", category: "Architecture", description: "Twin 32-story residential towers featuring climate-responsive facades and integrated community amenities.", image: project1 },
  { title: "Continental Business Park", location: "Nairobi, Kenya", category: "Real Estate", description: "A 40-acre Grade A commercial development designed to attract multinational headquarters to East Africa.", image: project3 },
  { title: "Tema New Town Infrastructure", location: "Tema, Ghana", category: "Engineering", description: "Complete civil infrastructure for a new 180-hectare residential district including roads, drainage, and utilities.", image: project2 },
  { title: "Abuja Waterfront Regeneration", location: "Abuja, Nigeria", category: "Urban Planning", description: "Transformation of a 3km urban waterfront into a vibrant mixed-use district with public promenades and cultural facilities.", image: project1 },
  { title: "Kigali Innovation Hub", location: "Kigali, Rwanda", category: "Architecture", description: "A 15,000 sqm technology campus designed to foster collaboration with flexible, modular workspace configurations.", image: project3 },
  { title: "Maputo Coastal Highway", location: "Maputo, Mozambique", category: "Engineering", description: "Structural engineering for a 12km elevated coastal highway connecting the city center to the international airport.", image: project2 },
  { title: "Lusaka Mixed-Use Development", location: "Lusaka, Zambia", category: "Real Estate", description: "Feasibility and development management for a $120M mixed-use project including retail, office, and residential components.", image: project1 },
  { title: "Dakar Transit-Oriented District", location: "Dakar, Senegal", category: "Urban Planning", description: "A transit-oriented development framework centered around the new BRT line connecting suburban communities.", image: project3 },
  { title: "Cape Coast Heritage Center", location: "Cape Coast, Ghana", category: "Architecture", description: "Adaptive reuse of a colonial-era warehouse into a contemporary cultural center and museum.", image: project2 },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <main>
      <PageHero
        title="Projects"
        subtitle="A portfolio of transformative work across Africa."
        backgroundImage={heroBg}
      />

      <section className="section-light py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Filters */}
          <ScrollReveal>
            <div className="flex flex-wrap gap-4 mb-16">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`font-body text-sm uppercase tracking-widest px-4 py-2 transition-colors duration-200 ${
                    activeFilter === cat
                      ? "bg-sage text-sage-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
                  transition={{ duration: 0.3 }}
                  className="group card-hover"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-midnight/0 group-hover:bg-midnight/60 transition-colors duration-300 flex items-center justify-center">
                      <span className="btn-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs">
                        View Details
                      </span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-body text-xs uppercase tracking-widest text-sage">
                        {project.category}
                      </span>
                      <span className="font-body text-xs text-machinery">
                        {project.location}
                      </span>
                    </div>
                    <h3 className="font-display text-xl font-semibold text-foreground">
                      {project.title}
                    </h3>
                    <p className="body-sm text-muted-foreground mt-2">
                      {project.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Projects;
