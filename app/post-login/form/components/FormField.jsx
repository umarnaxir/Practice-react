"use client";
import React from "react";
import { Field, ErrorMessage } from "formik";

//  Reusable input field component
export default function FormField({ name, type, placeholder, disabled }) {
  return (
    <div className="mb-3">
      <Field
        name={name}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        className={`w-full bg-gray-700 border border-gray-600 rounded p-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 ${
          disabled ? "opacity-50 cursor-not-allowed" : ""
        }`}
      />
      <ErrorMessage
        name={name}
        component="div"
        className="text-red-400 text-xs mt-1"
      />
    </div>
  );
}
