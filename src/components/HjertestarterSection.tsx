import { CheckCircle } from "lucide-react";
import bokImg from "@/assets/maria-bok.jpg";

const points = [
  "Lav terskel for å komme i gang",
  "Passer både for par og enkeltpersoner",
  "En praktisk inngang til Partolkens metode",
];

const HjertestarterSection = () => {
  return (
    <section id="hjertestarter" className="py-16 md:py-24">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div className="space-y-6 order-2 md:order-1">
            <h2 className="text-2xl md:text-3xl font-bold text-primary">
              Ikke klare for samtaler ennå? Start med Hjertestarter
            </h2>
            <p className="text-foreground leading-relaxed">
              Hjertestarter er en håndbok for deg som ønsker å forstå kjærligheten bedre, styrke forholdet og få konkrete perspektiver og verktøy du kan ta i bruk med en gang.
            </p>
            <ul className="space-y-3">
              {points.map((p, i) => (
                <li key={i} className="flex items-start gap-3 text-foreground">
                  <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#kontakt"
                className="bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity text-center"
              >
                Bestill boken
              </a>
              <a
                href="#"
                className="border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-colors text-center"
              >
                Les mer om Hjertestarter
              </a>
            </div>
          </div>
          <div className="order-1 md:order-2 rounded-2xl overflow-hidden shadow-lg">
            <img src={bokImg} alt="Maria Mork med boken Hjertestarter" className="w-full h-[420px] object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HjertestarterSection;
