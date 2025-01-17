import { useState } from "react";
import { Container } from "./components/ui/container";
import { WeatherInputForm } from "./components/weather-input-form";
import { Position } from "./types";
import { Card, CardBody, CardHeader } from "./components/ui/card/card";

export function App() {
  const [pos, setPos] = useState<Position | null>(null);

  async function handleCityInput(position: Position) {
    setPos(position);
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-tr from-blue-800 to-purple-900 pt-32">
      <Container>
        <h1 className="mb-6 text-3xl tracking-tighter text-white">
          React Weather App
        </h1>
        <WeatherInputForm onPositionChange={handleCityInput} />
        <Card className="mt-8">
          <CardHeader className="mb-2">Aktuelle Position</CardHeader>
          <CardBody className="text-xl">
            {pos?.lat}
            <hr></hr>
            {pos?.lng}
            {/* Temp:
            {currentWeather?.current_weather.temperature ?? (
              <div className="h-8 w-[130px] animate-pulse rounded-md bg-neutral-400/50"></div>
            )} */}
          </CardBody>
        </Card>
      </Container>
    </div>
  );
}
