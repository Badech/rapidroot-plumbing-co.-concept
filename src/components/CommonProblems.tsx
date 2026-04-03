import { AlertTriangle, Droplets, Thermometer, CircleDot, Gauge, PipetteIcon, Wrench, Bath } from "lucide-react";

const problems = [
  { icon: AlertTriangle, title: "Burst or Leaking Pipes", desc: "Water damage adds up fast. If you see a leak, don't wait — we can help contain and repair it." },
  { icon: Droplets, title: "Clogged Drains", desc: "Slow drains and full backups are more than an inconvenience. Professional clearing restores flow safely." },
  { icon: Thermometer, title: "No Hot Water", desc: "Cold showers aren't fun. We diagnose water heater issues and get your hot water back quickly." },
  { icon: CircleDot, title: "Running Toilets", desc: "A running toilet wastes water constantly. Usually a straightforward fix — worth doing sooner than later." },
  { icon: Gauge, title: "Low Water Pressure", desc: "Could be a valve issue, a leak, or a supply problem. We'll find out and explain your options." },
  { icon: PipetteIcon, title: "Sewer Line Concerns", desc: "Unusual odors, slow drains throughout the house, or wet spots in the yard — we'll inspect and advise." },
  { icon: Wrench, title: "Dripping Fixtures", desc: "That constant drip costs money over time. A quick repair can save more than you'd expect." },
  { icon: Bath, title: "Kitchen & Bathroom Plumbing", desc: "Disposals, supply lines, fixture upgrades — everything your kitchen and bathrooms need to work reliably." },
];

const CommonProblems = () => (
  <section className="section-padding">
    <div className="container">
      <div className="mx-auto mb-14 max-w-2xl text-center animate-fade-up">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">Common Problems</p>
        <h2 className="mb-4 text-3xl font-extrabold tracking-tight md:text-4xl">Common Problems We Help Solve</h2>
        <p className="text-muted-foreground">Most plumbing issues are easier to fix when caught early. Here's what homeowners call us about most often.</p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {problems.map((p, i) => (
          <div key={p.title} className="rounded-xl border bg-card p-5 transition-all duration-300 hover:shadow-md animate-fade-up" style={{ animationDelay: `${i * 0.04}s` }}>
            <p.icon className="mb-3 h-5 w-5 text-accent" />
            <h3 className="mb-1 text-sm font-bold">{p.title}</h3>
            <p className="text-xs leading-relaxed text-muted-foreground">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CommonProblems;
