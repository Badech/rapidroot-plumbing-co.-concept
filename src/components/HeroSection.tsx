import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Shield, Zap, Clock, CheckCircle, Star } from "lucide-react";
import heroImg from "@/assets/hero-plumber.jpg";

const HeroSection = () => (
  <section className="relative overflow-hidden bg-background">
    <div className="container relative z-10 py-12 md:py-0">
      <div className="grid items-center gap-8 md:min-h-[600px] lg:min-h-[680px] lg:grid-cols-2 lg:gap-16">
        {/* Left — Copy */}
        <div className="order-2 py-4 lg:order-1 lg:py-20 animate-fade-up">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent">
            <Clock className="h-3.5 w-3.5" />
            Serving the Phoenix Metro Area
          </div>

          <h1 className="mb-5 text-4xl font-extrabold leading-[1.1] tracking-tight text-foreground md:text-5xl lg:text-[3.4rem] text-balance">
            Fast, Honest Plumbing Service When You Need&nbsp;It&nbsp;Most
          </h1>

          <p className="mb-8 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
            From emergency repairs to water heater replacements — RapidRoot provides fast response, upfront pricing, and clean workmanship for Phoenix homeowners.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link to="/contact">
              <Button size="xl" className="w-full sm:w-auto">
                Request Service
              </Button>
            </Link>
            <a href="tel:+16025551234">
              <Button variant="outline" size="xl" className="w-full gap-2 sm:w-auto">
                <Phone className="h-5 w-5" /> (602) 555-1234
              </Button>
            </a>
          </div>

          {/* Trust row */}
          <div className="mt-10 flex flex-wrap gap-x-5 gap-y-3 border-t pt-6 animate-fade-up-delay-2">
            {[
              { icon: Shield, text: "Licensed & Insured" },
              { icon: Zap, text: "Same-Day Service" },
              { icon: CheckCircle, text: "Upfront Pricing" },
              { icon: Star, text: "Locally Owned" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground">
                <item.icon className="h-4 w-4 text-accent" />
                {item.text}
              </div>
            ))}
          </div>
        </div>

        {/* Right — Image */}
        <div className="relative order-1 lg:order-2 animate-fade-up-delay-1">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl lg:rounded-3xl">
            <img
              src={heroImg}
              alt="Professional plumber servicing a kitchen sink"
              width={1920}
              height={1080}
              className="aspect-[4/3] w-full object-cover lg:aspect-[3/4] xl:aspect-[4/5]"
            />
            {/* Floating badge */}
            <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-card/95 p-4 shadow-lg backdrop-blur-sm sm:left-auto sm:right-4 sm:w-64">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10">
                  <Clock className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">Emergency Service</p>
                  <p className="text-xs text-muted-foreground">Available 24/7 for urgent repairs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
