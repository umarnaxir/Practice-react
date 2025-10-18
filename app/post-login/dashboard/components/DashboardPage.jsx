"use client";
import React, { useEffect } from "react";
import { redirect } from "next/navigation";
import { useTheme } from "../../../context/ThemeContext";

function DashboardPage() {
  const { theme } = useTheme();

  useEffect(() => {
    const value = localStorage.getItem("isLogin");
    if (value !== "true") redirect("/");
  }, []);

  return (
    <div
      className={`min-h-screen pt-25 relative p-6 transition-all duration-300 ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {/* Logout Button */}
      <button
        className="absolute top-4 right-6 mt-20 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded font-semibold transition"
        onClick={() => {
          localStorage.setItem("isLogin", "false");
          redirect("/");
        }}
      >
        Logout
      </button>

      {/* Heading */}
      <h1 className="text-4xl font-bold mt-20 text-center">
        Welcome to the Dashboard
      </h1>
    </div>
  );
}

export default DashboardPage;
