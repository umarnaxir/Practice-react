"use client";
import { useEffect, useState } from "react";
import PlaceCard from "./PlaceCard";
import SearchBar from "./SearchBar";

export default function WeatherApp() {
  const [query, setQuery] = useState("");
  const [selectedCityData, setSelectedCityData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const places = ["Srinagar", "Karachi", "Dubai", "London"];
  const [placesData, setPlacesData] = useState({});

  useEffect(() => {
    places.forEach((city) => fetchPlace(city));
  }, []);

  const fetchPlace = async (city) => {
    setPlacesData((p) => ({ ...p, [city]: { loading: true } }));
    try {
      const res = await fetch(`/api/weather?q=${encodeURIComponent(city)}`);
      const json = await res.json();
      if (json?.cod && Number(json.cod) !== 200) {
        setPlacesData((p) => ({ ...p, [city]: { error: true } }));
      } else {
        setPlacesData((p) => ({ ...p, [city]: { data: json } }));
      }
    } catch (err) {
      setPlacesData((p) => ({ ...p, [city]: { error: true } }));
    }
  };

  const handleSearch = async (q) => {
    if (!q?.trim()) return;
    setQuery(q);
    setLoading(true);
    setError("");
    setSelectedCityData(null);

    try {
      const res = await fetch(`/api/weather?q=${encodeURIComponent(q)}`);
      const json = await res.json();
      if (json?.cod && Number(json.cod) !== 200) {
        setError("City not found. Please try again.");
      } else {
        setSelectedCityData(json);
      }
    } catch (e) {
      setError("Failed to fetch weather. Try later.");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch(query);
    }
  };

  return (
    <>
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
      
      <div
        className="w-full min-h-screen flex items-center justify-center p-4 md:p-8 relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)), url('/images/weather-image.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 via-orange-500/10 to-red-500/20 animate-pulse" style={{animationDuration: '4s'}} />
        
        <div className="container max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left side: Place cards */}
            <div className="lg:col-span-2 space-y-6">
              <div className="text-center lg:text-left mb-8">
                <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-2xl mb-2">
                  Weather Dashboard
                </h1>
                <p className="text-white/80 text-lg drop-shadow">Explore weather around the world</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {places.map((c, idx) => {
                  const item = placesData[c] || {};
                  const d = item.data;
                  return (
                    <PlaceCard
                      key={c}
                      city={c}
                      temp={d ? Math.round(d.main?.temp) : null}
                      description={d?.weather?.[0]?.description}
                      icon={d?.weather?.[0]?.icon}
                      loading={item.loading}
                      onClick={(city) => handleSearch(city)}
                      index={idx}
                    />
                  );
                })}
              </div>
            </div>

            {/* Right side: Search panel */}
            <div 
              className="lg:col-span-1 space-y-6 pt-8"
              style={{
                animation: 'slideInRight 0.8s ease-out forwards',
                animationDelay: '400ms',
                opacity: 0
              }}
            >
              <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 shadow-2xl">
                <h2 className="text-3xl font-bold text-white mb-6 drop-shadow-lg">
                  Search City
                </h2>

                <div className="space-y-4">
                  <SearchBar 
                    placeholder="Enter city name..." 
                    value={query} 
                    onChange={setQuery}
                  />

                  <button
                    onClick={() => handleSearch(query)}
                    onKeyPress={handleKeyPress}
                    className="w-full px-6 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-2xl font-semibold hover:from-amber-600 hover:to-orange-700 transition-all duration-300 active:scale-95 shadow-lg hover:shadow-amber-500/50 transform hover:-translate-y-1"
                  >
                    Search Weather
                  </button>
                </div>

                {loading && (
                  <div className="mt-6 flex items-center justify-center gap-2 text-white">
                    <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{animationDelay: '0ms'}} />
                    <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{animationDelay: '150ms'}} />
                    <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{animationDelay: '300ms'}} />
                  </div>
                )}
                
                {error && (
                  <div className="mt-6 p-4 bg-red-500/20 backdrop-blur-xl border border-red-400/30 rounded-2xl text-red-100 font-semibold text-center">
                    {error}
                  </div>
                )}

                {selectedCityData && (
                  <div 
                    className="mt-6 bg-white/20 backdrop-blur-xl rounded-3xl p-6 border border-white/30 shadow-2xl"
                    style={{animation: 'fadeInUp 0.5s ease-out'}}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-3xl font-bold text-white drop-shadow-lg">
                          {selectedCityData.name}
                        </h3>
                        <p className="capitalize text-white/80 mt-1 drop-shadow">
                          {selectedCityData.weather?.[0]?.description}
                        </p>
                      </div>

                      {selectedCityData.weather?.[0]?.icon && (
                        <img
                          src={`https://openweathermap.org/img/wn/${selectedCityData.weather[0].icon}@2x.png`}
                          alt="weather icon"
                          className="w-20 h-20 drop-shadow-2xl"
                        />
                      )}
                    </div>

                    <div className="flex items-end justify-between">
                      <div className="text-6xl font-bold text-white drop-shadow-2xl">
                        {Math.round(selectedCityData.main?.temp)}°C
                      </div>
                      
                      <div className="text-right">
                        <div className="text-sm text-white/70 mb-1">Humidity</div>
                        <div className="text-2xl font-bold text-white drop-shadow-lg">
                          {selectedCityData.main?.humidity}%
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-white/20 grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-sm text-white/70 mb-1">Feels Like</div>
                        <div className="text-xl font-bold text-white">
                          {Math.round(selectedCityData.main?.feels_like)}°C
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-white/70 mb-1">Wind Speed</div>
                        <div className="text-xl font-bold text-white">
                          {selectedCityData.wind?.speed} m/s
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}