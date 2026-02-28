import { Check } from "lucide-react";

interface PricingCardProps {
  title: string;
  badge?: string;
  features: string[];
  oldPrice: string;
  newPrice: string;
  highlight?: boolean;
}

const PricingCard = ({ title, badge, features, oldPrice, newPrice, highlight }: PricingCardProps) => {
  return (
    <div
      className={`relative rounded-2xl p-8 shadow-xl flex flex-col items-center text-center transition-transform hover:scale-[1.02] ${
        highlight
          ? "bg-primary border-4 border-secondary text-primary-foreground"
          : "bg-card text-card-foreground border-2 border-border"
      }`}
    >
      {badge && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="badge-hot text-base px-4 py-1.5">{badge}</span>
        </div>
      )}

      <h3 className="text-2xl font-extrabold mt-2 mb-4">{title}</h3>

      <ul className="text-left space-y-2 mb-6 w-full">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-2 text-sm md:text-base">
            <Check className="w-5 h-5 mt-0.5 flex-shrink-0 text-secondary" />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <div className="mb-2">
        <span className={`price-tag ${highlight ? "text-primary-foreground/60" : ""}`}>DE {oldPrice}</span>
      </div>
      <p className="text-sm mb-1 opacity-80">POR APENAS</p>
      <p className="text-5xl font-extrabold mb-6">{newPrice}</p>

      <a
        href="#"
        className={`w-full inline-block text-center ${highlight ? "cta-button" : "cta-button-green"} animate-pulse-scale`}
      >
        COMPRAR AGORA
      </a>
    </div>
  );
};

export default PricingCard;
