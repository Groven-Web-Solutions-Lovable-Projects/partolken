import { useState } from "react";
import logo from "@/assets/partolken-logo.png";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#vi-tilbyr", label: "Vi tilbyr" },
  { href: "#hva-er-partolking", label: "Mer enn parterapi" },
  { href: "#hjertestarter", label: "Hjertestarter" },
  { href: "#om-oss", label: "Om oss" },
  { href: "#kontakt", label: "Kontakt" },
  { href: "#faq", label: "FAQ" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a href="#" className="flex items-center">
          <img src={logo} alt="Partolken" className="h-8 md:h-10" />
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-foreground">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <a
            href="#kontakt"
            className="hidden sm:inline-flex bg-accent text-accent-foreground px-5 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Bestill gratis starthjelp
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-foreground"
            aria-label="Meny"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-card/95 backdrop-blur-md">
          <div className="container py-4 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-foreground font-medium hover:text-primary transition-colors py-1"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#kontakt"
              onClick={() => setOpen(false)}
              className="bg-accent text-accent-foreground px-5 py-2.5 rounded-lg text-sm font-semibold text-center hover:opacity-90 transition-opacity"
            >
              Bestill gratis starthjelp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
