import { useState, useEffect, useCallback } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    headline: "Reiste hjem med en relasjon sterkere enn på mange år",
    body: `Vi ankom Kristiansand med lave forventninger og dårlige odds for at vi skulle klare å komme oss ut av denne krisen. Men 1,5 døgn senere reiste vi hjemover igjen med en relasjon som ikke har vært så sterk på mange år og som fortsetter å holde seg slik.\n\nVi kan ikke få takket Maria nok for den hjelpen vi har fått for å gjenoppbygge ekteskapet vårt, og anser dette som vårt livs viktigste og beste investering.\n\nDe siste dagene er de beste vi har hatt sammen på 15 år.`,
    names: "Grete og Bjørnar",
  },
  {
    headline: "Vi har aldri hatt det bedre",
    body: `Da det smalt like etter jul det året måtte vi gjøre noe. Uten hjelp ville ekteskapet mest sannsynligvis ryke løpet av vårt 10. år som gifte. Mannen tok en telefon til Maria Mork og vi booket en samtale.\n\nJeg var vel den skeptiske av oss. For meg er terskelen veldig høy for å søke hjelp. Jeg var redd for at Maria skulle ta parti med en av oss — det opplevde vi aldri! Hun lyttet, veiledet og hjalp oss med å forstå hverandre og de følelsene vi sitter med.\n\nAt vi valgte 12 måneder med oppfølging fra Maria har vi aldri angret på et sekund. Den hjelpen Maria har gitt oss er helt uvurderlig.\n\nVi har lært hvordan vi skal kommunisere, unngå misforståelser og vi har lært hvorfor vi reagerer som vi gjør. Hun har gitt oss verktøy for å håndtere vanskelige situasjoner. Vi finner mye fortere tilbake til hverandre.\n\nProsessen har gitt oss tid til å lege, og åpne opp for å være tilgjengelig for alle de positive mulighetene som kommer vår vei i livet. Nå har vi et trygt grunnlag som gjør at vi tør å satse mer på mange områder i livet.\n\n10 års bryllupsdag er feiret og vi kan med hånden på hjertet fortelle at vi aldri har hatt det bedre.`,
    names: "Sanne og Tom",
  },
  {
    headline: "Jeg hadde virkelig ingen tro på løsning",
    body: `Det å få hjelp fra Partolken har betydd at jeg har gått fra å tenke at det bare er et spørsmål om tid før forholdet vårt ryker, til at vi kan ha det godt sammen hele livet. Det hadde jeg virkelig ingen tro på før vi startet opp.\n\nNå har vi det bedre enn vi har hatt på svært mange år. Takk til Partolken som har guidet oss inn i et nytt spor. Vi kommuniserer på en måte som jeg knapt kan huske at vi har gjort.`,
    names: "Elin og Thomas",
  },
  {
    headline: "Dette er langt på vei et mirakel",
    body: `Vi var som et par under vann uten oksygen. Det virket håpløst. Vi hev etter luft. Første møte med Partolken var som å få tildelt hver vår dykkerflaske med oksygen i siste liten. Vi var på randen ved å gi opp. Nå har vi startet vår reise sammen på nytt.\n\nUten helt å se det komme, selv om jeg ba mine bønner og håpte at det gikk bra, så er vi inne i en bedre periode enn på flere år. Dette er langt på vei et mirakel.`,
    names: "Bjørn",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0); // -1 left, 1 right
  const [isAnimating, setIsAnimating] = useState(false);

  const goTo = useCallback(
    (index: number, dir: number) => {
      if (isAnimating) return;
      setDirection(dir);
      setIsAnimating(true);
      setTimeout(() => {
        setCurrent(index);
        setIsAnimating(false);
      }, 300);
    },
    [isAnimating]
  );

  const prev = () =>
    goTo((current - 1 + testimonials.length) % testimonials.length, -1);
  const next = () => goTo((current + 1) % testimonials.length, 1);

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(() => {
      goTo((current + 1) % testimonials.length, 1);
    }, 8000);
    return () => clearInterval(timer);
  }, [current, goTo]);

  const t = testimonials[current];

  return (
    <section className="py-20 md:py-32 bg-primary/[0.03] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-accent/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />

      <div className="container relative z-10 space-y-12">
        <div className="text-center space-y-3">
          <p className="text-accent font-semibold text-sm tracking-widest uppercase">
            Referanser
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Dette sier par som har fått hjelp
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Card */}
          <div className="relative">
            <div
              className={`transition-all duration-300 ease-out ${
                isAnimating
                  ? direction > 0
                    ? "opacity-0 translate-x-8"
                    : "opacity-0 -translate-x-8"
                  : "opacity-100 translate-x-0"
              }`}
            >
              <div className="bg-card rounded-3xl p-8 md:p-14 shadow-lg border border-border/60 relative">
                {/* Large decorative quote */}
                <Quote className="absolute top-6 right-8 w-16 h-16 text-primary/[0.06]" />

                <div className="space-y-6">
                  <h3 className="text-xl md:text-2xl font-bold text-primary leading-snug pr-12">
                    «{t.headline}»
                  </h3>

                  <div className="w-12 h-0.5 bg-accent/60 rounded-full" />

                  <div className="text-foreground/75 leading-relaxed whitespace-pre-line text-[0.95rem] md:text-base max-h-[340px] overflow-y-auto pr-2 scrollbar-thin">
                    {t.body}
                  </div>

                  <div className="flex items-center gap-3 pt-4 border-t border-border/60">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-bold text-sm">
                        {t.names.charAt(0)}
                      </span>
                    </div>
                    <span className="text-muted-foreground font-semibold text-sm">
                      {t.names}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation arrows */}
            <button
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 md:-translate-x-14 w-10 h-10 md:w-12 md:h-12 rounded-full bg-card border border-border shadow-md flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Forrige referanse"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 md:translate-x-14 w-10 h-10 md:w-12 md:h-12 rounded-full bg-card border border-border shadow-md flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Neste referanse"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2.5 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i, i > current ? 1 : -1)}
                className={`rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-8 h-2.5 bg-accent"
                    : "w-2.5 h-2.5 bg-border hover:bg-muted-foreground/40"
                }`}
                aria-label={`Gå til referanse ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="text-center pt-2">
          <a
            href="#kontakt"
            className="inline-block bg-accent text-accent-foreground px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-opacity shadow-md"
          >
            Book gratis 15-min samtale →
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
