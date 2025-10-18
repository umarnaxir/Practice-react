"use client";
import React from "react";

const PlaceCard = ({ city, temp, description, icon, loading, onClick, index }) => {
  return (
    <div
      onClick={() => onClick && onClick(city)}
      className="cursor-pointer group relative overflow-hidden bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-2xl hover:shadow-amber-500/20 transition-all duration-500 hover:scale-105 hover:bg-white/20"
      style={{
        animationDelay: `${index * 100}ms`,
        animation: 'fadeInUp 0.6s ease-out forwards',
        opacity: 0
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-amber-400/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-2xl font-bold text-white mb-1 drop-shadow-lg">{city}</h3>
            {loading ? (
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{animationDelay: '0ms'}} />
                <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{animationDelay: '150ms'}} />
                <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{animationDelay: '300ms'}} />
              </div>
            ) : (
              <p className="text-sm text-white/80 capitalize drop-shadow">{description || "–"}</p>
            )}
          </div>
          
          {!loading && icon && (
            <img
              src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
              alt={description}
              className="w-25 h-25 drop-shadow-2xl group-hover:scale-110 transition-transform duration-300"
            />
          )}
        </div>

        <div className="flex items-end justify-between">
          <div className="text-5xl font-bold text-white drop-shadow-2xl">
            {loading ? (
              <div className="w-20 h-12 bg-white/20 rounded-lg animate-pulse" />
            ) : (
              `${temp ?? "–"}°`
            )}
          </div>
          
          <div className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs text-white font-semibold group-hover:bg-white/30 transition-colors">
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