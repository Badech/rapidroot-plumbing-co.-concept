import { Clock, Home, Sparkles, MessageSquare, Wrench, ThumbsUp } from "lucide-react";

const reasons = [
  { icon: Clock, title: "Fast Scheduling, Clear Communication", desc: "We confirm arrival windows and keep you updated. No waiting around wondering when help will show up." },
  { icon: Home, title: "Respectful In-Home Service", desc: "Shoe covers, drop cloths, and care for your home. We treat your space the way we'd treat our own." },
  { icon: Sparkles, title: "Clean Work Areas", desc: "When we leave, your home looks the same as when we arrived — minus the plumbing problem." },
  { icon: MessageSquare, title: "Honest Diagnosis", desc: "We explain what's happening, what your options are, and what we'd recommend — without pressure." },
  { icon: Wrench, title: "Practical Recommendations", desc: "We focus on solutions that make sense for your home and budget, not the most expensive option." },
  { icon: ThumbsUp, title: "Dependable Solutions", desc: "Repairs done right the first time so the same problem doesn't keep coming back." },
];

const WhyChoose = () => (
  <section className="section-padding section-alt">
    <div className="container">
      <div className="mx-auto mb-14 max-w-2xl text-center animate-fade-up">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">Why RapidRoot</p>
        <h2 className="mb-4 text-3xl font-extrabold tracking-tight md:text-4xl">Why Homeowners Choose RapidRoot</h2>
        <p className="text-muted-foreground">We built our service around the things homeowners actually care about — speed, honesty, cleanliness, and reliability.</p>
      </div>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {reasons.map((r, i) => (
          <div key={r.title} className="animate-fade-up" style={{ animationDelay: `${i * 0.05}s` }}>
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
              <r.icon className="h-5 w-5 text-accent" />
            </div>
            <h3 className="mb-1.5 text-base font-bold">{r.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{r.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChoose;
