import logo from "@/assets/partolken-logo.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a href="#" className="flex items-center">
          <img src={logo} alt="Partolken" className="h-8 md:h-10" />
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-foreground">
          <a href="#hva-er-partolking" className="hover:text-primary transition-colors">Partolking</a>
          <a href="#hjertestarter" className="hover:text-primary transition-colors">Hjertestarter</a>
          <a href="#foredrag" className="hover:text-primary transition-colors">Foredrag</a>
          <a href="#om-maria" className="hover:text-primary transition-colors">Om Maria</a>
          <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
        </div>
        <a
          href="#kontakt"
          className="bg-accent text-accent-foreground px-5 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
        >
          Bestill gratis starthjelp
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
