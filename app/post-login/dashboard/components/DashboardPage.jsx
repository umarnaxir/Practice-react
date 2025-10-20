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


      {/* Heading */}
      <h1 className="text-4xl font-bold mt-20 text-center">
        Welcome to the Dashboard
      </h1>
    </div>
  );
}

export default DashboardPage;
