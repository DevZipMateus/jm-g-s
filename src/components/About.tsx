import { Target, Eye, Heart, Shield, Users, Zap, Award } from "lucide-react";
import historyBg from "@/assets/history-bg.jpg";

const values = [
  {
    icon: Shield,
    title: "Segurança em primeiro lugar",
    description: "Produtos certificados e entrega segura para sua tranquilidade.",
  },
  {
    icon: Users,
    title: "Compromisso com o cliente",
    description: "Atendimento personalizado e relacionamento de confiança.",
  },
  {
    icon: Award,
    title: "Responsabilidade e ética",
    description: "Atuamos com transparência e integridade em todos os processos.",
  },
  {
    icon: Zap,
    title: "Agilidade no atendimento",
    description: "Entrega rápida para você não ficar na mão.",
  },
];

const About = () => {
  return (
    <section id="sobre" className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            Sobre nós
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Conheça a JM Gás & Cia
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Desde 2018 oferecendo gás e produtos com qualidade, segurança e agilidade para famílias e empresas de Vespasiano e região.
          </p>
        </div>

        {/* History */}
        <div className="relative rounded-3xl overflow-hidden shadow-custom mb-16 border border-border">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={historyBg}
              alt="Entrega de gás na comunidade"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/40" />
          </div>
          
          {/* Content */}
          <div className="relative z-10 p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                  Nossa história
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  A JM Gás e Cia surgiu em 27 de dezembro de 2018, com o objetivo de atender a comunidade local oferecendo gás com qualidade, segurança e agilidade na entrega.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Desde o início, a empresa preza pelo bom atendimento, pela confiança dos clientes e pelo compromisso com a segurança, buscando sempre aprimorar seus serviços e fortalecer seu nome no mercado.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="bg-background/90 backdrop-blur-sm rounded-2xl p-8 text-center shadow-lg">
                  <div className="text-5xl font-heading font-extrabold text-primary mb-2">
                    2018
                  </div>
                  <p className="text-muted-foreground font-medium">
                    Ano de fundação
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission, Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-primary rounded-3xl p-8 text-primary-foreground card-hover">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-primary-foreground/20 rounded-xl">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-heading font-bold">Missão</h3>
            </div>
            <p className="text-primary-foreground/90 leading-relaxed">
              Oferecer gás e produtos relacionados com qualidade, segurança e agilidade, garantindo a satisfação dos clientes e contribuindo para o bem-estar das famílias e empresas atendidas.
            </p>
          </div>

          <div className="bg-accent rounded-3xl p-8 text-accent-foreground card-hover">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-accent-foreground/20 rounded-xl">
                <Eye className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-heading font-bold">Visão</h3>
            </div>
            <p className="text-accent-foreground/90 leading-relaxed">
              Ser reconhecida como uma empresa de referência na distribuição de gás, destacando-se pela confiança, excelência no atendimento e compromisso com a segurança.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-secondary/10 rounded-xl">
              <Heart className="h-8 w-8 text-secondary" />
            </div>
            <h3 className="text-2xl font-heading font-bold text-foreground">
              Nossos valores
            </h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 border border-border card-hover"
              >
                <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-heading font-bold text-foreground mb-2">
                  {value.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
