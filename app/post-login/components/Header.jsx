"use client";
import React from "react";
import SearchBar from "./SearchBar";

const Header = ({ title, searchQuery, setSearchQuery }) => {
  return (
    <div className="w-full max-w-3xl mx-auto text-center border-b border-amber-300">
      <h1 className="text-4xl font-bold text-white uppercase mb-4">
        {title}
      </h1>
      <div className="flex justify-center">
        <SearchBar
          placeholder="Search tasks..."
          value={searchQuery}
          onChange={setSearchQuery}
        />
      </div>
    </div>
  );
};

export default Header;
