import { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [progress, setProgress] = useState(() => {
    const saved = localStorage.getItem("caligrafia-bar-start");
    if (saved) {
      const elapsed = Date.now() - parseInt(saved);
      const total = 2 * 60 * 60 * 1000; // 2 hours
      const pct = Math.min(95, (elapsed / total) * 100);
      return pct;
    }
    localStorage.setItem("caligrafia-bar-start", Date.now().toString());
    return 0;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const saved = localStorage.getItem("caligrafia-bar-start");
      if (!saved) return;
      const elapsed = Date.now() - parseInt(saved);
      const total = 2 * 60 * 60 * 1000;
      const pct = Math.min(95, (elapsed / total) * 100);
      setProgress(pct);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const getLabel = () => {
    if (progress > 80) return "🔥 Últimas unidades! Quase esgotado!";
    if (progress > 50) return "⚠️ Mais da metade já foi vendida!";
    return "⏰ Vagas preenchendo rápido...";
  };

  const getColor = () => {
    if (progress > 80) return "from-[hsl(0,84%,55%)] to-[hsl(0,84%,45%)]";
    if (progress > 50) return "from-[hsl(36,100%,55%)] to-[hsl(28,100%,48%)]";
    return "from-[hsl(145,65%,42%)] to-[hsl(145,65%,35%)]";
  };

  return (
    <div className="mt-3 max-w-md mx-auto">
      <p className="text-sm font-extrabold mb-2 text-center">{getLabel()}</p>
      <div className="w-full bg-white/10 rounded-full h-5 overflow-hidden border border-white/20">
        <div
          className={`h-full bg-gradient-to-r ${getColor()} rounded-full transition-all duration-1000 ease-out flex items-center justify-end pr-2`}
          style={{ width: `${Math.max(15, progress)}%` }}
        >
          <span className="text-[10px] font-bold text-white">{Math.round(progress)}%</span>
        </div>
      </div>
      <p className="text-[11px] text-center mt-1.5 opacity-60">Oferta válida enquanto durar o estoque promocional</p>
    </div>
  );
};

export default CountdownTimer;
