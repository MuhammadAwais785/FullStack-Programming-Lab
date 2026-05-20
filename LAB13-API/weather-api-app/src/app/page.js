'use client';

import { useState } from 'react';
import { Search, Thermometer, Droplets, Cloud, AlertCircle, Loader2 } from 'lucide-react';

export default function Home() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchWeather = async (e) => {
    e.preventDefault();
    if (!city.trim()) return;

    setLoading(true);
    setError('');
    setWeather(null);

    try {
      // Humne jo API banayi thi, yeh usko call karega
      const res = await fetch(`/api/weather?city=${encodeURIComponent(city)}`);
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Kuch galat ho gaya');
      }

      setWeather(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white flex flex-col items-center justify-center p-4">
      
      {/* Container */}
      <div className="w-full max-w-md bg-white/10 backdrop-blur-md rounded-3xl p-6 shadow-2xl border border-white/20">
        
        {/* Header */}
        <h1 className="text-3xl font-bold text-center mb-2 bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent">
          WeatherIQ
        </h1>
        <p className="text-center text-slate-400 text-sm mb-6">Real-time Advanced Weather System</p>

        {/* Search Form */}
        <form onSubmit={fetchWeather} className="flex gap-2 mb-6">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Enter city name... (e.g. Islamabad)"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white placeholder-slate-500 transition-all"
            />
            <Search className="absolute left-3 top-3.5 text-slate-500 w-5 h-5" />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="bg-indigo-600 hover:bg-indigo-500 disabled:bg-indigo-800 text-white px-5 rounded-xl font-medium transition-all flex items-center justify-center"
          >
            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Search'}
          </button>
        </form>

        {/* Error Message */}
        {error && (
          <div className="flex items-center gap-2 bg-red-500/20 border border-red-500/50 rounded-xl p-4 text-red-200 text-sm mb-6 animate-shake">
            <AlertCircle className="w-5 h-5 shrink-0" />
            <p>{error}</p>
          </div>
        )}

        {/* Weather Details (Advance Display Card) */}
        {weather && (
          <div className="space-y-6">
            {/* Main City & Temp */}
            <div className="text-center bg-slate-900/40 rounded-2xl py-6 border border-white/5">
              <h2 className="text-2xl font-semibold text-slate-200">{weather.city}</h2>
              <p className="text-6xl font-black my-2 text-indigo-200 tracking-tighter">
                {weather.currentTemperature}
              </p>
              <div className="inline-flex items-center gap-1.5 bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full text-sm font-medium capitalize">
                <Cloud className="w-4 h-4" />
                {weather.weatherCondition}
              </div>
            </div>

            {/* Grid Stats */}
            <div className="grid grid-cols-2 gap-4">
              {/* Stat 1: Temperature details */}
              <div className="bg-slate-900/30 border border-white/5 rounded-2xl p-4 flex items-center gap-3">
                <div className="p-3 bg-orange-500/20 text-orange-400 rounded-xl">
                  <Thermometer className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">Condition</p>
                  <p className="text-sm font-semibold text-slate-200 capitalize truncate">
                    {weather.weatherCondition.split(' ')[0]}
                  </p>
                </div>
              </div>

              {/* Stat 2: Humidity */}
              <div className="bg-slate-900/30 border border-white/5 rounded-2xl p-4 flex items-center gap-3">
                <div className="p-3 bg-blue-500/20 text-blue-400 rounded-xl">
                  <Droplets className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">Humidity</p>
                  <p className="text-sm font-semibold text-slate-200">
                    {weather.humidityLevel}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Placeholder state when no city is searched */}
        {!weather && !loading && !error && (
          <div className="text-center py-8 text-slate-500 text-sm border border-dashed border-slate-800 rounded-2xl">
            Search for a city to see advanced weather reports.
          </div>
        )}

      </div>
    </main>
  );
}