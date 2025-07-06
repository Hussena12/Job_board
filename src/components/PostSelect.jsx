import React from "react";
import Select from "react-select";
import { useSelectStyle } from "@/hooks/useSelectStyle";

const PostSelect = ({
  options,
  label,
  className = "",
  value,
  onChange,
  placeholder,
}) => {
  const customSelectStyles = useSelectStyle();

  return (
    <div>
      <div className="flex  ">
        <div>
          <label className="text-gray-600 dark:text-gray-300 text-sm">
            {label}
          </label>
          <Select
            isDarkMode={isDarkMode}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            isClearable
            isSearchable
            styles={customSelectStyles}
            options={options}
            className={` ${className} dark:bg-[#171717]`}
            menuPosition="fixed"
          />
        </div>
      </div>
    </div>
  );
};

export default PostSelect;
