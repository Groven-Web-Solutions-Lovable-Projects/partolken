import { Quote } from "lucide-react";

const testimonials = [
  "Vi har aldri hatt det bedre.",
  "Bare etter de 2 første ukene merket vi forandring hjemme hos oss.",
  "Dette er langt på vei et mirakel.",
  "Reiste hjem med en relasjon som ikke har vært så sterk på mange år.",
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container space-y-12">
        <h2 className="text-2xl md:text-3xl font-bold text-primary text-center">
          Dette sier par som har fått hjelp
        </h2>
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-card rounded-xl p-6 md:p-8 border border-border shadow-sm hover:shadow-md transition-shadow"
            >
              <Quote className="w-8 h-8 text-accent/40 mb-3" />
              <p className="text-foreground font-medium text-lg italic leading-relaxed">
                «{t}»
              </p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <a href="#" className="text-primary font-semibold underline underline-offset-4 hover:text-accent transition-colors">
            Les flere referanser →
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
