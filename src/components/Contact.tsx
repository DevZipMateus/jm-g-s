import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: Phone,
    title: "Telefone",
    value: "(31) 3632-6006 / (31) 3632-7400",
    href: "tel:+553136326006",
  },
  {
    icon: Mail,
    title: "E-mail",
    value: "jsmartinslucio@gmail.com",
    href: "mailto:jsmartinslucio@gmail.com",
  },
  {
    icon: MapPin,
    title: "Endereço",
    value: "Rua Das Codornas, 416 - Vida Nova, Vespasiano - MG",
    href: null,
  },
  {
    icon: Clock,
    title: "Horário de funcionamento",
    value: "Seg-Sáb: 08h às 20h | Dom e Feriados: 08h às 14h",
    href: null,
  },
];

const Contact = () => {
  return (
    <section id="contato" className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            Contato
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Fale conosco
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Entre em contato para fazer seu pedido ou tirar dúvidas. Estamos prontos para atender você!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-card rounded-2xl border border-border card-hover"
              >
                <div className="p-3 bg-primary/10 rounded-xl shrink-0">
                  <info.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-foreground mb-1">
                    {info.title}
                  </h3>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-muted-foreground">{info.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Card */}
          <div className="bg-gradient-hero rounded-3xl p-8 md:p-12 text-primary-foreground flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">
              Faça seu pedido agora!
            </h3>
            <p className="text-primary-foreground/90 mb-8 text-lg">
              Clique no botão abaixo e fale diretamente conosco pelo WhatsApp. Atendimento rápido e entrega ágil!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                variant="whatsapp"
                size="lg"
                className="flex-1"
              >
                <a
                  href="https://wa.me/553136326006"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Phone className="h-5 w-5" />
                  (31) 3632-6006
                </a>
              </Button>
              <Button
                asChild
                variant="whatsapp"
                size="lg"
                className="flex-1"
              >
                <a
                  href="https://wa.me/553136327400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Phone className="h-5 w-5" />
                  (31) 3632-7400
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
