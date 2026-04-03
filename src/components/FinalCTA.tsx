import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const FinalCTA = () => (
  <section className="bg-primary section-padding">
    <div className="container text-center animate-fade-up">
      <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-primary-foreground md:text-4xl text-balance">
        Need plumbing help you can trust?
      </h2>
      <p className="mx-auto mb-8 max-w-xl text-lg text-primary-foreground/70">
        Whether it's an emergency or a planned repair, RapidRoot is here to help. Fast response, honest service, reliable results.
      </p>
      <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Link to="/contact">
          <Button variant="hero" size="xl">Request Service</Button>
        </Link>
        <a href="tel:+16025551234">
          <Button variant="hero-outline" size="xl" className="gap-2">
            <Phone className="h-5 w-5" /> Call Now
          </Button>
        </a>
      </div>
    </div>
  </section>
);

export default FinalCTA;
