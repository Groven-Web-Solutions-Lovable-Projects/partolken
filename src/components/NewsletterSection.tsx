import { useState } from "react";
import { Mail, User } from "lucide-react";

const NewsletterSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // placeholder
    alert("Takk for påmeldingen!");
    setName("");
    setEmail("");
  };

  return (
    <section className="py-16 md:py-24 bg-primary">
      <div className="container max-w-2xl text-center space-y-8">
        <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground">
          Få gratis råd for et sterkere forhold
        </h2>
        <p className="text-primary-foreground/80 leading-relaxed">
          Meld deg på og få innsikt, refleksjoner og konkrete råd om relasjoner, kommunikasjon og hvordan dere kan ta bedre vare på forholdet.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
          <div className="relative flex-1">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Fornavn"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg bg-card text-foreground placeholder:text-muted-foreground border-0 focus:outline-none focus:ring-2 focus:ring-accent"
              required
            />
          </div>
          <div className="relative flex-1">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="email"
              placeholder="E-postadresse"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg bg-card text-foreground placeholder:text-muted-foreground border-0 focus:outline-none focus:ring-2 focus:ring-accent"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            Meld meg på
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSection;
