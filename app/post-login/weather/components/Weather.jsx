"use client";
import { useState } from "react";

export default function WeatherApp() {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_KEY = "50e698fcb4083448c88dee245a4b7c69";

  const getWeather = async (e) => {
    e.preventDefault();
    if (!city.trim()) return;

    setLoading(true);
    setError("");
    setData(null);

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );
      const json = await res.json();

      if (json.cod !== 200) {
        setError("City not found. Please try again.");
      } else {
        setData(json);
      }
    } catch {
      setError("Failed to fetch weather data. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center bg-yellow-500 p-6 rounded-2xl">
      <div className="w-full max-w-md bg-white/80 backdrop-blur-lg rounded-3xl p-6 shadow-xl border border-white/40 transition-all duration-300">
        <h1 className="text-4xl font-bold text-center mb-6 text-orange-800">
          Weather App
        </h1>

        <form onSubmit={getWeather} className="flex gap-2 mb-6 justify-center">
          <input
            className="flex-1 p-3 rounded-xl text-black border border-orange-300 focus:ring-2 focus:ring-orange-500 outline-none transition"
            placeholder="Enter city..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button
            className="px-6 py-3 bg-orange-600 text-white font-semibold rounded-xl hover:bg-orange-700 transition active:scale-95"
          >
            Search
          </button>
        </form>

        {loading && (
          <div className="text-center text-lg text-orange-700 animate-pulse">
            Loading weather...
          </div>
        )}

        {error && (
          <div className="text-center text-red-600 font-semibold">{error}</div>
        )}

        {data && (
          <div className="bg-white rounded-2xl p-6 text-center shadow-md space-y-4 border border-orange-200">
            <h2 className="text-2xl font-bold text-orange-800">{data.name}</h2>

            <p className="text-3xl font-semibold text-orange-700">
              {Math.round(data.main?.temp)}°C
            </p>

            <p className="capitalize text-lg text-gray-700">
              {data.weather?.[0]?.description}
            </p>

            <div className="flex justify-around text-sm mt-4 text-gray-600">
              <p>Humidity: {data.main?.humidity}%</p>
              <p>Wind: {data.wind?.speed} m/s</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
