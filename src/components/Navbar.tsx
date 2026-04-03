import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "About", to: "/about" },
  { label: "Service Areas", to: "/service-areas" },
  { label: "Water Heaters", to: "/water-heaters" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/95 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between md:h-20">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <span className="text-lg font-extrabold text-primary-foreground">R</span>
          </div>
          <span className="text-lg font-extrabold tracking-tight text-foreground">
            RapidRoot<span className="hidden sm:inline"> Plumbing</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted ${
                location.pathname === link.to
                  ? "text-foreground"
                  : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href="tel:+16025551234" className="hidden items-center gap-1.5 text-sm font-semibold text-foreground sm:flex">
            <Phone className="h-4 w-4" />
            (602) 555-1234
          </a>
          <Link to="/contact">
            <Button size="default" className="hidden md:inline-flex">Request Service</Button>
          </Link>
          <a href="tel:+16025551234" className="sm:hidden">
            <Button size="icon" variant="ghost">
              <Phone className="h-5 w-5" />
            </Button>
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t bg-background px-4 pb-4 pt-2 lg:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className="block rounded-md px-3 py-2.5 text-sm font-medium text-foreground hover:bg-muted"
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-3 flex flex-col gap-2">
            <a href="tel:+16025551234">
              <Button variant="outline" className="w-full gap-2">
                <Phone className="h-4 w-4" /> Call (602) 555-1234
              </Button>
            </a>
            <Link to="/contact" onClick={() => setOpen(false)}>
              <Button className="w-full">Request Service</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
