import { XCircle, Heart, ArrowRight } from "lucide-react";

const before = [
  "Misforståelser og konflikter",
  "Avstand og stillhet",
  "Tvil og håpløshet",
  "Vet ikke hvor dere skal begynne",
];

const after = [
  "Dere forstår hverandre igjen",
  "Nærhet og trygghet i hverdagen",
  "Tro på fremtiden sammen",
  "Konkrete verktøy som fungerer",
];

const WhatIsSection = () => {
  return (
    <section id="hva-er-partolking" className="py-20 md:py-28 relative overflow-hidden">
      {/* Gradient background transition from problem → solution */}
      <div className="absolute inset-0 bg-gradient-to-b from-card via-background to-background" />

      <div className="container relative z-10">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <p className="text-accent font-semibold text-sm tracking-widest uppercase">
            Fra krise til nærhet
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Partolken hjelper dere videre
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Dere trenger ikke ha det slik. Med riktig hjelp kan forholdet bli sterkere enn det noen gang har vært.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-0 items-stretch">
            {/* Before */}
            <div className="bg-card rounded-2xl md:rounded-r-none border border-border p-8 md:p-10 space-y-5">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center">
                  <XCircle className="w-5 h-5 text-destructive" />
                </div>
                <h3 className="font-bold text-foreground text-lg">Før</h3>
              </div>
              <ul className="space-y-4">
                {before.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-destructive/50 mt-2 shrink-0" />
                    <span className="text-foreground/60 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Arrow divider */}
            <div className="hidden md:flex items-center justify-center relative z-10">
              <div className="w-14 h-14 rounded-full bg-accent shadow-lg flex items-center justify-center -mx-7">
                <ArrowRight className="w-6 h-6 text-accent-foreground" />
              </div>
            </div>
            <div className="flex md:hidden items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-accent shadow-lg flex items-center justify-center rotate-90">
                <ArrowRight className="w-5 h-5 text-accent-foreground" />
              </div>
            </div>

            {/* After */}
            <div className="bg-primary/[0.04] rounded-2xl md:rounded-l-none border border-primary/15 p-8 md:p-10 space-y-5">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center">
                  <Heart className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-bold text-primary text-lg">Etter</h3>
              </div>
              <ul className="space-y-4">
                {after.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    <span className="text-foreground font-medium leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12 space-y-3">
            <a
              href="#kontakt"
              className="inline-block bg-accent text-accent-foreground px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-opacity shadow-md"
            >
              Ta første steg – book en gratis samtale →
            </a>
            <p className="text-muted-foreground text-sm">
              Uforpliktende · 15 minutter · Ingen venteliste
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsSection;
