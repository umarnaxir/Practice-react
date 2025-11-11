"use client";
import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import "../globals.css";

export default function DashboardLayout({ children }) {
  const [theme, setTheme] = useState("light");
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);

    // Listen for theme changes
    const handleStorageChange = () => {
      const newTheme = localStorage.getItem("theme") || "light";
      setTheme(newTheme);
    };

    window.addEventListener("storage", handleStorageChange);
    // Poll for theme changes (for same-tab updates)
    const interval = setInterval(() => {
      const newTheme = localStorage.getItem("theme") || "light";
      if (newTheme !== theme) {
        setTheme(newTheme);
      }
    }, 100);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      clearInterval(interval);
    };
  }, [theme]);

  return (
    <div
      className={`min-h-screen flex transition-colors duration-300 ${
        theme === "dark" ? "bg-black text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      <main
        className={`flex-1 transition-all duration-300 ${
          isCollapsed ? "ml-20" : "ml-64"
        }`}
      >
        {children}
      </main>
    </div>
  );
}
