import { useEffect, useState } from "react";

export function useLocalStorage<T>(
  key: string,
  defaultValue: T
): [T, (value: T) => void] {
  return useStorage<T>(key, defaultValue, localStorage);
}
export function useSessionStorage<T>(
  key: string,
  defaultValue: T
): [T, (value: T) => void] {
  return useStorage<T>(key, defaultValue, sessionStorage);
}
function useStorage<T>(
  key: string,
  defaultValue: T,
  storageObject: Storage
): [T, (value: T) => void] {
  const [value, setValue] = useState<T>(() => {
    const jsonValue = storageObject.getItem(key);
    if (jsonValue) return JSON.parse(jsonValue);
    return defaultValue;
  });

  useEffect(() => {
    if (value === undefined) storageObject.removeItem(key);
    else storageObject.setItem(key, JSON.stringify(value));
  }, [key, value, storageObject]);

  return [value, setValue];
}
