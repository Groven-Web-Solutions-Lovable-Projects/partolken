const FinalCTASection = () => {
  return (
    <section className="py-16 md:py-24 bg-primary">
      <div className="container max-w-2xl text-center space-y-8">
        <h2 className="text-2xl md:text-4xl font-bold text-primary-foreground leading-tight">
          Ikke vent til avstanden har vokst seg enda større
        </h2>
        <p className="text-primary-foreground/80 leading-relaxed text-lg">
          Jo tidligere dere tar tak i det som er vanskelig, jo større er sjansen for å finne tilbake til hverandre. Book en gratis 15 min samtale og få en trygg første prat om hva dere står i — og hva som kan være riktig neste steg.
        </p>
        <a
          href="#kontakt"
          className="inline-block bg-accent text-accent-foreground px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-opacity shadow-md text-lg"
        >
          Book gratis 15-min samtale →
        </a>
        <p className="text-primary-foreground/60 text-sm">
          Uforpliktende · Ingen venteliste · Svar innen 24 timer
        </p>
      </div>
    </section>
  );
};

export default FinalCTASection;
