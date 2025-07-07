import { useStateContext } from "@/contexts/useStateContext";

export const useSelectStyle = () => {
  const { currentMode } = useStateContext();
  const isDarkMode = currentMode === "dark";

  const customStyle = {
    control: (provided) => ({
      ...provided,
      backgroundColor: isDarkMode ? "#171717" : "#fff", // bg-gray-700 : bg-gray-50
      borderColor: isDarkMode ? "#2e2e2e" : "#d1d5db", // border-gray-600 : border-gray-300
      color: isDarkMode ? "#f9fafb" : "#1f2937", // text-gray-100 : text-gray-900
      boxShadow: "none",
      "&:hover": {
        borderColor: isDarkMode ? "#6b7280" : "#9ca3af", // gray-500 : gray-400
      },
    }),
    singleValue: (provided) => ({
      ...provided,
      color: isDarkMode ? "#f9fafb" : "#1f2937",
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: isDarkMode ? "#171717" : "#ffffff", // bg-gray-900 : bg-white
      border: `1px solid ${isDarkMode ? "#2e2e2e" : "#e5e7eb"}`, // border-gray-700 : border-gray-200
      boxShadow:
        "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused
        ? isDarkMode
          ? "#222"
          : "#e5e7eb" // bg-gray-700 : bg-gray-200
        : isDarkMode
        ? "#171717"
        : "#ffffff", // bg-gray-900 : bg-white
      color: state.isFocused
        ? isDarkMode
          ? "#f9fafb"
          : "#1f2937" // text-gray-100 : text-gray-900
        : isDarkMode
        ? "#f9fafb"
        : "#1f2937", // text-gray-100 : text-gray-900
      "&:active": {
        backgroundColor: isDarkMode ? "#171717" : "#d1d5db", // bg-gray-600 : bg-gray-300
      },
    }),
    input: (provided) => ({
      ...provided,
      color: isDarkMode ? "#f9fafb" : "#1f2937",
    }),
    placeholder: (provided) => ({
      ...provided,
      color: isDarkMode ? "#9ca3af" : "#6b7280",
    }),
  };

  return customStyle;
};
