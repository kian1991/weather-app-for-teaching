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
  current_units: {
    time: string;
    interval: string;
    temperature_2m: string;
    relative_humidity_2m: string;
    apparent_temperature: string;
    is_day: string;
    precipitation: string;
    rain: string;
    showers: string;
    snowfall: string;
    weather_code: string;
    cloud_cover: string;
    pressure_msl: string;
    surface_pressure: string;
    wind_speed_10m: string;
    wind_direction_10m: string;
    wind_gusts_10m: string;
  };
  current: {
    time: string;
    interval: number;
    temperature_2m: number;
    relative_humidity_2m: number;
    apparent_temperature: number;
    is_day: number;
    precipitation: number;
    rain: number;
    showers: number;
    snowfall: number;
    weather_code: number;
    cloud_cover: number;
    pressure_msl: number;
    surface_pressure: number;
    wind_speed_10m: number;
    wind_direction_10m: number;
    wind_gusts_10m: number;
  };
};
