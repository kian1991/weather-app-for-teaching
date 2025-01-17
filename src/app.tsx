import { useState } from "react";
import { Container } from "./components/ui/container";
import { WeatherInputForm } from "./components/weather-input-form";
import { Position } from "./types";
import { Card, CardBody, CardHeader } from "./components/ui/card/card";
import { useWeather } from "./services/weather-service";

export function App() {
  const [pos, setPos] = useState<Position | null>(null);

  const { data, isLoading, error } = useWeather(pos);

  async function handlePositionChange(position: Position) {
    setPos(position);
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-tr from-blue-800 to-purple-900 pt-32">
      <Container>
        <h1 className="mb-6 text-3xl tracking-tighter text-white">
          React Weather App
        </h1>
        <WeatherInputForm onPositionChange={handlePositionChange} />
        <Card className="mt-8">
          <CardHeader className="mb-2">Aktuelles Wetter</CardHeader>
          <CardBody className="text-xl">
            {data && (
              <div className="mt-4 grid max-w-md grid-cols-2">
                <span className="text-bold">Temp</span>
                <span className="italic">
                  {data.current.temperature_2m}{" "}
                  {data.current_units.temperature_2m}
                </span>
                <span className="text-bold">Humidity</span>
                <span className="italic">
                  {data.current.relative_humidity_2m}{" "}
                  {data.current_units.relative_humidity_2m}
                </span>
                <span className="text-bold">Precipitation</span>
                <span className="italic">
                  {data.current.precipitation}{" "}
                  {data.current_units.precipitation}
                </span>
                <span className="text-bold">Wind Speeds</span>
                <span className="italic">
                  {data.current.wind_speed_10m}{" "}
                  {data.current_units.wind_speed_10m}
                </span>
              </div>
            )}
          </CardBody>
        </Card>
      </Container>
    </div>
  );
}
