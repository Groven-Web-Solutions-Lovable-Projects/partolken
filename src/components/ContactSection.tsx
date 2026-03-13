import { useState } from "react";
import { Send, Clock, ShieldCheck, Phone } from "lucide-react";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section id="kontakt" className="py-16 md:py-24 bg-card">
      <div className="container max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-primary">
              Book en gratis 15-minutters samtale
            </h2>
            <p className="text-foreground leading-relaxed">
              Fortell litt om situasjonen deres, så tar Maria kontakt innen 24 timer for å avtale en uforpliktende samtale.
            </p>
            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-3 text-foreground">
                <Clock className="w-5 h-5 text-accent shrink-0" />
                <span>Svar innen 24 timer</span>
              </div>
              <div className="flex items-center gap-3 text-foreground">
                <ShieldCheck className="w-5 h-5 text-accent shrink-0" />
                <span>Helt uforpliktende — ingen venteliste</span>
              </div>
              <div className="flex items-center gap-3 text-foreground">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <span>15 min gratis samtale på telefon eller video</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground italic">
              Over 30 par har allerede tatt dette steget — mange beskriver det som vendepunktet.
            </p>
          </div>

          <div className="bg-background rounded-2xl p-6 md:p-8 border border-border shadow-sm">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center space-y-4 py-8">
                <div className="w-16 h-16 rounded-full bg-secondary/30 flex items-center justify-center">
                  <ShieldCheck className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary">Takk for henvendelsen!</h3>
                <p className="text-muted-foreground">Maria tar kontakt med deg innen 24 timer.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-sm text-accent underline underline-offset-4"
                >
                  Send en ny henvendelse
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Navn</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ditt navn"
                    required
                    maxLength={100}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">E-post</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="din@epost.no"
                    required
                    maxLength={255}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Fortell kort om situasjonen <span className="text-muted-foreground font-normal">(valgfritt)</span>
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="F.eks. «Vi sliter med kommunikasjonen og ønsker hjelp»"
                    rows={3}
                    maxLength={1000}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-accent text-accent-foreground px-6 py-3.5 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Book gratis samtale
                </button>
                <p className="text-xs text-muted-foreground text-center">
                  Helt uforpliktende · Svar innen 24 timer
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
