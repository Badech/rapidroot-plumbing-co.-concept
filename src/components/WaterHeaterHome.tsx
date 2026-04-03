import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import waterHeaterImg from "@/assets/water-heater.jpg";

const WaterHeaterHome = () => (
  <section className="section-padding section-alt">
    <div className="container">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="animate-fade-up">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">Water Heater Service</p>
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight md:text-4xl">Don't Wait Until You're Out of Hot Water</h2>
          <p className="mb-6 text-muted-foreground leading-relaxed">
            Whether your water heater needs a repair, a full replacement, or you're considering an upgrade to tankless — RapidRoot handles it all. We'll explain your options clearly so you can make the right choice for your home.
          </p>
          <ul className="mb-8 space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-accent" /> Tank and tankless water heater service</li>
            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-accent" /> Fast diagnosis and repair</li>
            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-accent" /> Energy-efficient replacement options</li>
            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-accent" /> Clear pricing before any work begins</li>
          </ul>
          <Link to="/water-heaters">
            <Button size="lg" className="gap-2">
              Learn About Water Heater Service <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
        <div className="animate-fade-up-delay-1">
          <img
            src={waterHeaterImg}
            alt="Modern tankless water heater installation"
            loading="lazy"
            width={1280}
            height={854}
            className="rounded-xl shadow-lg object-cover aspect-[4/3]"
          />
        </div>
      </div>
    </div>
  </section>
);

export default WaterHeaterHome;
