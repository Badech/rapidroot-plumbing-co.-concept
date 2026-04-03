import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Flame, ArrowRight, AlertTriangle, Zap, Droplets } from "lucide-react";
import waterHeaterImg from "@/assets/water-heater.jpg";

const signs = [
  "Your water heater is more than 8–10 years old",
  "Hot water runs out faster than it used to",
  "You hear rumbling or popping sounds from the tank",
  "You notice rust-colored water from hot taps",
  "There's pooling water around the base of the unit",
  "Your energy bills are climbing without explanation",
];

const WaterHeatersPage = () => (
  <>
    <Navbar />
    <main>
      <section className="bg-primary py-16 md:py-24">
        <div className="container animate-fade-up">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">Water Heater Service</p>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-primary-foreground md:text-5xl">Water Heater Repair & Replacement</h1>
          <p className="max-w-2xl text-lg text-primary-foreground/70">From quick repairs to full replacement — we help Phoenix homeowners get reliable hot water back, fast.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="animate-fade-up">
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight">Repair vs. Replacement — We'll Help You Decide</h2>
              <p className="mb-4 text-muted-foreground leading-relaxed">
                Not every water heater issue means you need a new unit. Sometimes a repair is the smarter move. Other times, replacement saves you money in the long run. We'll walk you through both options honestly.
              </p>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                If your water heater can be repaired safely and cost-effectively, we'll tell you. If replacement makes more sense — whether for efficiency, reliability, or cost — we'll explain why and help you choose the right unit.
              </p>
              <Link to="/contact">
                <Button size="lg" className="gap-2">
                  Schedule Water Heater Service <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="animate-fade-up-delay-1">
              <img src={waterHeaterImg} alt="Modern tankless water heater" loading="lazy" width={1280} height={854} className="rounded-xl shadow-lg object-cover aspect-[4/3]" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding section-alt">
        <div className="container">
          <div className="mx-auto mb-14 max-w-2xl text-center animate-fade-up">
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight">Warning Signs You Shouldn't Ignore</h2>
            <p className="text-muted-foreground">If you're noticing any of these, it's worth getting your water heater checked — before a small issue becomes a big one.</p>
          </div>
          <div className="mx-auto max-w-2xl space-y-3 animate-fade-up-delay-1">
            {signs.map((sign) => (
              <div key={sign} className="flex items-start gap-3 rounded-lg border bg-card p-4">
                <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span className="text-sm">{sign}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="mx-auto mb-14 max-w-2xl text-center animate-fade-up">
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight">Tank vs. Tankless — What's Right for Your Home?</h2>
            <p className="text-muted-foreground">Both have advantages. The right choice depends on your home, your budget, and how much hot water your household uses.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 animate-fade-up-delay-1">
            <div className="rounded-xl border bg-card p-8">
              <Droplets className="mb-4 h-8 w-8 text-accent" />
              <h3 className="mb-2 text-xl font-bold">Tank Water Heaters</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" /> Lower upfront cost</li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" /> Simple, proven technology</li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" /> Easy to replace and maintain</li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" /> Good for most Phoenix homes</li>
              </ul>
            </div>
            <div className="rounded-xl border bg-card p-8">
              <Zap className="mb-4 h-8 w-8 text-accent" />
              <h3 className="mb-2 text-xl font-bold">Tankless Water Heaters</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" /> Endless hot water on demand</li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" /> Higher energy efficiency</li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" /> Longer lifespan (15–20 years)</li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" /> Compact wall-mounted design</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary section-padding">
        <div className="container text-center animate-fade-up">
          <Flame className="mx-auto mb-4 h-10 w-10 text-accent" />
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-primary-foreground md:text-4xl text-balance">Ready to get your hot water back?</h2>
          <p className="mx-auto mb-8 max-w-xl text-lg text-primary-foreground/70">Whether you need a repair, a replacement, or just an honest opinion — RapidRoot is here to help.</p>
          <Link to="/contact">
            <Button variant="hero" size="xl">Request Water Heater Service</Button>
          </Link>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default WaterHeatersPage;
