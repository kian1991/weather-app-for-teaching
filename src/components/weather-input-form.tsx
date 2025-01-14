import { FormEvent, useState } from "react";
import { Position } from "../types";
import { getPositionByCityname } from "../services/geolocation-service";
import { Input } from "./ui/input";
import { ButtonPrimary } from "./ui/button-primary";

type WeatherInputFormProps = {
  onCityInput: (position: Position) => void;
};

export function WeatherInputForm({ onCityInput }: WeatherInputFormProps) {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault(); // Unterbindet standard verhalten i.e. page refresh etc.

    const formData = new FormData(e.currentTarget);
    const city = formData.get("city");

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
    // TODO: clear input field (useRef)
    // reset input field
    e.currentTarget.reset();
  }

  return (
    <div className="flex flex-col gap-1 text-center">
      <form className="flex gap-1" onSubmit={handleSubmit}>
        <Input inputSize={"lg"} type="text" name="city" />
        <ButtonPrimary
          size="lg"
          type="submit"
          onClick={() => console.log("hallo")}
        >
          SEARCH
        </ButtonPrimary>
      </form>
      {errorMessage && (
        <span className="font-mono text-xl text-red-300">{errorMessage}</span>
      )}
    </div>
  );
}
