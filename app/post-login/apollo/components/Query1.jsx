"use client";
import React, { useEffect, useState } from "react";
import { ApolloClient, InMemoryCache, HttpLink, gql } from "@apollo/client";
const client = new ApolloClient({
  link: new HttpLink({ uri: "https://countries.trevorblades.com/" }),
  cache: new InMemoryCache(),
});
const GET_COUNTRIES = gql`
  query {
    countries {
      code
      name
      emoji
    }
  }
`;
// interface Country {
//   code: string;
//   name: string;
//   emoji: string;
// }

export default function ApolloPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    client
      .query({ query: GET_COUNTRIES })
      .then((result) => {
        // @ts-ignore
        setData(result.data.countries);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <div style={{ marginTop:"100px",padding: 20 }}>
      <h1> Countries</h1>
      <ul>
        {data.slice(0, 30).map((c) => (
          <li key={c.code}>
            {c.emoji} {c.name} ({c.code})
          </li>
        ))}
      </ul>
    </div>
  );
}