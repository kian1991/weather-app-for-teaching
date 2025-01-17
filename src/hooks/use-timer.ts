import { useState, useRef } from "react";

const _intToTimeString = (int: number) => {
  const hours = Math.floor(int / 3600);
  const minutes = Math.floor((int % 3600) / 60);
  const seconds = int % 60;

  return `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
};

export const useTimer = () => {
  const [time, setTime] = useState<number>(0);

  const timer = useRef<number>();

  const start = () => {
    timer.current = setInterval(() => {
      setTime((prev) => ++prev);
    }, 10);
  };

  const stop = () => {
    if (timer.current) {
      clearInterval(timer.current);
      timer.current = undefined;
    }
  };

  return {
    timeString: _intToTimeString(time),
    start,
    stop,
  };
};
