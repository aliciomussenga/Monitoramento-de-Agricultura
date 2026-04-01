import React, { useState } from "react";
import {
  FlaskConical,
  Sun,
  Droplets,
  Leaf,
  TrendingUp,
  Users,
  FileText,
  ChevronRight,
} from "lucide-react";

// Importação dos Componentes
import { Header } from "./dashboard/Header";
import { StatCard } from "./dashboard/StatCard";
import { Badge } from "./shared/Badge";
import { AgroCard } from "./dashboard/AgroCard";
import { WaterMonitor } from "./dashboard/WaterMonitor";
import { LivestockCard } from "./dashboard/LivestockCard";
import { MarketCard } from "./dashboard/MarketCard";
import { SocialCard } from "./dashboard/SocialCard";
import { SustainabilityCard } from "./dashboard/SustainabilityCard";
import { ProjectManagementCard } from "./dashboard/ProjectManagementCard";

const MonitorAgro: React.FC = () => {
  const [activeTab, setActiveTab] = useState<
    "producao" | "recursos" | "economia" | "pessoas"
  >("producao");

  // 1. DEFINIÇÃO DOS DADOS (Certifique-se que estas variáveis existem)
  const agronomicsData = [
    { label: "Humidade do Solo", value: 24.5, unit: "%" },
    { label: "Temperatura Solo", value: 22.8, unit: "°C" },
    { label: "pH do Solo", value: 6.2, unit: "pH" },
    { label: "Vigor (NDVI)", value: 0.78, unit: "index" },
  ];

  const climateData = [
    { label: "Precipitação", value: 12.4, unit: "mm" },
    { label: "Temp. Ar", value: 31.2, unit: "°C" },
    { label: "Humidade Rel.", value: 68, unit: "%" },
    { label: "Radiação", value: 850, unit: "W/m²" },
  ];

  return (
    <div className="min-h-screen bg-[#0B101D] text-[#F3F4F6] p-4 md:p-8 font-sans antialiased">
      <Header />

      {/* Navegação por Tabs */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="flex flex-wrap gap-2 p-2 bg-[#13192B] rounded-2xl border border-white/5 backdrop-blur-xl">
          <button
            onClick={() => setActiveTab("producao")}
            className={`flex-1 flex items-center justify-center gap-3 px-4 py-4 rounded-xl transition-all ${activeTab === "producao" ? "bg-cyan-500/10 border border-cyan-500/50 text-cyan-400" : "text-[#8A91A5] hover:bg-white/5"}`}
          >
            <Leaf className="w-4 h-4" />{" "}
            <span className="text-xs font-bold uppercase tracking-widest">
              Produção
            </span>
          </button>
          <button
            onClick={() => setActiveTab("recursos")}
            className={`flex-1 flex items-center justify-center gap-3 px-4 py-4 rounded-xl transition-all ${activeTab === "recursos" ? "bg-blue-500/10 border border-blue-500/50 text-blue-400" : "text-[#8A91A5] hover:bg-white/5"}`}
          >
            <Droplets className="w-4 h-4" />{" "}
            <span className="text-xs font-bold uppercase tracking-widest">
              Recursos
            </span>
          </button>
          <button
            onClick={() => setActiveTab("economia")}
            className={`flex-1 flex items-center justify-center gap-3 px-4 py-4 rounded-xl transition-all ${activeTab === "economia" ? "bg-amber-500/10 border border-amber-500/50 text-amber-400" : "text-[#8A91A5] hover:bg-white/5"}`}
          >
            <TrendingUp className="w-4 h-4" />{" "}
            <span className="text-xs font-bold uppercase tracking-widest">
              Economia
            </span>
          </button>
          <button
            onClick={() => setActiveTab("pessoas")}
            className={`flex-1 flex items-center justify-center gap-3 px-4 py-4 rounded-xl transition-all ${activeTab === "pessoas" ? "bg-purple-500/10 border border-purple-500/50 text-purple-400" : "text-[#8A91A5] hover:bg-white/5"}`}
          >
            <Users className="w-4 h-4" />{" "}
            <span className="text-xs font-bold uppercase tracking-widest">
              Pessoas
            </span>
          </button>
        </div>
      </div>

      <main className="max-w-7xl mx-auto min-h-[50vh]">
        {/* VIEW: PRODUÇÃO */}
        {activeTab === "producao" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-500">
            {/* CORREÇÃO AQUI: Passando agronomicsData para a prop data */}
            <AgroCard
              title="1. Agronómicos"
              icon={<FlaskConical className="w-5 h-5 text-cyan-400" />}
              data={agronomicsData}
              badgeText="Produção"
              variant="aqua"
            />
            <LivestockCard />
            <SustainabilityCard />
          </div>
        )}

        {/* VIEW: RECURSOS */}
        {activeTab === "recursos" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-500">
            {/* CORREÇÃO AQUI: Passando climateData para a prop data */}
            <AgroCard
              title="2. Climáticos"
              icon={<Sun className="w-5 h-5 text-amber-400" />}
              data={climateData}
              badgeText="Recursos"
              variant="amber"
            />
            <WaterMonitor volume={450} percent={88.2} />
            <SustainabilityCard />
          </div>
        )}

        {/* VIEW: ECONOMIA (Custos, Rendimentos e Mercado) */}
        {activeTab === "economia" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Card de Mercado (Já configurado com os parâmetros do documento) */}
            <MarketCard />

            {/* Card de Gestão de Projecto */}
            <ProjectManagementCard />

            {/* CORREÇÃO: Card de Rendimento Detalhado */}
            <section className="bg-[#13192B] p-6 rounded-3xl border border-white/5 transition-all duration-500 hover:border-blue-500/40 hover:shadow-[0_30px_50px_-15px_rgba(37,99,235,0.3)]">
              <div className="flex justify-between items-start mb-6 border-b border-white/5 pb-4">
                <h2 className="text-xl font-bold flex items-center gap-2 text-[#F3F4F6]">
                  <TrendingUp className="w-5 h-5 text-emerald-400" /> Rendimento
                </h2>
                <Badge variant="aqua">Kz/ha</Badge>
              </div>

              <div className="flex flex-col justify-center items-center py-8">
                <div className="text-4xl font-mono font-black text-emerald-400 mb-2">
                  280.500 <small className="text-xs text-[#8A91A5]">Kz</small>
                </div>
                <p className="text-[10px] text-[#8A91A5] uppercase tracking-[0.2em] font-bold">
                  Rendimento Médio por Hectare
                </p>

                <div className="mt-8 w-full space-y-3">
                  <div className="flex justify-between text-[10px] uppercase font-bold tracking-tighter">
                    <span className="text-[#8A91A5]">Meta do Projecto</span>
                    <span className="text-white">350.000 Kz</span>
                  </div>
                  <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                    <div className="bg-emerald-500 h-full w-[80%] shadow-[0_0_15px_rgba(16,185,129,0.4)]"></div>
                  </div>
                  <p className="text-[9px] text-[#8A91A5] italic text-center">
                    80% da meta atingida nesta campanha
                  </p>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* VIEW: PESSOAS (Organização, Inclusão e Extensão Rural) */}
        {activeTab === "pessoas" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Parâmetros Sociais (Agricultores, Jovens, Mulheres) */}
            <SocialCard />

            {/* Gestão de Projecto (Resultados e Satisfação) */}
            <ProjectManagementCard />

            {/* NOVO: Card de Monitorização ADECOS (Extensão Rural) */}
            <section className="bg-[#13192B] p-6 rounded-3xl border border-white/5 transition-all duration-500 hover:border-blue-500/40 hover:shadow-[0_30px_50px_-15px_rgba(37,99,235,0.3)]">
              <div className="flex justify-between items-start mb-6 border-b border-white/5 pb-4">
                <h2 className="text-xl font-bold flex items-center gap-2 text-[#F3F4F6]">
                  <Users className="w-5 h-5 text-purple-400" /> Rede ADECOS
                </h2>
                <Badge variant="purple">Extensão</Badge>
              </div>

              <div className="space-y-4">
                <div className="bg-[#181D33]/40 p-4 rounded-2xl border border-white/[0.02]">
                  <p className="text-[10px] text-[#8A91A5] uppercase font-bold tracking-widest mb-3">
                    Cobertura de Assistência
                  </p>
                  <div className="flex items-end gap-2 mb-2">
                    <span className="text-3xl font-mono font-bold text-white">
                      85
                    </span>
                    <span className="text-purple-400 font-bold mb-1">%</span>
                  </div>
                  <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-purple-500 h-full w-[85%] shadow-[0_0_10px_rgba(168,85,247,0.4)]"></div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-[#181D33]/60 p-3 rounded-xl border border-white/5">
                    <p className="text-[9px] uppercase text-[#8A91A5] mb-1">
                      Visitas/Mês
                    </p>
                    <p className="text-sm font-bold text-white">342</p>
                  </div>
                  <div className="bg-[#181D33]/60 p-3 rounded-xl border border-white/5">
                    <p className="text-[9px] uppercase text-[#8A91A5] mb-1">
                      Formações
                    </p>
                    <p className="text-sm font-bold text-white">18</p>
                  </div>
                </div>

                <div className="mt-2 p-3 bg-purple-500/5 border border-purple-500/10 rounded-xl flex items-center gap-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                  <p className="text-[10px] text-[#8A91A5] italic">
                    Sincronização activa com tablets de campo (Offline-first)
                  </p>
                </div>
              </div>
            </section>
          </div>
        )}
      </main>

      <footer className="max-w-7xl mx-auto mt-12 italic">
        <p className="text-center text-[10px] text-[#8A91A5]/30 tracking-[0.4em] uppercase font-bold">
          Instituto de Desenvolvimento Agrário · Angola 2026
        </p>
      </footer>
    </div>
  );
};

export default MonitorAgro;
