import { Droplets, Dog, Phone, ShoppingBag, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import glp13SuperGas from "@/assets/glp-13-supergas.jpg";
import glp13NacionalGas from "@/assets/glp-13-nacionalgas.jpg";
import glp13NgcGas from "@/assets/glp-13-ngcgas.jpg";
import glp13CopaGas from "@/assets/glp-13-copagas.jpg";
import glpP20SuperGas from "@/assets/glp-p20-supergas.jpg";
import glpP45NacionalGas from "@/assets/glp-p45-nacionalgas.jpg";

const products = [
  {
    image: glp13SuperGas,
    title: "GLP 13kg Super Gás",
    description: "Botijão padrão Supergasbras para uso doméstico. Ideal para o dia a dia da sua família.",
    highlight: "Mais vendido",
    highlightColor: "bg-accent",
  },
  {
    image: glp13NacionalGas,
    title: "GLP 13kg Nacional Gás",
    description: "Botijão Nacional Gás 13kg. Segurança e qualidade para sua casa.",
    highlight: null,
  },
  {
    image: glp13NgcGas,
    title: "GLP 13kg NGC Gás",
    description: "Botijão NGC (Liquigás) 13kg. Confiança e praticidade no dia a dia.",
    highlight: null,
  },
  {
    image: glp13CopaGas,
    title: "GLP 13kg Copa Gás",
    description: "Botijão Copagaz 13kg. Qualidade garantida para sua cozinha.",
    highlight: null,
  },
  {
    image: glpP20SuperGas,
    title: "GLP P20 Super Gás",
    description: "Cilindro de 20kg Supergasbras para empilhadeiras e uso industrial.",
    highlight: null,
  },
  {
    image: glpP45NacionalGas,
    title: "GLP P45 Nacional Gás",
    description: "Cilindro de 45kg Nacional Gás para comércios, restaurantes e indústrias.",
    highlight: null,
  },
];

const Products = () => {
  return (
    <section id="produtos" className="section-padding bg-muted">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            Produtos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            O que oferecemos
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Gás de cozinha, água mineral e rações de qualidade com entrega rápida em Vespasiano e região.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 border border-border card-hover relative overflow-hidden group"
            >
              {product.highlight && (
                <span
                  className={`absolute top-4 right-4 px-3 py-1 ${product.highlightColor} text-white text-xs font-bold rounded-full`}
                >
                  {product.highlight}
                </span>
              )}
              <div className="w-full h-48 rounded-xl overflow-hidden mb-6 bg-muted flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-full w-full object-contain p-4"
                  loading="lazy"
                />
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                {product.title}
              </h3>
              <p className="text-muted-foreground mb-6">
                {product.description}
              </p>
              <Button
                asChild
                variant="outline"
                className="w-full"
              >
                <a
                  href="https://wa.me/553136326006"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Phone className="h-4 w-4" />
                  Pedir agora
                </a>
              </Button>
            </div>
          ))}
        </div>

        {/* Vitrine Showcase */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-accent p-1 mb-12">
          <div className="bg-gradient-to-br from-primary via-primary/95 to-accent rounded-[22px] p-8 sm:p-12 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              {/* Icon area */}
              <div className="flex-shrink-0">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-primary-foreground/15 backdrop-blur-sm flex items-center justify-center border border-primary-foreground/20">
                  <ShoppingBag className="h-12 w-12 sm:h-14 sm:w-14 text-secondary" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                <span className="inline-block px-3 py-1 bg-secondary/20 text-secondary rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                  Vitrine Online
                </span>
                <h3 className="text-2xl sm:text-3xl font-heading font-bold text-primary-foreground mb-3">
                  Confira todos os nossos produtos e preços
                </h3>
                <p className="text-primary-foreground/80 text-lg max-w-2xl mb-6">
                  Navegue pela nossa vitrine completa com preços atualizados. Rações, água mineral, gás e muito mais — tudo em um só lugar!
                </p>
                <Button
                  asChild
                  variant="hero"
                  size="lg"
                  className="group/btn"
                >
                  <a href="/vitrine">
                    Explorar vitrine
                    <ArrowRight className="h-5 w-5 transition-transform group-hover/btn:translate-x-1" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-muted-foreground mb-4">
            Não encontrou o que procura? Entre em contato conosco!
          </p>
          <Button
            asChild
            variant="whatsapp"
            size="lg"
          >
            <a
              href="https://wa.me/553136326006"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Phone className="h-5 w-5" />
              Falar no WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;
