import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { Eye, MousePointer, ShoppingCart, Trash2, RefreshCw, ArrowLeft, Clock } from "lucide-react";

const COLORS = ["hsl(36,100%,55%)", "hsl(174,62%,47%)", "hsl(145,65%,42%)", "hsl(340,82%,55%)"];

const EVENT_LABELS: Record<string, string> = {
  page_view: "Visualizações",
  click_buy: "Cliques Comprar",
  click_basic: "Cliques Básico (legado)",
  click_upsell: "Cliques Upsell (legado)",
  click_premium: "Cliques Premium (legado)",
  click_basic_upsell: "Cliques Básico Upsell (legado)",
};

const ICONS: Record<string, React.ReactNode> = {
  page_view: <Eye className="w-6 h-6" />,
  click_buy: <ShoppingCart className="w-6 h-6" />,
  click_basic: <MousePointer className="w-6 h-6" />,
  click_upsell: <MousePointer className="w-6 h-6" />,
  click_premium: <MousePointer className="w-6 h-6" />,
  click_basic_upsell: <MousePointer className="w-6 h-6" />,
};

interface SiteEvent {
  id: string;
  event_type: string;
  created_at: string;
  page_url: string | null;
}

interface EventCount {
  event_type: string;
  count: number;
}

const Dashboard = () => {
  const [counts, setCounts] = useState<EventCount[]>([]);
  const [dailyData, setDailyData] = useState<any[]>([]);
  const [recentEvents, setRecentEvents] = useState<SiteEvent[]>([]);
  const [hourlyData, setHourlyData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);

    const { data: events } = await supabase
      .from("site_events")
      .select("id, event_type, created_at, page_url")
      .order("created_at", { ascending: false })
      .limit(1000);

    if (events) {
      // Counts
      const countMap: Record<string, number> = {};
      const dailyMap: Record<string, Record<string, number>> = {};
      const hourMap: Record<number, number> = {};

      events.forEach((e) => {
        countMap[e.event_type] = (countMap[e.event_type] || 0) + 1;

        const date = new Date(e.created_at);
        const day = date.toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit" });
        if (!dailyMap[day]) dailyMap[day] = {};
        dailyMap[day][e.event_type] = (dailyMap[day][e.event_type] || 0) + 1;

        const hour = date.getHours();
        hourMap[hour] = (hourMap[hour] || 0) + 1;
      });

      // All unique event types found
      const allTypes = [...new Set(events.map((e) => e.event_type))];

      setCounts(
        allTypes.map((t) => ({
          event_type: t,
          count: countMap[t] || 0,
        })).sort((a, b) => b.count - a.count)
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

      // Hourly data
      const hourlyArr = Array.from({ length: 24 }, (_, h) => ({
        hora: `${h.toString().padStart(2, "0")}h`,
        eventos: hourMap[h] || 0,
      }));
      setHourlyData(hourlyArr);

      // Recent events (last 30)
      setRecentEvents(events.slice(0, 30));
    }

    setLoading(false);
  };

  const clearData = async () => {
    if (!confirm("Tem certeza que deseja ZERAR todos os dados?")) return;
    await supabase.from("site_events").delete().neq("id", "00000000-0000-0000-0000-000000000000");
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  const pieData = counts.filter((c) => c.count > 0).map((c) => ({
    name: EVENT_LABELS[c.event_type] || c.event_type,
    value: c.count,
  }));

  const totalViews = counts.find((c) => c.event_type === "page_view")?.count || 0;
  const totalClicks = counts.filter((c) => c.event_type !== "page_view").reduce((s, c) => s + c.count, 0);
  const conversionRate = totalViews > 0 ? ((totalClicks / totalViews) * 100).toFixed(1) : "0";

  const formatTime = (dateStr: string) => {
    const d = new Date(dateStr);
    return d.toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit" }) + " às " +
      d.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit", second: "2-digit" });
  };

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
          {counts.slice(0, 4).map((c, i) => (
            <div key={c.event_type} className="bg-[hsl(220,20%,15%)] rounded-xl p-5 border border-gray-800">
              <div className="flex items-center gap-2 mb-2" style={{ color: COLORS[i % COLORS.length] }}>
                {ICONS[c.event_type] || <MousePointer className="w-6 h-6" />}
                <span className="text-xs font-bold uppercase">{EVENT_LABELS[c.event_type] || c.event_type}</span>
              </div>
              <p className="text-3xl font-extrabold">{c.count}</p>
            </div>
          ))}
        </div>

        {/* Conversion Rate */}
        <div className="bg-[hsl(220,20%,15%)] rounded-xl p-5 border border-gray-800 mb-8 text-center">
          <p className="text-sm text-gray-400 mb-1">Taxa de Conversão (cliques / views)</p>
          <p className="text-4xl font-extrabold" style={{ color: COLORS[2] }}>{conversionRate}%</p>
        </div>

        {/* Charts Row */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Bar Chart - Eventos por dia */}
          <div className="bg-[hsl(220,20%,15%)] rounded-xl p-5 border border-gray-800">
            <h3 className="font-bold mb-4 text-sm uppercase text-gray-400">Eventos por Dia</h3>
            {dailyData.length > 0 ? (
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={dailyData}>
                  <XAxis dataKey="day" stroke="#666" fontSize={12} />
                  <YAxis stroke="#666" fontSize={12} />
                  <Tooltip contentStyle={{ background: "hsl(220,20%,15%)", border: "1px solid #333", borderRadius: "8px", color: "#fff" }} />
                  <Bar dataKey="page_view" name="Views" fill={COLORS[0]} radius={[4, 4, 0, 0]} />
                  <Bar dataKey="click_buy" name="Comprar" fill={COLORS[2]} radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <p className="text-gray-500 text-center py-16">Sem dados ainda</p>
            )}
          </div>

          {/* Bar Chart - Horário dos eventos */}
          <div className="bg-[hsl(220,20%,15%)] rounded-xl p-5 border border-gray-800">
            <h3 className="font-bold mb-4 text-sm uppercase text-gray-400">
              <Clock className="w-4 h-4 inline mr-1 -mt-0.5" />
              Eventos por Horário
            </h3>
            {hourlyData.some((h) => h.eventos > 0) ? (
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={hourlyData}>
                  <XAxis dataKey="hora" stroke="#666" fontSize={10} />
                  <YAxis stroke="#666" fontSize={12} />
                  <Tooltip contentStyle={{ background: "hsl(220,20%,15%)", border: "1px solid #333", borderRadius: "8px", color: "#fff" }} />
                  <Bar dataKey="eventos" name="Eventos" fill={COLORS[1]} radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <p className="text-gray-500 text-center py-16">Sem dados ainda</p>
            )}
          </div>
        </div>

        {/* Pie + Distribution */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
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
                  <Tooltip contentStyle={{ background: "hsl(220,20%,15%)", border: "1px solid #333", borderRadius: "8px", color: "#fff" }} />
                </PieChart>
              </ResponsiveContainer>
            ) : (
              <p className="text-gray-500 text-center py-16">Sem dados ainda</p>
            )}
          </div>

          {/* Todos os tipos de evento */}
          <div className="bg-[hsl(220,20%,15%)] rounded-xl p-5 border border-gray-800">
            <h3 className="font-bold mb-4 text-sm uppercase text-gray-400">Todos os Eventos</h3>
            <div className="space-y-3">
              {counts.map((c, i) => (
                <div key={c.event_type} className="flex items-center justify-between bg-white/5 rounded-lg px-4 py-3">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ background: COLORS[i % COLORS.length] }} />
                    <span className="text-sm font-semibold">{EVENT_LABELS[c.event_type] || c.event_type}</span>
                  </div>
                  <span className="text-lg font-extrabold">{c.count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Eventos Recentes com Horário */}
        <div className="bg-[hsl(220,20%,15%)] rounded-xl p-5 border border-gray-800">
          <h3 className="font-bold mb-4 text-sm uppercase text-gray-400">
            <Clock className="w-4 h-4 inline mr-1 -mt-0.5" />
            Últimos 30 Eventos (com horário)
          </h3>
          {recentEvents.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-gray-400 border-b border-gray-800">
                    <th className="text-left py-2 px-3">Evento</th>
                    <th className="text-left py-2 px-3">Data & Horário</th>
                  </tr>
                </thead>
                <tbody>
                  {recentEvents.map((e) => (
                    <tr key={e.id} className="border-b border-gray-800/50 hover:bg-white/5 transition">
                      <td className="py-2.5 px-3">
                        <span className="inline-flex items-center gap-1.5 bg-white/10 rounded-md px-2 py-1 text-xs font-bold">
                          {EVENT_LABELS[e.event_type] || e.event_type}
                        </span>
                      </td>
                      <td className="py-2.5 px-3 text-gray-300 font-mono text-xs">
                        {formatTime(e.created_at)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-gray-500 text-center py-8">Nenhum evento registrado</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
