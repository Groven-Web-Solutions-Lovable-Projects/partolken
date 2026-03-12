import { CheckCircle } from "lucide-react";

const points = [
  "Praktiske verktøy som gjør det lettere å forstå hverandre",
  "Fokus på hva dere trenger nå — ikke bare det som har vært",
  "Tydelig veiledning og konkrete tiltak",
  "Hjelp til å skape faktisk endring i hverdagen",
];

const WhyChooseSection = () => {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container max-w-3xl space-y-10">
        <h2 className="text-2xl md:text-3xl font-bold text-primary text-center">
          En praktisk og handlingsrettet vei videre
        </h2>
        <ul className="space-y-5 max-w-xl mx-auto">
          {points.map((p, i) => (
            <li key={i} className="flex items-start gap-3 text-foreground">
              <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
              <span>{p}</span>
            </li>
          ))}
        </ul>
        <p className="text-muted-foreground text-center leading-relaxed max-w-xl mx-auto">
          For mange er dette forskjellen på å stå fast i de samme mønstrene, og å faktisk begynne å bevege seg fremover.
        </p>
      </div>
    </section>
  );
};

export default WhyChooseSection;
