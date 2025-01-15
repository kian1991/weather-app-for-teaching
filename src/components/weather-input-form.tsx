import { FormEvent, useEffect, useState } from "react";
import { Position } from "../types";
import { getPositionByCityname } from "../services/geolocation-service";
import { Input } from "./ui/input";
import { ButtonPrimary } from "./ui/button-primary";

type WeatherInputFormProps = {
  onCityInput: (position: Position) => void;
};

export function WeatherInputForm({ onCityInput }: WeatherInputFormProps) {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState<string>("");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      handleInputChange(inputValue);
    }, 350);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [inputValue]);

  async function handleInputChange(city: string) {
    if (!city) return;
    const position = await getPositionByCityname(city.toString());
    if (!position) {
      setErrorMessage("Couldnt find location! Try again.");
      return;
    }
    // call callback function from props
    onCityInput(position);
    // reset text
    setErrorMessage(null);
  }

  return (
    <div className="flex flex-col gap-1 text-center">
      <div className="flex gap-1">
        <Input
          value={inputValue}
          inputSize={"lg"}
          type="text"
          name="city"
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
      {errorMessage && (
        <span className="font-mono text-xl text-red-300">{errorMessage}</span>
      )}
    </div>
  );
}
