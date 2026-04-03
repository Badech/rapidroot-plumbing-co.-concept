import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

const areas = [
  { name: "Phoenix", desc: "Comprehensive residential plumbing service throughout the Phoenix area — from Ahwatukee to North Phoenix." },
  { name: "Scottsdale", desc: "Premium plumbing service for Scottsdale homeowners. Emergency repair, water heaters, and more." },
  { name: "Tempe", desc: "Fast plumbing response for Tempe residents — drain cleaning, leak repair, and fixture installation." },
  { name: "Mesa", desc: "Reliable residential plumbing for Mesa homeowners — from East Mesa to the Superstition corridor." },
  { name: "Chandler", desc: "Full-service plumbing for Chandler — emergency repair, sewer lines, and water heater service." },
  { name: "Glendale", desc: "Serving Glendale homeowners with fast, honest plumbing repair and installation service." },
  { name: "Gilbert", desc: "Professional plumbing for Gilbert families — drain cleaning, leak detection, and more." },
];

const ServiceAreasPage = () => (
  <>
    <Navbar />
    <main>
      <section className="bg-primary py-16 md:py-24">
        <div className="container animate-fade-up">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">Service Areas</p>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-primary-foreground md:text-5xl">Serving the Phoenix Metro Area</h1>
          <p className="max-w-2xl text-lg text-primary-foreground/70">Local plumbing service with fast response times — because when you need a plumber, proximity matters.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {areas.map((area, i) => (
              <div key={area.name} className="rounded-xl border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 animate-fade-up" style={{ animationDelay: `${i * 0.05}s` }}>
                <div className="mb-3 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-accent" />
                  <h2 className="text-lg font-bold">{area.name}</h2>
                </div>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{area.desc}</p>
                <Link to="/contact" className="text-sm font-semibold text-accent hover:text-accent/80 transition-colors">
                  Request Service →
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-12 rounded-xl border bg-section-alt p-8 text-center animate-fade-up">
            <h3 className="mb-2 text-xl font-bold">Don't see your area listed?</h3>
            <p className="mb-4 text-muted-foreground">We may still be able to help. Contact us and we'll let you know if we can serve your location.</p>
            <Link to="/contact">
              <Button size="lg">Contact Us</Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default ServiceAreasPage;
