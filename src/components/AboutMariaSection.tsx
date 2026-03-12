import { Heart, HandHeart, Shield, Compass } from "lucide-react";
import mariaImg from "@/assets/maria-outdoor.jpg";

const trustPoints = [
  { icon: Heart, text: "Varm og respektfull tilnærming" },
  { icon: HandHeart, text: "Praktisk hjelp, ikke bare prat" },
  { icon: Shield, text: "Hjelp også når situasjonen kjennes fastlåst" },
  { icon: Compass, text: "Fokus på forståelse, utvikling og ny retning" },
];

const AboutMariaSection = () => {
  return (
    <section id="om-maria" className="py-16 md:py-24">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img src={mariaImg} alt="Maria Mork – Partolken" className="w-full h-[420px] object-cover" />
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-primary">
              Trygg hjelp når forholdet kjennes vanskelig
            </h2>
            <p className="text-foreground leading-relaxed">
              Maria hjelper par med å forstå seg selv og hverandre bedre, og skaper et trygt rom for å se nye muligheter i forholdet.
            </p>
            <ul className="space-y-4">
              {trustPoints.map((p, i) => (
                <li key={i} className="flex items-center gap-3 text-foreground">
                  <div className="w-10 h-10 rounded-full bg-secondary/40 flex items-center justify-center shrink-0">
                    <p.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span>{p.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMariaSection;
