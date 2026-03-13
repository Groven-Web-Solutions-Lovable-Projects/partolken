import { HelpCircle, MessageCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Hva er forskjellen på partolking og parterapi?",
    a: "Partolking er en praktisk og handlingsrettet metode som fokuserer på å gi dere konkrete verktøy og forståelse for dynamikken i forholdet. Det handler om å skape endring i hverdagen, ikke bare innsikt.",
  },
  {
    q: "Hvem passer partolking for?",
    a: "Partolking passer for alle par som ønsker å forstå hverandre bedre – enten dere er i krise, føler dere fastlåst, eller bare vil styrke forholdet.",
  },
  {
    q: "Kan vi få hjelp selv om forholdet føles fastlåst?",
    a: "Ja, absolutt. Mange par som kommer til Partolken opplever nettopp at forholdet kjennes fastlåst. Det er et godt utgangspunkt for å begynne å forstå hva som faktisk skjer mellom dere.",
  },
  {
    q: "Må begge være motiverte for å starte?",
    a: "Det er en fordel om begge er åpne for prosessen, men det er ikke uvanlig at den ene er mer motivert enn den andre. Det viktigste er at dere er villige til å prøve.",
  },
  {
    q: "Hvordan foregår gratis starthjelp?",
    a: "Gratis starthjelp er en uforpliktende samtale der dere får mulighet til å fortelle om situasjonen deres, og vi ser på hva som kan være et godt neste steg for dere.",
  },
  {
    q: "Kan vi starte med Hjertestarter først?",
    a: "Ja! Hjertestarter er en bok som gir en god inngang til Partolkens metode. Den passer for deg som ønsker å komme i gang på egenhånd først.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-56 h-56 bg-accent/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

      <div className="container max-w-3xl relative space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-secondary/15 px-4 py-1.5 rounded-full text-sm font-semibold text-secondary-foreground">
            <MessageCircle className="w-4 h-4" />
            Spørsmål & svar
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Lurer dere på noe?
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-lg mx-auto">
            Her finner dere svar på det de fleste lurer på før de tar kontakt.
          </p>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-card rounded-2xl border border-border/60 px-6 shadow-sm hover:shadow-md transition-shadow duration-200 data-[state=open]:border-secondary/40 data-[state=open]:shadow-md"
            >
              <AccordionTrigger className="text-left text-foreground font-semibold hover:no-underline py-5 gap-4">
                <span className="flex items-center gap-3">
                  <HelpCircle className="w-5 h-5 text-secondary shrink-0" />
                  {faq.q}
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5 pl-8">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Bottom CTA */}
        <div className="text-center space-y-2 pt-2">
          <p className="text-muted-foreground">
            Fant du ikke svar på det du lurte på?
          </p>
          <a
            href="#kontakt"
            className="inline-block text-accent font-semibold underline underline-offset-4 hover:opacity-80 transition-opacity"
          >
            Ta kontakt med oss →
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
