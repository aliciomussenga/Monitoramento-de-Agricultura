import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

export const Header: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="max-w-7xl mx-auto mb-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
      <div>
        <div className="flex items-center gap-3 mb-3">
          <span className="bg-emerald-500 text-black text-[10px] font-black px-2 py-0.5 rounded tracking-widest uppercase">
            Sistema Integrado IDA
          </span>
          <span className="text-emerald-400 text-xs font-mono opacity-70">ID: AGRO-FAM-2026</span>
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight">
          Monitor 9 <span className="text-white/30 mx-2">·</span> 
          <span className="text-emerald-400">Agricultura Familiar</span>
        </h1>
        <p className="text-white/50 text-sm mt-2 max-w-xl italic">
          Monitoramento para projectos MOSAP, SAMAP e Canal do Cafu.
        </p>
      </div>

      <div className="bg-white/5 p-4 rounded-2xl border border-white/10 backdrop-blur-xl flex items-center gap-4">
        <div className="text-right border-r border-white/10 pr-4">
          <p className="text-[10px] text-white/40 font-bold uppercase mb-1">Data Local</p>
          <p className="text-xs font-medium uppercase">
            {currentTime.toLocaleDateString('pt-AO', { weekday: 'short', day: 'numeric', month: 'short' })}
          </p>
        </div>
        <div className="pl-2">
          <Clock className="w-4 h-4 text-emerald-400 mb-1 opacity-50" />
          <p className="text-2xl font-mono font-bold text-emerald-400 leading-none">
            {currentTime.toLocaleTimeString('pt-AO', { hour12: false })}
          </p>
        </div>
      </div>
    </header>
  );
};