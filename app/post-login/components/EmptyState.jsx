import React from "react";

const EmptyState = ({ text = "No Items" }) => (
  <li className="text-lg text-gray-500 text-center">{text}</li>
);

export default EmptyState;
