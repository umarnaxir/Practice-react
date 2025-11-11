"use client";
import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import NavigationLoader from "./components/NavigationLoader";
import PageLoader from "./components/PageLoader";
import "../globals.css";

export default function DashboardLayout({ children }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="min-h-screen flex bg-black text-white relative">
      {/* Sidebar */}
      <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />

      {/* Page Content + Navigation Loader */}
      {/* <PageLoader> */}
        <main
          className={`flex-1 transition-all duration-300 ${
            isCollapsed ? "ml-20" : "ml-64"
          }`}
        >
          {children}
        </main>

        {/* Loader will overlay the screen during route changes */}
        <NavigationLoader />
      {/* </PageLoader> */}
    </div>
  );
}
