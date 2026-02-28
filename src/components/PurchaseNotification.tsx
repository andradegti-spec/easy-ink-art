import { useState, useEffect } from "react";
import { CheckCircle } from "lucide-react";

const nomes = [
  "Maria S.", "Ana P.", "João M.", "Pedro L.", "Carla R.", "Lucas F.", "Juliana T.", "Rafael B.",
  "Fernanda G.", "Bruno C.", "Camila D.", "Diego A.", "Patrícia M.", "Marcos V.", "Letícia H.",
  "Gustavo N.", "Isabela O.", "Thiago S.", "Amanda F.", "Felipe R.", "Larissa C.", "Rodrigo P.",
];

const cidades = [
  "São Paulo", "Rio de Janeiro", "Belo Horizonte", "Curitiba",
  "Salvador", "Fortaleza", "Brasília", "Recife", "Porto Alegre",
  "Goiânia", "Florianópolis", "Campinas", "Natal", "Maceió",
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

    const timeout = setTimeout(show, 3000);
    const interval = setInterval(show, Math.random() * 12000 + 10000);
    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 z-40 animate-in slide-in-from-left duration-500 max-w-[280px]">
      <div className="bg-card text-card-foreground rounded-xl shadow-2xl p-3 border border-border flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
          <CheckCircle className="w-5 h-5 text-green-600" />
        </div>
        <div className="min-w-0">
          <p className="text-sm font-bold text-foreground leading-tight truncate">
            {notification.nome} — {notification.cidade}
          </p>
          <p className="text-xs text-green-600 font-semibold">
            Comprou o Caligrafia Fácil há {notification.minutos} min
          </p>
        </div>
      </div>
    </div>
  );
};

export default PurchaseNotification;
