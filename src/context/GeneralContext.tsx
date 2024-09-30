/*import React, { useContext, createContext, useState, ReactNode } from "react";

// Definiáljuk a kontextust
interface GeneralContextProps {
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

// Inicializáljuk a kontextust, ahol a típusa lehet GeneralContextProps vagy undefined
const GeneralContext = createContext<GeneralContextProps | undefined>(undefined);

// A GeneralContext komponens
export const GeneralContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [toggle, setToggle] = useState<boolean>(true);

  return (
    <GeneralContext.Provider value={{ toggle, setToggle }}>
      {children}
    </GeneralContext.Provider>
  );
};

// A MyGeneralContext hook
export const useGeneralContext = (): GeneralContextProps => {
  const context = useContext(GeneralContext);
  if (!context) {
    throw new Error("?");
  }
  return context;
};*/
// Definiáljuk a kontextust
import React, { useContext, createContext, useState, ReactNode } from "react";
interface GeneralContextProps {
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  hoveredItem: string | null;
  setHoveredItem: React.Dispatch<React.SetStateAction<string | null>>;
}

// Inicializáljuk a kontextust, ahol a típusa lehet GeneralContextProps vagy undefined
const GeneralContext = createContext<GeneralContextProps | undefined>(undefined);

// A GeneralContext komponens
export const GeneralContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [toggle, setToggle] = useState<boolean>(true);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <GeneralContext.Provider value={{ toggle, setToggle, hoveredItem, setHoveredItem }}>
      {children}
    </GeneralContext.Provider>
  );
};

// A MyGeneralContext hook
export const useGeneralContext = (): GeneralContextProps => {
  const context = useContext(GeneralContext);
  if (!context) {
    throw new Error("Context must be used within a GeneralContextProvider");
  }
  return context;
};

