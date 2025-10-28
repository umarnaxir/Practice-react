"use client";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function PortalRoot({ children }) {
  const [mounted, setMounted] = useState(false);
  const [portalNode, setPortalNode] = useState(null);

  useEffect(() => {
    let node = document.getElementById("portal-root");
    if (!node) {
      node = document.createElement("div");
      node.id = "portal-root";
      document.body.appendChild(node);
    }
    setPortalNode(node);
    setMounted(true);

    return () => {
      if (node && node.parentNode) {
        node.parentNode.removeChild(node);
      }
    };
  }, []);

  if (!mounted || !portalNode) return null;
  return createPortal(children, portalNode);
}

// function delay(abc) {
//   return new Promise((resolve) => setTimeout(resolve, abc));
// }

// async function logNumbers(number = 1) {
//   if (number > 4) return;
//   console.log(number);
//   await delay(2000);
//   await logNumbers(number + 1);    
// }

// logNumbers();