"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTheme } from "../context/ThemeContext";
import { Sun, Moon, LogOut, Menu, X, LayoutGrid } from "lucide-react";

export default function Header() {
  const [activeTab, setActiveTab] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const router = useRouter();

  useEffect(() => {
    const slug = window.location.pathname.slice(1);
    setActiveTab(slug);
  }, []);

  // Close mobile menu when window is resized to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems = [
    { name: "Dashboard", path: "dashboard" },
    { name: "TodoList", path: "/todo" },
    { name: "Todo Updated", path: "todolist" },
    { name: "Weather", path: "weather" },
    { name: "Progress Bar", path: "progressBar" },
    { name: "Apollo", path: "apollo" },
    { name: "Landing Page", path: "styled-components" },
    { name: "Formik Form", path: "form" },
    { name: "Calculator", path: "calculator" },
    { name: "Portal", path: "portal" },
    { name: "Counter", path: "demo" },
  ];

  const handleLogout = () => {
    localStorage.setItem("isLogin", "false");
    router.push("/");
  };

  const handleNavClick = (path) => {
    router.push(`/post-login/${path}`)
    setActiveTab(path);
    setIsDropdownOpen(false);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 p-2 sm:p-4">
      <nav
        className={`w-full rounded-xl sm:rounded-2xl shadow-xl transition-all duration-300 ${
          theme === "dark"
            ? "bg-gradient-to-r from-black via-gray-900 to-black"
            : "bg-gradient-to-r from-white via-orange-50 to-white"
        }`}
      >
        <div className="px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            {/* Desktop Navigation - Dropdown Menu */}
            <div className="hidden lg:flex items-center relative">
              <button
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold transition-all duration-200 hover:scale-105 shadow-md ${
                  theme === "dark"
                    ? "bg-gray-800 text-white hover:bg-orange-600"
                    : "bg-white text-black hover:bg-orange-500 hover:text-white"
                }`}
              >
                <LayoutGrid size={20} />
                <span>Navigation</span>
              </button>

              {/* Dropdown Menu with Grid Layout */}
              {isDropdownOpen && (
                <div
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                  className={`absolute top-full left-0 w-[600px] rounded-xl shadow-2xl p-4 z-50 ${
                    theme === "dark"
                      ? "bg-gray-900 border border-gray-800"
                      : "bg-white border border-orange-200"
                  }`}
                >
                  <div className="grid grid-cols-3 gap-2">
                    {navItems.map((item) => (
                      <div
                        key={item.path}
                        onClick={() => handleNavClick(item.path)}
                        className={`px-4 py-3 rounded-lg font-semibold transition-all duration-200 text-center ${
                          activeTab === item.path
                            ? theme === "dark"
                              ? "bg-orange-600 text-white shadow-lg"
                              : "bg-orange-500 text-white shadow-lg"
                            : theme === "dark"
                            ? "text-white hover:bg-gray-800"
                            : "text-black hover:bg-orange-100"
                        }`}
                      >
                        {item.name}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Mobile Navigation Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-semibold transition-all duration-200 shadow-md ${
                  theme === "dark"
                    ? "bg-gray-800 text-white"
                    : "bg-white text-black"
                }`}
              >
                <LayoutGrid size={20} />
                <span>Navigation</span>
              </button>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className={`p-2 sm:p-3 rounded-lg sm:rounded-xl transition-all duration-200 hover:scale-110 ${
                  theme === "dark"
                    ? "bg-gray-800 text-orange-400 hover:bg-orange-600 hover:text-white shadow-md"
                    : "bg-white text-orange-600 hover:bg-orange-500 hover:text-white shadow-md"
                }`}
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              {/* Logout Button - Desktop only */}
              <button
                onClick={handleLogout}
                className={`hidden sm:flex items-center gap-2 px-4 lg:px-5 py-2 lg:py-2.5 rounded-lg sm:rounded-xl font-semibold transition-all duration-200 hover:scale-105 shadow-md hover:shadow-lg text-sm lg:text-base ${
                  theme === "dark"
                    ? "bg-orange-600 text-white hover:bg-orange-700"
                    : "bg-orange-500 text-white hover:bg-orange-600"
                }`}
              >
                <LogOut size={16} />
                <span>Logout</span>
              </button>

              {/* Close Menu Button for Mobile */}
              {isMobileMenuOpen && (
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`lg:hidden p-2 sm:p-3 rounded-lg sm:rounded-xl transition-all duration-200 ${
                    theme === "dark"
                      ? "bg-gray-800 text-white"
                      : "bg-white text-black"
                  }`}
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              )}
            </div>
          </div>

          {/* Mobile Menu Dropdown with Grid */}
          {isMobileMenuOpen && (
            <div className="lg:hidden mt-4 pt-4 border-t border-orange-200 dark:border-gray-800">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {navItems.map((item) => (
                  <div
                    key={item.path}
                    onClick={() => handleNavClick(item.path)}
                    className={`px-3 py-3 rounded-lg font-semibold transition-all duration-200 text-center text-sm ${
                      activeTab === item.path
                        ? theme === "dark"
                          ? "bg-orange-600 text-white shadow-lg"
                          : "bg-orange-500 text-white shadow-lg"
                        : theme === "dark"
                        ? "bg-gray-800 text-white hover:bg-gray-700"
                        : "bg-white text-black hover:bg-orange-100"
                    }`}
                  >
                    {item.name}
                  </div>
                ))}
              </div>
              
              {/* Mobile Logout Button */}
              <button
                onClick={handleLogout}
                className={`w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-semibold transition-all duration-200 mt-4 ${
                  theme === "dark"
                    ? "bg-orange-600 text-white hover:bg-orange-700"
                    : "bg-orange-500 text-white hover:bg-orange-600"
                }`}
              >
                <LogOut size={18} />
                <span>Logout</span>
              </button>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}