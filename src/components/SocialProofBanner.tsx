import { Heart, Users, Calendar, Award } from "lucide-react";

const stats = [
  { icon: Users, value: "30+", label: "Par hjulpet" },
  { icon: Calendar, value: "10+", label: "Års erfaring" },
  { icon: Heart, value: "95%", label: "Anbefaler videre" },
  { icon: Award, value: "5.0", label: "Snittkarakter" },
];

const SocialProofBanner = () => {
  return (
    <section className="py-10 md:py-14 border-b border-border">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Quote */}
          <blockquote className="text-center mb-10">
            <p className="text-xl md:text-2xl font-medium text-foreground italic leading-relaxed">
              «Reiste hjem med en relasjon som ikke har vært så sterk på mange år.»
            </p>
            <cite className="text-sm text-muted-foreground mt-3 block not-italic">
              — Par som har brukt Partolken
            </cite>
          </blockquote>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center space-y-2">
                <stat.icon className="w-6 h-6 text-accent mx-auto" />
                <div className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofBanner;
