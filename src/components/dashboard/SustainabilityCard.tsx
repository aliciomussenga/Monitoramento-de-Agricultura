import React from 'react';
import { Leaf, Box, Droplets, ShieldCheck, Shovel, Wind } from 'lucide-react';
import { Badge } from '../shared/Badge';

export const SustainabilityCard: React.FC = () => {
  // Parâmetros Ambientais e de Sustentabilidade [cite: 51-57]
  const envParams = [
    { label: 'Cobertura Vegetal', value: 65, unit: '%', icon: <Leaf className="w-3 h-3" /> },
    { label: 'Uso de Insumos', value: 12.5, unit: 'kg/ha', icon: <Box className="w-3 h-3" /> },
    { label: 'Pegada Hídrica', value: 120, unit: 'L/kg', icon: <Droplets className="w-3 h-3" /> },
  ];

  return (
    <section className="bg-[#13192B] p-6 rounded-3xl border border-white/5 transition-all duration-500 hover:border-blue-500/40 hover:shadow-[0_30px_50px_-15px_rgba(37,99,235,0.3)] group">
      <div className="flex justify-between items-start mb-6 border-b border-white/5 pb-4">
        <h2 className="text-xl font-bold flex items-center gap-2 text-[#F3F4F6]">
          <Leaf className="w-5 h-5 text-emerald-400" /> 7. Sustentabilidade
        </h2>
        <Badge variant="emerald">Recursos</Badge>
      </div>

      {/* Indicadores Principais */}
      <div className="grid grid-cols-1 gap-3 mb-6">
        {envParams.map((item, i) => (
          <div key={i} className="flex justify-between items-center bg-[#181D33]/40 p-3 rounded-xl border border-white/[0.02]">
            <div className="flex items-center gap-2">
              <span className="text-emerald-400 opacity-70">{item.icon}</span>
              <span className="text-sm text-[#8A91A5] italic">{item.label}</span>
            </div>
            <span className="font-mono font-bold text-[#F3F4F6]">
              {item.value} <small className="opacity-60 text-[10px] uppercase">{item.unit}</small>
            </span>
          </div>
        ))}
      </div>

      {/* Resiliência e Erosão */}
      <div className="space-y-4 bg-[#181D33]/60 p-4 rounded-2xl border border-white/5 mb-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span className="text-[10px] text-[#8A91A5] uppercase font-bold tracking-widest">Resiliência Climática</span>
          </div>
          <span className="text-xs font-mono font-bold text-cyan-400">Alta</span>
        </div>
        
        <div>
          <div className="flex justify-between text-[10px] mb-1">
            <span className="text-[#8A91A5] uppercase">Taxa de Erosão do Solo</span>
            <span className="text-red-400 font-mono">Baixa (2.1%)</span>
          </div>
          <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
            <div className="bg-red-500/50 h-full w-[21%] shadow-[0_0_8px_rgba(239,68,68,0.3)]"></div>
          </div>
        </div>
      </div>

      {/* Práticas de Conservação */}
      <div className="mt-4 flex flex-col gap-2">
        <p className="text-[10px] text-[#8A91A5] uppercase font-bold tracking-tighter mb-1">Práticas de Conservação Activas</p>
        <div className="flex flex-wrap gap-2">
          {['Mulching', 'Agrofloresta', 'Rotação de Culturas'].map((pratica, idx) => (
            <span key={idx} className="text-[9px] font-bold text-emerald-400 bg-emerald-500/5 border border-emerald-500/20 px-2 py-1 rounded-md uppercase italic">
              {pratica}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};