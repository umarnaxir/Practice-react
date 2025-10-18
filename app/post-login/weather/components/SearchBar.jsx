"use client";
import React from "react";

const SearchBar = ({ value, onChange, placeholder, theme }) => {
  return (
    <div className="relative group">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`w-full px-6 py-4 rounded-2xl text-lg focus:outline-none transition-all duration-300 border ${
          theme === "dark"
            ? "bg-white text-black border-gray-300 placeholder-gray-500"
            : "bg-white/20 backdrop-blur-xl border-white/30 text-white placeholder-white/60"
        }`}
      />
      <div
        className={`absolute right-4 top-1/2 -translate-y-1/2 ${
          theme === "dark" ? "text-gray-700" : "text-white/50"
        }`}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    </div>
  );
};

export default SearchBar;
