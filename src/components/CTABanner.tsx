import { Car, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTABanner = () => {
  return (
    <section className="bg-secondary py-6">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
          <div className="flex items-center gap-3">
            <Car className="h-8 w-8 text-secondary-foreground animate-pulse" />
            <span className="text-xl md:text-2xl font-heading font-bold text-secondary-foreground">
              Acabou o gás de cozinha?
            </span>
          </div>
          
          <Button
            asChild
            size="lg"
            className="bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold shadow-lg"
          >
            <a
              href="https://wa.me/553136326006"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pedir gás pelo WhatsApp"
            >
              <MessageCircle className="h-5 w-5" />
              Peça já pelo WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
