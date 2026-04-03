import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";
import { Shield, Heart, Sparkles, Clock, Users, Wrench } from "lucide-react";

const values = [
  { icon: Clock, title: "Fast, Reliable Response", desc: "When you need help, we show up — on time, prepared, and ready to work." },
  { icon: Heart, title: "Homeowner-First Communication", desc: "We explain the problem in plain language, walk through your options, and let you decide." },
  { icon: Sparkles, title: "Clean, Careful Work", desc: "Your home deserves care. We protect your floors, clean up after ourselves, and treat your space with respect." },
  { icon: Shield, title: "Honest Recommendations", desc: "We won't push unnecessary repairs. If it doesn't need fixing, we'll tell you." },
  { icon: Wrench, title: "Quality That Lasts", desc: "We use quality materials and proven methods so repairs hold up over time." },
  { icon: Users, title: "Local Team, Local Accountability", desc: "We serve the Phoenix Metro area. Our reputation matters here — and we earn it every day." },
];

const AboutPage = () => (
  <>
    <Navbar />
    <main>
      <section className="bg-primary py-16 md:py-24">
        <div className="container animate-fade-up">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">About Us</p>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-primary-foreground md:text-5xl">Built Around Better Plumbing Service</h1>
          <p className="max-w-2xl text-lg text-primary-foreground/70">RapidRoot Plumbing Co. was created to deliver the kind of plumbing experience homeowners actually want — fast, honest, clean, and reliable.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="mx-auto max-w-3xl space-y-6 text-muted-foreground leading-relaxed animate-fade-up">
            <p>
              RapidRoot started with a straightforward idea: homeowners deserve better from their plumber. Better communication, better scheduling, better workmanship, and better follow-through.
            </p>
            <p>
              Too many plumbing companies leave homeowners guessing — unclear arrival windows, vague diagnoses, unexpected costs, and work areas left messier than they started. We built RapidRoot to be different.
            </p>
            <p>
              Every decision we make — from how we schedule appointments to how we explain repair options to how we clean up after a job — is shaped by one question: <span className="font-semibold text-foreground">what would we want if a plumber came to our home?</span>
            </p>
            <p>
              We serve homeowners across the Phoenix Metro area with residential plumbing service that's fast when it needs to be, thorough when it matters, and honest every time.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding section-alt">
        <div className="container">
          <div className="mx-auto mb-14 max-w-2xl text-center animate-fade-up">
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight md:text-4xl">What Makes RapidRoot Different</h2>
            <p className="text-muted-foreground">It's not one big thing — it's getting all the small things right, every time.</p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <div key={v.title} className="animate-fade-up" style={{ animationDelay: `${i * 0.05}s` }}>
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                  <v.icon className="h-5 w-5 text-accent" />
                </div>
                <h3 className="mb-1.5 text-base font-bold">{v.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </main>
    <Footer />
  </>
);

export default AboutPage;
