import { useState, useEffect } from "react";
import { ShoppingCart } from "lucide-react";

const nomes = [
  "Maria", "Ana", "João", "Pedro", "Carla", "Lucas", "Juliana", "Rafael",
  "Fernanda", "Bruno", "Camila", "Diego", "Patrícia", "Marcos", "Letícia",
  "Gustavo", "Isabela", "Thiago", "Amanda", "Felipe", "Larissa", "Rodrigo",
  "Beatriz", "Eduardo", "Vanessa", "André", "Daniela", "Roberto", "Priscila",
  "Renato", "Aline", "Fábio", "Cristina", "Leandro", "Tatiana",
];

const cidades = [
  "São Paulo, SP", "Rio de Janeiro, RJ", "Belo Horizonte, MG", "Curitiba, PR",
  "Salvador, BA", "Fortaleza, CE", "Brasília, DF", "Recife, PE", "Porto Alegre, RS",
  "Manaus, AM", "Goiânia, GO", "Belém, PA", "Campinas, SP", "Florianópolis, SC",
  "Cuiabá, MT", "Campo Grande, MS", "Natal, RN", "Maceió, AL",
];

const PurchaseNotification = () => {
  const [visible, setVisible] = useState(false);
  const [notification, setNotification] = useState({ nome: "", cidade: "", minutos: 0 });

  useEffect(() => {
    const show = () => {
      const nome = nomes[Math.floor(Math.random() * nomes.length)];
      const cidade = cidades[Math.floor(Math.random() * cidades.length)];
      const minutos = Math.floor(Math.random() * 10) + 1;
      setNotification({ nome, cidade, minutos });
      setVisible(true);
      setTimeout(() => setVisible(false), 4000);
    };

    show();
    const interval = setInterval(show, Math.random() * 15000 + 10000);
    return () => clearInterval(interval);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 z-40 animate-in slide-in-from-left duration-500 max-w-xs">
      <div className="bg-card text-card-foreground rounded-xl shadow-2xl p-4 border border-border flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
          <ShoppingCart className="w-5 h-5 text-primary" />
        </div>
        <div>
          <p className="text-sm font-bold">{notification.nome} de {notification.cidade}</p>
          <p className="text-xs text-muted-foreground">comprou há {notification.minutos} min</p>
        </div>
      </div>
    </div>
  );
};

export default PurchaseNotification;
