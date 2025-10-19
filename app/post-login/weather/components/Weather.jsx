"use client";
import { useEffect, useState } from "react";
import PlaceCard from "./PlaceCard";
import SearchBar from "./SearchBar";
import { useTheme } from "../../../context/ThemeContext";

export default function WeatherApp() {
  const { theme } = useTheme();
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
    if (e.key === "Enter") handleSearch(query);
  };

  return (
    <div
      className={`w-full min-h-screen flex items-center justify-center p-4 md:p-8 relative overflow-hidden transition-all duration-500 ${
        theme === "dark" ? "text-white" : "text-black"
      }`}
      style={{
        backgroundImage: `linear-gradient(
          rgba(0, 0, 0, ${theme === "dark" ? 0.6 : 0.2}),
          rgba(0, 0, 0, ${theme === "dark" ? 0.7 : 0.1})
        ), url('/images/weather-image.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left side */}
          <div className="lg:col-span-2 space-y-6">
            <div className="text-center lg:text-left mb-8">
              <h1
                className={`text-5xl md:text-6xl font-bold drop-shadow-2xl mb-2 pt-4 ${
                  theme === "dark" ? "text-white" : "text-white"
                }`}
              >
                Weather Dashboard
              </h1>
              <p
                className={`text-lg drop-shadow ${
                  theme === "dark" ? "text-white/80" : "text-white/90"
                }`}
              >
                Explore weather around the world
              </p>
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

          {/* Right side */}
          <div className="lg:col-span-1 space-y-6 pt-8">
            <div
              className={`rounded-3xl p-8 shadow-2xl border transition-all duration-500 ${
                theme === "dark"
                  ? "bg-white/10 border-white/20 backdrop-blur-2xl"
                  : "bg-black/10 border-black/30 backdrop-blur-2xl"
              }`}
            >
              <h2
                className={`text-3xl font-bold mb-6 ${
                  theme === "dark" ? "text-white" : "text-white"
                }`}
              >
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

              {error && (
                <div className="mt-6 p-4 bg-red-500/20 border border-red-400/30 rounded-2xl text-red-100 text-center">
                  {error}
                </div>
              )}

              {selectedCityData && (
                <div
                  className={`mt-6 rounded-3xl p-6 border shadow-2xl transition-all duration-500 ${
                    theme === "dark"
                      ? "bg-white text-black border-white/30"
                      : "bg-black text-white border-black/20"
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-3xl font-bold">
                        {selectedCityData.name}
                      </h3>
                      <p className="capitalize mt-1">
                        {selectedCityData.weather?.[0]?.description}
                      </p>
                    </div>
                    {selectedCityData.weather?.[0]?.icon && (
                      <img
                        src={`https://openweathermap.org/img/wn/${selectedCityData.weather[0].icon}@2x.png`}
                        alt="weather icon"
                        className="w-25 h-25"
                      />
                    )}
                  </div>

                  <div className="flex items-end justify-between">
                    <div className="text-6xl font-bold">
                      {Math.round(selectedCityData.main?.temp)}°C
                    </div>
                    <div className="text-right">
                      <div className="text-sm mb-1">Humidity</div>
                      <div className="text-2xl font-bold">
                        {selectedCityData.main?.humidity}%
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-sm mb-1">Feels Like</div>
                      <div className="text-xl font-bold">
                        {Math.round(selectedCityData.main?.feels_like)}°C
                      </div>
                    </div>
                    <div>
                      <div className="text-sm mb-1">Wind Speed</div>
                      <div className="text-xl font-bold">
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
  );
}
