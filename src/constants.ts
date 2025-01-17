import { Position } from "./types";

export const GEOCODER_API_URL =
  "https://geocoding-api.open-meteo.com/v1/search?count=1&language=de&format=json&name=" as const;

export const getWeatherUrl = (pos: Position) =>
  `https://api.open-meteo.com/v1/forecast?latitude=${pos.lat}&longitude=${pos.lng}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,showers,snowfall,weather_code,cloud_cover,pressure_msl,surface_pressure,wind_speed_10m,wind_direction_10m,wind_gusts_10m&timezone=Europe%2FBerlin`;
