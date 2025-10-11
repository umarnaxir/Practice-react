"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

function Header() {
  const [activeTab, setActiveTab] = useState();



  // useEffect(() => {
  //    console.log(window.location.pathname.slice(1));
  // }, []);

  return (
    <div className="bg-amber-500 text-2xl text-black py-5 flex justify-center items-center gap-4">
      <Link href="/post-login/dashboard">
        <button
          onClick={() => setActiveTab("dashboard")}
          className={`py-2 px-6 rounded-xl m-1 transition-all duration-200 ${
            activeTab === "dashboard"
              ? "bg-black text-amber-300 scale-105"
              : "bg-amber-300 text-black"
          }`}
        >
          Dashboard
        </button>
      </Link>

      <Link href="/post-login/todo">
        <button
          onClick={() => setActiveTab("todo")}
          className={`py-2 px-6 rounded-xl m-1 transition-all duration-200 ${
            activeTab === "todo"
              ? "bg-black text-amber-300 scale-105"
              : "bg-amber-300 text-black"
          }`}
        >
          To Do List
        </button>
      </Link>
      
    </div>
  );
}

export default Header;
