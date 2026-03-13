import { ShieldCheck, Ear, Wrench, CalendarHeart } from "lucide-react";
import parsamtaleImg from "@/assets/parsamtale.jpg";

const benefits = [
  {
    icon: Ear,
    title: "Noen som virkelig lytter",
    description:
      "Vi lytter uten å dømme – og hjelper dere å høre hverandre på nytt.",
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
    <section id="hva-er-partolking" className="py-20 md:py-28 bg-card">
      <div className="container space-y-16">
        {/* Bridge headline */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-secondary/25 px-4 py-1.5 rounded-full text-sm font-semibold text-secondary-foreground">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            Det finnes en vei videre
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
            Dere trenger ikke ha det slik.
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Slik hjelper vi dere med å finne tilbake til hverandre.
          </p>
        </div>

        {/* Image + benefits grid */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Maria image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-secondary/30">
              <img
                src={parsamtaleImg}
                alt="Partolken i samtale med par"
                className="w-full h-[420px] object-cover"
              />
            </div>
            {/* Green accent float */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-secondary/20 rounded-full blur-2xl" />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-secondary/15 rounded-full blur-xl" />
          </div>

          {/* Benefits */}
          <div className="space-y-5">
            {benefits.map((b, i) => (
              <div
                key={i}
                className="group flex gap-5 p-5 rounded-2xl hover:bg-secondary/[0.08] transition-colors duration-200"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/25 flex items-center justify-center shrink-0 group-hover:bg-secondary/40 transition-colors">
                  <b.icon className="w-6 h-6 text-secondary-foreground" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">{b.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {b.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
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
