import React from 'react';

interface StatCardProps {
  title: string;
  desc: string;
  color: string;
  borderColor: string;
}

export const StatCard: React.FC<StatCardProps> = ({ title, desc, color, borderColor }) => (
  <div className={`
    bg-[#13192B] backdrop-blur-md p-5 rounded-2xl border border-white/5 
    ${borderColor} border-b-4 transition-all duration-500 ease-out
    hover:border-blue-500/40 hover:shadow-[0_10px_15px_-5px_rgba(37,99,235,0.2)]
    hover:-translate-y-1 cursor-pointer
  `}>
    <h3 className={`font-bold text-lg ${color} tracking-tight`}>{title}</h3>
    <p className="text-xs text-[#8A91A5] italic">{desc}</p>
  </div>
);