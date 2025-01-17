import { useQuery } from "@tanstack/react-query";
import { GEOCODER_API_URL } from "../constants";
import { GeocoderResponse, Position } from "../types";

export const useGeolocation = (cityName: string) =>
  useQuery<Position>({
    queryKey: ["geolo", cityName],
    enabled: cityName !== "",
    queryFn: async () => {
      const response = await fetch(GEOCODER_API_URL + cityName);
      const data: GeocoderResponse = await response.json();
      const { latitude, longitude } = data.results[0];
      return { lat: latitude, lng: longitude };
    },
  });
