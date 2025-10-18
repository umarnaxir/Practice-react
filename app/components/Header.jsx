"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

function Header() {
  const [activeTab, setActiveTab] = useState();

   useEffect(() => {
    const slug = window.location.pathname.slice(1);
    console.log(slug);
    setActiveTab(slug);
  }, []);

  return (
    <div className="fixed w-[90vw] bg-amber-500 ml-15 text-base font-bold text-black py-2  m-3 flex justify-center items-center gap-4 rounded-3xl z-50">
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
    </div>
    </div>
  );
}

export default Header;
