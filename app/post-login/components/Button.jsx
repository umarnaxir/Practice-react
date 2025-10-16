import React from "react";

const Button = ({
  text,
  onClick,
  bgColor = "bg-indigo-600",
  textColor = "text-white",
  size = "md",
  full = false,
  className = "",
}) => {
  const sizeClass =
    size === "sm"
      ? "px-3 py-1 text-sm"
      : size === "lg"
      ? "px-4 py-4 text-xl font-bold"
      : size === "xl"
      ? "px-10 py-4 text-xl font-bold"
      : "px-4 py-2 text-base";

  return (
    <button
      onClick={onClick}
      className={`${sizeClass} ${bgColor} ${textColor} ${
        full ? "w-full" : ""
      } rounded-lg transition-all duration-200 transform hover:scale-105 hover:brightness-110 ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
