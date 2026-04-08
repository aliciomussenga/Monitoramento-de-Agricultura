import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { 
  Globe, Sun, Waves, Layers 
} from 'lucide-react';

// --- CONFIGURATION ---
const MAPTILER_KEY = 'b5Y3XqesqBabfFXkxCIR';

// Angola Geographic Constants
const ANGOLA_CENTER: [number, number] = [-11.2027, 17.8739];
const ANGOLA_BOUNDS: L.LatLngBoundsExpression = [
  [-18.042, 11.640], // Southwest
  [-4.373, 24.082]   // Northeast
];

const createTechIcon = (color: string) => {
  return L.divIcon({
    className: 'custom-div-icon',
    html: `
      <div style="display: flex; justify-content: center; align-items: center;">
        <div style="position: absolute; width: 22px; height: 22px; background-color: ${color}; opacity: 0.2; border-radius: 50%; animation: ping 3s infinite;"></div>
        <div style="position: relative; width: 14px; height: 14px; background-color: ${color}; border: 2px solid #0D0D0D; border-radius: 50%; box-shadow: 0 0 15px ${color};"></div>
      </div>
    `,
    iconSize: [24, 24],
    iconAnchor: [12, 12],
    popupAnchor: [0, -10],
  });
};

const monitoringPoints = [
  { 
    id: 1, 
    name: 'Canal do Cafu', 
    pos: [-15.116, 15.183], 
    color: '#074E8C',
    data: {
      clima: { temp: '32°C', hum: '12%', vento: '14km/h' },
      solo: { ph: '6.5', temp: '28°C', umidade: '18%' },
      agua: { volume: '450m³/ha', vazao: '12.5m³/s', qualidade: 'Boa' }
    }
  },
  { 
    id: 2, 
    name: 'MOSAP Huambo', 
    pos: [-12.776, 15.739], 
    color: '#A305A6',
    data: {
      clima: { temp: '24°C', hum: '65%', vento: '8km/h' },
      solo: { ph: '5.8', temp: '21°C', umidade: '42%' },
      agua: { volume: '120m³/ha', vazao: 'N/A', qualidade: 'Excelente' }
    }
  }
];

export const RealMap: React.FC = () => {
  return (
    <section className="bg-[#0D0D0D] p-0 rounded-[2rem] border border-[#4F0259]/30 lg:col-span-2 min-h-[650px] flex flex-col relative overflow-hidden shadow-2xl">
      
      {/* HEADER SIG */}
      <div className="absolute top-6 left-6 right-6 z-[1000] flex flex-col md:flex-row justify-between gap-4 pointer-events-none">
        <div className="bg-[#0D0D0D]/90 backdrop-blur-xl p-4 rounded-xl border border-[#4F0259]/50 flex items-center gap-4 pointer-events-auto shadow-2xl">
          <div className="p-2 bg-[#4F0259]/20 rounded-lg border border-[#A305A6]/30 text-[#A305A6]">
            <Globe className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-sm font-bold text-white uppercase tracking-widest">Monitoramento Nacional - Angola</h2>
            <p className="text-[10px] text-gray-400 font-mono italic">Dados de Telemetria em Tempo Real</p>
          </div>
        </div>
      </div>

      <div className="flex-1 z-0">
        <MapContainer 
          center={ANGOLA_CENTER} 
          zoom={6} 
          minZoom={5}
          maxBounds={ANGOLA_BOUNDS}
          maxBoundsViscosity={1.0}
          zoomControl={false} 
          className="h-full w-full"
        >
          <TileLayer 
            url={`https://api.maptiler.com/maps/hybrid-v4/{z}/{x}/{y}.jpg?key=${MAPTILER_KEY}`}
            attribution='&copy; IDA / MapTiler'
          />

          {monitoringPoints.map((point) => (
            <Marker key={point.id} position={point.pos as [number, number]} icon={createTechIcon(point.color)}>
              <Popup className="tech-popup" maxWidth={350}>
                <div className="p-4 w-[300px] bg-[#0D0D0D] border border-white/10 rounded-2xl shadow-2xl text-white">
                  <div className="flex justify-between items-center mb-4 border-b border-white/5 pb-2">
                    <h4 className="font-black text-xs uppercase tracking-tighter text-[#A305A6]">{point.name}</h4>
                    <span className="text-[8px] bg-emerald-500/10 text-emerald-400 px-2 py-1 rounded-full border border-emerald-500/20 font-mono">ESTÁVEL</span>
                  </div>

                  <div className="grid grid-cols-1 gap-4">
                    {/* Clima */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-[#A305A6]">
                        <Sun className="w-3 h-3" />
                        <span className="text-[9px] font-bold uppercase">Clima e Ar</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2 bg-white/5 p-2 rounded-lg text-center">
                        <div><p className="text-[8px] text-gray-500 uppercase">Temp</p><p className="text-[10px] font-bold">{point.data.clima.temp}</p></div>
                        <div><p className="text-[8px] text-gray-500 uppercase">Hum</p><p className="text-[10px] font-bold">{point.data.clima.hum}</p></div>
                        <div><p className="text-[8px] text-gray-500 uppercase">Vento</p><p className="text-[10px] font-bold">{point.data.clima.vento}</p></div>
                      </div>
                    </div>

                    {/* Solo */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-amber-500">
                        <Layers className="w-3 h-3" />
                        <span className="text-[9px] font-bold uppercase">Solo (IoT)</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2 bg-white/5 p-2 rounded-lg text-center">
                        <div><p className="text-[8px] text-gray-500 uppercase">pH</p><p className="text-[10px] font-bold">{point.data.solo.ph}</p></div>
                        <div><p className="text-[8px] text-gray-500 uppercase">Solo T</p><p className="text-[10px] font-bold">{point.data.solo.temp}</p></div>
                        <div><p className="text-[8px] text-gray-500 uppercase">Umid</p><p className="text-[10px] font-bold text-emerald-400">{point.data.solo.umidade}</p></div>
                      </div>
                    </div>

                    {/* Água */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-blue-400">
                        <Waves className="w-3 h-3" />
                        <span className="text-[9px] font-bold uppercase">Irrigação e Água</span>
                      </div>
                      <div className="bg-blue-500/5 border border-blue-500/10 p-2 rounded-lg flex justify-between items-center px-4">
                        <div className="text-center"><p className="text-[8px] text-gray-500 uppercase">Volume/ha</p><p className="text-[10px] font-bold text-blue-400">{point.data.agua.volume}</p></div>
                        <div className="text-center"><p className="text-[8px] text-gray-500 uppercase">Qualidade</p><p className="text-[10px] font-bold text-blue-400">{point.data.agua.qualidade}</p></div>
                      </div>
                    </div>
                  </div>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      {/* LEYENDA TÉCNICA */}
      <div className="absolute bottom-6 right-6 z-[1000] bg-[#0D0D0D]/90 backdrop-blur-md p-3 rounded-xl border border-white/5 pointer-events-auto">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#074E8C]"></div>
            <span className="text-[8px] text-gray-400 uppercase font-bold tracking-wider">Recursos Hídricos</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#A305A6]"></div>
            <span className="text-[8px] text-gray-400 uppercase font-bold tracking-wider">Produção (MOSAP)</span>
          </div>
        </div>
      </div>
    </section>
  );
};