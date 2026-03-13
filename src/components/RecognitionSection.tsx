import { useState } from "react";
import { Check } from "lucide-react";
import samtaleImg from "@/assets/samtale.jpg";

const problems = [
  {
    text: "Dere misforstår hverandre oftere enn før",
    severity: 1,
  },
  {
    text: "Samtaler ender lett i konflikt, avstand eller stillhet",
    severity: 2,
  },
  {
    text: "Nærheten har blitt svakere",
    severity: 3,
  },
  {
    text: "En eller begge kjenner på tvil, frustrasjon eller håpløshet",
    severity: 4,
  },
  {
    text: "Dere ønsker hjelp, men vet ikke hvor dere skal begynne",
    severity: 5,
  },
];

const responses: Record<number, { text: string; urgency: string }> = {
  0: {
    text: "Trykk på det som treffer dere.",
    urgency: "",
  },
  1: {
    text: "Mange par kjenner seg igjen i dette. Det er et godt tegn at dere legger merke til det.",
    urgency: "Tidlig fase",
  },
  2: {
    text: "Dere er ikke alene. Dette er vanlige mønstre som kan endres med riktig hjelp.",
    urgency: "Vanlig utfordring",
  },
  3: {
    text: "Når flere ting treffer, er det et tydelig signal om at noe bør gjøres — jo før, jo bedre.",
    urgency: "Viktig å handle",
  },
  4: {
    text: "Dere trenger ikke ha det slik. Profesjonell hjelp kan snu dette raskere enn dere tror.",
    urgency: "Sterkt signal",
  },
  5: {
    text: "Dette er alvorlig — men det betyr ikke at det er for sent. Mange par i akkurat denne situasjonen har snudd det helt.",
    urgency: "Ikke vent",
  },
};

const RecognitionSection = () => {
  const [checked, setChecked] = useState<Set<number>>(new Set());

  const toggle = (index: number) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  const count = checked.size;
  const response = responses[count];

  return (
    <section className="py-20 md:py-28 bg-card">
      <div className="container">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left: Image */}
          <div className="relative hidden md:block">
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img
                src={samtaleImg}
                alt="Par i samtale"
                className="w-full h-[500px] object-cover"
              />
            </div>
            {/* Floating stat */}
            {count > 0 && (
              <div className="absolute -bottom-4 -right-4 bg-card rounded-2xl shadow-lg border border-border px-5 py-4 animate-fade-in">
                <p className="text-3xl font-bold text-primary">{count}/5</p>
                <p className="text-xs text-muted-foreground font-medium">
                  {response.urgency}
                </p>
              </div>
            )}
          </div>

          {/* Right: Interactive checklist */}
          <div className="space-y-8">
            <div className="space-y-3">
              <p className="text-accent font-semibold text-sm tracking-widest uppercase">
                Selvtest
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight">
                Kjenner dere dere igjen?
              </h2>
            </div>

            <div className="space-y-3">
              {problems.map((p, i) => {
                const isChecked = checked.has(i);
                // Severity-based left border color escalation
                const severityColors = [
                  "border-l-accent/30",
                  "border-l-accent/50",
                  "border-l-accent/65",
                  "border-l-accent/80",
                  "border-l-accent",
                ];

                return (
                  <button
                    key={i}
                    onClick={() => toggle(i)}
                    className={`w-full text-left flex items-center gap-4 p-4 md:p-5 rounded-xl border-l-4 transition-all duration-200 group ${
                      severityColors[i]
                    } ${
                      isChecked
                        ? "bg-accent/10 border border-accent/20 shadow-sm"
                        : "bg-background border border-transparent hover:border-border hover:shadow-sm"
                    }`}
                  >
                    <div
                      className={`w-6 h-6 rounded-md border-2 flex items-center justify-center shrink-0 transition-all duration-200 ${
                        isChecked
                          ? "bg-accent border-accent"
                          : "border-border group-hover:border-accent/50"
                      }`}
                    >
                      {isChecked && (
                        <Check className="w-4 h-4 text-accent-foreground" />
                      )}
                    </div>
                    <span
                      className={`text-[0.95rem] md:text-base leading-snug transition-colors ${
                        isChecked
                          ? "text-foreground font-medium"
                          : "text-foreground/70"
                      }`}
                    >
                      {p.text}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Dynamic response */}
            <div
              className={`rounded-xl p-5 transition-all duration-300 ${
                count > 0
                  ? "bg-primary/[0.06] border border-primary/10"
                  : "bg-transparent"
              }`}
            >
              <p
                className={`leading-relaxed transition-all duration-300 ${
                  count > 0
                    ? "text-foreground font-medium"
                    : "text-muted-foreground"
                }`}
              >
                {response.text}
              </p>
            </div>

            {count > 0 && (
              <a
                href="#kontakt"
                className="inline-block bg-accent text-accent-foreground px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-all shadow-md animate-fade-in"
              >
                Book gratis 15-min samtale →
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecognitionSection;
