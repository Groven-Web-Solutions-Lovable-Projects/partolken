import { ShieldCheck, Ear, Wrench, CalendarHeart } from "lucide-react";

const benefits = [
  {
    icon: Ear,
    title: "Noen som virkelig lytter",
    description:
      "Maria lytter uten å dømme – og hjelper dere å høre hverandre på nytt.",
  },
  {
    icon: ShieldCheck,
    title: "Et trygt rom for ærlighet",
    description:
      "Dere får et nøytralt, trygt sted der begge kan si det de egentlig tenker og føler.",
  },
  {
    icon: Wrench,
    title: "Verktøy som faktisk fungerer",
    description:
      "Konkrete teknikker for kommunikasjon, konflikt og nærhet – som dere kan bruke med en gang.",
  },
  {
    icon: CalendarHeart,
    title: "Oppfølging over tid",
    description:
      "Ikke bare én samtale, men en plan og støtte som varer – slik at endringene setter seg.",
  },
];

const WhatIsSection = () => {
  return (
    <section id="hva-er-partolking" className="py-20 md:py-28">
      <div className="container space-y-14">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <p className="text-accent font-semibold text-sm tracking-widest uppercase">
            Løsningen
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Dette får dere hos Partolken
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Partolken gir dere det dere trenger for å forstå hverandre igjen – og bygge et forhold som varer.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="group bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-lg hover:border-accent/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                <b.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {b.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {b.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center space-y-3">
          <a
            href="#kontakt"
            className="inline-block bg-accent text-accent-foreground px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-opacity shadow-md"
          >
            Book gratis 15-min samtale →
          </a>
          <p className="text-muted-foreground text-sm">
            Uforpliktende · Ingen venteliste
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatIsSection;
