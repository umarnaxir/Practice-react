"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTheme } from "../context/ThemeContext";

export default function Header() {
  const [activeTab, setActiveTab] = useState("");
  const { theme, toggleTheme } = useTheme();
  const router = useRouter();

  useEffect(() => {
    const slug = window.location.pathname.slice(1);
    setActiveTab(slug);
  }, []);

  return (
    <div
      className={`fixed top-3 left-1/2 -translate-x-1/2 w-[90vw] px-6 py-2 rounded-3xl z-50 flex justify-between items-center shadow-md transition-all duration-300 ${
        theme === "dark"
          ? "bg-gray-900 text-amber-300"
          : "bg-amber-500 text-black"
      }`}
    >
      {/*Navigation Links */}
      <div className="flex items-center gap-4 py-2">
        {[
          { name: "Dashboard", path: "post-login/dashboard" },
          { name: "TodoList", path: "post-login/todo" },
          { name: "Todo Updated", path: "post-login/todolist" },
          { name: "Weather", path: "post-login/weather" },
        ].map((item) => (
          <Link key={item.path} href={`/${item.path}`}>
            <button
              onClick={() => setActiveTab(item.path)}
              className={`px-5 py-2 rounded-xl font-semibold transition-all duration-200 ${
                activeTab === item.path
                  ? "bg-black text-amber-300 scale-105"
                  : "bg-amber-300 text-black hover:scale-105"
              }`}
            >
              {item.name}
            </button>
          </Link>
        ))}
      </div>

      {/* Theme + Logout */}
      <div className="flex items-center gap-4">
        <button
          onClick={toggleTheme}
          className={`relative flex items-center justify-between w-16 h-8 rounded-full p-1 transition-all duration-300 ${
            theme === "dark" ? "bg-black" : "bg-yellow-300"
          }`}
        >
          <span
            className={`absolute w-6 h-6 rounded-full transition-all duration-300 ${
              theme === "dark"
                ? "translate-x-8 bg-yellow-400"
                : "translate-x-0 bg-gray-800"
            }`}
          ></span>
        </button>

        {/*Logout Button */}
        <button
          onClick={() => {
            localStorage.setItem("isLogin", "false");
            router.push("/");
          }}
          className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-xl font-semibold text-[14px] transition-all duration-300"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
