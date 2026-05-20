'use client';
import { useState, useEffect } from 'react';
import { 
  Search, Thermometer, Droplets, Wind, Eye, 
  Sun, Loader2, AlertCircle, MapPin
} from 'lucide-react';

export default function Home() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [isHydrated, setIsHydrated] = useState(false);

  // Hydration error (Server vs Client HTML mismatch) ko rokne ke liye
  useEffect(() => {
    setIsHydrated(true);
    fetchWeather('Muzaffarabad');
  }, []);

  const fetchWeather = async (cityName) => {
    if (!cityName || !cityName.trim()) return;
    setLoading(true);
    setError('');
    try {
      const res = await fetch(`/api/weather?city=${encodeURIComponent(cityName.trim())}`);
      const data = await res.json();
      
      if (!res.ok) {
        throw new Error(data.error || 'Shehar nahi mila. Sahi naam likhein.');
      }
      
      setWeather(data);
    } catch (err) {
      setError(err.message);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      fetchWeather(city);
    } else {
      setError('Pehle shehar ka naam likhein.');
    }
  };

  const getChartBars = (currentTemp) => {
    const baseTemp = currentTemp || 0;
    return [
      { time: '06:00 AM', temp: Math.round(baseTemp - 4), h: '50px', bg: '#3b82f6' },
      { time: '10:00 AM', temp: Math.round(baseTemp - 1), h: '80px', bg: '#10b981' },
      { time: '02:00 PM', temp: Math.round(baseTemp + 3), h: '130px', bg: '#f59e0b' },
      { time: '06:00 PM', temp: Math.round(baseTemp), h: '100px', bg: '#10b981' },
      { time: '10:00 PM', temp: Math.round(baseTemp - 3), h: '65px', bg: '#3b82f6' },
    ];
  };

  // Agar client site par hydrate nahi hua to khali layout dikhao taake mismatch error na aaye
  if (!isHydrated) {
    return <div className="min-h-screen bg-slate-950 text-slate-100 p-8 font-sans">Loading Dashboard...</div>;
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8 font-sans">
      <div className="max-w-6xl mx-auto space-y-6">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 bg-slate-900/60 p-5 rounded-2xl border border-slate-800/80">
          <div>
            <h1 className="text-2xl font-black bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              PRO WEATHER DASHBOARD
            </h1>
            <p className="text-xs text-slate-500 mt-0.5">Real-time Weather Analytics Station</p>
          </div>
          
          <form onSubmit={handleSubmit} className="relative flex-1 lg:max-w-md">
            <input
              type="text"
              placeholder="Search city (e.g. Islamabad, Karachi, Muzaffarabad)..."
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 pl-11 pr-4 text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
            />
            <button type="submit" className="absolute left-3.5 top-3.5 text-slate-500 hover:text-emerald-400">
              <Search className="w-5 h-5" />
            </button>
          </form>
        </div>

        {/* Quick Hotspots */}
        <div className="flex flex-wrap gap-2 bg-slate-900/30 p-3 rounded-xl border border-slate-900">
          <span className="text-xs font-bold text-slate-500 flex items-center gap-1 mr-1">
            <MapPin className="w-3.5 h-3.5" /> Kashmir & Pakistan:
          </span>
          <button type="button" onClick={() => fetchWeather('Muzaffarabad')} className="px-3 py-1.5 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20 rounded-lg text-xs font-semibold text-emerald-400">
            📍 Muzaffarabad
          </button>
          <button type="button" onClick={() => fetchWeather('Rawalakot')} className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 rounded-lg text-xs text-slate-300">
            Rawalakot
          </button>
          <button type="button" onClick={() => fetchWeather('Islamabad')} className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 rounded-lg text-xs text-slate-300">
            Islamabad
          </button>
          <button type="button" onClick={() => fetchWeather('Karachi')} className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 rounded-lg text-xs text-slate-300">
            Karachi
          </button>
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-xl flex items-center gap-3 text-sm">
            <AlertCircle className="w-5 h-5 flex-shrink-0" /> {error}
          </div>
        )}

        {loading ? (
          <div className="flex flex-col items-center justify-center py-24 gap-4">
            <Loader2 className="w-12 h-12 text-emerald-400 animate-spin" />
            <p className="text-sm text-slate-400">Fetching live weather data...</p>
          </div>
        ) : weather && weather.main ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Current Temp Card */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-950 p-6 rounded-3xl border border-slate-800 flex flex-col justify-between relative overflow-hidden shadow-xl">
              <div>
                <span className="px-2 py-0.5 bg-slate-800 rounded text-[10px] font-bold text-emerald-400 tracking-wider uppercase border border-slate-700">Active Station</span>
                <h2 className="text-3xl font-black mt-3 tracking-tight">{weather.name}</h2>
                <p className="text-slate-400 text-sm capitalize mt-1 font-medium">
                  {weather.weather && weather.weather[0] ? weather.weather[0].description : 'Clear Sky'}
                </p>
              </div>
              
              <div className="my-10 flex items-center justify-between">
                <span className="text-6xl font-light tracking-tighter">
                  {Math.round(weather.main.temp)}°C
                </span>
                <Sun className="w-20 h-20 text-yellow-500" />
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-xs border-t border-slate-800/80 pt-4 text-slate-400">
                <div>Feels Like: <b className="text-slate-200 text-sm block mt-0.5">{Math.round(weather.main.feels_like)}°C</b></div>
                <div>Humidity: <b className="text-slate-200 text-sm block mt-0.5">{weather.main.humidity}%</b></div>
              </div>
            </div>

            {/* Custom Visual Timeline */}
            <div className="lg:col-span-2 bg-slate-900/40 p-6 rounded-3xl border border-slate-800/60 backdrop-blur flex flex-col justify-between shadow-xl">
              <div>
                <h3 className="text-base font-bold text-slate-200">24-Hour Expected Timeline</h3>
                <p className="text-xs text-slate-400 mt-0.5">Graphical representation of today temperature shifting waves</p>
              </div>
              
              <div className="flex items-end justify-between gap-2 pt-6 pb-2 px-2 h-48 border-b border-slate-800">
                {getChartBars(weather.main.temp).map((bar, index) => (
                  <div key={index} className="flex flex-col items-center flex-1 group">
                    <span className="text-xs font-bold text-emerald-400 mb-2">{bar.temp}°C</span>
                    <div 
                      className="w-full rounded-t-lg transition-all duration-300 shadow-md opacity-80 group-hover:opacity-100" 
                      style={{ height: bar.h, backgroundColor: bar.bg }}
                    ></div>
                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mt-2 text-center">{bar.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Metrics Grid */}
            <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-slate-900/40 p-4 rounded-xl border border-slate-800/50 flex items-center gap-4">
                <div className="p-3 rounded-lg bg-emerald-500/10 text-emerald-400"><Wind className="w-5 h-5" /></div>
                <div>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Wind Speed</p>
                  <p className="text-base font-black text-slate-200 mt-0.5">{weather.wind?.speed} m/s</p>
                </div>
              </div>
              <div className="bg-slate-900/40 p-4 rounded-xl border border-slate-800/50 flex items-center gap-4">
                <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400"><Droplets className="w-5 h-5" /></div>
                <div>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Humidity</p>
                  <p className="text-base font-black text-slate-200 mt-0.5">{weather.main?.humidity}%</p>
                </div>
              </div>
              <div className="bg-slate-900/40 p-4 rounded-xl border border-slate-800/50 flex items-center gap-4">
                <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-400"><Thermometer className="w-5 h-5" /></div>
                <div>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Pressure</p>
                  <p className="text-base font-black text-slate-200 mt-0.5">{weather.main?.pressure} hPa</p>
                </div>
              </div>
              <div className="bg-slate-900/40 p-4 rounded-xl border border-slate-800/50 flex items-center gap-4">
                <div className="p-3 rounded-lg bg-purple-500/10 text-purple-400"><Eye className="w-5 h-5" /></div>
                <div>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Visibility</p>
                  <p className="text-base font-black text-slate-200 mt-0.5">{(weather.visibility / 1000).toFixed(1)} km</p>
                </div>
              </div>
            </div>

          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center border-2 border-dashed border-slate-800 rounded-2xl bg-slate-900/20">
            <p className="text-slate-400 text-sm">Shehar ka data load nahi ho saka. Upar shehar search karein.</p>
          </div>
        )}
      </div>
    </div>
  );
}