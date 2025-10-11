import React from "react";
export default function Toast({ message, onClose, visible }) {
  if (!visible) return null;
  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-4 py-2 rounded shadow-lg flex items-center z-50">
      <span className="mr-4">{message}</span>
      <button
        onClick={onClose}
        className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded"
      >
        Close
      </button>
    </div>
  );
}