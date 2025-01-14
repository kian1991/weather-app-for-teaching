import { useState } from "react";
import { Container } from "./components/ui/container";
import { WeatherInputForm } from "./components/weather-input-form";
import { Position, WeatherApiResponse } from "./types";

export function App() {
  const [currentWeather, setCurrentWeather] =
    useState<WeatherApiResponse | null>(null);

  function handleCityInput(position: Position) {
    console.log("position", position);
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-tr from-blue-800 to-purple-900 pt-32">
      <Container>
        <h1 className="mb-6 text-3xl tracking-tighter text-white">
          React Weather App
        </h1>
        <WeatherInputForm onCityInput={handleCityInput} />
      </Container>
    </div>
  );
}
