"use client";
import React, { useEffect, useTransition, useState } from "react";
import { usePathname } from "next/navigation";
import { Loader } from "lucide-react";

export default function NavigationLoader() {
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const [prevPath, setPrevPath] = useState(pathname);

  // Detect route changes and trigger a transition
  useEffect(() => {
    if (pathname !== prevPath) {
      startTransition(() => {
        setPrevPath(pathname);
      });
    }
  }, [pathname, prevPath]);

  // Show overlay loader while transition is active
  if (isPending) {
    return (
      <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm">
        <Loader className="w-12 h-12 text-orange-500 animate-spin" />
      </div>
    );
  }

  return null;
}
