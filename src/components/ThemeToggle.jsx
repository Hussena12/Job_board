import React from "react";
import { useStateContext } from "@/contexts/useStateContext";

const ThemeToggle = () => {
  const { currentMode, toggleDark, toggleLight } = useStateContext();
  return (
    <div className="absolute -top-12 right-0 w-48 bg-white dark:bg-[#242424] rounded-sm flex  flex-col shadow-lg border dark:border-neutral-700 z-50">
      <span
        onClick={toggleDark}
        className="text-gray-800 dark:text-gray-400 rounded-sm text-xs m-1 p-1 hover:bg-gray-100 dark:hover:bg-[#383535a4] flex items-center gap-3 "
      >
        <p
          className={`w-[0.45rem] h-[0.45rem] rounded-full ml-1 transition-all duration-300
           ${
             currentMode === "dark"
               ? "bg-gray-600 dark:bg-gray-400 opacity-100"
               : "bg-transparent opacity-0"
           }`}
        ></p>

        <p>Dark</p>
      </span>
      <span
        onClick={toggleLight}
        className=" text-gray-800 dark:text-gray-400 rounded-sm text-xs m-1 p-1 hover:bg-gray-100 dark:hover:bg-[#383535a4] flex items-center gap-3"
      >
        <p
          className={` w-[0.45rem] h-[0.45rem] rounded-full ml-1 transition-all duration-300
           ${
             currentMode === "light"
               ? "bg-gray-600 dark:bg-gray-400  opacity-100"
               : "bg-transparent opacity-0"
           }`}
        ></p>

        <p>Light</p>
      </span>
    </div>
  );
};

export default ThemeToggle;
