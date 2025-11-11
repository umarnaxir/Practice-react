"use client";
import React, { useState, useEffect } from "react";
import { Loader } from "lucide-react";

const PageLoader = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black">
        <Loader className="w-20 h-20 text-white animate-spin" />
      </div>
    );
  }

  return <>{children}</>;
};

export default PageLoader;

