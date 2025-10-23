"use client";
import React from "react";
import PortalRoot from "../../../components/PortalRoot";

export default function Modal({ open, onClose, children }) {
  if (!open) return null;

  return (
    <PortalRoot>
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div
          className="absolute inset-0 bg-black/50"
          onClick={onClose}
        />
        <div className="relative z-10 bg-white rounded-lg shadow-lg p-16 w-100 text-center">
          {children}
          <button
            onClick={onClose}
            className="mt-4 px-8 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Close
          </button>
        </div>
      </div>
    </PortalRoot>
  );
}
