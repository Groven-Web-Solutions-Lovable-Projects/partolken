import { CircleAlert } from "lucide-react";

const problems = [
  "Dere misforstår hverandre oftere enn før",
  "Samtaler ender lett i konflikt, avstand eller stillhet",
  "Nærheten har blitt svakere",
  "En eller begge kjenner på tvil, frustrasjon eller håpløshet",
  "Dere ønsker hjelp, men vet ikke hvor dere skal begynne",
];

const RecognitionSection = () => {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container max-w-3xl text-center space-y-10">
        <h2 className="text-2xl md:text-3xl font-bold text-primary">
          Kjenner dere dere igjen?
        </h2>
        <ul className="space-y-4 text-left max-w-xl mx-auto">
          {problems.map((p, i) => (
            <li key={i} className="flex items-start gap-3 text-foreground">
              <CircleAlert className="w-5 h-5 text-accent mt-0.5 shrink-0" />
              <span>{p}</span>
            </li>
          ))}
        </ul>
        <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto">
          Da kan det være godt å få hjelp til å forstå hva som faktisk skjer mellom dere — og hva dere kan gjøre videre.
        </p>
        <a
          href="#kontakt"
          className="inline-block bg-accent text-accent-foreground px-7 py-3.5 rounded-lg font-semibold hover:opacity-90 transition-opacity"
        >
          Få gratis starthjelp
        </a>
      </div>
    </section>
  );
};

export default RecognitionSection;
