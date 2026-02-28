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
    <div className={`relative rounded-2xl p-8 flex flex-col items-center text-center transition-transform hover:scale-[1.02] ${
      highlight ? "gold-glow gold-border" : "gold-border"
    }`} style={{ background: highlight ? 'hsla(43, 30%, 12%, 1)' : 'hsla(40, 5%, 10%, 1)' }}>
      {badge && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="badge-hot text-base">{badge}</span>
        </div>
      )}
      <h3 className="text-2xl font-extrabold mt-2 mb-4">{title}</h3>
      <ul className="text-left space-y-2 mb-6 w-full">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-2 text-sm md:text-base">
            <Check className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <div className="mb-2"><span className="price-tag">{oldPrice}</span></div>
      <p className="text-sm mb-1 opacity-60">POR APENAS</p>
      <p className="text-5xl font-extrabold gold-text mb-6">{newPrice}</p>
      <a href="#" className="w-full inline-block text-center cta-button animate-pulse-scale">COMPRAR AGORA</a>
    </div>
  );
};

export default PricingCard;
