import React from 'react';
import { Activity, MapPin, Scale, TrendingUp, Utensils, ShieldAlert } from 'lucide-react';
import { Badge } from '../shared/Badge';

export const LivestockCard: React.FC = () => {
  // Dados baseados nos parâmetros do documento [cite: 29-35]
  const livestockParams = [
    { label: 'Peso Médio', value: 450, unit: 'kg', icon: <Scale className="w-3 h-3" /> },
    { label: 'Taxa de Crescimento', value: 1.2, unit: 'kg/dia', icon: <TrendingUp className="w-3 h-3" /> },
    { label: 'Consumo de Ração', value: 15, unit: 'kg/dia', icon: <Utensils className="w-3 h-3" /> },
  ];

  return (
    <section className="bg-[#13192B] p-6 rounded-3xl border border-white/5 transition-all duration-500 hover:border-blue-500/40 hover:shadow-[0_30px_50px_-15px_rgba(37,99,235,0.3)] group">
      <div className="flex justify-between items-start mb-6 border-b border-white/5 pb-4">
        <h2 className="text-xl font-bold flex items-center gap-2 text-[#F3F4F6]">
          <Activity className="w-5 h-5 text-[#8B5CF6]" />Pecuária
        </h2>
        <Badge variant="purple">Produção</Badge>
      </div>

      <div className="grid grid-cols-1 gap-3 mb-4">
        {livestockParams.map((item, i) => (
          <div key={i} className="flex justify-between items-center bg-[#181D33]/40 p-3 rounded-xl border border-white/[0.02]">
            <div className="flex items-center gap-2">
              <span className="text-[#8B5CF6] opacity-70">{item.icon}</span>
              <span className="text-sm text-[#8A91A5] italic">{item.label}</span>
            </div>
            <span className="font-mono font-bold text-[#F3F4F6]">
              {item.value} <small className="opacity-60 text-[10px] uppercase">{item.unit}</small>
            </span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="bg-[#181D33]/60 p-3 rounded-xl border border-white/5">
          <div className="flex items-center gap-1 mb-1">
            <ShieldAlert className="w-3 h-3 text-emerald-400" />
            <p className="text-[9px] uppercase text-[#8A91A5] tracking-wider">Estado Sanitário</p>
          </div>
          <p className="text-xs font-bold text-emerald-400">Vacinação em Dia</p>
        </div>

        <div className="bg-[#181D33]/60 p-3 rounded-xl border border-white/5">
          <div className="flex items-center gap-1 mb-1">
            <Activity className="w-3 h-3 text-red-400" />
            <p className="text-[9px] uppercase text-[#8A91A5] tracking-wider">Mortalidade</p>
          </div>
          <p className="text-xs font-bold text-red-400">1.2%</p>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between bg-purple-500/5 p-2 rounded-lg border border-purple-500/10">
        <div className="flex items-center gap-2">
          <MapPin className="w-3 h-3 text-[#8B5CF6]" />
          <span className="text-[10px] text-[#8A91A5] uppercase font-bold tracking-tighter">Localização GPS</span>
        </div>
        <span className="text-[10px] font-mono text-[#8B5CF6]">Lat: -8.839 | Long: 13.289</span>
      </div>
    </section>
  );
};