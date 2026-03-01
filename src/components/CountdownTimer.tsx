import { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [animatedWidth, setAnimatedWidth] = useState(0);

  useEffect(() => {
    // Start animation after mount
    const timeout = setTimeout(() => {
      setAnimatedWidth(87);
    }, 300);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="mt-3 max-w-md mx-auto">
      <p className="text-sm font-extrabold mb-2 text-center">🔥 Últimas unidades! Oferta quase esgotada!</p>
      <div className="w-full bg-white/10 rounded-full h-6 overflow-hidden border border-white/20">
        <div
          className="h-full bg-gradient-to-r from-[hsl(36,100%,55%)] to-[hsl(0,84%,55%)] rounded-full flex items-center justify-end pr-2"
          style={{
            width: `${animatedWidth}%`,
            transition: "width 2.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          }}
        >
          <span className="text-[11px] font-extrabold text-white drop-shadow">{animatedWidth}%</span>
        </div>
      </div>
      <p className="text-[11px] text-center mt-1.5 opacity-60">87% das unidades promocionais já foram vendidas</p>
    </div>
  );
};

export default CountdownTimer;
