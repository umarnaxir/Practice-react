import React from "react";
import Weather from "../weather/components/Weather";

const WeatherPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100">
      <Weather />
    </div>
  );
}
export default WeatherPage;