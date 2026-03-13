import { Heart, Users, Calendar, Award, Sparkles } from "lucide-react";

const stats = [
  { icon: Users, value: "3000+", label: "Par hjulpet" },
  { icon: Calendar, value: "15+", label: "Års erfaring" },
  { icon: Heart, value: "95%", label: "Anbefaler videre" },
  { icon: Award, value: "5.0", label: "Snittkarakter" },
];

const SocialProofBanner = () => {
  return (
    <section className="relative py-16 md:py-20 bg-gradient-to-br from-secondary/15 via-secondary/8 to-background overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Quote */}
          <blockquote className="text-center space-y-5">
            <div className="flex justify-center">
              <div className="relative">
                <Heart className="w-9 h-9 text-accent animate-[pulse_1.5s_cubic-bezier(0.4,0,0.6,1)_infinite] fill-accent/30" />
                <Sparkles className="w-4 h-4 text-secondary absolute -top-1 -right-2 animate-pulse" />
              </div>
            </div>
            <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-foreground italic leading-relaxed">
              «Reiste hjem med en relasjon som ikke har vært så sterk på mange år.»
            </p>
            <cite className="text-sm text-muted-foreground block not-italic tracking-wide uppercase">
              — Par som har brukt Partolken
            </cite>
          </blockquote>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="group text-center space-y-3 p-6 rounded-2xl bg-card/90 backdrop-blur-sm border border-secondary/20 shadow-md hover:shadow-xl hover:-translate-y-1 hover:border-secondary/40 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-secondary/30 to-secondary/10 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-5 h-5 text-foreground" />
                </div>
                <div className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofBanner;
