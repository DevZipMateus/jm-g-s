import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/553136326006"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contato via WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-[hsl(142,70%,45%)] text-white rounded-full shadow-lg hover:bg-[hsl(142,70%,40%)] transition-colors duration-300"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
};

export default WhatsAppButton;
