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
    <section id="faq" className="py-16 md:py-24 bg-card">
      <div className="container max-w-3xl space-y-10">
        <h2 className="text-2xl md:text-3xl font-bold text-primary text-center">
          Vanlige spørsmål
        </h2>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-background rounded-lg border border-border px-6"
            >
              <AccordionTrigger className="text-left text-foreground font-medium hover:no-underline py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
