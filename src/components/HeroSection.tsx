import heroImage from "@/assets/parsamtale.jpg";

const HeroSection = () => {
  return (
    <section className="relative pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="space-y-6 md:space-y-8 animate-fade-in-up">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-primary tracking-tight">
              Når forholdet har låst seg, finnes det en vei tilbake.
            </h1>
            <p className="text-lg text-foreground leading-relaxed max-w-lg">
              Partolken hjelper par med å forstå hverandre bedre, bryte fastlåste mønstre og finne tilbake til nærhet, trygghet og kjærlighet.
            </p>
            <p className="text-sm text-muted-foreground italic border-l-2 border-secondary pl-4">
              Par beskriver sterkere kommunikasjon, mer ro og forhold som har blitt reddet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#kontakt"
                className="bg-accent text-accent-foreground px-7 py-3.5 rounded-lg text-base font-semibold hover:opacity-90 transition-opacity text-center"
              >
                Bestill gratis starthjelp
              </a>
              <a
                href="#hjertestarter"
                className="border-2 border-primary text-primary px-7 py-3.5 rounded-lg text-base font-semibold hover:bg-primary hover:text-primary-foreground transition-colors text-center"
              >
                Les om Hjertestarter
              </a>
            </div>
          </div>
          <div className="relative animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Trygg samtalesituasjon med par"
                className="w-full h-[350px] md:h-[480px] object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-secondary rounded-full opacity-40 -z-10" />
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent rounded-full opacity-20 -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
