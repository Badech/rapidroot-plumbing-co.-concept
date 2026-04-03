import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

const areas = ["Phoenix", "Scottsdale", "Tempe", "Mesa", "Chandler", "Glendale", "Gilbert"];

const ServiceAreaHome = () => (
  <section className="section-padding">
    <div className="container">
      <div className="mx-auto mb-14 max-w-2xl text-center animate-fade-up">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">Service Areas</p>
        <h2 className="mb-4 text-3xl font-extrabold tracking-tight md:text-4xl">Serving the Phoenix Metro Area</h2>
        <p className="text-muted-foreground">Local plumbing service with fast response times across the Valley. We know the area, and we're close by when you need us.</p>
      </div>
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {areas.map((area) => (
          <div key={area} className="flex items-center gap-1.5 rounded-full border bg-card px-4 py-2 text-sm font-medium shadow-sm">
            <MapPin className="h-3.5 w-3.5 text-accent" />
            {area}
          </div>
        ))}
      </div>
      <div className="text-center">
        <Link to="/service-areas">
          <Button variant="outline" size="lg">View All Service Areas</Button>
        </Link>
      </div>
    </div>
  </section>
);

export default ServiceAreaHome;
