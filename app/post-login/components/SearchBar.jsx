"use client";
import React from "react";
import { Search } from "lucide-react";

const SearchBar = ({ placeholder, value, onChange }) => {
  return (
    <div className="flex items-center bg-white rounded-xl shadow-md px-4 py-3 w-full max-w-md border border-gray-200 focus-within:ring-2 focus-within:ring-amber-400 transition">
      <Search className="w-6 h-6 text-gray-600 mr-2" />

      <input
        type="text"
        className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
