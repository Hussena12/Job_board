import { useState, useEffect } from "react";
import { stateContext } from "./useStateContext";

export const ContextProvider = ({ children }) => {
  const [currentMode, setCurrentMode] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("themeMode") || "light";
    }
    return "light";
  });

  const [isOpen, setIsOpen] = useState(false);
  const [isToggled, setIsToggled] = useState(false);

  useEffect(() => {
    if (currentMode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("themeMode", currentMode);
  }, [currentMode]);

  const setMode = (mode) => {
    setCurrentMode(mode);
    setIsOpen(false);
  };

  const toggleDark = () => {
    setMode("dark");
  };

  const toggleLight = () => {
    setMode("light");
  };

  return (
    <stateContext.Provider
      value={{
        currentMode,
        setCurrentMode,
        isOpen,
        setIsOpen,
        setMode,
        toggleDark,
        toggleLight,
        isToggled,
        setIsToggled,
      }}
    >
      {children}
    </stateContext.Provider>
  );
};
