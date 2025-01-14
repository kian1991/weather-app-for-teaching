import { Position, WeatherApiResponse } from "../types";

export async function getWeatherData({
  lat,
  lng,
}: Position): Promise<WeatherApiResponse | null> {
  const weatherApiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&currentWeather=true&timezone=Europe%2FBerlin`;

  try {
    const response = await fetch(weatherApiUrl);
    if (!response.ok) throw Error("failed to fetch");
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}
