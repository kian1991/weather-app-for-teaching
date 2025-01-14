export type Position = {
  lat: number;
  lng: number;
};

export type Size = "sm" | "md" | "lg";

export type GeocoderResponse = {
  results: Array<{
    id: number;
    name: string;
    latitude: number;
    longitude: number;
    elevation: number | null;
    feature_code: string;
    country_code: string;
    admin1_id: number | null;
    admin2_id: number | null;
    admin3_id: number | null;
    admin4_id: number | null;
    timezone: string;
    population: number | null;
    postcodes: string[];
    country_id: number;
    country: string;
    admin1: string;
    admin2: string | null;
    admin3: string | null;
    admin4: string | null;
  }>;
};

export type WeatherApiResponse = {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  current_weather_units: {
    time: string;
    interval: string;
    temperature: string;
    windspeed: string;
    winddirection: string;
    is_day: string;
    weathercode: string;
  };
  current_weather: {
    time: string; // ISO 8601 format
    interval: number;
    temperature: number;
    windspeed: number;
    winddirection: number;
    is_day: 0 | 1;
    weathercode: number; // WMO weather code
  };
};
