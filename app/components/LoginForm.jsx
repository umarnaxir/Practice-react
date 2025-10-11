"use client";
import React, { useState, useEffect } from "react";
import { redirect } from "next/navigation";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (username === "umar" && password === "1122") {
      localStorage.setItem("isLogin", "true");
      redirect("/post-login/dashboard");
    } else {
      alert("Login failed");
    }
  }
  useEffect(() => {
    const value = localStorage.getItem("isLogin");
    if (value === "true") redirect("/post-login/dashboard");
  }, []);

  function clearInputs() {
    setUsername("");
    setPassword("");
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="bg-gray-900 rounded-xl shadow-lg p-8 w-full max-w-sm">
        <h1 className="text-3xl font-bold text-center text-white mb-6">
          Login to Dashboard
        </h1>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
            </label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 border border-gray-700 rounded bg-gray-800 text-white"
              placeholder="Enter username"
              autoComplete="username"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
            </label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-700 rounded bg-gray-800 text-white"
              placeholder="Enter password"
              autoComplete="current-password"
            />
          </div>
          <button
            onClick={handleSubmit}
            type="button"
            className="w-full bg-blue-600 text-white font-bold py-2 rounded hover:bg-blue-700 transition"
          >
            Login
          </button>
          <button
            type="button"
            onClick={clearInputs}
            className="w-full bg-red-500 text-white font-bold px-5 py-1 rounded hover:bg-red-600 transition"
          >
            Clear
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;