import React from "react";

export default function Toast({ message, visible }) {
  if (!visible) return null;
  return (
    <div className="fixed bottom-4 right-4 bg-amber-400 text-grey-700 px-4 py-3 font-bold rounded shadow-lg flex items-center z-50">
      <span>{message}</span>
    </div>
  );
}