import { useState } from "react";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your inquiry. Our team will be in touch shortly.");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main>
      <PageHero title="Contact" subtitle="Let's start a conversation about your next project." />

      <section className="section-light py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Form */}
            <ScrollReveal className="lg:col-span-7">
              <h2 className="heading-md text-foreground mb-8">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="body-sm text-muted-foreground mb-2 block">Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full border border-machinery bg-transparent px-4 py-3 font-body text-foreground focus:outline-none focus:border-sage transition-colors"
                    />
                  </div>
                  <div>
                    <label className="body-sm text-muted-foreground mb-2 block">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full border border-machinery bg-transparent px-4 py-3 font-body text-foreground focus:outline-none focus:border-sage transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="body-sm text-muted-foreground mb-2 block">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border border-machinery bg-transparent px-4 py-3 font-body text-foreground focus:outline-none focus:border-sage transition-colors"
                  />
                </div>
                <div>
                  <label className="body-sm text-muted-foreground mb-2 block">Service Interest</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full border border-machinery bg-transparent px-4 py-3 font-body text-foreground focus:outline-none focus:border-sage transition-colors"
                  >
                    <option value="">Select a service</option>
                    <option value="urban-planning">Urban Planning</option>
                    <option value="architecture">Architecture</option>
                    <option value="engineering">Engineering</option>
                    <option value="real-estate">Real Estate Development</option>
                    <option value="multi-disciplinary">Multi-Disciplinary</option>
                  </select>
                </div>
                <div>
                  <label className="body-sm text-muted-foreground mb-2 block">Message</label>
                  <textarea
                    name="message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full border border-machinery bg-transparent px-4 py-3 font-body text-foreground focus:outline-none focus:border-sage transition-colors resize-none"
                  />
                </div>
                <button type="submit" className="btn-primary">
                  Send Message
                </button>
              </form>
            </ScrollReveal>

            {/* Contact Info */}
            <ScrollReveal className="lg:col-span-4 lg:col-start-9" delay={0.2}>
              <h2 className="heading-md text-foreground mb-8">Get in Touch</h2>
              <div className="space-y-8">
                <div>
                  <h4 className="font-body text-sm uppercase tracking-widest text-foreground mb-2">
                    Office
                  </h4>
                  <p className="body-md text-muted-foreground">
                    12 Independence Avenue<br />
                    East Legon, Accra<br />
                    Ghana
                  </p>
                </div>
                <div>
                  <h4 className="font-body text-sm uppercase tracking-widest text-foreground mb-2">
                    Email
                  </h4>
                  <a href="mailto:info@sageglobalconsult.com" className="body-md text-sage">
                    info@sageglobalconsult.com
                  </a>
                </div>
                <div>
                  <h4 className="font-body text-sm uppercase tracking-widest text-foreground mb-2">
                    Phone
                  </h4>
                  <p className="body-md text-muted-foreground">+233 30 277 8800</p>
                </div>
                <div>
                  <h4 className="font-body text-sm uppercase tracking-widest text-foreground mb-2">
                    Follow Us
                  </h4>
                  <div className="flex gap-4">
                    {["LinkedIn", "Instagram", "X"].map((platform) => (
                      <a
                        key={platform}
                        href="#"
                        className="body-sm text-muted-foreground hover:text-sage transition-colors"
                      >
                        {platform}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-12 aspect-square bg-muted flex items-center justify-center">
                <p className="body-sm text-muted-foreground">Map Placeholder</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
