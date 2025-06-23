import { createContext, useContext, useState } from "react";

export const stateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [currentMode, setCurrentMode] = useState("light");
  const [isOpen, setIsOpen] = useState(false);

  const setMode = (e) => {
    setCurrentMode(e.target.value);

    localStorage.setItem("themeMode", e.target.value);
    setIsOpen(false);
  };

  return (
    <stateContext.Provider
      value={{ currentMode, setCurrentMode, isOpen, setIsOpen, setMode }}
    >
      {children}
    </stateContext.Provider>
  );
};
