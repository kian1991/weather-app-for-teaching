import { Position } from "./types";

export const GEOCODER_API_URL =
  "https://geocoding-api.open-meteo.com/v1/search?count=1&language=de&format=json&name=" as const;

export const getWeatherUrl = (pos: Position) =>
  `https://api.open-meteo.com/v1/forecast?latitude=${pos.lat}&longitude=${pos.lng}&currentWeather=true&timezone=Europe%2FBerlin`;
