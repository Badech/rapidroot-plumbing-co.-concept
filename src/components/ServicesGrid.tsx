import { Link } from "react-router-dom";
import { Wrench, Droplets, Search, Flame, PipetteIcon, ShowerHead, ArrowRight } from "lucide-react";

const services = [
  { icon: Wrench, title: "Emergency Plumbing Repair", desc: "Burst pipes, sudden leaks, or backed-up drains — we respond fast when the problem can't wait." },
  { icon: Droplets, title: "Drain Cleaning", desc: "Slow or clogged drains cleared with professional tools. Kitchen, bathroom, floor drains, and main lines." },
  { icon: Search, title: "Leak Detection & Repair", desc: "Pinpoint hidden leaks before they cause serious damage. Non-invasive techniques, honest assessment." },
  { icon: Flame, title: "Water Heater Service", desc: "Repair, replacement, and installation for tank and tankless water heaters. Fast hot-water recovery." },
  { icon: PipetteIcon, title: "Sewer & Drain Lines", desc: "Camera inspection, cleaning, and repair for main sewer and drain lines. We find the real problem first." },
  { icon: ShowerHead, title: "Fixture Installation", desc: "Faucets, toilets, sinks, disposals, and more — installed correctly the first time." },
];

const ServicesGrid = () => (
  <section className="section-padding">
    <div className="container">
      <div className="mx-auto mb-14 max-w-2xl text-center animate-fade-up">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">Our Services</p>
        <h2 className="mb-4 text-3xl font-extrabold tracking-tight md:text-4xl">Plumbing Services Built Around What Homeowners Actually Need</h2>
        <p className="text-muted-foreground">From emergencies to planned upgrades, RapidRoot provides reliable residential plumbing service across the Phoenix Metro area.</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <div key={s.title} className={`group rounded-xl border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 animate-fade-up`} style={{ animationDelay: `${i * 0.05}s` }}>
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10">
              <s.icon className="h-5 w-5 text-accent" />
            </div>
            <h3 className="mb-2 text-lg font-bold">{s.title}</h3>
            <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            <Link to="/services" className="inline-flex items-center gap-1 text-sm font-semibold text-accent transition-colors hover:text-accent/80">
              Learn More <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesGrid;
