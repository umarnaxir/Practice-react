"use client";
import { useState } from "react";

export default function Calculator() {
  const [input, setInput] = useState("");

  // Handle button click
  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  // Clear last character
  const handleBackspace = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  // Clear all
  const handleClear = () => {
    setInput("");
  };

  // Calculate result
  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-2xl shadow-xl w-80">
        {/* Display */}
        <div className="mb-4 p-4 bg-gray-200 rounded text-right text-2xl text-black">
          {input || "0"}
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-4 gap-2">
          {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+"].map(
            (btn) => (
              <button
                key={btn}
                onClick={() =>
                  btn === "=" ? handleCalculate() : handleClick(btn)
                }
                className="bg-gray-300 p-4 rounded-lg hover:bg-gray-400 text-xl font-bold text-black"
              >
                {btn}
              </button>
            )
          )}
        </div>

        {/* Extra Buttons */}
        <div className="grid grid-cols-2 gap-2 mt-4">
          <button
            onClick={handleClear}
            className="bg-red-500 p-4 rounded-lg hover:bg-red-600 text-xl font-bold text-white"
          >
            AC
          </button>
          <button
            onClick={handleBackspace}
            className="bg-yellow-400 p-4 rounded-lg hover:bg-yellow-500 text-xl font-bold text-black"
          >
            C
          </button>
        </div>
      </div>
    </div>
  );
}
