"use client";
import React, { useState, useEffect, useRef } from "react";
import { ApolloClient, InMemoryCache, HttpLink, gql } from "@apollo/client";
import Link from "next/link";

const client = new ApolloClient({
  link: new HttpLink({ uri: "https://countries.trevorblades.com/" }),
  cache: new InMemoryCache(),
});

const GET_COUNTRIES = gql`
  query {
    countries {
      name
      code
      capital
      currency
    }
  }
`;

export default function CountryForm() {
  const [search, setSearch] = useState("");
  const [countries, setCountries] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [searchLoading, setSearchLoading] = useState(false);
  const dropdownRef = useRef();

  // Fetch countries once
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const { data } = await client.query({ query: GET_COUNTRIES });
        setCountries(data.countries);
        setFiltered(data.countries);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };
    fetchCountries();
  }, []);

  // Handle search typing with loader (debounce)
  useEffect(() => {
    if (!countries.length) return;

    setSearchLoading(true);
    const delay = setTimeout(() => {
      if (search.trim() === "") {
        setFiltered(countries);
      } else {
        const regex = new RegExp(search, "i");
        setFiltered(countries.filter((c) => regex.test(c.name)));
      }
      setSearchLoading(false);
    }, 500); // 0.5s debounce

    return () => clearTimeout(delay);
  }, [search, countries]);

  const handleSelect = (country) => {
    setSelectedCountry(country);
    setSearch(country.name);
    setFiltered([]);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-4">
      <div className="bg-gray-700 p-6 rounded-lg shadow-md w-full max-w-sm text-white relative border border-gray-600">
        <h1 className="text-xl font-semibold text-center mb-6 text-gray-100">
          Please Select Country
        </h1>

        {/* Search + Dropdown */}
        <div className="relative mb-5">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Type country name..."
            className="p-2 rounded-md w-full bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-300"
          />

          {/* Dropdown appears when search is not empty */}
          {search.trim() !== "" && filtered.length > 0 && (
            <div
              ref={dropdownRef}
              className="absolute top-full left-0 w-full bg-gray-800 border border-gray-600 rounded-md mt-1 z-10 
                         max-h-40 overflow-y-auto shadow-lg"
            >
              {filtered.map((c) => (
                <div
                  key={c.code}
                  onClick={() => handleSelect(c)}
                  className={`p-2 cursor-pointer hover:bg-yellow-500 transition-colors ${
                    selectedCountry?.code === c.code
                      ? "bg-yellow-400 text-black"
                      : "text-gray-200"
                  }`}
                >
                  {c.name}
                </div>
              ))}
            </div>
          )}

          {/* No results */}
          {search.trim() !== "" && filtered.length === 0 && (
            <div className="absolute top-full left-0 w-full bg-gray-800 border border-gray-600 rounded-md mt-1 text-center text-gray-400 py-2">
              No country found
            </div>
          )}
        </div>

        {/* Selected Country Box */}
        <div className="bg-amber-200 p-4 mt-13 rounded-md text-black min-h-[180px] flex flex-col justify-center items-center">
          {searchLoading ? (
            <div className="text-3xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="100"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="animate-spin text-black"
              >
                <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0" opacity="0.25" />
                <path
                  d="M21 12a9 9 0 01-9 9"
                  strokeDasharray="28.3 28.3"
                  strokeDashoffset="28.3"
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    values="28.3;0"
                    dur="1.5s"
                    repeatCount="indefinite"
                  />
                </path>
              </svg>
            </div>
          ) : selectedCountry ? (
            <>
              <p className="mb-2">
                Selected:{" "}
                <span className="font-semibold">{selectedCountry.name}</span>
              </p>
              <p className="text-sm">
                <span className="font-medium">Country Code:</span>{" "}
                {selectedCountry.code}
              </p>
              <p className="text-sm">
                <span className="font-medium">Capital:</span>{" "}
                {selectedCountry.capital || "N/A"}
              </p>
              <p className="text-sm mb-4">
                <span className="font-medium">Currency:</span>{" "}
                {selectedCountry.currency || "N/A"}
              </p>
              <Link href={`/country/${selectedCountry.code}`}>
                <button className="w-full px-18 py-2 bg-green-600 hover:bg-green-700 text-white text-sm rounded-md transition-colors">
                  Visit
                </button>
              </Link>
            </>
          ) : (
            <p className="text-center text-gray-700 font-medium">
              No Selected Country...
            </p>
          )}
        </div>
      </div>
    </div>
  );
}