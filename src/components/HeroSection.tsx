import heroImage from "@/assets/parsamtale.jpg";
import { Star, Users } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-center">
          <div className="space-y-5 md:space-y-6 animate-fade-in-up">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-primary tracking-tight">
              Når forholdet har låst seg, finnes det en vei tilbake.
            </h1>
            <p className="text-lg text-foreground leading-relaxed max-w-lg">
              Partolken hjelper par med å forstå hverandre bedre, bryte fastlåste mønstre og finne tilbake til nærhet, trygghet og kjærlighet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#kontakt"
                className="bg-accent text-accent-foreground px-7 py-3.5 rounded-lg text-base font-semibold hover:opacity-90 transition-opacity text-center"
              >
                Bestill gratis starthjelp
              </a>
              <a
                href="#hjertestarter"
                className="border-2 border-primary text-primary px-7 py-3.5 rounded-lg text-base font-semibold hover:bg-primary hover:text-primary-foreground transition-colors text-center"
              >
                Les om Hjertestarter
              </a>
            </div>

            {/* Trust bar */}
            <div className="flex items-center gap-3 pt-2">
              <div className="flex -space-x-2">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-secondary/60 border-2 border-background flex items-center justify-center"
                  >
                    <Users className="w-4 h-4 text-primary/70" />
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">Anbefalt av par over hele Norge</span>
            </div>

            {/* Skimmable quotes */}
            <p className="text-xs text-muted-foreground/70 italic pt-0">
              «Vi har aldri hatt det bedre» · «Et mirakel for forholdet vårt» · «Forandring etter 2 uker»
            </p>
          </div>
          <div className="relative animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Trygg samtalesituasjon med par"
                className="w-full h-[350px] md:h-[480px] object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-secondary rounded-full opacity-40 -z-10" />
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent rounded-full opacity-20 -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
