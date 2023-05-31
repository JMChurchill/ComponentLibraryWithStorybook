import react, { useCallback, useEffect, useState } from "react";

export function useLocalStorage<T>(key: string, defaultValue: T) {
  return useStorage<T>(key, defaultValue, localStorage);
}
export function useSessionStorage<T>(key: string, defaultValue: T) {
  return useStorage<T>(key, defaultValue, sessionStorage);
}

// make functions stored in local storage envokable
function evaluateFunctions<T>(value: T | undefined) {
  if (value === undefined || null) return value;
  if (Array.isArray(value)) {
    // Check contents of array
    let actionalableArray: any[] = [];
    value.map((item) => {
      // If object, loop through and convert functions to text for storage
      if (typeof item === "object" && item !== null) {
        let actionalableObject: any = {};
        for (const [key, v] of Object.entries(item as object)) {
          // check if function
          if (typeof v === "string" && v.includes("<%func%>")) {
            const funcString = v.replace("<%func%>", "");
            const func = eval("(" + funcString + ")");

            actionalableObject[key] = func;
          } else {
            actionalableObject[key] = v;
          }
        }
        actionalableArray.push(actionalableObject);
      } else {
        actionalableArray.push(item);
      }
    });
    return actionalableArray;
  } else if (typeof value === "object" && value !== null) {
    let actionalableObject: any = {};
    for (const [key, v] of Object.entries(value as object)) {
      // check if function
      if (typeof v === "string" && v.includes("<%func%>")) {
        const funcString = v.replace("<%func%>", "");
        const func = eval("(" + funcString + ")");
        actionalableObject[key] = func;
      } else {
        actionalableObject[key] = v;
      }
    }
    return actionalableObject;
  } else {
    return value;
  }
}

function useStorage<T>(
  key: string,
  defaultValue: T,
  storageObject: Storage | Storage
): [
  T | undefined,
  react.Dispatch<react.SetStateAction<T | undefined>>,
  () => void
] {
  const [value, setValue] = useState<T | undefined>(() => {
    const jsonValue = storageObject.getItem(key);
    if (jsonValue !== null) return evaluateFunctions<T>(JSON.parse(jsonValue));

    if (typeof defaultValue === "function") {
      return defaultValue();
    } else {
      return defaultValue;
    }
  });

  useEffect(() => {
    if (value === undefined) return storageObject.removeItem(key);

    if (Array.isArray(value)) {
      // Check contents of array
      let stringObjectArray: any[] = [];
      value.map((item) => {
        // If object, loop through and convert functions to text for storage
        if (typeof item === "object" && item !== null) {
          let valueAsStringObject: any = {};
          for (const [key, v] of Object.entries(item as object)) {
            if (typeof v === "function") {
              // append "<%func%>" to function so can be identified later
              valueAsStringObject[key] = "<%func%>" + v.toString();
            } else {
              valueAsStringObject[key] = v;
            }
          }
          stringObjectArray.push(valueAsStringObject);
        } else {
          stringObjectArray.push(item);
        }
      });
      storageObject.setItem(key, JSON.stringify(stringObjectArray));
    } else if (typeof value === "object" && value !== null) {
      // If object, loop through and convert functions to text for storage
      let valueAsStringObject: any = {};
      for (const [key, v] of Object.entries(value as object)) {
        if (typeof v === "function") {
          valueAsStringObject[key] = v.toString();
        } else {
          valueAsStringObject[key] = v;
        }
      }
      storageObject.setItem(key, JSON.stringify(valueAsStringObject));
    } else {
      storageObject.setItem(key, JSON.stringify(value));
    }
  }, [key, value, storageObject]);

  const remove = useCallback(() => {
    setValue(undefined);
  }, []);

  return [value, setValue, remove];
}
