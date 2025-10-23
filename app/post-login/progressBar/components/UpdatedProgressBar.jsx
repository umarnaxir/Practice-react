"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "../../../context/ThemeContext";

export default function ProgressBar() {
  const [progress, setProgress] = useState(0);
  const { theme } = useTheme();

  useEffect(() => {
    setProgress(0); 
    const duration = 10000; 
    const steps = 100; 
    const intervalTime = duration / steps;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

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
          className={`h-full rounded-full transition-all duration-100 ease-linear ${
            theme === "dark"
              ? "bg-red-500 to-red-600"
              : "bg-blue-500 to-blue-600"
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
    </div>
  );
}
