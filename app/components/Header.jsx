"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTheme } from "../context/ThemeContext";
import { Sun, Moon, LogOut } from "lucide-react";

export default function Header() {
  const [activeTab, setActiveTab] = useState("");
  const { theme, toggleTheme } = useTheme();
  const router = useRouter();

  useEffect(() => {
    const slug = window.location.pathname.slice(1);
    setActiveTab(slug);
  }, []);

  const navItems = [
    { name: "Dashboard", path: "post-login/dashboard" },
    { name: "TodoList", path: "post-login/todo" },
    { name: "Todo Updated", path: "post-login/todolist" },
    { name: "Weather", path: "post-login/weather" },
    { name: "Apollo", path: "post-login/apollo" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 p-4">
      <nav
        className={`w-full rounded-2xl shadow-xl transition-all duration-300 ${
          theme === "dark"
            ? "bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900"
            : "bg-gradient-to-r from-blue-50 via-white to-purple-50"
        }`}
      >
        <div className="px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Navigation Links */}
            <div className="flex items-center gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={`/${item.path}`}
                  onClick={() => setActiveTab(item.path)}
                  className={`px-5 py-2.5 rounded-xl font-semibold transition-all duration-200 ${
                    activeTab === item.path
                      ? theme === "dark"
                        ? "bg-blue-600 text-white shadow-lg scale-105"
                        : "bg-blue-600 text-white shadow-lg scale-105"
                      : theme === "dark"
                      ? "bg-slate-700 text-gray-300 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white hover:scale-105 hover:shadow-md"
                      : "bg-white text-gray-700 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white hover:scale-105 hover:shadow-md"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className={`p-3 rounded-xl transition-all duration-200 hover:scale-110 ${
                  theme === "dark"
                    ? "bg-slate-700 text-yellow-400 hover:bg-yellow-400 hover:text-slate-900 shadow-md"
                    : "bg-white text-indigo-600 hover:bg-indigo-600 hover:text-white shadow-md"
                }`}
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              {/* Logout Button */}
              <button
                onClick={() => {
                  localStorage.setItem("isLogin", "false");
                  router.push("/");
                }}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold transition-all duration-200 hover:scale-105 shadow-md hover:shadow-lg ${
                  theme === "dark"
                    ? "bg-red-600 text-white hover:from-red-700 hover:to-pink-700"
                    : "bg-red-600 to-pink-500 text-white hover:from-red-600 hover:to-pink-600"
                }`}
              >
                <LogOut size={18} />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
