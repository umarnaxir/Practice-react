"use client";
import React from "react";
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
  Sparkles,
  Eye,
  MapPin
} from "lucide-react";

function DashboardOverview() {

  const stats = [
    { name: "TodoList", icon: CheckSquare, count: "2 Tasks", color: "blue" },
    { name: "Todo Updated", icon: ListChecks, count: "5 Items", color: "green" },
    { name: "Weather", icon: Cloud, count: "Live Data", color: "sky" },
    { name: "Progress Bar", icon: TrendingUp, count: "Demo", color: "purple" },
    { name: "Apollo", icon: Globe, count: "GraphQL", color: "indigo" },
    { name: "Landing Page", icon: Sparkles, count: "Styled Components", color: "pink" },
    { name: "Formik Form", icon: FileText, count: "Validation", color: "yellow" },
    { name: "Calculator", icon: Calculator, count: "Interactive", color: "red" },
    { name: "Portal", icon: Link2, count: "React Portal", color: "cyan" },
    { name: "Counter", icon: Palette, count: "Examples", color: "orange" },
    { name: "Observer", icon: Eye, count: "Intersection", color: "violet" },
    { name: "Country", icon: MapPin, count: "GraphQL API", color: "emerald" },
  ];

  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-2 text-white">
          Welcome to Dashboard
        </h1>
        <p className="text-lg mb-8 text-gray-400">
          Select a section from the sidebar to get started
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.name}
                className="p-6 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer bg-black border-2 border-orange-500/30 hover:border-orange-500/50"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-orange-500/20">
                    <Icon className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{stat.name}</h3>
                    <p className="text-gray-400">
                      {stat.count}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Welcome Card */}
        <div className="mt-8 p-8 rounded-xl shadow-lg bg-black border-2 border-orange-500/30">
          <h2 className="text-2xl font-bold mb-4 text-white">Getting Started</h2>
          <p className="text-gray-300">
            This dashboard contains various React components and demos. Use the sidebar navigation
            to explore different sections including TodoList, Weather app, Apollo GraphQL examples,
            and more.
          </p>
        </div>
      </div>
    </div>
  );
}

export default DashboardOverview;