"use client";
import React from "react";
import { Field, ErrorMessage } from "formik";

export default function FormField({ label, name, type }) {
  return (
    <div className="flex flex-col mb-4">
      <label htmlFor={name} className="font-semibold mb-1">
        {label}
      </label>
      <Field
        type={type}
        name={name}
        id={name}
        className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-blue-500"
      />
      <ErrorMessage
        name={name}
        component="div"
        className="text-red-500 text-sm mt-1"
      />
    </div>
  );
}
