import { useEffect, useState } from "react";

export function useSimpleDebounce<T>(inputValue: T, delay: number = 500) {
  const [debouncedValue, setDebouncedValue] = useState<T | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(inputValue);
    }, delay);
    return () => {
      // cleanup function
      clearTimeout(timer);
    };
  }, [inputValue, delay]);

  return [debouncedValue] as const;
}
