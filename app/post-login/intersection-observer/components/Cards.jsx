"use client";
import React, { useEffect, useRef, useState } from "react";

const dummyImages = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=500&fit=crop",
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=500&fit=crop",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=500&fit=crop",
];

function Card({ index }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const imageSrc = dummyImages[index % 3];

  return (
    <div
      ref={cardRef}
      className={`transition-all duration-700 ease-in-out transform ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      } bg-white shadow-xl rounded-2xl overflow-hidden w-full max-w-2xl mx-auto`}
    >
      <div className="overflow-hidden">
        <img
          src={imageSrc}
          alt={`Card ${index + 1}`}
          className="w-full h-48 sm:h-64 md:h-80 object-cover transition-transform duration-500 ease-out hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl sm:text-2xl font-semibold text-black">
          Card #{index + 1}
        </h3>
      </div>
    </div>
  );
}

export default function IntersectionCardDemo() {
  const cards = Array.from({ length: 200 }, (_, i) => i);

  return (
    <div className="min-h-screen bg-black px-4 py-8 sm:px-6 sm:py-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold pt-20 mb-16 text-center text-white">
          Intersection Observer Demo
        </h1>

        <div className="flex flex-col gap-8 sm:gap-10 md:gap-12">
          {cards.map((i) => (
            <Card key={i} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}