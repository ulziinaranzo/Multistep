import { createContext } from "react";

export const SaveContext = createContext({});

export const SaveDataProvider = () => {
  return (
    <SaveContext.Provider value={{ saveData, setSaveData }}>
      {children}
    </SaveContext.Provider>
  );
};
