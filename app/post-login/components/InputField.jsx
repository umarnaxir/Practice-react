import React from "react";

const InputField = ({ value, onChange, placeholder }) => (
  <input
    type="text"
    value={value}
    onChange={(e) => onChange(e.target.value)}
    className="flex-1 border-2 border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-indigo-500 transition-colors duration-200 bg-white"
    placeholder={placeholder}
  />
);

export default InputField;
