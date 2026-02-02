import { Flame, Droplets, Dog, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const products = [
  {
    icon: Flame,
    title: "Gás de cozinha 13kg",
    description: "Botijão padrão para uso doméstico. Ideal para o dia a dia da sua família.",
    highlight: "Mais vendido",
    highlightColor: "bg-accent",
  },
  {
    icon: Flame,
    title: "Gás P20 (empilhadeira)",
    description: "Cilindro de 20kg para empilhadeiras e uso industrial.",
    highlight: null,
  },
  {
    icon: Flame,
    title: "Gás P45",
    description: "Cilindro de 45kg para comércios, restaurantes e indústrias.",
    highlight: null,
  },
  {
    icon: Droplets,
    title: "Água mineral 20L",
    description: "Galão de água mineral pura e fresca para hidratação da sua família.",
    highlight: null,
  },
  {
    icon: Dog,
    title: "Rações para pets",
    description: "Rações de qualidade para cães e gatos. Diversas marcas disponíveis.",
    highlight: "Novidade",
    highlightColor: "bg-secondary",
  },
  {
    icon: Dog,
    title: "Rações para animais",
    description: "Rações para aves, suínos e equinos. Produtos selecionados.",
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
              <div className="p-4 bg-primary/10 rounded-2xl w-fit mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <product.icon className="h-8 w-8 text-primary" />
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
