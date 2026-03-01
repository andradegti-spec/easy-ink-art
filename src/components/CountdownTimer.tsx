import { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(() => {
    const saved = localStorage.getItem("caligrafia-countdown-end");
    if (saved) {
      const diff = Math.max(0, Math.floor((parseInt(saved) - Date.now()) / 1000));
      if (diff > 0) return diff;
    }
    // Reset to 2 hours if expired or first visit
    const end = Date.now() + 2 * 60 * 60 * 1000;
    localStorage.setItem("caligrafia-countdown-end", end.toString());
    return 2 * 60 * 60;
  });

  useEffect(() => {
    if (timeLeft <= 0) {
      // Reset when expired
      const end = Date.now() + 2 * 60 * 60 * 1000;
      localStorage.setItem("caligrafia-countdown-end", end.toString());
      setTimeLeft(2 * 60 * 60);
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) { clearInterval(timer); return 0; }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft === 0]);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;
  const pad = (n: number) => n.toString().padStart(2, "0");

  return (
    <div className="flex items-center justify-center gap-3 mt-2">
      {[
        { val: pad(hours), label: "horas" },
        { val: pad(minutes), label: "min" },
        { val: pad(seconds), label: "seg" },
      ].map((item, i) => (
        <div key={i} className="flex items-center gap-3">
          <div className="flex flex-col items-center">
            <div className="bg-white/15 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 min-w-[4rem] text-center">
              <span className="text-4xl md:text-5xl font-extrabold text-[hsl(36,100%,55%)]">{item.val}</span>
            </div>
            <span className="text-[10px] uppercase tracking-wider mt-1 opacity-60">{item.label}</span>
          </div>
          {i < 2 && <span className="text-3xl md:text-4xl font-bold text-[hsl(36,100%,55%)] -mt-4">:</span>}
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
