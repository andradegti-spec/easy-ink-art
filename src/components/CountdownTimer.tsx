import { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(() => {
    const saved = localStorage.getItem("caligrafia-countdown-end");
    if (saved) {
      const diff = Math.max(0, Math.floor((parseInt(saved) - Date.now()) / 1000));
      return diff;
    }
    const end = Date.now() + 2 * 60 * 60 * 1000;
    localStorage.setItem("caligrafia-countdown-end", end.toString());
    return 2 * 60 * 60;
  });

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) { clearInterval(timer); return 0; }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;
  const pad = (n: number) => n.toString().padStart(2, "0");

  return (
    <div className="flex items-center justify-center gap-2">
      {[pad(hours), pad(minutes), pad(seconds)].map((val, i) => (
        <div key={i} className="flex items-center gap-2">
          <div className="gold-border rounded-lg px-3 py-2 min-w-[3rem] text-center" style={{ background: 'hsla(43, 50%, 30%, 0.2)' }}>
            <span className="text-3xl md:text-5xl font-extrabold gold-text">{val}</span>
          </div>
          {i < 2 && <span className="text-3xl md:text-5xl font-bold gold-text">:</span>}
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
