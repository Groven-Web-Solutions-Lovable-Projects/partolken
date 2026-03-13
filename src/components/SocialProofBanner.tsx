import { Heart, Users, Calendar, Award } from "lucide-react";

const stats = [
  { icon: Users, value: "30+", label: "Par hjulpet" },
  { icon: Calendar, value: "10+", label: "Års erfaring" },
  { icon: Heart, value: "95%", label: "Anbefaler videre" },
  { icon: Award, value: "5.0", label: "Snittkarakter" },
];

const SocialProofBanner = () => {
  return (
    <section className="py-12 md:py-16 bg-card border-b border-border">
      <div className="container">
        <div className="max-w-4xl mx-auto space-y-10">
          {/* Quote with animated heart */}
          <blockquote className="text-center space-y-4">
            <div className="flex justify-center">
              <Heart className="w-8 h-8 text-accent animate-[pulse_1.5s_cubic-bezier(0.4,0,0.6,1)_infinite] fill-accent/30" />
            </div>
            <p className="text-xl md:text-2xl font-medium text-foreground italic leading-relaxed">
              «Reiste hjem med en relasjon som ikke har vært så sterk på mange år.»
            </p>
            <cite className="text-sm text-muted-foreground block not-italic">
              — Par som har brukt Partolken
            </cite>
          </blockquote>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="text-center space-y-2 p-5 rounded-2xl bg-background border border-border/60 shadow-sm hover-scale"
              >
                <div className="w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center mx-auto">
                  <stat.icon className="w-5 h-5 text-secondary-foreground" />
                </div>
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
