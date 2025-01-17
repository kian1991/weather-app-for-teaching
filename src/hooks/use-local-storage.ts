import { useState } from "react";

export function useSimpleLocalStorage<T>(key: string, initialValue: T) {
  const getLocalStorageValue = () => {
    const value = localStorage.getItem(key);
    if (value === null) return initialValue;
    return JSON.parse(value);
  };

  const [localStoreageValue, _setLocalStoreageValue] = useState<T>(
    getLocalStorageValue(),
  );

  const setLocalStoreageValue = (value: T) => {
    _setLocalStoreageValue(value);
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };

  return [localStoreageValue, setLocalStoreageValue] as const;
}
