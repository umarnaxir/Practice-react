"use client";
import React, { useState, useEffect } from "react";
import { ApolloClient, InMemoryCache, HttpLink, gql } from "@apollo/client";

const client = new ApolloClient({
  link: new HttpLink({ uri: "https://countries.trevorblades.com/" }),
  cache: new InMemoryCache(),
});

export default function CountrySearch() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    client
      .query({
        query: gql`
          query {
            countries {
              code
              name
              currencies
            }
          }
        `,
      })
      .then((result) => {
        setCountries(result.data.countries);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (search.trim() === "") {
      setFiltered([]);
    } else {
      try {
        const regex = new RegExp(search, "i");
        const matches = countries.filter((c) => regex.test(c.name));
        setFiltered(matches);
      } catch (err) {
        setFiltered([]);
      }
    }
  }, [search, countries]);

  if (loading) return <p className="text-white text-center mt-10">Loading...</p>;
  if (error) return <p className="text-white text-center mt-10">Error: {error}</p>;

  return (
    <div className="flex min-h-screen items-center justify-center bg-black overflow-hidden">
      <div className="w-full max-w-md bg-gray-900 p-6 rounded-xl shadow-lg flex flex-col items-center">
        <h1 className="text-2xl font-bold text-white mb-4">Country Search</h1>
        <input
          type="text"
          placeholder="Type country name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-3 mb-4 rounded bg-white text-black focus:outline-none text-center"
        />

        <div className="w-full max-h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900 rounded-lg px-2">
          {filtered.length > 0 ? (
            <ul className="text-white space-y-2">
              {filtered.map((c) => (
                <li
                  key={c.code}
                  className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all"
                >
                  <span className="font-semibold">{c.name}</span> — Code: {c.code} — Currencies:{" "}
                  {c.currencies?.join(", ") || "N/A"}
                </li>
              ))}
            </ul>
          ) : search ? (
            <p className="text-white text-center">No countries found</p>
          ) : (
            <p className="text-gray-400 text-center">Start typing to search countries</p>
          )}
        </div>
      </div>
    </div>
  );
}
