"use client";
import React from "react";

const PlaceCard = ({ city, temp, description, icon, loading, onClick, index, theme }) => {
  return (
    <div
      onClick={() => onClick && onClick(city)}
      className={`cursor-pointer relative overflow-hidden rounded-3xl p-6 shadow-2xl border transition-all duration-500 hover:scale-105 ${
        theme === "dark"
          ? "bg-white text-black border-gray-300 hover:bg-gray-100"
          : "bg-white/10 backdrop-blur-xl border-white/20 text-white hover:bg-white/20"
      }`}
      style={{
        animationDelay: `${index * 100}ms`,
        animation: "fadeInUp 0.6s ease-out forwards",
        opacity: 0,
      }}
    >
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-2xl font-bold mb-1">{city}</h3>
            {loading ? (
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-current rounded-full animate-bounce" />
                <div
                  className="w-2 h-2 bg-current rounded-full animate-bounce"
                  style={{ animationDelay: "150ms" }}
                />
                <div
                  className="w-2 h-2 bg-current rounded-full animate-bounce"
                  style={{ animationDelay: "300ms" }}
                />
              </div>
            ) : (
              <p className="text-sm capitalize opacity-80">
                {description || "–"}
              </p>
            )}
          </div>

          {!loading && icon && (
            <img
              src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
              alt={description}
              className="w-25 h-25"
            />
          )}
        </div>

        <div className="flex items-end justify-between">
          <div className="text-5xl font-bold">
            {loading ? (
              <div className="w-20 h-12 bg-current/10 rounded-lg animate-pulse" />
            ) : (
              `${temp ?? "–"}°`
            )}
          </div>

          <div
            className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors ${
              theme === "dark"
                ? "bg-black text-white hover:bg-gray-800"
                : "bg-white/20 text-white"
            }`}
          >
            View Details
          </div>
        </div>
      </div>

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
      `}</style>
    </div>
  );
};

export default PlaceCard;
