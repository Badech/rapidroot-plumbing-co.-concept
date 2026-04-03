import { MessageSquare, Home, Sparkles, Wrench, CheckCircle } from "lucide-react";

const values = [
  { icon: MessageSquare, title: "Clear Communication", desc: "You'll always know what's happening, what it costs, and what to expect — before, during, and after the job." },
  { icon: Home, title: "Respectful Service", desc: "We treat your home with care. Shoe covers, clean work areas, and a team that shows up on time." },
  { icon: Sparkles, title: "Clean Workmanship", desc: "Quality repairs that last, done neatly and professionally. We take pride in work you can trust." },
  { icon: Wrench, title: "Practical Solutions", desc: "We recommend what makes sense — not the most expensive option. Honest advice you can rely on." },
  { icon: CheckCircle, title: "Reliable Follow-Through", desc: "When we say we'll do something, we do it. Dependable service from the first call to the final check." },
];

const TrustValues = () => (
  <section className="section-padding section-alt">
    <div className="container">
      <div className="mx-auto mb-14 max-w-2xl text-center animate-fade-up">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">Our Values</p>
        <h2 className="mb-4 text-3xl font-extrabold tracking-tight md:text-4xl">What Homeowners Value Most</h2>
        <p className="text-muted-foreground">These are the standards we hold ourselves to on every single job.</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {values.map((v, i) => (
          <div key={v.title} className="rounded-xl border bg-card p-6 shadow-sm animate-fade-up" style={{ animationDelay: `${i * 0.05}s` }}>
            <v.icon className="mb-3 h-5 w-5 text-accent" />
            <h3 className="mb-1.5 font-bold">{v.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustValues;
