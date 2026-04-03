import { ArrowUpRight, MessageCircle } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-2xl px-6 py-24 sm:py-32">
        {/* Hero */}
        <section className="mb-24">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight mb-6">
            Product Manager<br />& Builder.
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
            Building products with AI, scaling brands, and documenting the journey.
          </p>
        </section>

        {/* Featured Project */}
        <section className="mb-24">
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-4">
            Featured Project
          </p>
          <div className="rounded-xl border bg-card p-6 sm:p-8">
            <h2 className="text-xl font-semibold mb-2">IstiGrow</h2>
            <p className="text-muted-foreground mb-6">
              A PWA Dzikr Counter built with Vibe Coding.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-80"
              >
                View Live <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border px-4 py-2 text-sm font-medium transition-colors hover:bg-secondary"
              >
                GitHub Repository <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Lasuko Section */}
        <section className="mb-24">
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-4">
            Brand
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">
            Lasuko Makanan & Kudapan
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg">
            Dibuat langsung oleh Ibu Desna menghadirkan cita rasa rumahan yang hangat dalam hidangan Anda.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Card 1 */}
            <div className="rounded-xl border bg-card p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold mb-2">Paket Isi 25</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Dimsum ayam dengan tekstur padat dan daging melimpah.
                </p>
              </div>
              <a
                href="https://wa.me/6281234567890?text=Halo%20saya%20ingin%20pesan%20Paket%20Isi%2025"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-lasuko px-4 py-2.5 text-sm font-medium text-lasuko-foreground transition-opacity hover:opacity-85"
              >
                <MessageCircle className="h-4 w-4" />
                Pesan via WhatsApp
              </a>
            </div>

            {/* Card 2 */}
            <div className="rounded-xl border bg-card p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold mb-2">Paket Hemat Isi 10</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Porsi pas untuk cemilan harian, tetap dengan kualitas daging premium.
                </p>
              </div>
              <a
                href="https://wa.me/6281234567890?text=Halo%20saya%20ingin%20pesan%20Paket%20Hemat%20Isi%2010"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-lasuko px-4 py-2.5 text-sm font-medium text-lasuko-foreground transition-opacity hover:opacity-85"
              >
                <MessageCircle className="h-4 w-4" />
                Pesan via WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="mb-16">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-80"
          >
            Get in Touch <ArrowUpRight className="h-4 w-4" />
          </a>
        </section>

        {/* Footer */}
        <footer className="pt-8 border-t">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} · Built with care.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
