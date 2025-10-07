"use client";
import React, { useEffect } from "react";
import { redirect } from "next/navigation";

function DashboardPage() {
  useEffect(() => {
    const value = localStorage.getItem("isLogin");
    if (value !== "true") redirect("/");
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative p-6">
      <button
        className="absolute top-4 right-6 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded font-semibold transition"
        onClick={() => {
          localStorage.setItem("isLogin", "false");
          redirect("/");
        }}
      >
        Logout
      </button>

      <h1 className="text-4xl font-bold mt-20 text-center">
        Welcome to the Dashboard
      </h1>
    </div>
  );
}

export default DashboardPage;
