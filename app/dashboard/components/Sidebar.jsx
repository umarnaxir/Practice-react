"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  CheckSquare,
  ListChecks,
  Cloud,
  TrendingUp,
  Globe,
  Link2,
  FileText,
  Calculator,
  Palette,
  Sun,
  Moon,
  ChevronLeft,
  ChevronRight,
  Home,
  Sparkles,
  Eye,
  MapPin
} from "lucide-react";

function Sidebar({ isCollapsed, setIsCollapsed }) {
  const [theme, setTheme] = useState("light");
  const pathname = usePathname();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const navItems = [
    { name: "Overview", path: "/dashboard", icon: Home },
    { name: "TodoList", path: "/dashboard/todo", icon: CheckSquare },
    { name: "Todo Updated", path: "/dashboard/todolist", icon: ListChecks },
    { name: "Weather", path: "/dashboard/weather", icon: Cloud },
    { name: "Progress Bar", path: "/dashboard/progressBar", icon: TrendingUp },
    { name: "Apollo", path: "/dashboard/apollo", icon: Globe },
    { name: "Landing Page", path: "/dashboard/landing-page", icon: Sparkles },
    { name: "Formik Form", path: "/dashboard/form", icon: FileText },
    { name: "Calculator", path: "/dashboard/calculator", icon: Calculator },
    { name: "Portal", path: "/dashboard/portal", icon: Link2 },
    { name: "Counter", path: "/dashboard/demo", icon: Palette },
    { name: "Observer", path: "/dashboard/intersection-observer", icon: Eye },
    { name: "Country", path: "/dashboard/country", icon: MapPin },
  ];

  return (
    <aside
      className={`${
        isCollapsed ? "w-20" : "w-64"
      } ${
        theme === "dark" ? "bg-black border-orange-500/20" : "bg-white border-gray-200"
      } border-r transition-all duration-300 flex flex-col fixed left-0 top-0 h-screen z-40`}
    >
      {/* Sidebar Header */}
      <div className={`p-4 flex items-center justify-between border-b ${
        theme === "dark" ? "border-orange-500/20" : "border-gray-200"
      }`}>
        {!isCollapsed && (
          <h2 className="text-xl font-bold">Dashboard</h2>
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className={`p-2 rounded-lg transition-colors ${
            isCollapsed ? "mx-auto" : ""
          } ${
            theme === "dark" 
              ? "hover:bg-orange-500/10 text-white" 
              : "hover:bg-gray-100"
          }`}
        >
          {isCollapsed ? (
            <ChevronRight className="w-5 h-5" />
          ) : (
            <ChevronLeft className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.path;
          
          return (
            <Link
              key={item.path}
              href={item.path}
              className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-200 ${
                isActive
                  ? theme === "dark"
                    ? "bg-orange-500 text-black shadow-lg shadow-orange-500/50"
                    : "bg-blue-500 text-white"
                  : theme === "dark"
                  ? "hover:bg-orange-500/10 text-white"
                  : "hover:bg-gray-100 text-gray-700"
              } ${isCollapsed ? "justify-center" : ""}`}
              title={isCollapsed ? item.name : ""}
            >
              <Icon className="w-5 h-5 flex-shrink-0" />
              {!isCollapsed && (
                <span className="text-sm font-medium">{item.name}</span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Theme Toggle */}
      <div className={`p-4 border-t ${
        theme === "dark" ? "border-orange-500/20" : "border-gray-200"
      }`}>
        <button
          onClick={toggleTheme}
          className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg transition-colors ${
            theme === "dark"
              ? "hover:bg-orange-500/10 text-white"
              : "hover:bg-gray-100 text-gray-700"
          } ${isCollapsed ? "justify-center" : ""}`}
          title={isCollapsed ? "Toggle Theme" : ""}
        >
          {theme === "dark" ? (
            <Sun className="w-5 h-5 flex-shrink-0" />
          ) : (
            <Moon className="w-5 h-5 flex-shrink-0" />
          )}
          {!isCollapsed && (
            <span className="text-sm font-medium">
              {theme === "dark" ? "Light Mode" : "Dark Mode"}
            </span>
          )}
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;

