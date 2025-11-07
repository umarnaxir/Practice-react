"use client";
import { useState, useEffect } from "react";

export default function HomePage() {
  const [company, setCompany] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://spacex-production.up.railway.app/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: `
            query ExampleQuery {
              company {
                employees
                ceo
                founded
                founder
                headquarters {
                  address
                  city
                  state
                }
              }
            }
          `,
        }),
      });

      const { data } = await res.json();

      setTimeout(() => {
        setCompany(data.company);
        setLoading(false);
      }, 1000);
    }

    fetchData();
  }, []);

  if (loading) {
    return (
      <main className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          {/* <p className="mt-4 text-gray-600 font-medium">Loading...</p> */}
        </div>
      </main>
    );
  }

  return (
    <main className=" items-start justify-start min-h-screen bg-gray-50">
      <div className="mx-auto p-6 bg-white">
        <h1 className="text-2xl font-bold text-start text-blue-700 mb-4">
          SpaceX Company Info
        </h1>

        <div className="space-y-2 text-gray-700">
          <p><strong>CEO:</strong> {company.ceo}</p>
          <p><strong>Founder:</strong> {company.founder}</p>
          <p><strong>Founded:</strong> {company.founded}</p>
          <p><strong>Employees:</strong> {company.employees}</p>

          <div className="mt-4">
            <h2 className="font-semibold text-gray-800">Headquarters:</h2>
            <p>{company.headquarters.address}</p>
            <p>
              {company.headquarters.city}, {company.headquarters.state}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
