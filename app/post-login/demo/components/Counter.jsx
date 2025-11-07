"use client";
import { useState } from "react";
function Demo() {
  const [count, setCount] = useState(0);
  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    setCount(count - 1);
  }
  function reset() {
    setCount(0);
  }

  return (
    <div className=" bg-gray-50 justify-center items-center min-h-screen py-80 w-full font-bold text-black text-center">
      <h1 className="px-8 py-8 text-3xl">Let's Count: {count}</h1>
      <button
        onClick={increment}
        className="bg-green-600 hover:bg-green-800 text-white rounded-xl py-3 px-3 p-2 m-2"
      >
        Increment
      </button>
      <button
        onClick={decrement}
        className="bg-blue-600 hover:bg-blue-800 text-white rounded-xl py-3 px-3 p-2 m-2"
      >
        Decrement
      </button>
      <button
        onClick={reset}
        className="bg-orange-600 hover:bg-orange-800 text-white rounded-xl py-3 px-7 p-2 m-2"
      >
        Reset
      </button>
    </div>
  );
}
export default Demo;
