import { X, Check, Sparkles } from "lucide-react";

interface UpsellModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const UpsellModal = ({ isOpen, onClose }: UpsellModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-foreground/60 backdrop-blur-sm" />
      <div
        className="relative bg-card rounded-2xl shadow-2xl max-w-sm w-full p-6 text-center border-2 border-secondary animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-3 right-3 text-muted-foreground hover:text-foreground transition">
          <X className="w-5 h-5" />
        </button>

        <Sparkles className="w-8 h-8 text-secondary mx-auto mb-2" />

        <h2 className="text-xl font-extrabold text-foreground mb-1">
          ESPERE! Oferta Especial
        </h2>
        <p className="text-sm text-muted-foreground mb-4">
          Upgrade para o <span className="text-primary font-bold">Premium</span> com desconto exclusivo:
        </p>

        <ul className="text-left space-y-1 mb-4">
          {[
            "+250 exercícios bônus",
            "Mega pack infantil (+350 páginas)",
            "Todos os alfabetos inclusos",
            "Acesso vitalício + atualizações",
          ].map((f, i) => (
            <li key={i} className="flex items-start gap-2 text-sm">
              <Check className="w-4 h-4 mt-0.5 text-secondary flex-shrink-0" />
              <span className="text-foreground">{f}</span>
            </li>
          ))}
        </ul>

        <p className="text-muted-foreground line-through text-xs">De R$27,90</p>
        <p className="text-3xl font-extrabold text-primary mb-1">R$19,90</p>
        <p className="text-xs text-green-600 font-semibold mb-4">
          Receba instantaneamente via WhatsApp os dados de acesso para baixar seus arquivos!
        </p>

        <a href="https://pay.lowify.com.br/checkout?product_id=Dh2LP2" target="_blank" rel="noopener noreferrer" className="cta-button inline-block w-full text-center text-base py-3 animate-pulse-scale mb-2">
          QUERO O PREMIUM POR R$19,90
        </a>
        <a href="https://pay.lowify.com.br/checkout?product_id=7Yupdq" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-foreground underline transition">
          Não, obrigado. Continuar com o básico.
        </a>
      </div>
    </div>
  );
};

export default UpsellModal;
