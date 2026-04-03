import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Shield, Zap, Droplets, Flame, Home } from "lucide-react";
import heroImg from "@/assets/hero-plumbing.jpg";

const trustItems = [
  { icon: Shield, label: "Licensed & Insured" },
  { icon: Zap, label: "Fast Response" },
  { icon: Droplets, label: "Emergency Plumbing" },
  { icon: Flame, label: "Water Heater Specialists" },
  { icon: Home, label: "Residential Experts" },
];

const HeroSection = () => (
  <section className="relative overflow-hidden bg-primary">
    <div className="absolute inset-0">
      <img src={heroImg} alt="Modern bathroom plumbing fixtures" width={1920} height={1080} className="h-full w-full object-cover opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/80" />
    </div>
    <div className="container relative z-10 py-20 md:py-32 lg:py-40">
      <div className="max-w-2xl animate-fade-up">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">
          Phoenix Metro Plumbing Service
        </p>
        <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-primary-foreground md:text-5xl lg:text-6xl text-balance">
          Fast, Reliable Plumbing Service for Phoenix Homeowners
        </h1>
        <p className="mb-8 max-w-xl text-lg leading-relaxed text-primary-foreground/80">
          RapidRoot helps homeowners solve plumbing problems with fast response, clear communication, respectful in-home service, and reliable workmanship.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link to="/contact">
            <Button variant="hero" size="xl" className="w-full sm:w-auto">
              Request Service
            </Button>
          </Link>
          <a href="tel:+16025551234">
            <Button variant="hero-outline" size="xl" className="w-full gap-2 sm:w-auto">
              <Phone className="h-5 w-5" /> Call Now
            </Button>
          </a>
        </div>
      </div>

      <div className="mt-14 flex flex-wrap gap-x-6 gap-y-3 animate-fade-up-delay-2">
        {trustItems.map((item) => (
          <div key={item.label} className="flex items-center gap-2 text-sm font-medium text-primary-foreground/70">
            <item.icon className="h-4 w-4 text-accent" />
            {item.label}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HeroSection;
