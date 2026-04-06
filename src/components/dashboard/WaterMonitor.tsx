import React from 'react';
import { Droplets, MapPin, Activity, Waves, Gauge } from 'lucide-react';
import { Badge } from '../shared/Badge';

interface WaterMonitorProps {
  volume: number; // m³/ha
  percent: number; // Nível de reservatórios/canais
}

export const WaterMonitor: React.FC<WaterMonitorProps> = ({ volume, percent }) => (
  <section className="
    bg-[#13192B] p-6 rounded-3xl border border-white/5 border-l-4 border-l-blue-500
    transition-all duration-500 ease-in-out
    hover:border-blue-500/40 hover:shadow-[0_30px_50px_-15px_rgba(37,99,235,0.3)]
    group
  ">
    <div className="flex justify-between items-start mb-6 border-b border-white/5 pb-4">
      <h2 className="text-xl font-bold flex items-center gap-2 text-[#F3F4F6]">
        <Droplets className="w-5 h-5 text-blue-400" /> 3. Irrigação e Água
      </h2>
      <Badge variant="blue">Recursos</Badge>
    </div>

    <div className="space-y-6">
      {/* Volume e Nível do Canal (Cafu) */}
      <div className="space-y-2">
        <div className="flex justify-between items-end">
          <div>
            <p className="text-[10px] text-[#8A91A5] uppercase font-bold tracking-widest">Nível de Canais / Cafu</p>
            <p className="text-2xl font-black text-white tracking-tighter">
              {volume} <span className="text-xs font-normal text-[#8A91A5]">m³/ha</span>
            </p>
          </div>
          <div className="text-right">
            <span className="text-xs font-mono text-blue-400 font-bold bg-blue-500/10 px-2 py-1 rounded">{percent}%</span>
          </div>
        </div>
        <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
          <div 
            className="bg-blue-500 h-full rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all duration-1000 ease-out" 
            style={{ width: `${percent}%` }}
          ></div>
        </div>
      </div>

      {/* Grid de Qualidade e Eficiência */}
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-[#181D33]/40 p-3 rounded-xl border border-white/[0.02]">
          <div className="flex items-center gap-2 mb-1">
            <Activity className="w-3 h-3 text-emerald-400" />
            <span className="text-[9px] text-[#8A91A5] uppercase font-bold">Qualidade (pH)</span>
          </div>
          <p className="text-sm font-bold text-white">6.8 <span className="text-[10px] font-normal text-[#8A91A5]">pH</span></p>
        </div>
        
        <div className="bg-[#181D33]/40 p-3 rounded-xl border border-white/[0.02]">
          <div className="flex items-center gap-2 mb-1">
            <Waves className="w-3 h-3 text-cyan-400" />
            <span className="text-[9px] text-[#8A91A5] uppercase font-bold">Salinidade</span>
          </div>
          <p className="text-sm font-bold text-white">0.4 <span className="text-[10px] font-normal text-[#8A91A5]">dS/m</span></p>
        </div>
      </div>

      {/* Frequência e Eficiência */}
      <div className="flex justify-between items-center py-2 border-t border-white/5">
        <div className="flex items-center gap-2">
          <Gauge className="w-4 h-4 text-blue-500/50" />
          <span className="text-[10px] text-[#8A91A5] uppercase">Eficiência da Rega</span>
        </div>
        <span className="text-xs font-bold text-emerald-400">92%</span>
      </div>

      <div className="flex items-center gap-2 text-[10px] text-[#8A91A5] bg-white/5 p-3 rounded-xl border border-white/5 italic">
        <MapPin className="w-3 h-3 text-blue-400" />
        <span>Frequência: 3x por semana (Sector Sul)</span>
      </div>
    </div>
  </section>
);