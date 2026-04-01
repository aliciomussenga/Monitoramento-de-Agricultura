import React from 'react';
import { TrendingUp, DollarSign, ShoppingCart, Landmark, Receipt, BarChart3 } from 'lucide-react';
import { Badge } from '../shared/Badge';

export const MarketCard: React.FC = () => {
  // Dados baseados nos parâmetros económicos do documento [cite: 37-41]
  const economicParams = [
    { label: 'Custos de Produção', value: '145.000', unit: 'Kz/ha', icon: <Receipt className="w-3 h-3" /> },
    { label: 'Receitas por Cultura', value: '280.500', unit: 'Kz', icon: <DollarSign className="w-3 h-3" /> },
    { label: 'Volume de Vendas', value: '1.200', unit: 'kg', icon: <ShoppingCart className="w-3 h-3" /> },
  ];

  return (
    <section className="bg-[#13192B] p-6 rounded-3xl border border-white/5 transition-all duration-500 hover:border-blue-500/40 hover:shadow-[0_30px_50px_-15px_rgba(37,99,235,0.3)] group">
      <div className="flex justify-between items-start mb-6 border-b border-white/5 pb-4">
        <h2 className="text-xl font-bold flex items-center gap-2 text-[#F3F4F6]">
          <TrendingUp className="w-5 h-5 text-[#F59E0B]" />Economia e Mercado
        </h2>
        <Badge variant="amber">Economia</Badge>
      </div>

      <div className="grid grid-cols-1 gap-3 mb-6">
        {economicParams.map((item, i) => (
          <div key={i} className="flex justify-between items-center bg-[#181D33]/40 p-3 rounded-xl border border-white/[0.02] hover:bg-[#181D33]/60 transition-colors">
            <div className="flex items-center gap-2">
              <span className="text-[#F59E0B] opacity-70">{item.icon}</span>
              <span className="text-sm text-[#8A91A5] italic">{item.label}</span>
            </div>
            <span className="font-mono font-bold text-[#F3F4F6]">
              {item.value} <small className="opacity-60 text-[10px] uppercase">{item.unit}</small>
            </span>
          </div>
        ))}
      </div>

      {/* Margem de Lucro e Preços em Tempo Real [cite: 39, 40] */}
      <div className="space-y-4 bg-[#181D33]/60 p-4 rounded-2xl border border-white/5 mb-4">
        <div className="flex justify-between items-end">
          <div className="flex items-center gap-2">
            <BarChart3 className="w-4 h-4 text-emerald-400" />
            <span className="text-[10px] text-[#8A91A5] uppercase font-bold tracking-widest">Margem de Lucro</span>
          </div>
          <span className="text-lg font-mono font-bold text-emerald-400">32.8%</span>
        </div>
        <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
          <div className="bg-emerald-500 h-full w-[32.8%] shadow-[0_0_10px_rgba(16,185,129,0.3)] transition-all duration-1000"></div>
        </div>
        <p className="text-[10px] text-[#8A91A5] text-center italic">
          Preços de mercado actualizados em tempo real via plataforma digital 
        </p>
      </div>

      {/* Acesso a Financiamento  */}
      <div className="flex items-center justify-between bg-amber-500/5 p-3 rounded-xl border border-amber-500/10">
        <div className="flex items-center gap-2">
          <Landmark className="w-4 h-4 text-[#F59E0B]" />
          <span className="text-[10px] text-[#F3F4F6] font-bold uppercase tracking-tighter">Acesso a Financiamento</span>
        </div>
        <span className="text-[10px] font-bold text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded">Aprovado</span>
      </div>
    </section>
  );
};