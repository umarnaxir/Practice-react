"use client";
import React, { useState, useEffect } from "react";
import { ApolloClient, InMemoryCache, HttpLink, gql } from "@apollo/client";

const client = new ApolloClient({
  link: new HttpLink({ uri: "https://countries.trevorblades.com/" }),
  cache: new InMemoryCache(),
});

export default function CountrySearch() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    if (!search.trim()) {
      setResults([]);
      return;
    }

    if (timer) clearTimeout(timer);

    const newTimer = setTimeout(() => {
      fetchCountries(search);
    }, 400);

    setTimer(newTimer);
  }, [search]);

  const fetchCountries = async (query) => {
    setLoading(true);
    try {
      const { data } = await client.query({
        query: gql`
          query {
            countries {
              code
              name
              currencies
            }
          }
        `,
        fetchPolicy: "no-cache",
      });

      const regex = new RegExp(query, "i");
      const filtered = data.countries.filter((c) => regex.test(c.name));
      setResults(filtered);
    } catch (err) {
      console.error("Error:", err.message);
      setResults([]);
    } finally {
      setTimeout(() => setLoading(false), 1000);
    }
  };

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

        {loading ? (
          <div className="flex items-center justify-center w-full h-48">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-yellow-400"></div>
          </div>
        ) : (
          <div className="w-full max-h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900 rounded-lg px-2">
            {results.length > 0 ? (
              <ul className="text-white space-y-2">
                {results.map((c) => (
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
        )}
      </div>
    </div>
  );
}
