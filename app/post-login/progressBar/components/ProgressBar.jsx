"use client";
import React, { useState } from "react";
import { useTheme } from "../../../context/ThemeContext";

export default function ProgressBar() {
  const [progress, setProgress] = useState(0);
  const { theme } = useTheme();

  const handleChange = (e) => {
    let value = Number(e.target.value);
    if (value < 0) value = 0;
    if (value > 100) value = 100;
    setProgress(value);
  };

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen transition-all duration-300 p-6 ${
        theme === "dark"
          ? "bg-black text-white"
          : "bg-white text-gray-800"
      }`}
    >
      {/* Heading */}
      <h1 className="text-4xl font-bold mb-8">Progress Bar</h1>

      {/* Progress Bar Container */}
      <div
        className={`w-full sm:w-[60%] md:w-[40%] rounded-full h-6 shadow-inner overflow-hidden ${
          theme === "dark" ? "bg-gray-700" : "bg-gray-200"
        }`}
      >
        <div
          className={`h-full rounded-full transition-all duration-700 ease-in-out ${
            theme === "dark"
              ? "bg-red-500 to-red-600"
              : "bg-blue-500 to-purple-500"
          }`}
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Label */}
      <p
        className={`mt-4 text-xl font-bold ${
          theme === "dark" ? "text-gray-200" : "text-gray-700"
        }`}
      >
        {progress}% completed
      </p>

      {/* Input Field */}
      <input
        type="number"
        placeholder="Enter value (0–100)"
        value={progress}
        onChange={handleChange}
        className={`mt-6 w-48 px-4 py-3 border font-bold rounded-lg shadow-sm focus:outline-none focus:ring-2 text-center transition-all duration-200 ${
          theme === "dark"
            ? "bg-slate-900 text-white border-gray-600 focus:ring-red-500"
            : "bg-white text-black border-gray-300 focus:ring-blue-400"
        }`}
      />
    </div>
  );
}
