import React from "react";

const SectionBox = ({ title, children }) => (
  <div className="bg-amber-300 w-[500px] min-h-[300px] p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl">
    <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center uppercase border-b-2 border-black pb-2">
      {title}
    </h1>
    {children}
  </div>
);

export default SectionBox;
