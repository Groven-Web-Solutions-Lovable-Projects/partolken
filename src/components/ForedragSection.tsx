import { Mic, Building, Users, Calendar } from "lucide-react";

const audiences = [
  { icon: Building, label: "For bedrifter" },
  { icon: Users, label: "For faglige samlinger" },
  { icon: Calendar, label: "For konferanser og arrangementer" },
];

const ForedragSection = () => {
  return (
    <section id="foredrag" className="py-16 md:py-24 bg-card">
      <div className="container max-w-4xl space-y-10">
        <div className="text-center space-y-4">
          <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
            <Mic className="w-7 h-7 text-accent" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-primary">
            Foredrag om relasjoner, kommunikasjon og kjærlighet
          </h2>
          <p className="text-foreground leading-relaxed max-w-2xl mx-auto">
            Partolken holder foredrag for bedrifter, fagmiljøer, arrangementer og andre som ønsker innsikt i relasjoner, kommunikasjon, samspill og hvordan vi bedre kan forstå hverandre.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {audiences.map((a, i) => (
            <div key={i} className="flex items-center gap-3 bg-background rounded-lg px-6 py-4 border border-border">
              <a.icon className="w-5 h-5 text-primary" />
              <span className="font-medium text-foreground">{a.label}</span>
            </div>
          ))}
        </div>
        <div className="text-center">
          <a
            href="#kontakt"
            className="inline-block bg-accent text-accent-foreground px-7 py-3.5 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Send forespørsel om foredrag
          </a>
        </div>
      </div>
    </section>
  );
};

export default ForedragSection;
