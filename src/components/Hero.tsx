import { Phone, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Entrega de gás de cozinha - JM Gás & Cia"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/60 to-primary/40" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-primary-foreground leading-tight mb-6">
              JM Gás & Cia
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-primary-foreground/90 font-medium mb-8 leading-relaxed">
              Qualidade e agilidade no seu dia a dia. Entrega rápida de gás de cozinha, água mineral e rações para sua família e negócio.
            </h2>

            {/* Info Cards */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="flex items-center gap-3 bg-primary-foreground/10 backdrop-blur-sm rounded-lg px-4 py-3">
                <Clock className="h-5 w-5 text-secondary" />
                <span className="text-primary-foreground/90 text-sm">
                  Seg-Sáb: 08h-20h | Dom: 08h-14h
                </span>
              </div>
              <div className="flex items-center gap-3 bg-primary-foreground/10 backdrop-blur-sm rounded-lg px-4 py-3">
                <MapPin className="h-5 w-5 text-secondary" />
                <span className="text-primary-foreground/90 text-sm">
                  Vespasiano - MG
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                asChild
                variant="hero"
                size="lg"
              >
                <a
                  href="https://wa.me/553136326006"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Pedir gás agora via WhatsApp"
                >
                  <Phone className="h-5 w-5" />
                  Pedir agora
                </a>
              </Button>
              <Button
                asChild
                variant="heroOutline"
                size="lg"
              >
                <a href="#produtos">
                  Ver produtos
                </a>
              </Button>
            </div>
          </div>

          {/* Visual Element */}
          <div className="hidden lg:flex justify-center items-center animate-slide-in-right">
            <div className="relative">
              {/* Decorative circles */}
              <div className="absolute -top-8 -right-8 w-32 h-32 border-4 border-secondary/30 rounded-full" />
              <div className="absolute -bottom-8 -left-8 w-24 h-24 border-4 border-accent/30 rounded-full" />
              
              {/* Main visual card */}
              <div className="bg-primary-foreground/10 backdrop-blur-md rounded-3xl p-8 border border-primary-foreground/20">
                <div className="text-center">
                  <div className="text-6xl mb-4">🔥</div>
                  <p className="text-primary-foreground font-bold text-xl mb-2">
                    Entrega rápida
                  </p>
                  <p className="text-primary-foreground/80">
                    Na sua casa em minutos
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
