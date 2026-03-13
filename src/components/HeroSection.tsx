import heroImage from "@/assets/maria-hero.png";
import couple1 from "@/assets/couple-1.jpg";
import couple2 from "@/assets/couple-2.jpg";
import couple3 from "@/assets/couple-3.jpg";
import couple4 from "@/assets/couple-4.jpg";
import { Star } from "lucide-react";

const avatars = [couple1, couple2, couple3, couple4];

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
              Partolking går lenger enn tradisjonell parterapi. Vi gir dere konkrete verktøy, handlingsrettede tiltak og en tydelig vei tilbake til nærhet, trygghet og kjærlighet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#kontakt"
                className="bg-accent text-accent-foreground px-7 py-3.5 rounded-lg text-base font-semibold hover:opacity-90 transition-opacity text-center"
              >
                Book gratis 15-min samtale
              </a>
              <a
                href="#hjertestarter"
                className="border-2 border-primary text-primary px-7 py-3.5 rounded-lg text-base font-semibold hover:bg-primary hover:text-primary-foreground transition-colors text-center"
              >
                Les om Hjertestarter
              </a>
            </div>
            <p className="text-xs text-muted-foreground">Uforpliktende · Svar innen 24 timer · Ingen venteliste</p>

            {/* Trust bar */}
            <div className="flex items-center gap-4 pt-6">
              <div className="flex -space-x-3">
                {avatars.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt="Fornøyd par"
                    className="w-10 h-10 rounded-full border-2 border-background object-cover"
                    loading="eager"
                  />
                ))}
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <span className="text-sm font-bold text-foreground">5.0</span>
                </div>
                <span className="text-sm text-muted-foreground">
                  Anbefalt av <span className="font-semibold text-foreground">3000+</span> fornøyde par
                </span>
              </div>
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
                loading="eager"
                fetchPriority="high"
                decoding="async"
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
