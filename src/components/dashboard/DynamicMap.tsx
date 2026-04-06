import React from 'react';
import { Map as MapIcon, Maximize2, Layers, Navigation, Radio } from 'lucide-react';
import { Badge } from '../shared/Badge';

export const DynamicMap: React.FC = () => {
  return (
    <section className="bg-[#13192B] p-6 rounded-3xl border border-white/5 lg:col-span-2 min-h-[400px] flex flex-col transition-all duration-500 hover:border-blue-500/30 shadow-2xl relative overflow-hidden group">
      
      {/* Header do Mapa */}
      <div className="flex justify-between items-center mb-4 z-10">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-500/10 rounded-lg">
            <MapIcon className="w-5 h-5 text-blue-400" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white tracking-tight">Monitoramento Geoespacial</h2>
            <p className="text-[10px] text-[#8A91A5] uppercase font-black tracking-widest">Canal do Cafu · Província do Cunene</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Badge variant="aqua">Live Satélite</Badge>
          <button className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
            <Maximize2 className="w-4 h-4 text-[#8A91A5]" />
          </button>
        </div>
      </div>

      {/* Área do Mapa (Simulação de SIG) */}
      <div className="relative flex-1 rounded-2xl border border-white/5 overflow-hidden bg-[#0D121F]">
        {/* Placeholder para o Mapa Real (Leaflet/Google Maps) */}
        <div className="absolute inset-0 opacity-40 bg-[url('https://api.mapbox.com/styles/v1/mapbox/satellite-v9/static/-14.4,15.1,10,0/800x600?access_token=SUA_KEY')] bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-1000"></div>
        
        {/* Overlay de Grid de Engenharia */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

        {/* Marcadores Dinâmicos (Pontos de Monitoramento) */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 group">
          <div className="relative flex items-center justify-center">
            <div className="absolute w-12 h-12 bg-blue-500/20 rounded-full animate-ping"></div>
            <div className="relative w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-[0_0_15px_rgba(59,130,246,1)]"></div>
            
            {/* Tooltip do Ponto */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-[#13192B] border border-white/10 p-2 rounded-lg shadow-2xl w-32 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              <p className="text-[9px] font-black text-blue-400 uppercase">Sector A-12</p>
              <p className="text-[10px] text-white">Humidade: 24%</p>
              <div className="w-full bg-white/10 h-1 mt-1 rounded-full overflow-hidden">
                <div className="bg-blue-500 h-full w-[24%]"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Controles Flutuantes */}
        <div className="absolute right-4 top-4 flex flex-col gap-2">
          <button className="bg-[#13192B]/80 backdrop-blur-md p-2 rounded-lg border border-white/10 text-[#8A91A5] hover:text-white transition-colors">
            <Layers className="w-4 h-4" />
          </button>
          <button className="bg-[#13192B]/80 backdrop-blur-md p-2 rounded-lg border border-white/10 text-[#8A91A5] hover:text-white transition-colors">
            <Navigation className="w-4 h-4" />
          </button>
        </div>

        {/* Indicador de Status "Real-time" */}
        <div className="absolute bottom-4 left-4 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/5 flex items-center gap-2">
          <Radio className="w-3 h-3 text-red-500 animate-pulse" />
          <span className="text-[9px] font-bold text-white uppercase tracking-tighter">Sinal GPS Activo: Cunene/Angola</span>
        </div>
      </div>
    </section>
  );
};