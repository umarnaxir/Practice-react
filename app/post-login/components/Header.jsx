"use client";
import React, { useState } from "react";
import SearchBar from "./SearchBar";

const Header = ({
  title = "App",
  searchQuery: propQuery,
  setSearchQuery: propSetSearchQuery,
}) => {
  const [localQuery, setLocalQuery] = useState("");
  const value = propQuery !== undefined ? propQuery : localQuery;
  const onChange =
    propSetSearchQuery !== undefined ? propSetSearchQuery : setLocalQuery;

  return (
    <div className="w-full max-w-3xl mx-auto text-center py-6 border-b border-amber-300">
      <h1 className="text-4xl font-bold text-white uppercase mb-4">
        {title}
      </h1>
      <div className="flex justify-center">
        <SearchBar
          placeholder="Search tasks..."
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default Header;
