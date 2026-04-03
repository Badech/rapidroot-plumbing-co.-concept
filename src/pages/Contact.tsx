import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactPage = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast({
        title: "Request received",
        description: "This is a portfolio demo — no actual request was sent.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <>
      <Navbar />
      <main>
        <section className="bg-primary py-16 md:py-24">
          <div className="container animate-fade-up">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">Contact Us</p>
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-primary-foreground md:text-5xl">Get in Touch</h1>
            <p className="max-w-2xl text-lg text-primary-foreground/70">Need plumbing help? Fill out the form below or give us a call. We respond quickly — especially for emergencies.</p>
          </div>
        </section>

        <section className="section-padding">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-5">
              <div className="lg:col-span-3 animate-fade-up">
                <h2 className="mb-6 text-2xl font-extrabold tracking-tight">Request Service</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-sm font-medium">Name</label>
                      <Input placeholder="Your full name" required maxLength={100} />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium">Email</label>
                      <Input type="email" placeholder="you@email.com" required maxLength={255} />
                    </div>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-sm font-medium">Phone</label>
                      <Input type="tel" placeholder="(602) 555-1234" required maxLength={20} />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium">Address or ZIP Code</label>
                      <Input placeholder="Your address or ZIP" required maxLength={200} />
                    </div>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium">Plumbing Issue</label>
                    <Input placeholder="e.g., leaking pipe, no hot water, clogged drain" required maxLength={200} />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium">Additional Details</label>
                    <Textarea placeholder="Any additional information that would help us prepare..." rows={4} maxLength={1000} />
                  </div>
                  <Button type="submit" size="lg" disabled={submitting} className="w-full sm:w-auto">
                    {submitting ? "Sending…" : "Submit Service Request"}
                  </Button>
                </form>
              </div>

              <div className="lg:col-span-2 animate-fade-up-delay-1">
                <h2 className="mb-6 text-2xl font-extrabold tracking-tight">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <Phone className="mt-0.5 h-5 w-5 text-accent" />
                    <div>
                      <p className="text-sm font-semibold">Phone</p>
                      <a href="tel:+16025551234" className="text-sm text-muted-foreground hover:text-foreground transition-colors">(602) 555-1234</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="mt-0.5 h-5 w-5 text-accent" />
                    <div>
                      <p className="text-sm font-semibold">Email</p>
                      <p className="text-sm text-muted-foreground">hello@rapidroot.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 text-accent" />
                    <div>
                      <p className="text-sm font-semibold">Service Area</p>
                      <p className="text-sm text-muted-foreground">Phoenix Metro Area, Arizona</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="mt-0.5 h-5 w-5 text-accent" />
                    <div>
                      <p className="text-sm font-semibold">Business Hours</p>
                      <p className="text-sm text-muted-foreground">Mon–Fri: 7:00 AM – 6:00 PM</p>
                      <p className="text-sm text-muted-foreground">Sat: 8:00 AM – 2:00 PM</p>
                      <p className="text-sm text-muted-foreground">Emergency service available 24/7</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 rounded-xl border bg-section-alt p-6">
                  <p className="text-xs text-muted-foreground">
                    <span className="font-semibold text-foreground">Portfolio Note:</span> This is a concept website. No real service requests are processed. Phone numbers and email addresses are placeholders.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;
