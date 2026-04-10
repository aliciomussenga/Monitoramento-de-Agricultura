import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap, useMapEvents, GeoJSON } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Activity, Radio, Cpu, Waves, Sun, Layers, Maximize } from 'lucide-react';

const MAPTILER_KEY = 'b5Y3XqesqBabfFXkxCIR';
const ANGOLA_CENTER: [number, number] = [-11.2027, 17.8739];
const ANGOLA_BOUNDS: L.LatLngBoundsExpression = [[-18.042, 11.640], [-4.373, 24.082]];

interface RealMapProps {
  geoData?: any;
}

const ResetViewControl = () => {
  const map = useMap();
  return (
    <div className="absolute right-6 top-6 z-[1000]">
      <button 
        onClick={() => map.setView(ANGOLA_CENTER, 6)}
        className="group flex items-center gap-2 bg-black/70 backdrop-blur-xl px-4 py-2.5 rounded-xl border border-white/10 text-white hover:border-white/30 transition-all active:scale-95 shadow-2xl"
      >
        <Maximize className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
        <span className="text-[10px] font-black uppercase tracking-widest hidden sm:inline text-gray-200">Resetar Visão</span>
      </button>
    </div>
  );
};

const DigitalBorderOverlay = ({ data, threshold = 9 }: { data: any, threshold?: number }) => {
  const [isVisible, setIsVisible] = useState(true);
  const map = useMap(); // Usamos o hook useMap para ter acesso às funções de navegação
  
  useMapEvents({
    zoomend: () => {
      setIsVisible(map.getZoom() < threshold);
    },
  });

  if (!isVisible || !data) return null;

  return (
    <GeoJSON 
      data={data} 
      style={() => ({
        fillColor: '#050505', 
        fillOpacity: 0.6,    
        color: '#3B82F6',
        weight: 1.5,
        dashArray: '4, 8',   
      })}
      onEachFeature={(feature, layer) => {
        // Remove o outline azul/quadrado estranho ao clicar ou focar
        (layer as any).on('click', (e: L.LeafletMouseEvent) => {
          map.flyToBounds(e.target.getBounds(), {
            padding: [20, 20],
            duration: 1.5
          });
        });

        if (feature.properties && feature.properties.shapeName) {
          layer.bindTooltip(feature.properties.shapeName, {
            direction: "center",
            className: "bg-black/90 border border-blue-500/30 text-blue-400 text-[9px] font-bold uppercase p-1 rounded-md shadow-none outline-none",
            opacity: 0.9,
            sticky: true // Opcional: segue o mouse em vez de ficar parado no centro
          });
        }
      }}
    />
  );
};

const createTechIcon = (color: string) => L.divIcon({
  className: 'custom-div-icon',
  html: `<div class="relative flex items-center justify-center outline-none">
    <div class="absolute w-8 h-8 rounded-full border border-[${color}] opacity-30 animate-ping"></div>
    <div class="w-3.5 h-3.5 rounded-full border-2 border-white shadow-[0_0_15px_${color}]" style="background-color: ${color}"></div>
  </div>`,
  iconSize: [32, 32], iconAnchor: [16, 16], popupAnchor: [0, -12],
});

const monitoringPoints = [
  { id: 1, name: 'Canal do Cafu', pos: [-15.116, 15.183], color: '#3B82F6', stats: { temp: '32°C', ph: '6.5', hum: '12%', vazao: '12.5m³/s' } },
  { id: 2, name: 'MOSAP Huambo', pos: [-12.776, 15.739], color: '#F02AD4', stats: { temp: '24°C', ph: '5.8', hum: '65%', vazao: 'N/D' } }
];

