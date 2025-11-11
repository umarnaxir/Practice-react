"use client";
import React, { useState, useEffect } from "react";
import { 
  Menu, 
  X, 
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
  ChevronRight
} from "lucide-react";

function DashboardPage() {
  const [theme, setTheme] = useState("light");
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activePath, setActivePath] = useState("post-login/todo");

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
    { name: "TodoList", path: "post-login/todo", icon: CheckSquare },
    { name: "Todo Updated", path: "post-login/todolist", icon: ListChecks },
    { name: "Weather", path: "post-login/weather", icon: Cloud },
    { name: "Progress Bar", path: "post-login/progressBar", icon: TrendingUp },
    { name: "Apollo", path: "post-login/apollo", icon: Globe },
    { name: "Portal", path: "post-login/portal", icon: Link2 },
    { name: "Formik Form", path: "post-login/form", icon: FileText },
    { name: "Calculator", path: "post-login/calculator", icon: Calculator },
    { name: "Demo", path: "post-login/demo", icon: Palette },
  ];

  return (
    <div
      className={`min-h-screen flex transition-colors duration-300 ${
        theme === "dark" ? "bg-black text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Sidebar */}
      <aside
        className={`${
          isCollapsed ? "w-20" : "w-64"
        } ${
          theme === "dark" ? "bg-black border-orange-500/20" : "bg-white border-gray-200"
        } border-r transition-all duration-300 flex flex-col`}
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
        <nav className="flex-1 p-4 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activePath === item.path;
            
            return (
              <button
                key={item.path}
                onClick={() => setActivePath(item.path)}
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
              </button>
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

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">
            Welcome to the Dashboard
          </h1>

          {/* Content Area */}
          <div
            className={`p-8 rounded-xl shadow-lg ${
              theme === "dark" 
                ? "bg-black border-2 border-orange-500/30 shadow-orange-500/20" 
                : "bg-white"
            }`}
          >
            <div className="flex items-center gap-3 mb-4">
              {React.createElement(
                navItems.find((item) => item.path === activePath)?.icon || CheckSquare,
                { className: `w-8 h-8 ${theme === "dark" ? "text-orange-500" : "text-blue-500"}` }
              )}
              <h2 className="text-2xl font-semibold">
                {navItems.find((item) => item.path === activePath)?.name}
              </h2>
            </div>
            <p className={theme === "dark" ? "text-gray-300" : "text-gray-600"}>
              Content for {navItems.find((item) => item.path === activePath)?.name} will be displayed here.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default DashboardPage;