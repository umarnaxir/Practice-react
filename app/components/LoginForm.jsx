"use client";
import React, { useState } from "react";
import { redirect } from "next/navigation";


function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    if (username === "umar" && password === "1122") 
     redirect('/dashboard');
     else 
      alert("Login failed");
    
  }
  function clearInputs(e) {
    setUsername("");
    setPassword("");
  }
  function handleOnChangeUsername(e) {
    setUsername(e.target.value);
  }
  function handleOnChangePassword(e) {
    setPassword(e.target.value);
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-600">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-sm">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">Login Please</h1>
        <form className="space-y-4">
          <div className="text-black">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-black mb-1"
            >
              Username
            </label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={handleOnChangeUsername}  
              className="w-full px-3 py-2 border border-gray-900 rounded"
              autoComplete="username"
            />
          </div>
          <div className="text-black">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-900 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              value={password}
              name="password"
              onChange={handleOnChangePassword}    
              className="w-full px-3 py-2 border border-gray-900 rounded"
              autoComplete="current-password"
            />
          </div>
          <button onClick={handleSubmit}
            type="button"
            className="w-full bg-blue-500 text-white font-bold py-2 rounded hover:bg-blue-700 transition"
          >
            Login
          </button>
          <button type="button" onClick={clearInputs}

            className="w-full bg-red-400 text-white font-bold py-2 rounded hover:bg-red-700 transition"
          >
            Clear
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;