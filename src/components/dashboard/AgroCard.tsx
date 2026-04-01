import React from 'react';
import { Badge } from '../shared/Badge';

interface AgroData {
  label: string;
  value: string | number;
  unit?: string;
}

interface AgroCardProps {
  title: string;
  icon: React.ReactNode;
  data: AgroData[];
  badgeText: string;
  variant: 'aqua' | 'amber';
}

export const AgroCard: React.FC<AgroCardProps> = ({ title, icon, data, badgeText, variant }) => (
  <section className="
    bg-[#13192B] p-6 rounded-3xl border border-white/5 relative overflow-hidden 
    transition-all duration-500 ease-in-out
    hover:border-blue-500/40 hover:shadow-[0_30px_50px_-15px_rgba(37,99,235,0.3)]
    group shadow-lg shadow-black/20
  ">
    <div className="flex justify-between items-start mb-6 border-b border-white/5 pb-4">
      <h2 className="text-xl font-extrabold flex items-center gap-2 text-[#F3F4F6] tracking-tight">
        {icon} {title}
      </h2>
      <Badge variant={variant}>{badgeText}</Badge>
    </div>
    
    <div className="grid grid-cols-1 gap-3">
      {/* CORREÇÃO: Uso de Optional Chaining (?.) para evitar o erro de 'undefined' */}
      {data?.map((item, i) => (
        <div 
          key={i} 
          className="flex justify-between items-center bg-[#181D33]/40 p-3 rounded-xl border border-white/[0.02] hover:bg-[#181D33]/80 transition-colors"
        >
          <span className="text-sm text-[#8A91A5] italic">{item.label}</span>
          <span className={`font-mono font-bold ${variant === 'aqua' ? 'text-[#14B8A6]' : 'text-[#F59E0B]'}`}>
            {item.value} <small className="opacity-60 text-[10px]">{item.unit}</small>
          </span>
        </div>
      ))}

      {/* Caso o array de dados esteja vazio ou não chegue, exibe um estado de fallback discreto */}
      {(!data || data.length === 0) && (
        <div className="py-4 text-center">
          <p className="text-xs text-[#8A91A5] opacity-50 italic">A aguardar dados técnicos...</p>
        </div>
      )}
    </div>
  </section>
);