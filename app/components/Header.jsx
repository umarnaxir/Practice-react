"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "../context/ThemeContext";

function Header() {
  const [activeTab, setActiveTab] = useState();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const slug = window.location.pathname.slice(1);
    setActiveTab(slug);
  }, []);

  return (
    <div
      className={`fixed w-[90vw] ml-15 text-base font-bold py-2 m-3 flex justify-center items-center gap-4 rounded-3xl z-50 transition-all duration-300 ${
        theme === "dark" ? "bg-yellow-600 text-amber-300" : "bg-amber-500 text-black"
      }`}
    >
      <div className="py-2 flex justify-center items-center gap-5">
        <Link href="/post-login/dashboard">
          <button
            onClick={() => setActiveTab("post-login/dashboard")}
            className={`py-2 px-6 rounded-xl m-1 transition-all duration-200 ${
              activeTab === "post-login/dashboard"
                ? "bg-black text-amber-300 scale-105"
                : "bg-amber-300 text-black"
            }`}
          >
            Dashboard
          </button>
        </Link>

        <Link href="/post-login/todo">
          <button
            onClick={() => setActiveTab("post-login/todo")}
            className={`py-2 px-6 rounded-xl m-1 transition-all duration-200 ${
              activeTab === "post-login/todo"
                ? "bg-black text-amber-300 scale-105"
                : "bg-amber-300 text-black"
            }`}
          >
            TodoList
          </button>
        </Link>

        <Link href="/post-login/todolist">
          <button
            onClick={() => setActiveTab("post-login/todolist")}
            className={`py-2 px-6 rounded-xl m-1 transition-all duration-200 ${
              activeTab === "post-login/todolist"
                ? "bg-black text-amber-300 scale-105"
                : "bg-amber-300 text-black"
            }`}
          >
            Todo Updated
          </button>
        </Link>

        <Link href="/post-login/weather">
          <button
            onClick={() => setActiveTab("post-login/weather")}
            className={`py-2 px-6 rounded-xl m-1 transition-all duration-200 ${
              activeTab === "post-login/weather"
                ? "bg-black text-amber-300 scale-105"
                : "bg-amber-300 text-black"
            }`}
          >
            Weather
          </button>
        </Link>

        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className={`py-2 px-6 rounded-xl m-1 transition-all duration-200 ${
            theme === "dark" ? "bg-black text-amber-300" : "bg-amber-300 text-black"
          }`}
        >
          {theme === "dark" ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </div>
  );
}

export default Header;
