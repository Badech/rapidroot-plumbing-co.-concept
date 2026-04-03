import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Wrench, Droplets, Search, Flame, PipetteIcon, ShowerHead, Home, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Emergency Plumbing Repair",
    who: "Homeowners dealing with sudden leaks, burst pipes, or flooding.",
    signs: ["Water pooling on floors or walls", "Sudden drop in water pressure", "Sounds of running water with nothing on", "Sewage backup or strong odors"],
    helps: "RapidRoot provides fast-response emergency plumbing repair to contain damage, identify the source, and fix the problem — often in a single visit.",
    why: "Water damage compounds quickly. The sooner a leak is addressed, the less it costs to repair — in both plumbing and property damage.",
  },
  {
    icon: Droplets,
    title: "Drain Cleaning",
    who: "Homeowners with slow, clogged, or frequently backed-up drains.",
    signs: ["Water draining slowly in sinks or tubs", "Gurgling sounds from drains", "Recurring clogs in the same drain", "Multiple fixtures draining slowly"],
    helps: "We use professional-grade tools to clear blockages safely — without damaging your pipes. Kitchen drains, bathroom drains, floor drains, and main lines.",
    why: "A slow drain often signals a bigger buildup. Clearing it early prevents full backups and potential water damage.",
  },
  {
    icon: Search,
    title: "Leak Detection",
    who: "Homeowners who suspect a hidden leak or have noticed unexplained water bills.",
    signs: ["Unexplained increase in water bills", "Damp spots on walls, ceilings, or floors", "Mold or mildew in unusual areas", "Sound of running water when everything is off"],
    helps: "We use non-invasive techniques to locate hidden leaks in walls, slabs, and underground lines — then repair them with minimal disruption.",
    why: "Hidden leaks cause structural damage, mold, and wasted water. Finding them early saves significant repair costs.",
  },
  {
    icon: PipetteIcon,
    title: "Sewer & Drain Line Service",
    who: "Homeowners with main line issues, tree root intrusion, or aging sewer pipes.",
    signs: ["Multiple drains backing up at once", "Sewage odors inside or outside", "Wet spots in the yard", "Gurgling toilets"],
    helps: "Camera inspection, hydro-jetting, and sewer line repair or replacement. We find the real problem before recommending a solution.",
    why: "Sewer line problems rarely get better on their own. Early inspection prevents costly excavation and property damage.",
  },
  {
    icon: Flame,
    title: "Water Heater Service",
    who: "Homeowners with aging, underperforming, or failed water heaters.",
    signs: ["No hot water or inconsistent temperature", "Rusty or discolored hot water", "Strange noises from the water heater", "Pooling water around the unit"],
    helps: "Repair, replacement, and new installation for both tank and tankless water heaters. We'll help you choose the right option for your home.",
    why: "A failing water heater can flood your home or leave you without hot water. Proactive service saves time, money, and discomfort.",
  },
  {
    icon: ShowerHead,
    title: "Fixture Installation",
    who: "Homeowners upgrading bathrooms or kitchens, or replacing old fixtures.",
    signs: ["Dripping or worn-out faucets", "Outdated fixtures during a renovation", "New appliance that needs plumbing hookup", "Leaking toilet base"],
    helps: "Professional installation of faucets, toilets, sinks, garbage disposals, and more. We make sure everything is connected correctly and leak-free.",
    why: "Improperly installed fixtures can cause leaks, water damage, and warranty issues. Professional installation protects your investment.",
  },
  {
    icon: Home,
    title: "General Residential Plumbing",
    who: "Homeowners who need reliable plumbing support for any residential issue.",
    signs: ["Running toilets", "Low water pressure", "Pipe corrosion or aging plumbing", "Remodel or addition plumbing needs"],
    helps: "From minor repairs to whole-home re-pipes, RapidRoot handles all aspects of residential plumbing with care and expertise.",
    why: "Regular maintenance and timely repairs keep your plumbing system healthy and prevent expensive emergency situations.",
  },
];

const ServicesPage = () => (
  <>
    <Navbar />
    <main>
      <section className="bg-primary py-16 md:py-24">
        <div className="container animate-fade-up">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">Our Services</p>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-primary-foreground md:text-5xl">Residential Plumbing Services</h1>
          <p className="max-w-2xl text-lg text-primary-foreground/70">Professional plumbing service for Phoenix Metro homeowners — from fast emergency repairs to planned installations and upgrades.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container space-y-20">
          {services.map((s, i) => (
            <div key={s.title} id={s.title.toLowerCase().replace(/\s+/g, '-')} className="grid gap-8 lg:grid-cols-5 animate-fade-up" style={{ animationDelay: `${i * 0.05}s` }}>
              <div className="lg:col-span-3">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10">
                  <s.icon className="h-5 w-5 text-accent" />
                </div>
                <h2 className="mb-3 text-2xl font-extrabold tracking-tight">{s.title}</h2>
                <p className="mb-3 text-sm font-medium text-muted-foreground"><span className="font-semibold text-foreground">Who it's for:</span> {s.who}</p>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{s.helps}</p>
                <p className="mb-6 text-sm leading-relaxed text-muted-foreground"><span className="font-semibold text-foreground">Why acting early matters:</span> {s.why}</p>
                <Link to="/contact">
                  <Button size="default" className="gap-2">
                    Request This Service <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <div className="lg:col-span-2">
                <div className="rounded-xl border bg-card p-6">
                  <h3 className="mb-3 text-sm font-bold">Common Signs You Need This Service</h3>
                  <ul className="space-y-2">
                    {s.signs.map((sign) => (
                      <li key={sign} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {sign}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <FinalCTA />
    </main>
    <Footer />
  </>
);

export default ServicesPage;