export const RealMap: React.FC<RealMapProps> = ({ geoData }) => {
  return (
    <section className="bg-[#050505] rounded-[2rem] border border-white/10 lg:col-span-2 min-h-[750px] flex flex-col relative overflow-hidden shadow-2xl">
      
      {/* CSS para garantir que o Leaflet não mostre o quadrado de foco */}
      <style>{`
        .leaflet-container :focus {
          outline: none !important;
        }
        .leaflet-interactive {
          outline: none !important;
        }
        .custom-div-icon {
          outline: none !important;
          border: none !important;
        }
      `}</style>

      <div className="absolute top-6 left-6 z-[1000] flex flex-col gap-3 pointer-events-none">
        <div className="bg-black/80 backdrop-blur-xl px-5 py-3.5 rounded-2xl border border-white/10 flex items-center gap-4 pointer-events-auto shadow-xl">
          <Radio className="w-6 h-6 text-white opacity-80" />
          <div>
            <h2 className="text-[12px] font-black text-white uppercase tracking-[0.2em]">Monitoramento SIG</h2>
            <p className="text-[9px] font-mono text-emerald-500 mt-0.5 tracking-widest uppercase">Rede Nacional de Dados</p>
          </div>
        </div>
      </div>

      <div className="flex-1 z-0 bg-[#050505]">
        <MapContainer 
          center={ANGOLA_CENTER} 
          zoom={6} 
          zoomControl={false} 
          maxBounds={ANGOLA_BOUNDS}
          className="h-full w-full grayscale-[0.2] outline-none"
        >
          <TileLayer 
            url={`https://api.maptiler.com/maps/hybrid-v4/{z}/{x}/{y}.jpg?key=${MAPTILER_KEY}`} 
            attribution='&copy; IDA Angola' 
          />

          <DigitalBorderOverlay data={geoData} threshold={9} />
          <ResetViewControl />

          {monitoringPoints.map((p) => (
            <Marker key={p.id} position={p.pos as any} icon={createTechIcon(p.color)}>
              <Popup>
                <div className="p-5 w-[240px] bg-[#0A0A0A] text-white rounded-2xl shadow-2xl border-t-4 outline-none" style={{ borderTopColor: p.color }}>
                   {/* ... conteúdo do popup ... */}
                   <div className="flex justify-between items-center mb-4 border-b border-white/5 pb-2">
                    <span className="text-[10px] font-black uppercase tracking-widest" style={{ color: p.color }}>{p.name}</span>
                    <Activity className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-gray-500">
                        <Sun className="w-3.5 h-3.5" />
                        <span className="text-[8px] uppercase font-bold tracking-widest">Ambiente</span>
                      </div>
                      <span className="text-sm font-bold font-mono">{p.stats.temp}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-gray-500">
                        <Layers className="w-3.5 h-3.5" />
                        <span className="text-[8px] uppercase font-bold tracking-widest">pH do Solo</span>
                      </div>
                      <span className="text-sm font-bold font-mono" style={{ color: p.color }}>{p.stats.ph}</span>
                    </div>
                  </div>
                  <button className="w-full mt-5 pt-3 border-t border-white/5 text-[9px] hover:brightness-125 transition-all uppercase font-black tracking-[0.2em] text-center" style={{ color: p.color }}>
                    DETALHES TÉCNICOS →
                  </button>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      <div className="bg-[#0A0A0A] border-t border-white/10 px-8 py-5 flex justify-between items-center z-[1001]">
        <div className="flex gap-10">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#3B82F6] shadow-[0_0_8px_#3B82F6]" />
            <span className="text-[9px] text-gray-400 font-black uppercase tracking-widest">Recursos Hídricos</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#F02AD4] shadow-[0_0_8px_#F02AD4]" />
            <span className="text-[9px] text-gray-400 font-black uppercase tracking-widest">Produção Agrícola</span>
          </div>
        </div>
        <div className="flex items-center gap-4 text-[9px] font-mono text-gray-600 uppercase tracking-widest">
            <Cpu className="w-4 h-4 text-emerald-500 animate-pulse" />
            <span className="hidden sm:block">Sincronização Ativa</span>
        </div>
      </div>
    </section>
  );
};