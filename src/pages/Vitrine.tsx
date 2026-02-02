import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";

const Vitrine = () => {
  useEffect(() => {
    // Prevenir scroll na página principal
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    document.documentElement.style.height = "100%";
    document.body.style.height = "100%";
    document.body.style.margin = "0";
    document.body.style.padding = "0";

    // Ocultar o badge MonteSite nesta página
    const badge = document.getElementById("montesite-footer-badge");
    if (badge) {
      badge.style.display = "none";
    }

    // Cleanup ao desmontar
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      document.documentElement.style.height = "";
      document.body.style.height = "";
      document.body.style.margin = "";
      document.body.style.padding = "";

      // Restaurar badge ao sair da página
      const badge = document.getElementById("montesite-footer-badge");
      if (badge) {
        badge.style.display = "";
      }
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Demonstração de Vitrine - JM Gás & Cia</title>
        <meta
          name="description"
          content="Confira nossa vitrine completa de produtos"
        />
      </Helmet>

      <div className="h-screen w-full overflow-hidden">
        {/* Header fixo */}
        <Header />

        {/* Iframe da vitrine */}
        <iframe
          src="https://jmgasecialtda.egestor.com.br/vitrine/"
          title="Vitrine JM Gás & Cia"
          className="vitrine-iframe"
          style={{
            position: "fixed",
            top: "80px",
            bottom: "0",
            left: "0",
            right: "0",
            width: "100%",
            height: "calc(100vh - 80px)",
            border: "none",
            zIndex: 0,
            paddingBottom: "80px",
          }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          loading="lazy"
        />
      </div>
    </>
  );
};

export default Vitrine;
