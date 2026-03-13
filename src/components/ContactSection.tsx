import { useState } from "react";
import { Send, Clock, ShieldCheck, Phone } from "lucide-react";
import mariaImg from "@/assets/maria-bok.jpg";

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
    <section id="kontakt" className="py-20 md:py-28 bg-background">
      <div className="container max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Kontakt oss
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Vi er her for dere. Ta kontakt, så finner vi ut hvordan vi best kan hjelpe.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Maria image + info */}
          <div className="space-y-6">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-secondary/30">
                <img
                  src={mariaImg}
                  alt="Maria fra Partolken"
                  className="w-full h-[420px] object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-secondary/20 rounded-full blur-2xl" />
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-secondary/15 rounded-full blur-xl" />
            </div>
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-foreground">
                <Clock className="w-5 h-5 text-secondary shrink-0" />
                <span>Svar innen 24 timer</span>
              </div>
              <div className="flex items-center gap-3 text-foreground">
                <ShieldCheck className="w-5 h-5 text-secondary shrink-0" />
                <span>Helt uforpliktende — ingen venteliste</span>
              </div>
              <div className="flex items-center gap-3 text-foreground">
                <Phone className="w-5 h-5 text-secondary shrink-0" />
                <span>15 min gratis samtale på telefon eller video</span>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-sm">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center space-y-4 py-8">
                <div className="w-16 h-16 rounded-full bg-secondary/30 flex items-center justify-center">
                  <ShieldCheck className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Takk for henvendelsen!</h3>
                <p className="text-muted-foreground">Vi tar kontakt med deg innen 24 timer.</p>
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
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
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
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
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
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary resize-none"
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
