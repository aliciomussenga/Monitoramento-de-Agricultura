import React from 'react';
import { Smartphone, Satellite, Map, Landmark, Activity } from 'lucide-react';
import { Badge } from '../shared/Badge';

export const SystemIntegration: React.FC = () => {
  const integrations = [
    { label: 'Extensão (ADECOS)', status: 'Online', icon: <Smartphone className="w-4 h-4" />, color: 'text-emerald-400' },
    { label: 'Satélites (NDVI)', status: 'Sync', icon: <Satellite className="w-4 h-4" />, color: 'text-cyan-400' },
    { label: 'SIG Provincial', status: 'Activo', icon: <Map className="w-4 h-4" />, color: 'text-blue-400' },
    { label: 'Caixas Comunitárias', status: 'Link', icon: <Landmark className="w-4 h-4" />, color: 'text-amber-400' },
  ];

  return (
    <section className="bg-[#13192B] p-6 rounded-3xl border border-white/5 transition-all duration-500 hover:border-blue-500/40 hover:shadow-[0_30px_50px_-15px_rgba(6,182,212,0.2)]">
      <div className="flex justify-between items-start mb-6 border-b border-white/5 pb-4">
        <h2 className="text-xl font-bold flex items-center gap-2 text-[#F3F4F6]">
          <Activity className="w-5 h-5 text-cyan-500 animate-pulse" /> Ecossistema Digital
        </h2>
        <Badge variant="aqua">Estratégico</Badge>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {integrations.map((item, i) => (
          <div key={i} className="bg-[#181D33]/60 p-4 rounded-2xl border border-white/5 flex flex-col gap-3 group/item hover:bg-[#181D33]/80 transition-colors">
            <div className={`${item.color} bg-current/10 p-2 rounded-lg w-fit`}>
              {item.icon}
            </div>
            <div>
              <p className="text-[10px] uppercase text-[#8A91A5] font-black tracking-tighter">{item.label}</p>
              <p className="text-xs font-mono font-bold text-white">{item.status}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-white/5">
        <p className="text-[10px] text-[#8A91A5] italic leading-relaxed text-center">
          Monitoramento Integrado: MOSAP III & SAMAP · Canal do Cafu
        </p>
      </div>
    </section>
  );
};