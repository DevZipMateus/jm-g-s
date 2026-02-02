import { Truck, MessageCircle, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTABanner = () => {
  return (
    <section className="relative py-16 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary to-accent" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-secondary/20 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-secondary/10 rounded-full translate-x-1/4 translate-y-1/4" />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-full" />
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col items-center text-center gap-8">
          {/* Icon */}
          <div className="flex items-center justify-center gap-4">
            <div className="p-4 bg-white/10 backdrop-blur-sm rounded-2xl">
              <Flame className="h-10 w-10 text-secondary animate-pulse" />
            </div>
            <div className="p-4 bg-white/10 backdrop-blur-sm rounded-2xl">
              <Truck className="h-10 w-10 text-white" />
            </div>
          </div>
          
          {/* Text */}
          <div className="space-y-4">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-white">
              Acabou o gás de cozinha?
            </h3>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
              Não fique na mão! Entrega rápida e segura em Vespasiano e região.
            </p>
          </div>
          
          {/* CTA Button */}
          <Button
            asChild
            size="lg"
            className="bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold text-lg px-8 py-6 h-auto shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            <a
              href="https://wa.me/553136326006"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pedir gás pelo WhatsApp"
            >
              <MessageCircle className="h-6 w-6" />
              Peça já pelo WhatsApp
            </a>
          </Button>
          
          {/* Trust badge */}
          <p className="text-white/60 text-sm">
            ⚡ Atendimento rápido • 🛡️ Entrega segura • ✅ Qualidade garantida
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
