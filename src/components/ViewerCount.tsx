import { useState, useEffect } from "react";
import { Eye } from "lucide-react";

const ViewerCount = () => {
  const [count, setCount] = useState(() => Math.floor(Math.random() * 81) + 120);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        const change = Math.floor(Math.random() * 7) - 3;
        return Math.max(120, Math.min(200, prev + change));
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="inline-flex items-center gap-2 mt-4 bg-destructive/20 px-4 py-2 rounded-full">
      <Eye className="w-4 h-4 text-destructive animate-pulse" />
      <span className="text-sm font-bold text-destructive">{count} pessoas assistindo agora</span>
    </div>
  );
};

export default ViewerCount;
