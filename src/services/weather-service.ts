import { useQuery } from "@tanstack/react-query";
import { getWeatherUrl } from "../constants";
import { Position, WeatherApiResponse } from "../types";

export const useWeather = (position: Position | null) =>
  useQuery<WeatherApiResponse>({
    queryKey: ["weather", position?.lat, position?.lng],
    enabled: Boolean(position),
    queryFn: async () => {
      const response = await fetch(getWeatherUrl(position!));
      return await response.json();
    },
  });
