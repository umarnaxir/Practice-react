"use client";
import React, { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { ApolloClient, InMemoryCache, HttpLink, gql } from "@apollo/client";

const client = new ApolloClient({
  link: new HttpLink({ uri: "https://countries.trevorblades.com/" }),
  cache: new InMemoryCache(),
});

const GET_COUNTRY = gql`
  query GetCountry($code: ID!) {
    country(code: $code) {
      name
      code
      capital
      currency
      currencies
      awsRegion
      emoji
      emojiU
      native
      phone
      phones
      continent {
        name
      }
      languages {
        name
      }
      states {
        name
      }
      subdivisions {
        name
      }
    }
  }
`;

export default function CountryPage() {
  const { code } = useParams();
  const router = useRouter();
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [minLoadingTimeElapsed, setMinLoadingTimeElapsed] = useState(false);

  useEffect(() => {
    if (!code) return;

    const timer = setTimeout(() => {
      setMinLoadingTimeElapsed(true);
    }, 1000);

    const fetchCountry = async () => {
      try {
        const { data } = await client.query({
          query: GET_COUNTRY,
          variables: { code: code.toUpperCase() },
        });
        setCountry(data.country);
      } catch (err) {
        setError("⚠️ Failed to fetch country data");
      } finally {
        if (minLoadingTimeElapsed) {
          setLoading(false);
        }
      }
    };

    fetchCountry();

    return () => clearTimeout(timer);
  }, [code, minLoadingTimeElapsed]);

  useEffect(() => {
    if (minLoadingTimeElapsed && !loading) {
      setLoading(false);
    }
  }, [minLoadingTimeElapsed, loading]);

  if (loading || !minLoadingTimeElapsed) {
    return (
      <div className="w-screen h-screen flex items-center justify-center bg-black text-white">
        <div className="text-4xl">
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
            className="animate-spin text-white"
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
      </div>
    );
  }

  if (error || !country) {
    return (
      <div className="w-screen h-screen flex items-center justify-center bg-black text-gray-300">
        <p className="text-lg">{error || "❌ Country not found"}</p>
      </div>
    );
  }

  return (
    <div className="w-screen min-h-screen bg-black text-gray-200 flex flex-col items-center py-10 px-4 overflow-y-auto">
      <div className="w-full max-w-4xl flex flex-col gap-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-2 flex justify-center items-center gap-3">
            <span className="text-5xl">{country.emoji}</span>
            {country.name}
          </h1>
          <p className="text-gray-400 text-sm tracking-wide uppercase">
            Code: {country.code} • Continent: {country.continent?.name || "N/A"}
          </p>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* General Info */}
          <div className="bg-gray-900 rounded-2xl p-6 shadow-md border border-gray-800 hover:border-gray-700 transition">
            <h2 className="text-lg font-semibold text-gray-100 mb-4">
              General Information
            </h2>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <span className="text-gray-300">Native Name:</span>{" "}
                {country.native || "N/A"}
              </li>
              <li>
                <span className="text-gray-300">Capital:</span>{" "}
                {country.capital || "N/A"}
              </li>
              <li>
                <span className="text-gray-300">AWS Region:</span>{" "}
                {country.awsRegion || "N/A"}
              </li>
            </ul>
          </div>

          {/* Cultural Info */}
          <div className="bg-gray-900 rounded-2xl p-6 shadow-md border border-gray-800 hover:border-gray-700 transition">
            <h2 className="text-lg font-semibold text-gray-100 mb-4">
              Cultural Details
            </h2>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <span className="text-gray-300">Emoji Unicode:</span>{" "}
                {country.emojiU || "N/A"}
              </li>
              <li>
                <span className="text-gray-300">Languages:</span>{" "}
                {country.languages?.length > 0
                  ? country.languages.map((l) => l.name).join(", ")
                  : "N/A"}
              </li>
            </ul>
          </div>

          {/* Currency & Communication */}
          <div className="bg-gray-900 rounded-2xl p-6 shadow-md border border-gray-800 hover:border-gray-700 transition">
            <h2 className="text-lg font-semibold text-gray-100 mb-4">
              Currency & Communication
            </h2>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <span className="text-gray-300">Phone Codes:</span>{" "}
                {country.phones?.length > 0
                  ? country.phones.join(", ")
                  : country.phone || "N/A"}
              </li>
              <li>
                <span className="text-gray-300">Currencies:</span>{" "}
                {country.currencies?.length > 0
                  ? country.currencies.join(", ")
                  : country.currency || "N/A"}
              </li>
            </ul>
          </div>

          {/* States & Subdivisions */}
          <div className="bg-gray-900 rounded-2xl p-6 shadow-md border border-gray-800 hover:border-gray-700 transition">
            <h2 className="text-lg font-semibold text-gray-100 mb-4">
              Administrative Divisions
            </h2>
            <ul className="space-y-2 text-sm text-gray-400 max-h-48 pr-2 overflow-y-scroll">
              <li>
                <span className="text-gray-300">States:</span>{" "}
                {country.states?.length > 0
                  ? country.states.map((s) => s.name).join(", ")
                  : "N/A"}
              </li>
              <li>
                <span className="text-gray-300">Subdivisions:</span>{" "}
                {country.subdivisions?.length > 0
                  ? country.subdivisions.map((sub) => sub.name).join(", ")
                  : "N/A"}
              </li>
            </ul>
          </div>
        </div>

        {/* Back Button */}
        <div className="flex justify-center mt-6">
          <button
            onClick={() => router.back()}
            className="px-6 py-2 rounded-md bg-white text-black font-medium hover:bg-gray-200 transition"
          >
            ⬅ Back to Search
          </button>
        </div>
      </div>
    </div>
  );
}