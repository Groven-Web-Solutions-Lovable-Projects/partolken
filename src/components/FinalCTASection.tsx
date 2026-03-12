const FinalCTASection = () => {
  return (
    <section id="kontakt" className="py-16 md:py-24 bg-primary">
      <div className="container max-w-2xl text-center space-y-8">
        <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground">
          Ta første steg i dag
        </h2>
        <p className="text-primary-foreground/80 leading-relaxed">
          Enten dere ønsker hjelp med en gang, vil lese Hjertestarter eller bare vil følge med og lære mer — det viktigste er å starte et sted.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#"
            className="bg-accent text-accent-foreground px-7 py-3.5 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Bestill gratis starthjelp
          </a>
          <a
            href="#hjertestarter"
            className="bg-card text-foreground px-7 py-3.5 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Bestill Hjertestarter
          </a>
          <a
            href="#nyhetsbrev"
            className="border-2 border-primary-foreground text-primary-foreground px-7 py-3.5 rounded-lg font-semibold hover:bg-primary-foreground hover:text-primary transition-colors"
          >
            Meld deg på nyhetsbrev
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
