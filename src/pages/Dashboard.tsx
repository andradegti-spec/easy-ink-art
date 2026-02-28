import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { Eye, MousePointer, Sparkles, Crown, Trash2, RefreshCw, ArrowLeft, Lock } from "lucide-react";

const COLORS = ["hsl(36,100%,55%)", "hsl(174,62%,47%)", "hsl(280,60%,55%)", "hsl(145,65%,42%)"];

const EVENT_LABELS: Record<string, string> = {
  page_view: "Visualizações",
  click_basic: "Cliques Básico",
  click_upsell: "Cliques Upsell (R$19,90)",
  click_premium: "Cliques Premium (R$27,90)",
};

const ICONS: Record<string, React.ReactNode> = {
  page_view: <Eye className="w-6 h-6" />,
  click_basic: <MousePointer className="w-6 h-6" />,
  click_upsell: <Sparkles className="w-6 h-6" />,
  click_premium: <Crown className="w-6 h-6" />,
};

interface EventCount {
  event_type: string;
  count: number;
}

const Dashboard = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [counts, setCounts] = useState<EventCount[]>([]);
  const [dailyData, setDailyData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const DASHBOARD_PASS = "caligrafia2026";

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === DASHBOARD_PASS) {
      setAuthenticated(true);
    }
  };

  const fetchData = async () => {
    setLoading(true);
    
    // Get counts per event type
    const { data: events } = await supabase
      .from("site_events")
      .select("event_type, created_at");

    if (events) {
      const countMap: Record<string, number> = {};
      const dailyMap: Record<string, Record<string, number>> = {};

      events.forEach((e: any) => {
        countMap[e.event_type] = (countMap[e.event_type] || 0) + 1;

        const day = new Date(e.created_at).toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit" });
        if (!dailyMap[day]) dailyMap[day] = {};
        dailyMap[day][e.event_type] = (dailyMap[day][e.event_type] || 0) + 1;
      });

      setCounts(
        ["page_view", "click_basic", "click_upsell", "click_premium"].map((t) => ({
          event_type: t,
          count: countMap[t] || 0,
        }))
      );

      const sortedDays = Object.keys(dailyMap).sort((a, b) => {
        const [da, ma] = a.split("/").map(Number);
        const [db, mb] = b.split("/").map(Number);
        return ma - mb || da - db;
      });

      setDailyData(
        sortedDays.map((day) => ({
          day,
          ...dailyMap[day],
        }))
      );
    }

    setLoading(false);
  };

  const clearData = async () => {
    if (!confirm("Tem certeza que deseja ZERAR todos os dados?")) return;
    await supabase.from("site_events").delete().neq("id", "00000000-0000-0000-0000-000000000000");
    fetchData();
  };

  useEffect(() => {
    if (authenticated) fetchData();
  }, [authenticated]);

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-[hsl(220,20%,10%)] flex items-center justify-center p-4">
        <form onSubmit={handleLogin} className="bg-[hsl(220,20%,15%)] rounded-2xl p-8 shadow-2xl max-w-sm w-full text-center">
          <Lock className="w-12 h-12 text-[hsl(36,100%,55%)] mx-auto mb-4" />
          <h1 className="text-2xl font-extrabold text-white mb-2">Dashboard</h1>
          <p className="text-sm text-gray-400 mb-6">Digite a senha para acessar</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Senha"
            className="w-full px-4 py-3 rounded-lg bg-[hsl(220,20%,20%)] text-white border border-gray-700 focus:border-[hsl(36,100%,55%)] focus:outline-none mb-4"
          />
          <button type="submit" className="w-full py-3 rounded-lg bg-[hsl(36,100%,55%)] text-black font-bold hover:opacity-90 transition">
            Entrar
          </button>
        </form>
      </div>
    );
  }

  const pieData = counts.filter((c) => c.count > 0).map((c) => ({
    name: EVENT_LABELS[c.event_type],
    value: c.count,
  }));

  const totalViews = counts.find((c) => c.event_type === "page_view")?.count || 0;
  const totalClicks = counts.filter((c) => c.event_type !== "page_view").reduce((s, c) => s + c.count, 0);
  const conversionRate = totalViews > 0 ? ((totalClicks / totalViews) * 100).toFixed(1) : "0";

  return (
    <div className="min-h-screen bg-[hsl(220,20%,10%)] text-white p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <a href="/" className="text-gray-400 hover:text-white transition">
              <ArrowLeft className="w-5 h-5" />
            </a>
            <h1 className="text-2xl md:text-3xl font-extrabold">📊 Dashboard de Métricas</h1>
          </div>
          <div className="flex gap-3">
            <button onClick={fetchData} disabled={loading} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[hsl(220,20%,20%)] hover:bg-[hsl(220,20%,25%)] transition text-sm">
              <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
              Atualizar
            </button>
            <button onClick={clearData} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-900/50 hover:bg-red-800/60 transition text-sm text-red-300">
              <Trash2 className="w-4 h-4" />
              Zerar Dados
            </button>
          </div>
        </div>

        {/* Metric Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {counts.map((c, i) => (
            <div key={c.event_type} className="bg-[hsl(220,20%,15%)] rounded-xl p-5 border border-gray-800">
              <div className="flex items-center gap-2 mb-2" style={{ color: COLORS[i] }}>
                {ICONS[c.event_type]}
                <span className="text-xs font-bold uppercase">{EVENT_LABELS[c.event_type]}</span>
              </div>
              <p className="text-3xl font-extrabold">{c.count}</p>
            </div>
          ))}
        </div>

        {/* Conversion Rate */}
        <div className="bg-[hsl(220,20%,15%)] rounded-xl p-5 border border-gray-800 mb-8 text-center">
          <p className="text-sm text-gray-400 mb-1">Taxa de Conversão (cliques / views)</p>
          <p className="text-4xl font-extrabold" style={{ color: COLORS[3] }}>{conversionRate}%</p>
        </div>

        {/* Charts */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Bar Chart */}
          <div className="bg-[hsl(220,20%,15%)] rounded-xl p-5 border border-gray-800">
            <h3 className="font-bold mb-4 text-sm uppercase text-gray-400">Eventos por Dia</h3>
            {dailyData.length > 0 ? (
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={dailyData}>
                  <XAxis dataKey="day" stroke="#666" fontSize={12} />
                  <YAxis stroke="#666" fontSize={12} />
                  <Tooltip contentStyle={{ background: "hsl(220,20%,15%)", border: "1px solid #333", borderRadius: "8px" }} />
                  <Bar dataKey="page_view" name="Views" fill={COLORS[0]} radius={[4, 4, 0, 0]} />
                  <Bar dataKey="click_basic" name="Básico" fill={COLORS[1]} radius={[4, 4, 0, 0]} />
                  <Bar dataKey="click_upsell" name="Upsell" fill={COLORS[2]} radius={[4, 4, 0, 0]} />
                  <Bar dataKey="click_premium" name="Premium" fill={COLORS[3]} radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <p className="text-gray-500 text-center py-16">Sem dados ainda</p>
            )}
          </div>

          {/* Pie Chart */}
          <div className="bg-[hsl(220,20%,15%)] rounded-xl p-5 border border-gray-800">
            <h3 className="font-bold mb-4 text-sm uppercase text-gray-400">Distribuição de Eventos</h3>
            {pieData.length > 0 ? (
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}>
                    {pieData.map((_, i) => (
                      <Cell key={i} fill={COLORS[i % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={{ background: "hsl(220,20%,15%)", border: "1px solid #333", borderRadius: "8px" }} />
                </PieChart>
              </ResponsiveContainer>
            ) : (
              <p className="text-gray-500 text-center py-16">Sem dados ainda</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
