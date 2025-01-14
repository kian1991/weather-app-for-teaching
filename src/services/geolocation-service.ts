import { GEOCODER_API_URL } from "../constants";
import { GeocoderResponse, Position } from "../types";

export async function getPositionByCityname(
  cityName: string,
): Promise<Position | null> {
  // fetch data from api
  try {
    const response = await fetch(GEOCODER_API_URL + cityName);
    if (!response.ok) throw Error("failed to fetch");
    const data: GeocoderResponse = await response.json();
    const { latitude, longitude } = data.results[0];
    return { lat: latitude, lng: longitude };
  } catch (error) {
    console.error(error);
    return null;
  }
}
