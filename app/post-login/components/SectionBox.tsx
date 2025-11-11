import React from "react";

const SectionBox = ({ title, children }) => (
  <div className="bg-amber-400 w-full min-h-[400px] p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl">
    <h1 className="text-3xl font-bold text-black mb-6 text-center uppercase border-b-2 border-black pb-2">
      {title}
    </h1>
    {children}
  </div>
);

export default SectionBox;
