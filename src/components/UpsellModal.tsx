import { X, Check, Sparkles, Crown } from "lucide-react";
import { trackEvent } from "@/lib/trackEvent";

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
        className="relative bg-card rounded-2xl shadow-2xl max-w-md w-full p-5 text-center border-2 border-secondary animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-3 right-3 text-muted-foreground hover:text-foreground transition z-10">
          <X className="w-5 h-5" />
        </button>

        <Sparkles className="w-7 h-7 text-secondary mx-auto mb-1" />
        <h2 className="text-lg font-extrabold text-foreground mb-1">
          Escolha seu pacote:
        </h2>
        <p className="text-xs text-muted-foreground mb-4">
          Compare e escolha a melhor opção para você
        </p>

        <div className="grid grid-cols-2 gap-3 mb-4">
          {/* BÁSICO */}
          <div className="rounded-xl border-2 border-border bg-background p-4 flex flex-col items-center text-center">
            <span className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-2">Básico</span>
            <div className="mt-auto w-full">
              <p className="text-2xl font-extrabold text-foreground mb-1">R$9,90</p>
              <a
                href="https://pay.lowify.com.br/checkout?product_id=7Yupdq"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("click_basic_upsell")}
                className="cta-button-green w-full text-center text-sm py-2.5 block"
              >
                QUERO O BÁSICO
              </a>
            </div>
          </div>

          {/* PREMIUM */}
          <div className="rounded-xl border-2 border-secondary bg-secondary/10 p-4 flex flex-col items-center text-center relative overflow-hidden">
            <div className="absolute -top-0 left-0 right-0 bg-secondary text-secondary-foreground text-[10px] font-bold py-0.5 uppercase tracking-wider">
              <Crown className="w-3 h-3 inline -mt-0.5 mr-0.5" /> Mais Vendido
            </div>
            <span className="text-xs font-bold text-secondary uppercase tracking-wide mb-2 mt-3">Premium</span>
            <ul className="text-left space-y-1.5 mb-3 w-full">
              {[
                "Atualizações gratuitas",
                "Acesso vitalício",
              ].map((f, i) => (
                <li key={i} className="flex items-start gap-1.5 text-xs">
                  <Check className="w-3.5 h-3.5 mt-0.5 text-secondary flex-shrink-0" />
                  <span className="text-foreground">{f}</span>
                </li>
              ))}
            </ul>
            <div className="mt-auto w-full">
              <p className="text-muted-foreground line-through text-[10px]">R$27,90</p>
              <p className="text-2xl font-extrabold text-primary mb-0.5">R$19,90</p>
              <p className="text-[10px] font-bold text-secondary uppercase tracking-wide mb-1">⚡ Oferta Única — 30% OFF</p>
              <a
                href="https://pay.lowify.com.br/checkout?product_id=Dh2LP2"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("click_upsell")}
                className="cta-button w-full text-center text-sm py-2.5 animate-pulse-scale block"
              >
                QUERO O PREMIUM
              </a>
            </div>
          </div>
        </div>

        <p className="text-[10px] text-green-600 font-semibold">
          ✅ Receba instantaneamente via WhatsApp os dados de acesso!
        </p>
      </div>
    </div>
  );
};

export default UpsellModal;
