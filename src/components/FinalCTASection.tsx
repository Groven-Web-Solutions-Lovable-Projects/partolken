const FinalCTASection = () => {
  return (
    <section className="py-16 md:py-24 bg-primary">
      <div className="container max-w-2xl text-center space-y-8">
        <h2 className="text-2xl md:text-4xl font-bold text-primary-foreground leading-tight">
          Hver dag dere venter, vokser avstanden mellom dere
        </h2>
        <p className="text-primary-foreground/80 leading-relaxed text-lg">
          Dere fortjener ikke å ligge våkne om natten og lure på om det er håp. En kort samtale kan være alt som skal til for å snu retningen.
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
