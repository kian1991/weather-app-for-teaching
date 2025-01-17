import { useEffect, useState } from "react";
import { Position } from "../types";
import { Input } from "./ui/input";
import { useGeolocation } from "../services/geolocation-service";

type WeatherInputFormProps = {
  onPositionChange: (position: Position) => void;
};

export function WeatherInputForm({ onPositionChange }: WeatherInputFormProps) {
  const [inputValue, setInputValue] = useState<string>("");
  const [debouncedValue, setDebouncedValue] = useState<string>(inputValue);

  const { data, error, isLoading } = useGeolocation(debouncedValue);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedValue(inputValue);
    }, 350);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [inputValue]);

  useEffect(() => {
    if (!data) return;
    onPositionChange(data);
  }, [data, onPositionChange]);

  return (
    <div className="flex flex-col gap-1 text-center">
      {isLoading && (
        <div className="absolute left-7 top-7 animate-spin text-2xl text-white">
          🤯
        </div>
      )}
      <div className="flex flex-col gap-2">
        {error && (
          <span className="font-mono text-xl text-red-300">
            {error.message}
          </span>
        )}
        <Input
          value={inputValue}
          inputSize={"lg"}
          type="text"
          name="city"
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
    </div>
  );
}
