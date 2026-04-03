import { Shield, Zap, Clock, Heart, Sparkles, Home } from "lucide-react";

const items = [
  { icon: Shield, label: "Licensed & Insured" },
  { icon: Zap, label: "Fast Response" },
  { icon: Clock, label: "Emergency Service Available" },
  { icon: Heart, label: "Honest Recommendations" },
  { icon: Sparkles, label: "Clean Workmanship" },
  { icon: Home, label: "Residential Experts" },
];

const TrustStrip = () => (
  <section className="border-b border-t bg-card py-6">
    <div className="container">
      <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
        {items.map((item) => (
          <div key={item.label} className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
            <item.icon className="h-4 w-4 text-accent" />
            {item.label}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustStrip;
