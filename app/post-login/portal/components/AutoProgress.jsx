"use client";
import { useState, useEffect } from "react";

export default function AutoProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let startTime = Date.now();
    const duration = 3000;
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const percentage = Math.min((elapsed / duration) * 100, 100);
      setProgress(percentage);

      if (percentage === 100) clearInterval(timer);
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full">
      <p className="mb-2 text-gray-700">Loading...</p>
      <div className="w-full bg-gray-300 h-3 rounded-full overflow-hidden">
        <div
          className="bg-blue-600 h-3 transition-all duration-100 ease-linear"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="text-sm mt-1">{Math.round(progress)}%</p>
    </div>
  );
}
