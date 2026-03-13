import { Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const testimonials = [
  {
    headline: "Reiste hjem med en relasjon sterkere enn på mange år",
    body: `Vi ankom Kristiansand med lave forventninger og dårlige odds for at vi skulle klare å komme oss ut av denne krisen. Men 1,5 døgn senere reiste vi hjemover igjen med en relasjon som ikke har vært så sterk på mange år og som fortsetter å holde seg slik.\n\nVi kan ikke få takket Maria nok for den hjelpen vi har fått for å gjenoppbygge ekteskapet vårt, og anser dette som vårt livs viktigste og beste investering.\n\nDe siste dagene er de beste vi har hatt sammen på 15 år.`,
    names: "Grete og Bjørnar",
  },
  {
    headline: "Vi har aldri hatt det bedre",
    body: `Da det smalt like etter jul det året måtte vi gjøre noe. Uten hjelp ville ekteskapet mest sannsynligvis ryke løpet av vårt 10. år som gifte. Mannen tok en telefon til Maria Mork og vi booket en samtale.\n\nJeg var vel den skeptiske av oss. For meg er terskelen veldig høy for å søke hjelp. Jeg var redd for at Maria skulle ta parti med en av oss — det opplevde vi aldri! Hun lyttet, veiledet og hjalp oss med å forstå hverandre og de følelsene vi sitter med.\n\nAt vi valgte 12 måneder med oppfølging fra Maria har vi aldri angret på et sekund. Den hjelpen Maria har gitt oss er helt uvurderlig. Hun har ofte vært en observatør til våre konflikter, krangler, tårer og også når vi finner tilbake til hverandre.\n\nVi har lært hvordan vi skal kommunisere, unngå misforståelser og vi har lært hvorfor vi reagerer som vi gjør. Hun har gitt oss verktøy for å håndtere vanskelige situasjoner. Vi finner mye fortere tilbake til hverandre.\n\nProsessen har gitt oss tid til å lege, og åpne opp for å være tilgjengelig for alle de positive mulighetene som kommer vår vei i livet. Nå har vi et trygt grunnlag som gjør at vi tør å satse mer på mange områder i livet.\n\n10 års bryllupsdag er feiret og vi kan med hånden på hjertet fortelle at vi aldri har hatt det bedre.`,
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
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container space-y-10">
        <h2 className="text-2xl md:text-3xl font-bold text-primary text-center">
          Dette sier par som har fått hjelp
        </h2>

        <div className="max-w-3xl mx-auto px-12">
          <Carousel opts={{ loop: true }}>
            <CarouselContent>
              {testimonials.map((t, i) => (
                <CarouselItem key={i}>
                  <div className="bg-background rounded-2xl p-8 md:p-12 border border-border shadow-sm space-y-6">
                    <Quote className="w-10 h-10 text-accent/40" />
                    <h3 className="text-xl md:text-2xl font-bold text-primary leading-snug">
                      «{t.headline}»
                    </h3>
                    <div className="text-foreground/80 leading-relaxed whitespace-pre-line text-sm md:text-base max-h-[360px] overflow-y-auto pr-2">
                      {t.body}
                    </div>
                    <p className="text-muted-foreground font-semibold text-sm pt-2 border-t border-border">
                      — {t.names}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        <div className="text-center">
          <a
            href="#kontakt"
            className="inline-block bg-accent text-accent-foreground px-7 py-3.5 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Book gratis 15-min samtale →
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
