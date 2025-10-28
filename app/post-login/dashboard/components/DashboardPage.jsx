"use client";
import React, { useEffect } from "react";
import { redirect } from "next/navigation";
import { useTheme } from "../../../context/ThemeContext";
import Link from "next/link";
import { Sun, Moon } from "lucide-react";

function DashboardPage() {
  const { theme } = useTheme();

  useEffect(() => {
    const value = localStorage.getItem("isLogin");
    if (value !== "true") redirect("/");
  }, []);

  const navItems = [
    { name: "TodoList", path: "post-login/todo", icon: "📝" },
    { name: "Todo Updated", path: "post-login/todolist", icon: "🗂️" },
    { name: "Weather", path: "post-login/weather", icon: "🌦️" },
    { name: "Progress Bar", path: "post-login/progressBar", icon: "📈" },
    { name: "Apollo", path: "post-login/apollo", icon: "🌐" },
    { name: "Portal", path: "post-login/portal", icon: "🔗" },
    { name: "Formik Form", path: "post-login/form", icon: "📋" },
    { name: "Calculator", path: "calculator", icon: "📱" },
    { name: "Demo", path: "demo", icon: "🖌️" },

  ];

  return (
    <div
      className={`min-h-screen pt-15 p-6 transition-all duration-300 ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {/* Heading */}
      <h1 className="text-4xl font-bold py-20 text-center">
        Welcome to the Dashboard
      </h1>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-5 mx-6 px-8">
        {navItems.map((item) => (
          <Link key={item.path} href={`/${item.path}`}>
            <div
              className={`flex flex-col items-center justify-center p-8 rounded-2xl shadow-lg cursor-pointer transition-all duration-300 hover:scale-105 ${
                theme === "dark"
                  ? "bg-gray-800 text-white hover:bg-blue-500"
                  : "bg-white text-gray-900 hover:bg-blue-500"
              }`}
            >
              <span className="text-5xl mb-4">{item.icon}</span>
              <h2 className="text-xl font-semibold">{item.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default DashboardPage;
