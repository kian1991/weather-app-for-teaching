import { getWeatherUrl } from "../constants";
import { Position, WeatherApiResponse } from "../types";

export async function getWeatherData(
  position: Position,
): Promise<WeatherApiResponse | null> {
  const weatherApiUrl = getWeatherUrl(position);

  try {
    const response = await fetch(weatherApiUrl);
    if (!response.ok) throw Error("failed to fetch");
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}
