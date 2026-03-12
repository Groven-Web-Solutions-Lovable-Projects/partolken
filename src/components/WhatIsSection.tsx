import { Search, Lightbulb, Wrench } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Vi kartlegger mønstrene deres",
    description: "Gjennom analyser og samtaler blir det tydelig hva som skjer mellom dere.",
  },
  {
    icon: Lightbulb,
    title: "Dere får ny forståelse",
    description: "Dere lærer mer om hverandre, behovene deres og hvorfor konfliktene oppstår.",
  },
  {
    icon: Wrench,
    title: "Dere får konkrete verktøy",
    description: "Målet er ikke bare innsikt, men endring i hverdagen.",
  },
];

const WhatIsSection = () => {
  return (
    <section id="hva-er-partolking" className="py-16 md:py-24">
      <div className="container space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-primary">
            Hva er partolking?
          </h2>
          <p className="text-foreground leading-relaxed">
            Partolking handler om å forstå dynamikken mellom dere: hvorfor dere reagerer som dere gjør, hva som skaper avstand, og hvordan dere kan finne tilbake til hverandre.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div
              key={i}
              className="bg-card rounded-xl p-8 shadow-sm border border-border text-center space-y-4 hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 rounded-full bg-secondary/50 flex items-center justify-center mx-auto">
                <step.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIsSection;
