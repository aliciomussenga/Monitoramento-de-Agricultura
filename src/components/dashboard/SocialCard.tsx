import React from 'react';
import { Users, GraduationCap, Lightbulb, Network, UserPlus, Headset } from 'lucide-react';
import { Badge } from '../shared/Badge';

export const SocialCard: React.FC = () => {
  // Parâmetros Sociais e Organizacionais do documento [cite: 44-50]
  const socialParams = [
    { label: 'Agricultores Activos', value: '1.240', unit: 'pess.', icon: <Users className="w-3 h-3" /> },
    { label: 'Escolas de Campo', value: '12', unit: 'activas', icon: <GraduationCap className="w-3 h-3" /> },
    { label: 'Acesso à Assistência', value: '85', unit: '%', icon: <Headset className="w-3 h-3" /> },
  ];

  return (
    <section className="bg-[#13192B] p-6 rounded-3xl border border-white/5 transition-all duration-500 hover:border-blue-500/40 hover:shadow-[0_30px_50px_-15px_rgba(37,99,235,0.3)] group">
      <div className="flex justify-between items-start mb-6 border-b border-white/5 pb-4">
        <h2 className="text-xl font-bold flex items-center gap-2 text-[#F3F4F6]">
          <Users className="w-5 h-5 text-[#8B5CF6]" /> 6. Social e Organização
        </h2>
        <Badge variant="purple">Pessoas</Badge>
      </div>

      <div className="grid grid-cols-1 gap-3 mb-6">
        {socialParams.map((item, i) => (
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

      {/* Adopção de Tecnologias e Inclusão */}
      <div className="space-y-5 bg-[#181D33]/60 p-4 rounded-2xl border border-white/5">
        <div>
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center gap-2">
              <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-[10px] text-[#8A91A5] uppercase font-bold tracking-widest">Adopção de Tecnologia</span>
            </div>
            <span className="text-xs font-mono font-bold text-amber-400">68%</span>
          </div>
          <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
            <div className="bg-amber-500 h-full w-[68%] shadow-[0_0_8px_rgba(245,158,11,0.4)]"></div>
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center gap-2">
              <UserPlus className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-[10px] text-[#8A91A5] uppercase font-bold tracking-widest">Inclusão Jovens/Mulheres</span>
            </div>
            <span className="text-xs font-mono font-bold text-cyan-400">42%</span>
          </div>
          <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
            <div className="bg-cyan-500 h-full w-[42%] shadow-[0_0_8px_rgba(6,182,212,0.4)]"></div>
          </div>
        </div>
      </div>

      {/* Grau de Organização */}
      <div className="mt-4 flex items-center justify-between bg-purple-500/5 p-3 rounded-xl border border-purple-500/10">
        <div className="flex items-center gap-2">
          <Network className="w-4 h-4 text-[#8B5CF6]" />
          <span className="text-[10px] text-[#F3F4F6] font-bold uppercase tracking-tighter">Grau de Organização</span>
        </div>
        <span className="text-[10px] font-bold text-purple-400 border border-purple-500/30 px-2 py-0.5 rounded">Cooperativas Ativas</span>
      </div>
    </section>
  );
};