import logo from "@/assets/partolken-logo.png";

const Footer = () => {
  return (
    <footer className="py-10 border-t border-border bg-card">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <img src={logo} alt="Partolken" className="h-7" />
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Partolken. Alle rettigheter reservert.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
