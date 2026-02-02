import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo */}
          <div className="flex flex-col items-center md:items-start">
            <img
              src={logo}
              alt="JM Gás & Cia - Logo"
              className="h-16 w-auto object-contain mb-4"
            />
            <p className="text-background/70 text-sm text-center md:text-left">
              Qualidade e agilidade no seu dia a dia
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="font-heading font-bold mb-4">Links rápidos</h4>
            <nav className="flex flex-wrap justify-center gap-4 text-sm">
              <a href="#inicio" className="text-background/70 hover:text-background transition-colors">
                Início
              </a>
              <a href="#sobre" className="text-background/70 hover:text-background transition-colors">
                Sobre
              </a>
              <a href="#produtos" className="text-background/70 hover:text-background transition-colors">
                Produtos
              </a>
              <a href="/vitrine" className="text-background/70 hover:text-background transition-colors">
                Vitrine
              </a>
              <a href="#contato" className="text-background/70 hover:text-background transition-colors">
                Contato
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h4 className="font-heading font-bold mb-4">Contato</h4>
            <p className="text-background/70 text-sm mb-2">
              (31) 3632-6006 / (31) 3632-7400
            </p>
            <p className="text-background/70 text-sm mb-2">
              jsmartinslucio@gmail.com
            </p>
            <p className="text-background/70 text-sm">
              Vespasiano - MG
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/60">
            <p>
              © {currentYear} JM Gás & Cia. Todos os direitos reservados.
            </p>
            <p>
              CNPJ: 39.933.154/0001-71
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
