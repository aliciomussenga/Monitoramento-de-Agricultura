import React from 'react';
import { Droplets, MapPin } from 'lucide-react';
import { Badge } from '../shared/Badge';

interface WaterMonitorProps {
  volume: number; // m³/ha [cite: 23]
  percent: number;
}

export const WaterMonitor: React.FC<WaterMonitorProps> = ({ volume, percent }) => (
  <section className="
    bg-[#13192B] p-6 rounded-3xl border border-white/5 border-l-4 border-l-blue-500
    transition-all duration-500 ease-in-out
    hover:border-blue-500/40 hover:shadow-[0_10px_15px_-5px_rgba(37,99,235,0.3)]
  ">
    <div className="flex justify-between items-start mb-6">
      <h2 className="text-xl font-bold flex items-center gap-2">
        <Droplets className="w-5 h-5 text-blue-400" />Água e Irrigação
      </h2>
      <Badge variant="blue">Recursos</Badge>
    </div>
    <div className="space-y-5">
      <div className="flex justify-between items-end">
        <div>
          <p className="text-[10px] text-white/40 uppercase">Volume (Cafu) </p>
          <p className="text-xl font-bold tracking-tighter">
            {volume} <span className="text-xs font-normal text-white/50">m³/ha</span>
          </p>
        </div>
        <p className="text-xs font-mono text-blue-400 font-bold">{percent}%</p>
      </div>
      <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
        <div 
          className="bg-blue-500 h-full rounded-full shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-all duration-700" 
          style={{ width: `${percent}%` }}
        ></div>
      </div>
      <div className="flex items-center gap-2 text-[10px] text-white/40 bg-white/5 p-2 rounded-lg">
        <MapPin className="w-3 h-3 text-blue-400" />
        <span className="italic">Monitoramento via Satélite Activo [cite: 70]</span>
      </div>
    </div>
  </section>
);