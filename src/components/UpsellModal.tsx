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
        className="relative bg-card rounded-2xl shadow-2xl max-w-lg w-full p-8 text-center border-4 border-secondary animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition">
          <X className="w-6 h-6" />
        </button>

        <div className="flex justify-center mb-4">
          <Sparkles className="w-10 h-10 text-secondary" />
        </div>

        <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-2">
          ESPERE! 🎉
        </h2>
        <p className="text-lg text-foreground font-bold mb-1">
          Leve o <span className="text-primary">Pacote Premium</span> por um preço especial!
        </p>
        <p className="text-muted-foreground mb-6 text-sm">
          Como você escolheu o pacote básico, estamos oferecendo o Premium completo com desconto exclusivo:
        </p>

        <div className="bg-muted rounded-xl p-5 mb-6 text-left">
          <p className="font-bold text-foreground mb-3">Tudo do pacote básico +</p>
          <ul className="space-y-1.5">
            {[
              "+250 exercícios caligrafia bônus",
              "Mega pack atividades infantis (+350 páginas)",
              "Apostila reforço para crianças",
              "Todos os alfabetos (forma, itálico, medieval, jutai côrte)",
              "Acesso vitalício + Atualizações mensais",
              "Bônus exclusivos!",
            ].map((f, i) => (
              <li key={i} className="flex items-start gap-2 text-sm">
                <Check className="w-4 h-4 mt-0.5 text-secondary flex-shrink-0" />
                <span className="text-foreground">{f}</span>
              </li>
            ))}
          </ul>
        </div>

        <p className="text-muted-foreground line-through text-sm">De R$27,90</p>
        <p className="text-4xl font-extrabold text-primary mb-1">R$19,90</p>
        <p className="text-xs text-muted-foreground mb-5">Economia de R$8,00!</p>

        <a href="#" className="cta-button inline-block w-full text-center animate-pulse-scale mb-3">
          SIM! QUERO O PREMIUM POR R$19,90
        </a>
        <button onClick={onClose} className="text-sm text-muted-foreground hover:text-foreground underline transition">
          Não, obrigado. Quero continuar com o básico.
        </button>
      </div>
    </div>
  );
};

export default UpsellModal;
