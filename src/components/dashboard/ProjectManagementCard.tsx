import React from 'react';
import { 
  ClipboardCheck, 
  BarChart, 
  PieChart, 
  CheckCircle2, 
  SmilePlus, 
  CalendarClock,
  TrendingUp
} from 'lucide-react';
import { Badge } from '../shared/Badge';

export const ProjectManagementCard: React.FC = () => {
  // Parâmetros de Gestão e Monitoramento do Projecto [cite: 58-64]
  const projectStats = [
    { label: 'Actividades Realizadas', value: '24', unit: 'total', icon: <CheckCircle2 className="w-3 h-3 text-emerald-400" /> },
    { label: 'Satisfação Beneficiários', value: '92', unit: '%', icon: <SmilePlus className="w-3 h-3 text-cyan-400" /> },
  ];

  return (
    <section className="bg-[#13192B] p-6 rounded-3xl border border-white/5 transition-all duration-500 hover:border-blue-500/40 hover:shadow-[0_30px_50px_-15px_rgba(37,99,235,0.3)] group">
      <div className="flex justify-between items-start mb-6 border-b border-white/5 pb-4">
        <h2 className="text-xl font-bold flex items-center gap-2 text-[#F3F4F6]">
          <ClipboardCheck className="w-5 h-5 text-blue-400" /> 8. Gestão do Projecto
        </h2>
        <Badge variant="blue">Institucional</Badge>
      </div>

      {/* Execução Física e Financeira  */}
      <div className="space-y-5 mb-6">
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-[10px] text-[#8A91A5] uppercase font-bold tracking-widest">Execução Física</span>
            <span className="text-xs font-mono font-bold text-blue-400">75%</span>
          </div>
          <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
            <div className="bg-blue-500 h-full w-[75%] shadow-[0_0_10px_rgba(59,130,246,0.4)]"></div>
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-[10px] text-[#8A91A5] uppercase font-bold tracking-widest">Execução Financeira</span>
            <span className="text-xs font-mono font-bold text-emerald-400">62%</span>
          </div>
          <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
            <div className="bg-emerald-500 h-full w-[62%] shadow-[0_0_10px_rgba(16,185,129,0.3)]"></div>
          </div>
        </div>
      </div>

      {/* Indicadores de Resultados e Cronograma [cite: 61, 62, 64] */}
      <div className="grid grid-cols-1 gap-3 mb-4">
        {projectStats.map((item, i) => (
          <div key={i} className="flex justify-between items-center bg-[#181D33]/40 p-3 rounded-xl border border-white/[0.02]">
            <div className="flex items-center gap-2">
              {item.icon}
              <span className="text-sm text-[#8A91A5] italic">{item.label}</span>
            </div>
            <span className="font-mono font-bold text-[#F3F4F6]">
              {item.value} <small className="opacity-60 text-[10px] uppercase">{item.unit}</small>
            </span>
          </div>
        ))}
      </div>

      {/* Cumprimento de Cronograma e Resultados [cite: 62, 64] */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between bg-blue-500/5 p-3 rounded-xl border border-blue-500/10">
          <div className="flex items-center gap-2">
            <CalendarClock className="w-4 h-4 text-blue-400" />
            <span className="text-[10px] text-[#F3F4F6] font-bold uppercase tracking-tighter">Cumprimento de Cronograma</span>
          </div>
          <span className="text-[10px] font-bold text-blue-400">Em Dia</span>
        </div>

        <div className="flex items-center justify-between bg-emerald-500/5 p-3 rounded-xl border border-emerald-500/10">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-emerald-400" />
            <span className="text-[10px] text-[#F3F4F6] font-bold uppercase tracking-tighter">Indicadores de Resultados</span>
          </div>
          <span className="text-[10px] font-bold text-emerald-400">Meta Atingida</span>
        </div>
      </div>
    </section>
  );
};