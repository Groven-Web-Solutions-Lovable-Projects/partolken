import { CheckCircle } from "lucide-react";
import samtaleImg from "@/assets/samtale.jpg";

const points = [
  "Innsikt i dynamikken mellom dere",
  "Analyse og kartlegging",
  "Tydeligere forståelse av utfordringene",
  "Konkrete råd om neste steg",
];

const StartpakkeSection = () => {
  return (
    <section id="vi-tilbyr" className="py-16 md:py-24 bg-card">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img src={samtaleImg} alt="Partolking samtale" className="w-full h-[350px] object-cover" />
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-primary">
              Start et nytt spor med partolking
            </h2>
            <p className="text-foreground leading-relaxed">
              Startpakken er for dere som ønsker å forstå forholdet deres bedre og få hjelp til hva dere faktisk trenger videre.
            </p>
            <ul className="space-y-3">
              {points.map((p, i) => (
                <li key={i} className="flex items-start gap-3 text-foreground">
                  <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <a
              href="#kontakt"
              className="inline-block border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Les mer om startpakken
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartpakkeSection;
