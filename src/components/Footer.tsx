import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="border-t bg-primary text-primary-foreground">
    <div className="container section-padding">
      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="mb-4 flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-foreground/10">
              <span className="text-lg font-extrabold text-primary-foreground">R</span>
            </div>
            <span className="text-lg font-extrabold">RapidRoot Plumbing</span>
          </div>
          <p className="text-sm leading-relaxed text-primary-foreground/70">
            Residential plumbing service for Phoenix Metro homeowners. Fast response, honest recommendations, clean workmanship.
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-primary-foreground/50">Services</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li><Link to="/services" className="hover:text-primary-foreground transition-colors">Emergency Plumbing</Link></li>
            <li><Link to="/services" className="hover:text-primary-foreground transition-colors">Drain Cleaning</Link></li>
            <li><Link to="/services" className="hover:text-primary-foreground transition-colors">Leak Detection</Link></li>
            <li><Link to="/water-heaters" className="hover:text-primary-foreground transition-colors">Water Heaters</Link></li>
            <li><Link to="/services" className="hover:text-primary-foreground transition-colors">Fixture Installation</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-primary-foreground/50">Company</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li><Link to="/about" className="hover:text-primary-foreground transition-colors">About Us</Link></li>
            <li><Link to="/service-areas" className="hover:text-primary-foreground transition-colors">Service Areas</Link></li>
            <li><Link to="/contact" className="hover:text-primary-foreground transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-primary-foreground/50">Contact</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/70">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> (602) 555-1234</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> hello@rapidroot.com</li>
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0" /> Phoenix Metro Area, AZ</li>
          </ul>
        </div>
      </div>

      <div className="mt-16 border-t border-primary-foreground/10 pt-8 text-center text-xs text-primary-foreground/40">
        <p>© {new Date().getFullYear()} RapidRoot Plumbing Co. — Portfolio concept website. Not a real business.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
